import { read, utils } from 'xlsx';

export const fetchExcelData = async () => {
  try {
    const response = await fetch('/data/events.xlsx');
    const arrayBuffer = await response.arrayBuffer();
    
    const workbook = read(arrayBuffer, { type: 'array' });
    const eventsData = {};
    
    // Process each sheet (year)
    workbook.SheetNames.forEach(sheetName => {
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = utils.sheet_to_json(worksheet);
      
      // Process the images column and handle date formatting
      const processedData = jsonData.map(row => ({
        name: row.name || 'Untitled Event',
        description: row.description || 'No description available',
        date: formatDate(row.date) || 'Date not specified',
        reportUrl: row.link || '#',
        images: row.images ? row.images.split(',').map(img => img.trim()) : ['/placeholder-image.jpg']
      }));
      
      eventsData[sheetName] = processedData;
    });
    
    return eventsData;
  } catch (error) {
    throw new Error('Error loading Excel file: ' + error.message);
  }
};

// Helper function to format dates consistently
const formatDate = (dateValue) => {
  if (!dateValue) return null;
  
  try {
    // Handle Excel date serial numbers
    if (typeof dateValue === 'number') {
      // Excel dates are counted from 1900-01-01
      const date = new Date(Math.round((dateValue - 25569) * 86400 * 1000));
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    
    // Handle string dates
    if (typeof dateValue === 'string') {
      const date = new Date(dateValue);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
      // If it's already a formatted string, return as is
      return dateValue;
    }
    
    return null;
  } catch (error) {
    console.warn('Error formatting date:', error);
    return dateValue?.toString() || null;
  }
};
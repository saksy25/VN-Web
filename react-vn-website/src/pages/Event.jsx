import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import EventB from '../components/EventCardB';
import EventR from '../components/EventCardR';
import { fetchExcelData } from '../utils/excelParser';
import ScrollToTopButton from '../components/Scroll';
import EventImage from '../assets/Event.png'

const EventsPage = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [eventsData, setEventsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchExcelData();
        setEventsData(data);
        setSelectedYear(Object.keys(data)[3]); // Select current year by default
      } catch (err) {
        setError(err.message);
      }
    };

    loadData();
  }, []);

  const renderEventTable = (events, year) => (
    <div 
      key={year} // Add key here to force remount
      className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards] overflow-x-auto"
    >
      <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Event Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Report</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr 
            key={index} 
            className="border-t hover:bg-gray-50 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {event.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {event.date}
              </td>
              <td className="px-6 py-4 text-sm">
              {event.reportUrl && event.reportUrl !== '#' ? (
                  <a 
                    href={event.reportUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    View Report
                  </a>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (!eventsData) {
    return (
      <div className="min-h-screen">
        <Hero 
          title="Events"
          description="Celebrating Ideas and Innovation!"
          imageSrc={EventImage}
        />
        <main className="max-w-7xl mx-auto px-4 py-12">
          {error ? (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero 
        title="EVENTS"
        description="Celebrating Ideas and Innovation!"
        imageSrc={EventImage}
      />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.keys(eventsData).map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`
                px-6 py-2 rounded-full text-lg shadow-md font-medium transition-all duration-300 transform hover:scale-110
                ${selectedYear === year 
                  ? 'bg-red-600 text-white' 
                  : 'bg-white border-red-600 hover:bg-gradient-to-r from-navy-400 to-gray-100 text-gray-700'
                }
              `}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {selectedYear === '2024-25' ? (
            // Card layout for current year with description
            eventsData[selectedYear]?.map((event, index) => (
              <div
                key={index}
                className="opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.4}s` }}
              >
              {index % 2 === 0 ? (
                <EventB
                  key={index}
                  name={event.name}
                  description={event.description}
                  date={event.date}
                  reportUrl={event.reportUrl !== '#' ? event.reportUrl : null}
                  images={event.images}
                />
              ) : (
                <EventR
                  key={index}
                  name={event.name}
                  description={event.description}
                  date={event.date}
                  reportUrl={event.reportUrl !== '#' ? event.reportUrl : null}
                  images={event.images}
                />
              )}
            </div>
            ))
          ) : (
            // Table layout for previous years with date
            renderEventTable(eventsData[selectedYear], selectedYear)
          )}
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default EventsPage;
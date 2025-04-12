import { AlertCircle } from 'lucide-react';

export default function StaticNoteComponent() {
  return (
    <div className="relative inline-flex items-center">
      {/* Circular icon */}
      <div
        className="bg-red-500 text-white p-2 rounded-full shadow-md z-10 flex items-center justify-center 
            left-4 h-10 w-10"
      >
        <AlertCircle size={20} />
      </div>
      
      {/* Note panel displayed by default */}
      <div
        className="bg-white py-3 px-4 shadow-lg ml-2 whitespace-wrap border-l-4 border-red-500"
      >
        <div className="text-sm font-medium text-red-600">
          Access to the event report is restricted to authorized personnel only.
        </div>
      </div>
    </div>
  );
}
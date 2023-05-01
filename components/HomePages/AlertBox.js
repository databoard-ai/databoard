import React from 'react';

const AlertBox = ({ type, message }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
  const textColor = type === 'success' ? 'text-green-700' : type === 'error' ? 'text-red-700' : 'text-blue-700';

  return (
    <div className={`w-full ${bgColor} ${textColor} px-4 py-2 rounded-md text-center`}>
      {message}
    </div>
  );
}

export default AlertBox;

import React from 'react';

const Toast = ({ message, type }) => {
  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-sucess';
      case 'error':
        return 'bg-error';
      case 'warning':
        return 'bg-warning';
      default:
        return 'bg-info';
    }
  };

  return (
    <div  className={`fixed top-4 right-4 p-4 rounded-md text-white w-96 z-9999 mt-40 mr-60 bg-success`}>
    <p className="text-lg font-semibold mb-2 text-pureWhite">{type.toUpperCase()}</p>
    <p className="text-base text-pureWhite">{message}</p>
  </div>
  );
};

export default Toast;

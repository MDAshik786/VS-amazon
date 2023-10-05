import React from 'react';
import { addDaysToDate } from './Date';


export const DateFormate = ({data}) => {
  const currentDate = new Date();
  const futureDate = addDaysToDate(currentDate, data);

  const formattedDate = futureDate.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateFormate;
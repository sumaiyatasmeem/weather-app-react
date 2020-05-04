import React from 'react';
function DateCalc(){
    const dates=(date)=>{
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        let month= months[date.getMonth()];
        let day=days[date.getDay()];
        let todaysDate = date.getDate();
        let year= date.getFullYear(); 
        return `${day}, ${todaysDate} ${month} ${year}`
      }
      return(
          <div className="text-center text-white">
          {dates(new Date())}
          </div>
      )

      
}
export default DateCalc
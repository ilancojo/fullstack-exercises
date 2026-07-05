import { useEffect, useState } from "react"

function Clock() {                      //useState(null)
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())//להתחיל מהזמן הנוכחי -כדי שלא יהיה רגע ריק במסך

  useEffect(() => {
    //2. console.log("Effect started")
    const intervalId = setInterval(() => {
        //4. console.log("Tick:", new Date().toLocaleTimeString())
        // עדכן את currentTime לזמן חדש
        setCurrentTime(new Date().toLocaleTimeString())
        //רעיונית React לא רוצה שנשנה state ישירות
        //currentTime = new Date().toLocaleTimeString();
        //setCurrentTime(currentTime);
    }, 1000);


    return () => {
      //3.  console.log("Cleanup interval:", intervalId)
      // נקה את intervalId
        clearInterval(intervalId)
    }
  }, [])

    //1. console.log("Clock render:", currentTime)
  return (
    <div>
      {currentTime}
    </div>
  )
}

export default Clock
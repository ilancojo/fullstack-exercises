import { useEffect, useState } from "react"

function Clock() {
  const [currentTime, setCurrentTime] = useState(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      
        // עדכן את currentTime לזמן חדש
        currentTime = new Date().toLocaleTimeString();
        setCurrentTime(currentTime);
    }, 1000);


    return () => {
      // נקה את intervalId
        clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      {currentTime}
    </div>
  )
}

export default Clock
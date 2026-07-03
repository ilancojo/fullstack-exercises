
import { useState } from "react";


function Exercise1() {

  const [gallery, setGallery] = useState({
    images: [
      "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
    currentImg: 0,
  });


  function shiftImageBack() {
    
        setGallery((prevGallery) => (
            {...prevGallery,
            currentImg: prevGallery.currentImg - 1,
  // אם נרצה לעשות בסיבוב את התמונות           
//currentImg:(prevGallery.currentImg - 1 + prevGallery.images.length) %prevGallery.images.length          
        }));
  }

    function shiftImageForward() {
    
        setGallery((prevGallery) => ({
        ...prevGallery,
        currentImg: prevGallery.currentImg + 1,
  // אם נרצה לעשות בסיבוב את התמונות       
 //currentImg: (prevGallery.currentImg + 1) % prevGallery.images.length,
       

         }));
  }



  return (
    <div>             
        <button className="back" onClick={shiftImageBack}>
            Back
        </button>

        <img  /*src של תמונה צריך לקבל מחרוזת של כתובת תמונה, לא פונקציה */
            src={gallery.images[gallery.currentImg]}
            alt="fruit"
        />

        <button className="forward" onClick={shiftImageForward}>
            Forward
         </button>
    </div>
  );
}

export default Exercise1;

//גישה נוספת היא לעצור את התמונות שלא יזוזו אחרי האינדקסים
//BACK 
//<button disabled={gallery.currentImg === 0}>
//Forward
//<button disabled={gallery.currentImg === gallery.images.length - 1}></button>
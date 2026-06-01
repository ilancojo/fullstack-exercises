
console.log("This is exercise 3:")  
/*
Exercise 3
Weather Decision Making. Create variables for temperature (in Celsius) and weather condition (sunny, rainy, cloudy). Use nested conditionals to decide what activity to recommend:

If sunny and temp > 24°C: "Go to the beach"
If sunny and temp 15-24°C: "Go for a walk"
If sunny and temp < 15°C: "Stay inside and read"
If rainy: "Watch a movie indoors"
If cloudy and temp > 21°C: "Go hiking"
If cloudy and temp <= 21°C: "Visit a museum"
*/

let temperature = 20;
let weather = "sunny";

function weatherDecision(wether,temp){

    if (temp == "cloudy"){
        if (temp > 21){
            console.log( "Go hiking");
        }else{
            console.log("Visit a museum");
        }

    } else if (wether == "sunny"){
                if (temp > 21) {
                     console.log("Go to the beach");
                } else if ((temp <= 24)&&(temp > 15)){
                    console.log("Go for a walk");
                } else{
                    console.log("Stay inside and read");
                }
    } else{
         console.log("Watch a movie indoors")
    }
}

weatherDecision(weather,temperature);
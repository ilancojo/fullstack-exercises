console.log("Exercise 3 :");


function logData( d ){
    console.log(d);
}

const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};


displayData(console.error, logData, "I like to party");


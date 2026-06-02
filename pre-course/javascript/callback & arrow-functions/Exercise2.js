console.log("Exercise 2 :");


const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

const getTime = function (action) {
  const time = new Date()
  action(time);
};

getTime(returnTime)


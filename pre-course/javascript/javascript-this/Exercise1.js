
console.log("Exercise 1:");



const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      hungry = false;
      console.log('Im no longer hungry!')
    }
  }
}  

person.feed() //should log "I'm no longer hungry"

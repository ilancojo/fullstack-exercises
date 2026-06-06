
console.log("This is exercise 1:")  ;

class UniqueArray {
    constructor() {
        this.items = [];     
        this.itemsMap = {};  
        this.length = 0;      
    }
    add(item) {
        if (!this.exists(item)) {
            this.items[this.length] = item;
            this.itemsMap[item] = true;
            this.length++;
         }
    }
     showAll() {
        console.log(this.items);
      }
    exists(item) {
        return this.itemsMap[item] ? true : false; 
    }

    get(index) {    // קבלת איבר לפי אינדקס
        if (index >= 0 &&  index < this.length) {
             return this.items[index];
        }
        return -1;
    }
}


const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll();

uniqueStuff.add("toy");
uniqueStuff.showAll(); 

console.log(uniqueStuff.exists("toy")); 
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");

console.log(uniqueStuff.get(2)); // מציג: "hydrogen"
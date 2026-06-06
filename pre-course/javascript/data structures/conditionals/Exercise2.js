
console.log("This is exercise 2:")  

class UniqueArrayAdvanced {
    constructor() {
        this.items = [];
        this.itemsMap = {}; 
        this.length = 0;
    }

    _stringifyItem(item) {// פונקציית עזר להמרת כל סוג נתון למחרוזת ייחודית שתייצג אותו
        if (typeof item  === 'object'  && item !== null) {
            return JSON.stringify(item); // הופך אובייקטים או מערכים למחרוזת כדי שיוכלו לשמש כמפתח ייחודי באובייקט
        }
         return item; 
    }

    add(item) {
        if (!this.exists(item)) {
            const stringified = this._stringifyItem(item);
            this.items[this.length] = item;
            this.itemsMap[stringified] = true;
            this.length++;
        }
    }
    showAll() {
          console.log(this.items);
    }
    exists(item) {
        const stringified = this._stringifyItem(item);
        return this.itemsMap[stringified] ? true : false;
    }

    get(index) {
        if (index >= 0 && index < this.length) {
            return this.items[index];
        }
        return -1;
    }
}


const advancedStuff = new UniqueArrayAdvanced();
advancedStuff.add({x: 3});
advancedStuff.add({x: 3}); 

advancedStuff.add([1, 2, 3]);
advancedStuff.add(42);

advancedStuff.showAll(); 

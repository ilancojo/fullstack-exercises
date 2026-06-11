///Lowest Common Ancestor

class BSNode {
      constructor(value) {
            this.value = value;
            this.leftChild = null;
            this.rightChild = null;
      }
      insertLeft(value) {
            if (!this.leftChild) {
                  this.leftChild = new BSNode(value);
            } else {
                  let newNode = new BSNode(value);
                  newNode.leftChild = this.leftChild;
                  this.leftChild = newNode
            }
      }
      insertNode(newVal) {
            if (!this.value) {
                this.value = newVal
            }
            else if(newVal <= this.value && this.leftChild) {
                this.leftChild.insertNode(newVal)
            }
            else if (newVal <= this.value) {
                this.leftChild = new BSNode(newVal)
            }
            else if (newVal > this.value && this.rightChild) {
                this.rightChild.insertNode(newVal)
            }
            else {
                this.rightChild = new BSNode(newVal)
            }
      }
    
      findNode(val){

            if (this.value === val) {
                return true;
            }
            else if(val <= this.value && this.leftChild) {
                return this.leftChild.findNode(val)
            }
            else if (val > this.value && this.rightChild) {
                return this.rightChild.findNode(val)
            }
            else{
              return false
            }
      }
    
      findCommonParent(val1, val2) {
        // בודקים לאן כל ערך שואף ללכת
        let val1GoesLeft = val1 <= this.value;
        let val2GoesLeft = val2 <= this.value;

        // תרחיש 1: פיצול! אחד שמאלה ואחד ימינה
        if (val1GoesLeft !== val2GoesLeft) {
            return this.value;
        }

        // תרחיש 2 + 3: שניהם הולכים שמאלה
        if (val1GoesLeft && val2GoesLeft) {
            // בודקים אם הגענו לאחד מהם
            if (this.leftChild.value === val1 || this.leftChild.value === val2) {
                return this.value;
            } else {
                // ממשיכים לחפש למטה
                return this.leftChild.findCommonParent(val1, val2);
            }
        }

        // תרחיש 2 + 3: שניהם הולכים ימינה
        if (!val1GoesLeft && !val2GoesLeft) {
            // בודקים אם הגענו לאחד מהם
            if (this.rightChild.value === val1 || this.rightChild.value === val2) {
                return this.value;
            } else {
                // ממשיכים לחפש למטה
                return this.rightChild.findCommonParent(val1, val2);
            }
        }
    }
    
}
 




const letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];

let bSTree = new BSNode();

letters.forEach(X => bSTree.insertNode(X));

    
//Use the following to test

console.log(bSTree.findCommonParent("B", "I")) //should return "H"
console.log(bSTree.findCommonParent("B", "G")) //should return "E"
console.log(bSTree.findCommonParent("B", "L")) //should return "J"
console.log(bSTree.findCommonParent("L", "Y")) //should return "R"
console.log(bSTree.findCommonParent("E", "H")) //should return "J"

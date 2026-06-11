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
    
    removeNode(parent, val) {

        let currentLeftChild =this.leftChild;
        let currentRightChild =this.rightChild;
        let currentValue = this.value ;

        // שלב 1: חיפוש הצומת -רקורסיבי 
        if (val < currentValue && currentLeftChild) {
            return currentLeftChild.removeNode(this, val); //  מעבירים את this בתור ההורה
        } 
        else if (val > currentValue && currentRightChild ) {
            return currentRightChild.removeNode(this, val);
        } 

        //  (this הוא הצומת למחיקה) שלב 2: מצאנו את הצומת 
        else if (val === currentValue) {
            
            // תרחיש 1: אין ילדים בכלל
            if (!currentLeftChild && !currentRightChild ) {
                if (parent.leftChild === this) parent.leftChild = null;
                else if (parent.rightChild === this) parent.rightChild = null;
            }
            
            // תרחיש 2: יש רק ילד שמאלי
            else if ( currentLeftChild &&  !currentRightChild) {
                if (parent.leftChild === this) parent.leftChild = currentLeftChild;
                else if (parent.rightChild === this) parent.rightChild = currentLeftChild;
            }
            // תרחיש 2: יש רק ילד ימני
            else if ( !currentLeftChild && currentRightChild ) {
                if (parent.leftChild === this) parent.leftChild = currentRightChild ;
                else if (parent.rightChild === this) parent.rightChild = currentRightChild ;
            }
            
            // תרחיש 3: יש גם ילד שמאלי וגם ילד ימני
            else if (currentLeftChild && currentRightChild ) {
                
                let maxLeftNode = currentLeftChild;// מחפשים את הערך המקסימלי בצד שמאל
                while (maxLeftNode.rightChild) {
                    maxLeftNode = maxLeftNode.rightChild;
                }
            
                let tempValue = maxLeftNode.value;// שומרים את הערך שמצאנו
                
                // מוחקים את הצומת המקסימלי מהעץ (קוראים לפונקציה שוב כדי למחוק אותו מהתחתית)-רקורסיבי
                this.removeNode(this, tempValue);
                
                // מחליפים את הערך של הצומת הנוכחי בערך המקסימלי שמצאנו
                this.value = tempValue;
            }
            
        }
        return parent; 
    }





}
 


const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));

console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied) 
    
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5) 

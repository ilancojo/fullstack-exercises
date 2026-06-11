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
    
    
}


const letters = ["H", "E", "S", "G", "L", "Y", "I"]

let bSTree = new BSNode()

letters.forEach(X => bSTree.insertNode(X))

console.log(bSTree)

    
//Use the following to test
console.log(bSTree.findNode("H")) // should print true
console.log(bSTree.findNode("G")) // should print true
console.log(bSTree.findNode("Z")) // should print false
console.log(bSTree.findNode("F")) // should print false
console.log(bSTree.findNode("y")) // should print false - we didn't make the tree case sensitive!

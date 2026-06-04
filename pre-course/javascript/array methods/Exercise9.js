
console.log("Exercise 9:");

/*Use .reduce() to create an object that counts how many students received each letter grade.
Grading scale:
A: 90-100
B: 80-89
C: 70-79
F: Below 70
Expected Output: { A: 5, B: 7, C: 3, F: 0 }
*/


let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81];

                                  ///sum - sum in evry "index" of the object 
let studentGrad = studentScores.reduce((sum,item)=> {
  

 (item >= 90 ) ? sum.A +=1 : (item >= 80 ) ? sum.B +=1 : (item >= 70 ) ? sum.C +=1 : sum.F +=1;
  
 return sum;


},{ A: 0, B:0 , C:0 , F:0});

console.log(studentGrad);






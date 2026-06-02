console.log("Exercise 6:");




function armStrongNumber(num_s){    //153

    let sum = 0 ;
    
    for (let i of num_s) {
        let digit = Number(i);
        sum += digit * digit * digit;
    }
    if (num_s == sum){
        console.log("The number -" ,sum ,"is Armstrong:");
    }
}

    for (let i = 100 ;i < 1000; i++){

            armStrongNumber(String(i));
    }





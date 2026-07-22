// switch statement 

// why do we need switch statements 

// when a user enter a a day number  like 1 = monday 
// we can use else if if there are many fixed values it become long so we use

// syntax 
/*

switch (expression){

case value1:
    //code
    break;
case value2:
    //code
    break;
 case value3:
    //code
    break;
case value4:
    //code
    break;
case value5:
    //code
    break;
}
*/

// aa basic exam evulation code 
let grade = "A";

switch(grade){

    case "A":
    case "B":
        console.log("Excellent");
        break;

    case "C":
        console.log("Good");
        break;

    default:
        console.log("Fail");

}


// in real world we user for  atm , calculator   and many more

// realworld example 


let a = 2;
let b = 3;
let operat = "*";

switch (operat){
    case("+"):
        console.log( a+b);
        break;
    case("-"):
        console.log( a-b)
        break;
    case("*"):
        console.log( a*b)
        break;
    case("/"):
        console.log( a/b)
        break;
    default:
        console.log("invalid");
            
                
}
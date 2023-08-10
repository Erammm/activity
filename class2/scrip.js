//swith loop
//var char="+"
//var number1=1
//var number2=2

//switch(char)
//{
  //  case "+":
    //console.log(number1+number2);
    //break;
    //case "-":
    //console.log(number1-number2);
    //break;
    //default:
    //console.log("thank u")
//}




//while loop

// var counter=1

// while(counter <= 50)
// {
//     console.log(counter)
//     counter++
// }




//do while loop

// var counter=51

// do
// {
//     console.log(counter)
//     counter++
// }
//     while(counter<=50)



// var number=[1,2,3,4,5,6,7,8,9,10]
// var counter=0
// while(counter<number.length)
// {
//     console.log(number[counter]);
//     counter++
// }



// //for loop
// for(var x=1; x<=20; x++)
// {
//     console.log(x);
// }





// var name=["Eram","Reem", "Anhal", "Aya"]
// for(var i=0; i<name.length; i++)
// {
//     console.log(name[i]);
// }




//function

// var number1=100;
// var number2=200;

// function calcSum()
// {
//     console.log(number1+number2);
// }
// calcSum()




// var x=50;
// var y=80;
// function getToal()
// {
//     var total=x+y
//     return total
// }
// console.log(getToal());




// function getSum(num1,num2,char)
// {
//     switch(char)
//     {
//         case "+":
//         return num1+num2
//         break;
//         case "-":
//         return num1-num2
//         break;
//         case "*":
//         return num1*num2
//         break;
//         case "/":
//         return num1/num2
//         break;
//         default:
//             return "Errore";
        


//     }
   

// }
// console.log(getSum(3,4,'a'));





//Activity-2


// function div(number)
// {
//     if(number % 3==0 && number % 4==0)
//     {
//         return "yes"
//     }
//     else {
//         return "no"
//     }
// }
// console.log(div(90));



//-3

// function max(num1,num2)
// {
//     if(num1>num2)
//     {
//         return "num1  the max number"  + num1
//     }

//     else if(num2>num1)
//     {
//         return " num2 is te max number" + num2
//     }
//     else
//     {
//         return "num1 is = num2"
//     }
// }
// console.log(max(3,4));



//4

// function integ(number){

//     if(number>0 )
//     {
//         return "positive number" +number
//     }
//     else if(number<0)
//     {
//         return "negtive number" +number
//     }
//     else
//     {
//         return "number is 0" + number
//     }
// }
// console.log(integ(6));





//5
//  function max(num1,num2,num3)
//  {
//      if(num1>num2>num3)
//      {
//          return "num1  the max number"  + num1
//      }

//      else if(num2>num1>num3)
//      {
//          return " num2 is te max number" + num2
//      }
     
//      else if(num3>num1>num2)
//      {
//          return " num3 is te max number" + num3
//      }


//      else if(num1<num2<num3)
//      {
//          return " num1 is  min number" + num1
//      }
     

//      else if(num2<num1<num3)
//      {
//          return " num2 min number" + num2
//      }
     


//      else if(num3<num1<num2)
//      {
//          return " num3 is max number" + num3
//      }
     

//     else
//     {
//         return "num1 is = num2 = num3 "
//     }
//  }




// console.log(max(3,4,7));





//6

// function div(number)
// {
//     if(number % 2==0)
//     {
//         return "even"  + number
//     }
//     else {
//         return "odd"  + number
//     }
// }
// console.log(div(4));




//8

// function name(x)
// {
//     switch(x[0])
//     {
//         case "a":
//         console.log("Vowel");
//          break;
            
//             case "e":
//             console.log("Vowel");
//              break;

//             case "i":
//             console.log("Vowel");
//             break;

//             case "o":
//             console.log("Vowel");
//             break;

//             case "u":
//             console.log("Vowel");
//             break;

//             default:
//                 console.log("not vowel")


//     }

// }
// console.log(name('or'))






//9
// function print(number)
// {
//     for(var i=1; i<=number ; i++)
//     {
//     console.log(i)
//     }
// }
// console.log(print(8))




//10

// function print(number)
// {
// for(i=1 ; i<=12; i++)
// {
//     console.log(number*i)
// }
// }
// print(2)





//11

function print(number)
{
    for(i=1; i<=number; i++)
    {
       if(i % 2==0)
       {
        console.log(i);
       }
    }
}
print(50)

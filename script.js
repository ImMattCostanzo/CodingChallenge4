//1 Convert the following function into an arrow function named "arrowMyFunction".
const arrowMyFunction = (num1, num2) => {
    return `${num1} ${num2}`;
}

//2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit)
const arrowAdd100 = money => ` ${money}`


//Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
    var characterCount = (string, letter) =>
{
    var letterCount = 0;
    for (var position = 0; position < string.length; position++) 
    {
       if (string.charAt(position) == letter) 
         {
         letterCount += 1;
         }
     }
     return letterCount;
    }
   
   console.log(characterCount("Hello my name is Matthew", "e"));
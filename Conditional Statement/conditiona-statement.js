let age = 20;
if(age > 18)
{
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}

// else-if

let marks = 90;
if(marks >= 90)
{
    console.log("Grade A");
}   
else if(marks >= 75)
{
    console.log("Grade B");
}
else if(marks >= 60)
{
    console.log("Grade C");
}

// switch statement

let day = 7;    
switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// ternary operator

let age1 = 17;
let result = (age1 >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(result);

// for Loops

for(let i = 1; i <= 10; i++)
{
    console.log(i);
}

// while loop

let j = 1;
while(j <= 10)
{
    console.log(j);
    j++;
}

// do while loop

let k = 1;
do
{
    console.log(k);
    k++;
}while(k <= 10);

// break

for(let i = 1; i <= 10; i++)
{
    if(i == 5)
    {
        break;
    }
    console.log(i);
}

// continue

for(let i = 1; i <= 10; i++)
{
    if(i == 5)
    {
        continue;
    }
    console.log(i);
}

// Nested Loops

for(let i = 1; i <= 3; i++)
{
    for(let j = 1; j <= 3; j++)
    {
        console.log(i + " " + j);
    }
}

// Pattern Printing

for(let i = 1; i <= 5; i++)
{
    let row = "";
    for(let j = 1; j <= 5; j++)
    {
        row += "* ";
    }
     console.log(row);
}
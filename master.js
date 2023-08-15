let number1,number2;
alert("1 == + , 2 == - , 3 == * , 4 == / , 5 == % , 6 == **");
const whichAction = Number(prompt());
if(whichAction == 1 )
{
    alert("Enter tow numbers:");
    number1 = Number(prompt());
    number2 = Number(prompt());
    const result = number1+number2;
    alert("Result == "+ result);
}
else if(whichAction == 2)
{
    alert("Enter tow numbers:");
    number1 = Number(prompt());
    number2 = Number(prompt());
    const result = number1-number2;
    alert("Result == "+ result);
}
else if(whichAction == 3)
{
    alert("Enter tow numbers:");
    number1 = Number(prompt());
    number2 = Number(prompt());
    const result = number1*number2;
    alert("Result == "+ result);
}
else if(whichAction == 4)
{
    alert("Enter tow numbers:");
    number1 = Number(prompt());
    number2 = Number(prompt());
    const result = number1/number2;
    alert("Result == "+ result);
}
else if(whichAction == 5)
{
    alert("Enter tow numbers:");
    number1 = Number(prompt());
    number2 = Number(prompt());
    const result = number1%number2;
    alert("Result == "+ result);
}
else if(whichAction == 6)
{
    alert("Enter tow numbers:");
    number1 = Number(prompt());
    number2 = Number(prompt());
    const result = number1**number2;
    alert("Result == "+ result);
}
else{
    alert("Please try again");
}
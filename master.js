let number1,number2;
alert("1 == + , 2 == - , 3 == * , 4 == / , 5 == % , 6 == **");
const whichAction = Number(prompt());
alert("Enter two numbers:");
number1 = Number(prompt());
number2 = Number(prompt());
if(whichAction == 1 )
{
    const result = number1+number2;
    alert("Result == "+ result);
}
else if(whichAction == 2)
{
    const result = number1-number2;
    alert("Result == "+ result);
}
else if(whichAction == 3)
{
    const result = number1*number2;
    alert("Result == "+ result);
}
else if(whichAction == 4)
{
    const result = number1/number2;
    alert("Result == "+ result);
}
else if(whichAction == 5)
{
    const result = number1%number2;
    alert("Result == "+ result);
}
else if(whichAction == 6)
{
    const result = number1**number2;
    alert("Result == "+ result);
}
else{
    alert("Please try again");
}
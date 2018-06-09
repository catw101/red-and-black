function getRandomInteger(min, max)
{
	numberOfOptions = max - min + 1 /*example: 10-0+1 = 11*/;
	return parseInt(Math.random() * numberOfOptions/*0-10*/) + min/*to shift it*/;
}
function getOrdinalSuffix(num)
{
	lastDigit = num%10;
	lastTwoDigits = num%100;
	
	if (lastDigit == 1 && lastTwoDigits != 11)
		return "st";
	if (lastDigit == 2 && lastTwoDigits != 12)
		return "nd";
	if (lastDigit == 3 && lastTwoDigits != 13)
		return "rd";
	
	return "th";
}
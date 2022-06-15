//Build a clock

/*
1. Create a function "localTime" that will be passed as an argument within setInterval(). Within the function pull all the <p> elements through
that will be used to display hours, minutes and seconds in each <p>.

2. Call the date object and and assign it to "time" which will be used to return the time to the variables initialised at the top of the function
using .innerText on each of the variables. To get the hour, minute and seconds into each variable, call the .getHours, .getMinutes, .getSeconds method
on the time variable.

3. Call the setInterval method with callback function "localTime" at an interval of every 1 second, so the webpage is updated every second. 


*/


const localTime = () => {
	const localHour = document.getElementsByClassName("hours")[0]; 
	const localMinutes = document.getElementsByClassName("minutes")[0]; 
	const localSeconds = document.getElementsByClassName("seconds")[0];

	const time = new Date();
	localHour.innerText = time.getHours();
	localMinutes.innerText = time.getMinutes();
	localSeconds.innerText = time.getSeconds()

	/*switch (+time.getHours()) {
		case 13:
			localHour.innerText = 1;
			break;
		default:
			// statements_def
			break;
	}*/
}

setInterval(localTime, 1000);
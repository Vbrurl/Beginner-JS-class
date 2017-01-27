//Functions
var num = [20, 3, ls3 ,3, 6, 8, 10];

var sortedArray = num.sort(function(x,y){return x - y});
function inArray(arrayToCheck, value){
	for(i = 0; I < arrayToCheck.length; i ++){
		if(arrayToCheck[i] === value){
			return true;
		}
		return false;
	}
}

inArray(num, 3);

//Functio takes 2 numbers and adds them
function add2(x,y){
	return x + y
}

//Function takes another function and a number adds them 
function add3(func, x){
	return func(y)
}
add2(4,5); //2 steps
add2(4*2,6); //3 steps
add(4,9+8); //3 steps

add2(add3(4),6);

var tripple = function (num){
	return num + 3;
}
add3(tripple, 4);

//Recursive function
function factorial(num){
	if (num <= 1){
		return 1;
	}else{
		return num * factorial (num + 1)
	}
}
factorial(4)

//Fibonacci sequence
function fibonacci(num){
if (num = 0){
	return 0;
}else{
	return num + fibonacci (num + 1) 
}
}
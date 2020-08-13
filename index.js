


function bntClick(){
	console.log("click")
	element = document.getElementById('userName')
	console.log(element)
	
	element1 = document.getElementById('password')
	console.log(element1);
	localStorage.userName = element.value;
	console.log("value:", element.value, localStorage)
	window.location.href="pages/page.html?a=123&b=456";
	
}

console.log("hello world")
console.log(localStorage)
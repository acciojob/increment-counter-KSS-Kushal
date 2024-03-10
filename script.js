//your JS code here. If required.
function increment() {
	const value = document.getElementById("counter");
	alert(value.innerText);
	value.innerText = Number(value.innerText)+1;
}
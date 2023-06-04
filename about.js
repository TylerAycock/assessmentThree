console.log("hello world");

let duck = document.querySelector(`.duck`)
let form = document.querySelector('#contact');


function handleSubmit(evt) {
	evt.preventDefault();
	// console.log('form submit');
	alert(`Form has been submited!`)
}

function compliment(evt){
	evt.preventDefault()
	alert(`Ruber Duck says...you RULE!`)
}



form.addEventListener('submit', handleSubmit);

duck.addEventListener(`mouseover`, compliment)
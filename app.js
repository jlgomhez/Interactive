// asignar un evento a un elemento
//event listener

//variable buttons, usando queary selector selecciona todos los elementos que sean botones
//usamos la funcion queryselectro all para seleccionar todos los elementos button de nuestro documento y todas esas referencias se guardan en una variable llamada buttons
const buttons = document.querySelectorAll('button');

//Para cada todos los elementos en buttons realiza la funcion que cumpla con el parametro button, 
//luego agrega la tarea de escuchar al evento de click para cada elemento con parametro boton, y esto provoca que playSound se ejecute
//Usamos la funcion for each sobre la variable buttons para iterar sobre cada elemento, para cada uno de ellos se ejecuta la funcion
//la funcion añade un event listener, asociando una funcion (playSound) al evento de click de cada boton
buttons.forEach(button => button.addEventListener('click', playSound)
	//function (button) {
	//	button.addEventListener('click', playSound);
	//}
);
//que evento queremos escuchar y que queremos que pase

//funcion de playSound que escucha recibe todos los paremetros del evento de click, 
function playSound (event) {
	//crea una variable button que toma como valor el atributo target del evento, en este caso el boton
	const button = event.target;
	//crea una variable note que toma como valor el dataset con el nombre de nota del boton
	const note = button.dataset.note;
	
	//tener un elemento audio
	//crea una variable audio que toma el valor el elemento segun el ID
	const audio = document.getElementById(`audio${note}`);
	//dar la orden de reproduccion
	audio.pause();
	audio.currentTime = 0;
	audio.play();
}

//keyup
//keydown
//keypress
document.addEventListener('keydown', 
	//function (event) {
	//const key = event.key;
	//const button = document.querySelector(`button[data-key="${key}"]`);
	//console.log(button);
	//button.click(); //trigger
	//}
	 event => {
	const key = event.key;
	const button = document.querySelector(`button[data-key="${key}"]`);
	if (button)
		button.click(); //trigger
	}
);
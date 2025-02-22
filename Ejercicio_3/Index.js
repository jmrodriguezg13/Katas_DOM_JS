//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement ("ul");

for (const country of countries) {
		const li = document.createElement ("li");
		li.textContent = country ;
		ul.appendChild (li);
	}

document.body.appendChild (ul)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementremove = document.querySelector(".fn-remove-me");

elementremove.remove()

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ulcars = document.createElement ("ul");

for (const car of cars) {
	const li = document.createElement ("li");
	li.textContent = car;
	li.setAttribute ("data-function", "printHere");
	ulcars.appendChild (li);
}

document.body.appendChild (ulcars)


//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const paises = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const pais of paises) {
	const div = document.createElement ("div");
	const titulo = document.createElement ("h4");
	const img = document.createElement ("img");

	titulo.textContent = pais.title;
	img.src = pais.imgUrl;

	div.appendChild (titulo);
	div.appendChild (img);
	document.body.appendChild (div);

}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const btndelete = document.createElement("button");
btndelete.textContent = "Eliminar";

function borrardiv () {
	const divdelete = document.querySelectorAll("div");
	divdelete[divdelete.length - 1].remove ();
}

btndelete.addEventListener("click", borrardiv);
document.body.appendChild(btndelete);

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

const divdelete2 = document.querySelectorAll("div");

for (const div of divdelete2) {
    const button = document.createElement("button");
    button.textContent = "Eliminar"
    button.addEventListener("click", (e) => e.target.parentElement.remove())
    div.appendChild(button);
}

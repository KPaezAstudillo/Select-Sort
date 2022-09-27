let draw = document.querySelector("#draw");
let sort = document.querySelector("#sort");
let generateCards = document.getElementById("generateCards");
let bubbleLog = document.getElementById("bubbleLog");
let listaCartas = [];

// Genera pinta y numero
let GenerateData = () => {
  let Pinta = ["spades", "hearts", "diams", "cubs"];
  let numeroRandom = Math.floor(Math.random() * 13) + 1;
  let pintaRandom = Math.floor(Math.random() * Pinta.length);
  let datos = {
    numero: numeroRandom,
    pinta: Pinta[pintaRandom]
  };
  listaCartas.push(datos);
  return datos;
};

//Crea carta segun datos
let createCard = (obj, div) => {
  let carta = document.createElement("div");
  let number = document.createElement("p");
  let contenido = obj;
  carta.classList.add("card");
  number.classList.add("numero");

  if (contenido.numero === 1) {
    number.innerHTML = "A";
  } else if (contenido.numero === 11) {
    number.innerHTML = "J";
  } else if (contenido.numero === 12) {
    number.innerHTML = "Q";
  } else if (contenido.numero === 13) {
    number.innerHTML = "K";
  } else {
    number.innerHTML = contenido.numero;
  }

  number.classList.add(contenido.pinta);
  carta.appendChild(number);
  div.appendChild(carta);
};

// Genera cantidad de cartas especificada por usuario
let generateCard = () => {
  let cantidad = parseInt(document.querySelector(".cantidad").value);
  if (!Number.isNaN(cantidad)) {
    if (listaCartas.length > 0) {
      eraseContent();
    }
    for (let i = 0; i < cantidad; i++) {
      createCard(GenerateData(), generateCards);
    }
  }
  document.querySelector(".cantidad").value = "";
};

//Algoritmo burbuja y lo inserta en HTML
// let sortArray = arr => {
//   let wall = arr.length - 1;
//   let iteracion = 0;
//   while (wall > 0) {
//     let index = 0;

//     while (index < wall) {
//       let it = document.createElement("p");
//       it.innerHTML = iteracion;
//       bubbleLog.appendChild(it);
//       for (let j = 0; j < arr.length; j++) {
//         createCard(arr[j], bubbleLog);
//       }

//       if (arr[index].numero > arr[index + 1].numero) {
//         let aux = arr[index].numero;
//         arr[index].numero = arr[index + 1].numero;
//         arr[index + 1].numero = aux;
//       }

//       index++;
//       iteracion++;
//     }

//     wall--;
//   }
//   return arr;
// };
//Algoritmo select y lo inserta en el HTML
let selectSort = arr => {
  let min = 0;
  let iteracion = 0;
  while (min < arr.length) {
    let it = document.createElement("p");
    it.innerHTML = iteracion;
    bubbleLog.appendChild(it);
    for (let j = 0; j < arr.length; j++) {
      createCard(arr[j], bubbleLog);
    }
    for (let i = min + 1; i < arr.length; i++) {
      // console.log(arr[i].numero);
      if (arr[min].numero > arr[i].numero) {
        let aux = arr[min].numero;
        arr[min].numero = arr[i].numero;
        arr[i].numero = aux;
      }
    }
    min++;
    iteracion++;
  }
  return arr;
};

//Aplica algoritmo a la lista de cartas
let sortCards = () => {
  selectSort(listaCartas);
};

//Borra contenido
let eraseContent = () => {
  let selectCartas = document.querySelectorAll(".card");
  let SelectBubble = document.querySelectorAll("p");
  selectCartas.forEach(erase => {
    erase.remove();
  });
  SelectBubble.forEach(erase => {
    erase.remove();
  });
  listaCartas = [];
};

draw.addEventListener("click", generateCard);
sort.addEventListener("click", sortCards);

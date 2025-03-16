// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Lista de amigos
let listaDeAmigos = [];

//Agregar a un amigo

function agregarAmigo(){
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    if(nombreAmigo === ''){
        alert('Por favor ingrese un nombre');
        return;
    }

    listaDeAmigos.push(nombreAmigo);
    mostrarListaAmigos();
    input.value = "";
}
//Mostrar la lista de amigo

function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    listaDeAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Sortea a un amigo

function sorteoAmigo(){
    if(listaDeAmigos.length === 0){
        alert('Lista vacia. Agregar un nombre al menos');
        return;
    }

    const indexAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSecreto = listaDeAmigos[indexAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    listaDeAmigos = []
    return;
}


// Declaración de variables globales

let amigos = [];                                // Se declara el array para almacenar la lista de nombres a ingresar.
                                                
function agregarAmigo() {                       // Función para llenar el array con los nombres de los amigos.
    const nombreAmigo = document.getElementById("amigo").value.trim();  // El método "getElementById().value" se usa para asociar el nombre ingresado a una 'parte' o nodo del archivo HTML en este cas0 'amigo':  <input type="text" id="amigo" class="input-name" placeholder="Escriba un nombre">.                                                 
                                                                        // Se usa .trim() para eliminar espacios vacios en el nombre, que corresponde a una cadena de texto. 
   if (nombreAmigo === '') {                                            // Sí lo ingresado es sólo un clik, se añade un espacio vacio '' a la lista "amigos", lo cual crea un problema para sortear el amigo
        alert('Ingrese un nombre');                                     // Mediante la alerta se fuerza al usuario a ingresar un nombre.
        return
    } else {
    amigos.push (nombreAmigo);                                          // Se ingresa cada nombre al final de la lista, de la v ariable "nombreAmigo".
    document.getElementById('amigo').value = "";                        // Se borra el nombre de la lista, ya que sin esta instrucción, cada vez que se ingresa un nombre, se repite la lista duplicándola en la pantalla.
    console.log(amigos);                                                // Imprime en la consola del navegador, el elemento ingresado en el array amigos = [].
    }
    mostrarListaAmigos();                                               // Se llana a la función para que se ejecute en conjunto con este botón o parte de la página.
}

function mostrarListaAmigos() {                   // Función para mostrar en pantalla los nombres de los amigos ingresados por el usuario.
   let nombre = document.createElement("li");     // Se crea el elemento lista "li"que es de uso interno en el pc, la que se rellenará con la lista de amigos.
   //nombre.value = "";                           // Se borran los valores de la lista nombre, pero como la lista está recien creada no es necesario.
   for (let i=0; i < amigos.length; i++) {        // Es una condición For para ir rellenando la lista creada, "i" representa el número de la lista asociada al nombre; el primero tiene un "0" asignado. La lista se rellena de acuerdo a la cantidad de nombre que requiere el usuario.
   nombre.textContent = amigos [i];               // Muestra cada nombre que se va ingresando en la patalla.
   listaAmigos.appendChild(nombre);               // Conecta "li"  creada por document.createElement, con el nodo "listaAmigos" del archivo HTML: <ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>.
   }
} 
        //ALTERNATIVA I                           // Funciona para mostrar la lista de amigos en pantalla, en vez de usar el bucle FOR se utiliza la función flecha.
    //let nombre = document.createElement("li");
    //nombre.value = ""; 
    //amigos.forEach(campo => {                   // Función flecha.
    //nombre.textContent = campo;
    //listaAmigos.appendChild(nombre);
    //    })
    //}

        //ALTERNATIVA II                          // Una seguna alternativa para mostrar los valores en pantalla. En vez de usar el método appendChild(), se utiliza inner.HTML.
// let listaNombre = document.getElementById("listaAmigos");
// listaNombre.innerHTML = "";
// for (let i=0; i < amigos.length; i++) {
// listaNombre.innerHTML += `> ${amigos[i]} <br>`;        // El uso de .innerHTML debe ser cuidadosa, ya que abre una "puerta" al uso malintencionado de la página.
//   }

function sortearAmigo(){                                   // Función para sortear y mostar en pantalla el amigo secreto, sorteado al azar.

    if(amigos.length === 0){                               // Indica que si nos has ingresado nada en la lista amigos.
        alert('Debes ingresar tus amigos.');               // Alerta que fuerza a ingresar los nombre de los amigos.
            return;
        }
    let sorteo = amigos[Math.floor(Math.random() * amigos.length)]; // Mediante la función Math se obtiene un número aleatorio que se asocia al número asignado en el array de amigos. 
    let amigoSorteado = document.getElementById('resultado');       // Se vincula este archivo al HTMLL mediante el id 'resultado': <ul id="resultado" class="result-list" aria-live="polite"></ul>
    amigoSorteado.textContent = `Tu amigo secreto es: "${sorteo}"`; // Se muestra en pantalla el resultado del sorteo.
}; 

       // ALTERNATIVA I                                    // Otra forma de obtener el mismo resultado.     
//let sorteo = Math.floor(Math.random() * amigos.length);
//let amigoSorteado = document.getElementById('resultado');
//amigoSorteado.innerHTML = amigos[sorteo];      
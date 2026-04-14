const listaDinamica = document.querySelector("#lista");
//creamos li
const li= document.createElement("li");
//le asignamos un texto
li.textContent = "Elemento dinámico";
//lo agregamos a la lista
listaDinamica.appendChild(li);  

//creamos otro li
const li2= document.createElement("li");    
//le asignamos un texto
li2.textContent = "Otro elemento dinámico";                     
//lo agregamos a la lista
listaDinamica.appendChild(li2);

//creamos otro li
const li3= document.createElement("li");        
//le asignamos un texto
li3.textContent = "Tercer elemento dinámico";               
//lo agregamos a la lista
listaDinamica.appendChild(li3); 

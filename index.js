function imprimeHola() {
    console.log('Hola');
}

function main() {
    console.log("starting...");
    const titulo = document.querySelector('h1');
    titulo.addEventListener('pointerenter', imprimeHola)

    const elements = Array.from (document.body.querySelectorAll('*') 
    );
    console.log(elements);
}

const counter = elements.map(
    (item)=>{
        return{
            element: item,
            counter: 0,
        }
    }
);
    console.log(counter);
    

// con esto le decimos que cuando termine de ejecutar la página ejecutar la función (main)
window.addEventListener('load', main)


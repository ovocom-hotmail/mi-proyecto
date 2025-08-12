
document.addEventListener('DOMContentLoaded', () => {
    let miH1 = document.getElementById("miElemento");

    miH1.addEventListener('click', function () {
        console.log('se ha hecho click en encabezado')
    });

    let misParrafos = document.getElementsByClassName("parrafo-evento");

    const arregloElementos = Array.from(misParrafos);
    arregloElementos.forEach(elemento => {

        elemento.addEventListener('mouseleave', () => {
            console.log('El mouse ha salido del elemento');
        });
        elemento.addEventListener('mouseenter', () => {
            console.log('El mouse ha entrado en el elemento');
        });

        elemento.addEventListener('click', () => {
            console.log('se ha hecho click en el elemento');
        });

        elemento.addEventListener('dblclick', () => {
            console.log('se ha hecho doble click en el elemento');
        });

    });

    let miParrafo = document.querySelector(".parrafo-evento");

    miParrafo.addEventListener('click', () => {
        miParrafo.textContent = 'he cambiado el texto de este parrafo';

        let pcontent = document.querySelector(".contenido-principal");
        console.log(pcontent);

        const nuevoParrafo = document.createElement('p');
        nuevoParrafo.textContent = miParrafo.textContent;


        const cantidadHijos = pcontent.childElementCount;

        if (cantidadHijos % 2) {
            nuevoParrafo.classList.add('parrafo-verde');
        } else {
            nuevoParrafo.classList.add('parrafo-rojo');
        }

        pcontent.appendChild(nuevoParrafo);

    })

    let nodosParrafos = document.querySelectorAll("p");
    nodosParrafos[1].addEventListener('click', () => {
        console.log('click en el segundo parrafo');

        let pcontent = document.querySelector(".contenido-principal");

        const cantidadHijos = pcontent.childElementCount;
        console.log(cantidadHijos)
        if (cantidadHijos > 3) {
            let ultimoElemento = pcontent.lastElementChild;
            pcontent.removeChild(ultimoElemento);
        }
    })
});
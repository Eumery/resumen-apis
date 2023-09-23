let info = ""; 

async function obtenerInfo(id) {
    try {
        const response = await fetch(`https://650cbe6047af3fd22f67f515.mockapi.io/api-info/${id}`, {
            method: 'GET'
        });
        
        if (response.ok) {
            const data = await response.json();
            
            console.log(data.concepto);
            info = data.concepto; 
            document.getElementById("container").innerHTML = `<p>${info}</p>`;
            console.log(info);
        } else {
            throw new Error('Error al obtener la información');
        }
    } catch (error) {
        
        console.error('Error:', error.message);
    }
}

document.getElementById("def").addEventListener("click", () => {
    obtenerInfo(1);
});

document.getElementById("Func").addEventListener("click", () => {
    obtenerInfo(2);
});

document.getElementById("polit").addEventListener("click", () => {
    obtenerInfo(3);
});

document.getElementById("soap").addEventListener("click", () => {
    obtenerInfo(4);
});

document.getElementById("rest").addEventListener("click", () => {
    obtenerInfo(5);
});

document.getElementById("restful").addEventListener("click", () => {
    obtenerInfo(6);
});

document.getElementById("soa").addEventListener("click", () => {
    obtenerInfo(7);
});

document.getElementById("micro").addEventListener("click", () => {
    obtenerInfo(8);
});

document.getElementById("webh").addEventListener("click", () => {
    obtenerInfo(9);
});
document.getElementById("hist").addEventListener("click", () => {
    obtenerInfo(10);
});


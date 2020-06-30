const urlAPI = "http://localhost:3000/api/cameras"; // Déclaration api
const cameraAppend = document.getElementById("showcase");

async function getCameras() {                       // fonction asynchrone
    let response = await fetch(urlAPI);          
    let data = await response.json()                
    .then((data) => {
        data.forEach((camera) => {                   
            const { name, _id, lenses, price, description, imageUrl } = camera 
            cameraAppend.innerHTML +=
            `<div class="${name}">
                <h3 class="cameraName">${name}</h3>
                <ul class="cameraInfo">
                    <li id="price">Prix: ${price/100}€</li> 
                </ul> 
                <img src="${imageUrl}" alt="Photo de ${name}" class="cameraPhoto"></img>
                <button onclick='location.href="product.html?id=${_id}"' type="button" id="btnCustom">Je choisis la lentille</button>
            </div>`;         
                                               
        })                                                      
    })
    return data;
}

window.onload = () => {                 
    getCameras();
}
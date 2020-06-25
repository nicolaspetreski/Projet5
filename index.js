const urlAPI = "http://localhost:3000/api/cameras"; // Déclaration api
const cameraAppend = document.getElementById("showcase");

async function getCameras() {                       // fonction asynchrone
    let response = await fetch(urlAPI);          
    let data = await response.json()                
    .then((data) => {
        data.forEach((camera) => {                   
            const { name, _id, lenses, price, description, imageUrl } = camera      // Déclaration de teddy comme objet
            cameraAppend.innerHTML +=
            `<div class="${name}">
                <h3 class="cameraName">${name}</h3>
                <ul class="cameraInfo">
                    <li id="price">Prix: ${price/100}€</li> 
                </ul> 
                <img src="${imageUrl}" alt="Photo de ${name}" class="cameraPhoto"></img>
                <button onclick='location.href="product-page.html?id=${_id}"' type="button" id="btnCustom"><i class="fas fa-cog"></i>Choisir la lentille</button>
            </div>`;         
                                               // Cette partie de récupération de l'id est très
                                                     // importante pour la page suivante
        })                                                      
    })
    return data;
}

window.onload = () => {                 
    getCameras();
}
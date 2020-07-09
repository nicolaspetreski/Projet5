const urlAPI = "http://localhost:3000/api/cameras";         // Déclaration de l'Url de l'api
const cameraAppend = document.getElementById("showcase");

test('Successful indexing append === Inside of an API', () => {
async function getCameras() {                      
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
                                             

                expect(camera.name()).toContain("Zurss 50S")
                expect(camera._id()).toContain("5be1ed3f1c9d44000030b061")
                expect(camera.lenses()).toContain("35mm 1.4","50mm 1.6")
                expect(camera.price()).toContain("49900")
                expect(camera.description()).toContain("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
                expect(camera.imageUrl()).toContain("http://localhost:3000/images/vcam_1.jpg")
            })                                                      
        })
    return data;
    }
})

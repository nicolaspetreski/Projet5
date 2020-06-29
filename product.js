const urlAPI = "http://localhost:3000/api/cameras";                 
const cameraAppend = document.getElementById("product-pull");
const cameraLensAppend = document.getElementById("camera-lens");

async function getCameras() {                       // Cette partie est très similaire à index.js
    var flag = 0;                       // Déclaration d'un flag qui servira plus tard pour la page d'erreur
    
    let response = await fetch(urlAPI);
    let data = await response.json()
    
    .then((data) => {
        data.forEach((camera) => {
            const { name, _id, lenses, price, description, imageUrl } = camera
            let id = `${_id}`; 

            if(window.location.href.indexOf(id) > -1) {   
                flag++;     

               if (flag == 1) {                                 
                cameraAppend.innerHTML +=
                    `<div class="cameraImport">
                        <h3 class="cameraName">${name}</h3>
                            <ul class="cameraInfo">
                                <li id="description">Description : <br />${description}</li>
                                <li id="price">Prix: ${price/100}€</li> 
                            </ul> 
                            <img src="${imageUrl}" alt="Photo de ${name}" class="cameraPhoto"></img>
                            <div class="quantityDiv">
                                <label for="quantityInput">combien de lentilles aimeriez-vous acheter ?</label><br />
                                <input step="number" placeholder="Quantité" 
                                    class="quantity-input" id="quantityInput" 
                                    name="quantityInput" type="number" min="1" max="99">
                                </input>
                            </div>

                            <div class="checkout" id="addBtn">
                                <button 
                                    type="button"
                                    id="panier";
                                    onclick="";
                                    class="btn btn-default";">
                                    Ajouter au panier
                                </button>
                                <i class="fas fa-shopping-cart icon-card"></i>
                            </div>
                        </div>`;

                        const panier = document.getElementById("panier");

                
                for (let i = 0; i < lenses.length; i++) {
                    cameraLensAppend.innerHTML +=
                    `<option id="appendedLenses" value="${lenses[i]}" selected="selected">  ${lenses[i]}  </option>`;
                }

                    
                    panier.addEventListener('click', function(e) {
                        
                    let color = document.querySelector('select').value;

                    let quantity = document.getElementById('quantityInput').value;

                    if (quantity < 1) { 
 
                        swal("Un minimum d'une lentille est requise", "error");
                    
                    } else {
                        let cart = {
                            "id" : id,
                            "name" : name,
                            "price" : price/100,            
                            "lenses" : lenses,
                            "quantity" : quantity,
                            "imageURL" : imageUrl
                        }
                        
                        swal("Le produit a été ajouté au panier avec succes","","success");

                    
                        let cartItems = JSON.parse(localStorage.getItem('cameraCart')) || [];

                        if (localStorage.getItem('cameraCart') === null) { 

                            cartItems.push(cart); 

                            localStorage.setItem("cameraCart", JSON.stringify(cart)) || []; 

                        } else {  

                            let itemHasChanged = false; // Cette déclaration servira 
                            
                            for(let i = 0; i < cartItems.length; i++) {   

                                if((cartItems[i].name == cart.name) && cartItems[i].lens == cart.lens) { 
                              
                                  let cartItemsQuantityNumber = Number(cartItems[i].quantity); 

                                  let cartQuantityNumber = Number(cart.quantity);   
                              
                                  let sumQuantity = cartItemsQuantityNumber + cartQuantityNumber;
                              
                                  cartItems[i].quantity = sumQuantity.toString();
                                     
                                  itemHasChanged = true;  
                                }
                            }

                        if(itemHasChanged == false) {  

                            cartItems.push(cart);       

                                }
                            }   
                            
                            localStorage.setItem("cameraCart", JSON.stringify(cartItems));   
                     
                            } 
                        });
                    }
                }
            })
        })
    }
    



window.onload = () => {    // lancement de la page 
    getCameras();
}











  





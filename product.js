const urlAPI = "http://localhost:3000/api/cameras";                 
const cameraAppend = document.getElementById("product-pull");
const cameraLensAppend = document.getElementById("camera-lens");

async function getCameras() {                       // Cette partie est très similaire à index.js
    var flag = 0;                       // Déclaration d'un flag qui servira plus tard pour la page d'erreur
    
    let response = await fetch(urlAPI);
    let data = await response.json()
    
    .then((data) => {
        data.forEach((camera) => {
            const { name, _id, colors, price, description, imageUrl } = camera
            let id = `${_id}`;                              // On déclare "id" commme étant l'id du teddy selectionné sur la page index.html                
            if(window.location.href.indexOf(id) > -1) {     // On récupère l'id trouvé dans l'url de la page et la compare à l'id de l'ourson actuel
                flag++;                                     // Si l'id du teddy est trouvé dans l'url, le flag s'incrémente
               if (flag == 1) {                             // Si le flag a été incrémenté, le contenu est généré                        
                teddyAppend.innerHTML +=
                    `<div class="teddyImport">
                        <h3 class="teddyName">${name}</h3>
                            <ul class="teddyInfo">
                                <li id="description">Description : <br />${description}</li>
                                <li id="price">Prix: ${price/100}€</li> 
                            </ul> 
                            <img src="${imageUrl}" alt="Photo de ${name}" class="teddyPhoto"></img>
                            <div class="quantityDiv">
                                <label for="quantityInput">Combien d'oursons voulez-vous ajouter à votre panier ?</label><br />
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

                // Boucle qui sert à trouver combien de couleurs il y a pour chaque teddy
                for (let i = 0; i < colors.length; i++) {
                    teddyColorAppend.innerHTML +=
                    `<option id="appendedColors" value="${colors[i]}" selected="selected">  ${colors[i]}  </option>`;
                }

                    // Ajout d'une fonction 'onclick' sur le bouton "Ajouter au panier"
                    panier.addEventListener('click', function(e) {
                        
                    let color = document.querySelector('select').value;

                    let quantity = document.getElementById('quantityInput').value;
                    // Ce if / else permet de s'assurer que l'utilisateur remplisse la case "quantité" avec au moins 1
                    if (quantity < 1) { 
                    // Si l'utilisateur laisse l'input vierge, tape 0 ou -x, une erreur sera renvoyée   
                        swal("Vous n'avez pas oublié quelque chose ?", "Il va vous falloir au moins 1 teddy !", "error");
                    
                    } else {
                    // Par contre si l'utilisateur entre une valeur de 1 ou plus, tout le code suivant sera éxécuté
                        let cart = {
                            "id" : id,
                            "name" : name,
                            "price" : price/100,            // Déclaration de cart, un objet représentant un teddy type
                            "color" : color,
                            "quantity" : quantity,
                            "imageURL" : imageUrl
                        }
                        
                        swal("Produit ajouté au panier", "", "success");

                        // Première utilisation du localStorage - Ici on vérifié si nous avons quelque chose dedans
                        let cartItems = JSON.parse(localStorage.getItem('teddyCart')) || [];

                        // If / Else servant à éxécuter du code en fonction de s'il y a du contenu dans le localStorage
                        if (localStorage.getItem('teddyCart') === null) { /* Si le localStorage est vide */

                            cartItems.push(cart);       // On va ajouter le produit actuel à l'array cartItems

                            localStorage.setItem("teddyCart", JSON.stringify(cart)) || []; // Puis créer notre localStorage 'teddyCart

                        } else {    // Par contre, si le localStorage a déjà du contenu

                            let itemHasChanged = false; // Cette déclaration servira pour contrôler les doublons
                            
                            for(let i = 0; i < cartItems.length; i++) {   
                                // en fonction de la quantité de produits dans le localStorage
                                // S'il y a déjà un item avec un nom ET une couleur identique
                                if((cartItems[i].name == cart.name) && cartItems[i].color == cart.color) { 
                              
                                  let cartItemsQuantityNumber = Number(cartItems[i].quantity); 
                                  // On récupère la quantité du produit en cours d'ajout
                                  let cartQuantityNumber = Number(cart.quantity);   
                                  // Ainsi que la quantité de produits identiques déjà présents dans le localStorage
                              
                                  let sumQuantity = cartItemsQuantityNumber + cartQuantityNumber;
                                     // On additionne ces deux quantités
                              
                                  cartItems[i].quantity = sumQuantity.toString();
                                     // Et on remplace la quantité du localStorage par cette nouvelle quantité
                                  itemHasChanged = true;  
                                }
                            }

                        if(itemHasChanged == false) {  
                            // Il y a déjà des produits dans le panier mais pas identiques à ceux qui sont en ajout
                            cartItems.push(cart);       
                            // Donc on peut simplement push les nouveaux produits pour les ajouter à l'array cartItems
                                }
                            }   
                            
                            localStorage.setItem("teddyCart", JSON.stringify(cartItems));   
                            // Puis stringify le contenu de cartItems pour l'ajouter au localStorage                      
                            } 
                        });
                    }
                }
            })
            if (flag === 0) {           // Si le flag ne s'est pas incrémenté, renvoi vers la page d'erreur
                window.location = "error.html";
        }
    })
    return data;
}




window.onload = () => {     /* Encore une fois, on charge la fonction au lancement de la page */
    getTeddies();
}











  






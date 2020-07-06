const cartItems = JSON.parse(localStorage.getItem('cameraCart')) || []; 

const buttonDown = document.getElementById('down');

const postUrlAPI = "http://localhost:3000/api/cameras/order";

const totalCartCost = document.getElementById('finalCheckout');

function cameraGet() {   // Fonction principale pour l'affichage du panier
    
    let title = document.querySelector('#checkoutTitle');

    let cameraContainer = document.getElementById('cameraContainer');

    let finalCheckout = 0;

    if(!cartItems.length) { // Au cas ou le panier est vide
        title.textContent = "Votre panier est vide pour le moment, redirigez vous vers la page d'acceuil et choisissez une camera ainsi qu'une lentille !";
                document.getElementById('clearCart').style.display="none";
                document.getElementById('totalPrice').style.display="none";
                document.getElementById('container').style.paddingBottom="0";
                document.getElementById('container').style.minHeight="80vh";
                document.querySelector('#container').style.display="flex";
                document.querySelector('.classForm').style.justifySelf="center";
                document.querySelector('.classForm').style.margin='auto';

    } else {  //Si il y a des objets dans le panier alors..
        
        cartItems.forEach(cartItem => {     
            let totalPrice = (cartItem.quantity * cartItem.price);

            //Code HTML du panier
            cameraContainer.innerHTML += `
                <div class="mainContainer">
                    <div class="cameraImg">
                        <img src="${cartItem.imageURL}" alt="Image de l'appareil photo vintage ${cartItem.name}"/>
                    </div>
                        <div class="cameraName">
                            <h2 class="cameraNameTitle">
                                ${cartItem.name}
                            </h2>
                        </div>

                        <div class="cameraLens">
                            <p> Lentille : ${cartItem.lenses} </p>
                        </div>

                        <div class="cameraQuantity">
                            <button 
                                type="button"
                                id="up";
                                class="btn-up">
                                <i class="fas fa-angle-up">
                                </i>
                            </button>
                            <p> Quantité : <span class="test">${cartItem.quantity}</span></p>
                            <button 
                                type="button"
                                id="down";
                                class="btn-down">
                                <i class="fas fa-angle-down"></i>
                            </button>
                        </div>

                        <div class="cameraPrix">
                            <p class="cameraPrice"> *Prix par piece : ${cartItem.price} € </p>
                        </div>
                    <div class="cameraTotalPrice">
                        <h3 class="cameraTotalPrice-Title">Le prix total est</h3>
                        <p><span class="CameraTotalPrice-Amount">${cartItem.quantity * cartItem.price}</span> €</p>
                    </div>
                </div>`;  

                // Malheureusement je n'ai pas encore réussi à coder l'incrémentation des quantités du panier
                let buttonsUp = document.querySelectorAll('.btn-up');
                buttonsUp.forEach((button) => {
                    button.addEventListener('click', function() {
                        swal("Button does not work atm", "error")
                });                
             });
             // Donc ça ne fonctionne ni pour + ni pour -
             let buttonsDown = document.querySelectorAll('.btn-down');
                buttonsDown.forEach((button) => {
                    button.addEventListener('click', function() {
                        swal("Button does not work atm", "error")
                });                
             });

        });     // récupération des prix totaux de chaque item du panier
                const CamerasTotalPrice = [...document.getElementsByClassName('CameraTotalPrice-Amount')];
                // Loop pour chaque prix total dans le panier
                CamerasTotalPrice.forEach(camera => {
                    let cameraTotalPrice = parseInt(camera.innerHTML, 10);   
                     // Ceci nous permet de récupérer un "number" au lieu d'un "string"

                    finalCheckout += cameraTotalPrice;   
                })

                totalCartCost.innerHTML = finalCheckout + ' €';     // Affichage du prix total du panier
    }
}

// Afin de vider le panier
function emptyCart() {
        swal.setActionValue({confirm: false, cancel: true})
        swal({
            title: 'Confirmez vous?',
            text: "Vous ne pourrez pas remonter dans le temps et corriger votre erreur",
            icon: 'warning',
            buttons: {cancel: true, confirm: "Confirmer"},
            dangerMode: true,
        }).then((result) => {
            if (result.false) {     
                swal('Annulé avec succes', '', 'success')
        } else {    
                localStorage.clear();
                location.reload();
        }
    })
}

// Quand on confirme le panier -->>
function confirmCart() { 
    document.getElementById("form").style.display="block";
    document.querySelector(".classForm").style.display="none";
    document.querySelector('#container').style.backgroundColor="#f2f2f2";
}

function closeForm() { 
    document.getElementById("form").style.display="none";
    document.querySelector(".classForm").style.display="block";
    document.querySelector('#container').style.backgroundColor="rgb(228, 214, 214)";
  }
  
  
let form = document.getElementById('dataCollect');
  

function orderCameras() {   

            let firstName = document.getElementById('firstName').value;
            let lastName = document.getElementById('lastName').value;
            let address = document.getElementById('address').value;
            let city = document.getElementById('city').value;
            let email = document.getElementById('email').value;
            let contact = { firstName, lastName, address, city, email }; 
            

            
            const products = [];

            cartItems.forEach(item => { 
                products.push(item.id);
            })

            
            const request = new Request(postUrlAPI, {
                method: 'POST',
                body: JSON.stringify({contact, products}),  
                
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
            });
    
            
                fetch(request)
                .then(response => response.json()) 
                .then( (response) => {
                if (form.checkValidity() === false) {   
                    swal("Une erreur est survenue, veuillez bien verifier le contenu du formulaire", "error");
                } else if (form.checkValidity() ===true) {  
                    let getOrderId = response.orderId;
                    let getTotalCost = totalCartCost.innerHTML; 
                    localStorage.clear();   
                    let orderRecap = { getOrderId, getTotalCost };  
                    
                    localStorage.setItem("orderIsConfirmed", JSON.stringify(orderRecap));   
                    
                    swal("Oricam vous remerci pour votre commande !", "On vous redirige vers la page de confirmation dans un instant", "success");
                    setTimeout(function() {window.location = 'confirmation.html'; }, 4000);
                    // délai de 4 secondes entre l'apparition du message swal et redirection de la page vers notre page de confirmation
                } 
            })
     }
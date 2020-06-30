const checkoutItems = JSON.parse(localStorage.getItem('orderIsConfirmed')) || []; 

let textZone = document.getElementById('confirmationDetails');

// Création du contenu HTML && intégration du contenu du localStorage
textZone.innerHTML += 
`
<h1> Oricam vous remerci pour votre commande !</h1>
<h2 class="invoice"> Voici le récapitulatif de votre commande</h2>
<h3>Identifiant de commande : <br /><span class="invoiceInfo">${checkoutItems.getOrderId}</span></h3>
<h3>Prix total de la commande : <br /><span class="invoiceInfo">${checkoutItems.getTotalCost}</span></h3>
<p>Vous recevrez un email dans quelques instants récapitulant votre commande.</p>
<p>Oricam vous remercie encore une fois.</p>
`;
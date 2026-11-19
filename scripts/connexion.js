window.onload = init;

const CLE_STOCKAGE = "mes_donnees";
let formLog;
let message;

/*-----------------------------------
------Fonction d'initialisation------
-----------------------------------*/

function init() {
  formLog = document.getElementById("formLog");
  message = document.getElementById("message");
  connect();
}

/*-----------------------------------------
------Fonction qui lance la connexion------
-----------------------------------------*/

function connect() {
  formLog.addEventListener("submit", verifierConnexion);
}

/*-------------------------------------------------------------------------------------------------------------------------------
------Fonction qui verifie que les donnees de connexion sont conformes avec les donnees d'inscription dans le LocalStorage-------
-------------------------------------------------------------------------------------------------------------------------------*/

function verifierConnexion(event) {
  event.preventDefault();

  const saisie = Object.fromEntries(new FormData(formLog));

  const donneesStockees = localStorage.getItem(CLE_STOCKAGE);

  if (!donneesStockees) {
    message.textContent = "Aucun compte trouvé. Veuillez vous inscrire.";
    return;
  }

  const utilisateur = JSON.parse(donneesStockees);

  if (
    saisie.name === utilisateur.name &&
    saisie.motDePasse === utilisateur.motDePasse
  ) {
    message.textContent = "Connexion réussie !";
    sessionStorage.setItem("estConnecte", "true");
    setTimeout(() => {
      window.location.href = "profil.html";
    }, 1000);
  } else {
    message.textContent = "Email ou mot de passe incorrect.";
  }
}

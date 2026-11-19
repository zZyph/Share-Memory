window.onload = init;
/*-----------------------------------------------------
-------------Fonction d'initialisation-----------------
-----------------------------------------------------*/

function init() {
  afficherProfil();
}
const CLE_STOCKAGE = "mes_donnees";

/*--------------------------------------------------------------------------------------------------
-------------Fonction qui genere le profil en fonction des donnees du LocalStorage------------------
--------------------------------------------------------------------------------------------------*/

function afficherProfil() {
  const donneesStockees = localStorage.getItem(CLE_STOCKAGE);
  const profil = donneesStockees ? JSON.parse(donneesStockees) : {};

  const nom = profil.nom || "Non renseigné";
  const email = profil.email || "Non renseigné";

  $("#generationProfil")
    .html(
      `<h2>Profil</h2><div><p>Identifiant :</p><p>${nom}</p></div><div><p>Email : </p><p>${email}</p></div>`,
    )
    .find("div p:first-child")
    .addClass("test");
}

// ex 1

var name = {
  firstName: "Yan",
  lastname: "Fan",
};

var list = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

var animals = {
  animal: "dog",
  noise: "bark",
  age: 3,
  type: "Golden Retriever",
  color: "Yellow",
};

// ex 2

var personne = {
  prénom: "Gharbi",
  nom: "Yasmine",
  age: 5,
  villenatale: "Morroco",
  nourriturePréférée: "Lasagna",
};
// ex3
personne.nourriturePréférée;
personne.nourriturePréférée = "Pizza";

// ex 4

var names = {
  nom: {
    prenom: "Gatsby",
    deuxiemePrenom: "Yoda",
    nomDeFamille: "Jack",
  },
};

// ex 5

function objetVide() {
  return {};
}
// ex 6

function ajouterPropriete(objet, key) {
  objet[key] = true;
  return objet;
}
var user = {
  nom: "yass",
  age: 25,
};
ajouterPropriete(user, "estEtudiant");
console.log(user);

// ex 7

function supprimerPropriete(objet, key) {
  delete objet[key];
  return objet;
}
var user = {
  nom: "yass",
  age: 25,
};
supprimerPropriete(user, "age");
console.log(user);

// ex 8

function ajouterProprieteObjet(objet, key, objet2) {
  objet[key] = objet2;
  return objet;
}
var user = {
  nom: "yass",
  age: 25,
};
var country = {
  city: "mutulleville",
};
ajouterProprieteObjet(user, "country", country);
console.log(user);

// ex 9

function ajouterNomComplet(objet) {
  if (objet.prenom && objet.nomDeFamille) {
    objet.nomComplet = objet.prenom + " " + objet.nomDeFamille;
  }
  return objet;
}
var user = {
  prenom: "Yass",
  nomDeFamille: "gharbi",
  age: 25,
};
ajouterNomComplet(user);
console.log(user);

// ex 10

function ajouterProprieteTableau(objet, key, tableau) {
  objet[key] = tableau;
  return objet;
}

var user = {
  prenom: "Yass",
  nomDeFamille: "gharbi",
  age: 25,
};
var hobbies = ["music", "singing"];
ajouterProprieteTableau(user, "skills", hobbies);
console.log(user);

// ex11 

function afficherToutesLesProprietes(objet) {
  for (var key in objet) {
    console.log(objet[key]);
  }
}
var user = {
  prenom: "Yass",
  nomDeFamille: "gharbi",
  age: 25,
};
afficherToutesLesProprietes(user);
console.log(user);

// PLUS DE PRATIQUE

// EX 1

function supprimerNombresPlusGrandsQue(num, objet) {

  


}

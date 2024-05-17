function LogDecorator(target) {
  console.log(target);
}

function methodDecorator(target, key, descriptor) {
  console.log(target);
  console.log(key);
  console.log(descriptor);
}

@LogDecorator
class Voiture {
  constructor(marque, modele, couleur, annee) {
    this.marque = marque;
    this.modele = modele;
    this.couleur = couleur;
    this.annee = annee;
  }

  @methodDecorator
  afficher() {
    console.log(
      `Voiture ${this.marque} ${this.modele} de couleur ${this.couleur} de l'année ${this.annee}`
    );
  }
}

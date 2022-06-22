//4.1 Découverte

// déclaration d'une array avec comme valeur 1 pour la clé a et 2 pour la clé b
const [a, b] = [1, 2, 3, 4]
console.log(a)
console.log(b)

// déclaration d'une array avec comme valeur 'paul' pour la clé first et 'henta' 
// pour la clé last
const {first, last} = {first: 'Paul', last: 'Henta', age: 35}
console.log(first)
console.log(last)

// 2. Afficher le 3e élément du tableau ainsi que la 
// propriété `age` de l'objet
const [,,c] = [1, 2, 3, 4]
console.log(c);
const {age} = {first: 'Paul', last: 'Henta', age: 35}
console.log(age);


// Pour chacunes des perturbations du fichier `data.js` 
// (variable `data`) récupérer dans des variables puis afficher
// leur texte, date de début et date de fin.

    Object.values(data).forEach(value => {

const {texte, dateDebut, dateFin} = value;

        console.log(texte);
        console.log(dateDebut);
        console.log(dateFin);
        console.log("--------");
      });
    

  
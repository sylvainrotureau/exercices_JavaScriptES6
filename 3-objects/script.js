//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
}

// Afficher les carractéristiques du véhicule sours la forme 
// `clé : valeur` (Ex: `id: 3221`)
console.log(`data: ${bus.vehicle}`);

//3.2 Object.values
 Object.keys(data).forEach(key => {
     console.log(key, data[key].texte);
   });


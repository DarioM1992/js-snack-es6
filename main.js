//SNACK 1
//creazione array di bici con nome e peso
//fonte nomi bici corsa https://www.siroko.com/blog/c/it/le-migliori-10-bici-endurance-sotto-i-5000-euro-nel-2025/

const biciclette = [
    {
        nome: "Cannondale Synapse Carbon 4",
        peso: 9
    },
    {
        nome: "BMC Roadmachine Two",
        peso: 8.8
    },
    {
        nome: "Ribble Allroad SLR Enthusiast",
        peso: 8.75
    },
    {
        nome: "Focus Paralane 8.9",
        peso: 8.6
    },
    {
        nome: "Lapierre Pulsium 7.0",
        peso: 8.5
    },
    {
        nome: "Giant Defy Advanced 0",
        peso: 8.32
    },
    {
        nome: "Canyon Endurace CF SLX 7 Di2",
        peso: 8.18
    },
    {
        nome: "Cube Agree C:62 Pro",
        peso: 7.9
    },
    {
        nome: "Scott Addict 20",
        peso: 7.8
    },
    {   
        nome: "Rose Reveal 06",
        peso: 7.6
    }
];

// tabella per vedere bici 
console.table(biciclette)

//calcolo con length per bici più leggera
// let biciPesoMinore = biciclette[0];
// for (let i = 1; i < biciclette.length; i++) {
//     if (biciclette[i].peso < biciPesoMinore.peso) {
//         biciPesoMinore = biciclette[i];
//     }    
// }
// console.log(biciPesoMinore);

//versione diversa di cercare bici più leggera con for of
let biciPesoMinore = biciclette[0];

for (const bici of biciclette) {
    if (bici.peso < biciPesoMinore.peso) {
        biciPesoMinore = bici;
    }
}

console.log(biciPesoMinore);
const squadre =  [
    { nome: "Inter",
      punti: 0,
      falliSubiti: 0
    },
    { nome: "Roma",
      punti: 0,
      falliSubiti: 0
    },
    { nome: "Juve",
      punti: 0,
      falliSubiti: 0
    },
    { nome: "Sassuolo",
      punti: 0,
      falliSubiti: 0
    },
    { nome: "Milan",
      punti: 0,
      falliSubiti: 0
    },
    { nome: "Salernitana",
      punti: 0,
      falliSubiti: 0
    },
    { nome: "Como",
      punti: 0,
      falliSubiti: 0
    },
    { nome: "Napoli",
      punti: 0,
      falliSubiti: 0
    },        
];

//genero numeri random da 0-100 per punti e da 0-300 per i falli subiti
for (const squadra of squadre) {
    squadra.punti = Math.floor(Math.random() * 101);
    squadra.falliSubiti = Math.floor (Math.random() * 301);
}

//creazione nuovo array con dentro solo nomi e falli subiti
const nomeEFalliSubiti = squadre.map (squadra =>
({
    nome : squadra.nome,
    falliSubiti : squadra.falliSubiti,
})
);

console.log(nomeEFalliSubiti);
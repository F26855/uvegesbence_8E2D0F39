
function kiir(szoveg) {
    const elem = document.getElementById("kiiras");
    if (elem) {
        elem.innerHTML = szoveg;
    }
}





function osszesKatonak(hazKatonak) {
    let osszeg = 0;
    for (let i = 0; i < hazKatonak.length; i++) {
        osszeg += hazKatonak[i];
    }
    kiir("Összes katona: " + osszeg);
    return osszeg;
}


function randomHaz() {
    const hazak = [
        { 
            nev: "Targaryen", 
            info: "Sárkányok ura, tűz és vér.",
            csaladtagok: ["Daenerys", "Viserys", "Rhaegar"]
        },
        { 
            nev: "Lannister", 
            info: "Gazdag, ravasz, Királyvár.",
            csaladtagok: ["Tywin", "Cersei", "Jaime"]
        },
        { 
            nev: "Stark", 
            info: "Észak urai, becsület, tél.",
            csaladtagok: ["Eddard", "Arya", "Sansa"]
        },
        { 
            nev: "Tyrell", 
            info: "Virágosvölgy urai, gazdagok, vendégszeretők.",
            csaladtagok: ["Margaery", "Loras", "Olenna"]
        },
        { 
            nev: "Greyjoy", 
            info: "Vas-szigetek urai, kalózok.",
            csaladtagok: ["Balon", "Theon", "Yara"]
        },
        { 
            nev: "Tully", 
            info: "Folyóvidék urai, család, kötelesség, becsület.",
            csaladtagok: ["Catelyn", "Edmure", "Brynden"]
        },
        { 
            nev: "Martell", 
            info: "Dorne urai, büszkék, függetlenek.",
            csaladtagok: ["Oberyn", "Doran", "Trystane"]
        },
        { 
            nev: "Arryn", 
            info: "Sasfészek urai, magasan, mint a becsület.",
            csaladtagok: ["Jon", "Lysa", "Robin"]
        },
        { 
            nev: "Baratheon", 
            info: "Viharvég urai, harcosok.",
            csaladtagok: ["Robert", "Stannis", "Renly"]
        }
    ];
    const index = Math.floor(Math.random() * hazak.length);
    const haz = hazak[index];
    kiir(
        "Véletlen ház: " + haz.nev + "<br>" +
        haz.info + "<br>" +
        "Családtagok: " + haz.csaladtagok.join(", ")
    );
}


function parbaj(karakter1, karakter2) {
    let nyertes = "";
    if (Math.random() < 0.5) {
        nyertes = karakter1 + " nyert!";
    } else {
        nyertes = karakter2 + " nyert!";
    }
    kiir(nyertes);
    return nyertes;
}


function hazMotto(hazNev) {
    let motto = "";
    if (!hazNev) {
        kiir("Nem adtál meg házat!");
        return;
    }
    const nev = hazNev.toLowerCase();
    if (nev === "targaryen") {
        motto = "Sárkányok ura, tűz és vér.";
    } else if (nev === "lannister") {
        motto = "Hallgasd meg üvöltésem!";
    } else if (nev === "baratheon") {
        motto = "A mi haragunk.";
    } else if (nev === "tyrell") {
        motto = "Erősödünk";
    } else if (nev === "greyjoy" ) {
        motto = "Mi nem vetünk.";
    } else if (nev === "stark") {
        motto = "Közeleg a tél";
    }
    else if (nev === "arryn") {
        motto = "Magas, mint a becsület";
    }
    else if (nev === "martell") {
        motto = "Nem hajolunk meg, nem törünk meg, nem roppanunk össze";
    }
    else if (nev === "tully") {
        motto = "Család, kötelesség, becsület";
    } else {
        motto = "Ismeretlen ház";
    }
    kiir("A(z) " + hazNev + " ház mottója: " + motto);
    return motto;
}

const hazak = [
        { 
            nev: "Targaryen", 
            info: "Sárkányok ura, tűz és vér.",
            
        },
        { 
            nev: "Lannister", 
            info: "Gazdag, ravasz, Királyvár.",
            
        },
        { 
            nev: "Stark", 
            info: "Észak urai, becsület, tél.",
            
        },
        { 
            nev: "Tyrell", 
            info: "Virágosvölgy urai, gazdagok, vendégszeretők.",
            
        },
        { 
            nev: "Greyjoy", 
            info: "Vas-szigetek urai, kalózok.",
            
        },
        { 
            nev: "Tully", 
            info: "Folyóvidék urai, család, kötelesség, becsület.",
            
        },
        { 
            nev: "Martell", 
            info: "Dorne urai, büszkék, függetlenek.",
            
        },
        { 
            nev: "Arryn", 
            info: "Sasfészek urai, magasan, mint a becsület.",
            csaladtagok: ["Jon", "Lysa", "Robin"]
        },
        { 
            nev: "Baratheon", 
            info: "Viharvég urai, harcosok.",
            csaladtagok: ["Robert", "Stannis", "Renly"]
        }
    ];


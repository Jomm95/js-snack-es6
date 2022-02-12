const teams = [
    {
        name :"Inter",
        punti :"",
        falliSubiti :"",
    },
    {
        name :"Milan",
        punti :"",
        falliSubiti :"",
    },
    {
        name :"Juventus",
        punti :"",
        falliSubiti :"wdwdw",
    },
    {
        name :"Salernitana",
        punti :"",
        falliSubiti :"",
    },
    {
        name :"Spal",
        punti :"",
        falliSubiti :"",
    }
];

//creo un ciclo che scorre tutti gli elementi e sostituisce numeri casuali al posto degli zeri

function nameAndFouls(teams) {

    const newArray = [];

    for(let i = 0; i < teams.length; i++) {

        teams[i].punti = randomNumber(0, 100);

        teams[i].falliSubiti = randomNumber(0, 70);

        const {name, falliSubiti} = teams[i];

        newArray.push({name, falliSubiti});

        console.log(`La squadra ${name} ha subito ${falliSubiti} falli in questa stagione`);

    }

    return newArray;
   
}

const finalResult = nameAndFouls(teams);






//funzione che genera i numeri casuali
function randomNumber (min , max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}





//creo l'array di oggetti
const bikes = [

    {
        nome : "bike1",
        peso : 12
    },

    {
        nome : "bike2",
        peso : 8
    },

    {
        nome : "bike3",
        peso : 9
    },

    {
        nome : "bike4",
        peso : 4
    },

    {
        nome : "bike5",
        peso : 15
    },
];

let lessBike = bikes[0];

for (let i = 0; i < bikes.length; i++){
    let bike = bikes[i];

    if (lessBike.peso > bike.peso) {
        lessBike = bike;
    }
}

const{nome,peso} = lessBike;

console.log(`La bici che pesa di meno è la ${nome} e pesa ${peso} kg`)
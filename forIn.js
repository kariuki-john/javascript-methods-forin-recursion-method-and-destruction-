let person = [
{

    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
            lat: "-43.9509",
            lng: "-34.4618"
        }
    }
}
]
let company = {
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"

    }

}
let txt = "";
for (let x in person) {
  txt += person[x];
}
console.log(txt);
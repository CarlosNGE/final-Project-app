const types = [
    {
      code: "EM",
      name: "Effect Monster"
    },
    {
      code: "FM",
      name: "Fusion Monster"
    },
    {
      code: "NM",
      name: "Normal Monster"
    },
    {
      code: "RM",
      name: "Ritual Monster"
    },
    {
      code: "SC",
      name: "Spell Card"
    },
    {
      code: "TM",
      name: "Toon Monster"
    },
    {
      code: "TC",
      name: "Trap Card"
    },
  ];

  let dropdown = document.getElementById("type");

    // loop through array and create an option tag
    //with the data from the objects

    types.forEach(type =>{
        let myOption = document.createElement('OPTION');
        myOption.value = type.code;
        let name = type.name;
        myOption.innerHTML = name;
    
        dropdown.append(myOption);
    });

document.addEventListener("DOMContentLoaded", init);

function init() {

const randomeCard = () =>{
    let randome = Math.floor(Math.random()* 12549);

    //Fetching randome Yu-Gi-Oh Cards
    fetch ("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        .then(response => response.json())
        .then(cards => {
            

            const nameCard = document.createElement("h2");
            nameCard.textContent = cards.data[randome].name;

            const descCard = document.createElement("p");
            descCard.textContent = cards.data[randome].desc;

            let imgCard = document.createElement("img");
            imgCard.src = cards.data[randome].card_images[0].image_url;

            let typCard = document.createElement("p");
            typCard.textContent = cards.data[randome].type;

            const cardElement = document.getElementById("yugiohcard");
            cardElement.innerHTML = "";
            
            cardElement.appendChild(nameCard);
            cardElement.appendChild(descCard);
            cardElement.appendChild(imgCard);
            cardElement.appendChild(typCard);

            console.log(cards.data[0].name);

        })
        .catch(err => {
            console.error(err.message);
        });

};

document.getElementById("cardButton").addEventListener("click", randomeCard);

/////////////

// const typeCard = () =>{

    

// //Fetching randome Yu-Gi-Oh Cards
// fetch ("https://db.ygoprodeck.com/api/v7/cardinfo.php")
// .then(response => response.json())
// .then(cards => {
    
        
    


   
    

// })
// .catch(err => {
//     console.error(err.message);
// });

// }





}



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

  // let dropdown = document.getElementById("type");

  //   // loop through array and create an option tag
  //   //with the data from the objects

  //   types.forEach(type =>{
  //       let myOption = document.createElement('OPTION');
  //       myOption.value = type.code;
  //       let name = type.name;
  //       myOption.innerHTML = name;
    
  //       dropdown.append(myOption);
  //   });

    



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
            nameCard.className = "cardtitle";

            const descCard = document.createElement("p");
            descCard.textContent = cards.data[randome].desc;
            descCard.className = "carddesc";

            let imgCard = document.createElement("img");
            imgCard.src = cards.data[randome].card_images[0].image_url;
            imgCard.className = "cardimg";

            let typCard = document.createElement("p");
            typCard.textContent = cards.data[randome].type;
            typCard.className = "cardtype";

            let atkCard = document.createElement("p")
            atkCard.textContent = cards.data[randome].atk;
            atkCard.className = "atkpower";

            let defCard = document.createElement("p")
            defCard.textContent = cards.data[randome].def;
            defCard.className = "defpower";


            const cardElement = document.getElementById("yugiohcard");
            cardElement.innerHTML = "";

            
            
            cardElement.appendChild(nameCard);
            cardElement.appendChild(descCard);
            cardElement.appendChild(imgCard);
            cardElement.appendChild(typCard);
            cardElement.appendChild(atkCard);
            cardElement.appendChild(defCard);

            

            console.log(cards.data[randome].name);

        })
        .catch(err => {
            console.error(err.message);
        });

};

document.getElementById("cardButton").addEventListener("click", randomeCard);






///////////////////////////////////////////////////////////////////////

//const typeCard = () =>{

    //let cards = [];

    // //Fetching type Yu-Gi-Oh Cards
    // fetch ("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    // .then((response) => response.json())
    // .then((data) => {

    //   cards = data;
      
      

      types.forEach((item) => {
        // console.log(item.name);
        const option = document.createElement("OPTION");
        option.value = item.name;
        option.innerText = item.name;
        
        type.appendChild(option); 
      });    
    //})   

    // .catch(err => {
    //     console.error(err.message);
    // });
    

     // DOM ref to the select dropdown
     let card = document.getElementById("type");

     card.addEventListener("change", (e) => {

      const cardType = e.target.value;

      fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?type=" + cardType )
        .then(response => response.json())
        .then(res => {


          const card1 = res.data[Math.round(Math.random() * res.data.length)].card_images[0].image_url;
          // console.log(res.data[Math.round(Math.random() * res.data.length)].card_images[0].image_url);
          // console.log(res.data[Math.round(Math.random() * res.data.length)].card_images[0].image_url);
          // console.log(res.data[Math.round(Math.random() * res.data.length)].card_images[0].image_url);
          // console.log(res.data[Math.round(Math.random() * res.data.length)].card_images[0].image_url);

          
          
          //create a loop

          // let imgCard = document.createElement("img");
          //   imgCard.src = res.data[Math.round(Math.random() * res.data.length)].card_images[0].image_url;
          //   imgCard.className = "cardimg";

          //   let nameCard = document.createElement("h2");
          //   nameCard.textContent = card1.name;
          //   nameCard.className = "cardtitle";

          const cardElement = document.getElementById("yugiohcard");
          cardElement.innerHTML = "";



          let c1 = document.createElement("img");
          c1.src = card1;

          let c1name =document.createElement("h2");
          c1name.textContent = res.data[Math.round(Math.random() * res.data.length)].name;
          

          console.log(c1);
          console.log(res.data[Math.round(Math.random() * res.data.length)].name);
         

          cardElement.append(c1);
          cardElement.append(c1name);

          

         


         

        })

        

      const id = e.target.value;
      
      // console.log(id);


     });



}




//}



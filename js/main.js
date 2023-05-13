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

          const myRam = Math.round(Math.random() * res.data.length);
          const myRam2 = Math.round(Math.random() * res.data.length);
          const myRam3 = Math.round(Math.random() * res.data.length);
          const myRam4 = Math.round(Math.random() * res.data.length);
          const myRam5 = Math.round(Math.random() * res.data.length);
          


          const card1 = res.data[myRam].card_images[0].image_url;
          const card2 = res.data[myRam2].card_images[0].image_url;
          const card3 = res.data[myRam3].card_images[0].image_url;
          const card4 = res.data[myRam4].card_images[0].image_url;
          const card5 = res.data[myRam5].card_images[0].image_url;

          
          //create a loop


          const cardElement = document.getElementById("yugiohcard");
          cardElement.innerHTML = "";

          // Card 1

          let c1 = document.createElement("img");
          c1.src = card1;
          c1.className = "cardimg";

          const c1Name = document.createElement("h2");
          c1Name.textContent = res.data[myRam].name;
          c1Name.className = "cardtitle";

          const c1Type = document.createElement("p");
          c1Type.textContent = res.data[myRam].type;
          c1Type.className = "cardtype";

          const c1Desc = document.createElement("p");
          c1Desc.textContent = res.data[myRam].desc;
          c1Desc.className = "carddesc";

          const c1Atk = document.createElement("p");
          c1Atk.textContent = res.data[myRam].atk;
          c1Atk.className = "atkpower";

          const c1Def = document.createElement("p");
          c1Def.textContent = res.data[myRam].def;
          c1Def.className = "defpower";

          //Card 2

          let c2 =document.createElement("img");
          c2.src = card2;
          c2.className = "cardimg2";

          const c2Name = document.createElement("h2");
          c2Name.textContent = res.data[myRam2].name;
          c2Name.className = "cardtitle2";

          const c2Type = document.createElement("p");
          c2Type.textContent = res.data[myRam2].type;
          c2Type.className = "cardtype2";

          const c2Desc = document.createElement("p");
          c2Desc.textContent = res.data[myRam2].desc;
          c2Desc.className = "carddesc2";

          const c2Atk = document.createElement("p");
          c2Atk.textContent = res.data[myRam2].atk;
          c2Atk.className = "atkpower2";

          const c2Def = document.createElement("p");
          c2Def.textContent = res.data[myRam2].def;
          c2Def.className = "defpower2";

          //Card 3

          let c3 =document.createElement("img");
          c3.src = card3;
          c3.className = "cardimg3";

          const c3Name = document.createElement("h2");
          c3Name.textContent = res.data[myRam3].name;
          c3Name.className = "cardtitle3";

          const c3Type = document.createElement("p");
          c3Type.textContent = res.data[myRam3].type;
          c3Type.className = "cardtype3";

          const c3Desc = document.createElement("p");
          c3Desc.textContent = res.data[myRam3].desc;
          c3Desc.className = "carddesc3";

          const c3Atk = document.createElement("p");
          c3Atk.textContent = res.data[myRam3].atk;
          c3Atk.className = "atkpower3";

          const c3Def = document.createElement("p");
          c3Def.textContent = res.data[myRam3].def;
          c3Def.className = "defpower3";

          //Card 4

          let c4 =document.createElement("img");
          c4.src = card4;
          c4.className = "cardimg4";

          const c4Name = document.createElement("h2");
          c4Name.textContent = res.data[myRam4].name;
          c4Name.className = "cardtitle4";

          const c4Type = document.createElement("p");
          c4Type.textContent = res.data[myRam4].type;
          c4Type.className = "cardtype4";

          const c4Desc = document.createElement("p");
          c4Desc.textContent = res.data[myRam4].desc;
          c4Desc.className = "carddesc4";

          const c4Atk = document.createElement("p");
          c4Atk.textContent = res.data[myRam4].atk;
          c4Atk.className = "atkpower4";

          const c4Def = document.createElement("p");
          c4Def.textContent = res.data[myRam4].def;
          c4Def.className = "defpower4";

          //Card 5

          let c5 =document.createElement("img");
          c5.src = card5;
          c5.className = "cardimg5";

          const c5Name = document.createElement("h2");
          c5Name.textContent = res.data[myRam5].name;
          c5Name.className = "cardtitle5";

          const c5Type = document.createElement("p");
          c5Type.textContent = res.data[myRam5].type;
          c5Type.className = "cardtype5";

          const c5Desc = document.createElement("p");
          c5Desc.textContent = res.data[myRam5].desc;
          c5Desc.className = "carddesc5";

          const c5Atk = document.createElement("p");
          c5Atk.textContent = res.data[myRam5].atk;
          c5Atk.className = "atkpower5";

          const c5Def = document.createElement("p");
          c5Def.textContent = res.data[myRam5].def;
          c5Def.className = "defpower5";


          

          

          
          

          
          

          console.log(c1);
          console.log(res.data[myRam].name);
          console.log(res.data[myRam].type);
          console.log(res.data[myRam].desc);

          // console.log(c2);
          // console.log(c2Name);
         

          cardElement.append(c1);     
          cardElement.append(c1Name);
          cardElement.append(c1Type);
          cardElement.append(c1Desc);
          cardElement.append(c1Atk);
          cardElement.append(c1Def);

          cardElement.append(c2);
          cardElement.append(c2Name);
          cardElement.append(c2Type);
          cardElement.append(c2Desc);
          cardElement.append(c2Atk);
          cardElement.append(c2Def);

          cardElement.append(c3);
          cardElement.append(c3Name);
          cardElement.append(c3Type);
          cardElement.append(c3Desc);
          cardElement.append(c3Atk);
          cardElement.append(c3Def);

          cardElement.append(c4);
          cardElement.append(c4Name);
          cardElement.append(c4Type);
          cardElement.append(c4Desc);
          cardElement.append(c4Atk);
          cardElement.append(c4Def);

          cardElement.append(c5);
          cardElement.append(c5Name);
          cardElement.append(c5Type);
          cardElement.append(c5Desc);
          cardElement.append(c5Atk);
          cardElement.append(c5Def);


          

         


         

        })

        

      const id = e.target.value;
      
      // console.log(id);


     });



}




//}



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

          const randomContainer =document.getElementById("randomcards");
          randomContainer.innerHTML = "";
          
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
        const myRam6 = Math.round(Math.random() * res.data.length);
        


        const card1 = res.data[myRam].card_images[0].image_url;
        const card2 = res.data[myRam2].card_images[0].image_url;
        const card3 = res.data[myRam3].card_images[0].image_url;
        const card4 = res.data[myRam4].card_images[0].image_url;
        const card5 = res.data[myRam5].card_images[0].image_url;
        const card6 = res.data[myRam6].card_images[0].image_url;

        const cardElement = document.getElementById("yugiohcard");
        cardElement.innerHTML = "";

        const randomContainer =document.getElementById("randomcards");
        randomContainer.innerHTML = "";

        let popup = document.getElementById("popup");
        
        let closePop = document.getElementById("closepop");

        const cardPop = document.getElementById("info");
      
        
        //create a loop

        

        function openPopup() {
          cardPop.innerHTML = "";
          popup.classList.add("open-popup");

          let c1Popimg = document.createElement("img");
          c1Popimg.src = res.data[myRam].card_images[0].image_url;
          c1Popimg.className = "cardimg"
          cardPop.appendChild(c1Popimg);

          const c1Name = document.createElement("h2");
          c1Name.textContent = res.data[myRam].name;
          c1Name.className = "cardtitle";
          cardPop.appendChild(c1Name);
          
          const c1Type = document.createElement("p");
          c1Type.textContent = res.data[myRam].type;
          c1Type.className = "cardtype";
          cardPop.appendChild(c1Type);

          const c1Desc = document.createElement("p");
          c1Desc.textContent = res.data[myRam].desc;
          c1Desc.className = "carddesc";
          cardPop.appendChild(c1Desc);

          const c1Atk = document.createElement("p");
          c1Atk.textContent = res.data[myRam].atk;
          c1Atk.className = "atkpower";
          cardPop.appendChild(c1Atk);

          const c1Def = document.createElement("p");
          c1Def.textContent = res.data[myRam].def;
          c1Def.className = "defpower";
          cardPop.appendChild(c1Def);

        }

        function openPopup2() {
          cardPop.innerHTML = "";
          popup.classList.add("open-popup");
          
          let c2Popimg = document.createElement("img");
          c2Popimg.src = res.data[myRam2].card_images[0].image_url;
          c2Popimg.className = "cardimg"
          cardPop.appendChild(c2Popimg);

          const c2Name = document.createElement("h2");
          c2Name.textContent = res.data[myRam2].name;
          c2Name.className = "cardtitle";
          cardPop.appendChild(c2Name);
          
          const c2Type = document.createElement("p");
          c2Type.textContent = res.data[myRam2].type;
          c2Type.className = "cardtype";
          cardPop.appendChild(c2Type);

          const c2Desc = document.createElement("p");
          c2Desc.textContent = res.data[myRam2].desc;
          c2Desc.className = "carddesc";
          cardPop.appendChild(c2Desc);

          const c2Atk = document.createElement("p");
          c2Atk.textContent = res.data[myRam2].atk;
          c2Atk.className = "atkpower";
          cardPop.appendChild(c2Atk);

          const c2Def = document.createElement("p");
          c2Def.textContent = res.data[myRam2].def;
          c2Def.className = "defpower";
          cardPop.appendChild(c2Def);
          
        }

        function openPopup3() {
          cardPop.innerHTML = "";
          popup.classList.add("open-popup");

          let c3Popimg = document.createElement("img");
          c3Popimg.src = res.data[myRam3].card_images[0].image_url;
          c3Popimg.className = "cardimg"
          cardPop.appendChild(c3Popimg);

          const c3Name = document.createElement("h2");
          c3Name.textContent = res.data[myRam3].name;
          c3Name.className = "cardtitle";
          cardPop.appendChild(c3Name);
          
          const c3Type = document.createElement("p");
          c3Type.textContent = res.data[myRam3].type;
          c3Type.className = "cardtype";
          cardPop.appendChild(c3Type);

          const c3Desc = document.createElement("p");
          c3Desc.textContent = res.data[myRam3].desc;
          c3Desc.className = "carddesc";
          cardPop.appendChild(c3Desc);

          const c3Atk = document.createElement("p");
          c3Atk.textContent = res.data[myRam3].atk;
          c3Atk.className = "atkpower";
          cardPop.appendChild(c3Atk);

          const c3Def = document.createElement("p");
          c3Def.textContent = res.data[myRam3].def;
          c3Def.className = "defpower";
          cardPop.appendChild(c3Def);
        }

        function openPopup4() {
          cardPop.innerHTML = "";
          popup.classList.add("open-popup");

          let c4Popimg = document.createElement("img");
          c4Popimg.src = res.data[myRam4].card_images[0].image_url;
          c4Popimg.className = "cardimg"
          cardPop.appendChild(c4Popimg);

          const c4Name = document.createElement("h2");
          c4Name.textContent = res.data[myRam4].name;
          c4Name.className = "cardtitle";
          cardPop.appendChild(c4Name);
          
          const c4Type = document.createElement("p");
          c4Type.textContent = res.data[myRam4].type;
          c4Type.className = "cardtype";
          cardPop.appendChild(c4Type);

          const c4Desc = document.createElement("p");
          c4Desc.textContent = res.data[myRam4].desc;
          c4Desc.className = "carddesc";
          cardPop.appendChild(c4Desc);

          const c4Atk = document.createElement("p");
          c4Atk.textContent = res.data[myRam4].atk;
          c4Atk.className = "atkpower";
          cardPop.appendChild(c4Atk);

          const c4Def = document.createElement("p");
          c4Def.textContent = res.data[myRam4].def;
          c4Def.className = "defpower";
          cardPop.appendChild(c4Def);
        }

        function openPopup5() {
          cardPop.innerHTML = "";
          popup.classList.add("open-popup");

          let c5Popimg = document.createElement("img");
          c5Popimg.src = res.data[myRam5].card_images[0].image_url;
          c5Popimg.className = "cardimg"
          cardPop.appendChild(c5Popimg);

          const c5Name = document.createElement("h2");
          c5Name.textContent = res.data[myRam5].name;
          c5Name.className = "cardtitle";
          cardPop.appendChild(c5Name);
          
          const c5Type = document.createElement("p");
          c5Type.textContent = res.data[myRam5].type;
          c5Type.className = "cardtype";
          cardPop.appendChild(c5Type);

          const c5Desc = document.createElement("p");
          c5Desc.textContent = res.data[myRam5].desc;
          c5Desc.className = "carddesc";
          cardPop.appendChild(c5Desc);

          const c5Atk = document.createElement("p");
          c5Atk.textContent = res.data[myRam5].atk;
          c5Atk.className = "atkpower";
          cardPop.appendChild(c5Atk);

          const c5Def = document.createElement("p");
          c5Def.textContent = res.data[myRam5].def;
          c5Def.className = "defpower";
          cardPop.appendChild(c5Def);
        }

        function openPopup6() {
          cardPop.innerHTML = "";
          popup.classList.add("open-popup");

          let c6Popimg = document.createElement("img");
          c6Popimg.src = res.data[myRam6].card_images[0].image_url;
          c6Popimg.className = "cardimg"
          cardPop.appendChild(c6Popimg);

          const c6Name = document.createElement("h2");
          c6Name.textContent = res.data[myRam6].name;
          c6Name.className = "cardtitle";
          cardPop.appendChild(c6Name);
          
          const c6Type = document.createElement("p");
          c6Type.textContent = res.data[myRam6].type;
          c6Type.className = "cardtype";
          cardPop.appendChild(c6Type);

          const c6Desc = document.createElement("p");
          c6Desc.textContent = res.data[myRam6].desc;
          c6Desc.className = "carddesc";
          cardPop.appendChild(c6Desc);

          const c6Atk = document.createElement("p");
          c6Atk.textContent = res.data[myRam6].atk;
          c6Atk.className = "atkpower";
          cardPop.appendChild(c6Atk);

          const c6Def = document.createElement("p");
          c6Def.textContent = res.data[myRam6].def;
          c6Def.className = "defpower";
          cardPop.appendChild(c6Def);
        }

       
        function closePopup() {
          popup.classList.remove("open-popup");
        }
        

        // Cards

        let c1 = document.createElement("img");
        c1.src = card1;
        c1.className = "ramcardimg";

        let c2 =document.createElement("img");
        c2.src = card2;
        c2.className = "ramcardimg2";

        let c3 =document.createElement("img");
        c3.src = card3;
        c3.className = "ramcardimg3";

        let c4 =document.createElement("img");
        c4.src = card4;
        c4.className = "ramcardimg4";

        let c5 =document.createElement("img");
        c5.src = card5;
        c5.className = "ramcardimg5";

        let c6 =document.createElement("img");
        c6.src = card6;
        c6.className = "ramcardimg6";

        

        c1.addEventListener("click", openPopup);
        c2.addEventListener("click", openPopup2);
        c3.addEventListener("click", openPopup3);
        c4.addEventListener("click", openPopup4);
        c5.addEventListener("click", openPopup5);
        c6.addEventListener("click", openPopup6);
      

        closePop.addEventListener("click", closePopup);

        console.log(c1);
        console.log(res.data[myRam].name);
        console.log(res.data[myRam].type);
        console.log(res.data[myRam].desc);

       
       

        randomContainer.append(c1);     
        randomContainer.append(c2);
        randomContainer.append(c3);
        randomContainer.append(c4);
        randomContainer.append(c5);
        randomContainer.append(c6);

        let img1 = document.getElementById("god1");
        img1.setAttribute("style", "bottom:0%");
        
        

      })
      .catch(err => {
        console.error(err.message);
    });

      

    const id = e.target.value;
    
    


   });

       ///////////////////////////////////////////////////

   let cardNames = document.getElementById("cardname");
   let searchBtns = document.getElementById("searchbtn");
   let result = document.getElementById("yugiohcard");

   let getCard = () => {
      let cardNameS = cardNames.value;
      let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardNameS}`;

      if (cardNameS.length <= 0) {

        result.innerHTML = `<h3 class="mgs">Please enter a card name</h3>`;
        
      }

      else{
        fetch(url)
          .then((resp) => resp.json())
          .then((res) =>{

          const nameCard = document.createElement("h2");
          nameCard.textContent = res.data[0].name;
          nameCard.className = "cardtitle";

          const descCard = document.createElement("p");
          descCard.textContent = res.data[0].desc;
          descCard.className = "carddesc";

          let imgCard = document.createElement("img");
          imgCard.src = res.data[0].card_images[0].image_url;
          imgCard.className = "cardimg";

          let typCard = document.createElement("p");
          typCard.textContent = res.data[0].type;
          typCard.className = "cardtype";

          let atkCard = document.createElement("p")
          atkCard.textContent = res.data[0].atk;
          atkCard.className = "atkpower";

          let defCard = document.createElement("p")
          defCard.textContent = res.data[0].def;
          defCard.className = "defpower";

            const cardElement = document.getElementById("yugiohcard");
            cardElement.innerHTML = "";

            cardElement.appendChild(nameCard);
            cardElement.appendChild(descCard);
            cardElement.appendChild(imgCard);
            cardElement.appendChild(typCard);
            cardElement.appendChild(atkCard);
            cardElement.appendChild(defCard);

            searchName1 = document.getElementById("cardname");
            searchName1.value = "";


            const randomContainer =document.getElementById("randomcards");
            randomContainer.innerHTML = "";
            

            console.log(res);
            console.log(res.data[0].card_images[0].image_url)
          })
          .catch(err => {
            console.error(err.message);
        }); 
      }
   };

   searchBtns.addEventListener("click", getCard);
   

   window.addEventListener("load", getCard);

   /////////////////////////////////

   

}




//}


types.forEach(type =>{
    let myOption = document.createElement('OPTION');
    myOption.value = type.code;
    let name = ;
    myOption.innerHTML = type;

    dropdown.append(myOption);
});

types.forEach(card =>{
    let myOption = document.createElement('OPTION');
    myOption.value = card.data[randome].type;
    let type = card.data[randome].type;
    myOption.innerHTML = type;

    dropdown.append(myOption);
});
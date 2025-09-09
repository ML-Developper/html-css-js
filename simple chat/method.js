






function message(block, mdg, block2) {
    let block1 = document.getElementById(block);
    let block3 = document.getElementById(block2);
    let message = document.getElementById(mdg).value;
    let newItem = document.createElement("div");
    newItem.className = "item";

    newItem.textContent = message;
    block1.appendChild(newItem);


    let newItem1 = document.createElement("div");
    newItem1.className = "item";
    newItem1.style.paddingLeft = "50px";
    newItem1.textContent = message;
    block3.appendChild(newItem1);


}



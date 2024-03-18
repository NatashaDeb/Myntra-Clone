

function onLoad(){//all the functions that must be loaded initially are called here
    displayBagCount();
}

let bagItems=[];
onLoad();
function addToBag(itemID){
    bagItems.push(itemID);
    displayBagCount(); //it should be called whenever bagItems is updated
}

function displayBagCount(){
    let bagCountElement = document.querySelector('.bag-count');
    if(bagItems.length>0){// in case there is any item is bag show number of items in bag 
        bagCountElement.style.visibility = 'visible';
        bagCountElement.innerText = bagItems.length;
    }
    else{// in case there is no item is bag don't show anything in bag 
        bagCountElement.style.visibility = 'hidden';
    }
     
}







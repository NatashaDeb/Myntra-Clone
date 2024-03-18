let bagItems;

onLoad();
function onLoad(){//all the functions that must be loaded initially are called here
    let bagItemsStr = localStorage.getItem('bagItem'); //we are getting data from localStorage in String format
    console.log(bagItemsStr);
    bagItems = bagItemsStr? JSON.parse(bagItemsStr): []; //if localStorage is present assign that to bagItems array else assign a empty array
    console.log(bagItems);
    displayBagCount();
    displayMenSectionItems();
    displaywomenSectionItems();
}
function addToBag(itemID){
    console.log(itemID);
    bagItems.push(itemID);
    localStorage.setItem('bagItem', JSON.stringify(bagItems));
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


function displayMenSectionItems(){
    let menItemContainerElement = document.querySelector('#men-section-container');
    if(!menItemContainerElement){//return if you have not got any menItemContainerElement i,e falsy value
        return;
    }
let menInnerHTML = '';
menItems.forEach(item =>{
    menInnerHTML+=
    `
<div class="item-container">
<a href="#">
    <img class="item-image"  src="${item["item-image"]}" >
</a>
<div class="rating">
    ${item.rating.stars}⭐| ${item.rating.noOfReviews}K
</div>
<div class="company-name">${item["company-name"]}</div>
<div class="item-name">${item["item-name"]}</div>
<div class="pricing">
    <span class="current-price">Rs ${item["current-price"]}</span>
    <span class="original-price">Rs ${item["original-price"]}</span>
    <span class="discount">(${item.discount}% OFF)</span> <br>
    <button class="button-addToBag" onclick="addToBag(${item.id});">Add to Bag</button>
</div>
</div>
`;
})
menItemContainerElement.innerHTML = menInnerHTML;
}

function displaywomenSectionItems(){
    let womenItemContainerElement = document.querySelector('#women-section-container');
    if(!womenItemContainerElement){//return if you have not got any womenItemContainerElement i,e falsy value
        return;
    }
let womenInnerHTML = '';
womenItems.forEach(item =>{
    womenInnerHTML+=
    `
<div class="item-container">
<a href="#">
    <img class="item-image"  src="${item["item-image"]}" >
</a>
<div class="rating">
    ${item.rating.stars}⭐| ${item.rating.noOfReviews}K
</div>
<div class="company-name">${item["company-name"]}</div>
<div class="item-name">${item["item-name"]}</div>
<div class="pricing">
    <span class="current-price">Rs ${item["current-price"]}</span>
    <span class="original-price">Rs ${item["original-price"]}</span>
    <span class="discount">(${item.discount}% OFF)</span> <br>
    <button class="button-addToBag"  onclick="addToBag('${item.id}');">Add to Bag</button>
</div>
</div>
`;
})
womenItemContainerElement.innerHTML = womenInnerHTML;
}







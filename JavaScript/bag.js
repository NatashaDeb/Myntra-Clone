let bagItemObjects; //it should be defined first after that onLoad() should be called

onLoad();
function onLoad(){
    displayBagItems();
    displayBagSummary();
}

function displayBagSummary(){
   const CONVINIENCE_FEES =99;
    let bagSummaryElement = document.querySelector('.bag-summary');
    let totalItems = bagItemObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;
    let finalPrice = 0;
    bagItemObjects.forEach(item=>{
      totalMRP+=item["original-price"]; 
      totalDiscount+=item["original-price"]-item["current-price"];
    })

    finalPrice = totalMRP-totalDiscount+CONVINIENCE_FEES;

    bagSummaryElement.innerHTML = `

    <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItems} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs ${totalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs ${CONVINIENCE_FEES}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${finalPrice}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
    `;
}

function loadBagItemObjects(){
    console.log(bagItems);
    bagItemObjects = bagItems.map(itemID=>{
        for(let i=0; i<=14; i++){
          if(i<menItems.length){
            if(itemID==menItems[i].id){
             // console.log(menItems[i].id, itemID)
              return menItems[i];
          }
          } 
            else{
             // console.log(womenItems[i-6].id,itemID)
              if(itemID==womenItems[i-6].id){
                return womenItems[i-6];
            }
            }
        }
    });
    console.log(bagItemObjects);
  
}

function displayBagItems(){
    loadBagItemObjects();
    let bagContainerElement = document.querySelector('.bag-items-container');
      if(!bagContainerElement){
        return;
      }
    let bagInnerHTML='';
    bagItemObjects.forEach(bagItem => {
      bagInnerHTML+=generateBagItemHTML(bagItem);
    }); 
    
    bagContainerElement.innerHTML = bagInnerHTML;
}

function generateBagItemHTML(item){
    return `
    <div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${item["item-image"]}">
    </div>
    <div class="item-right-part">
      <div class="company">${item["company-name"]}</div>
      <div class="item-name">${item["item-name"]}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item["current-price"]}</span>
        <span class="original-price">Rs ${item["original-price"]}</span>
        <span class="discount-percentage">(${item["discount"]}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item["return-period"]} return available</span>
      </div>
      <div class="delivery-details">
        Delivery by
<span class="delivery-details-days">${item["delivery-date"]}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeBagItems(${item.id});">X</div>
  </div>
    `
}

function removeBagItems(itemID){
  console.log(itemID);
 bagItems = bagItems.filter(bagItemID=> bagItemID !=itemID); //it will return the values of items which is not selected for deletion
 localStorage.setItem('bagItem', JSON.stringify(bagItems)); //after removing from bag updated local storage
 loadBagItemObjects();// loaded again
 displayBagItems(); //displayed again
 displayBagCount();
 displayBagSummary();
}
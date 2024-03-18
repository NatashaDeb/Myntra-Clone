displayMenSectionItems();


function displayMenSectionItems(){
    let menItemContainerElement = document.querySelector('#men-section-container');

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
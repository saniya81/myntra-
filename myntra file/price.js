function displayContent() {
    let container = document.querySelector(".items-container");
    let innerhtml = "";
    data.forEach((element, index) => {
        innerhtml += `
            <div class="item-container">
                <img class="item-img" src="${element.image}">
                <div class="rating">
                    ${element.rating}
                </div>
                <div class="company-name">${element.name}</div>
                <div class="item-name">${element.item_name}</div>
                <div class="price">
                    <span class="current-price">${element.price.current_price}</span>
                    <span class="original-price">${element.price.original_price}</span>
                    <span class="discount">${element.price.discount}</span>
                </div>
                <button class="btn-add-bag">Add to Bag</button>
            </div>
            
            `
    })
    container.innerHTML = innerhtml;
}
displayContent();
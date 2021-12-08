//const

const productsEl = document.querySelector('.products');
const cartItemsEl = document.querySelector('.cart-items');
const subtotalEl = document.querySelector('.subtotal');
const totalItemsInCartEl = document.querySelector('.total-tiems-in-cart');


console.log(products)

// js09, Render products

/* 
products

innerHTML +=

onClick : js renderingg element ...making variable
*/

function renderProducts() {
    products.forEach((product)=>{
        productsEl.innerHTML +=`

        <div class="item">
        <div class="item-container">
            <div class="item-img">
                <img src=${product.imgSrc} alt="">
            </div>
            <div class="desc">
                <h2>${product.name}</h2>
                <h2><small>$</small>${product.price}</h2>
                <p>                    
                    ${product.description}
                </p>
            </div>
            <div class="add-to-wishlist">
                <img src="./icons/heart.png" alt="add to wish list">
            </div>
            <div class="add-to-cart" >
                <img src="./icons/bag-plus.png" alt="add to cart">
            </div>
        </div>
    </div>        
        `;
    });
}
renderProducts();

//🍖js13-20
let cart = [];

// 🍀js13, add to cart

function addToCart(params) {
    
}

addToCart();
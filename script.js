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
            <div class="add-to-cart" onClick="addToCart(${product.id})">
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
/* 🍄
10 EMPTY ARRAY 

20.  clicked item.id === products.id...cart adding

array.find

find...const item
..spread operator

numberOfUnits:1 adding on products.js

30. clicked item.id === products.id, not add it on cart array.  amount up

array.some

40. updateCart -> renderCartItems

*/

// function addToCart(p_id) {

//     if (cart.some((a)=>{a.id ===p_id})) {


//         // 🍚
//         // changeNumberOfUnits('plus',p_id)
//         console.log('add and minus')
        
//     } else {
//         const item = products.find((a)=>{a.id ===p_id});
        
//         cart.push({
//             ...item,
//         numberOfUnits:1,
//     });

//         // cart.push({...item});
//         /* 🍚 */
//     }
//     console.log(cart)
//     updateCart();
    
// }

function addToCart(p_id) {
    if (cart.some((a)=>a.id ===p_id)) {
        console.log("same")
        
    } else {

        let item = products.find((b)=>b.id === p_id);
        cart.push(item);
        
    }
    console.log(cart)
}



function changeNumberOfUnits() {
    
}

function updateCart(params) {
    
}
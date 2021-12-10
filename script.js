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

renderProducts();
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

//🍖js13-20
// let cart = [];

// localstorage
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();


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

function addToCart(p_id) {
    if (cart.some((a)=>a.id ===p_id)) {
        console.log("same")
        /* 🍚 */
    } else {

        let item = products.find((b)=>b.id === p_id);
        // cart.push(item);
        cart.push(
            {
                ...item,
                numberOfUnits:1,
            }
        );
        
    }
    console.log(cart)
    updateCart();
}

// js13-40 update cart
/* 
save cart to local storage
*/
function updateCart() {

    renderCartItems();
    renderSubtotal();
    /* js 45   🍚*/
}


/* js13-40

onclick*/

function renderCartItems() {

    cartItemsEl.innerHTML="";

    cart.forEach((pp_item)=>{
        cartItemsEl.innerHTML +=`        
            <div class="cart-item">
                <div class="item-info" onclick="removeItemFromCart(${pp_item.id})">
                    <img src="${pp_item.imgSrc}" alt="${pp_item.name}">
                    <h4>${pp_item.name}</h4>
                </div>
                <div class="unit-price">
                    <small>$</small>${pp_item.price}
                </div>
                <div class="units">
                    <div class="btn minus" onclick="changeNumberOfUnits('plus',${pp_item.id})" >+</div>
                    <div class="number">${pp_item.numberOfUnits}</div>
                    <div class="btn plus"  onclick="changeNumberOfUnits('minus',${pp_item.id})" >-</div>           
                </div>
            </div>
        `;
    });
    
}


// js28, + - click, change number of units

/* 🍄

10 item.id === onclick..id 

 > minus +1

 < plus + insotck 

 20. return. 


*/
function changeNumberOfUnits(action,id) {
    cart =cart.map((item)=>{
        let numberOfUnits = item.numberOfUnits;

        if (item.id ===id) {
            if (action ==="minus" && numberOfUnits >1 ) {
                numberOfUnits--;                
            } else if (action ==="plus" && numberOfUnits < item.instock) {
                numberOfUnits++;                
            }
        }
        return{
            ...item,
            numberOfUnits: numberOfUnits,
        };    
    });
    updateCart();
}

/* js35, calculate */
let totalPrice = 0;
let totalItems = 0;

function renderSubtotal() {
    

    cart.forEach((pp_item)=>{
        totalPrice += pp_item.price * pp_item.numberOfUnits;
        totalItems += pp_item.numberOfUnits;
    });

    subtotalEl.innerHTML = `Subtotal(${totalItems} items) : $ ${totalPrice.toFixed(2)}`;
    totalItemsInCartEl.innerHTML = totalItems;
}

// js41. remove item from cart

function removeItemFromCart(p_id) {
    console.log('remove')
    cart = cart.filter(pp_item => pp_item.id !== p_id);

    updateCart();
}

// localstorage.clear(), location.reload

const deleteAllBtn = document.querySelector('.delete-all-btn');
const checkoutBtn = document.querySelector('.checkoutBtn');


deleteAllBtn.addEventListener("click",()=>{
    localStorage.clear();
    location.reload();
});

checkoutBtn.addEventListener('click',()=>{
    localStorage.clear();
    location.reload();

    alert(`Thank you ${totalPrice} ${totalItems}`);
});



























let cart =
JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){

    cart.push({
        name:name,
        price:price
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(name + " Added to Cart");
}

function openProduct(name,price,image){

    localStorage.setItem(
        "selectedProduct",

        JSON.stringify({
            name,
            price,
            image
        })
    );
    window.location.href =
    "product.html";
}

function updateCartCount(){

    let count =
    JSON.parse(
    localStorage.getItem("cart")
    ) || [];

    let element =
    document.getElementById(
    "cartCount"
    );

    if(element){
        element.innerText =
        count.length;
    }
}

updateCartCount();

function displayCart(){

    let cartItems =
    document.getElementById("cartItems");

    let total =
    document.getElementById("total");

    if(!cartItems) return;

    cartItems.innerHTML="";

    let sum=0;

    cart.forEach((item,index)=>{

        sum += item.price;

        cartItems.innerHTML += `
        <div class="card">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button
            onclick="removeItem(${index})">
            Remove
            </button>
        </div>
        `;
    });

    total.innerHTML =
    "Total: ₹" + sum;
}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}

function searchProducts(){

    let input =
    document.getElementById("search")
    .value.toLowerCase();

    let cards =
    document.querySelectorAll(".card");

    cards.forEach(card=>{

        let text =
        card.innerText.toLowerCase();

        if(text.includes(input))
            card.style.display="block";
        else
            card.style.display="none";
    });
}

displayCart();
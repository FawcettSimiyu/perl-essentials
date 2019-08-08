var ShoppingCart = (function($) {
  "use strict";

  // Change necesarry DOM Elements
  var productsEl = document.querySelector(".products"),
      cartEl =     document.querySelector(".shopping-cart-list"),
      productQuantityEl = document.querySelector(".product-quantity"),
      emptyCartEl = document.querySelector(".empty-cart-btn"),
      cartCheckoutEl = document.querySelector(".cart-checkout"),
      totalPriceEl = document.querySelector(".total-price");

  // Fake JSON data array here should be API call
  var products = [
    {
      id: 0,
      name: "Lip Balm",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0048.jpg",
      price: 200
    },
    {
      id: 1,
      name: "Pearl Nail Polish",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0047.jpg",
      price: 200,
    },
    {
      id: 2,
      name: "BYS Eye & Cheek Pallete",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0026.jpg",
      price: 600
    },
    {
      id: 3,
      name: "Brushes",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0045.jpg",
      price: 999
    },
    {
      id: 5,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0044.jpg",
      price: 599
    },
    {
      id: 5,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0044.jpg",
      price: 599
    },
    {
      id: 5,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0044.jpg",
      price: 599
    },
    {
      id: 5,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0044.jpg",
      price: 599
    },
    {
      id: 5,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0044.jpg",
      price: 599
    },
    {
      id: 5,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0044.jpg",
      price: 599
    },{
      id: 5,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0044.jpg",
      price: 599
    },{
      id: 5,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0044.jpg",
      price: 599
    },{
      id: 5,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0044.jpg",
      price: 599
    },
    {
      id: 5,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0044.jpg",
      price: 599
    },
    {
      id: 5,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0044.jpg",
      price: 599
    },
    {
      id: 5,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0044.jpg",
      price: 599
    },
    {
      id: 5,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0044.jpg",
      price: 599
    },
    {
      id: 6,
      name: "FR Face Cream",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0027.jpg",
      price: 599
    },
    {
      id: 7,
      name: "BYS Brow Definition Kit",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0028.jpg",
      price: 599
    },
    {
      id: 8,
      name: "Maybelline Face Cream",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0032.jpg",
      price: 599
    },
    {
      id: 9,
      name: "BYS Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0033.jpg",
      price: 599
    },
    {
      id: 10,
      name: "Matte BYS Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0034.jpg",
      price: 599
    },
    {
      id: 11,
      name: "Longwear BYS Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0035.jpg",
      price: 599
    },
    {
      id: 12,
      name: "Nude 3 Eye Shadow",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0036.jpg",
      price: 599
    },
    {
      id: 13,
      name: "BYS Eye Shadow",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0038.jpg",
      price: 599
    },
    {
      id: 14,
      name: "Lip Color",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0040.jpg",
      price: 599
    },
    {
      id: 15,
      name: "FIT me Face Cream",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0042.jpg",
      price: 599
    },
    {
      id: 16,
      name: "BYS Lip Balm",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0043.jpg",
      price: 599
    },
  ],
      productsInCart = [];

  // Pretty much self explanatory function. NOTE: Here I have used template strings (ES6 Feature)
  var generateProductList = function() {
    products.forEach(function(item) {
      var productEl = document.createElement("div");
      productEl.className = "product";
      productEl.innerHTML = `<div class="product-image">
                                <img src="${item.imageUrl}" alt="${item.name}" height="200px" width="200px"  >
                             </div>
                             <div class="product-name"><span>Product:</span> ${item.name}</div>
                             <div class="product-description"><span>Description:</span> ${item.description}</div>
                             <div class="product-price"><span>Price:</span> ${item.price} $</div>
                             <div class="product-add-to-cart">
                               <a href="#0" class="button add-to-cart" data-id=${item.id}>Add to Cart</a>
                             </div>
                          </div>
`;

productsEl.appendChild(productEl);
    });
  }

  // Like one before and I have also used ES6 template strings
  var generateCartList = function() {

    cartEl.innerHTML = "";

    productsInCart.forEach(function(item) {
      var li = document.createElement("li");
      li.innerHTML = `${item.quantity} ${item.product.name} - $${item.product.price * item.quantity}`;
      cartEl.appendChild(li);
    });

    productQuantityEl.innerHTML = productsInCart.length;

    generateCartButtons()
  }


  // Function that generates Empty Cart and Checkout buttons based on condition that checks if productsInCart array is empty
  var generateCartButtons = function() {
    if(productsInCart.length > 0) {
      emptyCartEl.style.display = "block";
      cartCheckoutEl.style.display = "block"
      totalPriceEl.innerHTML = "Ksh " + calculateTotalPrice();
    } else {
      emptyCartEl.style.display = "none";
      cartCheckoutEl.style.display = "none";
    }
  }

  // Setting up listeners for click event on all products and Empty Cart button as well
  var setupListeners = function() {
    productsEl.addEventListener("click", function(event) {
      var el = event.target;
      if(el.classList.contains("add-to-cart")) {
       var elId = el.dataset.id;
       addToCart(elId);
      }
    });

    emptyCartEl.addEventListener("click", function(event) {
      if(confirm("Are you sure?")) {
        productsInCart = [];
      }
      generateCartList();
    });
  }

  // Adds new items or updates existing one in productsInCart array
  var addToCart = function(id) {
    var obj = products[id];
    if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
      productsInCart.push({product: obj, quantity: 1});
    } else {
      productsInCart.forEach(function(item) {
        if(item.product.id === obj.id) {
          item.quantity++;
        }
      });
    }
    generateCartList();
  }

  // This function checks if project is already in productsInCart array
  var productFound = function(productId) {
    return productsInCart.find(function(item) {
      return item.product.id === productId;
    });
  }

  var calculateTotalPrice = function() {
    return productsInCart.reduce(function(total, item) {
      return total + (item.product.price *  item.quantity);
    }, 0);
  }

  // This functon starts the whole application
  var init = function() {
    generateProductList();
    setupListeners();
  }

  // Exposes just init function to public, everything else is private
  return {
    init: init
  };

  // I have included jQuery although I haven't used it
})(jQuery);

ShoppingCart.init();

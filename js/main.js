
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var schedule = [

    ['Aug 14 2019', 'Aug 20 2019']
];
// iterate over each element in the schedule
for(var i=0; i<schedule.length; i++){
  var startDate = schedule[i][0];
  var endDate = schedule[i][1];

  // put dates in milliseconds for easy comparisons
  var startMs = Date.parse(startDate);
  var endMs = Date.parse(endDate);
  var currentMs = Date.parse(new Date());

  // if current date is between start and end dates, display clock
  if(endMs > currentMs && currentMs >= startMs ){
      initializeClock('clockdiv', endDate);
  }
}


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



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
      id: 1,
      name: "Pallete",
      description: "The MORPHE 35G Bronze Goals palette is BACK INSTOCK for a limited time, so you can get your bronze on all day long.",
      imageUrl: "img/IMG-20190805-WA0026.jpg",
      price: 2000
    },
    {
      id: 2,
      name: "Finish/Fine Mat",
      description: "Simply spray the ultra-fine Milani Make It Last Matte Charcoal Setting Spray all over the face to set makeup and mattify for up to 16 hours 😊",
      imageUrl: "img/900.jpg",
      price: 300,
    },
    {
      id: 3,
      name: "BYS Eye & Cheek Pallete",
      description: "With 35 super pigmented and blendable shades you won’t be disappointed! This amazing palette holds warm browns and burnt oranges. Finishes include mattes and shimmers.",
      imageUrl: "img/IMG-20190805-WA0023.jpg",
      price: 2999
    },
    {
      id: 4,
      name: "Eyeshadow primer by NYX",
      description: "Intensify your shadows with the NYX durable and waterproof eyeshadow primer. Smooth on to lids before applying shadows and voila!",
      imageUrl: "img/IMG-20190805-WA0016.jpg",
      price: 1200
    },
    {
      id: 5,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0005.jpg",
      price: 600
    },
    {
      id: 6,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0006.jpg",
      price: 700
    },
    {
      id: 7,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0007.jpg",
      price: 800
    },
    {
      id: 8,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0008.jpg",
      price: 900
    },
    {
      id: 9,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0009.jpg",
      price: 1000
    },
    {
      id: 10,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0010.jpg",
      price: 700
    },{
      id: 11,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0011.jpg",
      price: 900
    },{
      id: 12,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0012.jpg",
      price: 400
    },{
      id: 13,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0013.jpg",
      price: 600
    },
    {
      id: 14,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0014.jpg",
      price: 800
    },
    {
      id: 15,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0015.jpg",
      price: 400
    },
    {
      id: 16,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0016.jpg",
      price: 900
    },
    {
      id: 17,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0017.jpg",
      price: 100
    },
    {
      id: 18,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0018.jpg",
      price: 600
    },
    {
      id: 19,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0019.jpg",
      price: 400
    },
    {
      id: 20,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0020.jpg",
      price: 550
    },
    {
      id: 21,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0021.jpg",
      price: 800
    },
    {
      id: 22,
      name: "FR Face Cream",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0022.jpg",
      price: 400
    },
    {
      id: 23,
      name: "BYS Brow Definition Kit",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0023.jpg",
      price: 300
    },
    {
      id: 24,
      name: "Maybelline Face Cream",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0024.jpg",
      price: 800
    },
    {
      id: 25,
      name: "BYS Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0025.jpg",
      price: 200
    },
    {
      id: 26,
      name: "Matte BYS Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0026.jpg",
      price: 599
    },
    {
      id: 27,
      name: "Longwear BYS Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0027.jpg",
      price: 599
    },
    {
      id: 28,
      name: "Nude 3 Eye Shadow",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0028.jpg",
      price: 599
    },
    {
      id: 29,
      name: "BYS Eye Shadow",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0029.jpg",
      price: 599
    },
    {
      id: 30,
      name: "Lip Color",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0030.jpg",
      price: 599
    },

    {
      id: 31,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0033.jpg",
      price: 599
    },
    {
      id: 32,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0034.jpg",
      price: 599
    },
    {
      id: 33,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0035.jpg",
      price: 599
    },
    {
      id: 34,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0036.jpg",
      price: 599
    },

    {
      id: 35,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0038.jpg",
      price: 599
    },

    {
      id: 36,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0040.jpg",
      price: 599
    },
    {
      id: 37,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0041.jpg",
      price: 599
    },
    {
      id: 38,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0042.jpg",
      price: 599
    },
    {
      id: 39,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0043.jpg",
      price: 599
    },
    {
      id: 40,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0044.jpg",
      price: 599
    },
    {
      id: 41,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0045.jpg",
      price: 599
    },
    {
      id: 42,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0048.jpg",
      price: 599
    },
    {
      id: 43,
      name: "Lip Stick",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0047.jpg",
      price: 599
    },
    {
      id: 44,
      name: "BYS Lip Balm",
      description: "Description",
      imageUrl: "img/IMG-20190805-WA0032.jpg",
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
                             <div class="product-price"><span>Price:</span> ${item.price} Ksh</div>
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
      li.innerHTML = `${item.quantity} ${item.product.name} - Ksh${item.product.price * item.quantity}`;
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

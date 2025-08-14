function showDeals() {
  hideAllSections();
  document.querySelector(".coupon").style.display = "flex";
}

function showPizzas() {
  hideAllSections();
  document.querySelector(".menugrid1").style.display = "flex";
}

function showMelts() {
  hideAllSections();
  document.querySelector(".menugrid2").style.display = "flex";
}

function showSides() {
  hideAllSections();
  document.querySelector(".menugrid3").style.display = "flex";
}

function showPastas() {
  hideAllSections();
  document.querySelector(".menugrid4").style.display = "flex";
}

function showDesserts() {
  hideAllSections();
  document.querySelector(".menugrid5").style.display = "flex";
}

function showDrinks() {
  hideAllSections();
  document.querySelector(".menugrid6").style.display = "flex";
}

function hideAllSections() {
  document.querySelector(".menugrid1").style.display = "none";
  document.querySelector(".menugrid2").style.display = "none";
  document.querySelector(".menugrid3").style.display = "none";
  document.querySelector(".menugrid4").style.display = "none";
  document.querySelector(".menugrid5").style.display = "none";
  document.querySelector(".menugrid6").style.display = "none";
  document.querySelector(".coupon").style.display = "none";
}

var isHidden = false;

function toggleHide() {
  var animate = document.querySelector(".sideBox");
  var navs = document.querySelectorAll(".card");
  var spaces = document.querySelectorAll(".menu");

  if (!isHidden) {
    animate.classList.add("hidden");
    navs.forEach(function (nav) {
      nav.style.marginLeft = "5%";
      nav.style.width = "20%";
    });
    spaces.forEach(function (space) {
      space.style.width = "2000px";
    });
    isHidden = true;
  } else {
    animate.classList.remove("hidden");
    navs.forEach(function (nav) {
      nav.style.marginLeft = "";
      nav.style.width = "";
    });
    spaces.forEach(function (space) {
      space.style.width = "";
    });
    isHidden = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.getElementsByClassName("added");
  var cartItemDiv = document.querySelector(".cartItem");
  var subtotalInput = document.getElementById("total");
  var totalPrice = 0;

  function updateButtonPrice(selectElement) {
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var price = parseFloat(selectedOption.value);
    var card = selectElement.closest(".card");
    var buttonPriceTag = card.querySelector(".added h4");
    buttonPriceTag.innerText = "Rs " + price.toFixed(2);
  }

  var crustOptions = document.querySelectorAll(".crustOptions");
  crustOptions.forEach(function (selectElement) {
    selectElement.addEventListener("change", function () {
      updateButtonPrice(selectElement);
    });
  });

  function updateSubtotal(totalPrice) {
    var gstRate = 0.18;
    var gstAmount = totalPrice * gstRate;
    var totalWithGst = totalPrice + gstAmount;
    subtotalInput.value = totalWithGst.toFixed(2);
  }

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function () {
      var priceText = this.querySelector("h4").innerText.trim();
      var price = parseFloat(priceText.split("Rs ")[1]);
      var itemName = this.parentElement.querySelector("h4").innerText;
    
      totalPrice += price;
      updateSubtotal(totalPrice);

      var cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");

      var newHeading = document.createElement("h4");
      newHeading.innerText = itemName + " - Rs " + price.toFixed(2);

      var removeBtn = document.createElement("button");
      removeBtn.innerText = "Remove";
      removeBtn.classList.add("remove-btn");

      cartItem.appendChild(newHeading);
      cartItem.appendChild(removeBtn);

      cartItemDiv.appendChild(cartItem);

      removeBtn.addEventListener("click", function () {
        totalPrice -= price;
        updateSubtotal(totalPrice);
        cartItemDiv.removeChild(cartItem);
      
      });

  });
}
});


const checkoutBtn = document.querySelector('.payment');
const checkoutBox = document.getElementById('checkoutBox');
const confirmBtn = document.getElementById('confirmCheckout');
const cancelBtn = document.getElementById('cancelCheckout');

// Show box only if cart has items
checkoutBtn.addEventListener('click', () => {
    const cartItems = document.querySelectorAll('.cart-item'); // Get all items in cart

    if (cartItems.length === 0) {
        alert('Your cart is empty! Please add items before checkout.');
    } else {
        checkoutBox.style.display = 'flex';
    }
});

// Confirm order
confirmBtn.addEventListener('click', () => {
    alert('Order placed successfully!');
    checkoutBox.style.display = 'none';
});

// Cancel checkout
cancelBtn.addEventListener('click', () => {
    checkoutBox.style.display = 'none';
});


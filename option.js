document.addEventListener('DOMContentLoaded', function() {
    
    var cards = document.querySelectorAll('.card');

    
    cards.forEach(function(card) {
  
        var crustOptions = card.querySelector('.crustOptions'); 
        var buttonPriceTag = card.querySelector('.added p');

        
        crustOptions.addEventListener('change', function() {
            
            var selectedOption = crustOptions.options[crustOptions.selectedIndex];
            var selectedPrice = selectedOption.value;

           
            buttonPriceTag.innerText = 'Rs ' + selectedPrice;
        });
    });
});


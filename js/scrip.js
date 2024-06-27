document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        indicators.forEach((indicator, i) => {
            indicator.classList.remove('active');
            if (i === currentIndex) {
                indicator.classList.add('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
    });
});


window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var productTitle = document.getElementById('product-title');
    
    if (scrollPosition > 150) {
      productTitle.classList.add('show'); 
    } else {
      productTitle.classList.remove('show');
    }

  });

  document.addEventListener('DOMContentLoaded', function() {
    var productContainers = document.querySelectorAll('.product-container');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;

        productContainers.forEach(function(container) {
            if (scrollPosition > 450) {
                container.classList.add('show');
            } else {
                container.classList.remove('show');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const profileLink = document.getElementById('profileLink');
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        profileLink.href = 'profile.html';
    }
});
//============================================================================================================
//seccion del carrito 

let cart = [];

const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.stopPropagation();
        
        const card = button.closest('.productCard');
        const id = card.id;
        
        const name = card.querySelector('.cardTitle').textContent;
        const price = parseFloat(card.querySelector('.cardPrice').textContent.replace('$', ''));
        
        const imageSrc = card.querySelector('.imgProduct').getAttribute('src');
        
        addToCart(id, name, price, imageSrc);
       
        updateCartUI();
     
        updateCartTotal();
    });
});

function toggleCart() {
    event.stopPropagation();
    const cartDropdown = document.getElementById('cartDropdown');
    cartDropdown.classList.toggle('show');
}

function updateCartUI() {
    const cartList = document.getElementById('cartList');
    const cartTotal = document.getElementById('cartTotal');
    const payButton = document.getElementById('payButton');
    
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');

        
        const img = document.createElement('img');
        img.src = item.imageSrc;
        img.alt = item.name;
        li.appendChild(img);

        
        const productName = document.createElement('span');
        productName.textContent = item.name;
        li.appendChild(productName);

        const productQuantity = document.createElement('span');
        productQuantity.textContent = ` x ${item.quantity}`;
        li.appendChild(productQuantity);

        
        const totalPriceForItem = item.price * item.quantity;

        
        const itemTotalPrice = document.createElement('span');
        itemTotalPrice.textContent = ` - $${totalPriceForItem.toFixed(2)}`; 
        li.appendChild(itemTotalPrice);

        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.addEventListener('click', () => {
            event.stopPropagation();
            
            removeFromCart(item.id);
            
            updateCartUI();
          
            updateCartTotal();
        });
        li.appendChild(removeButton);

        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.addEventListener('click', () => {
            event.stopPropagation();
            addToCart(item.id);
            updateCartUI();
            payButton.style.display = cart.length > 0 ? 'block' : 'none';
           
            updateCartTotal();
        });
        li.appendChild(addButton);

        const subtractButton = document.createElement('button');
        subtractButton.textContent = '-';
        subtractButton.addEventListener('click', () => {
            subtractFromCart(item.id);
            updateCartUI();
          
            updateCartTotal();
        });
        li.appendChild(subtractButton);

        
        cartList.appendChild(li);

      
        total += totalPriceForItem;
    });

    
    cartTotal.textContent = `$${total.toFixed(2)}`;

    
    payButton.style.display = cart.length > 0 ? 'block' : 'none';

 
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cartCount').textContent = cartCount;
}

function addToCart(id, name, price, imageSrc) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1, imageSrc });
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
}

function subtractFromCart(id) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
    } else {
        removeFromCart(id);
    }
}

function updateCartTotal() {
    const cartTotalContainer = document.getElementById('cartTotalContainer');
    let total = 0;

  
    cart.forEach(item => {

        const product = document.querySelector(`[id="${item.id}"]`);


        const price = parseFloat(product.querySelector('.cardPrice').textContent.replace('$', ''));
        total += price * item.quantity;
    });

   
    cartTotalContainer.textContent = `Total: $${total.toFixed(2)}`;
}


updateCartUI();


// key de transbank "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C"


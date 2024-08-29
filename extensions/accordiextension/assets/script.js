document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('product-image');
    const price = document.getElementById('product-price');
    const variants = document.querySelectorAll('input[name="variant"]');
    
    // Data for each variant
    const variantData = {
      '1': {
        imageUrl: 'https://img.freepik.com/premium-vector/cartoon-shirt_119631-192.jpg',
        price: 'Rs. 19.99'
      },
      '2': {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrNZ5T4zfCcIcUpBf7UdCHPIIWPgSOVs46g&s',
        price: 'Rs. 54.00'
      }
    };
  
    variants.forEach(variant => {
      variant.addEventListener('change', () => {
        const selectedData = variantData[variant.value];
        if (selectedData) {
          image.src = selectedData.imageUrl;
          price.textContent = selectedData.price;
        }
      });
    });
  });
  


  document.addEventListener('DOMContentLoaded', function() {
    const increaseBtn = document.getElementById('increase-quantity');
    const decreaseBtn = document.getElementById('decrease-quantity');
    const quantityInput = document.getElementById('quantity');
  
    increaseBtn.addEventListener('click', function() {
      let quantity = parseInt(quantityInput.value, 10);
      quantityInput.value = quantity + 1;
    });
  
    decreaseBtn.addEventListener('click', function() {
      let quantity = parseInt(quantityInput.value, 10);
      if (quantity > 1) {
        quantityInput.value = quantity - 1;
      }
    });
  });
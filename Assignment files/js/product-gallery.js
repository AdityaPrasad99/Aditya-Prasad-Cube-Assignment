// Product Gallery Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Product gallery script loaded');
    
    // Product images array - add all your product images here
    const productImages = [
        'images/master.png',
        'images/prev1.png',
        'images/prev2.png',
        'images/prev3.png',
        'images/prev4.1.png',
        'images/prev5.png',
        'images/prev6.png',
        'images/prev7.png',
        'images/prev8.png'
    ];
    
    // Elements
    const mainImage = document.getElementById('main-product-image');
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    const dots = document.querySelectorAll('.dot');
    
    // Current slide index
    let currentSlide = 0;
    
    // Update the main image and active dot
    function updateSlide() {
        // Update main image
        mainImage.src = productImages[currentSlide];
        
        // Update active dot
        dots.forEach((dot, index) => {
            if (index < dots.length) {
                dot.classList.toggle('active', index === currentSlide % dots.length);
            }
        });
    }
    
    // Previous button click handler
    prevButton.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + productImages.length) % productImages.length;
        updateSlide();
    });
    
    // Next button click handler
    nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % productImages.length;
        updateSlide();
    });
    
    // Dot click handler
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            updateSlide();
        });
    });
    
    // Handle flavor selection
    const flavorOptions = document.querySelectorAll('.flavor-option');
    
    flavorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            flavorOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to the clicked option
            this.classList.add('active');
            
            // Select the radio button
            const radio = this.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        });
    });
    
    // Handle subscription option selection
    const subscriptionOptions = document.querySelectorAll('.subscription-option');
    
    subscriptionOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            subscriptionOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to the clicked option
            this.classList.add('active');
            
            // Select the radio button
            const radio = this.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        });
    });
    
    // Thumbnail click handler
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            // Get the image path from data attribute
            const imagePath = this.getAttribute('data-image');
            
            // Update main image
            mainImage.src = imagePath;
            
            // Update current slide index to match the thumbnail
            for (let i = 0; i < productImages.length; i++) {
                if (productImages[i] === imagePath) {
                    currentSlide = i;
                    break;
                }
            }
            
            // Update active dot
            updateSlide();
        });
    });
});

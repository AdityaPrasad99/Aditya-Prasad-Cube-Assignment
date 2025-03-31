// DOM Elements
const searchToggle = document.querySelector('.search-toggle');
const searchClose = document.querySelector('.search-close');
const searchBar = document.querySelector('.search-bar');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const reviewsSlider = document.querySelector('.reviews-slider');
const sliderDots = document.querySelector('.slider-dots');
const prevButton = document.querySelector('.slider-controls .prev');
const nextButton = document.querySelector('.slider-controls .next');
const faqItems = document.querySelectorAll('.faq-item');
const productGallery = document.querySelector('.product-gallery');
const productThumbnails = document.querySelectorAll('.product-thumbnail');
const flavorRadios = document.querySelectorAll('input[name="flavor"]');
const purchaseTypeRadios = document.querySelectorAll('input[name="purchase-type"]');
const addToCartButton = document.querySelector('.add-to-cart');

// Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Re-query elements to ensure they're available after DOM is fully loaded
    const searchToggle = document.querySelector('.search-toggle');
    const searchClose = document.querySelector('.search-close');
    const searchBar = document.querySelector('.search-bar');
    const searchInput = document.querySelector('.search-bar input');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    
    if (searchToggle) {
        searchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle search bar visibility
            if (searchBar.classList.contains('active')) {
                searchBar.classList.remove('active');
            } else {
                searchBar.classList.add('active');
                setTimeout(() => {
                    if (searchInput) searchInput.focus();
                }, 400); // Wait for animation to complete
            }
        });
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            searchBar.classList.remove('active');
        });
    }
    
    // Close search bar when clicking outside
    document.addEventListener('click', function(e) {
        if (searchBar && !searchBar.contains(e.target) && 
            searchToggle && !searchToggle.contains(e.target) && 
            searchBar.classList.contains('active')) {
            searchBar.classList.remove('active');
        }
    });
    
    // Close search bar when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchBar && searchBar.classList.contains('active')) {
            searchBar.classList.remove('active');
        }
    });
    
    // Prevent form submission on enter (for demo purposes)
    if (searchBar) {
        const searchForm = searchBar.querySelector('form');
        if (searchForm) {
            searchForm.addEventListener('submit', function(e) {
                // For demo purposes, prevent actual submission
                if (searchInput && searchInput.value.trim() === '') {
                    e.preventDefault();
                }
            });
        }
    }
    
    // Mobile Menu Toggle
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
    }
    
    // Close mobile menu on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
});

// Mobile Menu
// Removed the following code block as it is now handled in the DOMContentLoaded event listener
// mobileMenuToggle.addEventListener('click', () => {
//     mobileMenu.classList.add('active');
//     mobileMenuOverlay.classList.add('active');
//     document.body.style.overflow = 'hidden';
// });

// document.querySelector('.mobile-menu-close').addEventListener('click', () => {
//     mobileMenu.classList.remove('active');
//     mobileMenuOverlay.classList.remove('active');
//     document.body.style.overflow = '';
// });

// Reviews Slider
let currentSlide = 0;
const reviews = [
    {
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        author: "Name Surname",
        position: "Position, Company name"
    },
    // Add more reviews here
];

function createReviewCard(review) {
    return `
        <div class="review-card">
            <div class="stars">
                ${'★'.repeat(review.rating)}
            </div>
            <p>${review.text}</p>
            <div class="author">
                <div class="avatar"></div>
                <div class="info">
                    <h4>${review.author}</h4>
                    <p>${review.position}</p>
                </div>
            </div>
        </div>
    `;
}

function updateSlider() {
    reviewsSlider.style.transform = `translateX(-${currentSlide * 33.333}%)`;
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

prevButton.addEventListener('click', () => {
    currentSlide = Math.max(currentSlide - 1, 0);
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentSlide = Math.min(currentSlide + 1, Math.ceil(reviews.length / 3) - 1);
    updateSlider();
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items first
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // If the clicked item wasn't active before, make it active now
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Product Gallery
function updateGalleryImage(imageSrc) {
    const mainImage = document.querySelector('.product-gallery-main img');
    mainImage.src = imageSrc;
}

productThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        updateGalleryImage(thumbnail.dataset.image);
        productThumbnails.forEach(t => t.classList.remove('active'));
        thumbnail.classList.add('active');
    });
});

// Add to Cart Link Generator
function updateAddToCartLink() {
    const selectedFlavor = document.querySelector('input[name="flavor"]:checked').value;
    const selectedPurchaseType = document.querySelector('input[name="purchase-type"]:checked').value;
    
    const variants = {
        'original': {
            'single': 'variant1',
            'double': 'variant2',
            'try-once': 'variant3'
        },
        'matcha': {
            'single': 'variant4',
            'double': 'variant5',
            'try-once': 'variant6'
        },
        'cacao': {
            'single': 'variant7',
            'double': 'variant8',
            'try-once': 'variant9'
        }
    };

    const variantId = variants[selectedFlavor][selectedPurchaseType];
    addToCartButton.href = `/cart/add/${variantId}`;
}

flavorRadios.forEach(radio => {
    radio.addEventListener('change', updateAddToCartLink);
});

purchaseTypeRadios.forEach(radio => {
    radio.addEventListener('change', updateAddToCartLink);
});

// Percentage Counter Animation
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + '%';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Intersection Observer for percentage counters
const percentageElements = document.querySelectorAll('.percentage');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.target);
            animateValue(entry.target, 0, target, 2000);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

percentageElements.forEach(element => {
    observer.observe(element);
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Populate reviews
    reviewsSlider.innerHTML = reviews.map(review => createReviewCard(review)).join('');
    
    // Create slider dots
    const dotsCount = Math.ceil(reviews.length / 3);
    sliderDots.innerHTML = Array(dotsCount).fill().map((_, i) => 
        `<div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
    ).join('');

    // Add click handlers to dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    // Initialize add to cart link
    updateAddToCartLink();
}); 
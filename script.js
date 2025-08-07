// Services data
const services = [
    {
        id: 1,
        title: "Manufacturer's Logbook Service",
        icon: "fas fa-book",
        description: "Complete manufacturer-specified service to maintain your vehicle warranty and ensure optimal performance.",
        features: ["Maintains warranty", "Genuine parts used", "Digital service records", "Multi-point inspection"],
        price: "From $199"
    },
    {
        id: 2,
        title: "Motor Vehicle Inspections",
        icon: "fas fa-search",
        description: "Comprehensive vehicle inspections for safety, roadworthiness, and compliance with Australian standards.",
        features: ["Safety inspection", "Roadworthy certificate", "Pre-purchase inspection", "Insurance claims"],
        price: "From $120"
    },
    {
        id: 3,
        title: "Pink Slip (Safety Check)",
        icon: "fas fa-clipboard-check",
        description: "Official NSW safety inspection to ensure your vehicle meets safety standards for registration.",
        features: ["NSW RMS approved", "Same day service", "Digital certificate", "Repair recommendations"],
        price: "From $45"
    },
    {
        id: 4,
        title: "Oil Change Service",
        icon: "fas fa-oil-can",
        description: "Regular oil changes using quality oils to keep your engine running smoothly and efficiently.",
        features: ["Quality engine oils", "Filter replacement", "Fluid level check", "Quick service"],
        price: "From $89"
    },
    {
        id: 5,
        title: "Brakes and Brake Repair",
        icon: "fas fa-stop-circle",
        description: "Complete brake system service including pads, discs, fluid, and safety inspections.",
        features: ["Brake pad replacement", "Disc machining", "Brake fluid service", "Safety inspection"],
        price: "From $149"
    },
    {
        id: 6,
        title: "Wheel Alignment",
        icon: "fas fa-crosshairs",
        description: "Precision wheel alignment to improve handling, reduce tire wear, and ensure safe driving.",
        features: ["4-wheel alignment", "Computerized equipment", "Tire wear analysis", "Steering adjustment"],
        price: "From $99"
    },
    {
        id: 7,
        title: "Spark Plug Service",
        icon: "fas fa-bolt",
        description: "Spark plug replacement and ignition system service for optimal engine performance and fuel economy.",
        features: ["Quality spark plugs", "Ignition system check", "Performance testing", "Fuel economy improvement"],
        price: "From $129"
    },
    {
        id: 8,
        title: "Batteries, Starting & Charging",
        icon: "fas fa-car-battery",
        description: "Complete electrical system service including battery testing, alternator, and starter motor service.",
        features: ["Battery testing", "Alternator service", "Starter motor repair", "Electrical diagnostics"],
        price: "From $79"
    },
    {
        id: 9,
        title: "Muffler & Exhaust Service",
        icon: "fas fa-wind",
        description: "Exhaust system repair and replacement to reduce emissions and maintain optimal engine performance.",
        features: ["Exhaust inspection", "Muffler replacement", "Catalytic converter", "Emissions testing"],
        price: "From $159"
    },
    {
        id: 10,
        title: "Engine Tuning",
        icon: "fas fa-cogs",
        description: "Professional engine tuning to optimize performance, fuel efficiency, and reduce emissions.",
        features: ["Performance optimization", "Fuel system service", "Emission control", "Diagnostic testing"],
        price: "From $199"
    },
    {
        id: 11,
        title: "Engine Cooling System",
        icon: "fas fa-thermometer-half",
        description: "Cooling system service including radiator, thermostat, and coolant replacement for engine protection.",
        features: ["Radiator service", "Coolant replacement", "Thermostat check", "Hose inspection"],
        price: "From $139"
    },
    {
        id: 12,
        title: "Climate Control",
        icon: "fas fa-snowflake",
        description: "Air conditioning and heating system service to ensure comfortable driving in all weather conditions.",
        features: ["A/C gas recharge", "System diagnostics", "Filter replacement", "Heating system check"],
        price: "From $119"
    }
];

// DOM Elements
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const servicesGrid = document.getElementById('services-grid');
const contactForm = document.getElementById('contact-form');
const bookingForm = document.getElementById('booking-form');
const backToTopBtn = document.getElementById('back-to-top');

// Enhanced Mobile Menu with Smooth Animations
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Update aria-expanded attribute
    const isExpanded = navMenu.classList.contains('active');
    mobileMenu.setAttribute('aria-expanded', isExpanded);
    
    // Add body scroll lock when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on a link with smooth transition
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            mobileMenu.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
});

// Enhanced Navbar Scroll Effect with Parallax
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add scrolled class for background effect
    if (currentScrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll (optional)
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    // Back to top button functionality
    if (currentScrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
    
    lastScrollY = currentScrollY;
});

// Back to top button functionality
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Enhanced Services Grid with Staggered Animations
function populateServices() {
    servicesGrid.innerHTML = '';
    
    services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.style.opacity = '0';
        serviceCard.style.transform = 'translateY(30px)';
        
        serviceCard.innerHTML = `
            <div class="service-header">
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h3 class="service-title">${service.title}</h3>
            </div>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <div class="service-price">${service.price}</div>
            <button class="btn btn-primary" onclick="bookService('${service.title}')">
                <i class="fas fa-calendar-plus"></i>
                Book Service
            </button>
        `;
        
        servicesGrid.appendChild(serviceCard);
        
        // Staggered animation
        setTimeout(() => {
            serviceCard.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            serviceCard.style.opacity = '1';
            serviceCard.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Enhanced Book Service Function with Smooth Scrolling and Form Pre-fill
function bookService(serviceName) {
    // Smooth scroll to booking section
    const bookingSection = document.getElementById('booking');
    bookingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
    // Add a small delay to ensure smooth scroll completes
    setTimeout(() => {
        // Pre-fill service in booking form
        const serviceSelect = document.querySelector('#booking-form select[name="service"]');
        if (serviceSelect) {
            // Try to match the service name or set to "other"
            const option = Array.from(serviceSelect.options).find(opt => 
                serviceName.toLowerCase().includes(opt.value.toLowerCase())
            );
            if (option) {
                serviceSelect.value = option.value;
                // Add visual feedback
                serviceSelect.style.borderColor = '#10b981';
                setTimeout(() => {
                    serviceSelect.style.borderColor = '';
                }, 2000);
            } else {
                serviceSelect.value = 'other';
            }
        }
        
        // Add focus to the form for better UX
        const firstInput = bookingForm.querySelector('input[name="name"]');
        if (firstInput) {
            firstInput.focus();
        }
    }, 800);
}

// Enhanced Service Finder with Real-time Validation
document.querySelector('.finder-form form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const serviceType = document.getElementById('service-type').value;
    const urgency = document.getElementById('urgency').value;
    const vehicle = document.getElementById('vehicle-info').value;
    
    if (!serviceType) {
        showNotification('Please select a service type to get a quote.', 'warning');
        return;
    }
    
    // Simulate quote generation with loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span class="loading"></span> Generating Quote...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        const quotes = {
            'logbook': '$199 - $299',
            'inspection': '$120 - $180',
            'pink-slip': '$45',
            'oil-change': '$89 - $149',
            'brakes': '$149 - $399',
            'wheel-alignment': '$99 - $149',
            'engine-tuning': '$199 - $349'
        };
        
        const quote = quotes[serviceType] || '$80 - $250';
        const urgencyText = urgency ? ` (${urgency.replace('-', ' ')})` : '';
        
        showNotification(`Quote for ${serviceType.replace('-', ' ')} service${urgencyText}:\n\nEstimated cost: ${quote}\n\nVehicle: ${vehicle || 'Not specified'}`, 'success');
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Enhanced Booking Form with Better UX
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(bookingForm);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        service: formData.get('service'),
        vehicle: formData.get('vehicle'),
        year: formData.get('year'),
        preferredDate: formData.get('preferred-date'),
        message: formData.get('message')
    };
    
    // Validate required fields
    if (!data.name || !data.phone || !data.email || !data.service || !data.vehicle || !data.year || !data.preferredDate) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Simulate booking submission with enhanced loading state
    const submitBtn = bookingForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.innerHTML = '<span class="loading"></span> Processing Booking...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification(`Thank you ${data.name}!\n\nYour service booking has been received:\n\nService: ${data.service}\nVehicle: ${data.vehicle} ${data.year}\nPreferred Date: ${data.preferredDate}\n\nWe will contact you at ${data.phone} to confirm your appointment.\n\nBooking Reference: BLC${Date.now().toString().slice(-6)}`, 'success');
        bookingForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Enhanced Contact Form
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        inquiryType: formData.get('inquiry-type'),
        message: formData.get('message')
    };
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Simulate form submission with enhanced loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.innerHTML = '<span class="loading"></span> Sending Message...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification(`Thank you ${data.name}!\n\nYour message has been received. We will respond to your ${data.inquiryType || 'inquiry'} within 24 hours.\n\nContact details:\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}`, 'success');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Enhanced Hero Button Functionality with Smooth Scrolling
document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (btn.textContent.includes('Book')) {
            document.getElementById('booking').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (btn.textContent.includes('Services')) {
            document.getElementById('services').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced Intersection Observer with Multiple Animation Types
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add different animation classes based on element type
            if (entry.target.classList.contains('service-card')) {
                entry.target.classList.add('scale-in');
            } else if (entry.target.classList.contains('feature-card')) {
                entry.target.classList.add('fade-in-up');
            } else if (entry.target.classList.contains('section-title')) {
                entry.target.classList.add('slide-in-left');
            } else {
                entry.target.classList.add('fade-in-up');
            }
        }
    });
}, observerOptions);

// Enhanced Form Input Interactions
document.querySelectorAll('input, textarea, select').forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
    
    // Add character counter for textareas
    if (input.tagName === 'TEXTAREA') {
        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.style.fontSize = '0.75rem';
        counter.style.color = '#6b7280';
        counter.style.textAlign = 'right';
        counter.style.marginTop = '0.25rem';
        input.parentElement.appendChild(counter);
        
        input.addEventListener('input', () => {
            const remaining = 500 - input.value.length;
            counter.textContent = `${remaining} characters remaining`;
            counter.style.color = remaining < 50 ? '#dc2626' : '#6b7280';
        });
    }
});

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#dc2626' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        z-index: 10000;
        max-width: 400px;
        word-wrap: break-word;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Enhanced Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
        mobileMenu.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    
    // Ctrl/Cmd + K for quick search (future feature)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Could implement a search modal here
        showNotification('Search feature coming soon!', 'info');
    }
});

// Enhanced Focus Management for Accessibility
document.querySelectorAll('.btn, .nav-link, input, textarea, select').forEach(element => {
    element.addEventListener('focus', () => {
        element.style.outline = '2px solid #2563eb';
        element.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', () => {
        element.style.outline = 'none';
    });
});

// Performance Optimization: Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add smooth hover effects for interactive elements
document.querySelectorAll('.service-card, .feature-card, .booking-feature, .contact-item').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = element.style.transform.replace('scale(1.02)', 'scale(1.03)');
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = element.style.transform.replace('scale(1.03)', 'scale(1.02)');
    });
});

// Initialize page with enhanced functionality
document.addEventListener('DOMContentLoaded', () => {
    populateServices();
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .feature-card, .section-title, .booking-feature, .contact-item').forEach(el => {
        observer.observe(el);
    });
    
    // Set minimum date for booking to today
    const dateInput = document.querySelector('input[name="preferred-date"]');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
    // Add loading animation to page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Welcome message
    setTimeout(() => {
        showNotification('Welcome to BLC Autos! 🚗', 'success');
    }, 1000);
});

// Add service worker for offline functionality (future enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker support detected');
    });
}

console.log('🚗 BLC Autos - Enhanced website loaded successfully!');
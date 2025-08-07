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

// Mobile menu toggle
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Populate services grid
function populateServices() {
    servicesGrid.innerHTML = '';
    
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card fade-in-up';
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
            <button class="btn btn-primary" onclick="bookService('${service.title}')">Book Service</button>
        `;
        servicesGrid.appendChild(serviceCard);
    });
}

// Book service function
function bookService(serviceName) {
    // Scroll to booking section
    document.getElementById('booking').scrollIntoView({
        behavior: 'smooth'
    });
    
    // Pre-fill service in booking form
    const serviceSelect = document.querySelector('#booking-form select[name="service"]');
    if (serviceSelect) {
        // Try to match the service name or set to "other"
        const option = Array.from(serviceSelect.options).find(opt => 
            serviceName.toLowerCase().includes(opt.value.toLowerCase())
        );
        if (option) {
            serviceSelect.value = option.value;
        } else {
            serviceSelect.value = 'other';
        }
    }
}

// Service finder form
document.querySelector('.finder-form form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const serviceType = document.getElementById('service-type').value;
    const urgency = document.getElementById('urgency').value;
    const vehicle = document.getElementById('vehicle-info').value;
    
    if (!serviceType) {
        alert('Please select a service type to get a quote.');
        return;
    }
    
    // Simulate quote generation
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
    
    alert(`Quote for ${serviceType.replace('-', ' ')} service${urgencyText}:\n\nEstimated cost: ${quote}\n\nVehicle: ${vehicle || 'Not specified'}\n\nWould you like to book this service? Click "Book Service" to schedule an appointment.`);
});

// Booking form submission
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
    
    // Simulate booking submission
    const submitBtn = bookingForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.innerHTML = '<span class="loading"></span> Booking...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you ${data.name}!\n\nYour service booking has been received:\n\nService: ${data.service}\nVehicle: ${data.vehicle} ${data.year}\nPreferred Date: ${data.preferredDate}\n\nWe will contact you at ${data.phone} to confirm your appointment.\n\nBooking Reference: BLC${Date.now().toString().slice(-6)}`);
        bookingForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Contact form submission
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
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you ${data.name}!\n\nYour message has been received. We will respond to your ${data.inquiryType || 'inquiry'} within 24 hours.\n\nContact details:\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}`);
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Hero button functionality
document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.textContent.includes('Book')) {
            document.getElementById('booking').scrollIntoView({
                behavior: 'smooth'
            });
        } else if (btn.textContent.includes('Services')) {
            document.getElementById('services').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Smooth scrolling for navigation links
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    populateServices();
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .feature-card, .section-title').forEach(el => {
        observer.observe(el);
    });
    
    // Set minimum date for booking to today
    const dateInput = document.querySelector('input[name="preferred-date"]');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add focus management for accessibility
document.querySelectorAll('.btn, .nav-link, input, textarea, select').forEach(element => {
    element.addEventListener('focus', () => {
        element.style.outline = '2px solid #dc2626';
        element.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', () => {
        element.style.outline = 'none';
    });
});

// Performance optimization: Lazy loading for images
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

console.log('BLC Autos service website loaded successfully!');
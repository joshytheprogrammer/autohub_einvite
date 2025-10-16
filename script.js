// ============================================
// AUTOHUB AFRICA - E-INVITATION SCRIPT
// African Automotive CEO Award 2025
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // BUTTON CLICK ANALYTICS
    // ============================================
    const trackButtonClick = (buttonName, url) => {
        console.log(`Button clicked: ${buttonName} - URL: ${url}`);
        
        // You can integrate with analytics services here
        // Example: Google Analytics, Mixpanel, etc.
        // gtag('event', 'button_click', { 'button_name': buttonName });
    };

    // Track RSVP button clicks
    const rsvpButton = document.querySelector('.btn-primary');
    if (rsvpButton) {
        rsvpButton.addEventListener('click', function() {
            trackButtonClick('RSVP', this.href);
        });
    }

    // Track enquiry button clicks
    const enquiryButton = document.querySelector('.btn-secondary');
    if (enquiryButton) {
        enquiryButton.addEventListener('click', function() {
            trackButtonClick('Enquiry', this.href);
        });
    }

    // Track social media link clicks
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.getAttribute('aria-label') || 'Social Media';
            trackButtonClick(platform, this.href);
        });
    });

    // ============================================
    // COUNTDOWN TIMER
    // ============================================
    const eventDate = new Date('December 10, 2025 17:00:00').getTime();
    
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // You can display this countdown if you add a countdown element to HTML
            console.log(`Time until event: ${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
    };
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const elementsToAnimate = document.querySelectorAll('.detail-card, .btn, .social-link');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(element);
    });

    // ============================================
    // PARALLAX EFFECT ON SCROLL
    // ============================================
    let lastScrollTop = 0;
    const shineEffect = document.querySelector('.shine-effect');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (shineEffect) {
            const scrollPercent = scrollTop / (document.documentElement.scrollHeight - window.innerHeight);
            shineEffect.style.transform = `translate(${-20 + scrollPercent * 40}%, ${-20 + scrollPercent * 40}%) scale(${1.2 - scrollPercent * 0.2})`;
        }
        
        lastScrollTop = scrollTop;
    });

    // ============================================
    // COPY EVENT DETAILS TO CLIPBOARD
    // ============================================
    const createCopyFunction = () => {
        const eventDetails = `
🎉 You're Invited! 🎉

African Automotive CEO Award 2025
Book Launch & Magazine Unveiling

📅 Date: Wednesday, December 10, 2025
⏰ Time: 5:00 PM (Doors Open)
📍 Venue: Civic Center, Victoria Island, Lagos

Theme: Steering The Future Of Mobility Industry In Africa!

Celebrating leadership, innovation, and success in Africa's automotive and mobility industry.

Organized by: AUTOHUB AFRICA

RSVP: https://wa.me/09131444477
Enquiries: enquiries@autohub.africa

Follow us:
Instagram: https://www.instagram.com/autohubafrica
YouTube: https://youtube.com/@autohubafrica
Facebook: https://www.facebook.com/autohubafricaofficial
TikTok: https://www.tiktok.com/@autohub_africa
        `.trim();

        return eventDetails;
    };

    // Optional: Add a "Copy Details" button functionality
    // You can add this button to your HTML if needed
    window.copyEventDetails = () => {
        const details = createCopyFunction();
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(details).then(() => {
                alert('Event details copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = details;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Event details copied to clipboard!');
        }
    };

    // ============================================
    // ADD TO CALENDAR FUNCTIONALITY
    // ============================================
    window.addToCalendar = () => {
        const event = {
            title: 'African Automotive CEO Award 2025 - Book Launch',
            description: 'The African Automotive CEO Award 2025, book launch, and magazine unveiling. Theme: Steering The Future Of Mobility Industry In Africa!',
            location: 'Civic Center, Victoria Island, Lagos',
            start: '20251210T170000',
            end: '20251210T220000'
        };

        // Create iCal format
        const icalContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AutoHub Africa//Event//EN
BEGIN:VEVENT
UID:${Date.now()}@autohub.africa
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

        // Download iCal file
        const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'autohub-ceo-award-2025.ics';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // ============================================
    // LOADING ANIMATION
    // ============================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        console.log('AutoHub Africa E-Invitation Loaded Successfully!');
    });

    // ============================================
    // PERFORMANCE MONITORING
    // ============================================
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page Load Time: ${pageLoadTime}ms`);
        });
    }

    // ============================================
    // ERROR HANDLING
    // ============================================
    window.addEventListener('error', function(e) {
        console.error('An error occurred:', e.error);
    });

    // ============================================
    // INITIALIZE
    // ============================================
    console.log('🎉 AutoHub Africa - African Automotive CEO Award 2025');
    console.log('📅 Event Date: December 10, 2025');
    console.log('📍 Location: Civic Center, Victoria Island, Lagos');
    console.log('✨ E-Invitation System Initialized');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Check if user is on mobile device
const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Format date for display
const formatDate = (date) => {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(date).toLocaleDateString('en-US', options);
};

// Share event on social media (can be expanded)
const shareEvent = (platform) => {
    const eventUrl = window.location.href;
    const eventText = 'Join us at the African Automotive CEO Award 2025!';
    
    const urls = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(eventText)}&url=${encodeURIComponent(eventUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(eventText + ' ' + eventUrl)}`
    };
    
    if (urls[platform]) {
        window.open(urls[platform], '_blank', 'width=600,height=400');
    }
};

// Export functions for global use
window.AutoHubInvitation = {
    isMobile,
    formatDate,
    shareEvent,
    copyEventDetails: () => window.copyEventDetails(),
    addToCalendar: () => window.addToCalendar()
};

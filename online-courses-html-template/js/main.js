(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    // Quote of Day Start
    // Array of quotes for the day
const quotesOfDay = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
  "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this. - Chantal Sutherland"
];

// Function to get a quote for the day
function getQuoteOfDay() {
  const today = new Date();
  const dayOfMonth = today.getDate();
  const quoteIndex = dayOfMonth % quotesOfDay.length;
  const quote = quotesOfDay[quoteIndex];
  return quote;
}

// On page load, display the quote of the day
window.onload = function() {
  const quoteOfDay = getQuoteOfDay();
  const quoteElement = document.getElementById("quote-of-the-day");
  quoteElement.innerHTML = quoteOfDay;
};
    
    // Quote of Day End
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);


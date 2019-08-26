import MobileMenu from './modules/mobilemenu';
import RevealOnScroll from './modules/reveal-on-scroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonials'), '60%');

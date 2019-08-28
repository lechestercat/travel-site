import MobileMenu from './modules/mobilemenu';
import RevealOnScroll from './modules/reveal-on-scroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonials'), '60%');
var stickyHeader = new StickyHeader();
var modal = new Modal();

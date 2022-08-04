/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

let buttons = $('.product__tab-label');
let tabs = $('.product__tab');
var timer;

buttons.on('click', function(i, e) {

    buttons.removeClass('active');
    $(this).addClass('active');

    tabs.removeClass('active').eq($(this).index()).addClass('active');

    tabs.eq($(this).index()).find('input[type=radio]:checked').click();

});

$(document).on('click', '.product__tab input[type=radio]', function() {

    console.log($(this));

    let _id = $(this).parents('form').data('form');

    $(document).find('.product__form-inner').removeClass('active');
    $(this).parents('.product__form-inner').addClass('active');

    $('.ProductForm__AddToCart').removeClass('active');
    $('.ProductForm__AddToCart[data-form="' + _id + '"]').addClass('active');

    let _radios = document.querySelectorAll('.product__form-option input[type=radio]');

    _radios.forEach(function(e, i) {
        e.checked = false;
    });

    this.checked = true;
    

});

$('.ProductForm__AddToCart').on('click', function() {

    var _id = $(this).data('form');

    console.log(_id);
    console.log($(document).find('form[data-form="' + _id + '"]'));

    $(document).find('form[data-form="' + _id + '"]').submit();

});

$('.read_more_science').on('click', function() {

    var _st = $('.cust_product_tab').offset().top;

    $('html, body').animate({
        scrollTop: _st + 'px'
    });
});

$(document).ready(function() {

    var _r = $('.rc-option__content-rebal');
    var _m = $('.rc-option__content-maint');

    $(document).find('.product__tab--rebalance .product__form-sub .product__form-inner').append(_r);
    $(document).find('.product__tab--maintenance .product__form-sub .product__form-inner').append(_m);

    $(document).find(_r).removeClass('is-hidden');
    $(document).find(_m).removeClass('is-hidden');

    // $(document).find('.product__tab.active').find('form').eq(0).find('input[type=radio]').click();

});
'use strict';

$(function () {
    //jQueryでCSSを変更する
    $('.main-header').remove();
    $('header').html('<h1>さむらいえんじにあ!</h1>');
    $('aside').remove();
    $('div.header-sticky').remove();
    $('footer').remove();
    $('.fade-in').remove();
    $('.eye-catch-content-wrapper').remove();
    $('.mbt-border-top').remove();
    $('.vce-related-box').remove();
    $('.p-entry_push').remove();
    $('.wp_social_bookmarking_light').remove();
    $('blockquote').remove();

    var id = Number.MAX_SAFE_INTEGER;
    $('#text,span,p,h5,div,ul,a').html(function (index, element) {
        if (element == 'まとめ') {
            id = index;
        }
        if (index >= id) {
            return '';
        }
    });

});
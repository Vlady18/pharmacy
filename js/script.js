$( document ).ready(function() {
    $('.reviews__summary__top__send-review-btn').click(function () {
        $('#overlay').css('display', 'block');
        $('.pop-review').css('display', 'block');
        // $('body').css('overflow', 'hidden')
    });
    $('#overlay').click(function() {
        $('#overlay').css('display', 'none');
        $('.pop-review').css('display', 'none');
        // $('body').css('overflow', 'scroll')
    });
    $('.pop-review__button-close').click(function() {
        $('#overlay').css('display', 'none');
        $('.pop-review').css('display', 'none');
        // $('body').css('overflow', 'scroll')
    })
    $('.reviews__review__comments__show-comments').click(function () {
        $(this).parent().parent().siblings('.reviews__review_subcomments').toggleClass('reviews__review_subcomments-visible');
    });
    $('.reviews__review__comments__comment__text').click(function () {
        $(this).parent().parent().parent().siblings('.reviews__review__comment-answer').toggleClass('reviews__review__comment-answer_hidden');
    })



});

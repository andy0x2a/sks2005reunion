/**
 * Created by andyn on 2/20/2015.
 */



var hideAll = function () {
    $(".adminConsole").hide();
    $('.editMealRow').hide();
    $(".adminEditSingle").hide();
    $('.adminMeal').hide();

};

var show = function (e) {
    e.removeClass('hidden');
    e.show();
}


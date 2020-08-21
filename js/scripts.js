$(document).ready(function () {

    $("#scroll-to-top").click(function () {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    });

    $(".collapse").on('show.bs.collapse', function () {
        $(this).closest(".card").find(".fa").removeClass("fa-caret-down").addClass("fa-caret-up");
    }).on('hide.bs.collapse', function () {
        $(this).closest(".card").find(".fa").removeClass("fa-caret-up").addClass("fa-caret-down");
    });

});
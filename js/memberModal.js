//modal
/*$(function () {
    //モーダルウィンドウを開く
    function showModal(event) {
        event.preventDefault();

        var $shade = $('<div></div>');
        $shade
            .attr('id', 'shade')
            .on('click', hideModal);

        var $modalWin = $('.modal');
        var $window = $(window);
        var posX = ($window.width() - $modalWin.outerWidth()) / 2;
        var posY = ($window.height() - $modalWin.outerHeight()) / 2;

        $modalWin
            .before($shade)
            .css({
                left: posX,
                top: posY
            })
            .removeClass('hide')
            .addClass('show')
            .on('click', 'button', function () {
                hideModal();
            })
            .on('click', '.modal-close', function () {
                hideModal();
            })
    };
    //モーダルウィンドウを閉じる
    function hideModal() {
        $('#shade').remove();
        $('.modal')
            .removeClass('show')
            .addClass('hide');
    };

    $('.show-modal').on('click', showModal);
});*/
(function () {
    ("#daichi").on("click", function () {
        (".modal").css("display", "block");
        //.removeClass("hide").addClass("show")
    });
});

+function ($) {
    'use strict';

    $(".btn-delete").on("click", function(event) {
        event.preventDefault();

        var button = $(this);

        swal({
            title: "Tem certeza que deseja excluir?",
            text: "Você não poderá recuperar essa informação!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Sim, pode excluir!",
            cancelButtonText: "Não, quero cancelar!",
            closeOnConfirm: true
        }, function(isConfirm){
            if (isConfirm) {
                button.closest("form").submit();
            }
        });

    });

}(jQuery);

$.app = {};

+function ($) {
    'use strict';

    $.app.showloading = function() {
        var html = "<div id='loading-overlay' class='loading-lockscreen'></div>"+
            "<div id='loading-message' class='loading-lockscreen'>"+
            "<p>Carregando...</p>"+
            "<div class='three-quarters'></div>"+
            "</div>";

        $("html").append(html);
    };

    $.app.hideloading = function() {
        $(".loading-lockscreen").remove();
    };

    $.app.httpget = function(url) {

        $.app.showloading();

        var result = false;

        return $.ajax({
            url: url,
            type: "GET",
            success: function(resp) {

                $.app.hideloading();

                result = resp;
            },
            error: function(e) {
                $.app.hideloading();

                sweetAlert("Oops...", "Algo estranho aconteceu! Se o problema persistir, entre em contato com a administração do sistema.", "error");

                result = false;
            }
        }).then(function() {
            return $.Deferred(function(def) {
                def.resolveWith({},[result]);
            }).promise();
        });
    };
}(jQuery);
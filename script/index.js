$(function() {
    const el = document.querySelectorAll('.desktop-item');
    for (let i = 0; i < el.length; i++) {
        $(el[i]).draggable({

            containment: ".content",
            start: function(event, ui) {
                $(this).addClass('noclick');
            },
            stop: function(event, ui) {
                $(this).removeClass('noclick');
            }
        });
        $(el[i]).click(function(event) {
            if ($(this).hasClass('noclick')) {
                $(this).removeClass('noclick');
            } else {

            }
        });

    }

    const assoc = {
        'folder': 'projects-window',
        'games': 'games-window',
        'terminal': 'terminal-window',
        'contact': 'contact-window',
        'flix': 'flix-window',
        'cv': 'cv-window',
        'vs': 'vs-window',
        'shops': 'shops-window',
        'about': 'about-window',
        'logo': 'logo-window'
    };

    let elems = document.getElementsByClassName('desktop-item');
    let opennedId = '';

    for (let key of Object.keys(assoc)) {

        if (document.getElementById(assoc[key])) {
            document.getElementById(key).addEventListener("click", function(e) {
                $("#" + assoc[key]).css("display", "flex");
                $("#" + assoc[key]).parent().css("display", "flex");
                opennedId = key;
            }, false);

            $("#close-" + key).on("click", function(e) {
                e.stopPropagation();
                $("#" + assoc[key]).css("display", "none");
                $("#" + assoc[key]).parent().css("display", "none");
                opennedId = '';
            });
        }
    }

    $(".transparent-sec").each(function(index, elemen) {
        $(elemen).on("click", function(e) {
            e.stopPropagation();
            if ($(e.target).hasClass("transparent-sec")) {
                $("#" + opennedId + "-window").css("display", "none");
                $("#" + opennedId + "-window").parent().css("display", "none");
                opennedId = '';
            }
        });
    });
});
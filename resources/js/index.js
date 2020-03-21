jQuery(document).ready(function(){    
    //Underline selected link
    const currentPageUrl = window.location.href.split("/");
    const section = currentPageUrl[currentPageUrl.length - 2].split("_")[0];
    $(`.${section}-link`).css("text-decoration", "underline");

    //handle about section sliding plus underline
    let up = true;
    const options = {
        duration: 250,
        easing: 'linear'
    }
    $('.about-link').click(function(){
        if(up){
            $('#contact-info').slideDown(options);
            up = false;
            $(`.about-link`).css("text-decoration", "underline");
            $('.sliding-container').css("margin-top", "3vh");
        } else {
            $('#contact-info').slideUp(options);
            up = true;
            $(`.about-link`).css("text-decoration", "none");
            $('.sliding-container').css("margin-top", "23vh");
        }
    });

    //fade in fade out - pages
    if ($(window).width() > 480 || $(window).height() > 480) {
        $("body").fadeIn(100);
        $(document).on("click", "a", function(e) {
            const link = $(e.currentTarget).attr("href");
            if (!link || link[0] === "#") {
                location.hash = a;
                return
            }
            if ($(e.currentTarget).attr("target") == '_blank') {
                window.open(link);
            } else {
                $("body").fadeOut(100, function() {
                    window.location = link
                });
            }
            return false
        });
    };   
    
    window.onpageshow = function(event) {
        if (event.persisted) {
            $("body").fadeIn(100);
        }
    };
});

function goBack() {
  window.history.back();
}

function smartRollover() {
    if (document.getElementsByTagName) {
        var images = document.getElementsByTagName("img");

        for (var i = 0; i < images.length; i++) {
            if (images[i].getAttribute("src").match("_out.")) {
                images[i].onmouseover = function () {
                    this.setAttribute("src", this.getAttribute("src").replace("_out.", "_over."));
                }
                images[i].onmouseout = function () {
                    this.setAttribute("src", this.getAttribute("src").replace("_over.", "_out."));
                }
            }
        }
    }
}

if (window.addEventListener) {
    window.addEventListener("load", smartRollover, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", smartRollover);
}

$(function () {
    $(".newsBox").slide({
        mainCell: ".bd ul",
        autoPage: true,
        effect: "leftMarquee",
        autoPlay: true,
        trigger: "click",
        interTime: 20
    });
    $("#gNavi li:has(div)").hover(function () {
        $(this).children("a").addClass("on");
        $(this).children("div").show();
    }, function () {
        $(this).children("a").removeClass("on");
        $(this).children("div").hide();
    });

    $(".bi-select").hover(function () {
        $(this).find(".select-box").stop(true, true).slideToggle();
    });
    setInterval(function () {
        $(".tg1").toggleClass("color1")
    }, 550);
    setInterval(function () {
        $(".tg2").toggleClass("color2")
    }, 550);
    setInterval(function () {
        $(".tg3").toggleClass("color3")
    }, 550);
    setInterval(function () {
        $(".tg4").toggleClass("color4")
    }, 550);
    setInterval(function () {
        $(".tg5").toggleClass("color5")
    }, 550);
    setInterval(function () {
        $(".tg6").toggleClass("color6")
    }, 550);
    setInterval(function () {
        $(".tg7").toggleClass("color7")
    }, 550);
    setInterval(function () {
        $(".tg8").toggleClass("color8")
    }, 550);
    setInterval(function () {
        $(".tg9").toggleClass("color9")
    }, 550);
    setInterval(function () {
        $(".tg10").toggleClass("color10")
    }, 550);
    setInterval(function () {
        $(".tg11").toggleClass("color11")
    }, 550);
    setInterval(function () {
        $(".tg12").toggleClass("color12")
    }, 550);

    /*$('.registerBox .tabPanel').hide();
    $('.registerBox .tabPanel').eq(1).show();

    $('.registerBox .navi li a').click(function(){
    	var ind=$(this).parent('li').index();
    	$(this).parent('li').addClass('on').siblings().removeClass('on');
    	$('.registerBox .tabPanel').hide();		
    	$('.registerBox .tabPanel:eq('+ind+')').show();
    	return false;
    });*/

    //	$('#header .loginBox .formUl .regbtn').click(function(){
    //		$('.registerBg,.registerBox').fadeIn();
    //		return false;
    //	});
    $('.registerBg,.registerBox .close a').click(function () {
        $('.registerBg,.registerBox').fadeOut();
        return false;
    });

    $('#header .loginBox .formUl .shiwan').click(function () {
        $('.trialBg,.trialBox').fadeIn();
        return false;
    });
    $('.trialBg,.trialBox .close a').click(function () {
        $('.trialBg,.trialBox').fadeOut();
        return false;
    });


})
jQuery(function ($) {
    $(window).scroll(function fix_element() {
        $('#newSection').css(
            $(window).scrollTop() > 280 ? {
                'position': 'fixed',
                'top': '125px',
                'width': '100%',
            } : {
                'position': 'relative',
                'top': 'auto'
            }
        );
        return fix_element;
    }());
});

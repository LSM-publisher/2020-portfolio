$(function(){
    counter();
});

// a[#] click
$(document).on('click','a[href="#"]', function(e){
    e.preventDefault();
});

//layer popup
$(document).ready(function(){
	$(".layer").slideUp(0);
	$(".layer").slideDown('slow');
    
    function setCookie(name, value, expiredays) {
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }
	
	$(".layer a").click(function(){
		var chk = $('#chkbox').prop('checked');
		if(chk){ 
			setCookie('maindiv','done',1);
		}
		
		$(".layer").slideUp('slow');
	});
    
    cookiedata = document.cookie;
	if(cookiedata. indexOf('maindiv=done') < 0 ){  
		$(".layer").css('display','block');  
	}else{                                  
		$(".layer").css('display','none');  
	}
});

// nav
$("#nav").each(function(){
    var header = $(this);
    var headerOffset = header.offset().top;

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if(wScroll > headerOffset/1.1){
            header.addClass("on");
        } else {
            header.removeClass("on");
        }
    });
});

TweenMax.staggerTo(".nav span", 1, {
    ease: Power4.easeOut,
    delay: 1,
    opacity: 1,
    y: 0,
}, 0.05);

TweenMax.staggerTo(".sec1 .title span", 1, {
    ease: Back.easeOut.config(1.5),
    delay: 0.5,
    opacity: 1,
    y: 0,
}, 0.05);

// Scroll Animation
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    // section2
    if(wScroll >= $(".sec2 .profile").offset().top -$(window).height()/1.5){
        $(".sec2 .prof-img").addClass("show");
        $(".sec2 .prof-txt p").addClass("show")
    }
    if(wScroll >= $(".sec2 .skill").offset().top -$(window).height()/1.3){
        $(".sec2 .skill").addClass("show");
    }

    // Horizontal Moving
    var offset1 = (wScroll - $(".mov1").offset().top);
    var offset2 = (wScroll - $(".mov2").offset().top);

    $(".mov1").css({"transform":"translateX(" + offset1 * 0.8 + "px)"});
    $(".mov2").css({"transform":"translateX(" + offset2 * -0.8 + "px)"});


    // section3
    if(wScroll >= $(".sec3 .proj1").offset().top -$(window).height()/1.5){
        $(".sec3 .proj1").addClass("show");
    }
    if(wScroll >= $(".sec3 .proj2").offset().top -$(window).height()/1.5){
        $(".sec3 .proj2").addClass("show");
    }
    if(wScroll >= $(".sec3 .proj3").offset().top -$(window).height()/1.5){
        $(".sec3 .proj3").addClass("show");
    }
    if(wScroll >= $(".sec3 .proj4").offset().top -$(window).height()/1.5){
        $(".sec3 .proj4").addClass("show");
    }
    if(wScroll >= $(".sec3 .proj5").offset().top -$(window).height()/1.5){
        $(".sec3 .proj5").addClass("show");
    }
    if(wScroll >= $(".sec3 .proj6").offset().top -$(window).height()/1.5){
        $(".sec3 .proj6").addClass("show");
    }
    if(wScroll >= $(".sec3 .proj7").offset().top -$(window).height()/1.5){
        $(".sec3 .proj7").addClass("show");
    }
    if(wScroll >= $(".sec3 .proj8").offset().top -$(window).height()/1.5){
        $(".sec3 .proj8").addClass("show");
    }

    // section4
    if(wScroll >= $(".sec4 .ani-tit").offset().top -$(window).height()/1.5){
        var round1 =  ( wScroll - $('.sec4').offset().top) * 0.8;
        var round2 =  ( wScroll - $('.sec4 .ani-wrap').offset().top) * 0.3;

        TweenMax.to(".sec4 .ani-tit h2", 0.5 ,{ x: round1, ease: Power0.easeOut });
        TweenMax.to(".sec4 .ani-top", 0.6 ,{ x: round2, ease: Power0.easeOut });
        TweenMax.to(".sec4 .ani-bottom", 0.6 ,{ x: -round2, ease: Power0.easeOut });
    }
});

$(window).resize(function(){
    var wWidth = $(window).width();
    var wHeight = $(window).height();

    if(wWidth <= 800){
        TweenMax.to(".sec4 .ani-top", 0.1, {x: 0,});
        TweenMax.to(".sec4 .ani-bottom", 0.1, {x: 0,});
    }
});

// Counter
function counter() {
    if ($('.skill .count').size()) {
        $c = $('.skill .count');

        $c.each(function () {
            var $this = $(this);
            $this.data('target', parseInt($this.html()));
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).on('scroll', function () {
            var speed = 5000;

            $c.each(function (i) {
                var $t = $(this);
                if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {

                    $t.data('counted', true);

                    $t.animate({
                        dummy: 1
                    }, {
                        duration: speed,
                        step: function (now) {
                            var $this = $(this);
                            var val = Math.round($this.data('target') * now);
                            $this.html(val);
                        },
                        easing: 'easeInOutQuart'
                    });

                    // easy pie
                    $('.pie').easyPieChart({
                        barColor: '#000',
                        trackColor: '#ccc',
                        scaleColor: '#ccc',
                        scaleLength: 4,
                        lineWidth: 4,
                        size: 200,
                        lineCap: 'round',
                        animate: {duration: speed, enabled: true}
                    });
                }
            });
        }).triggerHandler('scroll');
    }
}
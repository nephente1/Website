/**
 * cssanimation-gsap.js
 * Current Version: 1.0.3
 * https://www.cssanimatio.io
 * Created and maintained by: Pavel
 * Find me at: https://www.linkedin.com/in/yesiamrocks/
 * Email: hello@cssanimation.io
 * Github: https://github.com/yesiamrocks/cssanimation.io
 * Title: A CSS Animation Library for Developers and Ninjas
 * Copyright (c) 2017 Pavel
 * License: cssanimation.io is licensed under the MIT license
 **/

 window.onload = function () {    
    animateSequence();
    animateRandom();
    initTweenMax();
};

function animateSequence() {
    var a = document.getElementsByClassName('cssanimation');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 100;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 150;
            } else
                str += letter[l];
        }
        $this.innerHTML = str;
    }
}


    // Letter Push Release
    var tl = new TimelineMax();
    tl
    .staggerFromTo(".lePushReleaseFrom span",.3,{autoAlpha:0,scaleY:3,scaleX:3,ease:Power3.easeOut},{autoAlpha:1,scaleY:.5,scaleX:.5,ease:Power2.easeOut},.1)
    .staggerTo(".lePushReleaseFrom span",.3,{scaleY:1,scaleX:1,ease:Power2.easeOut},.1,"-=2.1");
    var tl = new TimelineMax();
    tl
    .staggerFromTo(".lePushReleaseFromLeft span",.5,{autoAlpha:0,x:-100,ease:Power3.easeOut},{autoAlpha:1,x:100,ease:Power2.easeOut},.2)
    .staggerTo(".lePushReleaseFromLeft span",.5,{x:0,ease:Power1.easeOut},.2,"-=2.2");
    var tl = new TimelineMax();
    tl
    .staggerFromTo(".lePushReleaseFromTop span",.5,{autoAlpha:0,y:-100,ease:Power3.easeOut},{autoAlpha:1,y:100,ease:Power2.easeOut},.2)
    .staggerTo(".lePushReleaseFromTop span",.5,{y:0,ease:Power1.easeOut},.2,"-=2.2");
    var tl = new TimelineMax();
    tl
    .staggerFromTo(".lePushReleaseFromBottom span",.5,{autoAlpha:0,y:100,ease:Power3.easeOut},{autoAlpha:1,y:-100,ease:Power3.easeOut},.2)
    .staggerTo(".lePushReleaseFromBottom span",.5,{y:0,ease:Power2.easeOut},.2,"-=2.25");
    var tl = new TimelineMax();
    tl
    .staggerTo(".lePushReleaseTo span",.5,{autoAlpha:1,scaleY:.5,scaleX:.5,ease:Power3.easeOut,delay:.5},.2)
    .staggerTo(".lePushReleaseTo span",.5,{autoAlpha:0,scaleY:5,scaleX:5,ease:Power3.easeOut},.2,"-=2.2");
    var tl = new TimelineMax();
    tl
    .staggerTo(".lePushReleaseToTop span",.5,{autoAlpha:1,y:100,ease:Power2.easeOut},.2)
    .staggerTo(".lePushReleaseToTop span",.5,{autoAlpha:0,y:-100,ease:Power2.easeOut},.2,"-=2.2");
    var tl = new TimelineMax();
    tl
    .staggerTo(".lePushReleaseToBottom span",.5,{autoAlpha:1,y:-100,ease:Power4.easeOut},.2)
    .staggerTo(".lePushReleaseToBottom span",.5,{autoAlpha:0,y:100,ease:Power1.easeOut},.2,"-=2.28");

    
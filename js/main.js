$(function() {
    function animated() {
        var getIntoX = 0;
        $(".animated-banner").mouseenter(function(e) {
            getIntoX = e.pageX;
        });

        $('.animated-banner').mousemove(function(e) {
            let movingDistance = e.pageX - getIntoX;
            for (let index = 1; index < 16; index++) {
                $('.layer:nth-child(' + index + ') img').css({ 'transition': '0s' });
            }
            $('.layer:nth-child(1) img').css({ 'transform': `translate(${-0.060937 * movingDistance}px, -17.4194px)`, 'opacity': 1 });
            $('.layer:nth-child(2) img').css({ 'transform': `translate(${-0.060937 * movingDistance + 1277}px, 0px)`, 'opacity': 1 });
            $('.layer:nth-child(3) img').css({ 'transform': `translate(${-0.08125 * movingDistance + 783}px, 0px)`, 'opacity': 1 });
            $('.layer:nth-child(4) img').css({ 'transform': `translate(${-0.26875 * movingDistance + -739}px, 0px)`, 'opacity': 1 });
            $('.layer:nth-child(5) img').css({ 'transform': `translate(${-0.0875 * movingDistance + 705}px, 52.2581px)`, 'opacity': 1 });
            $('.layer:nth-child(6) img').css({ 'transform': `translate(${-0.033854 * movingDistance + 292}px, 42.271px)`, 'opacity': 0.001248 * movingDistance });
            $('.layer:nth-child(7) img').css({ 'transform': `translate(${-0.419791 * movingDistance + 130}px, 16.2581px)`, 'opacity': 1 });
            $('.layer:nth-child(8) img').css({ 'transform': `translate(${-0.5125 * movingDistance + -406}px, 56.9032px)`, 'opacity': 1 });
            $('.layer:nth-child(9) img').css({ 'transform': `translate(${-0.24427 * movingDistance + -278}px, 18.5806px)`, 'opacity': -0.001052 * movingDistance });
            $('.layer:nth-child(10) img').css({ 'transform': `translate(${-0.35416 * movingDistance + -394}px, 37.1613px)`, 'opacity': -0.000799 * movingDistance });
            $('.layer:nth-child(11) img').css({ 'transform': `translate(${-0.673958 * movingDistance + -104}px, 15.6774px)`, 'opacity': 1 });
            $('.layer:nth-child(12) img').css({ 'transform': `translate(${-0.914583 * movingDistance + 116}px, 0px)`, 'opacity': 1 });
            $('.layer:nth-child(13) img').css({ 'transform': `translate(${-0.914583 * movingDistance + 250}px, 15.6774px)`, 'opacity': -0.000416 * movingDistance + 1 });
            $('.layer:nth-child(14) img').css({ 'transform': `translate(${-1.280208 * movingDistance + 2438}px, 0px)`, 'opacity': 1 });
            $('.layer:nth-child(15) img').css({ 'transform': `translate(${-1.829687 * movingDistance -1161}px, 0px)`, 'opacity': 1 });
        });
        $('.animated-banner').mouseleave(function() {
            for (let index = 1; index < 16; index++) {
                $('.layer:nth-child(' + index + ') img').css({ 'transition': 'all 0.3s linear' });
            }
            $('.layer:nth-child(1) img').css({ 'transform': 'translate(0px, -17.4194px)', 'opacity': 1 });
            $('.layer:nth-child(2) img').css({ 'transform': 'translate(1277.42px, 0px)', 'opacity': 1 });
            $('.layer:nth-child(3) img').css({ 'transform': 'translate(783.871px, 0px)', 'opacity': 1 });
            $('.layer:nth-child(4) img').css({ 'transform': 'translate(-739.742px, 0px)', 'opacity': 1 });
            $('.layer:nth-child(5) img').css({ 'transform': 'translate(705.484px, 52.2581px)', 'opacity': 1 });
            $('.layer:nth-child(6) img').css({ 'transform': 'translate(292.645px, 42.271px)', 'opacity': 0 });
            $('.layer:nth-child(7) img').css({ 'transform': 'translate(130.065px, 16.2581px)', 'opacity': 1 });
            $('.layer:nth-child(8) img').css({ 'transform': 'translate(-406.452px, 56.9032px)', 'opacity': 1 });
            $('.layer:nth-child(9) img').css({ 'transform': 'translate(-278.71px, 18.5806px)', 'opacity': 0 });
            $('.layer:nth-child(10) img').css({ 'transform': 'translate(-394.839px, 37.1613px)', 'opacity': 0 });
            $('.layer:nth-child(11) img').css({ 'transform': 'translate(-104.516px, 15.6774px)', 'opacity': 1 });
            $('.layer:nth-child(12) img').css({ 'transform': 'translate(116.129px, 0px)', 'opacity': 1 });
            $('.layer:nth-child(13) img').css({ 'transform': 'translate(250.839px, 15.6774px)', 'opacity': 1 });
            $('.layer:nth-child(14) img').css({ 'transform': 'translate(2438.71px, 0px)', 'opacity': 1 });
            $('.layer:nth-child(15) img').css({ 'transform': 'translate(-1161.29px, 0px)', 'opacity': 1 });
        });
    }
    animated();
});
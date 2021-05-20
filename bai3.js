$(function() {

        $(".dis").click(function(){
            $(".product").scrollTop(function(n,p){
                if(n==0){return 30;}
                if(n==1){return p;}
                if(n==2){return 170;}
            });
        });

	 function TaoSoNgauNhien(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

	setInterval(function() {
	// $(".header").css("background-image", "url(https://unsplash.it/1185/889/?random&" + (Math.random() * 3) + 1 + ")");
    $(".header").css("background-image", "url(image/back"+ TaoSoNgauNhien(1,4) +".jpg)");
	}, 7000);

	setInterval(function() {
	// $(".header").css("background-image", "url(https://unsplash.it/1185/889/?random&" + (Math.random() * 3) + 1 + ")");
    $(".item1_img").css("background-image", "url(image/body_0"+ TaoSoNgauNhien(1,8) +".jpg)");
	}, 4000);

	$(".header").css("background-size" , "100% 100%");
	$(".item1_img").css("background-size" , "100% 100%");
});
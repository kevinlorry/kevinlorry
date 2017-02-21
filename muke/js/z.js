/*
* @Author: Administrator
* @Date:   2016-09-18 21:46:26
* @Last Modified by:   Administrator
* @Last Modified time: 2016-09-26 23:41:46
*/


$(".le").hover(function() {
	$(this).find('.led').css("display","block");
},function(){
	$(this).find('.led').css("display","none");
});

var time = "";
         var index = 1;
         $(function () {
             showimg(index);
             //鼠标移入移出
            
             $(".imgnum span").hover(function () {
                clearTimeout(time);
                var icon=$(this).text();
                $(".imgnum span").removeClass("onselect").eq(icon-1).addClass("onselect");
                $("#banner_img li").hide().stop(true,true).eq(icon-1).fadeIn("slow");
             }, function () {
                index=$(this).text()> 2 ? 1 :parseInt($(this).text())+1;
                time = setTimeout("showimg(" + index + ")", 3000);
             });
         });

         function showimg(num) {
             index = num;
             $(".imgnum span").removeClass("onselect").eq(index-1).addClass("onselect");
             $("#banner_img li").hide().stop(true,true).eq(index-1).fadeIn("slow");
             index = index + 1 > 3 ? 1 : index + 1;
             time = setTimeout("showimg(" + index + ")", 3000);
         }
        $("#main").on('mouseover', function(){
               clearTimeout(time);
            });
         $("#main").on('mouseleave', function(){
                showimg(index);
        });
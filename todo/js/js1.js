/*
* @Author: Administrator
* @Date:   2016-10-27 20:25:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-02-05 18:12:41
*/

'use strict';




	function count(){
		var count = 0;
			count = $(".led").length-$(".ledde").length
		return count
	}

	$("#all").on("click",function(){
		$(".cli").removeClass("clic");
		$("#all").addClass("clic");
		$(".led").css("display","block");
		$("#change").text(count());
	});
	$("#active").on("click",function(){
		$(".cli").removeClass("clic");
		$("#active").addClass("clic");
		$(".led").css("display","block");
		$(".led.ledde").css("display","none");
		$("#change").text(count());
	});
	$("#completed").on("click",function(){
		$(".cli").removeClass("clic");
		$("#completed").addClass("clic");
		$(".led").css("display","none");
		$(".led.ledde").css("display","block");
		$("#change").text(count());
	});


	$(document).keydown(function(event){
		if (event.keyCode == 13 && $("#sousuo").val() != "") { //通过判断按钮的位置来决定输入的是否添加.clic
			$(".ledd").css("display","block");
		   	$(".ledd").before("<li class='led'> <input type='checkbox' class='box'></li>");		
			$("li").eq(-2).append($("#sousuo").val());
			$("#sousuo").val("");
		    if ($('#completed').hasClass("clic")){
				$("li").eq(-2).css("display","block");
		    }
			$("#change").text(count());  
		}
	});
$(function(){
	$("#all").click();
	$("#clear").on('click',function(){
		$(':checked').parent().remove();
		$("#change").text(count());
		$("#clear").css("display","none");
	})
})
$(function(){
	var box = $(".box");
	$("body").on("click",".box",function(){
		$(this).parent().toggleClass('ledde');
		if($('.box').is(':checked')) {
		 	$('#clear').css("display","inline-block");		 	
		 }
		 else{
		 	$("#clear").css("display","none");
		 }
	
		if ($('#active').hasClass('clic')) {
			$(".led").css("display","block");
			$(".led.ledde").css("display","none");
		}
		 else if ($('#completed').hasClass('clic')) {
		 	$(".led").css("display","none");
		 	$(".led.ledde").css("display","block");
		 }
		 else if ($('#all').hasClass('clic')) {
		 	$(".led").css("display","block");
		 }
		 $("#change").text(count());

	});
});
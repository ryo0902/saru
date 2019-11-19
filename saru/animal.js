//見出しクリックで表示
	$(document).ready(function(){
		$('.submenu h2').on('click',function(){
			$(this).next().toggleClass('hidden');
		});
	});
//クリックでメニューが出てくる
$(document).ready(function(){
	$('#navbtn').on('click',function(){
		$('#navbox').slideToggle();
	});
});

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 100){
		$('#page-top').removeClass('DownMove');
		$('#page-top').addClass('UpMove');
	}else{
		if($('#page-top').hasClass('UpMove')){
			$('#page-top').removeClass('UpMove');
			$('#page-top').addClass('DownMove');}}}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();});

// #page-topをクリックした際の設定
$('#page-top').click(function () {
	var scroll = $(window).scrollTop();
	if(scroll > 0){
		$(this).addClass('floatAnime');
        $('body,html').animate({
            scrollTop: 0
        }, 2000,function(){
            $('#page-top').removeClass('floatAnime');});}
    return false;});

const share_url = location.href;
const share_hostpath = location.host + location.pathname;
const share_title = document.title;

const share_facebook = document.getElementById("js-share-facebook");
share_facebook.setAttribute(
	"href",
	"http://www.facebook.com/share.php?u=" + share_url);

const share_twitter = document.getElementById("js-share-twitter");
share_twitter.setAttribute(
	"href",
	"https://twitter.com/share?url=" + share_url + "&text=" + share_title);

const share_hatena = document.getElementById("js-share-hatena");
share_hatena.setAttribute(
	"href",
	"http://b.hatena.ne.jp/entry/s/" + share_hostpath);

const share_line = document.getElementById("js-share-line");
share_line.setAttribute(
	"href",
	"https://social-plugins.line.me/lineit/share?url=" + share_url);

const share_pocket = document.getElementById("js-share-pocket");
share_pocket.setAttribute(
	"href",
	"http://getpocket.com/edit?url=" + share_url);

//上部画像の設定
$('.gallery').slick({
	infinite: true,
	fade: true, 
	arrows: true,
	prevArrow: '<div class="slick-prev"></div>',
	nextArrow: '<div class="slick-next"></div>',
	asNavFor: '.choice-btn',});

//選択画像の設定
$('.choice-btn').slick({
	infinite: true,
	slidesToShow: 4,
	focusOnSelect: true,
	prevArrow: '<div class="slick-prev"></div>',
	nextArrow: '<div class="slick-next"></div>',
	asNavFor: '.gallery',});

$(window).on('load',function(){

	var grid = new Muuri('.grid', {
	
	showDuration: 600,
	showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
	hideDuration: 600,
	hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		
	  visibleStyles: {
		opacity: '1',
		transform: 'scale(1)'},
	  hiddenStyles: {
		opacity: '0',
		transform: 'scale(0.5)'}});
	
	$('.sort-btn li').on('click',function(){		
		$(".sort-btn .active").removeClass("active");	
		var className = $(this).attr("class");		
		className = className.split(' ');			
		$("."+className[0]).addClass("active");		
		if(className[0] == "sort00"){				
			 grid.show('');							
		}else{									
			grid.filter("."+className[0]);}});
	
	//＝＝＝ Fancyboxの設定
	$('[data-fancybox]').fancybox({
	 thumbs: {
		autoStart: true,},});});
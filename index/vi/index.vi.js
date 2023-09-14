//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {
	easing: 'easeInOut',
	duration: 2000,
	strokeWidth: 10.5,
	color: '#f1c21e',
	trailWidth: 10.5,
	trailColor: '#ffe176',
	text: {			
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-40px 0 0 0',
			transform:'translate(-50%,-50%)',
			'font-size':'30px',
			color: '#f1c21e',
            fontFamily:'MS Mincho',
            fontWeight:'bold'},
		autoStyleContainer: false},
	step: function(state, bar) {
		bar.setText('Loading･･･  ' + Math.round(bar.value() * 100) + ' %');}});

//アニメーションスタート
bar.animate(1.0, function () {
	$("#splash_text").fadeOut(10);
	$(".loader_cover-up").addClass("coveranime");
	$(".loader_cover-down").addClass("coveranime");
	$("#splash").fadeOut();});

//初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
var access = $.cookie('access')
if(!access){
	flag = true;
	$.cookie('access', false);
}else{
	flag = false}

//モーダル表示
setTimeout(() => {$(".video-open").modaal({
start_open:flag,
overlay_close:true,
type: 'video',
background: '#000000',
overlay_opacity:0.7,
before_open:function(){
	$('html').css('overflow-y','hidden');},
after_close:function(){
	$('html').css('overflow-y','scroll');}})},8000);

//1. テキストを含む一般的なモーダル
$(".info").modaal({
	overlay_close:true,
	before_open:function(){
		$('html').css('overflow-y','hidden');},
	after_close:function(){
		$('html').css('overflow-y','scroll');}});

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

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {
	$('.box').slideUp(500);
    
	var findElm = $(this).next(".box");
    
	if($(this).hasClass('close')){
		$(this).removeClass('close'); 
	}else{//それ以外は
		$('.close').removeClass('close'); 
		$(this).addClass('close');
		$(findElm).slideDown(500);}});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open");
	$(".open").each(function(index, element){
		var Title =$(element).children('.title');	
		$(Title).addClass('close');			
		var Box =$(element).children('.box');	
		$(Box).slideDown(500);});});

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
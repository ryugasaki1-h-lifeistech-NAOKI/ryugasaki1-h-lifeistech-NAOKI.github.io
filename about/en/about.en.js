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
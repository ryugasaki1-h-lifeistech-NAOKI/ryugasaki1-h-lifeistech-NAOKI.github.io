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
            fontWeight:'bold'
		},
		autoStyleContainer: false
	},
	step: function(state, bar) {
		bar.setText('Loading･･･  ' + Math.round(bar.value() * 100) + ' %'); 
	}
});

//アニメーションスタート
bar.animate(1.0, function () {
	$("#splash_text").fadeOut(10);
	$(".loader_cover-up").addClass("coveranime");
	$(".loader_cover-down").addClass("coveranime");
	$("#splash").fadeOut();
});

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 100){//上から100pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#page-top').click(function () {
	var scroll = $(window).scrollTop(); //スクロール値を取得
	if(scroll > 0){
		$(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
        $('body,html').animate({
            scrollTop: 0
        }, 2000,function(){//スクロールの速さ。数字が大きくなるほど遅くなる
            $('#page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
        });	
	}
    return false;//リンク自体の無効化
});


const share_url = location.href;
const share_hostpath = location.host + location.pathname;
const share_title = document.title;

// facebook
const share_facebook = document.getElementById("js-share-facebook");
share_facebook.setAttribute(
	"href",
	"http://www.facebook.com/share.php?u=" + share_url
);

// twitter
const share_twitter = document.getElementById("js-share-twitter");
share_twitter.setAttribute(
	"href",
	"https://twitter.com/share?url=" + share_url + "&text=" + share_title
);

// hatena
const share_hatena = document.getElementById("js-share-hatena");
share_hatena.setAttribute(
	"href",
	"http://b.hatena.ne.jp/entry/s/" + share_hostpath
);

// line
const share_line = document.getElementById("js-share-line");
share_line.setAttribute(
	"href",
	"https://social-plugins.line.me/lineit/share?url=" + share_url
);

// pocket
const share_pocket = document.getElementById("js-share-pocket");
share_pocket.setAttribute(
	"href",
	"http://getpocket.com/edit?url=" + share_url
);
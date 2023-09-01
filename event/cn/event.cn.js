
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



//1. テキストを含む一般的なモーダル
$(".info").modaal({
	overlay_close:true,//モーダル背景クリック時に閉じるか
	before_open:function(){// モーダルが開く前に行う動作
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
});


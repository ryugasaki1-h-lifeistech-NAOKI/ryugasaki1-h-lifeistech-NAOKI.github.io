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



//上部画像の設定
$('.gallery').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	fade: true, //フェードの有効化
	arrows: true,//左右の矢印あり
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	asNavFor: '.choice-btn', //連動させるサムネイルのクラス名
});

//選択画像の設定
$('.choice-btn').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 4, //表示させるスライドの数
	focusOnSelect: true, //フォーカスの有効化
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	asNavFor: '.gallery', //連動させるスライドショーのクラス名
});






$(window).on('load',function(){	//画面遷移時にギャラリーの画像が被らないように、すべての読み込みが終わった後に実行する

	//＝＝＝Muuriギャラリープラグイン設定
	var grid = new Muuri('.grid', {
	
	//アイテムの表示速度※オプション。入れなくても動作します
	showDuration: 600,
	showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
	hideDuration: 600,
	hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		
	// アイテムの表示/非表示状態のスタイル※オプション。入れなくても動作します
	  visibleStyles: {
		opacity: '1',
		transform: 'scale(1)'
	  },
	  hiddenStyles: {
		opacity: '0',
		transform: 'scale(0.5)'
	  }    
	});
	
	//＝＝＝並び替えボタン設定
	$('.sort-btn li').on('click',function(){			//並び替えボタンをクリックしたら
		$(".sort-btn .active").removeClass("active");	//並び替えボタンに付与されているactiveクラスを全て取り除き
		var className = $(this).attr("class");			//クラス名を取得
		className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする
		$("."+className[0]).addClass("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
		if(className[0] == "sort00"){						//クラス名がsort00（全て）のボタンの場合は、
			 grid.show('');								//全ての要素を出す
		}else{											//それ以外の場合は
			grid.filter("."+className[0]); 				//フィルターを実行
		}
	});
	
	//＝＝＝ Fancyboxの設定
	$('[data-fancybox]').fancybox({
	 thumbs: {
		autoStart: true, //グループのサムネイル一覧をデフォルトで出す。不必要であればfalseに
	  },	
	});
		
	});
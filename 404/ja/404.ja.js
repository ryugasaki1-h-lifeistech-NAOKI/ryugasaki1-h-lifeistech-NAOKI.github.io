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
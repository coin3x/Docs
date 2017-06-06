webpackJsonp([34],{

/***/ 58:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "淡化幕",
		"description": "國防布。"
	},
	"styles": [
		{
			"category": "種類",
			"description": "核取方塊有不同的種類可供選擇。",
			"items": [
				{
					"title": "基本",
					"description": "最基本的淡化幕。",
					"code": "<div class=\"ts {{segment}}\">\n    <div class=\"ts active [[dimmer]]\"></div>\n    <p>看似最重要的東西卻沒能被妥善利用，</p>\n    <p>沒有人能發現這一點，因為他們早已活在過去，</p>\n    <p>才剛開始的序章卻被放在頁尾。</p>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "淡化幕有不同的狀態。",
			"items": [
				{
					"title": "已啟用",
					"description": "淡化幕只有在啟用時才會出現。",
					"code": "<div class=\"ts {{segment}}\">\n    <div class=\"ts [[active]] dimmer\"></div>\n    <p>看似最重要的東西卻沒能被妥善利用，</p>\n    <p>沒有人能發現這一點，因為他們早已活在過去，</p>\n    <p>才剛開始的序章卻被放在頁尾。</p>\n</div>\n"
				},
				{
					"title": "已停用",
					"description": "淡化幕可以被停用，如此一來就不會遮蔽或是淡化任何物件。",
					"code": "<div class=\"ts {{segment}}\">\n    <div class=\"ts [[disabled]] dimmer\"></div>\n    <p>看似最重要的東西卻沒能被妥善利用，</p>\n    <p>沒有人能發現這一點，因為他們早已活在過去，</p>\n    <p>才剛開始的序章卻被放在頁尾。</p>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "淡化幕有不同的外觀樣式可供點綴。",
			"items": [
				{
					"title": "反色",
					"description": "淡化幕可以是反色的。",
					"code": "<div class=\"ts {{segment}}\">\n    <div class=\"ts [[inverted]] active dimmer\"></div>\n    <p>看似最重要的東西卻沒能被妥善利用，</p>\n    <p>沒有人能發現這一點，因為他們早已活在過去，</p>\n    <p>才剛開始的序章卻被放在頁尾。</p>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});
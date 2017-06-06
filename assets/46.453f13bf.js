webpackJsonp([46],{

/***/ 46:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "讀取指示器",
		"description": "讓使用者能夠稍微在等待你一下。"
	},
	"intro": "<p>讀取指示器有兩個種類，一個是讀取中，另一個則是未知。未知通常用在還在準備的狀態，例如檔案讀取中，一旦檔案讀取完畢開始上傳，就可以改用讀取中的狀態。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "讀取指示器具有不同的種類。",
			"items": [
				{
					"title": "基本",
					"description": "一個最基本的讀取指示器，讀取指示器通常都是隱藏的，直至給予 <span class=\"ts horizontal label\">active</span> 或放置於一個 <span class=\"ts horizontal label\">active dimmer</span> 的容器中才會顯示。",
					"code": "<div class=\"ts {{segment}}\">\n    <p>看似最重要的東西卻沒能被妥善利用，</p>\n    <p>沒有人能發現這一點，因為他們早已活在過去，</p>\n    <p>才剛開始的序章卻被放在頁尾。</p>\n    <div class=\"ts [[active]] {{dimmer}}\">\n        <div class=\"ts [[loader]]\"></div>\n    </div>\n</div>\n"
				},
				{
					"title": "文字讀取指示器",
					"description": "讀取指示器可以帶有文字。",
					"remove": "<br>",
					"code": "<div class=\"ts {{segment}}\">\n    <div class=\"ts active {{dimmer}}\">\n        <div class=\"ts [[text loader]]\">讀取中</div>\n    </div>\n    <p>看似最重要的東西卻沒能被妥善利用，</p>\n    <p>沒有人能發現這一點，因為他們早已活在過去，</p>\n    <p>才剛開始的序章卻被放在頁尾。</p>\n</div>\n<br>\n<div class=\"ts {{segment}}\">\n    <div class=\"ts active inverted {{dimmer}}\">\n        <div class=\"ts [[text loader]]\">讀取中</div>\n    </div>\n    <p>看似最重要的東西卻沒能被妥善利用，</p>\n    <p>沒有人能發現這一點，因為他們早已活在過去，</p>\n    <p>才剛開始的序章卻被放在頁尾。</p>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "讀取指示器帶有不同的狀態。",
			"items": [
				{
					"title": "未知",
					"description": "用以顯示未知、或是準備中的狀態。",
					"code": "<div class=\"ts {{segment}}\">\n    <div class=\"ts active {{dimmer}}\">\n        <div class=\"ts [[indeterminate]] text loader\">準備檔案中</div>\n    </div>\n    <p>看似最重要的東西卻沒能被妥善利用，</p>\n    <p>沒有人能發現這一點，因為他們早已活在過去，</p>\n    <p>才剛開始的序章卻被放在頁尾。</p>\n</div>\n"
				},
				{
					"title": "啟用中",
					"description": "正在啟用中的讀取指示器，沒有 <span class=\"ts horizontal label\">dimmer</span> 的話可能會讓你的讀取指示器不清不楚。",
					"code": "<div class=\"ts {{segment}}\">\n    <div class=\"ts [[active]] loader\"></div>\n    <p>看似最重要的東西卻沒能被妥善利用，</p>\n    <p>沒有人能發現這一點，因為他們早已活在過去，</p>\n    <p>才剛開始的序章卻被放在頁尾。</p>\n</div>\n"
				},
				{
					"title": "已停用",
					"description": "讀取指示器可以呈現被停用，或是隱藏狀態。",
					"code": "<div class=\"ts {{segment}}\">\n    <div class=\"ts [[disabled]] loader\"></div>\n    <p></p>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "讀取指示器有不同的外觀、尺寸。",
			"items": [
				{
					"title": "同列區塊",
					"description": "將讀取指示器從浮動改為一個區塊。",
					"code": "<div class=\"ts active [[inline]] loader\"></div>\n<div class=\"ts active [[inline]] large loader\"></div>\n<div class=\"ts active [[inline]] big loader\"></div>\n"
				},
				{
					"title": "同列置中",
					"description": "讀取指示器就算是區塊也可以置中。",
					"code": "<div class=\"ts active [[centered]] inline loader\"></div>\n"
				},
				{
					"title": "尺寸",
					"description": "讀取指示器具有許多不同的尺寸。",
					"code": "<div class=\"ts active inline [[mini]] loader\"></div>\n<div class=\"ts active inline [[tiny]] loader\"></div>\n<div class=\"ts active inline [[small]] loader\"></div>\n<div class=\"ts active inline [[medium]] loader\"></div>\n<div class=\"ts active inline [[large]] loader\"></div>\n<div class=\"ts active inline [[big]] loader\"></div>\n<div class=\"ts active inline [[huge]] loader\"></div>\n<div class=\"ts active inline [[massive]] loader\"></div>\n"
				},
				{
					"title": "反色",
					"description": "讀取指示器的顏色可以是相反地。",
					"code": "<div class=\"ts inverted {{segment}}\">\n    <div class=\"ts active [[inverted]] loader\"></div>\n    <br>\n    <br>\n    <br>\n    <br>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});
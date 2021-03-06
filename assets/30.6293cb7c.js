webpackJsonp([30],{

/***/ 56:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "嵌入物件",
		"description": "把東西搬進來囉。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/embed/"
		},
		{
			"type": "javascript",
			"to": "/modules/embed/javascript/"
		}
	],
	"intro": "<p>透過嵌入物件元件，你可以很簡單地將 HTML5 影片、Google Map、YouTube 等影片嵌入至自己的網站內。你亦可透過此元件保持物件的長寬比，如 16:9 或 4:3 甚至 1:1⋯⋯等多種比例。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "嵌入物件有不同的種類可供使用。",
			"items": [
				{
					"title": "YouTube",
					"description": "你可以嵌入一則來自 YouTube 的影片。",
					"code": "<div class=\"ts embed\" [[data-source]]=\"youtube\" data-id=\"I6hHkf9mIcU\" data-query=\"autoplay=true\" data-placeholder=\"!-embed:karen-!\"></div>\n"
				},
				{
					"title": "Vimeo",
					"description": "或者是 Vimeo 上的影片。",
					"code": "<div class=\"ts embed\" [[data-source]]=\"vimeo\" data-id=\"125292332\" data-placeholder=\"!-embed:vimeo-!\"></div>\n"
				},
				{
					"title": "自訂影片",
					"description": "你可以手動指定影片的來源網址，當來源影片是 <span class=\"ts horizontal label\">mov</span>、<span class=\"ts horizontal label\">mp4</span>、<span class=\"ts horizontal label\">ogg</span>、<span class=\"ts horizontal label\">webm</span> 格式的時候，會由 HTML5 影片播放器播放。",
					"code": "<div class=\"ts embed\" [[data-url]]=\"http://html5demos.com/assets/dizzy.mp4\" data-placeholder=\"!-16:9-!\" data-icon=\"right circle arrow\" data-options=\"controls, autoplay\"></div>\n"
				},
				{
					"title": "外部內容",
					"description": "來源網址也可以是一個網站的內容，而不一定是則影片。所以你也可以像這樣嵌入一個 Google Map 地圖，試著點擊圖示以讀取地圖。",
					"code": "<div class=\"ts embed\" [[data-url]]=\"https://goo.gl/GKpzom\" data-icon=\"map\"></div>\n"
				},
				{
					"title": "圖片",
					"description": "嵌入物件裡面可以放置圖片，並善用長寬比設定調整比例。",
					"code": "<div class=\"ts 21:9 embed\">\n    <[[img]] src=\"!-1:1-!\">\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "嵌入物件有不同的狀態。",
			"items": [
				{
					"title": "已停用",
					"description": "顯示這個嵌入物件已經不可使用了。",
					"code": "<div class=\"ts [[disabled]] embed\">\n  <iframe src=\"https://goo.gl/GKpzom\"></iframe>\n</div>\n"
				},
				{
					"title": "唯讀",
					"description": "讓嵌入物件僅可檢視，無法與其做出任何反應與變動。",
					"code": "<div class=\"ts [[read only]] embed\">\n  <iframe src=\"https://goo.gl/GKpzom\"></iframe>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "嵌入物件可以有不同的外觀呈現。",
			"items": [
				{
					"title": "長寬比",
					"description": "你可以很簡單的透過像是 <span class=\"ts horizontal label\">4:3</span>、<span class=\"ts horizontal label\">16:9</span> 更改嵌入物件的長寬比，並且保持他們一定的比例。這個表格列出了你所能使用的長寬比。\n<br>\n<table class=\"ts small stackable definition table\">\n    <tbody>\n        <tr>\n            <td>寬型</td>\n            <td><span class=\"ts\">21:9</span></td>\n            <td><span class=\"ts\">18:9</span></td>\n            <td><span class=\"ts\">16:9</span></td>\n            <td><span class=\"ts\">5:2</span></td>\n            <td><span class=\"ts\">9:18</span></td>\n        </tr>\n        <tr>\n            <td>方型</td>\n            <td><span class=\"ts\">1:1</span></td>\n            <td><span class=\"ts\">4:3</span></td>\n            <td><span class=\"ts\">3:2</span></td>\n            <td></td>\n            <td></td>\n        </tr>\n        <tr>\n            <td>長型</td>\n            <td><span class=\"ts\">9:16</span></td>\n            <td><span class=\"ts\">3:4</span></td>\n            <td><span class=\"ts\">2:3</span></td>\n            <td></td>\n            <td></td>\n        </tr>\n    </tbody>\n</table>\n",
					"code": "<div class=\"ts [[5:2]] embed\" data-source=\"youtube\" data-id=\"I6hHkf9mIcU\" data-placeholder=\"!-embed:karen-!\"></div>\n"
				}
			]
		}
	]
};

/***/ })

});
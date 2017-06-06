webpackJsonp([16],{

/***/ 76:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "分頁籤",
		"description": "不換網頁卻能在多個內容之間作切換的好選擇。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/tab/"
		},
		{
			"type": "javascript",
			"to": "/modules/tab/javascript/"
		}
	],
	"styles": [
		{
			"category": "種類",
			"description": "分頁籤有不同種類。",
			"items": [
				{
					"title": "基本",
					"description": "一個最基本的分頁籤組，但在沒有啟用之前頁籤內容會被隱藏。",
					"code": "<div class=\"ts top attached tabbed menu\">\n    <a class=\"item\">分頁</a>\n</div>\n<div class=\"ts bottom attached tab segment\">\n    這是分頁內容。\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "分頁籤有不同的呈現狀態。",
			"items": [
				{
					"title": "已啟用",
					"description": "一個已啟用的分頁籤會顯示在頁面上。",
					"code": "<div class=\"ts top attached tabbed menu\">\n    <a class=\"active item\">分頁</a>\n</div>\n<div class=\"ts [[active]] bottom attached tab segment\">\n    這是分頁內容。\n</div>\n"
				},
				{
					"title": "讀取中",
					"description": "一個分頁籤可以呈現正在讀取的狀態。",
					"code": "<div class=\"ts top attached tabbed menu\">\n    <a class=\"active item\">分頁</a>\n</div>\n<div class=\"ts active [[loading]] bottom attached tab segment\">\n    <p>&nbsp;</p>\n    <p>&nbsp;</p>\n    <p>&nbsp;</p>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});
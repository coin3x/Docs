webpackJsonp([25],{

/***/ 61:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "進度列",
		"description": "讓使用者知道他還要等多久，前提是不會卡在 99%。"
	},
	"styles": [
		{
			"category": "種類",
			"description": "進度列具有多個不同的種類。",
			"items": [
				{
					"title": "基本",
					"description": "一個最基本的進度列架構。",
					"code": "<div class=\"ts [[progress]]\">\n    <div class=\"bar\" style=\"width: 30%\"></div>\n</div>\n"
				},
				{
					"title": "語意",
					"description": "進度列有著不同的語意。",
					"code": "<div class=\"ts [[primary]] progress\">\n    <div class=\"bar\" style=\"width: 30%\"></div>\n</div>\n<div class=\"ts [[info]] progress\">\n    <div class=\"bar\" style=\"width: 45%\"></div>\n</div>\n<div class=\"ts [[warning]] progress\">\n    <div class=\"bar\" style=\"width: 65%\"></div>\n</div>\n<div class=\"ts [[inverted]] progress\">\n    <div class=\"bar\" style=\"width: 30%\"></div>\n</div>\n"
				},
				{
					"title": "肯定和否定",
					"description": "進度列也可以帶有肯定或否定的語氣。",
					"code": "<div class=\"ts [[positive]] progress\">\n    <div class=\"bar\" style=\"width: 60%\"></div>\n</div>\n<div class=\"ts [[negative]] progress\">\n    <div class=\"bar\" style=\"width: 35%\"></div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "進度列的內容有一些不一樣的元素。",
			"items": [
				{
					"title": "進度列",
					"description": "一個顯示進度最基本的「列」。",
					"code": "<div class=\"ts progress\">\n    <div class=\"[[bar]]\"></div>\n</div>\n"
				},
				{
					"title": "文字",
					"description": "可以在進度列上顯示文字的元素，例如擺放進度百分比。",
					"code": "<div class=\"ts progress\">\n    <div class=\"bar\" style=\"width: 32%\">\n        <span class=\"[[text]]\">32%</span>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "進度列的有不同的狀態。",
			"items": [
				{
					"title": "活動中",
					"description": "顯示一個進度列正在進行中。",
					"code": "<div class=\"ts [[active]] progress\">\n    <div class=\"bar\" style=\"width: 60%\"></div>\n</div>\n"
				},
				{
					"title": "準備中",
					"description": "顯示一個可能位於準備中的進度列。",
					"code": "<div class=\"ts [[preparing]] progress\">\n    <div class=\"bar\"></div>\n</div>\n"
				},
				{
					"title": "未知",
					"description": "顯示一個尚未取得狀態的進度列。",
					"code": "<div class=\"ts [[indeterminate]] progress\">\n    <div class=\"bar\"></div>\n</div>\n"
				},
				{
					"title": "已詢問未知",
					"description": "一個已經向伺服器發送請求，但狀態仍處於未知的進度列。",
					"code": "<div class=\"ts [[queried indeterminate]] progress\">\n    <div class=\"bar\"></div>\n</div>\n"
				},
				{
					"title": "緩衝中",
					"description": "一個正在緩衝，並帶有緩衝條的進度列。",
					"code": "<div class=\"ts [[buffering]] progress\">\n    <div class=\"bar\" style=\"width: 30%\"></div>\n    <div class=\"[[buffer]] bar\" style=\"width: 50%\"></div>\n</div>\n"
				}
			]
		},
		{
			"category": "群組",
			"description": "進度列可以是一個群組。",
			"items": [
				{
					"title": "進度列堆疊",
					"description": "進度列可以由多個列來進行堆疊排列。",
					"code": "<div class=\"ts progress\">\n    <div class=\"[[bar]]\" style=\"width: 20%; background: lightskyblue\">\n        <label class=\"text\">檔案</label>\n    </div>\n    <div class=\"[[bar]]\" style=\"width: 50%; background: orange\">\n        <label class=\"text\">音樂</label>\n    </div>\n    <div class=\"[[bar]]\" style=\"width: 30%; background: green\">\n        <label class=\"text\">圖片</label>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "進度列有多種外觀型態。",
			"items": [
				{
					"title": "流動",
					"description": "進度列可以是流動寬度並適合用來貼齊容器的左右邊，因為沒有圓角。",
					"code": "<div class=\"ts [[fluid]] progress\">\n    <div class=\"bar\" style=\"width: 60%\"></div>\n</div>\n"
				},
				{
					"title": "吸附",
					"description": "進度列可以吸附在某些元件內。",
					"code": "<div class=\"ts {{card}}\">\n    <div class=\"ts positive [[top attached]] progress\">\n        <div class=\"bar\" style=\"width: 25%\"></div>\n    </div>\n    <div class=\"content\">\n        這個卡片的上下方都各有一個獨立的吸附式進度條。\n    </div>\n    <div class=\"ts [[bottom attached]] progress\">\n        <div class=\"bar\" style=\"width: 70%\"></div>\n    </div>\n</div>\n<br><br>\n<div class=\"ts top attached {{segment}}\">\n    將進度列擺放於片段中間。\n</div>\n<div class=\"ts [[attached]] progress\">\n    <div class=\"bar\" style=\"width: 35%\"></div>\n</div>\n<div class=\"ts bottom attached {{segment}}\">\n    就像你看到的ㄧ樣，這個範例示範著你可以將進度列安插在多個片段之中。\n</div>\n"
				},
				{
					"title": "尺寸",
					"description": "進度列提供多種尺寸。",
					"code": "<div class=\"ts [[tiny]] progress\">\n    <div class=\"bar\" style=\"width: 40%\"></div>\n</div>\n<div class=\"ts [[small]] progress\">\n    <div class=\"bar\" style=\"width: 50%\"></div>\n</div>\n<div class=\"ts [[medium]] progress\">\n    <div class=\"bar\" style=\"width: 60%\"><span class=\"text\">60%</span></div>\n</div>\n<div class=\"ts [[large]] progress\">\n    <div class=\"bar\" style=\"width: 70%\"><span class=\"text\">70%</span></div>\n</div>\n<div class=\"ts [[big]] progress\">\n    <div class=\"bar\" style=\"width: 80%\"><span class=\"text\">80%</span></div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});
webpackJsonp([42],{

/***/ 50:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "步驟",
		"description": "告訴別人下一步會是什麼。"
	},
	"styles": [
		{
			"category": "種類",
			"description": "步驟具有不同的種類。",
			"items": [
				{
					"title": "步驟",
					"description": "一個最基本的步驟。",
					"code": "<div class=\"ts steps\">\n    <div class=\"[[step]]\">\n      運送\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "群組",
			"description": "步驟可以是一個群組。",
			"items": [
				{
					"title": "步驟群組",
					"description": "一個最基本的步驟群組。",
					"code": "<div class=\"ts [[steps]]\">\n    <div class=\"[[step]]\">\n        <i class=\"truck icon\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n            <div class=\"description\">選擇你的運送方式</div>\n        </div>\n    </div>\n    <div class=\"active [[step]]\">\n        <i class=\"payment icon\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n            <div class=\"description\">輸入結帳資訊</div>\n        </div>\n    </div>\n    <div class=\"disabled [[step]]\">\n        <i class=\"info icon\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "排序",
					"description": "步驟群組可以有號碼排序。",
					"code": "<div class=\"ts [[ordered]] steps\">\n    <div class=\"completed step\">\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n            <div class=\"description\">選擇你的運送方式</div>\n        </div>\n    </div>\n    <div class=\"completed step\">\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n            <div class=\"description\">輸入結帳資訊</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n            <div class=\"description\">認證訂單資訊</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "垂直",
					"description": "步驟群組可以是垂直擺放的。",
					"code": "<div class=\"ts [[vertical]] steps\">\n    <div class=\"completed step\">\n        <i class=\"truck icon\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n            <div class=\"description\">選擇你的運送方式</div>\n        </div>\n    </div>\n    <div class=\"completed step\">\n        <i class=\"payment icon\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n            <div class=\"description\">輸入結帳資訊</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <i class=\"notice icon\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n            <div class=\"description\">認證訂單資訊</div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "步驟的內容是各式各樣的。",
			"items": [
				{
					"title": "標題",
					"description": "步驟裡面可以有標題。",
					"code": "<div class=\"ts steps\">\n    <div class=\"step\">\n        <div class=\"content\">\n            <div class=\"[[title]]\">運送</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "註釋",
					"description": "步驟裡面可以包含註釋。",
					"code": "<div class=\"ts steps\">\n    <div class=\"step\">\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n            <div class=\"[[description]]\">選擇你的運送方式</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "圖示",
					"description": "步驟也能夠擁有圖示。",
					"code": "<div class=\"ts steps\">\n    <div class=\"step\">\n        <i class=\"truck [[icon]]\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n            <div class=\"description\">選擇你的運送方式</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "連結",
					"description": "步驟本身可以是連結。",
					"code": "<div class=\"ts steps\">\n    <[[a]] class=\"active step\" href=\"#!\">\n        <i class=\"truck icon\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n            <div class=\"description\">選擇你的運送方式</div>\n        </div>\n    </[[a]]>\n    <[[a]] class=\"step\" href=\"#!\">\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n            <div class=\"description\">輸入結帳資訊</div>\n        </div>\n    </[[a]]>\n</div>\n"
				},
				{
					"subtitle": "非傳統的連結",
					"description": "步驟的連結樣式也可以出現在非傳統連結標籤上。",
					"code": "<div class=\"ts steps\">\n    <div class=\"[[link]] step\">\n        <i class=\"truck {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n            <div class=\"description\">選擇你的運送方式</div>\n        </div>\n    </div>\n    <div class=\"[[link]] step\">\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n            <div class=\"description\">輸入結帳資訊</div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "步驟有許多不同的狀態。",
			"items": [
				{
					"title": "行進中",
					"description": "顯示一個步驟是目前正在行進中的。",
					"code": "<div class=\"ts steps\">\n    <div class=\"[[active]] step\">\n        <i class=\"payment {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n            <div class=\"description\">輸入結帳資訊</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "完成",
					"description": "顯示一個已經完成的步驟。",
					"code": "<div class=\"ts steps\">\n    <div class=\"[[completed]] step\">\n        <i class=\"payment {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n            <div class=\"description\">輸入結帳資訊</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "已停用",
					"description": "用來顯示一個不能被選擇的步驟。",
					"code": "<div class=\"ts steps\">\n    <div class=\"[[disabled]] step\">\n        結帳\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "步驟的外觀有所不同。",
			"items": [
				{
					"title": "可層疊的",
					"description": "在螢幕縮小時，步驟可以被層疊起來。",
					"code": "<div class=\"ts [[stackable]] steps\">\n    <div class=\"completed step\">\n        <i class=\"payment {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n            <div class=\"description\">輸入結帳資訊</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <i class=\"notice {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n            <div class=\"description\">認證訂單資訊</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "流動",
					"description": "步驟的寬度可以是填滿容器寬度的。",
					"code": "<div class=\"ts vertical [[fluid]] steps\">\n    <div class=\"completed step\">\n        <i class=\"payment {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n            <div class=\"description\">輸入結帳資訊</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <i class=\"notice {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n            <div class=\"description\">認證訂單資訊</div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[fluid]] steps\">\n    <div class=\"completed step\">\n        <i class=\"payment {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n            <div class=\"description\">輸入結帳資訊</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <i class=\"notice {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n            <div class=\"description\">認證訂單資訊</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "附著",
					"description": "步驟可以附著在其他元件上。",
					"code": "<div class=\"ts three [[top attached]] steps\">\n    <div class=\"step\">\n        <i class=\"truck {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n            <div class=\"description\">選擇你的運送方式</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <i class=\"payment {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n            <div class=\"description\">輸入結帳資訊</div>\n        </div>\n    </div>\n    <div class=\"disabled step\">\n        <i class=\"info {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n        </div>\n    </div>\n</div>\n<div class=\"ts flatted attached {{segment}}\">\n    <p>月月，搭拉安！</p>\n    <p>月月，搭拉安！</p>\n    <p>月月，搭拉安！</p>\n</div>\n<div class=\"ts three [[bottom attached]] steps\">\n    <div class=\"step\">\n        <i class=\"truck {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n            <div class=\"description\">選擇你的運送方式</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <i class=\"payment {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n            <div class=\"description\">輸入結帳資訊</div>\n        </div>\n    </div>\n    <div class=\"disabled step\">\n        <i class=\"info {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "尺寸",
					"description": "步驟具有不同尺寸。",
					"code": "<div class=\"ts [[mini]] steps\">\n    <div class=\"step\">\n        <i class=\"truck {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <i class=\"payment {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n        </div>\n    </div>\n    <div class=\"disabled step\">\n        <i class=\"notice {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[tiny]] steps\">\n    <div class=\"step\">\n        <i class=\"truck {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <i class=\"payment {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n        </div>\n    </div>\n    <div class=\"disabled step\">\n        <i class=\"notice {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[small]] steps\">\n    <div class=\"step\">\n        <i class=\"truck {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <i class=\"payment {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n        </div>\n    </div>\n    <div class=\"disabled step\">\n        <i class=\"notice {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[medium]] steps\">\n    <div class=\"step\">\n        <i class=\"truck {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <i class=\"payment {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n        </div>\n    </div>\n    <div class=\"disabled step\">\n        <i class=\"notice {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[large]] steps\">\n    <div class=\"step\">\n        <i class=\"truck {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <i class=\"payment {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n        </div>\n    </div>\n    <div class=\"disabled step\">\n        <i class=\"notice {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[big]] steps\">\n    <div class=\"step\">\n        <i class=\"truck {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <i class=\"payment {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n        </div>\n    </div>\n    <div class=\"disabled step\">\n        <i class=\"notice {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[huge]] steps\">\n    <div class=\"step\">\n        <i class=\"truck {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <i class=\"payment icon\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n        </div>\n    </div>\n    <div class=\"disabled step\">\n        <i class=\"notice {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[massive]] steps\">\n    <div class=\"step\">\n        <i class=\"truck {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">運送</div>\n        </div>\n    </div>\n    <div class=\"active step\">\n        <i class=\"payment {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">結帳</div>\n        </div>\n    </div>\n    <div class=\"disabled step\">\n        <i class=\"notice {{icon}}\"></i>\n        <div class=\"content\">\n            <div class=\"title\">確認訂單</div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});
webpackJsonp([44],{

/***/ 42:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "片段",
		"description": "碎片化的文字聚集地。"
	},
	"intro": "<p>片段通常可以拿來包裝文章內容，但並不適合獨立當作一個卡片使用。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "片段具有不同的種類。",
			"items": [
				{
					"title": "片段",
					"description": "一個最基本的片段。",
					"code": "<div class=\"ts [[segment]]\">\n    <p>烈日高照，前方的道路什麼都看不見，</p>\n    <p>「很高興能和你見面。」一個細微的聲音好似那邊傳來，</p>\n    <p>明明不清楚前方的事物，卻感覺自己正在邁向的是一個新世界。</p>\n</div>\n"
				},
				{
					"title": "抬舉",
					"description": "片段可以加深陰影，看起來像被抬舉，或是浮在空中。",
					"code": "<div class=\"ts [[raised]] segment\">\n    <p>在最糟糕的事情發生之前，</p>\n    <p>我儘可能地想找出原因，</p>\n    <p>原來是 — 自己。</p>\n</div>\n"
				},
				{
					"title": "語意",
					"description": "片段也具有語意。",
					"code": "<div class=\"ts [[primary]] segment\">\n    <p>主要語意。</p>\n</div>\n<div class=\"ts [[info]] segment\">\n    <p>提醒語意。</p>\n</div>\n<div class=\"ts [[warning]] segment\">\n    <p>警告語意。</p>\n</div>\n"
				},
				{
					"title": "肯定和否定",
					"description": "片段也可以帶有肯定或否定的語氣。",
					"code": "<div class=\"ts [[positive]] segment\">\n    <p>正面語意。</p>\n</div>\n<div class=\"ts [[negative]] segment\">\n    <p>否定語意。</p>\n</div>\n"
				},
				{
					"title": "反色和語意",
					"description": "片段的語意可以更為明顯，甚至是反色地。",
					"code": "<div class=\"ts [[inverted primary]] segment\">\n    <p>主要語意。</p>\n</div>\n<div class=\"ts [[inverted info]] segment\">\n    <p>提醒語意。</p>\n</div>\n<div class=\"ts [[inverted warning]] segment\">\n    <p>警告語意。</p>\n</div>\n<div class=\"ts [[inverted positive]] segment\">\n    <p>正面語意。</p>\n</div>\n<div class=\"ts [[inverted negative]] segment\">\n    <p>否定語意。</p>\n</div>\n<div class=\"ts [[inverted]] segment\">\n    <p>反色語意。</p>\n</div>\n"
				},
				{
					"title": "發音方式",
					"description": "片段可以有不同的發音方式來強調或是以清淡地方式來描繪。",
					"code": "<div class=\"ts segment\">\n    <p>我是一般的片段。</p>\n</div>\n<div class=\"ts [[secondary]] segment\">\n    <p>我是次要發音方式的片段。</p>\n</div>\n<div class=\"ts [[tertiary]] segment\">\n    <p>我是其次發音方式的片段。</p>\n</div>\n"
				}
			]
		},
		{
			"category": "群組",
			"description": "可以聚集多個片段為一體。",
			"items": [
				{
					"title": "片段群組",
					"description": "片段可以組合成一個群組。",
					"code": "<div class=\"ts [[segments]]\">\n    <div class=\"ts segment\">任何人皆自由且平等。</div>\n    <div class=\"ts segment\">莫忘初衷。</div>\n    <div class=\"ts segment\">永遠不放棄。</div>\n    <div class=\"ts segment\">為全民、大眾所設計、運作並傾聽。</div>\n</div>\n"
				},
				{
					"subtitle": "群組和語意",
					"description": "群組中的片段也可以具有語意。",
					"code": "<div class=\"ts segments\">\n    <div class=\"ts [[primary]] segment\">任何人皆自由且平等。</div>\n    <div class=\"ts [[info]] segment\">莫忘初衷。</div>\n    <div class=\"ts [[warning]] segment\">永遠不放棄。</div>\n    <div class=\"ts [[positive]] segment\">為全民、大眾所設計、運作並傾聽。</div>\n</div>\n"
				},
				{
					"subtitle": "不同地發音語氣",
					"description": "群組中的片段也可以用不同的語氣發音。",
					"code": "<div class=\"ts segments\">\n    <div class=\"ts segment\">任何人皆自由且平等。</div>\n    <div class=\"ts [[secondary]] segment\">莫忘初衷。</div>\n    <div class=\"ts [[tertiary]] segment\">永遠不放棄。</div>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "片段可以處於不同的狀態。",
			"items": [
				{
					"title": "已停用",
					"description": "淡化片段，用以顯示這個片段不再可用。",
					"code": "<div class=\"ts [[disabled]] segment\">\n    <p>那傢伙不常說話，但是從她的言行舉止中，</p>\n    <p>好像有什麼是能被發現的。</p>\n</div>\n"
				},
				{
					"title": "讀取中",
					"description": "片段可以顯示一個正在讀取的圖示。",
					"code": "<div class=\"ts [[loading]] segment\">\n    <p>月月，搭拉安！。</p>\n    <p>月月，搭拉安！。</p>\n    <p>月月，搭拉安！。</p>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "片段可以有不同的外觀點綴。",
			"items": [
				{
					"title": "增加內距",
					"description": "片段的內距可以更大。",
					"code": "<div class=\"ts segment\">一般片段。</div>\n<div class=\"ts [[padded]] segment\">增加內距的片段。</div>\n<div class=\"ts [[very padded]] segment\">非常內距的片段。</div>\n"
				},
				{
					"title": "縮減內距",
					"description": "你可以移除所有內距、或水平和垂直內距。",
					"code": "<div class=\"ts [[vertically fitted]] segment\">這個片段沒有垂直內距。</div>\n<div class=\"ts [[fitted]] segment\">這個片段沒有內距。</div>\n<div class=\"ts [[horizontally fitted]] segment\">這個片段沒有水平內距。</div>\n"
				},
				{
					"title": "輕巧版",
					"description": "片段的寬度以內容為主。",
					"code": "<div class=\"ts [[compact]] segment\">\n    月月，搭拉安！\n</div>\n"
				},
				{
					"title": "浮動清理",
					"description": "片段可以帶有 <span class=\"ts horizontal label\">clear: both;</span> 的樣式用來整理內部的浮動元素。\n",
					"code": "<div class=\"ts [[clearing]] segment\">\n    <button class=\"ts right floated {{button}}\">浮動按鈕</button>\n</div>\n"
				},
				{
					"title": "流動",
					"description": "片段可以是流動寬度並移除相關圓角用以貼齊螢幕左右。",
					"code": "<div class=\"ts [[fluid]] segment\">\n    這個片段適合用來貼齊容器左右邊。\n</div>\n"
				},
				{
					"title": "文字對齊",
					"description": "片段的文字對齊可以改變。",
					"code": "<div class=\"ts [[left aligned]] segment\">\n    這段文字是置左對齊。\n</div>\n<div class=\"ts [[center aligned]] segment\">\n    這段文字是置中對齊。\n</div>\n<div class=\"ts [[right aligned]] segment\">\n    這段文字是置右對齊。\n</div>\n"
				},
				{
					"title": "平面化",
					"description": "片段可以是平面化，不具有陰影的。",
					"code": "<div class=\"ts [[flatted]] segment\">\n    這個片段是平的。\n</div>\n"
				},
				{
					"title": "無框線",
					"description": "片段可以沒有框線。",
					"code": "<div class=\"ts [[borderless]] segment\">\n    這個片段沒有框線。\n</div>\n"
				},
				{
					"title": "浮動",
					"description": "片段可以向左或向右浮動。",
					"code": "<div class=\"ts [[left floated]] segment\">\n    <p>我向左浮動。</p>\n</div>\n<div class=\"ts [[right floated]] segment\">\n    <p>我向右浮動。</p>\n</div>\n"
				},
				{
					"title": "基本",
					"description": "片段可以是只有基本結構的。",
					"code": "<div class=\"ts [[basic]] segment\">\n    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});
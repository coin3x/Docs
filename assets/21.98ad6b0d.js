webpackJsonp([21],{

/***/ 65:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "滑桿",
		"description": "省去手動輸入數值的麻煩。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/slider/"
		},
		{
			"type": "javascript",
			"to": "/modules/slider/javascript/"
		}
	],
	"styles": [
		{
			"category": "JavaScript",
			"description": "滑桿有提供可用的 JavaScript 模塊。",
			"items": [
				{
					"title": "基本",
					"description": "套用基本的 JavaScript 能夠使你的滑桿左側擁有指示條顏色。",
					"code": "<div class=\"ts [[slider]]\">\n    <input type=\"range\">\n</div>\n",
					"javascript": "ts('.ts.slider').slider();",
					"autoExecute": true
				}
			]
		}
	]
};

/***/ })

});
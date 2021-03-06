webpackJsonp([59],{

/***/ 27:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "訊息",
		"description": "傳遞訊息至遠方。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/collections/message"
		},
		{
			"type": "javascript",
			"to": "/collections/message/javascript"
		}
	],
	"styles": [
		{
			"category": "JavaScript",
			"description": "訊息有提供可用的 JavaScript 模塊。",
			"items": [
				{
					"title": "可關閉的",
					"description": "訊息中的關閉按鈕預設並沒有動作，僅是裝飾而已。但是你可以透過 JavaScript 將該按鈕套上一個關閉訊息的動作。",
					"code": "<div class=\"ts [[dismissable]] message\">\n    <button class=\"ts close {{button}}\"></button>\n    <div class=\"header\">\n        不喜歡我？\n    </div>\n    <p>那就關閉我吧。</p>\n</div>\n",
					"javascript": "ts('.dismissable.message').message()\n",
					"autoExecute": true
				}
			]
		}
	]
};

/***/ })

});
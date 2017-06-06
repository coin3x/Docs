webpackJsonp([38],{

/***/ 54:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "核取方塊",
		"description": "好的。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/checkbox/"
		},
		{
			"type": "javascript",
			"to": "/modules/checkbox/javascript/"
		}
	],
	"styles": [
		{
			"category": "JavaScript",
			"description": "核取方塊有提供可用的 JavaScript 模塊。",
			"items": [
				{
					"title": "簡單",
					"description": "你可以使用 JavaScript 來省去撰寫 <span class=\"ts horizontal label\">[id=\"\"]</span> 和 <span class=\"ts horizontal label\">[for=\"\"]</span> 的困擾。",
					"code": "<div class=\"ts checkbox\">\n    <input type=\"checkbox\">\n    <label>第三性</label>\n</div>\n",
					"javascript": "ts('.ts.checkbox').checkbox();\n",
					"autoExecute": true
				}
			]
		}
	]
};

/***/ })

});
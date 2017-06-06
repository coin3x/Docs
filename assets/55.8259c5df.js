webpackJsonp([55],{

/***/ 37:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "按鈕",
		"description": "一個重要的按鈕，我們將它視為核彈按鈕般，精心設計和呵護。"
	},
	"intro": "<p>按鈕具有多種樣式和語意，請注意的是，語意和顏色不同，請不要為了要新增紅色按鈕，就建立一個「負面」按鈕。</p>\n<p>請務必遵循 CSS 樣式中的含意。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "一個按鈕具有多個不同的種類。",
			"items": [
				{
					"title": "按鈕",
					"description": "一個正常的按鈕。",
					"code": "<button class=\"ts [[button]]\">按鈕</button>\n"
				},
				{
					"title": "基本語氣",
					"description": "用來讓一個按鈕擁有不同的意思，但卻不帶有肯定或否定語氣。",
					"code": "<button class=\"ts [[primary]] button\">主要</button>\n<button class=\"ts [[warning]] button\">警告</button>\n<button class=\"ts [[info]] button\">資訊</button>\n<button class=\"ts [[inverted]] button\">相反色</button>\n"
				},
				{
					"title": "肯定和否定",
					"description": "讓按鈕帶有肯定或否定的意思。",
					"code": "<button class=\"ts [[positive]] button\">肯定</button>\n<button class=\"ts [[negative]] button\">否定</button>\n"
				},
				{
					"title": "偏見",
					"description": "讓按鈕以背景顏色作為基礎，並以此產生深、暗差異的偏見。",
					"code": "<div class=\"ts inverted info {{segment}}\">\n    <button class=\"ts [[opinion]] button\">偏見</button>\n    <button class=\"ts [[secondary opinion]] button\">次要偏見</button>\n</div>\n<div class=\"ts inverted warning {{segment}}\">\n    <button class=\"ts [[opinion]] button\">偏見</button>\n    <button class=\"ts [[secondary opinion]] button\">次要偏見</button>\n</div>\n"
				},
				{
					"title": "圖案",
					"description": "只顯示圖案的按鈕。",
					"code": "<button class=\"ts [[icon]] button\">\n    <i class=\"heart {{icon}}\"></i>\n</button>\n"
				},
				{
					"title": "連結",
					"description": "按鈕可以看起來像純文字連結。",
					"code": "這是個<button class=\"ts [[link]] button\">連結按鈕</button>喔！\n"
				},
				{
					"title": "關閉",
					"description": "按鈕可以呈現一個用於關閉其他元件的樣式。",
					"code": "<button class=\"ts mini [[close]] button\"></button>\n<button class=\"ts tiny [[close]] button\"></button>\n<button class=\"ts small [[close]] button\"></button>\n<button class=\"ts [[close]] button\"></button>\n<button class=\"ts large [[close]] button\"></button>\n<button class=\"ts big [[close]] button\"></button>\n<button class=\"ts huge [[close]] button\"></button>\n<button class=\"ts massive [[close]] button\"></button>\n"
				},
				{
					"title": "基本",
					"description": "讓按鈕只帶有基本的架構。",
					"code": "<button class=\"ts positive [[basic]] button\">確定</button>\n<button class=\"ts negative [[basic]] button\">拒絕</button>\n<button class=\"ts [[basic]] button\">知道</button>\n<button class=\"ts secondary [[basic]] button\">取消</button>\n"
				},
				{
					"title": "標籤",
					"description": "帶有標籤的按鈕。",
					"code": "<div class=\"ts [[left labeled]] button\">\n    <div class=\"ts basic {{label}}\">689</div>\n    <button class=\"ts button\">加入募集</button>\n</div>\n<div class=\"ts [[labeled]] button\">\n    <button class=\"ts button\">加入募集</button>\n    <div class=\"ts basic {{label}}\">689</div>\n</div>\n"
				},
				{
					"title": "標籤圖示",
					"description": "帶有標籤和圖示的按鈕。",
					"code": "<button class=\"ts [[labeled icon]] button\">\n    <i class=\"star {{icon}}\"></i>\n    星號\n</button>\n<button class=\"ts [[right labeled icon]] button\">\n    加入最愛\n    <i class=\"heart {{icon}}\"></i>\n</button>\n"
				}
			]
		},
		{
			"category": "群組",
			"description": "將多個按鈕組成一列，或是擁有同樣性質。",
			"items": [
				{
					"title": "按鈕群組",
					"description": "按鈕可以組合成一個群組。",
					"remove": "<br><br>",
					"code": "<div class=\"ts [[buttons]]\">\n    <button class=\"ts warning button\">橙希</button>\n    <button class=\"ts primary button\">雨藍</button>\n    <button class=\"ts inverted button\">卡莉絲</button>\n</div>\n<br><br>\n<div class=\"ts icon [[buttons]]\">\n  <button class=\"ts button\"><i class=\"align left {{icon}}\"></i></button>\n  <button class=\"ts button\"><i class=\"align center {{icon}}\"></i></button>\n  <button class=\"ts button active\"><i class=\"align right {{icon}}\"></i></button>\n  <button class=\"ts button\"><i class=\"align justify {{icon}}\"></i></button>\n</div>\n"
				},
				{
					"title": "垂直群組",
					"description": "群組也可以是垂直擺放的。",
					"code": "<div class=\"ts fluid [[vertical]] [[buttons]]\">\n    <button class=\"ts warning button\">橙希</button>\n    <button class=\"ts primary button\">雨藍</button>\n    <button class=\"ts inverted button\">卡莉絲</button>\n</div>\n"
				},
				{
					"title": "分開的",
					"description": "按鈕群組也可以分開、有間距。",
					"code": "<div class=\"ts [[separated]] [[buttons]]\">\n    <button class=\"ts warning button\">橙希</button>\n    <button class=\"ts primary button\">雨藍</button>\n    <button class=\"ts inverted button\">卡莉絲</button>\n</div>\n"
				},
				{
					"title": "較寬鬆的",
					"description": "按鈕群組之間的間距可以更大、看起來更寬鬆。",
					"code": "<div class=\"ts [[relaxed]] separated buttons\">\n    <button class=\"ts warning button\">橙希</button>\n    <button class=\"ts primary button\">雨藍</button>\n    <button class=\"ts inverted button\">卡莉絲</button>\n</div>\n"
				},
				{
					"title": "自動層疊",
					"description": "按鈕群組可以在手機版上自動層疊，而不是保持水平排列。欲觀看此效果你需要使用手機來查看此範例。",
					"code": "<div class=\"ts fluid [[stackable]] buttons\">\n    <button class=\"ts info button\">希豹</button>\n    <button class=\"ts negative button\">祈浪</button>\n    <button class=\"ts inverted button\">余望</button>\n</div>\n"
				},
				{
					"title": "垂直附著",
					"description": "按鈕群組可以垂直附著在某個元素的上下端。",
					"mark": "top attached, bottom attached",
					"code": "<div class=\"ts fluid [[top attached]] buttons\">\n    <div class=\"ts primary button\">按鈕一</div>\n    <div class=\"ts positive button\">按鈕二</div>\n</div>\n<div class=\"ts attached {{segment}}\">\n    <p>貓耳就是量子力學</p>\n    <p>△×￥○＠％＆＄＃☆□！</p>\n    <p>「冷靜一點、把咖啡歐蕾喝下去」</p>\n</div>\n<div class=\"ts fluid [[bottom attached]] buttons\">\n    <div class=\"ts inverted button\">按鈕三</div>\n    <div class=\"ts negative button\">按鈕四</div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "按鈕內部可以有不同的內容。",
			"items": [
				{
					"title": "條件",
					"description": "你能夠在按鈕群組的間隙中間安插像是條件式的文字讓使用者擇其一。",
					"code": "<div class=\"ts buttons\">\n    <button class=\"ts button\">取消</button>\n    <div class=\"[[or]]\"></div>\n    <button class=\"ts positive button\">儲存</button>\n    <div class=\"[[or]]\"></div>\n    <button class=\"ts primary button\">送出</button>\n</div>\n"
				},
				{
					"subtitle": "自訂條件文字",
					"description": "你也能夠透過 <span class=\"ts horizontal label\">[data-text]</span> 來變動條件文字，但注意文字字數不可超過圓圈大小。",
					"code": "<div class=\"ts buttons\">\n    <button class=\"ts button\">Cancel</button>\n    <div class=\"or\" [[data-text]]=\"Or\"></div>\n    <button class=\"ts positive button\">Save</button>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "你可以隨時透過樣式類別切換一個按鈕的狀態。",
			"items": [
				{
					"title": "已啟用",
					"description": "用以顯示這個按鈕已經被啟用、觸發。",
					"code": "<button class=\"ts [[active]] button\">按鈕</button>"
				},
				{
					"title": "已停用",
					"description": "用以顯示這個按鈕已經被禁止按下。",
					"code": "<button class=\"ts [[disabled]] button\">按鈕</button>"
				},
				{
					"title": "讀取中",
					"description": "按鈕也可以變成讀取狀態。",
					"code": "<button class=\"ts [[loading]] button\">按鈕</button>"
				},
				{
					"title": "脈動中",
					"description": "按鈕能夠看起來正在脈動，令人注意。",
					"code": "<button class=\"ts [[pulsing]] button\">按鈕</button>"
				}
			]
		},
		{
			"category": "外觀",
			"description": "你可以更改按鈕的位置、大小、或者形狀。",
			"items": [
				{
					"title": "尺寸",
					"description": "按鈕可以有不同的大小尺寸。",
					"code": "<button class=\"ts [[mini]] button\">迷你</button>\n<button class=\"ts [[tiny]] button\">微小</button>\n<button class=\"ts [[small]] button\">小型</button>\n<button class=\"ts [[button]]\">預設</button>\n<button class=\"ts [[medium]] button\">適中</button>\n<button class=\"ts [[large]] button\">大型</button>\n<button class=\"ts [[big]] button\">巨大</button>\n<button class=\"ts [[huge]] button\">超大</button>\n<button class=\"ts [[massive]] button\">重量級</button>\n"
				},
				{
					"title": "浮動",
					"description": "按鈕可以向左或向右浮動對齊。",
					"code": "<button class=\"ts [[left floated]] button\">向左浮動</button>\n<button class=\"ts [[right floated]] button\">向右浮動</button>\n"
				},
				{
					"title": "角落",
					"description": "按鈕可以浮動在某個元素的角落中。",
					"code": "<div class=\"ts tiny image\">\n    <img src=\"!-1:1-!\">\n    <button class=\"ts [[top right corner]] close button\"></button>\n</div>\n"
				},
				{
					"title": "垂直附著",
					"description": "按鈕可以單獨垂直附著在某個元素的上下端。",
					"code": "<button class=\"ts fluid [[top attached]] button\">附著於上</button>\n<div class=\"ts flatted attached {{segment}}\">\n    <p>TeaMeow 是一個社群網站，就像是你正在使用的 Facebook 或是 Twitter，</p>\n    <p>不過我們強調的是「自由」和「日常」，我們不會整天刪你文章。</p>\n</div>\n<button class=\"ts fluid [[bottom attached]] button\">附著於下</button>\n"
				},
				{
					"title": "輕巧版",
					"description": "縮小按鈕的內距。",
					"code": "<button class=\"ts mini [[very compact]] button\">非常輕巧</button>\n<button class=\"ts mini [[compact]] button\">迷你輕巧</button>\n<button class=\"ts [[compact]] button\">輕巧按鈕</button>\n"
				},
				{
					"title": "圓形",
					"description": "按鈕可以是圓形的。",
					"code": "<button class=\"ts [[circular]] large icon button\">\n    <i class=\"gift {{icon}}\"></i>\n</button>\n<button class=\"ts [[circular]] positive button\">知道了！</button>\n"
				}
			]
		}
	]
};

/***/ })

});
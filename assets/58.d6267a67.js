webpackJsonp([58],{

/***/ 34:
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
			"category": "種類",
			"description": "訊息有不同的種類。",
			"items": [
				{
					"title": "訊息",
					"description": "一個最基本的訊息。",
					"code": "<div class=\"ts [[message]]\">\n    <div class=\"header\">靜思語</div>\n    <p>輸的時候失去最多的就是理智。</p>\n</div>\n"
				},
				{
					"title": "基本",
					"description": "訊息可以只留下基本結構。",
					"code": "<div class=\"ts [[basic]] message\">\n    直到你成功之前，人們都是瞎子。\n</div>\n"
				},
				{
					"title": "外框線",
					"description": "訊息可以只有外框線。",
					"code": "<div class=\"ts [[outlined]] message\">\n    直到你成功之前，人們都是瞎子。\n</div>\n"
				},
				{
					"title": "結構化",
					"description": "訊息能夠看起來更具有結構，並帶有更多附加動作。",
					"code": "<div class=\"ts [[structured]] message\">\n    <div class=\"avatar\">\n        <img src=\"!-user-!\">\n    </div>\n    <div class=\"content\">\n        <div class=\"description\">\n            <p>有位使用者跑到了你的小屋並向你道聲早安，</p>\n            <p>但就在你卸下心防的同時，你意識到有什麼東西從身邊消失了。</p>\n        </div>\n        <div class=\"actions\">\n            <a class=\"primary\" href=\"#!\">檢查道具欄</a>\n            <a href=\"#!\">叫住對方</a>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "語氣",
					"description": "訊息也可以帶有不同的語氣。",
					"code": "<div class=\"ts [[primary]] message\">\n    <div class=\"header\">現已開始</div>\n    <p>目前「osu! World Cup 2015」已開始進行直播。</p>\n</div>\n<div class=\"ts [[warning]] message\">\n    <div class=\"header\">您需要先登入！</div>\n    <p>不好意思，您需要先登入才能夠執行這項動作。</p>\n</div>\n<div class=\"ts [[info]] message\">\n    <div class=\"header\">需要一些時間</div>\n    <p>你所上傳的影片會在稍後開始進行轉檔動作。</p>\n</div>\n"
				},
				{
					"title": "肯定和否定",
					"description": "訊息可以有肯定或是否定的語氣。",
					"code": "<div class=\"ts [[positive]] message\">\n    <div class=\"header\">恭喜！</div>\n    <p>你已經註冊成功。</p>\n</div>\n<div class=\"ts [[negative]] message\">\n    <div class=\"header\">此文章已被刪除</div>\n    <p>你欲拜訪的文章因違反規定而遭到刪除。</p>\n</div>\n"
				},
				{
					"title": "反色",
					"description": "反色語氣可以用在訊息上。",
					"code": "<div class=\"ts [[inverted]] message\">\n    <div class=\"header\">系統升級中</div>\n    <p>搭啦啦！系統正在升級！</p>\n</div>\n<div class=\"ts [[inverted]] primary message\">\n    <div class=\"header\">現已開始</div>\n    <p>目前「osu! World Cup 2015」已開始進行直播。</p>\n</div>\n<div class=\"ts [[inverted]] warning message\">\n    <div class=\"header\">您需要先登入！</div>\n    <p>不好意思，您需要先登入才能夠執行這項動作。</p>\n</div>\n<div class=\"ts [[inverted]] info message\">\n    <div class=\"header\">需要一些時間</div>\n    <p>你所上傳的影片會在稍後開始進行轉檔動作。</p>\n</div>\n<div class=\"ts [[inverted]] positive message\">\n    <div class=\"header\">恭喜！</div>\n    <p>你已經註冊成功。</p>\n</div>\n<div class=\"ts [[inverted]] negative message\">\n    <div class=\"header\">此文章已被刪除</div>\n    <p>你欲拜訪的文章因違反規定而遭到刪除。</p>\n</div>\n"
				},
				{
					"title": "次要",
					"description": "訊息的重要程度可以是次要的。",
					"code": "<div class=\"ts [[secondary]] message\">\n    <div class=\"header\">系統升級中</div>\n    <p>搭啦啦！系統正在升級！</p>\n</div>\n<div class=\"ts [[secondary]] primary message\">\n    <div class=\"header\">現已開始</div>\n    <p>目前「osu! World Cup 2015」已開始進行直播。</p>\n</div>\n<div class=\"ts [[secondary]] inverted positive message\">\n    <div class=\"header\">恭喜！</div>\n    <p>你已經註冊成功。</p>\n</div>\n<div class=\"ts [[secondary]] inverted negative message\">\n    <div class=\"header\">此文章已被刪除</div>\n    <p>你欲拜訪的文章因違反規定而遭到刪除。</p>\n</div>\n"
				},
				{
					"title": "清單",
					"description": "一個帶有清單的訊息。",
					"code": "<div class=\"ts message\">\n    <div class=\"header\">現已推出</div>\n    <div class=\"[[list]]\">\n        <li>虛擬實境擴充</li>\n        <li>肥宅模擬器 2016</li>\n    </div>\n</div>\n"
				},
				{
					"title": "圖示",
					"description": "一個帶有圖示的訊息。",
					"code": "<div class=\"ts [[icon]] message\">\n    <i class=\"gift {{icon}}\"></i>\n    <div class=\"content\">\n        <div class=\"header\">最新禮物</div>\n        <p>你收到了來自 ThisAV 的禮物。</p>\n    </div>\n</div>\n"
				},
				{
					"title": "可關閉的",
					"description": "你能夠在訊息內擺放一個關閉按鈕，令訊息看起來像可關閉一樣。若真要執行關閉動作，請參考 JavaScript 模塊章節。",
					"code": "<div class=\"ts [[dismissable]] message\">\n    <button class=\"ts close {{button}}\"></button>\n    <div class=\"header\">\n        不喜歡我？\n    </div>\n    <p>那就關閉我吧。</p>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "訊息帶有一些不同的狀態。",
			"items": [
				{
					"title": "隱藏",
					"description": "用來隱藏訊息。",
					"code": "<div class=\"ts [[hidden]] message\">\n    你看不見我。\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "訊息裡面可以帶有不同的內容。",
			"items": [
				{
					"title": "註釋",
					"description": "訊息裡可以擺放基本的文字註釋，這只用於結構較複雜的訊息，通常你不需要這麼做。",
					"code": "<div class=\"ts message\">\n    <div class=\"content\">\n        <div class=\"[[description]]\">\n            雖然開始是一樣的，但經歷令我們成為了不同人。\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "額外註釋",
					"description": "一個與這個訊息有關連的額外內容。",
					"code": "<div class=\"ts structured message\">\n    <div class=\"content\">\n        <div class=\"description\">\n            您已獲得 iPhone 9S 抽獎機會！但是你永遠都不會中獎，我們很期待您的參與。\n        </div>\n        <div class=\"[[extra description]]\">\n            注意，你只有三十秒的選擇機會！\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "動作",
					"description": "你能夠在訊息的右側安插一些動作按鈕。",
					"code": "<div class=\"ts message\">\n    <div class=\"content\">\n        <div class=\"description\">\n            我們已接獲版權警告並將此影片進行消音處理，這可能導致你的影片觀看次數下降。\n        </div>\n        <div class=\"[[actions]]\">\n            <button class=\"ts small inverted basic negative {{button}}\">重新上訴</button>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "圖示",
					"description": "結構化的訊息內可以擺放圖示。",
					"code": "<div class=\"ts structured message\">\n    <div class=\"[[icon]]\">\n        <i class=\"trash {{icon}}\"></i>\n    </div>\n    <div class=\"content\">\n        <div class=\"description\">\n            你已成功地將文章移動至垃圾桶了。\n        </div>\n        <div class=\"actions\">\n            <a href=\"#!\">還原文章</a>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "頭像",
					"description": "訊息裡也能夠擺置一個使用者頭像。",
					"code": "<div class=\"ts structured message\">\n    <div class=\"[[avatar]]\">\n        <img src=\"!-user-!\">\n    </div>\n    <div class=\"content\">\n        <div class=\"description\">\n            你的朋友剛才在你的文章中留言。\n        </div>\n        <div class=\"actions\">\n            <a class=\"primary\" href=\"#!\">查看</a>\n            <a href=\"#!\">下次別提醒我</a>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "訊息有不同的外觀。",
			"items": [
				{
					"title": "縮減版",
					"description": "讓訊息透過文字長度來決定寬度。",
					"code": "<div class=\"ts [[compact]] message\">\n    可惡，好想知道她的名字啊！\n</div>\n"
				},
				{
					"title": "淡化",
					"description": "訊息可以被淡化。",
					"code": "<div class=\"ts [[faded]] message\">\n    當你接受了現況，就等於接受了死亡。\n</div>\n"
				},
				{
					"title": "縮減",
					"description": "訊息的內距可以省去。",
					"code": "<div class=\"ts [[fitted]] message\">\n    這個訊息沒有內距。\n</div>\n<div class=\"ts [[horizontally fitted]] message\">\n    移除水平內距。\n</div>\n<div class=\"ts [[vertically fitted]] message\">\n    這個訊息沒有垂直內距。\n</div>\n"
				},
				{
					"title": "無邊框",
					"description": "訊息可以沒有邊框。",
					"code": "<div class=\"ts [[borderless]] message\">\n    這個訊息沒有邊框。\n</div>\n"
				},
				{
					"title": "附著",
					"description": "訊息可以附著在其他元素上下。",
					"remove": "<br><br>",
					"code": "<div class=\"ts padded [[top attached]] message\">\n    <div class=\"header\">\n        正在編輯：關於我\n    </div>\n    <p>請檢查以下「關於我」是否正確。</p>\n</div>\n<div class=\"ts attached {{segment}}\">\n    始春到底是什麼？始春，絕不向日曆妥協始春，絕不向預告低頭只要 CM3D2 在手，就能夠永遠地始春始春是一種精神，一種態度一種革命，一種叛逆。於是我了解「跳票、延期、三螢幕，這就是始春。」\n</div>\n<div class=\"ts positive [[attached]] message\">\n    以下是已核准內容。\n</div>\n<div class=\"ts bottom attached {{segment}}\">\n    夏希是一個基於 PHP 的時間類別， 用以取得現在的時間，或者是數天後的現在時刻。\n</div>\n<br><br>\n<div class=\"ts fluid top attached {{input}}\">\n    <input type=\"text\" placeholder=\"監護人姓名\">\n</div>\n<div class=\"ts warning [[bottom attached]] message\">\n    當有監護人時請填寫此欄位。\n</div>\n"
				},
				{
					"title": "附著增加內距",
					"description": "訊息在附著的情況下會縮減內距以避免過大，這個時候你能夠增加內距來令訊息大於他們所附著的元素。",
					"code": "<div class=\"ts top attached message\">\n    基本內距\n</div>\n<div class=\"ts attached {{segment}}\">\n    文字。\n</div>\n<div class=\"ts [[padded]] attached message\">\n    增加內距\n</div>\n<div class=\"ts attached {{segment}}\">\n    文字。\n</div>\n<div class=\"ts [[very padded]] bottom attached message\">\n    超級內距\n</div>\n"
				},
				{
					"title": "水平對齊",
					"description": "你可以改變訊息中的文字水平對齊，例如置左、置右、或置中。",
					"code": "<div class=\"ts [[left aligned]] message\">\n    我置左對齊。\n</div>\n<div class=\"ts [[center aligned]] message\">\n    我置中對齊。\n</div>\n<div class=\"ts [[right aligned]] message\">\n    我置右對齊。\n</div>\n"
				},
				{
					"title": "漂浮",
					"description": "訊息可以看起來是被舉起、漂浮的。",
					"code": "<div class=\"ts [[floating]] message\">\n    我好像被舉起來了。\n</div>\n"
				},
				{
					"title": "尺寸",
					"description": "訊息有提供多種尺寸。",
					"code": "<div class=\"ts [[mini]] message\">\n    迷你\n</div>\n<div class=\"ts [[tiny]] message\">\n    微小\n</div>\n<div class=\"ts [[small]] message\">\n    小的\n</div>\n<div class=\"ts [[medium]] message\">\n    適中\n</div>\n<div class=\"ts [[large]] message\">\n    大的\n</div>\n<div class=\"ts [[big]] message\">\n    大型\n</div>\n<div class=\"ts [[huge]] message\">\n    巨大\n</div>\n<div class=\"ts [[massive]] message\">\n    重量級\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});
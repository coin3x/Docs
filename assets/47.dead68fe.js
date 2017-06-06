webpackJsonp([47],{

/***/ 45:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "清單",
		"description": "一個這個，一個那個。"
	},
	"intro": "<p>清單很像一個選單，但是其結構更為簡易，外觀也以純文字居多，很適合用在頁腳的那種連結清單。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "清單具有不同的種類。",
			"items": [
				{
					"title": "基本",
					"description": "一個最基本的清單。",
					"code": "<div class=\"ts [[list]]\">\n  <div class=\"item\">蘋果</div>\n  <div class=\"item\">菠羅</div>\n  <div class=\"item\">拔鳳梨</div>\n</div>\n"
				},
				{
					"title": "黑點",
					"description": "一個帶有黑點的清單。",
					"code": "<div class=\"ts [[bulleted]] list\">\n    <div class=\"item\">橙希</div>\n    <div class=\"item\">卡莉絲</div>\n    <div class=\"item\">\n        吳雨藍\n        <div class=\"list\">\n            <a class=\"item\" href=\"#!\">亞凡芽</a>\n            <div class=\"item\">羽田白音</div>\n            <div class=\"item\">雷莉亞</div>\n        </div>\n    </div>\n    <div class=\"item\">依可諾爾</div>\n</div>\n"
				},
				{
					"title": "排序",
					"description": "清單可以有號碼排序。",
					"code": "<div class=\"ts [[ordered]] list\">\n    <a class=\"item\">英梨梨</a>\n    <a class=\"item\">詩羽</a>\n    <div class=\"item\">\n        <a>其他人物</a>\n        <div class=\"list\">\n            <a class=\"item\">加藤惠</a>\n            <a class=\"item\">九條可憐</a>\n            <a class=\"item\">豬熊陽子</a>\n        </div>\n    </div>\n    <a class=\"item\">小路綾</a>\n</div>\n"
				},
				{
					"title": "連結",
					"description": "清單也可以是存放許多連結的地方。",
					"code": "<div class=\"ts [[link]] list\">\n    <div class=\"active item\">首頁</div>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">工作</a>\n    <a class=\"item\">團隊</a>\n</div>\n"
				},
				{
					"title": "簡化",
					"description": "你可以直接透過 <span class=\"ts horizontal label\">&lt;ol&gt;</span> 和 <span class=\"ts horizontal label\">&lt;ul&gt;</span> 標籤來簡化清單的使用方式。",
					"code": "<[[ol]] class=\"ts list\">\n    <li>伊莉雅</li>\n    <li>相羽六</li>\n    <li>西絲蒂娜</li>\n</[[ol]]>\n<[[ul]] class=\"ts list\">\n    <li>七波白音</li>\n    <li>宮風夕梨</li>\n    <li>紬木沙羅</li>\n</[[ul]]>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "清單能夠有不同的狀態。",
			"items": [
				{
					"title": "已啟用",
					"description": "清單的項目能夠呈現正在使用、已經啟用的狀態。",
					"code": "<div class=\"ts segmented list\">\n    <div class=\"item\">以西結</div>\n    <div class=\"[[selected]] item\">伊波咲</div>\n    <div class=\"item\">栗宮希實</div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "清單包含了各式各樣的內容。",
			"items": [
				{
					"title": "項目",
					"description": "項目是清單中最基本的內容。",
					"code": "<div class=\"ts list\">\n    <div class=\"[[item]]\">英梨梨</div>\n    <div class=\"[[item]]\">詩羽</div>\n    <div class=\"[[item]]\">加藤惠</div>\n</div>\n"
				},
				{
					"title": "圖示",
					"description": "清單內也可以擺放圖示。",
					"code": "<div class=\"ts list\">\n    <a class=\"item\">\n        <i class=\"help [[icon]]\"></i>\n        <div class=\"content\">\n            <div class=\"header\">浮動圖示</div>\n            <div class=\"description\">這串文字會有一個左邊距，用來確保和你的圖示不會靠地太近。</div>\n        </div>\n    </a>\n    <a class=\"item\">\n        <i class=\"right triangle [[icon]]\"></i>\n        <div class=\"content\">\n            <div class=\"header\">圖示對齊</div>\n            <div class=\"description\">浮動圖示預設貼齊上方。想看看效果的話這個範例就是了。</div>\n        </div>\n    </a>\n    <div class=\"item\">\n        <i class=\"help [[icon]]\"></i>\n        圖示同行文字。\n    </div>\n</div>\n"
				},
				{
					"title": "圖片",
					"description": "清單的項目可以包含圖片。",
					"code": "<div class=\"ts list\">\n    <div class=\"item\">\n        <img class=\"ts avatar [[image]]\" src=\"!-user-!\">\n        <div class=\"content\">\n            <a class=\"header\">Yami Odymel</a>\n            <div class=\"description\">正在遊玩 <a><b>Battlefield 1</b></a>。</div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <img class=\"ts avatar [[image]]\" src=\"!-user2-!\">\n        <div class=\"content\">\n            <a class=\"header\">Mac Taylor</a>\n            <div class=\"description\">正在研發 <a><b>Alan Wakeup</b></a>。</div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <img class=\"ts avatar [[image]]\" src=\"!-user3-!\">\n        <div class=\"content\">\n            <a class=\"header\">Karisu</a>\n            <div class=\"description\">正在觀看 <a><b>麻辣鮮師</b></a>。</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "連結",
					"description": "清單裡面的項目可以是連結。",
					"remove": "<br>",
					"code": "<div class=\"ts list\">\n    <[[a]] class=\"item\">什麼是 FAQ？</[[a]]>\n    <[[a]] class=\"item\">誰是我們的客戶？</[[a]]>\n    <[[a]] class=\"item\">我們的辦公室於何地？</[[a]]>\n</div>\n<br>\n<div class=\"ts list\">\n    <div class=\"item\">\n        <[[a]] class=\"header\">標題</[[a]]>\n        <div class=\"description\">\n          在我們的 <a>註釋中</a> 按下吧！\n        </div>\n    </div>\n    <div class=\"item\">\n        <[[a]] class=\"header\">知道更多</[[a]]>\n        <div class=\"description\">\n          想知道這個網站的更多請參閱 <a>我們的 FAQ 頁面</a>。\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "標題",
					"description": "清單的項目可以包含一個標題。",
					"code": "<div class=\"ts list\">\n    <div class=\"item\">\n        <div class=\"[[header]]\">巫師聯盟總部</div>\n        電腦專家俱樂部 // 巫術實驗室\n    </div>\n    <div class=\"item\">\n        <div class=\"[[header]]\">YSITD</div>\n        Young Students' IT Discussion\n    </div>\n    <div class=\"item\">\n        <div class=\"[[header]]\">HentaiDB</div>\n        Official supergroup of @HentaiDB project.\n    </div>\n</div>\n"
				},
				{
					"title": "註釋",
					"description": "清單的項目可以包含註釋。",
					"code": "<div class=\"ts list\">\n    <div class=\"item\">\n        <i class=\"map marker {{icon}}\"></i>\n        <div class=\"content\">\n            <a class=\"header\">台北 101</a>\n            <div class=\"[[description]]\">一根每到跨年就會變成金蔥棒的台灣知名柱子。</div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <i class=\"map marker {{icon}}\"></i>\n        <div class=\"content\">\n            <a class=\"header\">台東</a>\n            <div class=\"[[description]]\">不錯的休閒旅遊地點，連我都想去。</div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <i class=\"map marker {{icon}}\"></i>\n        <div class=\"content\">\n            <a class=\"header\">高雄</a>\n            <div class=\"[[description]]\">大家有著不錯的熱情。</div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <i class=\"map marker {{icon}}\"></i>\n        <div class=\"content\">\n            <a class=\"header\">台南</a>\n            <div class=\"[[description]]\">小吃是台灣最好吃的，你說不好吃？吃慶記啦，阿靠夭那是台中。</div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "清單具有不同的外觀。",
			"items": [
				{
					"title": "水平清單",
					"description": "清單可以是水平排列的。",
					"code": "<div class=\"ts [[horizontal]] list\">\n    <div class=\"item\">\n        <img class=\"ts avatar {{image}}\" src=\"!-user-!\">\n        <div class=\"content\">\n            <div class=\"header\">Yami Odymel</div>\n            <div class=\"description\">研發 2016 始春的人</div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <img class=\"ts avatar {{image}}\" src=\"!-user2-!\">\n        <div class=\"content\">\n            <div class=\"header\">Mac Taylor</div>\n            <div class=\"description\">好基友</div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <img class=\"ts avatar {{image}}\" src=\"!-user3-!\">\n        <div class=\"content\">\n            <div class=\"header\">Val Pyen</div>\n            <div class=\"description\">OSU! 喜好者</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"subtitle": "水平清單和黑點",
					"description": "水平清單也可以搭配黑點。",
					"code": "<div class=\"ts horizontal [[bulleted]] link list\">\n    <a class=\"item\" href=\"#!\">使用者條約</a>\n    <a class=\"item\" href=\"#!\">隱私政策</a>\n    <a class=\"item\" href=\"#!\">聯繫我們</a>\n</div>\n"
				},
				{
					"title": "反色",
					"description": "清單可以是反色的，用在不同背景色的時候。",
					"code": "<div class=\"ts inverted {{segment}}\">\n    <div class=\"ts [[inverted]] relaxed divided list\">\n        <div class=\"item\">\n            <div class=\"content\">\n                <div class=\"header\">Cloud 9</div>\n                <div class=\"description\">還不錯的線上 IDE 和雲端服務。</div>\n            </div>\n        </div>\n        <div class=\"item\">\n            <div class=\"content\">\n                <div class=\"header\">Facebook</div>\n                <div class=\"description\">你認真的嗎？</div>\n            </div>\n        </div>\n        <div class=\"item\">\n            <div class=\"content\">\n                <div class=\"header\">ВКонтакте</div>\n                <div class=\"description\">朝向獨裁邁進的俄羅斯社群平台。</div>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "項目語意",
					"description": "項目也可以具有語意渲染。",
					"code": "<div class=\"ts relaxed divided list\">\n    <div class=\"[[positive]] item\">\n        正面語意\n    </div>\n    <div class=\"[[negative]] item\">\n        否定語意\n    </div>\n    <div class=\"[[primary]] item\">\n        主要語意\n    </div>\n    <div class=\"[[info]] item\">\n        資訊語意\n    </div>\n    <div class=\"[[warning]] item\">\n        警告語意\n    </div>\n    <div class=\"[[inverted]] item\">\n        反色語意\n    </div>\n</div>\n"
				},
				{
					"title": "反色項目語意",
					"description": "項目的語意渲染也可以是基於反色的。",
					"code": "<div class=\"ts inverted {{segment}}\">\n    <div class=\"ts [[inverted]] relaxed divided list\">\n        <div class=\"positive item\">\n            正面語意\n        </div>\n        <div class=\"negative item\">\n            否定語意\n        </div>\n        <div class=\"primary item\">\n            主要語意\n        </div>\n        <div class=\"info item\">\n            資訊語意\n        </div>\n        <div class=\"warning item\">\n            警告語意\n        </div>\n        <div class=\"inverted item\">\n            反色語意\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "可選擇的",
					"description": "清單可以看起來像可供選擇的。",
					"code": "<div class=\"ts middle aligned [[selection]] list\">\n    <div class=\"item\">\n        <img class=\"ts avatar {{image}}\" src=\"!-user-!\">\n        <div class=\"content\">\n            <div class=\"header\">Yami Odymel</div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <img class=\"ts avatar {{image}}\" src=\"!-user2-!\">\n        <div class=\"content\">\n            <div class=\"header\">Mac Taylor</div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <img class=\"ts avatar {{image}}\" src=\"!-user3-!\">\n        <div class=\"content\">\n            <div class=\"header\">Ruby</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "片段的",
					"description": "清單可以看起來像片段ㄧ樣層次分明。",
					"code": "<div class=\"ts selection [[segmented]] list\">\n    <a href=\"#!\" class=\"item\">飛鳥湊</a>\n    <a href=\"#!\" class=\"item\">西園寺風莉</a>\n    <a href=\"#!\" class=\"item\">大垣日向</a>\n    <a href=\"#!\" class=\"item\">貴船柚子</a>\n</div>\n"
				},
				{
					"title": "自訂標點",
					"description": "你能夠透過 <span class=\"ts horizontal label\">[value]</span> 來變更清單中的標記符號。",
					"code": "<ol class=\"ts list\">\n    <li [[value]]=\"+\">橙希</li>\n    <li [[value]]=\"+\">卡莉絲</li>\n    <li [[value]]=\"+\">\n        吳雨藍\n        <ol>\n            <li [[value]]=\"-\"><a class=\"item\" href=\"#!\">亞凡芽</a></li>\n            <li [[value]]=\"-\">橙希</li>\n            <li [[value]]=\"-\">卡莉絲</li>\n        </ol>\n    </li>\n</ol>\n"
				},
				{
					"title": "寬鬆",
					"description": "一個間距較大的寬鬆清單。",
					"remove": "<br>",
					"code": "<div class=\"ts [[relaxed]] list\">\n    <div class=\"item\">天野望</div>\n    <div class=\"item\">火井向百合</div>\n    <div class=\"item\">成海遙香</div>\n</div>\n<br>\n<div class=\"ts [[very relaxed]] divided list\">\n    <div class=\"item\">Yami Odymel</div>\n    <div class=\"item\">Karisu</div>\n    <div class=\"item\">Iknore</div>\n</div>\n"
				},
				{
					"title": "自動層疊",
					"description": "水平清單可以在行動裝置上自動將項目以垂直方式進行層疊。",
					"code": "<div class=\"ts [[stackable]] horizontal list\">\n    <div class=\"item\">始春</div>\n    <div class=\"item\">絢夏</div>\n    <div class=\"item\">起秋</div>\n    <div class=\"item\">末冬</div>\n</div>\n"
				},
				{
					"title": "分隔的",
					"description": "帶有分隔線的清單。",
					"code": "<div class=\"ts [[divided]] list\">\n    <div class=\"item\">千導院楓</div>\n    <div class=\"item\">粒櫻杏子</div>\n    <div class=\"item\">若葉昴</div>\n</div>\n"
				},
				{
					"title": "尺寸",
					"description": "不同的尺寸大小。",
					"remove": "<br>",
					"code": "<div class=\"ts [[mini]] horizontal list\">\n    <div class=\"item\">迷你</div>\n    <div class=\"item\">迷你</div>\n</div><br>\n<div class=\"ts [[tiny]] horizontal list\">\n    <div class=\"item\">微小</div>\n    <div class=\"item\">微小</div>\n</div><br>\n<div class=\"ts [[small]] horizontal list\">\n    <div class=\"item\">小型</div>\n    <div class=\"item\">小型</div>\n</div><br>\n<div class=\"ts [[medium]] horizontal list\">\n    <div class=\"item\">適中</div>\n    <div class=\"item\">適中</div>\n</div><br>\n<div class=\"ts [[large]] horizontal list\">\n    <div class=\"item\">較大</div>\n    <div class=\"item\">較大</div>\n</div><br>\n<div class=\"ts [[big]] horizontal list\">\n    <div class=\"item\">大型</div>\n    <div class=\"item\">大型</div>\n</div><br>\n<div class=\"ts [[huge]] horizontal list\">\n    <div class=\"item\">超大</div>\n    <div class=\"item\">超大</div>\n</div><br>\n<div class=\"ts [[massive]] horizontal list\">\n    <div class=\"item\">重量級</div>\n    <div class=\"item\">重量級</div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容外觀",
			"description": "你可以點綴清單內容的外觀。",
			"items": [
				{
					"title": "垂直對齊",
					"description": "項目的內容可以調整垂直對齊。",
					"code": "<div class=\"ts horizontal list\">\n    <div class=\"item\">\n        <img class=\"ts avatar {{image}}\" src=\"!-user-!\">\n        <div class=\"[[top aligned]] content\">\n            向上置齊\n        </div>\n    </div>\n    <div class=\"item\">\n        <img class=\"ts avatar {{image}}\" src=\"!-user2-!\">\n        <div class=\"[[middle aligned]] content\">\n            置中\n        </div>\n    </div>\n    <div class=\"item\">\n        <img class=\"ts avatar {{image}}\" src=\"!-user3-!\">\n        <div class=\"[[bottom aligned]] content\">\n            向下置齊\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "浮動",
					"description": "項目的內容可以向左或向右浮動。",
					"code": "<div class=\"ts middle aligned divided list\">\n    <div class=\"item\">\n        <img class=\"ts avatar {{image}}\" src=\"!-user-!\">\n        <div class=\"content\">\n            Aoi\n        </div>\n        <div class=\"[[right floated]] content\">\n            <div class=\"ts {{button}}\">新增</div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <img class=\"ts avatar {{image}}\" src=\"!-user2-!\">\n        <div class=\"content\">\n            Orenji\n        </div>\n        <div class=\"[[right floated]] content\">\n            <div class=\"ts {{button}}\">新增</div>\n        </div>\n    </div>\n    <div class=\"item\">\n        <img class=\"ts avatar {{image}}\" src=\"!-user3-!\">\n        <div class=\"content\">\n            Shirone\n        </div>\n        <div class=\"[[right floated]] content\">\n            <div class=\"ts {{button}}\">新增</div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});
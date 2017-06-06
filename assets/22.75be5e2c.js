webpackJsonp([22],{

/***/ 70:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "側邊欄",
		"description": "從側邊滑出來，然後又滑回去了。"
	},
	"tabs": [
		{
			"type": "styles",
			"to": "/modules/sidebar/"
		},
		{
			"type": "javascript",
			"to": "/modules/sidebar/javascript/"
		}
	],
	"intro": "<p>在 Tocas UI 中並沒有漢堡選單（類似 Bootstrap 的響應式選單），因為那較不直覺，容易令人猜測選單的出現位置。為了解決這個問題 Tocas UI 有著類似原生應用程式一樣的選單。</p>\n<p>側邊欄只能用於網頁最頂層，而不能嵌套在頁面上的容器內。但為了良好地示範側邊欄的應用，這個頁面上有稍微修改令側邊欄能夠套入容器中。</p>\n",
	"styles": [
		{
			"category": "頁面佈局",
			"description": "一但使用了側邊欄，你就必須更改頁面結構。",
			"items": [
				{
					"title": "頁面推動器和側邊欄",
					"description": "側邊欄出現時會將頁面向特定方向推動，為了達到這個效果，網頁中 <span class=\"ts horizontal label\">&lt;body&gt;</span> 的結構就必須像下面這樣做。",
					"type": "code",
					"code": "<body>\n    <!-- 側邊欄元件 -->\n    <div class=\"ts left [[sidebar]]\">\n    </div>\n    <!-- / 側邊欄元件 -->\n\n    <!-- 頁面推動器 -->\n    <div class=\"[[pusher]]\">\n        <!-- 網頁內容擺置於此 -->\n    </div>\n    <!-- / 頁面推動器 -->\n</body>\n"
				},
				{
					"title": "擠壓的推動器",
					"description": "通常來說側邊欄出現時，會將頁面往某個方向推。但你能讓頁面呈現被擠壓而不是被推出螢幕外。如果你有一個常態的功能側邊欄就很適合使用這種推動器。",
					"type": "code",
					"code": "<div class=\"[[squeezable]] pusher\">\n    <!-- 網頁內容擺置於此 -->\n</div>\n"
				}
			]
		},
		{
			"category": "種類",
			"description": "側邊欄具有不同的種類。",
			"items": [
				{
					"title": "基本",
					"description": "一個最基本的側邊欄會帶有內距，你能夠在內部擺置其他元件。",
					"type": "sidebar",
					"code": "<div class=\"ts static visible [[left sidebar]]\">\n    <div class=\"ts {{header}}\">\n        搭拉！\n        <div class=\"sub header\">你打開了秘密的側邊欄！</div>\n    </div>\n    <div class=\"ts {{segment}}\">\n        你可以像這樣在側邊欄放置很多不同的元件。\n    </div>\n</div>\n"
				},
				{
					"title": "垂直選單",
					"description": "側邊欄也能夠是一個由選單元件所組成的，這會很常用到。搭配 <span class=\"ts horizontal label\">inverted</span> 的反色語氣能讓側邊選單更加的明顯。",
					"type": "sidebar",
					"code": "<div class=\"ts static visible left sidebar inverted [[vertical menu]]\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">文件</a>\n    <a class=\"item\">下載</a>\n    <div class=\"item\">\n        首頁功能\n        <div class=\"menu\">\n            <a class=\"active item\">搜尋</a>\n            <a class=\"item\">新增</a>\n            <a class=\"item\">移除</a>\n        </div>\n    </div>\n    <a class=\"bottom item\">登出</a>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "側邊欄和相關的元件有不同的狀態。",
			"items": [
				{
					"title": "靜態顯示",
					"description": "側邊欄在預設情況下是隱藏的，你可以手動將其保持在顯示狀態。",
					"type": "sidebar",
					"code": "<div class=\"ts [[static visible]] left sidebar\">\n    <div class=\"ts {{header}}\">\n        <i class=\"unhide {{icon}}\"></i>\n        預設顯示\n    </div>\n    <p>這個側邊欄不需要透過 JavaScript 切換，就會直接顯示出來。</p>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "側邊欄有著不同的外觀點綴。",
			"items": [
				{
					"title": "水平方向",
					"description": "一個側邊欄必須要指定在螢幕上呈現的方向。",
					"type": "sidebar",
					"code": "<div class=\"ts static visible [[left]] sidebar\">\n    <div class=\"ts {{header}}\">\n        <i class=\"left arrow {{icon}}\"></i>\n        靠左\n        <div class=\"sub header\">哇喔！這是個靠左邊的側邊欄呢！</div>\n    </div>\n</div>\n<div class=\"ts static visible [[right]] sidebar\">\n    <div class=\"ts {{header}}\">\n        <i class=\"right arrow {{icon}}\"></i>\n        靠右\n        <div class=\"sub header\">或者也能像這樣向右靠齊。</div>\n    </div>\n</div>\n"
				},
				{
					"title": "覆蓋的",
					"description": "側邊欄一般來說會將網頁內容往旁邊推，但你可以讓側邊欄是覆蓋並浮在頁面上的。這麼做的話頁面內容就不會被推到一旁。",
					"type": "sidebar",
					"code": "<div class=\"ts static visible [[overlapped]] left sidebar\">\n    這個側邊欄會覆蓋在頁面內容上方。\n</div>\n"
				},
				{
					"title": "無內距",
					"description": "側邊欄可以沒有內距，這很適合擺放流動寬度的元件。",
					"type": "sidebar",
					"code": "<div class=\"ts static visible [[fitted]] left sidebar\">\n    <div class=\"ts small fluid inverted negative {{message}}\">\n        <div class=\"header\">帳號不安全。</div>\n        請確保您已啟用二步驟驗證。\n    </div>\n</div>\n"
				},
				{
					"title": "增加內距",
					"description": "你可以增加側邊欄的內距，看起來會更寬闊。",
					"type": "sidebar",
					"code": "<div class=\"ts static visible [[padded]] left sidebar\">\n    增加內距的側邊欄。\n</div>\n<div class=\"ts static visible [[very padded]] right sidebar\">\n    增加更多內距的側邊欄。\n</div>\n"
				},
				{
					"title": "寬度",
					"description": "<p>你可以更改側邊欄的寬度。</p>\n<table class=\"ts small stackable definition table\">\n    <thead>\n        <tr>\n            <th></th>\n            <th>64px</th>\n            <th>180px</th>\n            <th>230px</th>\n            <th>300px</th>\n            <th>360px</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>樣式名稱</td>\n            <td><span class=\"ts horizontal label\">very thin</span></td>\n            <td><span class=\"ts horizontal label\">thin</span></td>\n            <td>預設</td>\n            <td><span class=\"ts horizontal label\">wide</span></td>\n            <td><span class=\"ts horizontal label\">very wide</span></td>\n        </tr>\n        <tr>\n            <td>中文稱呼</td>\n            <td>非常窄</td>\n            <td>窄的</td>\n            <td></td>\n            <td>寬的</td>\n            <td>非常寬</td>\n        </tr>\n        <tr>\n            <td>行動裝置全寬</td>\n            <td><i class=\"x icon\"></i></td>\n            <td><i class=\"x icon\"></i></td>\n            <td><i class=\"x icon\"></i></td>\n            <td><i class=\"positive check icon\"></i></td>\n            <td><i class=\"positive check icon\"></i></td>\n        </tr>\n    </tbody>\n</table>\n",
					"type": "sidebar",
					"code": "<div class=\"ts static visible [[wide]] left sidebar vertical {{menu}}\">\n    <div class=\"image item\">\n        <img src=\"!-16:9-!\">\n    </div>\n    <a class=\"item\">Yami Odymel</a>\n    <div class=\"item\">\n        個人資料\n        <div class=\"menu\">\n            <a class=\"active item\">隱私</a>\n            <a class=\"item\">好友</a>\n            <a class=\"item\">文章</a>\n        </div>\n    </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});
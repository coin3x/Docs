webpackJsonp([5],{

/***/ 81:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "對話",
		"description": "跨國交際的好方式。"
	},
	"intro": "<p>對話可搭配卡片、片段來達成一個類似聊天室的樣式。</p>\n",
	"styles": [
		{
			"category": "對話氣泡",
			"description": "氣泡有不同的樣式。",
			"items": [
				{
					"title": "對話",
					"description": "一個最正常不過的對話氣泡。",
					"code": "<div class=\"ts [[speeches]]\">\n  <div class=\"[[speech]]\">\n      <div class=\"content\">早安，我的朋友！</div>\n  </div>\n</div>\n"
				},
				{
					"title": "右側對話",
					"description": "對話也可以是來自右邊的。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"[[right]] speech\">\n        <div class=\"content\">早安，我的朋友！</div>\n    </div>\n</div>\n"
				},
				{
					"title": "語意",
					"description": "對話可以有不同的語意。",
					"code": "<div class=\"ts speeches\">\n  <div class=\"[[primary]] speech\">\n      <div class=\"content\">這是主要語氣的對話氣泡。</div>\n  </div>\n  <div class=\"[[info]] speech\">\n      <div class=\"content\">這是資訊語氣的對話氣泡。</div>\n  </div>\n  <div class=\"[[warning]] speech\">\n      <div class=\"content\">這是警告語氣的對話氣泡。</div>\n  </div>\n</div>\n"
				},
				{
					"title": "肯定和否定",
					"description": "對話可以是肯定或是否定意味。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"[[negative]] speech\">\n        <div class=\"content\">不好了！這是帶有否定意味的對話！</div>\n    </div>\n    <div class=\"[[positive]] speech\">\n        <div class=\"content\">讚啦！這是很肯定的對話氣泡。</div>\n    </div>\n</div>\n"
				},
				{
					"title": "發音方式",
					"description": "可以利用不同的發音方式來點綴訊息。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"[[secondary]] speech\">\n        <div class=\"content\">這是次要發音方式，看起來顏色較深。</div>\n    </div>\n    <div class=\"[[tertiary]] speech\">\n        <div class=\"content\">這是其次發音方式，比剛才的還要更深了一點點。</div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "對話氣泡的內部可以擺放不同的內容。",
			"items": [
				{
					"title": "頭像",
					"description": "對話內容也可以具有頭像。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"speech\">\n        <div class=\"[[avatar]]\">\n          <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">早安！</div>\n    </div>\n</div>\n"
				},
				{
					"title": "文字",
					"description": "用來呈現對話的主要文字內容，如果對話僅有文字而沒有別的元素，可以省略。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"speech\">\n        <div class=\"content\">我是純文字的對話內容。</div>\n    </div>\n    <div class=\"speech\">\n        <div class=\"content\">\n          <div class=\"author\">Yami Odymel</div>\n          <div class=\"[[text]]\">這個對話內容結構較複雜，所以需要用註釋包起來。</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "作者",
					"description": "對話內容可以帶有一個作者、訊息發布者的名稱。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"speech\">\n        <div class=\"[[author]]\">Yami Odymel</div>\n        <div class=\"avatar\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"text\">大家好啊！</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"subtitle": "自由擺放作者名稱",
					"description": "作者名稱除了不只能夠擺在對話外，也可以和對話同行，或是放置於對話內。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"speech\">\n        <div class=\"avatar\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"[[inline]] [[author]]\">Yami Odymel</div>\n            <div class=\"text\">：嗨！早安。</div>\n        </div>\n    </div>\n    <div class=\"speech\">\n        <div class=\"avatar\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"author\">Haneda Shirone</div>\n            <div class=\"text\">囉哈！</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "圖片",
					"description": "對話內容可以擺放一張圖片。",
					"code": "<div class=\"ts speeches\">\n  <div class=\"speech\">\n      <div class=\"content\">\n          <div class=\"author\">Yami Odymel</div>\n          <div class=\"[[image]]\">\n              <img src=\"!-16:9-!\">\n          </div>\n          <div class=\"text\">前天去夏威夷旅行，怎樣？拍得不錯吧！。</div>\n      </div>\n  </div>\n</div>\n"
				},
				{
					"title": "中繼資料",
					"description": "你可以在對話內容下方插入一些中繼資料。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"speech\">\n        <div class=\"avatar\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"text\">月月，搭拉安。</div>\n            <div class=\"[[meta]]\">\n                <div class=\"item\">12:33 PM</div>\n                <div class=\"item\">已讀</div>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"subtitle": "帶點中繼資料",
					"description": "中繼資料可以有「子彈點」或是「中點」來做區隔。別忘記，你的中繼資料也可以像作者名稱那樣放置在對話氣泡的外面。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"speech\">\n        <div class=\"avatar\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">這個訊息的中繼資料帶有子彈點。</div>\n        <div class=\"[[bulleted]] [[meta]]\">\n            <div class=\"item\">09:16 PM</div>\n            <div class=\"item\">已讀</div>\n        </div>\n    </div>\n    <div class=\"speech\">\n          <div class=\"avatar\">\n              <img src=\"!-user-!\">\n          </div>\n          <div class=\"content\">這個則是中點的中繼資料。</div>\n          <div class=\"[[middoted]] [[meta]]\">\n              <div class=\"item\">03:54 AM</div>\n              <div class=\"item\">已傳送</div>\n          </div>\n    </div>\n</div>\n"
				},
				{
					"title": "分隔線",
					"description": "透過分隔線元件，你能以此來當作兩個對話之間的分隔點。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"speech\">\n        <div class=\"content\">\n            吻仔魚，這裡充滿了很多吻仔魚。\n        </div>\n    </div>\n    <div class=\"[[ts horizontal divider]]\">今天</div>\n    <div class=\"right speech\">\n        <div class=\"content\">\n            喔，等一下，蛤？\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "引用",
					"description": "對話內可以插入一個引用元件。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"speech\">\n        <div class=\"content\">\n            <div class=\"text\">\n                <blockquote class=\"[[ts secondary quote]]\">\n                    Yami Odymel\n                    <br>\n                    看看我，這是引用元件欸！\n                </blockquote>\n                Tocas UI 的聊天室元件支援引用欸，真是太 Telegram 了。\n            </div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "群組",
			"description": "多個對話氣泡可以被包覆成一個群組，避免重複的頭像並將對話串聯在一起。",
			"items": [
				{
					"title": "群組",
					"description": "一個最基本的對話群組。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"[[group]]\">\n        <div class=\"speech\">\n            <div class=\"avatar\">\n                <img src=\"!-user-!\">\n            </div>\n            <div class=\"content\">\n                <div class=\"author\">Yami Odymel</div>\n                <div class=\"text\">這些對話氣泡組成了一個群組。</div>\n            </div>\n        </div>\n        <div class=\"speech\">\n            <div class=\"avatar\">\n                <img src=\"!-user-!\">\n            </div>\n            <div class=\"content\">\n                <div class=\"author\">Yami Odymel</div>\n                <div class=\"text\">有些重複的內容會被隱藏，像是頭像、作者名稱、中繼資料。</div>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "右側群組",
					"description": "群組可以是向右對齊的。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"[[right]] group\">\n        <div class=\"speech\">\n            <div class=\"content\">我是右側群組。</div>\n        </div>\n        <div class=\"speech\">\n            <div class=\"content\">看起來很像是自己所發出的對話訊息。</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "圓形群組",
					"description": "群組可以指定圓形樣式，這除了讓對話氣泡是圓形之外，還能夠看起來是一體的。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"[[circular]] group\">\n        <div class=\"speech\">\n            <div class=\"avatar\">\n                <img src=\"!-user-!\">\n            </div>\n            <div class=\"content\">這個對話氣泡除了是圓的以外，</div>\n        </div>\n        <div class=\"speech\">\n            <div class=\"avatar\">\n                <img src=\"!-user-!\">\n            </div>\n            <div class=\"content\">看起來也不會太突兀。</div>\n        </div>\n        <div class=\"speech\">\n            <div class=\"avatar\">\n                <img src=\"!-user-!\">\n            </div>\n            <div class=\"content\">就像 Facebook Messenger 那樣串連在一起。</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "指標群組",
					"description": "同時你也能夠將群組也能夠看起來帶有指標，省去了在每個對話氣泡上設置指標樣式的麻煩。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"[[pointing]] group\">\n        <div class=\"speech\">\n            <div class=\"content\">這是個指標對話氣泡群組。</div>\n        </div>\n        <div class=\"speech\">\n            <div class=\"content\">但只有最後一個對話氣泡才會有三角形指標。</div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "對話有不同的外觀點綴。",
			"items": [
				{
					"title": "無框線",
					"description": "對話氣泡可以看起來是沒有框線的。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"[[borderless]] speech\">\n        <div class=\"avatar\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"author\">Yami Odymel</div>\n            <div class=\"text\">這個對話氣泡沒有框線，不覺得看起來好像有點寬敞了嗎？</div>\n        </div>\n    </div>\n    <div class=\"[[borderless]] speech\">\n        <div class=\"avatar\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"author\">Haneda Shirone</div>\n            <div class=\"text\">嗯⋯⋯。</div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "帶指標的",
					"description": "對話氣泡可以看起來有個三角形指標。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"[[pointing]] speech\">\n        <div class=\"content\">哇喔！看看這氣泡的左邊！</div>\n    </div>\n</div>\n"
				},
				{
					"title": "圓形",
					"description": "對話氣泡可以看起來是圓形的。",
					"code": "<div class=\"ts speeches\">\n    <div class=\"[[circular]] speech\">\n        <div class=\"content\">昨天你有看到彗星撞地球嗎？</div>\n    </div>\n</div>\n"
				},
				{
					"title": "尺寸",
					"description": "對話有不同的尺寸可供選擇。",
					"code": "<div class=\"ts [[tiny]] speeches\">\n  <div class=\"speech\">\n      <div class=\"content\">微小</div>\n  </div>\n</div>\n<div class=\"ts [[small]] speeches\">\n  <div class=\"speech\">\n      <div class=\"content\">小型</div>\n  </div>\n</div>\n<div class=\"ts [[medium]] speeches\">\n  <div class=\"speech\">\n      <div class=\"content\">適中</div>\n  </div>\n</div>\n<div class=\"ts [[large]] speeches\">\n  <div class=\"speech\">\n      <div class=\"content\">大型</div>\n  </div>\n</div>\n<div class=\"ts [[big]] speeches\">\n  <div class=\"speech\">\n      <div class=\"content\">大的</div>\n  </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});
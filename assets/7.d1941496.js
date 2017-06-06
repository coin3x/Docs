webpackJsonp([7],{

/***/ 85:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "動態",
		"description": "你朋友剛到你家拜訪，五分鐘前，對了，他還把你的 PS4 幹走了。"
	},
	"styles": [
		{
			"category": "種類",
			"description": "動態的種類有所不同。",
			"items": [
				{
					"title": "基本",
					"description": "最基本的動態。",
					"code": "<div class=\"ts [[feed]]\">\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                <a>Yami Odymel</a> 和你成為了朋友。\n                <div class=\"date\">\n                    1 小時前\n                </div>\n            </div>\n            <div class=\"meta\">\n                <a><i class=\"like {{icon}}\"></i> 4 個讚</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user2-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                <a>羽田白音</a> 在他牆上分享了這則貼文。\n                <div class=\"date\">\n                    3 小時前\n                </div>\n            </div>\n            <div class=\"extra images\">\n                <a><img src=\"!-4:3-!\"></a>\n                <a><img src=\"!-4:3-!\"></a>\n            </div>\n            <div class=\"meta\">\n                <a><i class=\"like {{icon}}\"></i> 1 個讚</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user3-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                <a class=\"user\">\n                    Yami Odymel\n                </a>\n                在他牆上分享了這則貼文\n                <div class=\"date\">\n                    1 天前\n                </div>\n            </div>\n            <div class=\"extra description\">\n                準備向令一個平行世界的你道歉，因為你將在這個世界有所作為。\n            </div>\n            <div class=\"meta\">\n                <a><i class=\"like {{icon}}\"></i> 成為第一個讚的人</a>\n            </div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "動態內可安插多個不同性質的內容。",
			"items": [
				{
					"title": "事件",
					"description": "一個事件是組成動態的基本元件。",
					"code": "<div class=\"ts feed\">\n    <div class=\"[[event]]\">\n        <div class=\"content\">\n            今天什麼事情也都沒有發生。\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "概要",
					"description": "概要用以加強詮釋事件的經過。",
					"code": "<div class=\"ts feed\">\n    <div class=\"event\">\n        <div class=\"content\">\n            <div class=\"[[summary]]\">\n                <a>Yami Odymel</a> 追蹤了 <a>吳雨藍</a>。\n            </div>\n        </div>\n    </div>\n    <div class=\"event\">\n        <div class=\"content\">\n            <div class=\"[[summary]]\">\n                <a>吳雨藍</a> 和 <a>Yami Odymel</a> 目前是朋友了。\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "標籤",
					"description": "一個事件可以帶有圖片或是圖示。",
					"code": "<div class=\"ts feed\">\n    <div class=\"event\">\n        <div class=\"[[label]]\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                你將 Yami Odymel 加入了 <a>員工</a> 群組。\n            </div>\n        </div>\n    </div>\n    <div class=\"event\">\n        <div class=\"[[label]]\">\n            <i class=\"pencil {{icon}}\"></i>\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                你將該貼文發布至 <a>Yami Odymel</a> 的牆上。\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"subtitle": "試試其他點綴方式",
					"description": "別忘記搭配其他 Tocas UI 樣式你還可以做出下面這樣的效果。",
					"code": "<div class=\"ts feed\">\n    <div class=\"event\">\n        <div class=\"label\">\n            <img class=\"ts circular {{image}}\" src=\"!-user2-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"date\">\n                1 天前\n            </div>\n            <div class=\"summary\">\n                我的頭像是圓的。\n            </div>\n        </div>\n    </div>\n    <div class=\"event\">\n        <div class=\"label\">\n            <i class=\"inverted info circular comment {{icon}}\"></i>\n        </div>\n        <div class=\"content\">\n            <div class=\"date\">\n                51 分鐘前\n            </div>\n            <div class=\"summary\">\n                這是一個圓形的圖示。\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "日期",
					"description": "事件或者是其概要中可以帶有日期。",
					"code": "<div class=\"ts feed\">\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user3-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"[[date]]\">\n                51 分鐘前\n            </div>\n            <div class=\"summary\">\n                你追蹤了 <a>橙希</a>。\n            </div>\n        </div>\n    </div>\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                你和 <a>卡莉絲</a> 成為朋友了。\n                <div class=\"[[date]]\">今天</div>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "額外資訊",
					"description": "事件中可以插入額外的資訊，像是附帶圖片或是額外文字。",
					"code": "<div class=\"ts feed\">\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user2-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"date\">\n                3 小時前\n            </div>\n            <div class=\"summary\">\n                <a>Yami Odymel</a> 分享了兩張照片。\n            </div>\n            <div class=\"[[extra images]]\">\n                <a><img src=\"!-4:3-!\"></a>\n                <a><img src=\"!-4:3-!\"></a>\n            </div>\n        </div>\n    </div>\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"date\">\n                1 天前\n            </div>\n            <div class=\"summary\">\n                <a>Yami Odymel</a> 在他牆上分享了這則貼文。\n            </div>\n            <div class=\"[[extra description]]\">\n                準備向令一個平行世界的你道歉，因為你將在這個世界有所作為。\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"subtitle": "中繼資料",
					"description": "事件可以帶有中繼資料。",
					"code": "<div class=\"ts feed\">\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user2-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                <a>Yami Odymel</a> 戳了你一下\n            </div>\n            <div class=\"[[meta]]\">\n                <a><i class=\"like {{icon}}\"></i> 4 個讚</a>\n                <a><i class=\"comment {{icon}}\"></i> 32 個回應</a>\n                <a>清除</a>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"subtitle": "帶點中繼資料",
					"description": "中繼資料可以有「子彈點」或是「中點」來做區隔。",
					"code": "<div class=\"ts feed\">\n    <div class=\"event\">\n        <div class=\"label\">\n            <i class=\"circular trash {{icon}}\"></i>\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                你移除了 <a>洨安萬萬歲</a> 文件。\n            </div>\n            <div class=\"[[bulleted meta]]\">\n                <a>保存</a>\n                <a>檢視</a>\n                <a>還原</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"event\">\n        <div class=\"label\">\n            <i class=\"circular comment {{icon}}\"></i>\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                你收到了一則訊息，這來自 <a>境界的彼方</a>。\n            </div>\n            <div class=\"[[middoted meta]]\">\n                <a>保存</a>\n                <a>檢視</a>\n                <a>還原</a>\n            </div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "動態的外觀可供點綴。",
			"items": [
				{
					"title": "分隔的",
					"description": "動態可以有分隔線區分。",
					"code": "<div class=\"ts [[divided]] feed\">\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user3-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                你將 Yami Odymel 加入了 <a>員工</a> 群組。\n            </div>\n        </div>\n    </div>\n    <div class=\"event\">\n        <div class=\"label\">\n            <i class=\"pencil {{icon}}\"></i>\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                你將該貼文發布至 <a>Yami Odymel</a> 的牆上。\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "較寬鬆",
					"description": "動態事件之間的空隙可以更加寬鬆。",
					"code": "<div class=\"ts [[relaxed]] feed\">\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"date\">\n                51 分鐘前\n            </div>\n            <div class=\"summary\">\n                你追蹤了 <a>吳雨藍</a>。\n            </div>\n        </div>\n    </div>\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user2-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                你和 <a>吳雨藍</a> 成為朋友了。\n                <div class=\"date\">今天</div>\n            </div>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "尺寸",
					"description": "動態有提供不同的尺寸。",
					"code": "<div class=\"ts [[tiny]] feed\">\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                <a>Yami Odymel</a> 戳了你一下\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[small]] feed\">\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user2-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                <a>Yami Odymel</a> 戳了你一下\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[medium]] feed\">\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user3-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                <a>Yami Odymel</a> 戳了你一下\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[large]] feed\">\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                <a>Yami Odymel</a> 戳了你一下\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"ts [[big]] feed\">\n    <div class=\"event\">\n        <div class=\"label\">\n            <img src=\"!-user2-!\">\n        </div>\n        <div class=\"content\">\n            <div class=\"summary\">\n                <a>Yami Odymel</a> 戳了你一下\n            </div>\n        </div>\n    </div>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});
webpackJsonp([11],{

/***/ 81:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "基本元素",
		"description": "將預設 HTML 樣式所覆蓋的元素。"
	},
	"styles": [
		{
			"category": "文字",
			"description": "針對一般文字做出外觀變動且帶有語意化的 HTML5 標籤。",
			"items": [
				{
					"title": "刪除",
					"description": "顯示一段文字已經被刪去、不再可供使用或參考。",
					"code": "<[[del]]>這段文字已經不再具有參考價值。</[[del]]>\n"
				},
				{
					"title": "插入",
					"description": "文字可以展現出是額外插入到某個段落中的樣子。",
					"code": "野格炸彈，<[[ins]]>我的最愛</[[ins]]>。\n"
				},
				{
					"title": "標記",
					"description": "你能夠讓文字看起來就像被螢光筆標記一樣。",
					"code": "當我閉上眼，我，什麼都 <[[mark]]>看不見</[[mark]]>。\n"
				},
				{
					"title": "縮寫",
					"description": "文字可以是縮寫，且在滑鼠滑過時出現完整文字。",
					"code": "<[[abbr]] title=\"HyperText Markup Language\" class=\"initialism\">HTML</[[abbr]]> 是標籤語言，而不是一種程式語言。\n"
				},
				{
					"title": "上標與下標",
					"description": "將指定文字偏上或偏下。",
					"code": "<p>朋友買了一件衣料，綠色的底子帶白色方格，當她拿給我們看時<[[sup]]>[8]</[[sup]]>：</p>\n<p>「關我屁事？」我說。</p>\n<p>我們不禁哄堂大笑，同樣的一件衣料<[[sub]]>[9]</[[sub]]>，關其他人屁事。</p>\n"
				},
				{
					"title": "分隔線",
					"description": "將段落做為區隔。",
					"code": "<p>那不是社會亦或教育問題。至今我們十分感慨，因為他生而如此卻沒被發現。</p>\n<[[hr]]/>\n<p>我們從不懷疑自己是不是沒殺人的殺人犯。</p>\n"
				},
				{
					"title": "引言",
					"description": "從別處所引用的文字與段落。",
					"code": "<[[blockquote]]>\n    <p>臺灣是位於亞洲東部、太平洋西北側的島嶼，地處琉球群島與菲律賓群島之間，西隔臺灣海峽與歐亞大陸相望；面積約3.6萬平方公里， 為世界第38大島嶼，其中7成為山地與丘陵，平原則主要集中於西部沿海，地形海拔變化大。由於地處熱帶及亞熱帶氣候區之交界，自然景觀與生態系資源相當豐富而多元。</p>\n    <cite>維基百科</cite>\n</[[blockquote]]>\n"
				}
			]
		},
		{
			"category": "清單",
			"description": "基於 HTML5 基本標籤的清單元素。",
			"items": [
				{
					"title": "無序",
					"description": "一個基本且沒有順序的清單，且能夠巢狀式堆疊。",
					"code": "<[[ul]]>\n    <li>\n        トリノライン\n        <[[ul]]>\n            <li>七波白音</li>\n            <li>宮風夕梨</li>\n            <li>紬木沙羅</li>\n        </[[ul]]>\n    </li>\n</[[ul]]>\n"
				},
				{
					"title": "有序",
					"description": "一個帶有數字順序的基本清單，且能夠巢狀式堆疊。",
					"code": "<[[ol]]>\n    <li>\n        オルタナティブガールズ\n        <[[ol]]>\n            <li>悠木美弥花</li>\n            <li>柊つむぎ</li>\n            <li>朝比奈乃々</li>\n        </[[ol]]>\n    </li>\n</[[ol]]>\n"
				},
				{
					"title": "描述",
					"description": "用以描述部份內容且帶有標題的清單。",
					"code": "<[[dl]]>\n    <dt>自然地理</dt>\n    <dd>臺灣西與西北臨臺灣海峽，距歐亞大陸（主要距福建）海岸平均距離約200公里，臺灣海峽最窄之處為臺灣新竹縣到中國福建省平潭島，直線距離約130公里。</dd>\n    <dt>人文地理</dt>\n    <dd>包括臺灣與附屬的22座小島，以及臺灣海峽中澎湖群島的90座島嶼。目前臺灣約佔中華民國實際行政區域面積98%，其約位於東經120度至122度、北緯22度至25度之間，北迴歸線經過嘉義縣水上鄉與花蓮縣瑞穗鄉、豐濱鄉等地 。</dd>\n</[[dl]]>\n"
				}
			]
		},
		{
			"category": "特殊標記",
			"description": "HTML5 中所內建的標記型標籤。",
			"items": [
				{
					"title": "同行程式碼",
					"description": "讓文字以類似程式碼的方式標記，並與其他一般文字出現在同行。",
					"code": "透過 <[[code]]>.ts.button</[[code]]> 能夠讓你的按鈕看起來特別像按鈕，蒸蚌！\n"
				},
				{
					"title": "鍵盤按鍵",
					"description": "類似程式碼標記，但這是用來標記鍵盤快捷鍵的。",
					"code": "按下 <[[kbd]]>command + s</[[kbd]]> 能夠儲存檔案。\n"
				},
				{
					"title": "變數",
					"description": "用以標記程式內的變數名稱。",
					"code": "<[[var]]>div</[[var]]> = <[[var]]>document.documentElement</[[var]]>;\n"
				},
				{
					"title": "輸出範例",
					"description": "標註程式碼、最終所輸出的內容文字。例如程式執行之後所回傳的內容。",
					"code": "<[[samp]]>Hello, playground! Program exited.</[[samp]]>\n"
				}
			]
		},
		{
			"category": "資訊區塊",
			"description": "基於 HTML5 的資訊區塊標籤。",
			"items": [
				{
					"title": "地址",
					"description": "用來敘述一個事物的聯絡方式與地址。",
					"code": "<[[address]]>\n    <strong>卡莉斯</strong>\n    795 玹立市, 600 巷<br />\n    可露區, 郵遞區號 94107<br />\n    市話：(555) 539-1037\n</[[address]]>\n"
				}
			]
		},
		{
			"category": "輔助樣式",
			"description": "Tocas UI 所建立的輔助樣式。",
			"items": [
				{
					"title": "移除樣式",
					"description": "如果你不希望原生標籤有著 Tocas UI 的樣式，你可以考慮移除該樣式。",
					"code": "<ol class=\"[[unstyled]]\">\n    <li>悠木美弥花</li>\n    <li>有村詩音</li>\n    <li>柊つむぎ</li>\n</ol>\n"
				}
			]
		}
	]
};

/***/ })

});
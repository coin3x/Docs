webpackJsonp([60],{

/***/ 26:
/***/ (function(module, exports) {

module.exports = {
	"slate": {
		"title": "選單",
		"description": "從這裡到達任何地方。"
	},
	"intro": "<p>在 Tocas UI 中，選單並沒有漢堡樣式，你可以讓他在行動裝置上自動層疊，或者是水平捲動。如果類似 Bootstrap 那樣的漢堡選單是你要的，請參考側邊欄模塊。</p>\n",
	"styles": [
		{
			"category": "種類",
			"description": "選單具有不同的種類。",
			"items": [
				{
					"title": "選單",
					"description": "一個原生選單。",
					"code": "<div class=\"ts [[menu]]\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n"
				},
				{
					"title": "基本",
					"description": "一個基本的選單。",
					"code": "<div class=\"ts [[basic]] menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n"
				},
				{
					"title": "連結",
					"description": "一個擺放連結的選單，這種選單項目沒有左右內距，因此很適合對齊其他元件。",
					"code": "<div class=\"ts [[link]] menu\">\n    <a class=\"item\">戀愛</a>\n    <a class=\"item\">選舉</a>\n    <a class=\"item\">巧克力</a>\n</div>\n"
				},
				{
					"title": "其次",
					"description": "一個比較不重要的選單，這個選單沒有背景顏色和框線。",
					"code": "<div class=\"ts [[secondary]] menu\">\n    <a class=\"item\">動漫</a>\n    <a class=\"item\">休閒</a>\n    <a class=\"item\">音樂</a>\n</div>\n"
				},
				{
					"title": "帶指標的其次",
					"description": "一個帶有指示標記卻又比較不重要的選單。",
					"code": "<div class=\"ts [[pointing]] [[secondary]] menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"active item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n"
				},
				{
					"title": "分頁籤",
					"description": "選單可以看起來像分頁籤一樣。",
					"code": "<div class=\"ts [[tabbed]] menu\">\n    <a class=\"item\">動漫</a>\n    <a class=\"active item\">休閒</a>\n    <a class=\"item\">音樂</a>\n</div>\n"
				},
				{
					"title": "文字",
					"description": "選單可以很適合單純的文字用途。",
					"code": "<div class=\"ts [[text]] menu\">\n    <div class=\"header item\">排序優先</div>\n    <a class=\"active item\">\n        最新的\n    </a>\n    <a class=\"item\">\n        最多留言\n    </a>\n    <a class=\"item\">\n        最熱門\n    </a>\n</div>\n"
				},
				{
					"title": "反色語意",
					"description": "選單也可以是反色且具有不同語意。",
					"code": "<div class=\"ts [[inverted]] [[primary]] menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n<div class=\"ts [[inverted]] [[info]] menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n<div class=\"ts [[inverted]] [[warning]] menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n</div>\n<div class=\"ts [[inverted]] menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n"
				},
				{
					"title": "反色肯定和否定",
					"description": "選單也可以是反色且帶有肯定或否定的語氣。",
					"code": "<div class=\"ts [[inverted]] [[positive]] menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n<div class=\"ts [[inverted]] [[negative]] menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n"
				},
				{
					"title": "垂直",
					"description": "一個垂直的選單。",
					"code": "<div class=\"ts [[vertical]] menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n"
				}
			]
		},
		{
			"category": "狀態",
			"description": "一個選單帶有些不同的狀態。",
			"items": [
				{
					"title": "啟用中",
					"description": "顯示這個項目正在使用、被啟用。",
					"code": "<div class=\"ts menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"[[active]] item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n"
				},
				{
					"title": "已停用",
					"description": "顯示一個項目已經被停用、不可使用。",
					"code": "<div class=\"ts menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"[[disabled]] item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n"
				}
			]
		},
		{
			"category": "內容",
			"description": "一個選單具有不同內容。",
			"items": [
				{
					"title": "標題",
					"description": "項目也可以含有標誌性文字。",
					"code": "<div class=\"ts inverted info borderless menu\">\n    <a class=\"[[header]] item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n"
				},
				{
					"title": "未讀標記",
					"description": "項目可以有一個新通知、未讀標記。",
					"remove": "<br>",
					"code": "<div class=\"ts borderless menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"[[unread]] item\">動態軸</a>\n    <a class=\"item\">好友</a>\n    <a class=\"item\">設定</a>\n</div>\n<br>\n<div class=\"ts icon menu\">\n    <a class=\"item\"><i class=\"user {{icon}}\"></i></a>\n    <a class=\"[[unread]] item\"><i class=\"comment {{icon}}\"></i></a>\n    <a class=\"item\"><i class=\"star {{icon}}\"></i></a>\n</div>\n"
				},
				{
					"title": "圖示",
					"description": "你可以將圖示放置於選單的項目內。",
					"code": "<div class=\"ts vertical compact menu\">\n    <a class=\"item\">\n        <i class=\"search [[icon]]\"></i>\n        搜尋\n    </a>\n    <a class=\"active item\">\n        <i class=\"mail [[icon]]\"></i>\n        電子郵件\n    </a>\n    <a class=\"disabled item\">\n        <i class=\"user [[icon]]\"></i>\n        使用者\n    </a>\n    <a class=\"item\">\n        <i class=\"remove [[icon]]\"></i>\n        刪除\n    </a>\n</div>\n"
				},
				{
					"title": "文字",
					"description": "選單項目內也可以擺放文字或是標題。",
					"code": "<div class=\"ts vertical menu\">\n    <a class=\"item\">\n        <div class=\"ts {{header}}\">促銷活動</div>\n        <p>查看我們最新的促銷商品！</p>\n    </a>\n    <a class=\"item\">\n        <div class=\"ts {{header}}\">優惠券</div>\n        <p>看看我們所販售的優惠券！</p>\n    </a>\n    <a class=\"item\">\n        <div class=\"ts {{header}}\">退貨</div>\n        <p>不滿意商品？查看我們的退貨機制是什麼！</p>\n    </a>\n</div>\n"
				},
				{
					"title": "拉伸的",
					"description": "單個、或多個項目可以被拉伸到填滿整個選單，並將其他項目縮短至它們的內容寬度。這很適合用在排版上。",
					"code": "<div class=\"ts menu\">\n    <div class=\"[[stretched]] item\">\n        <div class=\"ts fluid input\">\n            <input type=\"text\" placeholder=\"在此輸入您想找的資料⋯⋯\">\n        </div>\n    </div>\n    <div class=\"item\">\n        <button class=\"ts button\">搜尋</button>\n    </div>\n</div>\n"
				},
				{
					"title": "項目縮減",
					"description": "項目可以不要有垂直或是水平內距。",
					"code": "<div class=\"ts menu\">\n    <a class=\"[[horizontally fitted]] item\"> 水平縮減 </a>\n    <a class=\"[[vertically fitted]] item\"> 垂直縮減 </a>\n    <a class=\"item\"> 一般選項 </a>\n</div>\n"
				},
				{
					"title": "置右項目",
					"description": "選單內的單個項目可以置右。",
					"code": "<div class=\"ts menu\">\n    <a class=\"item\">儀表板</a>\n    <a class=\"item\">彙整</a>\n    <a class=\"[[right]] item\">登出</a>\n</div>\n"
				},
				{
					"title": "置右選單",
					"description": "倘若你有多個項目要置右，請透過一個向右靠齊的選單。",
					"code": "<div class=\"ts menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n    <div class=\"[[right]] menu\">\n        <a class=\"item\">會員清單</a>\n        <a class=\"item\">檔案</a>\n        <a class=\"item\">Github</a>\n    </div>\n</div>\n"
				},
				{
					"title": "帶輸入欄位選單",
					"description": "選單內也可以放置輸入欄位，例如這樣。",
					"remove": "<br>",
					"code": "<div class=\"ts inverted primary borderless menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n    <div class=\"right fitted item\">\n        <div class=\"ts borderless right icon inverted primary [[input]]\">\n            <input type=\"text\" placeholder=\"文字欄位\">\n            <i class=\"search {{icon}}\"></i>\n        </div>\n    </div>\n</div>\n<br>\n<div class=\"ts vertical compact inverted info borderless menu\">\n    <div class=\"fitted item\">\n        <div class=\"ts fluid borderless basic icon inverted [[input]]\">\n            <input type=\"text\" placeholder=\"搜尋 ...\">\n            <i class=\"search {{icon}}\"></i>\n        </div>\n    </div>\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n"
				},
				{
					"title": "標籤",
					"description": "選單內可以擺放計數標籤。",
					"code": "<div class=\"ts vertical compact inverted info menu\">\n    <a class=\"item\">\n        <div class=\"ts [[label]]\">99+</div>\n        動態軸\n    </a>\n    <a class=\"active item\">\n        <div class=\"ts [[label]]\">12</div>\n        電子郵件\n    </a>\n    <a class=\"disabled item\">\n        <div class=\"ts [[label]]\">3</div>\n        訊息\n    </a>\n</div>\n"
				},
				{
					"title": "分隔線",
					"description": "你可以在選單中放置分隔線用以區隔項目。",
					"code": "<div class=\"ts vertical compact borderless menu\">\n    <a class=\"item\">\n        <i class=\"picture {{icon}}\"></i> 相簿\n    </a>\n    <a class=\"item\">\n        <i class=\"music {{icon}}\"></i> 音樂\n    </a>\n    <div class=\"[[divider]] item\"></div>\n    <a class=\"item\">\n        <i class=\"sign out {{icon}}\"></i> 登出\n    </a>\n</div>\n"
				},
				{
					"title": "子選單",
					"description": "選單的項目內還可以再有一層選單。",
					"code": "<div class=\"ts vertical compact menu\">\n    <div class=\"item\">\n        <div class=\"ts fluid right icon input\">\n            <input type=\"text\" placeholder=\"搜尋\">\n            <i class=\"search icon\"></i>\n        </div>\n    </div>\n    <div class=\"item\">\n        首頁功能\n        <div class=\"[[menu]]\">\n            <a class=\"active item\">搜尋</a>\n            <a class=\"item\">新增</a>\n            <a class=\"item\">移除</a>\n        </div>\n    </div>\n    <div class=\"item\">瀏覽</div>\n    <div class=\"item\">訊息</div>\n    <div class=\"item\">更多</div>\n</div>\n"
				},
				{
					"title": "下拉式功能選單",
					"description": "你可以在選單內擺置幾個下拉式功能選單，這部分請參考下拉式選單元件。",
					"code": "<div class=\"ts menu\">\n    <a class=\"item\">首頁</a>\n    <div class=\"[[ts item dropdown]]\">\n        <div class=\"text\">\n            元件\n        </div>\n        <i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n            <a class=\"item\">按鈕</a>\n            <div class=\"divider\"></div>\n            <a class=\"item\">表單</a>\n            <a class=\"item\">導航列</a>\n        </div>\n    </div>\n    <a class=\"item\">文件</a>\n</div>\n"
				}
			]
		},
		{
			"category": "外觀",
			"description": "選單具有不同的外觀。",
			"items": [
				{
					"title": "圖示",
					"description": "用來擺放圖示的選單。",
					"code": "<div class=\"ts [[icon]] menu\">\n    <a class=\"item\"><i class=\"search {{icon}}\"></i></a>\n    <a class=\"item\"><i class=\"download {{icon}}\"></i></a>\n    <a class=\"item\"><i class=\"upload {{icon}}\"></i></a>\n</div>\n<div class=\"ts vertical [[icon]] menu\">\n    <a class=\"item\"><i class=\"search {{icon}}\"></i></a>\n    <a class=\"item\"><i class=\"download {{icon}}\"></i></a>\n    <a class=\"item\"><i class=\"upload {{icon}}\"></i></a>\n</div>\n"
				},
				{
					"title": "圖示標籤",
					"description": "你還可以在圖示選單中帶有標籤文字。",
					"code": "<div class=\"ts [[labeled icon]] menu\">\n    <a class=\"item\">\n        <i class=\"search {{icon}}\"></i>\n        搜尋\n    </a>\n    <a class=\"active item\">\n        <i class=\"mail {{icon}}\"></i>\n        電子郵件\n    </a>\n    <a class=\"disabled item\">\n        <i class=\"user {{icon}}\"></i>\n        使用者\n    </a>\n    <a class=\"item\">\n        <i class=\"remove {{icon}}\"></i>\n        移除鈕\n    </a>\n</div>\n<div class=\"ts vertical [[labeled icon]] menu\">\n    <a class=\"item\">\n        <i class=\"search {{icon}}\"></i>\n        搜尋\n    </a>\n    <a class=\"active item\">\n        <i class=\"mail {{icon}}\"></i>\n        電子郵件\n    </a>\n    <a class=\"disabled item\">\n        <i class=\"user {{icon}}\"></i>\n        使用者\n    </a>\n</div>\n"
				},
				{
					"title": "圖片",
					"description": "選單內的項目也可以擺放單張圖片。",
					"code": "<div class=\"ts vertical compact menu\">\n    <a class=\"[[image]] item\">\n      <img class=\"ts small {{image}}\" src=\"!-user-!\">\n    </a>\n    <div class=\"item\">\n        個人檔案\n        <div class=\"menu\">\n            <a class=\"item\">編輯</a>\n            <a class=\"item\">隱私</a>\n        </div>\n    </div>\n</div>\n"
				},
				{
					"title": "流動",
					"description": "選單的寬度可以是流動的，用來貼齊容器左右邊並且移除邊角。",
					"code": "<div class=\"ts vertical [[fluid]] menu\">\n    <a class=\"item\">亞凡芽</a>\n    <a class=\"item\">卡莉絲</a>\n    <a class=\"item\">夏希</a>\n</div>\n"
				},
				{
					"title": "輕巧版",
					"description": "選單的寬度能夠以選單的內容作為基準並自動延展。",
					"code": "<div class=\"ts [[compact]] menu\">\n    <a class=\"item\">\n        <i class=\"gamepad {{icon}}\"></i>\n        遊戲\n    </a>\n    <a class=\"item\">\n        <i class=\"video camera {{icon}}\"></i>\n        頻道\n    </a>\n    <a class=\"item\">\n        <i class=\"video play {{icon}}\"></i>\n        影片\n    </a>\n</div>\n"
				},
				{
					"title": "置中項目",
					"description": "選單的項目可以從中間開始。",
					"code": "<div class=\"ts [[centered]] menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">貼文</a>\n    <a class=\"item\">照片</a>\n</div>\n"
				},
				{
					"title": "平均劃分",
					"description": "項目寬度可以平均劃分並填滿整個選單。",
					"code": "<div class=\"ts [[evenly divided]] menu\">\n    <a class=\"item\">\n        <i class=\"gamepad {{icon}}\"></i>\n        遊戲\n    </a>\n    <a class=\"item\">\n        <i class=\"video camera {{icon}}\"></i>\n        頻道\n    </a>\n    <a class=\"item\">\n        <i class=\"video play {{icon}}\"></i>\n        影片\n    </a>\n</div>\n"
				},
				{
					"title": "附著",
					"description": "選單可以附著在其他元件上。",
					"code": "<div class=\"ts [[top attached]] menu\">\n    <a class=\"item\">資料</a>\n    <a class=\"item\">隱私</a>\n    <a class=\"item\">權限</a>\n</div>\n<div class=\"ts attached {{segment}}\">\n    根據你眼睛所看到的，這是個被附著選單團團包圍的片段。\n</div>\n<div class=\"ts [[attached]] menu\">\n    <a class=\"item\">首頁</a>\n    <a class=\"item\">影片</a>\n</div>\n<div class=\"ts attached {{segment}}\">\n    這個片段⋯⋯十分地難過、悲傷、無奈，覺得被選單霸凌了。\n</div>\n<div class=\"ts [[bottom attached]] menu\">\n    <a class=\"item\">音樂</a>\n    <a class=\"item\">程式</a>\n    <a class=\"item\">運動</a>\n</div>\n"
				},
				{
					"title": "手動均分",
					"description": "你可以自訂選單中應有幾個項目，從 <span class=\"ts horizontal label\">one</span> 到 <span class=\"ts horizontal label\">ten</span>。",
					"code": "<div class=\"ts [[four item]] menu\">\n    <a class=\"item\">鐘錶</a>\n    <a class=\"item\">電子產品</a>\n    <a class=\"item\">家具</a>\n</div>\n"
				},
				{
					"title": "固定",
					"description": "選單能夠固定在頁面的某一邊，這會固定在頁面而不是父容器。",
					"code": "<div class=\"ts [[top fixed]] menu\">\n    <a class=\"header item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>「你相信有另一個世界嗎？」要是我當初沒有以為白音是在開玩笑就好了。警鈴響起，眼前的風景已不再，回過神來只聽見有人喊著我的名字。到底發生了什麼？她帶著我突破一道一道的門。以為終於能夠逃離這個地方，誰知道最後一扇卻是死亡之門。我真的很後悔。</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<div class=\"ts [[bottom fixed]] menu\">\n    <a class=\"header item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n"
				},
				{
					"subtitle": "水平固定",
					"description": "選單除了可以固定在螢幕的上下方外，還可以固定在左右邊。但我們建議你將選單設置為垂直選單才能夠得到最好的固定選單效果。",
					"code": "<div class=\"ts [[left fixed]] vertical menu\">\n    <a class=\"header item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>但客戶端渲染不這麼做，取而代之的是詢問 index.html 來得知如果網址是 /hello/ 應該做什麼動作，這在 Github Pages 和 Surge 上遇到了一些小問題，那就是他們預設不吃這種方式，他們會直接告訴你 404 網頁找不到，因為他們會直接去尋找伺服器內有沒有這個檔案。</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<div class=\"ts [[right fixed]] vertical menu\">\n    <a class=\"header item\">首頁</a>\n    <a class=\"item\">關於</a>\n    <a class=\"item\">文件</a>\n</div>\n"
				},
				{
					"title": "減少框線",
					"description": "選單也可以選擇不要有內部框線。",
					"code": "<div class=\"ts [[borderless]] menu\">\n    <a class=\"item\">亞凡芽</a>\n    <a class=\"item\">卡莉絲</a>\n    <a class=\"item\">夏希</a>\n</div>\n"
				},
				{
					"title": "縮減",
					"description": "選單可以不要有垂直或是水平內距，這很適合當作網格系統以外的排版方式。",
					"code": "<div class=\"ts secondary [[fitted]] menu\">\n    <div class=\"item\">\n        <i class=\"user icon\"></i>\n        Yami Odymel\n    </div>\n    <a class=\"right item\">登出</a>\n</div>\n"
				},
				{
					"title": "抬舉",
					"description": "選單可以看起來像被抬舉一般加重陰影。",
					"code": "<div class=\"ts [[raised]] menu\">\n    <a class=\"item\">檔案</a>\n    <a class=\"item\">編輯</a>\n    <a class=\"item\">尋找</a>\n    <a class=\"item\">檢視</a>\n</div>\n"
				},
				{
					"title": "平面化",
					"description": "選單可以看起來是扁平的。",
					"code": "<div class=\"ts [[flatted]] menu\">\n    <a class=\"item\">執行</a>\n    <a class=\"item\">工具</a>\n    <a class=\"item\">視窗</a>\n</div>\n"
				},
				{
					"title": "水平對齊",
					"description": "你可以改變項目中的水平對齊，可以是置左、置右或者置中。",
					"code": "<div class=\"ts vertical menu\">\n    <a class=\"[[left aligned]] item\">置左對齊</a>\n    <a class=\"[[center aligned]] item\">置中對齊</a>\n    <a class=\"[[right aligned]] item\">置右對齊</a>\n</div>\n"
				},
				{
					"title": "自動層疊",
					"description": "選單可以在行動裝置上自動層疊，而不是繼續保持一排。",
					"code": "<div class=\"ts [[stackable]] menu\">\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n</div>\n"
				},
				{
					"title": "可水平捲動的",
					"description": "當選單項目過多的時候你可以讓選單支援水平捲動，避免項目溢出來。",
					"code": "<div class=\"ts [[horizontally scrollable]] menu\">\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n    <a class=\"item\">項目</a>\n</div>\n"
				},
				{
					"title": "尺寸",
					"description": "選單提供了多種尺寸。",
					"code": "<div class=\"ts [[mini]] menu\">\n    <a class=\"item\">執行</a>\n    <a class=\"item\">工具</a>\n    <a class=\"item\">視窗</a>\n</div>\n<div class=\"ts [[tiny]] menu\">\n    <a class=\"item\">執行</a>\n    <a class=\"item\">工具</a>\n    <a class=\"item\">視窗</a>\n</div>\n<div class=\"ts [[small]] menu\">\n    <a class=\"item\">執行</a>\n    <a class=\"item\">工具</a>\n    <a class=\"item\">視窗</a>\n</div>\n<div class=\"ts [[medium]] menu\">\n    <a class=\"item\">執行</a>\n    <a class=\"item\">工具</a>\n    <a class=\"item\">視窗</a>\n</div>\n<div class=\"ts [[large]] menu\">\n    <a class=\"item\">執行</a>\n    <a class=\"item\">工具</a>\n    <a class=\"item\">視窗</a>\n</div>\n<div class=\"ts [[big]] menu\">\n    <a class=\"item\">執行</a>\n    <a class=\"item\">工具</a>\n    <a class=\"item\">視窗</a>\n</div>\n<div class=\"ts [[huge]] menu\">\n    <a class=\"item\">執行</a>\n    <a class=\"item\">工具</a>\n    <a class=\"item\">視窗</a>\n</div>\n<div class=\"ts [[massive]] menu\">\n    <a class=\"item\">執行</a>\n    <a class=\"item\">工具</a>\n    <a class=\"item\">視窗</a>\n</div>\n"
				}
			]
		}
	]
};

/***/ })

});
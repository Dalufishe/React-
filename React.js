/**
 * ~ React
 * $ 簡介
 * * JavaScript函式庫, 用以建立"使用者介面"(UI)
 * * 不是傳統上 MVC框架, 最多僅能算在 View層
 * * 由 FaceBook, Jordan Walke開發
 * * 開放原始碼的Javascript函式庫
 *
 * $ 特性
 * ? 聲明式編碼: 
 * * 採用聲明式編碼(而非命令式編碼), 提高開發效率
 * ? 整潔, 效率高:
 * * 原生JS操作DOM(DOM API)繁瑣, 效率低
 * * JQuery操作DOM(JQuery API)提供簡潔語法, 但仍效率低
 * * => 瀏覽器會進行大量重繪重排
 * * React使用"虛擬DOM" + Diffing算法, 減少與真實DOM交互
 * * => 大幅提高效率
 * ? 高靈活性:
 * * React能和已知庫和框架很好的配合
 * ? React組件化: 
 * * 原生JS組件化方式難用
 * * 使用組件化, 使組件重複使用
 * ? JSX語法:
 * * Javascript語法的擴展, 方便進行組件化
 * ? 單向響應式的數據流
 * * 不同於傳統數據綁定, 更容易使用
 * ? 使用 React語法進行移動端
 *
 * $ 安裝
 * * 安裝 NodeJS
 * * 建立 React App透過:
 * > npx create-react-app my-app
 * * 開始你的 React之旅
 * 
 * $ Hello World
 * * 引入 React模組, 支援JSX語法 (已經被自動導入)
 * > import React from "react";
 * * 引入 ReactDOM模組, 用於渲染
 * > import ReactDOM from "react-dom";
 * * ReactDOM.render(JSX語法, 元素節點)
 * 
 * $ JSX語法
 * * JSX = JS + XML
 * * JSX會通過Babel編譯器含有JSX的JS檔案(或JSX檔案)轉為純JS檔
 * * 流程: <div>123</div>(JSX) => Babel編譯(並import React(pureJS)) => React.createElement("div", {}, "123")(pureJS);
 * 
 * $ React組件
 * * 組件: 將html, css, js組合成組件(component)
 * * 好處: 復用性高, 頁面結構清晰
 * 
 * ? 類組件(class): 
 * * 導出:
 * > class ComponentName expend React.Component {
 * > render(){ return jsx語法 }
 * > }
 * > export default ComponentName
 * * 導入:
 * > import ComponentName(or Custom Name)
 * > <ComponentName></ComponentName>
 * * 規定:
 * * 1. React組件必須繼承React.Component
 * * 2. React組件必須有render方法回傳JSX表示法
 * * 3. React組件render方法回傳的JSX表示法不允許兄弟節點
 * * 4. React組件導入名稱必須大寫開頭
 * 
 * ? 函式組件(function):
 * * 導出:
 * > function ComponentName () {
 * > return jsx語法
 * > }
 * > export default ComponentName
 * * 導入:
 * > import ComponentName(or Custom Name)
 * > <ComponentName></ComponentName>
 * * 注意:
 * * 類組件預設是有狀態組件
 * * 函式組件預設是無狀態組件(除非用react hooks)
 * * 組件內可嵌套組件
 * 
 * $ JSX語法細節
 * 
 * ? 標籤 <></>
 * * 分為通用標籤 & 自訂義標籤(組件) 
 * * 通用標籤中可加入文本, 以及大括號(js運算語法)
 * * 標籤上可加入屬性
 * 
 * ? js運算 {}
 * * 大括號中可放Jacascript運算式
 * 
 * ? 標籤屬性
 * * 在標籤中可加入屬性(類似 html屬性)
 * * style屬性, ref屬性, 事件屬性等等
 * 
 * ? 組件樣式
 * * 透過標籤屬性加入
 * * style屬性: 物件(透過js運算語法)
 * > style = {{xxx: xxx, yyy: yyy}}
 * * class屬性: 字串
 * > className = "xxx" 
 * * [注]: 可在Javascript文件導入css文件(webpack支持)
 * 
 * ? 事件(類組件)
 * * 透過標籤屬性加入
 * > onXxx = {function}
 * * 函式組件預設不支援狀態, 需使用 react hooks才能設置事件處理器
 * 
 * $ 事件處理
 * * onClick, onMouseover等事件類別 +事件處理器(透過js運算語法)
 * > onClick = {() => {}}
 * * [注]: this指向, 事件處理器中, 使用"普通函式"this指向調用該函式的物件, 必須透過繫結或"箭頭函式"(this指向定義該函式的物件)才能指向類別實體(組件)
 * 
 * $ 事件綁定
 * * React並不會真正的綁定事件到每個具體的DOM元素上, 而是採用事件代理(委託)的模式(原理: 事件冒泡)
 * 
 * $ 事件物件
 * * 即使React採用事件代理模式進行綁定, 但React仍構件了自己的 event物件, 支援所有原生事件方法, 甚至擁有阻止冒泡方法
 */


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
 * $ 事件(類組件)
 * * 透過標籤屬性加入
 * > onXxx = {function}
 * * 函式組件預設不支援狀態, 需使用 react hooks才能設置事件處理器
 * 
 * ? 事件處理
 * * onClick, onMouseover等事件類別 +事件處理器(透過js運算語法)
 * > onClick = {() => {}}
 * * [注]: this指向, 事件處理器中, 使用"普通函式"this指向調用該函式的物件, 必須透過繫結或"箭頭函式"(this指向定義該函式的物件)才能指向類別實體(組件)
 * 
 * ? 事件綁定
 * * React並不會真正的綁定事件到每個具體的DOM元素上, 而是採用事件代理(委託)的模式(原理: 事件冒泡)
 * 
 * ? 事件物件
 * * 即使React採用事件代理模式進行綁定, 但React仍構件了自己的 event物件, 支援所有原生事件方法, 甚至擁有阻止冒泡方法
 * 
 * $ ref屬性
 * * ref表示參考, 透過在標籤上設置 ref屬性:
 * 
 * ? 舊語法
 * > <input ref="xxx"/>
 * * 其他標籤就可以透過 this.refs.xxx 取用該元素
 * * [註]: 可能有潛在風險(重複設定相同名稱的值)
 * 
 * ? 新語法
 * > myRef = React.createRef();
 * > <input ref={myRef}/>
 * * 其他標籤就可以透過 myRef.current 取用該元素
 * 
 * $ key屬性
 * * key屬性作為虛擬DOM中diffing算法的精準判斷關鍵
 * * => 避免重繪重排, 復用, 提高效能
 * * => key的理想值為唯一不變的id
 * * => 若不涉及插入, 中間刪除, 也可設為索引值
 * 
 * $ dangerouslySetInnerHTML屬性
 * * React在預設情況下, 會將標籤中的JS字串轉為純文本(類似textContet)
 * * 使用dangerouslySetInnerHTML屬性可更改此預設值, 將JS字串轉為HTML代碼(類似innerHTML)
 * > dangerouslySetInnerHTML={{__html: 要轉換的JS字串}}
 * * [注]: 很危險! 操作不當會被有心人士跨腳本攻擊!
 * 
 * $ 狀態(State)(類組件)
 * * 因應"聲明式設計"而生
 * * 狀態, 為組件描述某種顯示情況的"數據", 由組件自己透過狀態自動設置和更改顯示情況(也就是說由組件自己去維護), 在不同的狀態會使組件的顯示不同
 * * 不同於 Vue, React的聲明式設計並沒有使用底層變數攔截 => 需手動告知 React渲染時機
 * ? state物件, setState()方法
 * * 使用狀態特性(state)儲存狀態(推薦), 並透過 setState()來設定新的狀態, 並告訴 React狀態改變並該渲染了
 * * [註]: 不建議直接修改state(無法被攔截判斷修改), 必須間接修改使用setState()告知React該渲染了
 * 
 * ? 條件渲染
 * * 不同於透過狀態直接渲染, 當 React透過狀態中某種"條件"去操作虛擬DOM並執行渲染, 稱做條件渲染
 * * 使用 aaa?bbb:ccc 運算子或 and/or 運算子進行操作
 * 
 * ? setState()的怪異之處
 * * setState()用於更新state物件, 以及重新渲染(render)
 * * <注意>
 * * setState()處在同步的JS中, 會非同步更新state物件, 以及重新渲染
 * * 原因: 為了避免阻斷同步程式碼, 以及對狀態更新以及渲染做合併處理
 * * setState()處在非同步的JS中, 會同步執行更新state物件, ...
 * * 原因: 本身不會阻斷, 並不須做合併處理
 * * > setState()接受第二個callback引數, 在狀態和DOM更新完時回調
 * 
 * $ 屬性(Props)
 * * 狀態僅能作為"組件內部"自行管理(外頭訪問不到)
 * * 屬性作為和外部溝通的管道, 由父組件傳入, 透過this.props取得
 * * 達到"組件復用" && "父子通信"的目的
 * 
 * ? 類組件-屬性傳入-接收 this.props
 * * 父組件在組件標籤內傳入屬性
 * * 子組件透過this.props取得
 * 
 * ? 類組件-屬性驗證 static propTypes
 * * 在子組件的靜態屬性 子組件.propTypes 中傳入物件, 並寫入屬性驗證
 * * 子組件.propTypes = {aaa: ()=>{}, bbb: ()=>{}}
 * * 通常搭配 prop-types庫一起使用
 * * 子組件.propTypes = {aaa: propTypes.bool, bbb: propTypes.array}
 * 
 * ? 類組件-默認屬性 static defaultProps
 * * 在子組件的靜態屬性 子組件.defaultProps 中傳入物件, 並寫入默認屬性
 * * 子組件.defaultProps = {aaa: xxx}
 * 
 * ? 函式組件-屬性傳入-接收 props參數
 * * 父組件在組件標籤內傳入屬性
 * * 子組件透過props取得(前提設定函式參數為props(名字可改, props為習慣))
 * 
 * ? 函式組件-屬性驗證 子組件.propTypes
 * * 須注意寫在函式外頭(順序問題)
 * ? 類組件-默認屬性 子組件.defaultProps
 * * 須注意寫在函式外頭(順序問題)
 * ? 屬性傳入: 簡寫
 * * 在屬性值欄位中的物件為可迭代的, 並且會被轉換為屬性
 * 
 * $ 屬性 VS 狀態
 * ? 共同點
 * * 都是JS物件, 都會出發render更新
 * 
 * ? 不同點
 * * 屬性能從父組件獲取, 狀態不能
 * * 屬性可由父組件修改, 狀態不能
 * * 屬性不能在內部修改, 狀態只能在內部修改
 * 
 * $ 狹義的: 受控 & 非受控組件 => 表單的控制
 * ? 受控組件: 
 * * 當某種組件(<input/>等標籤)"僅"能透過"狀態(渲染數據)"去控制, 為受控組件
 * * => 透過加入value屬性在input標籤中, 強制將input標籤轉換為受控組件
 * ? 不受控組件: 
 * * 直接操作(修改)到原生DOM節點, 為非受控組件
 * * => 透過ref, evt.target.value等方式"修改"原生DOM
 * 
 * * 受控組件 > 非受控組件: 統一, 高效, 重複取用
 * 
 * $ 廣義的: 受控 & 非受控組件 => 父子通信(屬性)的延伸
 * ? 受控組件: 
 * * React組件的數據渲染完全被調用者的傳遞的props完全控制, 為受控組件(無狀態組件)
 * ? 非受控組件:
 * * 當組件有內部自己的狀態, 會導致部分情況(陷入死循環)完全無法控制組件, 為非受控組件
 * 
 * * 受控組件 > 非受控組件: 方便控制
 * 
 * $ 父子通信
 * ? 屬性(props)通信: 
 * * 父傳子: 父透過屬性(props)傳遞值給子
 * * 子傳父: 父透過屬性(props)傳遞值給子, 基於"回調"
 * * 可延伸探討受控非受控
 * 
 * ? 參考(ref)通信: (暴力)
 * * 父子通信還能透過參考(ref)操作達成屬性無法達到的效果
 * * [注]: 當使用表單域組件, ref操作組件會比使用props受控組件方便許多
 * 
 * $ 非父子通信
 * ? 狀態提升(中間人模式):
 * * 將多個組件需要共享的狀態提升到最近的祖件(中間人), 再修改狀態分發回去原本的組件
 * 
 * ? 發布訂閱模式:
 * * 屬於原生JS既有的設計模式
 * * 在一個中心物件註冊, 一個發布, 一個訂閱函式, 透過傳入回調達到預期的操作
 * * [注]: Redux程式庫基於訂閱發布模式
 * 
 * ? Context狀態樹傳參
 * * 屬於React提供的方式
 * > let xxx = React.createContext(): 建立一個情境
 * > <xxx.Provider>: 生產者 - 提供value
 * > <xxx.Cunsuber>: 消費者 - 取得value
 * 
 * ? Redux狀態管理
 * 
 * $ React插槽
 * * React中插槽被視作屬性傳入, 可透過props.children取得
 * * 插槽等同屬性放入JSX, 只是透過較直觀的語法表示
 * * 好處: 復用性, 降低父子通信次數, 更直觀
 */
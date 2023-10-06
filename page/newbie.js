try {
 (() => {
  var e = __$$hmAppManager$$__.currentApp;
  var t = e.current,
   {
    px: o
   } = (new DeviceRuntimeCore.WidgetFactory(
   new DeviceRuntimeCore.HmDomApi(e, t)),
   e.app.__globals__);
  try {
   (() => {
    var e = __$$hmAppManager$$__.currentApp,
     t = e.current;
    new DeviceRuntimeCore.WidgetFactory(
    new DeviceRuntimeCore.HmDomApi(e, t),
     "drink");
    DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
    t.module = DeviceRuntimeCore.Page({
     init_view() {
      function isHmTimerDefined() {
        return typeof timer !== 'undefined'
       }
 
       function getGlobal() {
        if (typeof self !== 'undefined') {
         return self
        }
        if (typeof window !== 'undefined') {
         return window
        }
        if (typeof global !== 'undefined') {
         return global
        }
        if (typeof globalThis !== 'undefined') {
         return globalThis
        }
 
        throw new Error('unable to locate global object')
       }
 
       const globalNS = getGlobal()
 
       if (typeof setTimeout === 'undefined' && isHmTimerDefined()) {
        globalNS.clearTimeout = function clearTimeout(timerRef) {
         timerRef && timer.stopTimer(timerRef)
        }
 
        globalNS.setTimeout = function setTimeout(func, ns) {
         const timer1 = timer.createTimer(
         ns || 1,
         Number.MAX_SAFE_INTEGER,
 
         function() {
          globalNS.clearTimeout(timer1)
          func && func()
         }, {})
 
         return timer1
        }
 
        globalNS.clearImmediate = function clearImmediate(timerRef) {
         timerRef && timer.stopTimer(timerRef)
        }
 
        globalNS.setImmediate = function setImmediate(func) {
         const timer1 = timer.createTimer(
         1,
         Number.MAX_SAFE_INTEGER,
 
         function() {
          globalNS.clearImmediate(timer1)
          func && func()
         }, {})
 
         return timer1
        }
 
        globalNS.clearInterval = function clearInterval(timerRef) {
         timerRef && timer.stopTimer(timerRef)
        }
 
        globalNS.setInterval = function setInterval(func, ms) {
         const timer1 = timer.createTimer(
         1,
         ms,
 
         function() {
          func && func()
         }, {})
 
         return timer1
        }
       }
    hmUI.createWidget(hmUI.widget.IMG, {
        x: 0,
        y: 25,
        src: 'damu.png'
       });
       const text = hmUI.createWidget(hmUI.widget.TEXT, {
        x: 0,
        y: 260,
        w: 192,
        h: 680,
        color: 0xffffff,
        text_size: 20,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_H,
        text_style: hmUI.text_style.WRAP,
        text: ''
       });
       let i = 0, timer = 0
       str_1 = '你好，这里！很高兴见到你。欢迎来到宝可梦的世界!我的名字叫大木博士。    '
       str_2 = '人们亲切地称呼我为宝可梦专家。这个世界居住着一种名为宝可梦的生物。对一些人来说，宝可梦是宠物。    '
       str_3 = '还有一些人则利用它们进行战斗。至于我自己。。把学习宝可梦作为一种职业。    '
       str_4 = `你应该叫${hmSetting.getUserData().nickName}吧`
       str_5 = '我的孙子叫小茂，从小你们就一直不对付。    '
       str_5 = `${hmSetting.getUserData().nickName}!您自己的宝可梦传奇即将展开！    `
       str_6 = '一个充满梦想和冒险的世界等待着你！我们走吧！    '
       fvv = str_1

       function typing() {
        if (i <= fvv.length) {
         text.setProperty(hmUI.prop.MORE, {
          text: fvv.slice(0, i++) + '|'
         })
         /* let mySmoothTimer = createSmoothTimer(
          1000, // delay: 延迟执行的时间（单位：毫秒）
          2000, // circle: 循环周期（单位：毫秒）
          (option) => console.log(option, "Hello World"), // func: 回调函数
          {"message": "Time's up"}, // option: 作为回调函数的参数
          SmoothTimer.modes.DYNAMIC_SMOOTH // mode: 稳定计时器的模式，DYNAMIC_SMOOTH 或 MAX_LIMIT
        ); */
        
         timer = globalNS.setTimeout(() => {
          typing()
         }, 100);
        } else if (fvv !== str_6) {
         if (fvv == str_1) fvv = str_2
         else if (fvv == str_2) fvv = str_3
         else if (fvv == str_3) fvv = str_4
         else if (fvv == str_4) fvv = str_5
         else if (fvv == str_5) fvv = str_6


         i = 0
         typing();
        } else {
         text.setProperty(hmUI.prop.MORE, {
          text: fvv
         })
         globalNS.clearTimeout(timer)
         const cc = hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 113,
          y: 56,
          text: '开\n始\n吧',
          w: 73,
          h: 179,
          radius: 10,
          text_size: 40,
          normal_color: 0x101010,
          press_color: 0x262626,
          click_func: () => {
          hmApp.goBack()
          }
         });
        }
       }
       typing();
     },
     onInit() {
      console.log("index page.js on init invoke"), this.init_view();
     },
     onReady() {
      console.log("index page.js on ready invoke");
     },
     onShow() {
      console.log("index page.js on show invoke");
     },
     onHide() {
      console.log("index page.js on hide invoke");
     },
     onDestory() {
      console.log("index page.js on destory invoke");
     }
    });
   })();
  } catch (e) {
   console.log(e);
  }
 })();
} catch (e) {
 console.log(e);
}
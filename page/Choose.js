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
      hmUI.setLayerScrolling(false);
      //禁用页面上下滑动...看狀況吧

      function str2ab(str) {
       const buf = new ArrayBuffer(str.length * 2)
       const bufView = new Uint16Array(buf)
       for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i)
       }
       return buf
      }
      class LocalStorage {
       constructor(fileName = '') {
        this.fileName = fileName
        this.contentObj = {}
       }
       set(obj) {
        const file = hmFS.open(this.fileName, hmFS.O_RDWR | hmFS.O_TRUNC)
        const contentBuffer = str2ab(JSON.stringify(obj))
        hmFS.write(file, contentBuffer, 0, contentBuffer.byteLength)
        hmFS.close(file)
       }
       get() {
        const[fsStat, err] = hmFS.stat(this.fileName)
        if (err === 0) {
         const {
          size
         } = fsStat
         const fileContentUnit = new Uint16Array(new ArrayBuffer(size))
         const file = hmFS.open(this.fileName, hmFS.O_RDONLY | hmFS.O_CREAT)
         hmFS.seek(file, 0, hmFS.SEEK_SET)
         hmFS.read(file, fileContentUnit.buffer, 0, size)
         hmFS.close(file)
         try {
          const val = String.fromCharCode.apply(null, fileContentUnit)
          this.contentObj = val ? JSON.parse(val) : {}
         } catch (error) {
          this.contentObj = {}
         }
        }
        return this.contentObj
       }
      }
      const localStorage = new LocalStorage('Pokemon.json')
      hmUI.setLayerScrolling(false);
      var data = localStorage.get()
      if (Object.keys(data)
       .length == 0) {
       data = {}
      }

       function save(text, parse) {
        try {
         data[text] = parse
         localStorage.set(data)
         return 0
        } catch (error) {
         return 1
        }
       }

       function load(parse) {
        try {
         return data[parse]
        } catch (error) {
         return undefined
        }
       }

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
      var shopItem = load("wp");
      if (load(shopItem) == null || load(shopItem) == undefined) {
       save(shopItem, 0)
      }
      var money = load("money");
      var [num, num5, num4, num3] = [0, 0, 0, 'test']
      num5 = (num5 == null || num5 == undefined) ? 0 : num5;
      num4 = 100 //现时促销
       hmUI.createWidget(hmUI.widget.TEXT, {
        x: 74,
        y: 12,
        w: 44,
        h: 24,
        color: 0xffffff,
        text_size: 20,
        text: '商店'
       });
       hmUI.createWidget(hmUI.widget.TEXT, {
        x: 78,
        y: 41,
        w: 37,
        h: 24,
        color: 0xffffff,
        text_size: 20,
        text: num3
       });
       var text = hmUI.createWidget(hmUI.widget.TEXT, {
        x: 21,
        y: 152,
        w: 164,
        h: 93,
        color: 0xffffff,
        text_size: 60,
        text: num + '份'
       })
       hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 74,
        y: 48,
        text: '+',
        w: 48,
        h: 87,
        text_size: 80,
        click_func: () => {
         num += 1;
         var money2 = num4 * num;
         save('money2', money2)
         text.setProperty(hmUI.prop.MORE, {
          text: num + '份'
         })
        }
       });
       hmUI.createWidget(hmUI.widget.TEXT, {
        x: 26,
        y: 245,
        w: 192,
        h: 66,
        color: 0xffffff,
        text_size: 40,
        text: num4 + '元/个'
       });
       hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 74,
        y: 285,
        text: '+',
        w: 48,
        h: 87,
        text_size: 80,
        click_func: () => {
         num += 1;
         var money2 = num4 * num;
         save('money2', money2)
         text.setProperty(hmUI.prop.MORE, {
          text: num + '份',
         })
        }
       });
       hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 74,
        y: 285,
        text: '-',
        w: 48,
        h: 87,
        text_size: 80,
        click_func: () => {
         var money2 = num4 * num;
         save('money2', money2)
         if (num == 0) {
          text.setProperty(hmUI.prop.MORE, {
           text: num + '份',
          })
         } else if (num >= 0) text.setProperty(hmUI.prop.MORE, {
          text: num + '份',
         })
         num -= 1;
        }
       })
       hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 48,
        y: 285,
        text: '取消',
        w: 100,
        h: 45,
        text_size: 20,
        normal_color: 0x101010,
        press_color: 0x262626,
        click_func: () => {
         hmApp.goBack()
        }
       })
       hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 48,
        y: 400,
        text: '确定',
        w: 100,
        h: 45,
        text_size: 20,
        normal_color: 0x101010,
        press_color: 0x262626,
        click_func: () => {
         if (money < num4 * num) {hmUI.showToast({
          text: '没有这个财力惹'
         });
         }else {
          hmUI.showToast({
           text: '成功购买!'
          });
          save(shopItem, (load(shopItem) + num))
          save('money', money)
         };
        }
       })
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
try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp;
    var t = e.current,
      { px: o } =
        (new DeviceRuntimeCore.WidgetFactory(
          new DeviceRuntimeCore.HmDomApi(e, t)
        ),
        e.app.__globals__);
try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp,
    t = e.current;
  new DeviceRuntimeCore.WidgetFactory(
    new DeviceRuntimeCore.HmDomApi(e, t),
    "drink"
  );
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
            const [fsStat, err] = hmFS.stat(this.fileName)
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
                      data = { 
                            }
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
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 74,
          y: 12,
          w: 44,
          h: 24,
          color: 0xffffff,
          text_size: 20,
          text: '背包'
        });
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
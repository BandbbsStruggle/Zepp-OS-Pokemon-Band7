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
      hmUI.setLayerScrolling(true);
      //禁用页面上下滑动...看狀況吧
      /*
      这个项目基本没有注释，有时候我自己都看不懂
      有注释的基本都是GPT写的捏(这段不是)
      根据helloworld框架改的
      ZeppPlayer可以用，但是有一堆bug
      电脑太丐了用不了官方模拟器，想要支持一下的可以到afdian.net/a/netlify捐助一下
      喜欢可以看看本人的其他小程序捏（目前自主开发的只有Q盒，参与的倒是有很多）
      开发者Struggle，去关注一下罢awa
      即時更新:https://discord.gg/fSvsUt93am
      完全开源，想要加入开发的私信一下 Q:2089827698 邮箱:struggleapp@163.com
      宝可梦 && Q盒 && 电池管家 官方Q群:
      -Struggle 9.10
      */

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

      function str2ab(str) {
        const buf = new ArrayBuffer(str.length * 2) // 2 bytes for each char
        const bufView = new Uint16Array(buf)
        for (let i = 0, strLen = str.length; i < strLen; i++) {
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
      var data = localStorage.get()
      if (Object.keys(data)
       .length == 0) {
       var data = {
        tag: '防伪标志'
       }
       hmApp.gotoPage({
        url: 'page/newbie',
        param: '...'
       })
       localStorage.set(data)
      } else {
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
       class GL {
        /**
         * 构造函数
         * @param {object} opt
         * @param {number} opt.min 最小整数值
         * @param {number} opt.max 最大整数值
         * @param {Map} opt.fenpei 自定义概率
         */
        constructor({
         min, max, fenpei = new Map()
        }) {
         this.min = min;
         this.max = max;
         this.fenpei = fenpei;
        }

        /**
         * 可分配百分比
         */
        get baifenbi() {
         return (1 - this.peizhi) / (this.max - this.min - this.fenpei.size);
        }

        /**
         * 匹配百分比
         */
        get peizhi() {
         let result = 0;
         for (let i of this.fenpei.values()) {
          if (0 < i && i < 1) result += i;
         }
         return result;
        }


        /**
         * 随机数
         * @returns {number} [min,max)
         */
        random() {
         let t = 0, r = Math.random();
         for (let i = this.min; i < this.max; i++) {
          this.fenpei.has(i) ? t += this.fenpei.get(i) : t += this.baifenbi;
          if (t > r) return i;
         }
         return null;
        }
       }
       GL;

       var Pokemon = load('Pokemon')
       var num6

       let gl = new GL({
        min: 1,
        max: 8,
        fenpei: new Map([
         [1, 0.12],
         [2, 0.29],
         [3, 0.29],
         [4, 0.29],
         [5, 0.01]
        ])
       });
       let gl_2 = new GL({
        min: 1,
        max: 8,
        fenpei: new Map([
         [1, 0.10],
        ])
       });
       let randomNum2 = gl_2.random();
       let allPokemon = [
        {
          "name": "妙蛙种子",
          "type": ["种","草"],
          "level": 5,
          "moves": ["撞击", "叫声"],
          "image": "Pokemon/0.png",
          "hp": 45,
          "attack": 49,
          "defense": 49,
          "SpecialAttack": 65,
          "SpecialDefense": 65,
          "velocity": 45,
          "from": "初始宝可梦",
          "color": "0x65FC32",
          "evolutions": ["妙蛙草","妙蛙花"],
        },
        {
          "name": "妙蛙草",
          "type": ["种","草"],
          "level": 15,
          "moves": ["撞击", "叫声", "寄生种子","飞叶快刀"],
          "image": "Pokemon/1.png",
          "hp": 60,
          "attack": 62,
          "defense": 63,
          "SpecialAttack": 80,
          "SpecialDefense": 80,
          "velocity": 60,
          "from": "初始宝可梦",
          "color": "0xF3D409",
          "evolutions": ["妙蛙花"],
        },
        {
          "name": "妙蛙花",
          "type": ["种","草"],
          "level": 28,
          "moves": ["撞击", "叫声", "寄生种子","飞叶快刀"],
          "image": "Pokemon/2.png",
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "SpecialAttack": 100,
          "SpecialDefense": 100,
          "velocity": 80,
          "from": "初始宝可梦",
          "color": "0xF3D409",
          "evolutions": [],
        },
        {
          "name": "小火龙",
        "type": ["蜥","火"],
        "level": 5,
        "moves": ["叫声", "抓"],
        "image": "Pokemon/3.png",
        "hp": 39,
        "attack": 52,
        "defense": 43,
        "SpecialAttack": 60,
        "SpecialDefense": 50,
        "velocity": 65,
        "from": "初始宝可梦",
        "color": "0xFC4632",
        "evolutions": ["火恐龙","喷火龙"],
        },
        {
          "name": "火恐龙",
        "type": ["火","火"],
        "level": 15,
        "moves": ["火花", "抓","龙息","喷射火焰"],
        "image": "Pokemon/4.png",
        "hp": 58,
        "attack": 64,
        "defense": 58,
        "SpecialAttack": 80,
        "SpecialDefense": 65,
        "velocity": 80,
        "from": "初始宝可梦",
        "color": "0xFC4632",
        "evolutions": ["喷火龙"],
        },
        {
          "name": "喷火龙",
        "type": ["火","火"],
        "level": 30,
        "moves": ["劈开", "火焰旋涡","龙息","喷射火焰"],
        "image": "Pokemon/5.png",
        "hp": 58,
        "attack": 64,
        "defense": 58,
        "SpecialAttack": 80,
        "SpecialDefense": 65,
        "velocity": 80,
        "from": "初始宝可梦",
        "color": "0xFC4632",
        "evolutions": []
        },
        {
          "name": "杰尼龟",
        "type": ["龟","水"],
        "level": 5,
        "moves": ["撞击", "摇尾巴"],
        "image": "Pokemon/6.png",
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "SpecialAttack": 50,
        "SpecialDefense": 64,
        "velocity": 43,
        "from": "初始宝可梦",
        "color": "0x32D0FC",
        "evolutions": ["卡咪龟","水箭龟"]
        },
        {
          "name": "卡咪龟",
        "type": ["火","火"],
        "level": 15,
        "moves": ["撞击", "水枪", "泡沫"],
        "image": "Pokemon/7.png",
        "hp": 58,
        "attack": 64,
        "defense": 58,
        "SpecialAttack": 80,
        "SpecialDefense": 65,
        "velocity": 80,
        "from": "初始宝可梦",
        "color": "0xFC4632",
        "evolutions": ["水箭龟"]
        },
        {
          "name": "水箭龟",
        "type": ["火","火"],
        "level": 30,
        "moves": ["劈开", "火焰旋涡","龙息","喷射火焰"],
        "image": "Pokemon/8.png",
        "hp": 58,
        "attack": 64,
        "defense": 58,
        "SpecialAttack": 80,
        "SpecialDefense": 65,
        "velocity": 80,
        "from": "初始宝可梦",
        "color": "0xFC4632",
        "evolutions": []
        },
        {
          "name": "喷火龙",
        "type": ["火","火"],
        "level": 30,
        "moves": ["劈开", "火焰旋涡","龙息","喷射火焰"],
        "image": "Pokemon/6.png",
        "hp": 58,
        "attack": 64,
        "defense": 58,
        "SpecialAttack": 80,
        "SpecialDefense": 65,
        "velocity": 80,
        "from": "初始宝可梦",
        "color": "0xFC4632",
        "evolutions": []
        },
      ]
      function findPokemonByName(pokemonName) {
        for (var i = 0; i < allPokemon.length; i++) {
          var pokemon = allPokemon[i];
          if (pokemon.name === pokemonName) {
            return pokemon
          }
        }
        return null; 
      }
function findEvolution(pokemonName) {
  for (var i = 0; i < allPokemon.length; i++) {
    var pokemon = allPokemon[i]
    if (pokemon.name === pokemonName && pokemon.evolutions.length > 0) {
      var evolutionName = pokemon.evolutions[0]
      var evolution = findPokemonByName(evolutionName)
      return evolution
    }
  }
  return null;
}
/* var pokemonName = "Pikachu";
var evolution = findEvolution(pokemonName);
if (evolution) {
  console.log("宝可梦 " + pokemonName + " 进化为 " + evolution.name);
} else {
  console.log("宝可梦 " + pokemonName + " 没有进化形态");
} */
/*         class Skill {
          constructor(name, type, power, accuracy, description) {
            this.name = name; // 技能名称
            this.type = type; // 技能类型
            this.power = power; // 技能威力
            this.accuracy = accuracy; // 技能命中率
            this.description = description; // 技能描述
          }
        }

// 创建技能实例
var skills = [
  new Skill("撞击", "火属性", 75, 90, "用火焰包围拳头的技能。"),
  new Skill("抓", "冰属性", 95, 70, "向对手发出凛冽的光线，有很高的冰冻几率。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
  new Skill("雷电攻击", "电属性", 65, 100, "向对手发射带有电流的攻击。"),
];

// 根据技能属性搜索技能
function searchSkillByType(type) {
  var result = [];
  for (var i = 0; i < skills.length; i++) {
    if (skills[i].type === type) {
      result.push(skills[i]);
    }
  }
  return result;
}
// console.log(searchSkillByType("火属性")); */

       var City = load('City')
       if (City === undefined || City === null) {
        City = '真新镇'
        save('City', City)
       }

       var Pokemon = load('Pokemon')
       var money = load('money')
       if (money == undefined || money == null) {
        money = 10000
        save('money', 10000)
       }
       /* if (Pokemon == null || Pokemon == undefined) {
        let randomNum = gl.random();
        if (randomNum == 1) {
         Pokemon = [
          ['皮丘', '鼠', '电', 45, 30, 35, 20, 20, 45, '真新镇', 6, 5, 'piqiu.png', 0xF3D409]
         ];
        } //0是名称，1是种类，2是属性，3是HP，4是攻击，5是防御，6是特攻，7是特防，8是速度，9是地点(已经弃用)，10是剩余精灵球，11是等级，12是图片，13是两个圆的颜色
        else if (randomNum == 2) {
         Pokemon = [
          ['小火龙', '蜥', '火', 39, 52, 43, 60, 50, 65, '真新镇', 6, 5, 'xiaohuolong.png', 0xFC4632],
          //['喷火龙x', '龙', '火', 110, Math.floor(110 / 1.4), Math.floor(110 / 1.2), Math.floor(110 / 1.1), Math.floor(110 / 1.01), Math.floor(110 / 0.8), '真新镇', 6, 5, 'penhuolongx.png', 0xFC4632]
         ];
        } else if (randomNum == 3) {
         Pokemon = [
          ['杰尼龟', '龟', '水', 44, 48, 65, 50, 64, 43, '真新镇', 6, 5, 'jienigui.png', 0x32D0FC]
         ];
        } else if (randomNum == 4) {
         Pokemon = [
          ['妙蛙种子', '种', '草', 45, 49, 49, 65, 65, 45, '真新镇', 6, 5, 'miaowazhongzi.png', 0x65FC32]
         ];
        } else {
         Pokemon = [//你挺幸運的
          ['喷火龙X', '龙', '火', 110, Math.floor(110 / 1.4), Math.floor(110 / 1.2), Math.floor(110 / 1.1), Math.floor(110 / 1.01), Math.floor(110 / 0.8), '真新镇', 6, 5, 'penhuolongx.png', 0xFC4632]
         ];
        }
        /* else {
         Pokemon = [
          ['喷火龙x', '龙', '火', 110, Math.floor(110 / 1.4), Math.floor(110 / 1.2), Math.floor(110 / 1.1), Math.floor(110 / 1.01), Math.floor(110 / 0.8), '真新镇', 6, 5, 'penhuolongx.png', 0xFC4632]
         ];
        }


       } else {
        Pokemon = load('Pokemon')
       }
       num6 = 0
       save('City', City)
       save('Pokemon', Pokemon)
       var mav = 0
       旧版方案
*/
if (Pokemon == null || Pokemon == undefined) {
  let randomNum = gl.random();
  if (randomNum == 1) {
    Pokemon = [
      {
        "name": "皮丘",
        "type": ["鼠","电"],
        "level": 5,
        "moves": ["电光一闪", "撒娇", "摇尾巴"],
        "image": "Pokemon/43.png",
        "hp": 45,
        "attack": 30,
        "defense": 35,
        "SpecialAttack": 20,
        "SpecialDefense": 20,
        "velocity": 45,
        "from": "初始宝可梦",
        "color": "0xF3D409",
        "evolutions": ["皮卡丘","雷丘"],
      }
    ]
  }
  else if (randomNum == 2) {
    Pokemon = [
      {
        "name": "小火龙",
        "type": ["蜥","火"],
        "level": 5,
        "moves": ["叫声", "抓"],
        "image": "Pokemon/3.png",
        "hp": 39,
        "attack": 52,
        "defense": 43,
        "SpecialAttack": 60,
        "SpecialDefense": 50,
        "velocity": 65,
        "from": "初始宝可梦",
        "color": "0xFC4632",
        "evolutions": ["火恐龙","喷火龙"],
      }
    ]
  } else if (randomNum == 3) {
    Pokemon = [
      {
        "name": "杰尼龟",
        "type": ["龟","水"],
        "level": 5,
        "moves": ["撞击", "咬住", "摇尾巴"],
        "image": "Pokemon/6.png",
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "SpecialAttack":50,
        "SpecialDefense": 64,
        "velocity": 43,
        "from": "初始宝可梦",
        "color": "0x32D0FC",
        "evolutions": ["卡咪龟","水箭龟"],
      }
    ]
  } else if (randomNum == 4) {
    Pokemon = [
      {
        "name": "妙蛙种子",
        "type": ["种","草"],
        "level": 5,
        "moves": ["撞击", "叫声"],
        "image": "Pokemon/0.png",
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "SpecialAttack": 65,
        "SpecialDefense": 65,
        "velocity": 45,
        "from": "初始宝可梦",
        "color": "0x65FC32",
        "evolutions": ["妙蛙草","妙蛙花"],
      }
    ]
  } else if (randomNum == 5) {
    Pokemon = [
      {
        "name": "喷火龙X",
        "type": ["龙","火"],
        "level": 5,
        "moves": ["翅膀攻击", "双倍奉还", "火焰漩涡","空气之刃"],
        "image": "Pokemon/43.png",
        "hp": 78,
        "attack": 130,
        "defense": 111,
        "SpecialAttack": 130,
        "SpecialDefense": 85,
        "velocity": 100,
        "from": "初始宝可梦",
        "color": "0xFC4632"
      }
    ]
  } else{
    Pokemon = [
      {
        "name": "喷火龙Y",
        "type": ["飞","火"],
        "level": 5,
        "moves": ["翅膀攻击", "双倍奉还", "火焰漩涡","空气之刃"],
        "image": "Pokemon/43.png",
        "hp": 78,
        "attack": 104,
        "defense": 78,
        "SpecialAttack": 159,
        "SpecialDefense": 115,
        "velocity": 100,
        "from": "初始宝可梦",
        "color": "0xFC4632"
      }
    ] 
  }
 } else {
  Pokemon = load('Pokemon');
 }

 num6 = 0
 save('City', City)
 save('Pokemon', Pokemon)
 var mav = 0

       const group = hmUI.createWidget(hmUI.widget.GROUP, {
        x: 0,
        y: 0,
        w: 192,
        h: 479
       })
       try {
        const text = group.createWidget(hmUI.widget.TEXT, {
         x: 0,
         y: 32,
         w: 192,
         h: 41,
         color: 0xffffff,
         text_size: 18,
         align_h: hmUI.align.CENTER_H,
         align_v: hmUI.align.CENTER_H,
         text: hmSetting.getUserData().nickName + '的' + Pokemon[mav].name
        });
        const FILL_RECT = group.createWidget(hmUI.widget.FILL_RECT, {
         x: 10,
         y: 73,
         w: 48,
         h: 48,
         radius: 100,
         color: Pokemon[mav].color
        });
        const text1 = group.createWidget(hmUI.widget.TEXT, {
         x: 24,
         y: 82,
         w: 48,
         h: 48,
         color: 0x000000,
         text_size: 20,
         text: Pokemon[mav].type[0]
        });
        const FILL_RECT2 = group.createWidget(hmUI.widget.FILL_RECT, {
         x: 133,
         y: 73,
         w: 48,
         h: 48,
         radius: 100,
         color: Pokemon[mav].color
        });
        const text2 = group.createWidget(hmUI.widget.TEXT, {
         x: 148,
         y: 82,
         w: 48,
         h: 48,
         color: 0x000000,
         text_size: 20,
         text: Pokemon[mav].type[1]
        });
        const text3 = group.createWidget(hmUI.widget.TEXT, {
         x: 75,
         y: 128,
         w: 41,
         h: 27,
         color: 0xffffff,
         text_size: 20,
         text: 'Lv.' + Pokemon[mav].level
        });
        group.createWidget(hmUI.widget.TEXT, {
         x: 0,
         y: 157,
         w: 192,
         h: 31,
         color: 0xffffff,
         text_size: 20,
         align_h: hmUI.align.CENTER_H,
         align_v: hmUI.align.CENTER_H,
         text: '目前所处：' + City
        });
        const text5 = group.createWidget(hmUI.widget.TEXT, {
         x: 16,
         y: 194,
         w: 110 - 16,
         h: 28,
         color: 0xffffff,
         text_size: 20,
         text: 'HP:' + Pokemon[mav].hp
        });
        const text6 = group.createWidget(hmUI.widget.TEXT, {
         x: 110,
         y: 194,
         w: 192 - 110,
         h: 28,
         color: 0xffffff,
         text_size: 20,
         text: '攻击:' + Pokemon[mav].attack
        });
        const text7 = group.createWidget(hmUI.widget.TEXT, {
         x: 16,
         y: 228,
         w: 110 - 16,
         h: 28,
         color: 0xffffff,
         text_size: 20,
         text: '防御:' + Pokemon[mav].defense
        });
        const text8 = group.createWidget(hmUI.widget.TEXT, {
         x: 110,
         y: 228,
         w: 192 - 110,
         h: 28,
         color: 0xffffff,
         text_size: 20,
         text: '特攻:' + Pokemon[mav].SpecialAttack
        });
        const text9 = group.createWidget(hmUI.widget.TEXT, {
         x: 16,
         y: 261,
         w: 110 - 16,
         h: 28,
         color: 0xffffff,
         text_size: 20,
         text: '特防:' + Pokemon[mav].SpecialDefense
        });
        const text10 = group.createWidget(hmUI.widget.TEXT, {
         x: 110,
         y: 261,
         w: 192 - 110,
         h: 28,
         color: 0xffffff,
         text_size: 20,
         text: '速度:' + Pokemon[mav].velocity
        });

        const img = group.createWidget(hmUI.widget.IMG, {
         x: 66,
         y: 47,
         src: Pokemon[mav].image
        });
        img.addEventListener(hmUI.event.CLICK_DOWN, function(info) {
         if(Pokemon.length>mav){mav++;}else{mav=0}
         text.setProperty(hmUI.prop.MORE, {
          text: (hmSetting.getUserData()
           .nickName) + '的' + Pokemon[mav].name
         });
         text2.setProperty(hmUI.prop.MORE, {
          text: Pokemon[mav].type[1]
         });
         text1.setProperty(hmUI.prop.MORE, {
          text: Pokemon[mav].type[0]
         });
         text3.setProperty(hmUI.prop.MORE, {
          text: 'Lv.' + Pokemon[mav].level
         });
         text5.setProperty(hmUI.prop.MORE, {
          text: 'HP:' + Pokemon[mav].hp
         });
         text6.setProperty(hmUI.prop.MORE, {
          text: '攻击:' + Pokemon[mav].attack
         });
         text7.setProperty(hmUI.prop.MORE, {
          text: '防御:' + Pokemon[mav].defense
         });
         text8.setProperty(hmUI.prop.MORE, {
          text: '特攻:' + Pokemon[mav].SpecialAttack
         });
         text9.setProperty(hmUI.prop.MORE, {
          text: '特防:' + Pokemon[mav].SpecialDefense
         });
         text10.setProperty(hmUI.prop.MORE, {
          text: '速度:' + Pokemon[mav].velocity
         });
         img.setProperty(hmUI.prop.MORE, {
          src: Pokemon[mav].image
         });
         FILL_RECT.setProperty(hmUI.prop.MORE, {
          color: Pokemon[mav].color
         });
         FILL_RECT2.setProperty(hmUI.prop.MORE, {
          color: Pokemon[mav].color
         });
        })
        group.createWidget(hmUI.widget.TEXT, {
         x: 42,
         y: 295,
         w: 150,
         h: 29,
         color: 0xffffff,
         text_size: 20,
         text: '金钱:' + load('money')
        });
        group.createWidget(hmUI.widget.BUTTON, {
         x: 46,
         y: 330,
         text: '商店',
         w: 100,
         h: 45,
         radius: 36,
         text_size: 20,
         normal_color: 0x101010,
         press_color: 0x262626,
         click_func: () => {
          hmApp.gotoPage({
           url: 'page/Store',
           param: '...'
          })
         }
        });
        group.createWidget(hmUI.widget.BUTTON, {
         x: 46,
         y: 380,
         text: '背包',
         w: 100,
         h: 45,
         radius: 36,
         text_size: 20,
         normal_color: 0x101010,
         press_color: 0x262626,
         click_func: () => {
          hmApp.gotoPage({
           url: 'page/Bag',
           param: '...'
          })
         }
        });
        group.createWidget(hmUI.widget.BUTTON, {
         x: 46,
         y: 430,
         text: '探险',
         w: 100,
         h: 45,
         radius: 36,
         text_size: 20,
         normal_color: 0x101010,
         press_color: 0x262626,
         click_func: () => {
          hmApp.gotoPage({
           url: 'page/Where_city',
           param: '...'
          })
         }
        });
        hmUI.setLayerScrolling(false);
       } catch (error) {
        group.createWidget(hmUI.widget.TEXT, {
         x: 0,
         y: 100,
         w: 192,
         h: 1000,
         color: 0xffffff,
         text_size: 25,
         text_style: hmUI.text_style.WRAP,
         text: '错误啦！\n反馈码09999\n' + Pokemon + '\n错误原因\n' + error
        });
       }
      }

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
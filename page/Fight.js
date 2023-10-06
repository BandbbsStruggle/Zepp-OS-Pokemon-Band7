// import { Fx } from "../utils/fx";
try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp;
    var t = e.current;
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
             function str2ab(str) {
              const buf = new ArrayBuffer(str.length * 2);
              const bufView = new Uint16Array(buf);
              for (var i = 0, strLen = str.length; i < strLen; i++) {
               bufView[i] = str.charCodeAt(i);
              }
              return buf;
             }
             class LocalStorage {
              constructor(fileName = "") {
               this.fileName = fileName;
               this.contentObj = {};
              }
              set(obj) {
               const file = hmFS.open(this.fileName, hmFS.O_RDWR | hmFS.O_TRUNC);
               const contentBuffer = str2ab(JSON.stringify(obj));
               hmFS.write(file, contentBuffer, 0, contentBuffer.byteLength);
               hmFS.close(file);
              }
              get() {
               const[fsStat, err] = hmFS.stat(this.fileName);
               if (err === 0) {
                const {
                 size
                } = fsStat;
                const fileContentUnit = new Uint16Array(new ArrayBuffer(size));
                const file = hmFS.open(this.fileName, hmFS.O_RDONLY | hmFS.O_CREAT);
                hmFS.seek(file, 0, hmFS.SEEK_SET);
                hmFS.read(file, fileContentUnit.buffer, 0, size);
                hmFS.close(file);
                try {
                 const val = String.fromCharCode.apply(null, fileContentUnit);
                 this.contentObj = val ? JSON.parse(val) : {}
                } catch (error) {
                 this.contentObj = {}
                }
               }
               return this.contentObj
              }
             }
        
             let localStorage = new LocalStorage("Pokemon.json");
             var data = localStorage.get();
             if (Object.keys(data)
              .length == 0) {
              data = {
              }
              localStorage.set(data);
             } else {
              function save(text, parse) {
               try {
                data[text] = parse;
                localStorage.set(data);
                return 0;
               } catch (error) {
                return 1;
               }
              }
        
              function load(parse) {
               try {
                return data[parse];
               } catch (error) {
                return undefined;
               }
              }
            }
            function randomNum(minNum,maxNum){ 
              switch(arguments.length){ 
                  case 1: 
                      return parseInt(Math.random()*minNum+1,10); 
                  break; 
                  case 2: 
                      return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
                  break; 
                      default: 
                          return 0; 
                      break; 
              } 
            }
            const typeChart = {
              "一般": { weakTo: [], resistantTo: ["幽灵"], immuneTo: ["幽灵"] },
              "火": { weakTo: ["水", "岩石", "龙"], resistantTo: ["火", "草", "冰", "虫", "钢", "妖精"], immuneTo: [] },
              "水": { weakTo: ["电", "草"], resistantTo: ["火", "水", "冰", "钢"], immuneTo: [] },
              "电": { weakTo: ["地面"], resistantTo: ["电", "飞行", "钢"], immuneTo: [] },
              "草": { weakTo: ["火", "冰", "毒", "飞行", "虫"], resistantTo: ["水", "电", "草", "地面"], immuneTo: [] },
              "冰": { weakTo: ["火", "格斗", "岩石", "钢"], resistantTo: ["冰"], immuneTo: [] },
              "格斗": { weakTo: ["飞行", "超能力", "妖精"], resistantTo: ["虫", "岩石", "恶"], immuneTo: [] },
              "毒": { weakTo: ["地面", "超能力"], resistantTo: ["草", "格斗", "毒", "虫", "妖精"], immuneTo: [] },
              "地面": { weakTo: ["水", "草", "冰"], resistantTo: ["毒", "岩石"], immuneTo: ["电"] },
              "飞行": { weakTo: ["电", "冰", "岩石"], resistantTo: ["草", "格斗", "虫"], immuneTo: ["地面"] },
              "超能力": { weakTo: ["虫", "幽灵", "恶"], resistantTo: ["格斗", "超能力"], immuneTo: [] },
              "虫": { weakTo: ["火", "飞行", "岩石"], resistantTo: ["草", "格斗", "地面"], immuneTo: [] },
              "岩石": { weakTo: ["水", "草", "格斗", "地面", "钢"], resistantTo: ["普通", "火", "毒", "飞行"], immuneTo: [] },
              "幽灵": { weakTo: ["幽灵", "恶"], resistantTo: ["毒", "虫"], immuneTo: ["普通", "格斗"] },
              "龙": { weakTo: ["冰", "龙", "妖精"], resistantTo: ["火", "水", "草", "电"], immuneTo: [] },
              "恶": { weakTo: ["格斗", "虫", "妖精"], resistantTo: ["幽灵", "恶"], immuneTo: ["超能力"] },
              "钢": { weakTo: ["火", "格斗", "地面"], resistantTo: ["普通", "草", "冰", "飞行", "超能力", "虫", "岩石", "龙", "钢", "妖精"], immuneTo: ["毒"] },
              "妖精": { weakTo: ["毒", "钢"], resistantTo: ["格斗", "虫", "恶"], immuneTo: ["龙"] }
          };
            // 判断宝可梦双方是否克制
            function determineTypeMatchup(pokemon1Type, pokemon2Type) {
              const pokemon1WeakTo = typeChart[pokemon1Type].weakTo;
              const pokemon1ResistantTo = typeChart[pokemon1Type].resistantTo;
              const pokemon1ImmuneTo = typeChart[pokemon1Type].immuneTo;
            
              if (pokemon1WeakTo.includes(pokemon2Type)) {
                result = `命中要害`;
              } else if (pokemon1ResistantTo.includes(pokemon2Type)) {
               result = `收效甚微`;
              } else if (pokemon1ImmuneTo.includes(pokemon2Type)) {
                result = `${pokemon1Type} 对 ${pokemon2Type} 免疫`;
              } else {
                result = "宝可梦类型之间没有克制关系";
              }
            }
            var random = randomNum(0,122);
            var enemy = allPokemon[random]
            // 示例用法
            /* const pokemon1Type = "fire";
            const pokemon2Type = "grass"; */
             determineTypeMatchup(pokemon1Type, pokemon2Type);
            console.log(matchupResult); 
    var result,harm,defense;
// 伤害 = [（攻击方等级 × 2 ÷ 5 + 2）×技能威力×攻击方攻击力÷防御方防御力÷51+2] ×修正
// 这里修正包括会心、本系、克制、天气等一系列固有数值和一个1.85-1之间的一个随机数值。
//也就是会心*克制/本系 * 1.85 - 1.0
function fight (grade,fight,defense,skill){
  determineTypeMatchup(enemy.moves[1], gamer.moves[1]);
const correct = Math.random() * (1.85 - 1.0) + 1.0
    harm = ((grade * 2 / 5 + 2) * skill * fight / defense  / 51 + 2) * correct;
    return harm
};
// grade我方等级，fight我方攻击力，defense敌方防御力
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
  "type": ["龟","水"],
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
  "color": "0x32D0FC",
  "evolutions": ["水箭龟"]
  },
  {
    "name": "水箭龟",
  "type": ["甲","水"],
  "level": 30,
  "moves": ["火箭头锤", "水之波动", "缩入壳中","	加农光炮"],
  "image": "Pokemon/8.png",
  "hp": 79,
  "attack": 83,
  "defense": 100,
  "SpecialAttack": 85,
  "SpecialDefense": 105,
  "velocity": 78,
  "from": "初始宝可梦",
  "color": "0x32D0FC",
  "evolutions": []
  },
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
  },
  {
    "name": "皮卡丘",
    "type": ["鼠","电"],
    "level": 15,
    "moves": ["电光一闪", "铁尾", "十万伏特"],
    "image": "Pokemon/9.png",
    "hp": 35,
    "attack": 55,
    "defense": 40,
    "SpecialAttack": 50,
    "SpecialDefense": 50,
    "velocity": 90,
    "from": "捕捉",
    "color": "0xF3D409",
    "evolutions": ["雷丘"],
  },
  {
    "name": "雷丘",
    "type": ["鼠","电"],
    "level": 30,
    "moves": ["雷电拳", "影子分身", "十万伏特", "高速移动"],
    "image": "Pokemon/10.png",
    "hp": 60,
    "attack": 90,
    "defense": 55,
    "SpecialAttack": 90,
    "SpecialDefense": 80,
    "velocity": 110,
    "from": "捕捉",
    "color": "0xF3D409",
    "evolutions": [],
  },
  {
    "name": "尼多兰",
    "type": ["毒","毒"],
    "level": 5,
    "moves": ["抓", "毒针", "叫声"],
    "image": "Pokemon/11.png",
    "hp": 55,
    "attack": 47,
    "defense": 52,
    "SpecialAttack": 40,
    "SpecialDefense": 40,
    "velocity": 41,
    "from": "捕捉",
    "color": "0x800080",
    "evolutions": [],
  },
  {
    "name": "尼多兰",
    "type": ["毒","毒"],
    "level": 5,
    "moves": ["抓", "毒针", "叫声"],
    "image": "Pokemon/11.png",
    "hp": 55,
    "attack": 47,
    "defense": 52,
    "SpecialAttack": 40,
    "SpecialDefense": 40,
    "velocity": 41,
    "from": "捕捉",
    "color": "0x800080",
    "evolutions": [],
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
const skills = [
  { name: "拍击", type: "一般", category: "物理", power: 40, accuracy: 100, pp: 35},
  { name: "空手劈", type: "格斗", category: "物理", power: 50, accuracy: 100, pp: 25},
  { name: "连环巴掌", type: "一般", category: "物理", power: 15, accuracy: 85, pp: 10},
  { name: "连续拳", type: "一般", category: "物理", power: 18, accuracy: 85, pp: 15},
  { name: "百万吨重拳", type: "一般", category: "物理", power: 80, accuracy: 85, pp: 20},
  { name: "聚宝功", type: "一般", category: "物理", power: 40, accuracy: 100, pp: 20},
  { name: "火焰拳", type: "火", category: "物理", power: 75, accuracy: 100, pp: 15},
  { name: "冰冻拳", type: "冰", category: "物理", power: 75, accuracy: 100, pp: 15},
  { name: "雷电拳", type: "电", category: "物理", power: 75, accuracy: 100, pp: 15},
  { name: "抓", type: "一般", category: "物理", power: 40, accuracy: 100, pp: 35},
  { name: "夹住", type: "一般", category: "物理", power: 40, accuracy: 100, pp: 35},
  { name: "极落钳", type: "一般", category: "物理", power: "变化", accuracy: "变化", pp: 5},
  { name: "旋风刀", type: "一般", category: "特殊", power: 80, accuracy: 100, pp: 10},
  { name: "剑舞", type: "一般", category: "变化", power: 0, accuracy: 0, pp: 20},
  { name: "居合劈", type: "一般", category: "物理", power: 50, accuracy: 95, pp: 30},
  { name: "起风", type: "飞行", category: "特殊", power: 40, accuracy: 100, pp: 35},
  { name: "翅膀攻击", type: "飞行", category: "物理", power: 60, accuracy: 100, pp: 35},
  { name: "吹飞", type: "一般", category: "变化", power: 0, accuracy: 100, pp: 20},
  { name: "飞翔", type: "飞行", category: "物理", power: 90, accuracy: 95, pp: 15},
  { name: "绷紧", type: "一般", category: "物理", power: 15, accuracy: 85, pp: 20},
  { name: "藤鞭", type: "草", category: "物理", power: 45, accuracy: 100, pp: 25},
  { name: "踩踏", type: "一般", category: "物理", power: 65, accuracy: 100, pp: 20},
  { name: "二连踢", type: "格斗", category: "物理", power: 30, accuracy: 100, pp: 30},
  { name: "百万吨重踢", type: "一般", category: "物理", power: 120, accuracy: 75, pp: 5},
  { name: "飞踢", type: "格斗", category: "物理", power: 100, accuracy: 90, pp: 10},
  { name: "回旋踢", type: "格斗", category: "物理", power: 60, accuracy: 85, pp: 15},
  { name: "泼沙", type: "地面", category: "变化", power: 0, accuracy: 100, pp: 15},
  { name: "头锤", type: "一般", category: "物理", power: 70, accuracy: 100, pp: 15},
  { name: "角撞", type: "一般", category: "物理", power: 65, accuracy: 100, pp: 25},
  { name: "乱击", type: "一般", category: "物理", power: 65, accuracy: 85, pp: 20},
  { name: "角钻", type: "一般", category: "物理", power: 1000000000000000000000000, accuracy: 5, pp: 5},
  { name: "撞击", type: "一般", category: "物理", power: 40, accuracy: 100, pp: 35},
  { name: "泰山压顶", type: "一般", category: "物理", power: 85, accuracy: 100, pp: 15},
  { name: "紧束", type: "一般", category: "物理", power: 15, accuracy: 90, pp: 20},
  { name: "猛撞", type: "一般", category: "物理", power: 90, accuracy: 85, pp: 20},
  { name: "大闹一番", type: "一般", category: "物理", power: 120, accuracy: 100, pp: 10},
  { name: "舍身冲撞", type: "一般", category: "物理", power: 120, accuracy: 100, pp: 15},
  { name: "摇尾巴", type: "一般", category: "变化", power: 0, accuracy: 100, pp: 30},
  { name: "毒针", type: "毒", category: "物理", power: 15, accuracy: 100, pp: 35},
  { name: "双针", type: "虫", category: "物理", power: 25, accuracy: 100, pp: 20},
  { name: "飞弹针", type: "虫", category: "物理", power: 25, accuracy: 95, pp: 20},
  { name: "瞪眼", type: "一般", category: "变化", power: 0, accuracy: 100, pp: 30},
  { name: "咬住", type: "恶", category: "物理", power: 60, accuracy: 100, pp: 25},
  { name: "叫声", type: "一般", category: "变化", power: 0, accuracy: 100, pp: 40},
  { name: "吼叫", type: "一般", category: "变化", power: 0, accuracy: 0, pp: 20},
  { name: "唱歌", type: "一般", category: "变化", power: 0, accuracy: 55, pp: 15},
  { name: "摇尾巴", type: "一般", category: "变化", power: 0, accuracy: 100, pp: 30},
  { name: "毒针", type: "毒", category: "物理", power: 15, accuracy: 100, pp: 35},
  { name: "双针", type: "虫", category: "物理", power: 25, accuracy: 100, pp: 20},
  { name: "	飞弹针", type: "虫", category: "物理", power: 25, accuracy: 95, pp: 20},
];

// 根据技能名称查询技能信息
function getSkillByName(name) {
  return skills.find(skill => skill.name === name);
}


// defense是防御方防御力
// 创建一个对象来存储各种类型的宝可梦克制关系
hmUI.createWidget(hmUI.widget.FILL_RECT,{
  x: 13,
  y: 72,
  w: 195,
  h: 48,
  radius: 15,
  color: 0x262626
});
hmUI.createWidget(hmUI.widget.FILL_RECT, {
  x: 0,
  y: 332,
  w: 192,
  h: 98,
  radius: 30,
  color: 0x101010
});
const enemy_png_ui = hmUI.createWidget(hmUI.widget.IMG, {
  x: 108,
  y: 94,
  src: enemy.image
});
const enemy_name_ui = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 22,
  y: 89,
  w: 55,
  h: 16,
  color: 0xffffff,
  text_size: 12,
  text: enemy.name
});
const enemy_level_ui = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 77,
  y: 90,
  w: 24,
  h: 13,
  color: 0xffffff,
  text_size: 12,
  text: `Lv${enemy.level}`
});
const enemy_hp_text = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 22,
  y: 108,
  w: 20,
  h: 13,
  color: 0xffffff,
  text_size: 12,
  text: `HP${enemy.hp}`
});
const enemy_hp_stroke = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
  x: 47,
  y: 112,
  w: 54,
  h: 10,
  radius: 20,
  line_width: 2,
  color: 0x262626
})
const enemy_hp_rect = hmUI.createWidget(hmUI.widget.FILL_RECT, {
  x: 47,
  y: 112,
  w: enemy``.hp * 54 / 100,
  h: 10,
  radius: 20,
  color: 0x262626
});
var mav
if (typeof(mav) !== Number) mav = 0
var gamer = load("Pokemon")[mav]
const goback = hmUI.createWidget(hmUI.widget.FILL_RECT,{
  x: 89,
  y: 268,
  w: 95,
  h: 48,
  radius: 15,
  color: 0x262626
});
const gamer_png_ui = hmUI.createWidget(hmUI.widget.IMG, {
  x: 19,
  y: 228,
  src: gamer.image
});
const gamer_name_ui = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 96,
  y: 274,
  w: 55,
  h: 16,
  color: 0xffffff,
  text_size: 12,
  text: gamer.name
});
const gamer_level_ui = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 154,
  y: 272,
  w: 24,
  h: 13,
  color: 0xffffff,
  text_size: 12,
  text: `Lv${gamer.level}`
});
const gamer_hp_text = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 96,
  y: 292,
  w: 20,
  h: 13,
  color: 0xffffff,
  text_size: 12,
  text: `HP${gamer.hp}`
});
const gamer_hp_stroke = hmUI.createWidget(hmUI.widget.STROKE_RECT, {
  x: 124,
  y: 296,
  w: 54,
  h: 10,
  radius: 20,
  line_width: 2,
  color: 0x262626
})
const gamer_hp_rect = hmUI.createWidget(hmUI.widget.FILL_RECT, {
  x: 124,
  y: 296,
  w: gamer.hp * 54 / 100,
  h: 10,
  radius: 20,
  color: 0x262626
});
const group = hmUI.createWidget(hmUI.widget.GROUP, {
  x: 0,
  y: 0,
  w: 192,
  h: 480
});
/* const group_one = hmUI.createWidget(hmUI.widget.GROUP, {
  x: 0,
  y: 0,
  w: 192,
  h: 480
}); */
const fight_ui = group.createWidget(hmUI.widget.TEXT, {
  x: 30,
  y: 348,
  w: 42,
  h: 29,
  color: 0xffffff,
  text_size: 20,
  text: "战斗"
});
const bag_ui = group.createWidget(hmUI.widget.TEXT, {
  x: 118,
  y: 348.,
  w: 42,
  h: 29,
  color: 0xffffff,
  text_size: 20,
  text: "背包"
});
const pokemon_ui = group.createWidget(hmUI.widget.TEXT, {
  x: 31,
  y: 386,
  w: 60,
  h: 29,
  color: 0xffffff,
  text_size: 20,
  text: "宝可梦"
});
const paolu_ui = group.createWidget(hmUI.widget.TEXT, {
  x: 118,
  y: 386,
  w: 42,
  h: 29,
  color: 0xffffff,
  text_size: 20,
  text: "逃跑"
});
function text(one1, two2, three3,four4) {
  fight_ui.setProperty(hmUI.prop.MORE, {text: one1})
  pokemon_ui.setProperty(hmUI.prop.MORE, {text: two2})
  paolu_ui.setProperty(hmUI.prop.MORE, {text: three3})
  bag_ui.setProperty(hmUI.prop.MORE, {text: four4})
}
fight_ui.addEventListener(hmUI.event.CLICK_UP, function (info) {
  if (fight_ui.getProperty(hmUI.prop.TEXT) != "攻击"){
    enemy.hp -= fight(load("Pokemon").level,load("Pokemon").fight,enemy.defense,getSkillByName(gamer.moves[0]))
    enemy_hp_rect.setProperty(hmUI.prop.MORE,{
      x: 47,
      y: 112,
      w: enemy.hp * 54 / 100,
      h: 10,
      radius: 20,
      color: 0x262626
    })

  }
  else for(var i = 0, len = gamer.moves.length; i < len; i++) text(gamer.moves[i])
})
bag_ui.addEventListener(hmUI.event.CLICK_UP, function (info) {
  if (bag_ui.getProperty(hmUI.prop.TEXT) != "攻击"){
    enemy.hp -= fight(load("Pokemon").level,load("Pokemon").fight,enemy.defense,getSkillByName(gamer.moves[1]))
    enemy_hp_rect.setProperty(hmUI.prop.MORE,{
      x: 47,
      y: 112,
      w: enemy.hp * 54 / 100,
      h: 10,
      radius: 20,
      color: 0x262626
    })
  }
  else {
    hmUI.showToast({
      text: "没做好"
    })
  }
})
pokemon_ui.addEventListener(hmUI.event.CLICK_UP, function (info) {
  if (pokemon_ui.getProperty(hmUI.prop.TEXT) != "宝可梦"){
    enemy.hp -= fight(load("Pokemon").level,load("Pokemon").fight,enemy.defense,getSkillByName(gamer.moves[3]))
    enemy_hp_rect.setProperty(hmUI.prop.MORE,{
      x: 47,
      y: 112,
      w: enemy.hp * 54 / 100,
      h: 10,
      radius: 20,
      color: 0x262626
    })
  }
  else {
    hmUI.showToast({
      text: "没做好"
    })
  }
})
paolu_ui.addEventListener(hmUI.event.CLICK_UP, function (info) {
  if (paolu_ui.getProperty(hmUI.prop.TEXT) != "逃跑"){
    enemy.hp -= fight(load("Pokemon").level,load("Pokemon").fight,enemy.defense,getSkillByName(gamer.moves[4]))
    enemy_hp_rect.setProperty(hmUI.prop.MORE,{
      x: 47,
      y: 112,
      w: enemy.hp * 54 / 100,
      h: 10,
      radius: 20,
      color: 0x262626
    })
  }
  else {
    var paolujilv = randomNum(0,1)
    let c
    if (paolujilv == 0){
      c = '逃跑成功'
    }
    else{
      c = '逃跑失败'
    }
    hmUI.showToast({
      text: c
    })
  }
})
function enemy_fight () {

    determineTypeMatchup(gamer.moves[1], enemy.moves[1]);
  const correct = Math.random() * (1.85 - 1.0) + 1.0
      harm = ((grade * 2 / 5 + 2) * skill * fight / defense  / 51 + 2) * correct;
      return harm
}
goback.addEventListener(hmUI.event.CLICK_UP, function (info) {
  /* fight_ui.setProperty(hmUI.prop.VISIBLE, true)
  pokemon_ui.setProperty(hmUI.prop.VISIBLE, true)
  paolu_ui.setProperty(hmUI.prop.VISIBLE, true)
  bag_ui.setProperty(hmUI.prop.VISIBLE, true) */
})
},
onInit() {
  console.log("Fight.js on init invoke"), this.init_view();
},
onReady() {
  console.log("Fight.js on ready invoke");
},
onShow() {
  console.log("Fight.js on show invoke");
},
onHide() {
  console.log("Fight.js on hide invoke");
},
onDestory() {
  console.log("Fight.js on destory invoke");
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
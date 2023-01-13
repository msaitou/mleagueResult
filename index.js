// mleague
// result
// stats
// https://taraeyes.com/m-league/20210518-2
const KYOKU_LIST = [
  { no: "t-1-0", name: "東1局0本場" },
  { no: "t-1-1", name: "東1局1本場" },
  { no: "t-1-2", name: "東1局2本場" },
  { no: "t-1-3", name: "東1局3本場" },
  { no: "t-1-4", name: "東1局4本場" },
  { no: "t-1-5", name: "東1局5本場" },
  { no: "t-1-6", name: "東1局6本場" },
  { no: "t-1-7", name: "東1局7本場" },
  { no: "t-1-8", name: "東1局8本場" },
  { no: "t-1-9", name: "東1局9本場" },
  { no: "t-1-10", name: "東1局10本場" },
  { no: "t-2-0", name: "東2局0本場" },
  { no: "t-2-1", name: "東2局1本場" },
  { no: "t-2-2", name: "東2局2本場" },
  { no: "t-2-3", name: "東2局3本場" },
  { no: "t-2-4", name: "東2局4本場" },
  { no: "t-2-5", name: "東2局5本場" },
  { no: "t-2-6", name: "東2局6本場" },
  { no: "t-2-7", name: "東2局7本場" },
  { no: "t-2-8", name: "東2局8本場" },
  { no: "t-2-9", name: "東2局9本場" },
  { no: "t-2-10", name: "東2局10本場" },
  { no: "t-3-0", name: "東3局0本場" },
  { no: "t-3-1", name: "東3局1本場" },
  { no: "t-3-2", name: "東3局2本場" },
  { no: "t-3-3", name: "東3局3本場" },
  { no: "t-3-4", name: "東3局4本場" },
  { no: "t-3-5", name: "東3局5本場" },
  { no: "t-3-6", name: "東3局6本場" },
  { no: "t-3-7", name: "東3局7本場" },
  { no: "t-3-8", name: "東3局8本場" },
  { no: "t-3-9", name: "東3局9本場" },
  { no: "t-3-10", name: "東3局10本場" },
  { no: "t-4-0", name: "東4局0本場" },
  { no: "t-4-1", name: "東4局1本場" },
  { no: "t-4-2", name: "東4局2本場" },
  { no: "t-4-3", name: "東4局3本場" },
  { no: "t-4-4", name: "東4局4本場" },
  { no: "t-4-5", name: "東4局5本場" },
  { no: "t-4-6", name: "東4局6本場" },
  { no: "t-4-7", name: "東4局7本場" },
  { no: "t-4-8", name: "東4局8本場" },
  { no: "t-4-9", name: "東4局9本場" },
  { no: "t-4-10", name: "東4局10本場" },
  { no: "n-1-0", name: "南1局0本場" },
  { no: "n-1-1", name: "南1局1本場" },
  { no: "n-1-2", name: "南1局2本場" },
  { no: "n-1-3", name: "南1局3本場" },
  { no: "n-1-4", name: "南1局4本場" },
  { no: "n-1-5", name: "南1局5本場" },
  { no: "n-1-6", name: "南1局6本場" },
  { no: "n-1-7", name: "南1局7本場" },
  { no: "n-1-8", name: "南1局8本場" },
  { no: "n-1-9", name: "南1局9本場" },
  { no: "n-1-10", name: "南1局10本場" },
  { no: "n-2-0", name: "南2局0本場" },
  { no: "n-2-1", name: "南2局1本場" },
  { no: "n-2-2", name: "南2局2本場" },
  { no: "n-2-3", name: "南2局3本場" },
  { no: "n-2-4", name: "南2局4本場" },
  { no: "n-2-5", name: "南2局5本場" },
  { no: "n-2-6", name: "南2局6本場" },
  { no: "n-2-7", name: "南2局7本場" },
  { no: "n-2-8", name: "南2局8本場" },
  { no: "n-2-9", name: "南2局9本場" },
  { no: "n-2-10", name: "南2局10本場" },
  { no: "n-3-0", name: "南3局0本場" },
  { no: "n-3-1", name: "南3局1本場" },
  { no: "n-3-2", name: "南3局2本場" },
  { no: "n-3-3", name: "南3局3本場" },
  { no: "n-3-4", name: "南3局4本場" },
  { no: "n-3-5", name: "南3局5本場" },
  { no: "n-3-6", name: "南3局6本場" },
  { no: "n-3-7", name: "南3局7本場" },
  { no: "n-3-8", name: "南3局8本場" },
  { no: "n-3-9", name: "南3局9本場" },
  { no: "n-3-10", name: "南3局10本場" },
  { no: "n-4-0", name: "南4局0本場" },
  { no: "n-4-1", name: "南4局1本場" },
  { no: "n-4-2", name: "南4局2本場" },
  { no: "n-4-3", name: "南4局3本場" },
  { no: "n-4-4", name: "南4局4本場" },
  { no: "n-4-5", name: "南4局5本場" },
  { no: "n-4-6", name: "南4局6本場" },
  { no: "n-4-7", name: "南4局7本場" },
  { no: "n-4-8", name: "南4局8本場" },
  { no: "n-4-9", name: "南4局9本場" },
  { no: "n-4-10", name: "南4局10本場" },
];
const MEMBER_LIST = [
  {
    no: "M-001",
    full2: "鈴木たろう",
    last: "鈴木",
    first: "たろう",
    full: "鈴木 たろう",
    teamId: "T-6",
    teamName: "赤坂ドリブンズ",
  },
  {
    no: "M-002",
    full2: "堀慎吾",
    last: "堀",
    first: "慎吾",
    full: "堀 慎吾",
    teamId: "T-3",
    teamName: "KADOKAWAサクラナイツ",
  },
  {
    no: "M-003",
    full2: "石橋伸洋",
    last: "石橋",
    first: "伸洋",
    full: "石橋 伸洋",
    teamId: "T-5",
    teamName: "U-NEXT Pirates",
  },
  {
    no: "M-004",
    full2: "日向藍子",
    last: "日向",
    first: "藍子",
    full: "日向 藍子",
    teamId: "T-2",
    teamName: "渋谷ABEMAS",
  },
  {
    no: "M-005",
    full2: "岡田紗佳",
    last: "岡田",
    first: "紗佳",
    full: "岡田 紗佳",
    teamId: "T-3",
    teamName: "KADOKAWAサクラナイツ",
  },
  {
    no: "M-006",
    full2: "魚谷侑未",
    last: "魚谷",
    first: "侑未",
    full: "魚谷 侑未",
    teamId: "T-7",
    teamName: "セガサミーフェニックス",
  },
  {
    no: "M-007",
    full2: "村上淳",
    last: "村上",
    first: "淳",
    full: "村上 淳",
    teamId: "T-6",
    teamName: "赤坂ドリブンズ",
  },
  {
    no: "M-008",
    full2: "小林剛",
    last: "小林",
    first: "剛",
    full: "小林 剛",
    teamId: "T-5",
    teamName: "U-NEXT Pirates",
  },
  {
    no: "M-009",
    full2: "伊達朱里紗",
    last: "伊達",
    first: "朱里紗",
    full: "伊達 朱里紗",
    teamId: "T-1",
    teamName: "KONAMI 麻雀格闘倶楽部",
  },
  {
    no: "M-010",
    full2: "近藤誠一",
    last: "近藤",
    first: "誠一",
    full: "近藤 誠一",
    teamId: "T-7",
    teamName: "セガサミーフェニックス",
  },
  {
    no: "M-011",
    full2: "勝又健志",
    last: "勝又",
    first: "健志",
    full: "勝又 健志",
    teamId: "T-8",
    teamName: "EX風林火山",
  },
  {
    no: "M-012",
    full2: "高宮まり",
    last: "高宮",
    first: "まり",
    full: "高宮 まり",
    teamId: "T-1",
    teamName: "KONAMI 麻雀格闘倶楽部",
  },
  {
    no: "M-013",
    full2: "園田賢",
    last: "園田",
    first: "賢",
    full: "園田 賢",
    teamId: "T-6",
    teamName: "赤坂ドリブンズ",
  },
  {
    no: "M-014",
    full2: "松ヶ瀬隆弥",
    last: "松ヶ瀬",
    first: "隆弥",
    full: "松ヶ瀬 隆弥",
    teamId: "T-8",
    teamName: "EX風林火山",
  },
  {
    no: "M-015",
    full2: "二階堂亜樹",
    last: "二階堂",
    first: "亜樹",
    full: "二階堂 亜樹",
    teamId: "T-8",
    teamName: "EX風林火山",
  },
  {
    no: "M-016",
    full2: "黒沢咲",
    last: "黒沢",
    first: "咲",
    full: "黒沢 咲",
    teamId: "T-4",
    teamName: "TEAM RAIDEN / 雷電",
  },
  {
    no: "M-017",
    full2: "和久津晶",
    last: "和久津",
    first: "晶",
    full: "和久津 晶",
    teamId: "T-7",
    teamName: "セガサミーフェニックス",
  },
  {
    no: "M-018",
    full2: "東城りお",
    last: "東城",
    first: "りお",
    full: "東城 りお",
    teamId: "T-7",
    teamName: "セガサミーフェニックス",
  },
  {
    no: "M-019",
    full2: "滝沢和典",
    last: "滝沢",
    first: "和典",
    full: "滝沢 和典",
    teamId: "T-1",
    teamName: "KONAMI 麻雀格闘倶楽部",
  },
  { no: "M-020", full2: "白鳥翔", last: "白鳥", first: "翔", full: "白鳥 翔", teamId: "T-2", teamName: "渋谷ABEMAS" },
  {
    no: "M-021",
    full2: "丸山奏子",
    last: "丸山",
    first: "奏子",
    full: "丸山 奏子",
    teamId: "T-6",
    teamName: "赤坂ドリブンズ",
  },
  {
    no: "M-022",
    full2: "二階堂瑠美",
    last: "二階堂",
    first: "瑠美",
    full: "二階堂 瑠美",
    teamId: "T-8",
    teamName: "EX風林火山",
  },
  {
    no: "M-023",
    full2: "内川幸太郎",
    last: "内川",
    first: "幸太郎",
    full: "内川 幸太郎",
    teamId: "T-3",
    teamName: "KADOKAWAサクラナイツ",
  },
  {
    no: "M-024",
    full2: "藤崎智",
    last: "藤崎",
    first: "智",
    full: "藤崎 智",
    teamId: "T-1",
    teamName: "KONAMI 麻雀格闘倶楽部",
  },
  {
    no: "M-025",
    full2: "松本吉弘",
    last: "松本",
    first: "吉弘",
    full: "松本 吉弘",
    teamId: "T-2",
    teamName: "渋谷ABEMAS",
  },
  {
    no: "M-026",
    full2: "朝倉康心",
    last: "朝倉",
    first: "康心",
    full: "朝倉 康心",
    teamId: "T-5",
    teamName: "U-NEXT Pirates",
  },
  {
    no: "M-027",
    full2: "萩原聖人",
    last: "萩原",
    first: "聖人",
    full: "萩原 聖人",
    teamId: "T-4",
    teamName: "TEAM RAIDEN / 雷電",
  },
  {
    no: "M-028",
    full2: "瑞原明奈",
    last: "瑞原",
    first: "明奈",
    full: "瑞原 明奈",
    teamId: "T-5",
    teamName: "U-NEXT Pirates",
  },
  {
    no: "M-029",
    full2: "茅森早香",
    last: "茅森",
    first: "早香",
    full: "茅森 早香",
    teamId: "T-7",
    teamName: "セガサミーフェニックス",
  },
  {
    no: "M-030",
    full2: "瀬戸熊直樹",
    last: "瀬戸熊",
    first: "直樹",
    full: "瀬戸熊 直樹",
    teamId: "T-4",
    teamName: "TEAM RAIDEN / 雷電",
  },
  {
    no: "M-031",
    full2: "前原雄大",
    last: "前原",
    first: "雄大",
    full: "前原 雄大",
    teamId: "T-1",
    teamName: "KONAMI 麻雀格闘倶楽部",
  },
  {
    no: "M-032",
    full2: "沢崎誠",
    last: "沢崎",
    first: "誠",
    full: "沢崎 誠",
    teamId: "T-3",
    teamName: "KADOKAWAサクラナイツ",
  },
  {
    no: "M-033",
    full2: "佐々木寿人",
    last: "佐々木",
    first: "寿人",
    full: "佐々木 寿人",
    teamId: "T-1",
    teamName: "KONAMI 麻雀格闘倶楽部",
  },
  {
    no: "M-034",
    full2: "多井隆晴",
    last: "多井",
    first: "隆晴",
    full: "多井 隆晴",
    teamId: "T-2",
    teamName: "渋谷ABEMAS",
  },
  {
    no: "M-035",
    full2: "中林圭",
    last: "中林",
    first: "圭",
    full: "中林 圭",
    teamId: "T-5",
    teamName: "U-NEXT Pirates",
  },
  {
    no: "M-036",
    full2: "渋川難波",
    last: "渋川",
    first: "難波",
    full: "渋川 難波",
    teamId: "T-3",
    teamName: "KADOKAWAサクラナイツ",
  },
  {
    no: "M-037",
    full2: "鈴木優",
    last: "鈴木",
    first: "優",
    full: "鈴木 優",
    teamId: "T-5",
    teamName: "U-NEXT Pirates",
  },
  {
    no: "M-038",
    full2: "本田朋広",
    last: "本田",
    first: "朋広",
    full: "本田 朋広",
    teamId: "T-4",
    teamName: "TEAM RAIDEN / 雷電",
  },
];
var statsTemp = {
  試合No: "",
  日にち: "",
  選手No: "",
  TeamID: "",
  選手名: "",
  局No: "",
  局: "",
  結果: "",
  和了点: "",
  供託: "",
  積み棒: "",
  聴牌料: "",
  局収支: "",
  立直: "",
  副露: "",
  持ち点: "",
  和了: "",
  役: "",
  打点: "",
};
var resultTemp = {
  試合No: "",
  日にち: "",
  シーズン: "",
  TeamID: "",
  登板選手: "",
  選手名: "",
  ポイント: "",
  保有点: "",
  着順: "",
};
const logger = require("./initter.js").log();
global.log = logger;
logger.info("start!");
logger.debug(process.argv);
const db = require("./initter.js").db;
const conf = require("config");
async function start() {
  return new Promise(async (resolve, reject) => {
    logger.info(33);
    let Web = new WebCls();
    await Web.main();
    resolve(true);
  })
    .then((res) => {
      logger.info("res", res);
    })
    .catch((e) => {
      logger.error(e);
    })
    .finally(() => {
      logger.info("tyokuzen");
      process.exit();
    });
}

class WebCls {
  logger;
  constructor() {
    this.logger = global.log;
  }
  async main() {
    this.logger.info("こっちに来たね class版");
    const ana = new Analyzer();
    let driver;
    // 日程を回す
    for (let day of conf.days) {
      this.logger.info("rec", day);
      let battleNo = day.indexOf("0") === 0 ? conf.year[1] + day : conf.year[0] + day;
      for (let i = 1; i < 3; i++) {
        driver = await ana.exec(`${battleNo}-${i}`);
      }
      break; // test
    }
    await driver.quit();
  }
}
const { BaseWebDriverWrapper } = require("./base-webdriver-wrapper");

class Analyzer extends BaseWebDriverWrapper {
  baseUrl = "https://taraeyes.com/m-league/";
  constructor() {
    super();
    this.logger.info(`constructor`);
  }
  async exec(battle) {
    this.logger.info("きた？");
    try {
      if (!this.getDriver()) {
        this.setDriver(await this.webDriver());
      }
      let member = [],
        memberKeyList = [],
        kyokuStats = [],
        results = [];
      if (false) {
        await this.driver.get(`${this.baseUrl}${battle}`); // このページを解析
        let se = ["div.entry-content strong"];
        // 必要な情報を取り合えず全部取得
        if (await this.isExistEle(se[0], true, 3000)) {
          let els = await this.getEles(se[0], 3000);
          for (let i = 0; i < els.length; i++) {
            let text = await els[i].getText();
            text = text.trim();
            let regex = "[東南](\\d)局";
            let matches = text.match(regex);
            // logger.info(`${matches[1]}は、`);
            if (text.indexOf("vs") > -1) {
              // vs 4人を決める
              let tmpMens = MEMBER_LIST.filter((m) => text.indexOf(m.full2) > -1);
              tmpMens.forEach((t) => {
                memberKeyList.push(t.last);
                memberKeyList.push(t.first);
              });
              member = member.concat(tmpMens);
            } else if (matches && matches.length > 1) {
              // 東、南?局　が先頭の行から次に出てくる東までを判断
              // その1局の情報として解析
              let recs = [text];
              for (let j = 1; j < 4; j++) {
                let text2 = await els[i + j].getText();
                text2 = text2.trim();
                regex = "[東南](\\d)局";
                matches = text2.match(regex);
                if ((matches && matches.length > 1) || text2.indexOf("結果") > -1) {
                  // この直前までを1つの局として扱う
                  i += j - 1;
                  break;
                } else {
                  regex = `^(${memberKeyList.join("|")})`;
                  matches = text2.match(regex);
                  if (matches && matches.length) {
                    // 最初の文字がメンバーの場合追加
                    recs.push(text2);
                  } else recs[0] += text2; // 改行されてるので結合
                }
              }
              kyokuStats.push(recs);
              // 繰り返す　次の行が　結果　になるまで
            } else if (text.indexOf("結果") > -1) {
              // 結果が着たら、2行単位で順位を解析
              let resUnit = {};
              for (let j = 1; j < 9; j++) {
                let text2 = await els[i + j].getText();
                text2 = text2.trim();
                let regex1 = "^(\\d). ";
                let regex2 = "^(-?\\d+)点";
                let matches1 = text2.match(regex1);
                let matches2 = text2.match(regex2);
                if (matches1 && matches1.length) {
                  let m = memberKeyList.filter((m) => text2.indexOf(m) > -1)[0];
                  let mm = MEMBER_LIST.filter((m1) => m1.last === m || m1.first === m)[0];
                  resUnit = { order: matches1[1], no: mm.no, teamId: mm.teamId };
                } else if (matches2 && matches2.length) {
                  resUnit.ten = matches2[1];
                  results.push(resUnit);
                }
              }
            }
          }
          this.logger.debug(member, memberKeyList, kyokuStats, results);
        }
      } else {
        (member = [
          {
            no: "M-001",
            full2: "鈴木たろう",
            last: "鈴木",
            first: "たろう",
            full: "鈴木 たろう",
            teamId: "T-6",
            teamName: "赤坂ドリブンズ",
          },
          {
            no: "M-014",
            full2: "松ヶ瀬隆弥",
            last: "松ヶ瀬",
            first: "隆弥",
            full: "松ヶ瀬 隆弥",
            teamId: "T-8",
            teamName: "EX風林火山",
          },
          {
            no: "M-002",
            full2: "堀慎吾",
            last: "堀",
            first: "慎吾",
            full: "堀 慎吾",
            teamId: "T-3",
            teamName: "KADOKAWAサクラナイツ",
          },
          {
            no: "M-004",
            full2: "日向藍子",
            last: "日向",
            first: "藍子",
            full: "日向 藍子",
            teamId: "T-2",
            teamName: "渋谷ABEMAS",
          },
        ]),
          (memberKeyList = ["鈴木", "たろう", "松ヶ瀬", "隆弥", "堀", "慎吾", "日向", "藍子"]),
          (kyokuStats = [
            ["東1局（親　たろう）ドラ 8ピン", "松ヶ瀬（ツモ上がり）リーチ ツモ 東 ドラ1（満貫）2000点 4000点"],
            ["東2局（親　堀）ドラ 5索", "たろう（ツモ上がり）リーチ ツモ 中 ドラ1（満貫）2000点 4000点"],
            ["東3局（親　松ヶ瀬）ドラ 發", "日向（松ヶ瀬からロン上がり）リーチ ピンフ ドラ1　3900点"],
            ["東4局（親　日向）ドラ 南", "たろう（堀からロン上がり）南 ドラ3（満貫）8000点"],
            ["南1局（親　たろう）ドラ 9萬", "たろう 堀 日向 テンパイ　流局"],
            [
              "南1局（親　たろう）1本場 供託1 ドラ 5萬",
              "堀（松ヶ瀬からロン上がり）リーチ ピンフ ドラ1 赤2（満貫）8000点　1本場 300点",
            ],
            ["南2局（親　堀）ドラ 3索", "たろう（堀からロン上がり）中　1300点"],
            ["南3局（親　松ヶ瀬）ドラ 白", "日向（堀からロン上がり）リーチ　1300点"],
            ["南4局（親　日向）ドラ 5索", "日向 テンパイ　流局"],
            [
              "南4局（親　日向）1本場 供託1 ドラ 3ピン",
              "日向（ツモ上がり）リーチ ツモ ピンフ 赤1 裏ドラ1（満貫）4000点　1本場 100点オール",
            ],
            [
              "南4局（親　日向）2本場 ドラ 5ピン",
              "たろう（日向からロン上がり）タンヤオ ドラ1 赤1　5200点　2本場 600点",
            ],
          ]),
          (results = [
            { order: "1", no: "M-001", teamId: "T-6", ten: "40000" },
            { order: "2", no: "M-004", teamId: "T-2", ten: "35400" },
            { order: "3", no: "M-002", teamId: "T-3", ten: "14900" },
            { order: "4", no: "M-014", teamId: "T-8", ten: "9700" },
          ]);
      }
      // エラーぽい奴のインフォ
      if (results.length !== 4) this.logger.info(`${battle}の結果が${results.length}`);
      if (member.length !== 4) this.logger.info(`${battle}のメンバが${member.length}`);
      if (kyokuStats.length < 8) this.logger.info(`${battle}の局が${kyokuStats.length}`);
      let getMid = (name) => {
        return member.filter((m) => m.last == name || m.first == name)[0];
      };
      let getHiniti = (b) => {
        return `${b.substr(0, 4)}/${Number(b.substr(4, 2)).toString()}/${Number(b.substr(6, 2)).toString()}`;
      };
      let getSeason = (day) => {
        let mark = "R";
        if (conf.semi.indexOf(day) > -1) mark = "S";
        else if (conf.final.indexOf(day) > -1) mark = "F";
        return conf.year[0] + mark;
      };
      // 必要な項目は計算して1試合分のデータを整形

      // var resultTemp = {
      //   試合No: "",
      //   日にち: "",
      //   シーズン: "",
      //   TeamID: "",
      //   登板選手: "",
      //   選手名: "",
      //   ポイント: "",
      //   保有点: "",
      //   着順: "",
      // };
      let statsRecs = [];
      for (let stats of kyokuStats) {
        let oya = "";
        let kyoutaku = "";
        let base = {};
        for (let i in stats) {
          let line = stats[i];
          if (i == 0) {
            let regexs = ["([東南])(\\d)局", "(\\d+)本場", "供託(\\d+)"];
            let m1 = line.match(regexs[0]);
            let m2 = line.match(regexs[1]);
            let m3 = line.match(regexs[2]);
            oya = memberKeyList.filter((m) => line.indexOf(m) > -1)[0];
            if (m3) kyoutaku = m3[1];
            let kyoku = KYOKU_LIST.filter(
              (k) => k.no == `${m1[1] == "東" ? "t" : "n"}-${m1[2]}-${m2 ? m2[1] : "0"}`
            )[0];
            base = {
              ...statsTemp,
              試合No: battle,
              日にち: getHiniti(battle),
              局No: kyoku.no,
              局: kyoku.name,
            };
          } else {
            let pointer = memberKeyList.filter((m) => line.indexOf(m) > -1);
            let debtor = [];
            let pMap = [];
            let yaku = [];
            let tumi = "";
            if (line.indexOf("ツモ上がり") > -1) {
              let regexs = [/\d本場 (\d+)点(?:オール)?/, /(\d+)点/g];
              let matches = line.match(regexs[0]); // 積み棒
              if (matches && matches.length > 0) {
                tumi = matches[1];
                line = line.replace(regexs[0], "");
              }
              matches = line.matchAll(regexs[1]);
              let matcheList = Array.from(matches); // 配列に変換
              if (matcheList.length === 1) {
                // ○○オール
                pMap.push({ key: pointer[0], mNo: getMid(pointer[0]), income: String(Number(matcheList[0][1]) * 3) }); // 貰う点数
                member.forEach((m) => {
                  if (m.no != getMid(pointer[0])) pMap.push({ mNo: m.no, income: `-${matcheList[0][1]}` }); // 払う点数
                });
              } else if (matcheList && matcheList.length === 2) {
                let pChild = matcheList[0][1],
                  pParent = matcheList[1][1];
                if (pChild > pParent) (pChild = matcheList[1][1]), (pParent = matcheList[0][1]);
                pMap.push({ key: pointer[0], income: String(Number(pChild) * 2 + Number(pParent)) }); // 貰う点数
                member.forEach((m) => {
                  // 例外でmNoを持つ 和了者以外
                  if (m.no != getMid(pointer[0]))
                    pMap.push({ mNo: m.no, income: `^${m.no == getMid(oya) ? pParent : pChild}` }); // 払う点数
                });
              }
              line = line.replaceAll(regexs[1], "");
              yaku = line.split("）")[1].split("（")[0].split(" ");
            } else if (line.indexOf("テンパイ") > -1) {
              yaku.push("テンパイ");
              pointer.forEach((p) => pMap.push({ key: p, mNo: getMid(p), income: String(3000 / pointer.length) }));
              memberKeyList.forEach((m) => {
                if (pointer.indexOf(m) === -1)
                  pMap.push({ key: m, mNo: getMid(m), income: `-${String(3000 / (4 - pointer.length))}` });
              });
            } else if (line.indexOf("からロン上がり") > -1) {
              let regexs = [`(${memberKeyList.join("|")})からロン上がり`, /\d本場 (\d+)点/, /(\d+)点/g];
              let m1 = line.match(regexs[0]);
              pointer = pointer.filter((p) => p != m1[1]); //  上がりの人
              // debtor.push(m1[1]); // ロンされた人
              let matches = line.match(regexs[1]); // 積み棒
              if (matches && matches.length > 0) {
                tumi = matches[1];
                line = line.replace(regexs[1], "");
              }
              matches = line.matchAll(regexs[2]);
              let matcheList = Array.from(matches); // 配列に変換
              pMap.push({ key: pointer[0], mNo: getMid(pointer[0]), income: matcheList[0][1] }); // 貰う点数
              pMap.push({ key: m1[1], mNo: getMid(m1[1]), income: `-${matcheList[0][1]}` }); // 払う点数
              line = line.replaceAll(regexs[2], "");
              yaku = line.split("）")[1].split("（")[0].split(" ");
            } else this.logger.info("上がり不明");
            member.forEach((m) => {
              let statsRec = { ...base, 選手No: m.no, TeamID: m.teamId, 選手名: m.full };
              let currentP = pMap.filter((p) => p.mNo === m.no);
              if (yaku[0] == "テンパイ") {
                if (Number(currentP) > 1) statsRec["結果"] = "流局聴牌";
                else statsRec["結果"] = "流局不聴";
                statsRec["聴牌料"] = currentP;
              } else if (pMap.length == 2) {
                if (currentP) {
                  if (Number(currentP) > 1) {
                    statsRec["結果"] = "出和了り";
                    statsRec["和了点"] = currentP;
                    statsRec["打点"] = currentP;
                    statsRec["供託"] = String(Number(kyoutaku) * 1000);
                    statsRec["積み棒"] = tumi;
                    statsRec["和了"] = "和了";
                    statsRec["役"] = yaku.join("、");
                    statsRec["立直"] = yaku.indexOf("リーチ") > -1 || yaku.indexOf("立直") > -1 ? "立直" : "";
                  } else
                    (statsRec["結果"] = "放銃"), (statsRec["和了点"] = currentP), (statsRec["積み棒"] = `-${tumi}`);
                } else (statsRec["結果"] = "横移動"), (statsRec["和了点"] = "0");
              } else if (pMap.length == 4) {
                if (Number(currentP) > 1) {
                  statsRec["結果"] = "自摸和了り";
                  statsRec["打点"] = currentP;
                  statsRec["供託"] = String(Number(kyoutaku) * 1000);
                  statsRec["積み棒"] = String(Number(tumi) * 3);
                  statsRec["和了"] = "和了";
                  statsRec["役"] = yaku.join("、");
                  statsRec["立直"] = yaku.indexOf("リーチ") > -1 || yaku.indexOf("立直") > -1 ? "立直" : "";
                } else (statsRec["結果"] = "自摸られ"), (statsRec["積み棒"] = `-${tumi}`);
                statsRec["和了点"] = currentP;
              }

              statsRecs.push(statsRec);
            });
          }
        }
      }
      let resultRecs = [];
      results.forEach((r) => {
        let p = "",
          uma = 0;
        switch (r.order) {
          case "1":
            uma = 50000;
            break;
          case "2":
            uma = 10000;
            break;
          case "3":
            uma = -10000;
            break;
          case "4":
            uma = -30000;
            break;
        }
        p = (r.ten - 30000 + uma) / 1000;
        resultRecs.push({
          試合No: battle,
          日にち: getHiniti(battle),
          シーズン: getSeason(battle.substr(4, 4)),
          TeamID: r.teamId,
          登板選手: r.no,
          ポイント: p,
          保有点: r.ten,
          着順: r.order,
        });
      });

      this.logger.info(statsRecs, resultRecs);
      // DBに保存
    } catch (e) {
      this.logger.info(e);
      await this.quitDriver();
    }
    return this.driver;
  }
}
start();

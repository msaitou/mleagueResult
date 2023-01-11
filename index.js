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
  { no: "M-001", full2:"鈴木たろう", last: "鈴木", first: "たろう", full: "鈴木 たろう", teamId: "T-6", teamName: "赤坂ドリブンズ" },
  { no: "M-002", full2:"堀慎吾", last: "堀", first: "慎吾", full: "堀 慎吾", teamId: "T-3", teamName: "KADOKAWAサクラナイツ" },
  { no: "M-003", full2:"石橋伸洋", last: "石橋", first: "伸洋", full: "石橋 伸洋", teamId: "T-5", teamName: "U-NEXT Pirates" },
  { no: "M-004", full2:"日向藍子", last: "日向", first: "藍子", full: "日向 藍子", teamId: "T-2", teamName: "渋谷ABEMAS" },
  { no: "M-005", full2:"岡田紗佳", last: "岡田", first: "紗佳", full: "岡田 紗佳", teamId: "T-3", teamName: "KADOKAWAサクラナイツ" },
  { no: "M-006", full2:"魚谷侑未", last: "魚谷", first: "侑未", full: "魚谷 侑未", teamId: "T-7", teamName: "セガサミーフェニックス" },
  { no: "M-007", full2:"村上淳", last: "村上", first: "淳", full: "村上 淳", teamId: "T-6", teamName: "赤坂ドリブンズ" },
  { no: "M-008", full2:"小林剛", last: "小林", first: "剛", full: "小林 剛", teamId: "T-5", teamName: "U-NEXT Pirates" },
  { no: "M-009", full2:"伊達朱里紗", last: "伊達", first: "朱里紗", full: "伊達 朱里紗", teamId: "T-1", teamName: "KONAMI 麻雀格闘倶楽部" },
  { no: "M-010", full2:"近藤誠一", last: "近藤", first: "誠一", full: "近藤 誠一", teamId: "T-7", teamName: "セガサミーフェニックス" },
  { no: "M-011", full2:"勝又健志", last: "勝又", first: "健志", full: "勝又 健志", teamId: "T-8", teamName: "EX風林火山" },
  { no: "M-012", full2:"高宮まり", last: "高宮", first: "まり", full: "高宮 まり", teamId: "T-1", teamName: "KONAMI 麻雀格闘倶楽部" },
  { no: "M-013", full2:"園田賢", last: "園田", first: "賢", full: "園田 賢", teamId: "T-6", teamName: "赤坂ドリブンズ" },
  { no: "M-014", full2:"松ヶ瀬隆弥", last: "松ヶ瀬", first: "隆弥", full: "松ヶ瀬 隆弥", teamId: "T-8", teamName: "EX風林火山" },
  { no: "M-015", full2:"二階堂亜樹", last: "二階堂", first: "亜樹", full: "二階堂 亜樹", teamId: "T-8", teamName: "EX風林火山" },
  { no: "M-016", full2:"黒沢咲", last: "黒沢", first: "咲", full: "黒沢 咲", teamId: "T-4", teamName: "TEAM RAIDEN / 雷電" },
  { no: "M-017", full2:"和久津晶", last: "和久津", first: "晶", full: "和久津 晶", teamId: "T-7", teamName: "セガサミーフェニックス" },
  { no: "M-018", full2:"東城りお", last: "東城", first: "りお", full: "東城 りお", teamId: "T-7", teamName: "セガサミーフェニックス" },
  { no: "M-019", full2:"滝沢和典", last: "滝沢", first: "和典", full: "滝沢 和典", teamId: "T-1", teamName: "KONAMI 麻雀格闘倶楽部" },
  { no: "M-020", full2:"白鳥翔", last: "白鳥", first: "翔", full: "白鳥 翔", teamId: "T-2", teamName: "渋谷ABEMAS" },
  { no: "M-021", full2:"丸山奏子", last: "丸山", first: "奏子", full: "丸山 奏子", teamId: "T-6", teamName: "赤坂ドリブンズ" },
  { no: "M-022", full2:"二階堂瑠美", last: "二階堂", first: "瑠美", full: "二階堂 瑠美", teamId: "T-8", teamName: "EX風林火山" },
  { no: "M-023", full2:"内川幸太郎", last: "内川", first: "幸太郎", full: "内川 幸太郎", teamId: "T-3", teamName: "KADOKAWAサクラナイツ" },
  { no: "M-024", full2:"藤崎智", last: "藤崎", first: "智", full: "藤崎 智", teamId: "T-1", teamName: "KONAMI 麻雀格闘倶楽部" },
  { no: "M-025", full2:"松本吉弘", last: "松本", first: "吉弘", full: "松本 吉弘", teamId: "T-2", teamName: "渋谷ABEMAS" },
  { no: "M-026", full2:"朝倉康心", last: "朝倉", first: "康心", full: "朝倉 康心", teamId: "T-5", teamName: "U-NEXT Pirates" },
  { no: "M-027", full2:"萩原聖人", last: "萩原", first: "聖人", full: "萩原 聖人", teamId: "T-4", teamName: "TEAM RAIDEN / 雷電" },
  { no: "M-028", full2:"瑞原明奈", last: "瑞原", first: "明奈", full: "瑞原 明奈", teamId: "T-5", teamName: "U-NEXT Pirates" },
  { no: "M-029", full2:"茅森早香", last: "茅森", first: "早香", full: "茅森 早香", teamId: "T-7", teamName: "セガサミーフェニックス" },
  { no: "M-030", full2:"瀬戸熊直樹", last: "瀬戸熊", first: "直樹", full: "瀬戸熊 直樹", teamId: "T-4", teamName: "TEAM RAIDEN / 雷電" },
  { no: "M-031", full2:"前原雄大", last: "前原", first: "雄大", full: "前原 雄大", teamId: "T-1", teamName: "KONAMI 麻雀格闘倶楽部" },
  { no: "M-032", full2:"沢崎誠", last: "沢崎", first: "誠", full: "沢崎 誠", teamId: "T-3", teamName: "KADOKAWAサクラナイツ" },
  { no: "M-033", full2:"佐々木寿人", last: "佐々木", first: "寿人", full: "佐々木 寿人", teamId: "T-1", teamName: "KONAMI 麻雀格闘倶楽部" },
  { no: "M-034", full2:"多井隆晴", last: "多井", first: "隆晴", full: "多井 隆晴", teamId: "T-2", teamName: "渋谷ABEMAS" },
  { no: "M-035", full2:"中林圭", last: "中林", first: "圭", full: "中林 圭", teamId: "T-5", teamName: "U-NEXT Pirates" },
  { no: "M-036", full2:"渋川難波", last: "渋川", first: "難波", full: "渋川 難波", teamId: "T-3", teamName: "KADOKAWAサクラナイツ" },
  { no: "M-037", full2:"鈴木優", last: "鈴木", first: "優", full: "鈴木 優", teamId: "T-5", teamName: "U-NEXT Pirates" },
  { no: "M-038", full2:"本田朋広", last: "本田", first: "朋広", full: "本田 朋広", teamId: "T-4", teamName: "TEAM RAIDEN / 雷電" }
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
        driver  = await ana.exec(`${battleNo}-${i}`);
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
      await this.driver.get(`${this.baseUrl}${battle}`); // このページを解析
      let se = ["div.entry-content strong"];
      // 必要な情報を取り合えず全部取得
      if (await this.isExistEle(se[0], true, 3000)) {
        let els = await this.getEles(se[0], 3000);
        let member = [],
          memberLastList = [],
          kyokuStats = [],
          results = [];
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
              memberLastList.push(t.last);
              memberLastList.push(t.first);
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
                regex = `^(${memberLastList.join("|")})`;
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
              let regex2 = "^-?(\\d+)点";
              let matches1 = text2.match(regex1);
              let matches2 = text2.match(regex2);
              if (matches1 && matches1.length) {
                let m = memberLastList.filter((m) => text2.indexOf(m) > -1)[0];
                let mm = MEMBER_LIST.filter((m1) => m1.last === m || m1.first === m)[0];
                resUnit = { order: matches1[1], no: mm.no, teamId: mm.teamId };
              } else if (matches2 && matches2.length) {
                resUnit.ten = matches2[1];
                results.push(resUnit);
              }
            }
          }
        }
        this.logger.info(member, memberLastList, kyokuStats, results);
      }
      // 必要な項目は計算して1試合分のデータを整形
      // DBに保存
    } catch (e) {
      this.logger.info(e);
      await this.quitDriver();
    }
    return this.driver;
  }
}
start();

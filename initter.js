const conf = require("config");
const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

exports.db = async function (coll, method, cond = {}, doc) {
  let log = getLogInstance();
  // log.info(0);
  const mdb = require("mongodb");
  // log.info(1);
  const dbClient = mdb.MongoClient;
  // log.info(2);
  try {
    // log.debug("conf", conf);
    let db = await dbClient.connect(`mongodb://${conf.db.host}/`);
    // log.info(3);
    const dbName = db.db(conf.db.name);
    const collection = dbName.collection(coll);
    let res;
    // log.info(4);
    switch (method) {
      case "find":
        res = await collection.find(cond).toArray();
        break;
      case "findOne":
        res = await collection.findOne(cond);
        break;
      case "update":
        let cnt = 0;
        if (cond) {
          cnt = await collection.countDocuments(cond);
        }
        if (cnt) {
          res = await collection.updateOne(cond, { $set: doc });
        } else {
          // insert
          res = await collection.insertOne(doc);
        }
        break;
      case "insertMany":
        res = await collection.insertMany(doc);
        break;
      case "delete":
        res = await collection.deleteMany(doc);
      default:
    }
    log.info(5);
    // log.info(lines);
    db.close();
    return res;
  } catch (e) {
    throw e;
  }
};
function getLogInstance() {
  return global.log ? global.log : thisLog();
}

/** ログクラスの初期処理
 * @returns
 */
const thisLog = () => {
  const log = require("log4js");
  log.configure({
    appenders: {
      // フォーマットリファレンス　https://log4js-node.github.io/log4js-node/layouts.html#pattern-format
      out: {
        type: "stdout",
        layout: { type: "pattern", pattern: "[%d{yy-MM-dd hh:mm:ss} %[%.4p%]] %m ->%f{2} %l" },
      },
      app: {
        type: "dateFile",
        filename: "log/a.log",
        pattern: "yyMMdd",
        keepFileExt: true,
        layout: { type: "pattern", pattern: "[%d{yy-MM-dd hh:mm:ss} %.4p] %m ->%f{2} %l" },
      },
      wrapInfo: { type: "logLevelFilter", appender: "app", level: "info" },
    },
    // categories: { default: { appenders: ["out", "app"], level: "all" } },
    categories: {
      // enableCallStack: true でフォーマットの%fや%lが有効になる
      default: { appenders: ["out", "wrapInfo"], level: "all", enableCallStack: true },
    },
  });
  const logger = log.getLogger();
  logger.level = "all";
  return logger;
};
exports.log = thisLog;

const getDriverPath = async function () {
  let log = getLogInstance();
  try {
    const selenium = require("selenium-download");
    // Driverをダウンロードするディレクトリを指定
    const path = __dirname + "/bin";
    log.debug(path);
    try {
      // # Driverのダウンロードとアップデート
      await new Promise((resolve, reject) => {
        selenium.ensure(path, (e) => {
          if (e) console.error(e.stack);
          // log.info("?????");
          resolve(true);
        });
      });
      log.info("desuyoehn");
    } catch (ee) {
      log.info(ee);
    }
    // # ChromeDriverのパスを返す。
    return `${path}/${process.platform === "win32" ? "chromedriver.exe" : "chromedriver"}`;
  } catch (error) {
    throw error;
  }
};
exports.getDriverPath = getDriverPath;

exports.initBrowserDriver = async function (isMob = false, headless = true) {
  let log = getLogInstance();
  // # Driverのパスを取得する
  let driverPath = await getDriverPath();
  log.info(`driver${driverPath}`);

  // # Driverのパスを渡す
  let service = new chrome.ServiceBuilder(driverPath).build();
  const chromeOptions = new chrome.Options();
  // https://selenium-world.net/selenium-tips/3519/
  chromeOptions.addArguments(`--user-data-dir=${conf.chrome["user-data-dir"]}`);
  chromeOptions.addArguments(`--profile-directory=${conf.chrome["profile"]}`);
  chromeOptions.addArguments("--disable-blink-features=AutomationControlled");
  chromeOptions.addArguments("--lang=en");
  // アプリ外で操作したプロファイルでログイン中にし、アプリでそのプロファイルを利用する。
  // アプリ外で、どのプロファイルを使うか、デフォルトどのプロファイルを使うのがいいか。
  // アプリ内にプロファイルは保存しておきたい気がする。
  // pexのクッキーでログインの期限ぽいもの　削除すればログインが切れた。期限を過去にするのは意味なかった。
  // _pex_session
  let defoSer = null;
  try {
    defoSer = chrome.getDefaultService();
  } catch (e) {}
  if (defoSer && defoSer.isRunning()) {
    defoSer.kill();
  }
  if (!defoSer || !defoSer.isRunning()) {
    // chrome.setDefaultService(service);
    // chromeOptions.addArguments("--headless");
    if (isMob) {
      chromeOptions.setMobileEmulation({
        deviceName: "Pixel 5",
      });
    }
  }
  return chrome.Driver.createSession(chromeOptions, service);
  // return new Builder().forBrowser("chrome").setChromeOptions(chromeOptions).build();
};
// "東",
// "南",
// "西",
// "北",
// "白",
// "發",
// "中",
// "ドラ1",
// "ドラ2",
// "ドラ3",
// "ドラ4",
// "ドラ5",
// "ドラ6",
// "ドラ7",
// "ドラ8",
// "ドラ9",
// "ドラ10",
// "裏1",
// "裏2",
// "裏3",
// "裏4",
// "裏5",
// "裏6",
// "裏7",
// "裏8",
// "裏9",
// "裏10",
// "赤1",
// "赤2",
// "赤3",
// "赤4",
// "赤5",
// "立直",
// "一発",
// "自摸",
// "平和",
// "一盃口",
// "嶺上開花",
// "槍槓",
// "タンヤオ",
// "海底撈月",
// "河底撈魚",
// "全帯么（鳴）",
// "ダブル立直",
// "三色同順",
// "三色同刻",
// "一気通貫",
// "対々和",
// "三暗刻",
// "七対子",
// "混老頭",
// "全帯么",
// "三槓子",
// "小三元",
// "混一色（鳴）",
// "純全帯么（鳴）",
// "混一色",
// "二盃口",
// "純全帯么",
// "流し満貫",
// "清一色（鳴）",
// "清一色",
// "四暗刻",
// "大三元",
// "国士無双",
// "小四喜",
// "字一色",
// "緑一色",
// "清老頭",
// "四槓子",
// "九連宝燈",
// "天和",
// "地和",
// "九連宝燈9面",
// "国士無双13面",
// "大四喜",
// "四暗刻単騎",

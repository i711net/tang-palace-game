const SAVE_KEY = "fengque-changan-save-v3";

const court = [
  { name: "韦皇后", role: "中宫", relation: "审视", mark: "后" },
  { name: "杨贵妃", role: "贵妃", relation: "试探", mark: "贵" },
  { name: "裴淑妃", role: "四妃", relation: "拉拢", mark: "淑" },
  { name: "郑昭仪", role: "九嫔", relation: "敌意", mark: "昭" },
  { name: "高内侍", role: "内侍省", relation: "可用", mark: "高" },
  { name: "薛将军", role: "禁军", relation: "观望", mark: "将" },
];

const places = [
  { id: "gate", name: "朱雀门", note: "验身、名籍、流言最快。" },
  { id: "yeting", name: "掖庭", note: "宫女、杂役、旧案和暗线聚集。" },
  { id: "kitchen", name: "尚食局", note: "御膳、药汤与栽赃之地。" },
  { id: "penglai", name: "蓬莱殿", note: "后妃设宴，试探都在酒盏里。" },
  { id: "zichen", name: "紫宸殿", note: "皇帝召对，一句话可升可坠。" },
  { id: "hanyuan", name: "含元殿", note: "大朝会，胜负见天下。" },
];

const chapters = [
  {
    id: "gate",
    title: "第一章：初入宫门",
    start: "gateStart",
    rank: "宫外民女",
    promotion: "掖庭宫女",
    minScore: 14,
    place: "gate",
    summary: "从朱雀门活着入宫，学会低头，也学会留凭证。",
  },
  {
    id: "yeting",
    title: "第二章：掖庭暗账",
    start: "yetingStart",
    rank: "掖庭宫女",
    promotion: "司籍女史",
    minScore: 14,
    place: "yeting",
    summary: "在低等宫女的倾轧里守住名册和清白。",
  },
  {
    id: "kitchen",
    title: "第三章：尚食毒羹",
    start: "kitchenStart",
    rank: "司籍女史",
    promotion: "才人",
    minScore: 14,
    place: "kitchen",
    summary: "从御膳、药气和替罪局里保住证据。",
  },
  {
    id: "banquet",
    title: "第四章：蓬莱夜宴",
    start: "banquetStart",
    rank: "才人",
    promotion: "婕妤",
    minScore: 14,
    place: "penglai",
    summary: "在妃嫔席间答话、结盟、避锋芒。",
  },
  {
    id: "seal",
    title: "第五章：凤印归掌",
    start: "sealStart",
    rank: "婕妤",
    promotion: "皇后",
    minScore: 14,
    place: "hanyuan",
    summary: "含元殿对质，前面埋下的善缘会决定你有没有退路。",
  },
];

const sceneAssets = {
  gate: "assets/scenes/gate.png",
  yeting: "assets/scenes/yeting.png",
  kitchen: "assets/scenes/kitchen.png",
  penglai: "assets/scenes/penglai.png",
  zichen: "assets/scenes/zichen.png",
  hanyuan: "assets/scenes/hanyuan.png",
};

const portraitAssets = {
  韦皇后: "assets/portraits/empress.png",
  皇后: "assets/portraits/empress.png",
  杨贵妃: "assets/portraits/yang.png",
  裴淑妃: "assets/portraits/pei.png",
  郑昭仪: "assets/portraits/zheng.png",
  皇帝: "assets/portraits/emperor.png",
  高内侍: "assets/portraits/eunuch.png",
  薛将军: "assets/portraits/general.png",
  云娘: "assets/portraits/yunniang.png",
  锦儿: "assets/portraits/jiner.png",
  "旧宫女阿蘅": "assets/portraits/aheng.png",
  阿蘅: "assets/portraits/aheng.png",
  尚食婢素荷: "assets/portraits/suhe.png",
  素荷: "assets/portraits/suhe.png",
  验籍女官: "assets/portraits/official.png",
  掖庭管事: "assets/portraits/official.png",
  尚宫局女史: "assets/portraits/official.png",
  中宫女官: "assets/portraits/official.png",
  掌衣女官: "assets/portraits/official.png",
  册礼官: "assets/portraits/official.png",
  上级女官: "assets/portraits/official.png",
};

const endings = {
  deathGate: { title: "结局：宫门未开", rank: "宫外民女", text: "你在朱雀门外自称能预知天命。妖言的罪名来得比雨更快，天亮前，你的名字没有写进宫籍。" },
  deathSearch: { title: "结局：私物入罪", rank: "宫外民女", text: "你把青玉佩藏进发髻，验身宫人当场搜出。内廷最忌私藏，你还没入宫，命簿已经合上。" },
  deathWell: { title: "结局：井边断声", text: "你在井边逼问旧宫女，惊动了郑昭仪的人。第二日，掖庭只说有人夜里失足。" },
  poison: { title: "结局：一盏冷羹", text: "你把莲子羹照常送去中宫。羹里藏着乌头，罪名也早备好了。" },
  exile: { title: "结局：青灯冷宫", text: "你把一时宠眷当护身符，却没有证据也没有盟友。圣眷散后，冷宫青灯替你数余生。" },
  lake: { title: "结局：曲江沉月", text: "你当众锋芒太露，证据太薄。夜里有人说你失足落水，宫灯照到湖面时，已经没人再问真相。" },
  wine: { title: "结局：宴上失仪", text: "你饮下那杯换过的酒。毒并不烈，只够让你在众人面前失仪。从此恩宠与前程都成笑话。" },
  win: { title: "终章：凤印归掌", rank: "皇后", text: "含元殿钟鼓齐鸣。你用证据、盟友和时机把一盘死棋走活。凤印落掌，长安雪停。" },
  officialPower: { title: "终章：女官执令", rank: "女官令", text: "你没有接凤印，而是请立女官院，重整掖庭、尚食、尚宫三司。你不坐中宫，却让六宫规矩从此绕不开你的名字。" },
  consortAlly: { title: "终章：贵妃同盟", rank: "贵妃", text: "你接受杨贵妃递来的盟约，不急着争后位，而是先掌宴饮、赏赐和消息。六宫都知道，新贵妃笑时，风向已经变了。" },
};

const nodes = {
  gateStart: {
    chapter: 0,
    speaker: "高内侍",
    location: "朱雀门外",
    mood: "calm",
    text: "{name}醒在朱雀门外，袖中手机化成一枚青玉佩。高内侍问：会什么，凭什么让你入宫？",
    choices: [
      { text: "说自己识字会记账，愿从抄录杂籍做起", next: "gateInspect", score: 2, delta: { wit: 1 }, set: { eunuchTrust: true } },
      { text: "说自己能预知天命，请求面圣", ending: "deathGate", delta: { suspicion: 4 } },
      { text: "假称名门遗孤，要求见皇后", ending: "lake", delta: { suspicion: 3 } },
      { text: "跪求收留，什么差事都能做", next: "gateInspect", score: 1, delta: { ally: 1 } },
    ],
  },
  gateInspect: {
    chapter: 0,
    speaker: "验籍女官",
    location: "朱雀门内",
    mood: "tense",
    text: "入门前要验身。青玉佩来历不明，旁边一个叫云娘的新宫女低声提醒：私物若藏住，日后反而说不清。",
    choices: [
      { text: "主动呈上玉佩，登记入库", next: "gateRain", score: 2, delta: { wit: 1, suspicion: -1 }, set: { jadeRegistered: true } },
      { text: "把玉佩藏进发髻", ending: "deathSearch", delta: { suspicion: 4 } },
      { text: "把玉佩塞给云娘，让她替你藏一夜", next: "gateRain", score: 1, delta: { suspicion: 1 }, set: { cloudDebt: true } },
      { text: "说玉佩是路边捡的，愿交给女官处置", next: "gateRain", score: 1, delta: { suspicion: 1 } },
    ],
  },
  gateRain: {
    chapter: 0,
    speaker: "验籍女官",
    location: "朱雀门廊",
    mood: "tense",
    text: "雨水打湿名籍，一旁宫女小声说可以趁乱把年龄改小两岁。年纪小些更容易被留下，也更容易被查出。",
    choices: [
      { text: "照她说改小两岁", ending: "exile", delta: { suspicion: 4 } },
      { text: "按原籍照实写，再补一句愿从粗使做起", next: "gateDorm", score: 2, delta: { wit: 1 } },
      { text: "故意把籍贯写模糊，日后好圆话", next: "gateDorm", score: 0, delta: { suspicion: 2 } },
      { text: "让云娘先写，自己照着抄", next: "gateDorm", score: 1, delta: { ally: 1 } },
    ],
  },
  gateDorm: {
    chapter: 0,
    speaker: "掖庭管事",
    location: "新婢通铺",
    mood: "tense",
    text: "通铺里，老宫女锦儿故意把最潮的铺位分给你。云娘脚踝扭伤，若换铺，她今晚很可能发热。",
    choices: [
      { text: "把干铺让给云娘，自己睡近门处", next: "gateMeal", score: 2, delta: { ally: 1 }, set: { yunAlly: true } },
      { text: "当众指出锦儿欺生，请管事重分", next: "gateMeal", score: 1, delta: { wit: 1, suspicion: 1 }, set: { jinResent: true } },
      { text: "抢回干铺，让云娘自己想办法", next: "gateMeal", score: 0, delta: { suspicion: 1 }, set: { yunCold: true } },
      { text: "把湿铺移到角落，装作没看见云娘", next: "gateMeal", score: 0, delta: { suspicion: 1 } },
    ],
  },
  gateMeal: {
    chapter: 0,
    speaker: "锦儿",
    location: "新婢通铺",
    mood: "tense",
    text: "晚膳只剩两碗粥。锦儿把稠的递给自己人，把清汤推到你面前，还笑说新来的要懂规矩。",
    choices: [
      { text: "把碗摔了，叫她重新分", ending: "lake", delta: { suspicion: 4 } },
      { text: "接过清汤，记住分粥的木牌编号", next: "gateAccident", score: 2, delta: { wit: 1 } },
      { text: "把清汤推给云娘，自己空腹", next: "gateAccident", score: 1, delta: { ally: 1 } },
      { text: "去找高内侍讨一碗热粥", next: "gateAccident", score: 1, delta: { ally: 1, suspicion: 1 } },
    ],
  },
  gateAccident: {
    chapter: 0,
    speaker: "旁白",
    location: "朱雀门廊",
    mood: "danger",
    text: "半夜点名，一个新婢怀中掉出外信。众人惊慌，锦儿忽然说，白日见你和她说过话。",
    choices: [
      { text: "先请女官验信封泥，再说自己只在点名时见过她", next: "gateBadge", score: 2, delta: { wit: 1 } },
      { text: "看向云娘，请她替你作证", next: "gateBadge", rescueFlag: "yunAlly", rescueScore: 2, rescueDelta: { ally: 1 }, fallbackEnding: "exile" },
      { text: "替那新婢把信藏进袖中", ending: "exile", delta: { suspicion: 5 } },
      { text: "说锦儿最先看见外信，应由她说明", next: "gateBadge", score: 1, delta: { wit: 1, suspicion: 1 } },
    ],
  },
  gateBadge: {
    chapter: 0,
    speaker: "掖庭管事",
    location: "掖庭门前",
    mood: "calm",
    text: "管事发木牌，木牌以后能证明你当夜在何处值守。锦儿故意把裂牌塞给你，旁人都装没看见。",
    choices: [
      { text: "当场换牌，语气强硬", next: "gateBasin", score: 1, delta: { suspicion: 1 } },
      { text: "收下裂牌，日后再说", next: "gateBasin", score: 0, delta: { suspicion: 1 } },
      { text: "请管事在名册旁记明裂痕", next: "gateBasin", score: 2, delta: { wit: 1 }, set: { badgeMarked: true } },
      { text: "把裂牌悄悄换给云娘", ending: "exile", delta: { suspicion: 4 } },
    ],
  },
  gateBasin: {
    chapter: 0,
    speaker: "锦儿",
    location: "浣衣盆边",
    mood: "tense",
    text: "次日浣衣，锦儿把你的木盆踢翻，又笑着说新来的手脚笨。周围宫女都在等你出丑。",
    choices: [
      { text: "不争嘴，先把水迹擦净，再记下木牌编号", next: "gateLedger", score: 2, delta: { wit: 1 } },
      { text: "把水泼回锦儿身上", next: "gateLedger", score: 0, delta: { suspicion: 2 }, set: { jinResent: true } },
      { text: "哭着去找高内侍告状", next: "gateLedger", score: 1, delta: { ally: 1, suspicion: 1 } },
      { text: "让云娘把经过告诉管事，自己继续做活", next: "gateLedger", rescueFlag: "yunAlly", rescueScore: 2, score: 1, rescueDelta: { ally: 1 } },
    ],
  },
  gateLedger: {
    chapter: 0,
    speaker: "高内侍",
    location: "掖庭值房",
    mood: "calm",
    text: "高内侍让你把今夜新婢名册誊一遍。最后一栏是空的，可以写“识字”“笨拙”“多事”，这会影响你被分到哪里。",
    choices: [
      { text: "写自己手快，求近身侍奉", next: "gateOath", score: 1, delta: { favor: 1, suspicion: 1 } },
      { text: "写自己识字，愿抄录旧册", next: "gateOath", score: 2, delta: { wit: 1 }, set: { recordSkill: true } },
      { text: "写自己体弱，避开粗使", ending: "exile", delta: { suspicion: 3 } },
      { text: "什么都不写，免得出头", next: "gateOath", score: 0 },
    ],
  },
  gateOath: {
    chapter: 0,
    speaker: "高内侍",
    location: "掖庭门前",
    mood: "calm",
    text: "高内侍问你：入宫第一夜，学到了什么？这句话看似闲问，其实是最后一道门槛。",
    choices: [
      { text: "宫里争的是凭证，不是一时口舌", next: "gateEnd", score: 2, delta: { wit: 1 } },
      { text: "只要靠对人，就不用怕旁人陷害", next: "gateEnd", score: 1, delta: { ally: 1, suspicion: 1 } },
      { text: "谁欺我，我日后必十倍讨回", ending: "lake", delta: { suspicion: 4 } },
      { text: "先活过今夜，再慢慢学规矩", next: "gateEnd", score: 1, delta: { ally: 1 } },
    ],
  },
  gateEnd: { chapter: 0, speaker: "高内侍", location: "掖庭门前", mood: "calm", checkpoint: true },

  yetingStart: {
    chapter: 1,
    speaker: "尚宫局女史",
    location: "掖庭值房",
    mood: "calm",
    text: "{address}被拨到掖庭抄录名册。旧账里有宫女升降、病亡、调任，也有被人刻意涂改的空白。",
    choices: [
      { text: "按年月重排，另标夜间调任", next: "yetingComb", score: 2, delta: { wit: 1 } },
      { text: "先抄最上面的几页求快", next: "yetingComb", score: 1 },
      { text: "翻看贵人私印，拿给同伴看", ending: "deathWell", delta: { suspicion: 4 } },
      { text: "只抄与自己同屋宫女有关的页", next: "yetingComb", score: 0, delta: { suspicion: 1 } },
    ],
  },
  yetingComb: {
    chapter: 1,
    speaker: "云娘",
    location: "掖庭通铺",
    mood: "tense",
    text: "清晨，云娘的木梳出现在你枕下。管事说昨夜有人偷用贵人赏物，谁藏着，谁就受罚。",
    choices: [
      { text: "立刻把木梳交出，说自己不知情", next: "yetingThread", score: 1, delta: { suspicion: 1 } },
      { text: "问云娘木梳齿上是否有缺口，再请她认物", next: "yetingThread", rescueFlag: "yunAlly", rescueScore: 2, score: 1, rescueDelta: { ally: 1 } },
      { text: "把木梳塞回云娘枕下", ending: "exile", delta: { suspicion: 4 } },
      { text: "先看枕席褶痕，找出是谁夜里翻过", next: "yetingThread", score: 2, delta: { wit: 1 } },
    ],
  },
  yetingThread: {
    chapter: 1,
    speaker: "锦儿",
    location: "针线房",
    mood: "tense",
    text: "给才人们缝春衣时，锦儿把一段贵妃宫里的金线塞进你针盒。若被搜出，就是私盗。",
    choices: [
      { text: "立刻把针盒封好，叫管事当面开盒", next: "yetingMedicine", score: 2, delta: { wit: 1 } },
      { text: "悄悄把金线扔进炭盆", next: "yetingMedicine", score: 1, delta: { suspicion: 1 } },
      { text: "转塞进云娘的针盒", ending: "exile", delta: { suspicion: 4 } },
      { text: "把金线献给女史，说是自己捡到的", next: "yetingMedicine", score: 1, delta: { ally: 1, suspicion: 1 } },
    ],
  },
  yetingMedicine: {
    chapter: 1,
    speaker: "旧宫女阿蘅",
    location: "掖庭井边",
    mood: "tense",
    text: "阿蘅递来一包退热药，说云娘昨夜发热。锦儿却在远处看着，像等你接下什么把柄。",
    choices: [
      { text: "收下药包，立刻藏进袖中", ending: "exile", delta: { suspicion: 4 } },
      { text: "拒绝药包，装作没听见", next: "yetingLaundry", score: 0, delta: { ally: -1 } },
      { text: "请阿蘅把药包交给管事登记，再送给云娘", next: "yetingLaundry", score: 2, delta: { wit: 1 }, set: { ahengTrust: true } },
      { text: "让云娘自己来拿，免得沾手", next: "yetingLaundry", score: 1, delta: { suspicion: 1 } },
    ],
  },
  yetingLaundry: {
    chapter: 1,
    speaker: "云娘",
    location: "浣衣处",
    mood: "tense",
    text: "贵妃宫里少了一条绣带，浣衣处所有新婢都要搜身。云娘脸色发白，她袖口沾着相同香粉。",
    choices: [
      { text: "先替她遮住袖口，再问香粉从何处来", next: "yetingLamp", score: 2, delta: { ally: 1 }, set: { yunProtected: true } },
      { text: "提醒管事先搜锦儿的柜子", next: "yetingLamp", rescueFlag: "jinResent", rescueEnding: "lake", rescueScore: 2, score: 1, delta: { wit: 1 } },
      { text: "立刻撇清自己，说云娘最可疑", next: "yetingLamp", score: 0, delta: { suspicion: 2 }, set: { yunCold: true } },
      { text: "说香粉人人会沾，不足为证", next: "yetingLamp", score: 1, delta: { wit: 1 } },
    ],
  },
  yetingLamp: {
    chapter: 1,
    speaker: "掖庭管事",
    location: "掖庭夜廊",
    mood: "danger",
    text: "夜灯忽灭，名册角落被火星燎黑。管事问谁守灯，锦儿抢先说你刚才离过案边。",
    choices: [
      { text: "说锦儿诬陷，立刻与她争辩", next: "yetingRumor", score: 0, delta: { suspicion: 2 } },
      { text: "指出灯油未少，火星应从香灰来", next: "yetingRumor", score: 2, delta: { wit: 1 } },
      { text: "求高内侍替你说话", next: "yetingRumor", rescueFlag: "eunuchTrust", rescueScore: 2, score: 1, rescueDelta: { ally: 1 } },
      { text: "把燎黑的页角撕掉", ending: "exile", delta: { suspicion: 4 } },
    ],
  },
  yetingRumor: {
    chapter: 1,
    speaker: "旧宫女阿蘅",
    location: "掖庭井边",
    mood: "tense",
    text: "阿蘅说郑昭仪宫里的人夜里取过一页名册。她怕惹事，只肯说半句。",
    choices: [
      { text: "只问时辰和来人衣色，不问主谋", next: "yetingSeal", score: 2, delta: { wit: 1, ally: 1 }, set: { ahengTrust: true } },
      { text: "许诺日后护她，让她写口供", next: "yetingSeal", score: 1, delta: { ally: 1, suspicion: 1 }, set: { ahengTrust: true } },
      { text: "抓住她逼问", ending: "deathWell", delta: { suspicion: 4 } },
      { text: "拿自己的口粮换她一句实话", next: "yetingSeal", score: 1, delta: { ally: 1 } },
    ],
  },
  yetingSeal: {
    chapter: 1,
    speaker: "尚宫局女史",
    location: "掖庭值房",
    mood: "tense",
    text: "名册旁少了一枚小印。若找不回，抄册的人都要受罚。你看到锦儿袖口有一点朱砂。",
    choices: [
      { text: "直接搜锦儿袖子", ending: "lake", delta: { suspicion: 4 } },
      { text: "请女史点验所有人的袖口和印泥盒", next: "yetingNight", score: 2, delta: { wit: 1 } },
      { text: "装作没看见，免得惹锦儿", next: "yetingNight", score: 0 },
      { text: "让云娘去偷看锦儿柜子", next: "yetingNight", score: 1, delta: { suspicion: 1 } },
    ],
  },
  yetingNight: {
    chapter: 1,
    speaker: "旁白",
    location: "掖庭夜廊",
    mood: "danger",
    text: "夜里有人把郑昭仪宫中的香囊放进你被褥。巡夜女官的灯已经到了廊口。",
    choices: [
      { text: "不碰香囊，直接请巡夜女官查看被褥褶痕", next: "yetingSuperior", score: 2, delta: { wit: 1 } },
      { text: "让云娘替你挡住巡夜女官片刻", next: "yetingSuperior", rescueFlag: "yunProtected", rescueScore: 2, fallbackEnding: "exile", rescueDelta: { ally: 1 } },
      { text: "把香囊丢进井里", ending: "deathWell", delta: { suspicion: 4 } },
      { text: "把香囊放到锦儿被褥里", ending: "exile", delta: { suspicion: 5 } },
    ],
  },
  yetingSuperior: {
    chapter: 1,
    speaker: "尚宫局女史",
    location: "掖庭值房",
    mood: "tense",
    text: "女史抽查名册。她问你：异常名册，是拿去告状，还是先补证据？",
    choices: [
      { text: "封存原册，抄副本交尚宫局", next: "yetingEnd", score: 2, delta: { wit: 2, suspicion: -1 }, set: { ledgerCopy: true } },
      { text: "托高内侍转交", next: "yetingEnd", rescueFlag: "eunuchTrust", rescueScore: 2, score: 1, delta: { ally: 1 }, set: { eunuchTrust: true } },
      { text: "去郑昭仪宫门前喊冤", ending: "lake", delta: { suspicion: 4 } },
      { text: "把异常页先藏起来等升职再用", next: "yetingEnd", score: 0, delta: { suspicion: 2 } },
    ],
  },
  yetingEnd: { chapter: 1, speaker: "尚宫局女史", location: "尚食局门前", mood: "calm", checkpoint: true },

  kitchenStart: {
    chapter: 2,
    speaker: "裴淑妃",
    location: "尚食局",
    mood: "tense",
    text: "{address}被临时调去尚食局。裴淑妃点名要莲子羹送往中宫，汤气里却混着辛烈药味。",
    choices: [
      { text: "请尚食令复验药材，自己守在旁边记名", next: "kitchenRoster", score: 2, delta: { wit: 1 } },
      { text: "先用银针试，再偷偷倒掉", next: "kitchenRoster", score: 1, delta: { suspicion: 1 } },
      { text: "照常端去", ending: "poison", delta: { favor: 1 } },
      { text: "假装腹痛离开，让旁人去送", next: "kitchenRoster", score: 0, delta: { suspicion: 2 } },
    ],
  },
  kitchenRoster: {
    chapter: 2,
    speaker: "尚食婢素荷",
    location: "尚食局",
    mood: "tense",
    text: "今日御膳名单多出你的名字，像有人故意把你推到药羹旁。素荷说名单昨夜被人换过。",
    choices: [
      { text: "先看纸色和折痕，判断是不是新换的", next: "kitchenSpice", score: 2, delta: { wit: 1 } },
      { text: "把名单撕掉，免得牵连自己", ending: "exile", delta: { suspicion: 4 } },
      { text: "让素荷替你去问尚食令", next: "kitchenSpice", score: 1, delta: { ally: 1 } },
      { text: "去找裴淑妃求她撤下名单", next: "kitchenSpice", score: 1, delta: { favor: 1, suspicion: 1 } },
    ],
  },
  kitchenSpice: {
    chapter: 2,
    speaker: "尚食婢素荷",
    location: "药柜前",
    mood: "tense",
    text: "素荷被人推到药柜前，手上沾着乌头粉。她哭着说自己只是奉命取桂心。",
    choices: [
      { text: "先封药柜，再让她说取药牌是谁给的", next: "kitchenSoup", score: 2, delta: { wit: 1 }, set: { suheAlive: true } },
      { text: "把她交给内侍省严审", next: "kitchenSoup", score: 1, delta: { suspicion: 1 } },
      { text: "逼她立刻咬出郑昭仪", ending: "exile", delta: { suspicion: 4 } },
      { text: "替她擦掉手上药粉", ending: "poison", delta: { suspicion: 5 } },
    ],
  },
  kitchenSoup: {
    chapter: 2,
    speaker: "裴淑妃",
    location: "尚食局",
    mood: "tense",
    text: "裴淑妃忽然派人来催，说中宫等羹已久。催得越急，越像有人怕你查清。",
    choices: [
      { text: "立刻端羹走，免得得罪淑妃", ending: "poison", delta: { favor: 1 } },
      { text: "请来人留下口信木牌，再继续复验", next: "kitchenBlame", score: 2, delta: { wit: 1 } },
      { text: "回话说羹已洒，重新熬制", next: "kitchenBlame", score: 1, delta: { suspicion: 1 } },
      { text: "把催令交给高内侍", next: "kitchenBlame", rescueFlag: "eunuchTrust", rescueScore: 2, score: 1, rescueDelta: { ally: 1 } },
    ],
  },
  kitchenBlame: {
    chapter: 2,
    speaker: "郑昭仪",
    location: "尚食局外",
    mood: "danger",
    text: "郑昭仪的人指认你动过药罐。围观宫人越来越多，谁先慌，谁就像凶手。",
    choices: [
      { text: "核对药罐封泥、取药牌和名册调令", next: "kitchenTray", rescueFlag: "ledgerCopy", rescueScore: 2, score: 1, delta: { wit: 1 } },
      { text: "请高内侍当众说明你入宫时的抄录差事", next: "kitchenTray", rescueFlag: "eunuchTrust", rescueScore: 2, fallbackEnding: "exile", rescueDelta: { ally: 1 } },
      { text: "反咬郑昭仪是主谋", ending: "lake", delta: { suspicion: 4 } },
      { text: "跪下认错求宽限", next: "kitchenTray", score: 0, delta: { suspicion: 2 } },
    ],
  },
  kitchenTray: {
    chapter: 2,
    speaker: "中宫女官",
    location: "尚食局外",
    mood: "tense",
    text: "中宫女官来取膳，托盘上多了一只银匙。银匙若随羹入宫，之后谁碰过羹就说不清。",
    choices: [
      { text: "把银匙留下，另取尚食局公用匙", next: "kitchenFire", score: 2, delta: { wit: 1 } },
      { text: "让女官带走银匙，显得你不多事", next: "kitchenFire", score: 0, delta: { suspicion: 2 } },
      { text: "当场质问女官为何加匙", ending: "lake", delta: { suspicion: 4 } },
      { text: "请素荷记下托盘物件", next: "kitchenFire", rescueFlag: "suheAlive", rescueScore: 2, score: 1, rescueDelta: { ally: 1 } },
    ],
  },
  kitchenFire: {
    chapter: 2,
    speaker: "旁白",
    location: "尚食局灶间",
    mood: "danger",
    text: "证据刚封好，灶间忽然起火。锦儿趁乱撞向你，封泥盒滚到火边。",
    choices: [
      { text: "先救封泥盒，再叫人关灶门", next: "kitchenAsh", score: 2, delta: { wit: 1 } },
      { text: "先拉住素荷逃出去", next: "kitchenAsh", score: 1, delta: { ally: 1 }, set: { suheGrateful: true } },
      { text: "趁乱去追锦儿", ending: "lake", delta: { suspicion: 3 } },
      { text: "把所有药罐都推倒灭火", ending: "exile", delta: { suspicion: 4 } },
    ],
  },
  kitchenAsh: {
    chapter: 2,
    speaker: "高内侍",
    location: "尚食局灶间",
    mood: "danger",
    text: "火灭后，灰里露出半片烧焦的取药牌。高内侍问你，是先捡牌，还是先清点人？",
    choices: [
      { text: "先清点人，取药牌稍后再说", next: "kitchenTaste", score: 1, delta: { ally: 1 } },
      { text: "用湿帕裹住取药牌，保持灰迹", next: "kitchenTaste", score: 2, delta: { wit: 1 }, set: { drugTag: true } },
      { text: "把取药牌塞进袖中", ending: "exile", delta: { suspicion: 5 } },
      { text: "让锦儿去捡，自己避嫌", next: "kitchenTaste", score: 0, delta: { suspicion: 2 } },
    ],
  },
  kitchenTaste: {
    chapter: 2,
    speaker: "中宫女官",
    location: "中宫廊下",
    mood: "calm",
    text: "毒羹未入中宫。中宫女官问你：若此案牵连下等宫女，该杀一儆百，还是查到取药牌为止？",
    choices: [
      { text: "查到取药牌为止，不扩大株连", next: "kitchenCup", score: 2, delta: { ally: 1 }, set: { queenTrust: true } },
      { text: "严审所有碰过药柜的人", next: "kitchenCup", score: 1, delta: { wit: 1, suspicion: 1 } },
      { text: "请中宫立刻处死素荷", ending: "exile", delta: { suspicion: 4 } },
      { text: "说此事与自己无关，请中宫另查", next: "kitchenCup", score: 0, delta: { favor: -1 } },
    ],
  },
  kitchenCup: {
    chapter: 2,
    speaker: "裴淑妃",
    location: "中宫廊下",
    mood: "tense",
    text: "裴淑妃送来安神茶，说你受惊了。茶香温和，杯底却有一圈极淡药痕。",
    choices: [
      { text: "接过不饮，称要先谢过中宫", next: "kitchenMercy", score: 2, delta: { wit: 1 } },
      { text: "饮下以示不疑", ending: "wine", delta: { favor: 1 } },
      { text: "当众说茶里有药", ending: "lake", delta: { suspicion: 4 } },
      { text: "把茶递给素荷，让她先尝", ending: "exile", delta: { suspicion: 5 } },
    ],
  },
  kitchenMercy: {
    chapter: 2,
    speaker: "皇帝",
    location: "尚食局前",
    mood: "calm",
    text: "皇帝听闻你止住毒羹，问你要什么赏。满院宫人都在看，你一句话会决定她们日后帮不帮你。",
    choices: [
      { text: "求继续查尚食局账册，洗清无辜宫人", next: "kitchenEnd", score: 2, delta: { favor: 1, wit: 1 } },
      { text: "求赏银分给今日救火的宫人", next: "kitchenEnd", score: 2, delta: { ally: 1, favor: 1 } },
      { text: "求皇帝今夜留宿", ending: "lake", delta: { favor: 1, suspicion: 4 } },
      { text: "什么赏都不要，只求回掖庭", next: "kitchenEnd", score: 0, delta: { favor: -1 } },
    ],
  },
  kitchenEnd: { chapter: 2, speaker: "皇帝", location: "蓬莱殿外", mood: "calm", checkpoint: true },

  banquetStart: {
    chapter: 3,
    speaker: "杨贵妃",
    location: "蓬莱殿",
    mood: "calm",
    text: "{address}因毒案有功，被封才人。蓬莱殿夜宴，杨贵妃笑问：若有人借刀杀人，该先抓刀，还是先抓握刀的人？",
    choices: [
      { text: "先收刀为证，再看谁急着灭口", next: "banquetSeat", score: 2, delta: { favor: 1, wit: 1 }, set: { yangInterest: true } },
      { text: "先抓握刀的人", next: "banquetSeat", score: 1, delta: { suspicion: 2 } },
      { text: "说后宫之事不该女子多言", ending: "exile", delta: { favor: -1 } },
      { text: "说刀和握刀人都不急，先看谁安排这张桌", next: "banquetSeat", score: 2, delta: { wit: 1 }, set: { yangInterest: true } },
    ],
  },
  banquetSeat: {
    chapter: 3,
    speaker: "掌衣女官",
    location: "蓬莱殿",
    mood: "tense",
    text: "宴席座次忽然变动，你被安排在郑昭仪下首，离皇帝很近，也离风口很近。",
    choices: [
      { text: "欣然入座，离皇帝越近越好", next: "banquetDress", score: 0, delta: { suspicion: 2 } },
      { text: "请女官照原册复核座次", next: "banquetDress", score: 2, delta: { wit: 1 } },
      { text: "主动让座给郑昭仪宫中人", next: "banquetDress", score: 1, delta: { ally: 1 } },
      { text: "当众问是谁改的座次", ending: "lake", delta: { suspicion: 4 } },
    ],
  },
  banquetDress: {
    chapter: 3,
    speaker: "掌衣女官",
    location: "更衣处",
    mood: "tense",
    text: "上宴前，你的披帛被换成犯中宫忌色的暗纹。掌衣女官只说：才人若不懂规矩，怪不得旁人。",
    choices: [
      { text: "换回素色披帛，把暗纹封存", next: "banquetGift", score: 2, delta: { wit: 1 } },
      { text: "穿暗纹入席，赌皇帝看不出来", ending: "lake", delta: { suspicion: 4 } },
      { text: "请杨贵妃借一条披帛", next: "banquetGift", rescueFlag: "yangInterest", rescueScore: 2, score: 1, delta: { ally: 1 } },
      { text: "把暗纹披帛送给锦儿穿", ending: "exile", delta: { suspicion: 4 } },
    ],
  },
  banquetGift: {
    chapter: 3,
    speaker: "杨贵妃",
    location: "更衣处",
    mood: "calm",
    text: "杨贵妃赏你一枚小香囊。香囊漂亮，却可能被说成私相授受；不收，又是驳她面子。",
    choices: [
      { text: "收下后立刻交给掌衣女官登记", next: "banquetWine", score: 2, delta: { wit: 1, ally: 1 }, set: { yangGiftRegistered: true } },
      { text: "直接佩在腰间入席", next: "banquetWine", score: 1, delta: { favor: 1, suspicion: 1 } },
      { text: "婉拒说自己不配", next: "banquetWine", score: 0, delta: { ally: -1 } },
      { text: "转手送给韦皇后宫人", ending: "lake", delta: { suspicion: 4 } },
    ],
  },
  banquetWine: {
    chapter: 3,
    speaker: "韦皇后",
    location: "蓬莱殿",
    mood: "danger",
    text: "歌舞正盛，酒盏忽然换到你案前。皇后看着你，像是在看一枚棋子能不能自己站稳。",
    choices: [
      { text: "先敬皇后，再以药案未结婉拒烈酒", next: "banquetMusic", score: 2, delta: { ally: 1, suspicion: -1 }, set: { queenTrust: true } },
      { text: "直接饮下", ending: "wine", delta: { favor: 1 } },
      { text: "转敬杨贵妃，借她挡皇后", next: "banquetMusic", score: 1, delta: { ally: 1, suspicion: 2 } },
      { text: "称酒盏有裂，换盏后再敬", next: "banquetMusic", score: 2, delta: { wit: 1 } },
    ],
  },
  banquetMusic: {
    chapter: 3,
    speaker: "裴淑妃",
    location: "蓬莱殿",
    mood: "tense",
    text: "乐工忽然奏起你家乡小调。裴淑妃含笑问，你一个新贵人，怎会让乐工知道旧曲？",
    choices: [
      { text: "承认自己私下教过乐工", ending: "exile", delta: { suspicion: 5 } },
      { text: "说曲调相似，愿请乐籍复核", next: "banquetPoem", score: 2, delta: { wit: 1 } },
      { text: "装作听不懂", next: "banquetPoem", score: 0, delta: { suspicion: 1 } },
      { text: "借机唱一段讨皇帝欢心", next: "banquetPoem", score: 1, delta: { favor: 1, suspicion: 2 } },
    ],
  },
  banquetPoem: {
    chapter: 3,
    speaker: "裴淑妃",
    location: "蓬莱殿",
    mood: "tense",
    text: "裴淑妃忽然让你以宫灯为题作句。她不是考才情，是要看你会不会抢妃嫔风头。",
    choices: [
      { text: "借灯赞中宫明照，不提自己", next: "banquetJade", score: 2, delta: { wit: 1, ally: 1 } },
      { text: "作一句锋利艳词，让皇帝记住你", next: "banquetJade", score: 1, delta: { favor: 1, suspicion: 2 } },
      { text: "推说不会，沉默到底", next: "banquetJade", score: 0, delta: { favor: -1 } },
      { text: "借灯暗讽郑昭仪", ending: "lake", delta: { suspicion: 4 } },
    ],
  },
  banquetJade: {
    chapter: 3,
    speaker: "韦皇后",
    location: "蓬莱殿",
    mood: "tense",
    text: "皇后忽然问起你入宫时那枚青玉佩。若说错来历，前面登记过的凭证也可能变成把柄。",
    choices: [
      { text: "说玉佩早已入库，请皇后查库簿", next: "banquetLetter", rescueFlag: "jadeRegistered", rescueScore: 2, score: 1, rescueDelta: { wit: 1 } },
      { text: "说已经丢了", ending: "exile", delta: { suspicion: 4 } },
      { text: "说是贵妃赏的", ending: "lake", delta: { suspicion: 5 } },
      { text: "避而不答，只说旧物不足挂齿", next: "banquetLetter", score: 0, delta: { suspicion: 2 } },
    ],
  },
  banquetLetter: {
    chapter: 3,
    speaker: "高内侍",
    location: "蓬莱殿后廊",
    mood: "danger",
    text: "高内侍递来半封外信，牵出禁军换防。若交错人，前面攒下的分寸都会变成罪证。",
    choices: [
      { text: "交给皇后，请她以中宫名义封存", next: "banquetEarring", rescueFlag: "queenTrust", rescueScore: 2, score: 1, delta: { ally: 1 }, set: { sealedLetter: true } },
      { text: "私藏外信，等皇帝独处时献上", next: "banquetEarring", score: 1, delta: { favor: 1, suspicion: 1 }, set: { privateLetter: true } },
      { text: "约薛将军夜里私谈", ending: "lake", delta: { suspicion: 5 } },
      { text: "当场烧掉外信，断掉祸根", ending: "exile", delta: { suspicion: 5 } },
    ],
  },
  banquetEarring: {
    chapter: 3,
    speaker: "郑昭仪",
    location: "蓬莱殿",
    mood: "danger",
    text: "郑昭仪说自己少了一只金耳坠，目光落到你袖口。那耳坠若从你身上搜出，你就是偷盗贵人之物。",
    choices: [
      { text: "让她搜，证明清白", ending: "exile", delta: { suspicion: 4 } },
      { text: "请皇后宫人先封住四周，再搜所有席位", next: "banquetGeneral", rescueFlag: "queenTrust", rescueScore: 2, score: 1, rescueDelta: { ally: 1 } },
      { text: "反问她为何盯着你袖口", next: "banquetGeneral", score: 0, delta: { suspicion: 2 } },
      { text: "借杨贵妃香囊登记，证明自己袖中无物", next: "banquetGeneral", rescueFlag: "yangGiftRegistered", rescueScore: 2, score: 1, rescueDelta: { wit: 1 } },
    ],
  },
  banquetGeneral: {
    chapter: 3,
    speaker: "薛将军",
    location: "蓬莱殿外",
    mood: "tense",
    text: "薛将军在殿外拦你，说换防文书并非他亲笔。你若信错人，私通禁军的罪名立刻坐实。",
    choices: [
      { text: "只问文书笔迹特征，不收他私物", next: "banquetEnd", score: 2, delta: { wit: 1 }, set: { generalClue: true } },
      { text: "收下他的腰牌，留作证据", ending: "lake", delta: { suspicion: 5 } },
      { text: "让高内侍隔帘听证", next: "banquetEnd", rescueFlag: "eunuchTrust", rescueScore: 2, score: 1, delta: { ally: 1 }, set: { generalClue: true } },
      { text: "把他的话转告杨贵妃", next: "banquetEnd", rescueFlag: "yangInterest", rescueScore: 2, score: 1, delta: { ally: 1 }, set: { generalClue: true } },
    ],
  },
  banquetEnd: { chapter: 3, speaker: "皇帝", location: "紫宸殿", mood: "calm", checkpoint: true },

  sealStart: {
    chapter: 4,
    speaker: "皇帝",
    location: "紫宸殿",
    mood: "tense",
    text: "{address}晋为婕妤，被召入紫宸殿。皇帝问你为何能连破毒羹、外信两案。你不能说自己来自千年之后。",
    choices: [
      { text: "说自己只认账册、药牌、时辰三样死物", next: "sealEmperor", score: 2, delta: { favor: 1, wit: 1 } },
      { text: "说梦中神女指点", ending: "exile", delta: { suspicion: 5 } },
      { text: "说都是郑昭仪所为，请立刻赐死", ending: "lake", delta: { suspicion: 4 } },
      { text: "说自己只是运气好，不敢居功", next: "sealEmperor", score: 0, delta: { favor: -1 } },
    ],
  },
  sealEmperor: {
    chapter: 4,
    speaker: "皇帝",
    location: "紫宸殿",
    mood: "tense",
    text: "皇帝追问：若朕今日只信宠眷，不信证据，你该如何自保？",
    choices: [
      { text: "说愿入冷宫等查清", ending: "exile", delta: { favor: -1 } },
      { text: "说证据可离人，人心不可离证", next: "sealLedger", score: 2, delta: { wit: 1 } },
      { text: "说陛下圣明，绝不会错判", next: "sealLedger", score: 1, delta: { favor: 1 } },
      { text: "说若被冤，就请死明志", ending: "lake", delta: { suspicion: 4 } },
    ],
  },
  sealLedger: {
    chapter: 4,
    speaker: "韦皇后",
    location: "含元殿偏廊",
    mood: "tense",
    text: "皇后问你：若郑昭仪反咬你伪造名册，你拿什么证明第一笔证据不是后补的？",
    choices: [
      { text: "呈上入宫时登记玉佩的库簿页码，证明笔迹日期", next: "sealCloud", rescueFlag: "jadeRegistered", rescueScore: 2, fallbackEnding: "exile", rescueDelta: { wit: 1 } },
      { text: "请高内侍证明你入宫第一日便抄录", next: "sealCloud", rescueFlag: "eunuchTrust", rescueScore: 2, fallbackEnding: "exile", rescueDelta: { ally: 1 } },
      { text: "只说自己问心无愧", ending: "exile", delta: { suspicion: 3 } },
      { text: "呈上裂牌登记，说明当夜值守位置", next: "sealCloud", rescueFlag: "badgeMarked", rescueScore: 2, score: 1, rescueDelta: { wit: 1 } },
    ],
  },
  sealCloud: {
    chapter: 4,
    speaker: "云娘",
    location: "含元殿偏廊",
    mood: "tense",
    text: "云娘被传到殿外。她手心全是汗，若前面你曾护过她，她能说出掖庭栽赃旧事；若没有，她只会低头。",
    choices: [
      { text: "让她照实说，不许添油加醋", next: "sealWitness", rescueFlag: "yunProtected", rescueScore: 2, score: 1, rescueDelta: { ally: 1 } },
      { text: "逼她说锦儿是郑昭仪的人", ending: "exile", delta: { suspicion: 4 } },
      { text: "不传云娘，免她受惊", next: "sealWitness", score: 1, delta: { ally: 1 } },
      { text: "让她跪到皇帝面前哭诉", next: "sealWitness", score: 0, delta: { suspicion: 2 } },
    ],
  },
  sealWitness: {
    chapter: 4,
    speaker: "郑昭仪",
    location: "含元殿",
    mood: "danger",
    text: "郑昭仪果然反咬你逼供下等宫女。她要传素荷，赌素荷怕死不敢说真话。",
    choices: [
      { text: "让素荷照取药牌说，不问主谋", next: "sealAheng", rescueFlag: "suheAlive", rescueScore: 2, score: 1, delta: { ally: 1 } },
      { text: "让云娘先说明掖庭栽赃旧事", next: "sealAheng", rescueFlag: "yunProtected", rescueScore: 2, score: 1, delta: { ally: 1 } },
      { text: "当殿威胁素荷若不说就同罪", ending: "exile", delta: { suspicion: 4 } },
      { text: "只呈取药牌，不传证人", next: "sealAheng", rescueFlag: "drugTag", rescueScore: 2, score: 1, rescueDelta: { wit: 1 } },
    ],
  },
  sealAheng: {
    chapter: 4,
    speaker: "旧宫女阿蘅",
    location: "含元殿",
    mood: "tense",
    text: "阿蘅被传入殿。她曾见过郑昭仪宫人夜取名册，却也怕自己被灭口。",
    choices: [
      { text: "许她事后出宫，换她当殿指证", next: "sealTrial", score: 1, delta: { ally: 1, suspicion: 1 } },
      { text: "只问她见到的时辰和衣色", next: "sealTrial", rescueFlag: "ahengTrust", rescueScore: 2, score: 1, rescueDelta: { wit: 1 } },
      { text: "让内侍省严审她", ending: "exile", delta: { suspicion: 4 } },
      { text: "放弃阿蘅，改求皇帝相信你", next: "sealTrial", score: 0, delta: { favor: 1 } },
    ],
  },
  sealTrial: {
    chapter: 4,
    speaker: "韦皇后",
    location: "含元殿",
    mood: "danger",
    text: "含元殿对质。郑昭仪反咬你勾结禁军、蛊惑帝心。皇后问：证据、证人、动机，先呈哪一个？",
    choices: [
      { text: "先呈名册、药牌、换防时辰，再传证人", next: "sealMotive", score: 2, delta: { wit: 2 } },
      { text: "先哭诉一路委屈，求皇帝信你", ending: "exile", delta: { favor: -1 } },
      { text: "逼郑昭仪当众下跪认罪", ending: "lake", delta: { suspicion: 4 } },
      { text: "先呈杨贵妃给你的香囊", next: "sealMotive", rescueFlag: "yangGiftRegistered", rescueScore: 2, score: 0, rescueDelta: { wit: 1 } },
    ],
  },
  sealMotive: {
    chapter: 4,
    speaker: "郑昭仪",
    location: "含元殿",
    mood: "danger",
    text: "郑昭仪冷笑：你从宫女爬到婕妤，最有动机攀诬后妃的人是你，不是我。",
    choices: [
      { text: "说自己若攀诬，早该只求宠幸，不会保下素荷", next: "sealGeneral", rescueFlag: "suheAlive", rescueScore: 2, score: 1, rescueDelta: { ally: 1 } },
      { text: "说自己无欲无求", next: "sealGeneral", score: 0, delta: { favor: -1 } },
      { text: "反骂她嫉妒", ending: "lake", delta: { suspicion: 4 } },
      { text: "请皇后按证据顺序问，不争动机", next: "sealGeneral", rescueFlag: "queenTrust", rescueScore: 2, score: 1, rescueDelta: { wit: 1 } },
    ],
  },
  sealGeneral: {
    chapter: 4,
    speaker: "薛将军",
    location: "含元殿",
    mood: "tense",
    text: "薛将军被传入殿。若他不能说明换防笔迹，禁军线会断，你也会被拖下水。",
    choices: [
      { text: "请他说出伪文书的三处笔锋差异", next: "sealLastTrap", rescueFlag: "generalClue", rescueScore: 2, fallbackEnding: "lake", rescueDelta: { wit: 1 } },
      { text: "呈上私收的腰牌证明他与你相识", ending: "lake", delta: { suspicion: 5 } },
      { text: "让高内侍复述蓬莱殿外隔帘听证", next: "sealLastTrap", rescueFlag: "eunuchTrust", rescueScore: 2, fallbackEnding: "lake", rescueDelta: { ally: 1 } },
      { text: "让薛将军自行辩白", next: "sealLastTrap", score: 0, delta: { suspicion: 2 } },
    ],
  },
  sealLastTrap: {
    chapter: 4,
    speaker: "韦皇后",
    location: "含元殿",
    mood: "danger",
    text: "最后一问，皇后把一页空白懿旨推到你面前：若今日你胜了，第一笔写什么？",
    choices: [
      { text: "写诛郑氏三族", ending: "exile", delta: { suspicion: 5 } },
      { text: "写重审掖庭旧案，禁私刑", next: "sealMercy", score: 2, delta: { ally: 1 } },
      { text: "写废尽六宫妃嫔", ending: "lake", delta: { suspicion: 5 } },
      { text: "写赏赐杨贵妃同查六宫", next: "sealMercy", rescueFlag: "yangInterest", rescueScore: 2, score: 1, rescueDelta: { ally: 1 } },
    ],
  },
  sealMercy: {
    chapter: 4,
    speaker: "郑昭仪",
    location: "含元殿",
    mood: "tense",
    text: "郑昭仪伏罪，旧皇后病重交出凤印。满殿都在看你成为中宫后的第一道懿旨。",
    choices: [
      { text: "重整掖庭名册，禁私刑，立女官复核制度", next: "sealEnd", score: 2, delta: { ally: 2, favor: 1 } },
      { text: "不接凤印，请立女官院总领六宫文簿", ending: "officialPower", rescueFlag: "ledgerCopy", fallbackEnding: "exile", delta: { ally: 1 } },
      { text: "与杨贵妃结盟，先以贵妃身份分掌六宫", ending: "consortAlly", rescueFlag: "yangInterest", fallbackEnding: "lake", delta: { favor: 1 } },
      { text: "请皇帝即刻废后立新，不必再问群臣", ending: "lake", delta: { suspicion: 5 } },
    ],
  },
  sealEnd: { chapter: 4, speaker: "册礼官", location: "含元殿", mood: "win", checkpoint: true, final: true },
};

const state = {
  playerName: "",
  chapter: 0,
  node: "gateStart",
  step: 1,
  chapterScore: 0,
  favor: 0,
  suspicion: 0,
  wit: 0,
  ally: 0,
  flags: {},
  visibleChoices: [],
  ended: false,
};

const els = {
  startScreen: document.getElementById("startScreen"),
  nameForm: document.getElementById("nameForm"),
  playerName: document.getElementById("playerName"),
  continueGame: document.getElementById("continueGame"),
  shell: document.querySelector(".stage"),
  title: document.getElementById("chapterTitle"),
  speaker: document.getElementById("speakerName"),
  rank: document.getElementById("rankName"),
  location: document.getElementById("locationName"),
  address: document.getElementById("addressName"),
  portrait: document.getElementById("portrait"),
  turn: document.getElementById("turnCount"),
  story: document.getElementById("storyText"),
  choices: document.getElementById("choices"),
  archive: document.getElementById("archiveText"),
  musicToggle: document.getElementById("musicToggle"),
  speakerCard: document.getElementById("speakerCard"),
  speakerPortrait: document.getElementById("speakerPortrait"),
  speakerPortraitName: document.getElementById("speakerPortraitName"),
};

const music = {
  enabled: false,
  ctx: null,
  timer: null,
  mood: "calm",
  gain: null,
};

function clamp(value) {
  return Math.max(0, Math.min(10, value));
}

function currentChapter() {
  return chapters[state.chapter];
}

function currentRank() {
  if (state.ended && state.node === "__ending" && nodes.__ending?.rank) return nodes.__ending.rank;
  return currentChapter().rank;
}

function playerAddress(rank = currentRank()) {
  const name = state.playerName || "沈清辞";
  if (rank.includes("皇后")) return `${name}皇后`;
  return `${name}（${rank}）`;
}

function formatText(text) {
  return text
    .replaceAll("{name}", state.playerName || "沈清辞")
    .replaceAll("{address}", playerAddress())
    .replaceAll("{rank}", currentRank());
}

function applyDelta(delta = {}) {
  for (const key of ["favor", "suspicion", "wit", "ally"]) {
    state[key] = clamp(state[key] + (delta[key] || 0));
  }
}

function applyFlags(flags = {}) {
  Object.assign(state.flags, flags);
}

function choiceWorks(choice) {
  return !choice.rescueFlag || Boolean(state.flags[choice.rescueFlag]);
}

function saveCheckpoint(nextChapter) {
  localStorage.setItem(
    SAVE_KEY,
    JSON.stringify({
      playerName: state.playerName,
      chapter: nextChapter,
      favor: state.favor,
      suspicion: state.suspicion,
      wit: state.wit,
      ally: state.ally,
      flags: state.flags,
    })
  );
}

function loadCheckpoint() {
  try {
    return JSON.parse(localStorage.getItem(SAVE_KEY));
  } catch {
    return null;
  }
}

function hasSave() {
  const save = loadCheckpoint();
  return save && save.playerName && Number.isInteger(save.chapter);
}

function startGame(playerName, chapter = 0, savedStats = null) {
  const safeName = (playerName || "沈清辞").trim().slice(0, 8) || "沈清辞";
  Object.assign(state, {
    playerName: safeName,
    chapter,
    node: chapters[chapter].start,
    step: 1,
    chapterScore: 0,
    favor: savedStats?.favor || 0,
    suspicion: savedStats?.suspicion || 0,
    wit: savedStats?.wit || 0,
    ally: savedStats?.ally || 0,
    flags: { ...(savedStats?.flags || state.flags || {}) },
    visibleChoices: [],
    ended: false,
  });
  els.startScreen.classList.add("hidden");
  renderNode();
}

function restartChapter() {
  const save = loadCheckpoint();
  if (save && save.playerName === state.playerName) {
    startGame(save.playerName, Math.min(save.chapter, chapters.length - 1), save);
    return;
  }
  startGame(state.playerName, 0, { flags: {} });
}

function hardRestart() {
  localStorage.removeItem(SAVE_KEY);
  Object.assign(state, {
    playerName: "",
    chapter: 0,
    node: "gateStart",
    step: 1,
    chapterScore: 0,
    favor: 0,
    suspicion: 0,
    wit: 0,
    ally: 0,
    flags: {},
    visibleChoices: [],
    ended: false,
  });
  els.playerName.value = "";
  els.startScreen.classList.remove("hidden");
  updateContinueButton();
}

function hashText(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function orderedChoices(choices, nodeId) {
  return choices
    .map((choice, index) => ({
      choice,
      index,
      sort: hashText(`${state.playerName}|${nodeId}|${index}|${choice.text}`),
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.choice);
}

function renderCourt() {
  document.getElementById("courtList").innerHTML = court
    .map(
      (person) => `
        <div class="person">
          <div class="mini">${person.mark}</div>
          <div><strong>${person.name}</strong><span>${person.role}</span></div>
          <div class="relation">${person.relation}</div>
        </div>
      `
    )
    .join("");
}

function renderMap(activePlace) {
  document.getElementById("mapGrid").innerHTML = places
    .map(
      (place) => `
        <div class="place ${place.id === activePlace ? "active" : ""}">
          <strong>${place.name}</strong>
          <span>${place.note}</span>
        </div>
      `
    )
    .join("");
}

function renderMeters() {
  for (const key of ["favor", "suspicion", "wit", "ally"]) {
    document.getElementById(`${key}Value`).textContent = state[key];
    document.getElementById(`${key}Bar`).style.width = `${state[key] * 10}%`;
  }
  document.getElementById("scoreValue").textContent = state.chapterScore;
  document.getElementById("scoreBar").style.width = `${Math.min(100, (state.chapterScore / currentChapter().minScore) * 100)}%`;
}

function renderChapterTrack() {
  document.getElementById("chapterTrack").innerHTML = chapters
    .map((chapter, index) => {
      const status = index < state.chapter ? "已存档" : index === state.chapter ? "当前" : "未开启";
      return `
        <div class="chapter-step ${index < state.chapter ? "done" : ""} ${index === state.chapter ? "active" : ""}">
          <strong>${chapter.title}</strong>
          <span>${chapter.rank} → ${chapter.promotion}</span>
          <em>${status}</em>
        </div>
      `;
    })
    .join("");
}

function inferScene(node, chapter) {
  const location = node.location || "";
  if (location.includes("朱雀")) return "gate";
  if (location.includes("掖庭") || location.includes("通铺") || location.includes("浣衣") || location.includes("针线") || location.includes("井边")) return "yeting";
  if (location.includes("尚食") || location.includes("药柜") || location.includes("灶") || location.includes("中宫廊")) return "kitchen";
  if (location.includes("蓬莱") || location.includes("更衣")) return "penglai";
  if (location.includes("紫宸")) return "zichen";
  if (location.includes("含元")) return "hanyuan";
  return chapter.place;
}

function renderScene(node, chapter) {
  const scene = inferScene(node, chapter);
  const image = sceneAssets[scene] || sceneAssets[chapter.place] || "assets/palace-background.png";
  els.shell.style.setProperty("--scene-image", `url("${image}")`);
}

function renderSpeakerPortrait(speaker) {
  const image = portraitAssets[speaker];
  els.speakerCard.classList.toggle("hidden", !image);
  if (!image) return;
  els.speakerPortrait.style.backgroundImage = `url("${image}")`;
  els.speakerPortraitName.textContent = speaker;
}

function rankMark(rank) {
  if (rank.includes("皇后")) return "后";
  if (rank.includes("婕妤")) return "婕";
  if (rank.includes("才人")) return "才";
  if (rank.includes("女史")) return "史";
  if (rank.includes("宫女")) return "宫";
  return (state.playerName || "沈").slice(0, 1);
}

function checkpointText(node) {
  const chapter = currentChapter();
  if (state.chapterScore >= chapter.minScore) {
    if (node.final) {
      saveCheckpoint(chapters.length - 1);
      return {
        title: "终章：凤印归掌",
        speaker: "册礼官",
        rank: "皇后",
        text: endings.win.text,
        choices: [
          { text: "重新开局", hardRestart: true },
          { text: "停在皇后结局", reread: true },
          { text: "从本章重试", restartChapter: true },
        ],
      };
    }

    const nextChapter = state.chapter + 1;
    saveCheckpoint(nextChapter);
    return {
      title: "章末晋升",
      speaker: "上级女官",
      rank: chapter.promotion,
      text: `${playerAddress(chapter.promotion)}本章章分 ${state.chapterScore}，达到晋升线 ${chapter.minScore}。上级满意，将你升为${chapter.promotion}。此处已自动存档，可以进入下一章。`,
      choices: [
        { text: `进入${chapters[nextChapter].title}`, nextChapter },
        { text: "重读本章结尾", reread: true },
        { text: "从存档处继续", loadSave: true },
      ],
    };
  }

  return {
    title: "章末未晋升",
    speaker: "上级女官",
    rank: chapter.rank,
    text: `${playerAddress(chapter.rank)}本章章分 ${state.chapterScore}，未达到晋升线 ${chapter.minScore}。上级说你能活，但还不够稳。没有存档，请重走本章。`,
    choices: [
      { text: "重试本章", retryCurrent: true },
      { text: "重新开局", hardRestart: true },
      { text: "查看晋升要求", reread: true },
    ],
  };
}

function renderNode() {
  const rawNode = nodes[state.node];
  const chapter = currentChapter();
  const display = rawNode.checkpoint ? checkpointText(rawNode) : rawNode;
  const rank = display.rank || chapter.rank;
  const place = rawNode.place || chapter.place;

  els.shell.classList.toggle("ending", state.ended);
  els.shell.classList.toggle("checkpoint", Boolean(rawNode.checkpoint));
  els.title.textContent = display.title || chapter.title;
  els.speaker.textContent = display.speaker || rawNode.speaker;
  els.rank.textContent = rank;
  els.location.textContent = rawNode.location || chapter.summary;
  els.address.textContent = playerAddress(rank);
  els.portrait.textContent = rankMark(rank);
  els.turn.textContent = state.ended ? "命簿已定" : rawNode.checkpoint ? "章末判定" : `第 ${state.step} 步`;
  els.story.textContent = formatText(display.text || "");
  els.archive.textContent = state.ended
    ? "命簿已定。只能从最近章末存档或朱雀门重来。"
    : rawNode.checkpoint
      ? "章末才会自动存档；分数不够不会保存进度。"
      : `本章目标：${chapter.summary} 晋升线 ${chapter.minScore} 分。`;
  state.visibleChoices = orderedChoices(display.choices, state.node);
  els.choices.innerHTML = state.visibleChoices
    .map(
      (choice, index) => `
        <button class="choice" type="button" data-index="${index}">
          ${index + 1}. ${choice.text}
        </button>
      `
    )
    .join("");
  renderMeters();
  renderMap(place);
  renderChapterTrack();
  renderScene(rawNode, chapter);
  renderSpeakerPortrait(display.speaker || rawNode.speaker);
  setMusicMood(rawNode.mood || (rawNode.checkpoint ? "win" : "calm"));
}

function showEnding(key) {
  const ending = endings[key] || endings.exile;
  nodes.__ending = {
    chapter: state.chapter,
    speaker: "命簿",
    location: "命簿终页",
    mood: key === "win" || key === "officialPower" || key === "consortAlly" ? "win" : "danger",
    rank: ending.rank || currentChapter().rank,
    title: ending.title,
    text: ending.text,
    choices: [
      { text: "读取最近章末存档", loadSave: true },
      { text: "重新开局", hardRestart: true },
      { text: "停在结局", reread: true },
    ],
  };
  state.node = "__ending";
  state.ended = true;
  renderNode();
}

function choose(index) {
  const rawNode = nodes[state.node];
  const display = rawNode.checkpoint ? checkpointText(rawNode) : rawNode;
  const choice = state.visibleChoices[index] || display.choices[index];
  if (!choice) return;

  if (choice.hardRestart) return hardRestart();
  if (choice.restartChapter) return restartChapter();
  if (choice.retryCurrent) return startGame(state.playerName, state.chapter, state);
  if (choice.loadSave) {
    const save = loadCheckpoint();
    if (save) return startGame(save.playerName, Math.min(save.chapter, chapters.length - 1), save);
    return hardRestart();
  }
  if (Number.isInteger(choice.nextChapter)) return startGame(state.playerName, choice.nextChapter, state);
  if (choice.reread || state.ended) return renderNode();

  const works = choiceWorks(choice);
  state.chapterScore += works ? choice.rescueScore || choice.score || 0 : choice.score || 0;
  applyDelta(works ? { ...(choice.delta || {}), ...(choice.rescueDelta || {}) } : choice.delta);
  applyFlags(choice.set);
  state.step += 1;

  if (!works && choice.rescueEnding) return showEnding(choice.rescueEnding);
  if (!works && choice.fallbackEnding) return showEnding(choice.fallbackEnding);
  if (choice.ending) return showEnding(choice.ending);

  state.node = choice.next;
  renderNode();
}

function updateContinueButton() {
  const save = loadCheckpoint();
  els.continueGame.disabled = !hasSave();
  els.continueGame.textContent = save ? `读取：${save.playerName} 第${Math.min(save.chapter + 1, chapters.length)}章` : "暂无存档";
}

function setMusicMood(mood) {
  music.mood = mood;
  if (music.enabled) startMusic();
}

function startMusic() {
  if (!music.ctx) {
    music.ctx = new AudioContext();
    music.gain = music.ctx.createGain();
    music.gain.gain.value = 0.035;
    music.gain.connect(music.ctx.destination);
  }
  if (music.ctx.state === "suspended") music.ctx.resume();
  clearInterval(music.timer);
  const patterns = {
    calm: [392, 523, 587, 523, 440, 392],
    tense: [330, 349, 392, 349, 330, 294],
    danger: [220, 233, 196, 185, 196, 233],
    win: [392, 494, 587, 784, 659, 587],
  };
  let beat = 0;
  const play = () => {
    const now = music.ctx.currentTime;
    const freq = patterns[music.mood][beat % patterns[music.mood].length];
    const osc = music.ctx.createOscillator();
    const gain = music.ctx.createGain();
    osc.type = music.mood === "danger" ? "sawtooth" : "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.75, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (music.mood === "win" ? 0.55 : 0.38));
    osc.connect(gain);
    gain.connect(music.gain);
    osc.start(now);
    osc.stop(now + 0.65);
    beat += 1;
  };
  play();
  music.timer = setInterval(play, music.mood === "tense" || music.mood === "danger" ? 360 : 520);
}

function toggleMusic() {
  music.enabled = !music.enabled;
  els.musicToggle.textContent = music.enabled ? "乐声：开" : "乐声：关";
  if (music.enabled) {
    startMusic();
  } else {
    clearInterval(music.timer);
    if (music.ctx) music.ctx.suspend();
  }
}

els.nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  startGame(els.playerName.value, 0, { flags: {} });
});

els.continueGame.addEventListener("click", () => {
  const save = loadCheckpoint();
  if (save) startGame(save.playerName, Math.min(save.chapter, chapters.length - 1), save);
});

els.choices.addEventListener("click", (event) => {
  const button = event.target.closest(".choice");
  if (!button) return;
  choose(Number(button.dataset.index));
});

document.getElementById("restartTop").addEventListener("click", hardRestart);
document.getElementById("restartBottom").addEventListener("click", restartChapter);
els.musicToggle.addEventListener("click", toggleMusic);

renderCourt();
updateContinueButton();

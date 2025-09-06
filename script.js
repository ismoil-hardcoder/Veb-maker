const verbs = {
  go: ["went", "gone", "borish"],
  write: ["wrote", "written", "yozish"],
  eat: ["ate", "eaten", "yemoq"],
  sleep: ["slept", "slept", "uxlamoq"],
  drink: ["drank", "drunk", "ichmoq"],
  come: ["came", "come", "kelmoq"],
  speak: ["spoke", "spoken", "gapirmoq"],
  be: ["was/were", "been", "bo‘lish"],
  steal: ["stole", "stolen", "o‘g‘rilamoq"],
  stick: ["stuck", "stuck", "tiqilmoq"],
  strike: ["struck", "struck", "urmoq"],
  swim: ["swam", "swum", "suza olmoq"],
  take: ["took", "taken", "olmoq"],
  teach: ["taught", "taught", "o‘rgatmoq"],
  tell: ["told", "told", "aytmoq"],
  think: ["thought", "thought", "o‘ylamoq"],
  throw: ["threw", "thrown", "otmoq"],
  understand: ["understood", "understood", "tushunmoq"],
  wake: ["woke", "woken", "uyg‘otmoq"],
  wear: ["wore", "worn", "kiymoq"],
  win: ["won", "won", "yutmoq"],
  do: ["did", "done", "qilmoq"],
  see: ["saw", "seen", "ko‘rmoq"],
  find: ["found", "found", "topmoq"],
  give: ["gave", "given", "bermoq"],
  read: ["read", "read", "o‘qimoq"],
  run: ["ran", "run", "yugurmoq"],
  say: ["said", "said", "aytmoq"],
  make: ["made", "made", "qilmoq, yasamoq"],
  know: ["knew", "known", "bilmoq"],
  become: ["became", "become", "bo‘lib qolmoq"],
  show: ["showed", "shown", "ko‘rsatmoq"],
  leave: ["left", "left", "ketmoq"],
  feel: ["felt", "felt", "his qilmoq"],
  put: ["put", "put", "qo‘ymoq"],
  bring: ["brought", "brought", "keltirmoq"],
  begin: ["began", "begun", "boshlamoq"],
  keep: ["kept", "kept", "saqlamoq"],
  hold: ["held", "held", "ushlab turmoq"],
  stand: ["stood", "stood", "turmoq"],
  hear: ["heard", "heard", "eshitmoq"],
  let: ["let", "let", "ruxsat bermoq"],
  mean: ["meant", "meant", "anglatmoq"],
  set: ["set", "set", "joylashtirmoq"],
  meet: ["met", "met", "uchrashmoq"],
  pay: ["paid", "paid", "to‘lamoq"],
  sit: ["sat", "sat", "o‘tir moq"],
  lie: ["lay", "lain", "yotmoq"],
  lead: ["led", "led", "yetaklamoq"],
  grow: ["grew", "grown", "o‘smoq"],
  lose: ["lost", "lost", "yo‘qotmoq"],
  fall: ["fell", "fallen", "tushmoq"],
  send: ["sent", "sent", "jo‘natmoq"],
  build: ["built", "built", "qurmoq"],
  draw: ["drew", "drawn", "chizmoq"],
  break: ["broke", "broken", "buzmoq"],
  spend: ["spent", "spent", "sarflamoq"],
  cut: ["cut", "cut", "kesmoq"],
  rise: ["rose", "risen", "ko‘tarmoq"],
  drive: ["drove", "driven", "haydamoq"],
  buy: ["bought", "bought", "sotib olmoq"],
  choose: ["chose", "chosen", "tanlamoq"],
  fly: ["flew", "flown", "uchmoq"],
  forget: ["forgot", "forgotten", "unutmoq"],
  forgive: ["forgave", "forgiven", "kechirmoq"],
  freeze: ["froze", "frozen", "muzlamoq"],
  hide: ["hid", "hidden", "yashirmoq"],
  hit: ["hit", "hit", "urmoq"],
  hurt: ["hurt", "hurt", "jarohatlamoq"],
  lend: ["lent", "lent", "qarz bermoq"],
  ride: ["rode", "ridden", "minmoq"],
  ring: ["rang", "rung", "charmoq"],
  sell: ["sold", "sold", "sotmoq"],
  shake: ["shook", "shaken", "silkitmoq"],
  shine: ["shone", "shone", "yoritmoq"],
  shoot: ["shot", "shot", "otar"],
  shut: ["shut", "shut", "yopmoq"],
  sing: ["sang", "sung", "kuylamoq"],
  slide: ["slid", "slid", "sirpanmoq"],
  blow: ["blew", "blown", "shamol esmoq"],
  bite: ["bit", "bitten", "tishlamoq"],
  tear: ["torn", "torn", "bo'laklarga bo'lmoq"],
  have: ["had", "had", "bor"],
};

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const infoBox = document.querySelector(".info-box");

function search() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    alert("Iltimos, qidiruv so'zini kiriting!");
    return;
  }

  if (verbs[query]) {
    const [pastSimple, presentPerfect, translation] = verbs[query];
    infoBox.innerHTML = `
      <p><strong>Infinitive:</strong> ${query}</p>
      <p><strong>Past Simple:</strong> ${pastSimple}</p>
      <p><strong>Present Perfect:</strong> ${presentPerfect}</p>
      <p><strong>Tarjimasi:</strong> ${translation}</p>
    `;
  } else {
    // Agar infinitive topilmasa, ed qo'shilishi mumkinligini tekshiramiz
    if (query.endsWith("ed")) {
      infoBox.innerHTML = `<p>"${query}" so'zi - o'tgan zamon shakli yoki fe'l.</p><p>Infinitive shakli topilmadi, ehtimol -ed qo'shiladi.</p>`;
    } else {
      infoBox.innerHTML = `<p>Natija topilmadi!</p>`;
    }
  }
}

searchBtn.addEventListener("click", search);

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    search();
  }
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  infoBox.innerHTML = "";
  searchInput.focus();
});

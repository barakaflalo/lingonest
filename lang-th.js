/* ===== LingoNest — lang-th.js : Thai content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: one line per concept id (see content.js) → id|native text|Latin transliteration|pronunciation in Hebrew letters
   To add words: add the concept to content.js, then one line here (and in every other lang-xx.js). */
LINGO.registerLang('th', {
  ver: '1.5.0',
  curSym: "฿",
  alpha: [
    ["ก","ก ไก่","ג/ק רכה (גור גאי)","gor gai"],
    ["ข","ข ไข่","ק (קור קאי)","khor khai"],
    ["ฃ","ฃ ขวด","ק — לא בשימוש","khor khuat"],
    ["ค","ค ควาย","ק (קור קוואי)","khor khwai"],
    ["ฅ","ฅ คน","ק — לא בשימוש","khor khon"],
    ["ฆ","ฆ ระฆัง","ק (קור רקאנג)","khor rakhang"],
    ["ง","ง งู","נג (נגור נגו)","ngor ngu"],
    ["จ","จ จาน","ג׳ (ג׳ור ג׳אן)","jor jan"],
    ["ฉ","ฉ ฉิ่ง","צ׳ (צ׳ור צ׳ינג)","chor ching"],
    ["ช","ช ช้าง","צ׳ (צ׳ור צ׳אנג)","chor chang"],
    ["ซ","ซ โซ่","ס (סור סו)","sor so"],
    ["ฌ","ฌ เฌอ","צ׳ (נדירה)","chor choe"],
    ["ญ","ญ หญิง","י (יור יינג)","yor ying"],
    ["ฎ","ฎ ชฎา","ד (נדירה)","dor chada"],
    ["ฏ","ฏ ปฏัก","ט (נדירה)","tor patak"],
    ["ฐ","ฐ ฐาน","ט (נדירה)","thor than"],
    ["ฑ","ฑ มณโฑ","ט (נדירה)","thor montho"],
    ["ฒ","ฒ ผู้เฒ่า","ט (נדירה)","thor phu thao"],
    ["ณ","ณ เณร","נ (נדירה)","nor nen"],
    ["ด","ด เด็ก","ד (דור דק)","dor dek"],
    ["ต","ต เต่า","ט רכה (טור טאו)","tor tao"],
    ["ถ","ถ ถุง","ט (טור טונג)","thor thung"],
    ["ท","ท ทหาร","ט (טור טהאן)","thor thahan"],
    ["ธ","ธ ธง","ט (טור טונג)","thor thong"],
    ["น","น หนู","נ (נור נו)","nor nu"],
    ["บ","บ ใบไม้","ב (בור באי-מאי)","bor bai mai"],
    ["ป","ป ปลา","פּ רכה (פור פלא)","por pla"],
    ["ผ","ผ ผึ้ง","פּ (פור פאנג)","phor phueng"],
    ["ฝ","ฝ ฝา","פ (פור פא)","for fa"],
    ["พ","พ พาน","פּ (פור פאן)","phor phan"],
    ["ฟ","ฟ ฟัน","פ (פור פאן)","for fan"],
    ["ภ","ภ สำเภา","פּ (נדירה)","phor samphao"],
    ["ม","ม ม้า","מ (מור מא)","mor ma"],
    ["ย","ย ยักษ์","י (יור יאק)","yor yak"],
    ["ร","ร เรือ","ר (רור רואה)","ror ruea"],
    ["ล","ล ลิง","ל (לור לינג)","lor ling"],
    ["ว","ว แหวน","ו (וור ואן)","wor waen"],
    ["ศ","ศ ศาลา","ס (סור סאלא)","sor sala"],
    ["ษ","ษ ฤๅษี","ס (נדירה)","sor rue-si"],
    ["ส","ส เสือ","ס (סור סואה)","sor suea"],
    ["ห","ห หีบ","ה (הור היפ)","hor hip"],
    ["ฬ","ฬ จุฬา","ל (נדירה)","lor chula"],
    ["อ","อ อ่าง","א (אור אנג)","or ang"],
    ["ฮ","ฮ นกฮูก","ה (הור נוק-הוק)","hor nok huk"]
  ],
  vowels: [
    ["อะ","อะ","אַ קצר","a (short)"],
    ["อา","อา","אָא ארוך","aa (long)"],
    ["อิ","อิ","אִ קצר","i (short)"],
    ["อี","อี","אִיי ארוך","ii (long)"],
    ["อึ","อึ","אְ (u בלי לעגל שפתיים)","ue (short)"],
    ["อือ","อือ","אְאְ ארוך","uue (long)"],
    ["อุ","อุ","אֻ קצר","u (short)"],
    ["อู","อู","אוּ ארוך","uu (long)"],
    ["เอะ","เอะ","אֶ קצר","e (short)"],
    ["เอ","เอ","אֵיי ארוך","ee (long)"],
    ["แอะ","แอะ","אֶ פתוחה קצרה","ae (short)"],
    ["แอ","แอ","אֶה פתוחה ארוכה","aae (long)"],
    ["โอะ","โอะ","אוֹ קצר","o (short)"],
    ["โอ","โอ","אוֹ ארוך","oo (long)"],
    ["เอาะ","เอาะ","אוֹ פתוח קצר","aw (short)"],
    ["ออ","ออ","אוֹ פתוח ארוך","aw (long)"],
    ["เอีย","เอีย","אִיָה","ia"],
    ["เอือ","เอือ","אְאָה","uea"],
    ["อัว","อัว","אוּאָה","ua"],
    ["ไอ","ไอ","אַי","ai"],
    ["ใอ","ใอ","אַי (צורה נדירה)","ai (rare form)"],
    ["เอา","เอา","אַאוּ","ao"],
    ["อำ","อำ","אַם","am"]
  ],
  tones: [["ไมล์","mai (mid)","tone_mid","m_mile"],["ใหม่","mài (low)","tone_low","m_new"],["ไม่","mâi (falling)","tone_fall","m_not"],["ไม้","mái (high)","tone_high","m_wood"],["ไหม","mǎi (rising)","tone_rise","m_q"]],
  twister: "ไม้ใหม่ไม่ไหม้ไหม",
  /* speaker = female: [regex source, flags, replacement] */
  gender: [["ครับ","g","ค่ะ"],["ผม","g","ดิฉัน"],["\\bkhrap\\b","g","kha"],["\\bphom\\b","g","dichan"],["קראפ","g","קא"],["פום","g","דיצ׳אן"]],
  words: `hello|สวัสดีครับ|sawatdee khrap|סוואדי קראפ
bye|ลาก่อนครับ|la kon khrap|לא-גון קראפ
morning|สวัสดีตอนเช้า|sawatdee ton chao|סוואדי טון צ׳או
thanks|ขอบคุณครับ|khop khun khrap|קופ קון קראפ
please|กรุณา|karuna|גרונא
sorry|ขอโทษครับ|kho thot khrap|קו-טוט קראפ
yes|ใช่|chai|צ׳אי
no|ไม่|mai|מאי
howareyou|สบายดีไหม|sabai dee mai|סבאי די מאי
good|ดี|dee|די
ok|โอเค|okay|אוקיי
n1|หนึ่ง|nueng|נאנג
n2|สอง|song|סונג
n3|สาม|sam|סאם
n4|สี่|si|סי
n5|ห้า|ha|הא
n6|หก|hok|הוק
n7|เจ็ด|chet|ג׳ט
n8|แปด|paet|פאט
n9|เก้า|kao|גאו
n10|สิบ|sip|סיפ
water|น้ำ|nam|נאם
toilet|ห้องน้ำ|hong nam|הונג נאם
where|ที่ไหน|thi nai|טי-נאי
howmuch|เท่าไหร่|thao rai|טאו-ראי
this|อันนี้|an ni|אן-ני
friend|เพื่อน|phuean|פואן
food|อาหาร|a-han|אהאן
bread|ขนมปัง|khanom pang|קנום-פאנג
coffee|กาแฟ|kafae|גאפה
tea|ชา|cha|צ׳א
chicken|ไก่|kai|גאי
fish|ปลา|pla|פלא
rice|ข้าว|khao|קאו
beer|เบียร์|bia|ביא
bill|เช็คบิล|chek bin|צ׳ק בין
tasty|อร่อย|aroi|ארוי
taxi|แท็กซี่|thaeksi|טקסי
bus|รถเมล์|rot me|רוט-מה
train|รถไฟ|rot fai|רוט-פאי
airport|สนามบิน|sanam bin|סנאם-בין
hotel|โรงแรม|rong raem|רונג-רם
left|ซ้าย|sai|סאי
right|ขวา|khwa|קווא
straight|ตรงไป|trong pai|טרונג-פאי
stop|หยุด|yut|יוט
ticket|ตั๋ว|tua|טואה
money|เงิน|ngoen|נגן
expensive|แพง|phaeng|פנג
cheap|ถูก|thuk|טוק
market|ตลาด|talat|טלאט
pharmacy|ร้านขายยา|ran khai ya|ראן-קאי-יא
open|เปิด|poet|פוט
closed|ปิด|pit|פיט
help|ช่วยด้วย|chuai duai|צ׳ואי דואי
police|ตำรวจ|tamruat|טאמרואט
doctor|หมอ|mo|מו
hospital|โรงพยาบาล|rong phayaban|רונג-פיאבאן
today|วันนี้|wan ni|וואן-ני
tomorrow|พรุ่งนี้|phrung ni|פרונג-ני
yesterday|เมื่อวาน|muea wan|מואה-וואן
now|ตอนนี้|ton ni|טון-ני
p_toilet|ห้องน้ำอยู่ที่ไหนครับ|hong nam yu thi nai khrap|הונג נאם יו טי-נאי קראפ
p_cost|ราคาเท่าไหร่ครับ|ra-kha thao rai khrap|ראקא טאו-ראי קראפ
p_nounder|ผมไม่เข้าใจครับ|phom mai khao jai khrap|פום מאי קאו-ג׳אי קראפ
p_english|คุณพูดภาษาอังกฤษได้ไหมครับ|khun phut phasa angkrit dai mai khrap|קון פוט פאסא אנגקריט דאי מאי קראפ
p_slow|พูดช้าๆ หน่อยครับ|phut cha cha noi khrap|פוט צ׳א-צ׳א נוי קראפ
p_bill|เช็คบิลด้วยครับ|chek bin duai khrap|צ׳ק בין דואי קראפ
p_want|ผมเอาอันนี้ครับ|phom ao an ni khrap|פום או אן-ני קראפ
p_expensive|แพงไปครับ|phaeng pai khrap|פנג פאי קראפ
p_discount|ลดได้ไหมครับ|lot dai mai khrap|לוט דאי מאי קראפ
p_address|ไปที่อยู่นี้ครับ|pai thi yu ni khrap|פאי טי-יו ני קראפ
p_hotel|โรงแรมอยู่ที่ไหนครับ|rong raem yu thi nai khrap|רונג-רם יו טי-נאי קראפ
p_doctor|ผมต้องการหมอครับ|phom tongkan mo khrap|פום טונג-גאן מו קראפ
p_police|เรียกตำรวจด้วยครับ|riak tamruat duai khrap|ריאק טאמרואט דואי קראפ
p_israel|ผมมาจากอิสราเอลครับ|phom ma chak Israel khrap|פום מא ג׳אק איסראל קראפ
p_name|ผมชื่อ ... ครับ|phom chue ... khrap|פום צ׳ו ... קראפ
p_nice|ยินดีที่ได้รู้จักครับ|yin di thi dai ru chak khrap|יין-די טי דאי רו-ג׳אק קראפ
p_water|ขอน้ำหน่อยครับ|kho nam noi khrap|קו נאם נוי קראפ
p_help|ช่วยผมได้ไหมครับ|chuai phom dai mai khrap|צ׳ואי פום דאי מאי קראפ
p_what|นี่คืออะไรครับ|ni khue arai khrap|ני קו אראי קראפ
p_nospicy|ไม่เผ็ดครับ|mai phet khrap|מאי פט קראפ
egg|ไข่|khai|קאי
fruit|ผลไม้|phonlamai|פונלאמאי
veg|ผัก|phak|פאק
meat|เนื้อ|nuea|נואה
milk|นม|nom|נום
spicy|เผ็ด|phet|פט
restaurant|ร้านอาหาร|ran a-han|ראן אהאן
ice|น้ำแข็ง|nam khaeng|נאם קאנג
room|ห้อง|hong|הונג
key|กุญแจ|kunjae|גונג׳ה
bed|เตียง|tiang|טיאנג
shower|ฝักบัว|fak bua|פאק בואה
towel|ผ้าเช็ดตัว|pha chet tua|פא צ׳ט טואה
passport|พาสปอร์ต|phatsapot|פאססאפוט
n0|ศูนย์|sun|סון
n20|ยี่สิบ|yi sip|יי-סיפ
n50|ห้าสิบ|ha sip|הא-סיפ
n100|หนึ่งร้อย|nueng roi|נאנג רוי
n1000|หนึ่งพัน|nueng phan|נאנג פאן
mon|วันจันทร์|wan chan|וואן ג׳אן
tue|วันอังคาร|wan angkhan|וואן אנגקאן
wed|วันพุธ|wan phut|וואן פוט
thu|วันพฤหัสบดี|wan pharuehat|וואן פרוהאט
fri|วันศุกร์|wan suk|וואן סוק
sat|วันเสาร์|wan sao|וואן סאו
sun|วันอาทิตย์|wan athit|וואן אטיט
red|สีแดง|si daeng|סי דאנג
blue|สีฟ้า|si fa|סי פא
green|สีเขียว|si khiao|סי קיאו
yellow|สีเหลือง|si lueang|סי לואנג
black|สีดำ|si dam|סי דאם
white|สีขาว|si khao|סי קאו
man|ผู้ชาย|phu chai|פו צ׳אי
woman|ผู้หญิง|phu ying|פו יינג
child|เด็ก|dek|דק
family|ครอบครัว|khrop khrua|קרופ קרואה
i|ผม|phom|פום
you|คุณ|khun|קון
head|หัว|hua|הואה
stomach|ท้อง|thong|טונג
hand|มือ|mue|מו
pain|เจ็บ|chep|ג׳פ
medicine|ยา|ya|יא
sick|ป่วย|puai|פואי
big|ใหญ่|yai|יאי
small|เล็ก|lek|לק
hot|ร้อน|ron|רון
cold|หนาว|nao|נאו
bad|ไม่ดี|mai di|מאי די
beautiful|สวย|suai|סואי
eat|กิน|kin|גין
drink|ดื่ม|duem|דום
go|ไป|pai|פאי
buy|ซื้อ|sue|סו
speak|พูด|phut|פוט
sleep|นอน|non|נון
understand|เข้าใจ|khao jai|קאו-ג׳אי
c_table|โต๊ะสำหรับสองคนครับ|to samrap song khon khrap|טו סאמראפ סונג קון קראפ
c_menu|ขอเมนูหน่อยครับ|kho menu noi khrap|קו מנו נוי קראפ
c_noice|ไม่ใส่น้ำแข็งครับ|mai sai nam khaeng khrap|מאי סאי נאם קאנג קראפ
c_nomeat|ผมไม่กินเนื้อสัตว์ครับ|phom mai kin nuea sat khrap|פום מאי גין נואה סאט קראפ
c_allergy|ผมแพ้ถั่วครับ|phom phae thua khrap|פום פה טואה קראפ
c_delicious|อร่อยมาก!|aroi mak|ארוי מאק
c_reserv|ผมจองไว้แล้วครับ|phom chong wai laeo khrap|פום ג׳ונג ואי לאו קראפ
c_wifi|รหัสไวไฟคืออะไรครับ|rahat wai fai khue arai khrap|ראהאט ואי-פאי קו אראי קראפ
c_checkout|เช็คเอาท์กี่โมงครับ|chek ao ki mong khrap|צ׳ק-אאו גי מונג קראפ
c_howget|ไปที่นั่นยังไงครับ|pai thi nan yang ngai khrap|פאי טי-נאן יאנג-נגאי קראפ
c_stophere|จอดตรงนี้ครับ|chot trong ni khrap|ג׳וט טרונג-ני קראפ
c_far|ไกลไหมครับ|klai mai khrap|גלאי מאי קראפ
c_card|จ่ายด้วยบัตรได้ไหมครับ|chai duai bat dai mai khrap|ג׳אי דואי באט דאי מאי קראפ
c_looking|ดูเฉยๆ ครับ ขอบคุณครับ|du choei choei khrap, khop khun khrap|דו צ׳ואי-צ׳ואי קראפ, קופ קון קראפ
c_yourname|คุณชื่ออะไรครับ|khun chue arai khrap|קון צ׳ו אראי קראפ
c_wherefrom|คุณมาจากไหนครับ|khun ma chak nai khrap|קון מא ג׳אק נאי קראפ
c_seeyou|แล้วเจอกันครับ|laeo choe kan khrap|לאו ג׳ה גאן קראפ
c_cheers|ชนแก้ว!|chon kaeo|צ׳ון גאו
c_lost|ผมหลงทางครับ|phom long thang khrap|פום לונג טאנג קראפ
c_passport|ผมทำพาสปอร์ตหายครับ|phom tham phatsapot hai khrap|פום טאם פאססאפוט האי קראפ
c_hurts|เจ็บตรงนี้ครับ|chep trong ni khrap|ג׳פ טרונג-ני קראפ
c_time|กี่โมงแล้วครับ|ki mong laeo khrap|גי מונג לאו קראפ
c_again|พูดอีกครั้งได้ไหมครับ|phut ik khrang dai mai khrap|פוט איק קראנג דאי מאי קראפ
c_write|เขียนให้หน่อยได้ไหมครับ|khian hai noi dai mai khrap|קיאן האי נוי דאי מאי קראפ
n11|สิบเอ็ด|sip et|סיפ-אט
n12|สิบสอง|sip song|סיפ-סונג
n13|สิบสาม|sip sam|סיפ-סאם
n14|สิบสี่|sip si|סיפ-סי
n15|สิบห้า|sip ha|סיפ-הא
n16|สิบหก|sip hok|סיפ-הוק
n17|สิบเจ็ด|sip chet|סיפ-ג׳ט
n18|สิบแปด|sip paet|סיפ-פאט
n19|สิบเก้า|sip kao|סיפ-גאו
n30|สามสิบ|sam sip|סאם-סיפ
n40|สี่สิบ|si sip|סי-סיפ
n60|หกสิบ|hok sip|הוק-סיפ
n70|เจ็ดสิบ|chet sip|ג׳ט-סיפ
n80|แปดสิบ|paet sip|פאט-סיפ
n90|เก้าสิบ|kao sip|גאו-סיפ
n200|สองร้อย|song roi|סונג רוי
n500|ห้าร้อย|ha roi|הא רוי
n10000|หนึ่งหมื่น|nueng muen|נאנג מון
t_morning|ตอนเช้า|ton chao|טון צ׳או
t_evening|ตอนเย็น|ton yen|טון יין
t_night|กลางคืน|klang khuen|גלאנג קון
t_week|สัปดาห์|sapda|סאפדא
t_month|เดือน|duean|דואן
t_year|ปี|pi|פי
t_hour|ชั่วโมง|chua mong|צ׳ואה-מונג
t_minute|นาที|nathi|נאטי
dog|หมา|ma|מא
cat|แมว|maeo|מאו
bird|นก|nok|נוק
horse|ม้า|ma|מא
cow|วัว|wua|וואה
pig|หมู|mu|מו
elephant|ช้าง|chang|צ׳אנג
monkey|ลิง|ling|לינג
snake|งู|ngu|נגו
mosquito|ยุง|yung|יונג
lion|สิงโต|singto|סינג-טו
duck|เป็ด|pet|פט
apple|แอปเปิ้ล|appoen|אפ-פן
banana|กล้วย|kluai|גלואי
orange|ส้ม|som|סום
mango|มะม่วง|mamuang|מה-מואנג
pineapple|สับปะรด|sapparot|סאפ-פה-רוט
watermelon|แตงโม|taeng mo|טנג-מו
coconut|มะพร้าว|maphrao|מה-פראו
grapes|องุ่น|a-ngun|אה-נגון
lemon|มะนาว|manao|מה-נאו
strawberry|สตรอเบอร์รี่|satroboeri|סטרוברי
papaya|มะละกอ|malako|מה-לה-גו
tomato|มะเขือเทศ|makhuea thet|מה-קואה-טט
potato|มันฝรั่ง|man farang|מאן-פרנג
onion|หัวหอม|hua hom|הואה-הום
garlic|กระเทียม|krathiam|גרה-טיאם
cucumber|แตงกวา|taeng kwa|טנג-גווא
carrot|แครอท|khaerot|קה-רוט
chili|พริก|phrik|פריק
corn|ข้าวโพด|khao phot|קאו-פוט
mushroom|เห็ด|het|הט
lettuce|ผักกาดหอม|phak kat hom|פאק-גאט-הום
eggplant|มะเขือ|makhuea|מה-קואה
soup|ซุป|sup|סופ
salad|สลัด|salat|סלאט
noodles|ก๋วยเตี๋ยว|kuai tiao|גואי-טיאו
cheese|ชีส|chit|צ׳יס
butter|เนย|noei|נוי
salt|เกลือ|kluea|גלואה
sugar|น้ำตาล|namtan|נאם-טאן
cake|เค้ก|khek|קק
icecream|ไอศกรีม|aisakrim|איי-סה-קרים
juice|น้ำผลไม้|nam phonlamai|נאם פונלאמאי
wine|ไวน์|wai|ואי
breakfast|อาหารเช้า|a-han chao|אהאן צ׳או
lunch|อาหารกลางวัน|a-han klang wan|אהאן גלאנג-וואן
dinner|อาหารเย็น|a-han yen|אהאן יין
fork|ส้อม|som|סום
spoon|ช้อน|chon|צ׳ון
knife|มีด|mit|מיט
glass|แก้ว|kaeo|גאו
plate|จาน|chan|ג׳אן
bank|ธนาคาร|thanakhan|טה-נא-קאן
atm|ตู้เอทีเอ็ม|tu ATM|טו אי-טי-אם
beach|ชายหาด|chai hat|צ׳אי-האט
museum|พิพิธภัณฑ์|phiphitthaphan|פי-פיט-טה-פאן
temple|วัด|wat|וואט
street|ถนน|thanon|טה-נון
city|เมือง|mueang|מואנג
shop|ร้าน|ran|ראן
supermarket|ซูเปอร์มาร์เก็ต|supermarket|סופר-מרקט
park|สวนสาธารณะ|suan satharana|סואן סא-טא-רה-נה
station|สถานี|sathani|סה-טא-ני
embassy|สถานทูต|sathan thut|סה-טאן-טוט
phone|โทรศัพท์|thorasap|טו-רה-סאפ
charger|ที่ชาร์จ|thi chat|טי-צ׳ארט
bag|กระเป๋า|krapao|גרה-פאו
shoes|รองเท้า|rong thao|רונג-טאו
clothes|เสื้อผ้า|suea pha|סואה-פא
hat|หมวก|muak|מואק
glasses|แว่นตา|waen ta|ואן-טא
map|แผนที่|phaen thi|פאן-טי
sunscreen|ครีมกันแดด|khrim kan daet|קרים גאן-דאט
umbrella|ร่ม|rom|רום
come|มา|ma|מא
want|อยาก|yak|יאק
need|ต้องการ|tongkan|טונג-גאן
know|รู้|ru|רו
see|เห็น|hen|הן
hear|ได้ยิน|dai yin|דאי-יין
give|ให้|hai|האי
take|เอา|ao|או
pay|จ่าย|chai|ג׳אי
wait|รอ|ro|רו
walk|เดิน|doen|דון
read|อ่าน|an|אן
write|เขียน|khian|קיאן
love|รัก|rak|ראק
work|ทำงาน|tham ngan|טאם-נגאן
swim|ว่ายน้ำ|wai nam|ואי-נאם
new|ใหม่|mai|מאי
old|เก่า|kao|גאו
fast|เร็ว|reo|ריאו
slow|ช้า|cha|צ׳א
near|ใกล้|klai|גלאי
far_a|ไกล|klai|גלאי
clean|สะอาด|sa-at|סה-אאט
dirty|สกปรก|sokkaprok|סוק-גה-פרוק
tired|เหนื่อย|nueai|נואי
hungry|หิว|hiu|היו
thirsty|หิวน้ำ|hiu nam|היו נאם
happy|มีความสุข|mi khwam suk|מי קוואם סוק
sad|เศร้า|sao|סאו
easy|ง่าย|ngai|נגאי
difficult|ยาก|yak|יאק
many|เยอะ|yoe|יה
sf_order|ขอสั่งอาหารครับ|kho sang a-han khrap|קו סאנג אהאן קראפ
sf_recommend|มีอะไรแนะนำไหมครับ|mi arai nae nam mai khrap|מי אראי נה-נאם מאי קראפ
sf_bottle|ขอน้ำเปล่าขวดหนึ่งครับ|kho nam plao khuat nueng khrap|קו נאם פלאו קואט נאנג קראפ
sf_isspicy|อันนี้เผ็ดไหมครับ|an ni phet mai khrap|אן-ני פט מאי קראפ
sf_onemore|ขออีกอันครับ|kho ik an khrap|קו איק אן קראפ
sf_nosugar|ไม่ใส่น้ำตาลครับ|mai sai namtan khrap|מאי סאי נאם-טאן קראפ
sf_takeaway|ใส่ถุงกลับบ้านครับ|sai thung klap ban khrap|סאי טונג גלאפ באן קראפ
ss_smaller|มีไซส์เล็กกว่านี้ไหมครับ|mi sai lek kwa ni mai khrap|מי סאי לק גווא ני מאי קראפ
ss_try|ลองได้ไหมครับ|long dai mai khrap|לונג דאי מאי קראפ
ss_two|เอาสองอันครับ|ao song an khrap|או סונג אן קראפ
ss_change|มีเงินทอนไหมครับ|mi ngoen thon mai khrap|מי נגן טון מאי קראפ
ss_last|ราคาสุดท้ายเท่าไหร่ครับ|ra-kha sut thai thao rai khrap|ראקא סוט-טאי טאו-ראי קראפ
ss_bag|ขอถุงหน่อยครับ|kho thung noi khrap|קו טונג נוי קראפ
sm_busstop|ป้ายรถเมล์อยู่ที่ไหนครับ|pai rot me yu thi nai khrap|פאי רוט-מה יו טי-נאי קראפ
sm_trainleave|รถไฟออกกี่โมงครับ|rot fai ok ki mong khrap|רוט-פאי אוק גי מונג קראפ
sm_oneticket|ขอตั๋วหนึ่งใบครับ|kho tua nueng bai khrap|קו טואה נאנג באי קראפ
sm_howlong|ใช้เวลานานไหมครับ|chai wela nan mai khrap|צ׳אי ולא נאן מאי קראפ
sm_meter|เปิดมิเตอร์ด้วยครับ|poet mitoe duai khrap|פוט מיטר דואי קראפ
sm_slowdrive|ขับช้าๆ หน่อยครับ|khap cha cha noi khrap|קאפ צ׳א-צ׳א נוי קראפ
sm_airport|ไปสนามบินครับ|pai sanam bin khrap|פאי סנאם-בין קראפ
sh_leavebag|ฝากกระเป๋าไว้ที่นี่ได้ไหมครับ|fak krapao wai thi ni dai mai khrap|פאק גרה-פאו ואי טי-ני דאי מאי קראפ
sh_ac|แอร์เสียครับ|ae sia khrap|אה סיא קראפ
sh_breakfast|รวมอาหารเช้าไหมครับ|ruam a-han chao mai khrap|רואם אהאן צ׳או מאי קראפ
sh_towel|ขอผ้าเช็ดตัวอีกผืนครับ|kho pha chet tua ik phuen khrap|קו פא צ׳ט טואה איק פון קראפ
sh_taxi|ช่วยเรียกแท็กซี่ให้หน่อยได้ไหมครับ|chuai riak thaeksi hai noi dai mai khrap|צ׳ואי ריאק טקסי האי נוי דאי מאי קראפ
sh_late|เช็คเอาท์ช้าหน่อยได้ไหมครับ|chek ao cha noi dai mai khrap|צ׳ק-אאו צ׳א נוי דאי מאי קראפ
so_learning|ผมกำลังเรียนภาษาไทยครับ|phom kamlang rian phasa thai khrap|פום גאם-לאנג ריאן פאסא טאי קראפ
so_thankshelp|ขอบคุณมากที่ช่วยครับ|khop khun mak thi chuai khrap|קופ קון מאק טי צ׳ואי קראפ
so_photo|ช่วยถ่ายรูปให้หน่อยได้ไหมครับ|chuai thai rup hai noi dai mai khrap|צ׳ואי טאי רופ האי נוי דאי מאי קראפ
so_like|ผมชอบที่นี่ครับ|phom chop thi ni khrap|פום צ׳ופ טי-ני קראפ
so_vacation|ผมมาเที่ยวครับ|phom ma thiao khrap|פום מא טיאו קראפ
so_howsay|อันนี้ภาษาไทยเรียกว่าอะไรครับ|an ni phasa thai riak wa arai khrap|אן-ני פאסא טאי ריאק ווא אראי קראפ
so_noproblem|ไม่เป็นไรครับ|mai pen rai khrap|מאי פן ראי קראפ
so_beautiful|สวยมากครับ!|suai mak khrap|סואי מאק קראפ
sp_unwell|ผมไม่สบายครับ|phom mai sabai khrap|פום מאי סבאי קראפ
sp_nearhosp|โรงพยาบาลที่ใกล้ที่สุดอยู่ที่ไหนครับ|rong phayaban thi klai thi sut yu thi nai khrap|רונג-פיאבאן טי גלאי טי-סוט יו טי-נאי קראפ
sp_fever|ผมมีไข้ครับ|phom mi khai khrap|פום מי קאי קראפ
sp_helpme|ช่วยผมด้วยครับ|chuai phom duai khrap|צ׳ואי פום דואי קראפ
sp_stolen|กระเป๋าผมถูกขโมยครับ|krapao phom thuk khamoi khrap|גרה-פאו פום טוק קה-מוי קראפ
sp_embassy|ผมต้องการไปสถานทูตอิสราเอลครับ|phom tongkan pai sathan thut Israel khrap|פום טונג-גאן פאי סה-טאן-טוט איסראל קראפ
dt1|ไปไหนคะ|pai nai kha|פאי נאי קא
dt2|ไปโรงแรมนี้ครับ|pai rong raem ni khrap|פאי רונג-רם ני קראפ
dt3|ได้ค่ะ ขึ้นมาเลยค่ะ|dai kha, khuen ma loei kha|דאי קא, קון מא לוי קא
dt4|เท่าไหร่ครับ|thao rai khrap|טאו-ראי קראפ
dt5|สองร้อยค่ะ|song roi kha|סונג רוי קא
dt6|เปิดมิเตอร์หน่อยครับ|poet mitoe noi khrap|פוט מיטר נוי קראפ
dt7|ได้เลยค่ะ|dai loei kha|דאי לוי קא
dt8|จอดตรงนี้ครับ ขอบคุณครับ|chot trong ni khrap, khop khun khrap|ג׳וט טרונג-ני קראפ, קופ קון קראפ
dm1|อันนี้เท่าไหร่ครับ|an ni thao rai khrap|אן-ני טאו-ראי קראפ
dm2|สามร้อยค่ะ|sam roi kha|סאם רוי קא
dm3|แพงไปครับ สองร้อยได้ไหมครับ|phaeng pai khrap, song roi dai mai khrap|פנג פאי קראפ, סונג רוי דאי מאי קראפ
dm4|สองร้อยห้าสิบค่ะ ราคาสุดท้ายค่ะ|song roi ha sip kha, ra-kha sut thai kha|סונג רוי הא-סיפ קא, ראקא סוט-טאי קא
dm5|โอเค เอาครับ|okay, ao khrap|אוקיי, או קראפ
dm6|ขอบคุณมากค่ะ|khop khun mak kha|קופ קון מאק קא
dr1|กี่ท่านคะ|ki than kha|גי טאן קא
dr2|สองคนครับ|song khon khrap|סונג קון קראפ
dr3|จะสั่งอะไรคะ|cha sang arai kha|ג׳ה סאנג אראי קא
dr4|ข้าวผัดไก่ ไม่เผ็ดครับ|khao phat kai, mai phet khrap|קאו פאט גאי, מאי פט קראפ
dr5|ดื่มอะไรคะ|duem arai kha|דום אראי קא
dr6|น้ำเปล่าครับ|nam plao khrap|נאם פלאו קראפ
dr7|เก็บเงินด้วยครับ|kep ngoen duai khrap|גפ נגן דואי קראפ
dh1|สวัสดีครับ ผมจองห้องไว้ครับ|sawatdee khrap, phom chong hong wai khrap|סוואדי קראפ, פום ג׳ונג הונג ואי קראפ
dh2|ชื่ออะไรคะ|chue arai kha|צ׳ו אראי קא
dh3|ชื่อ ... ครับ|chue ... khrap|צ׳ו ... קראפ
dh4|ขอพาสปอร์ตด้วยค่ะ|kho phatsapot duai kha|קו פאססאפוט דואי קא
dh5|ห้องสามศูนย์ห้าค่ะ|hong sam sun ha kha|הונג סאם סון הא קא
dh6|อาหารเช้ากี่โมงครับ|a-han chao ki mong khrap|אהאן צ׳או גי מונג קראפ
dh7|เจ็ดโมงถึงสิบโมงค่ะ|chet mong thueng sip mong kha|ג׳ט מונג טונג סיפ מונג קא
dd1|ขอโทษครับ สถานีอยู่ที่ไหนครับ|kho thot khrap, sathani yu thi nai khrap|קו-טוט קראפ, סה-טא-ני יו טי-נאי קראפ
dd2|ตรงไปแล้วเลี้ยวซ้ายค่ะ|trong pai laeo liao sai kha|טרונג-פאי לאו ליאו סאי קא
dd3|ไกลจากที่นี่ไหมครับ|klai chak thi ni mai khrap|גלאי ג׳אק טי-ני מאי קראפ
dd4|ไม่ไกลค่ะ เดินห้านาทีค่ะ|mai klai kha, doen ha nathi kha|מאי גלאי קא, דון הא נאטי קא
dd5|ขอบคุณมากครับ|khop khun mak khrap|קופ קון מאק קראפ
w_weather|อากาศ|akat|אה-גאט
w_sun|พระอาทิตย์|phra athit|פרה-אה-טיט
w_rain|ฝน|fon|פון
w_wind|ลม|lom|לום
w_cloud|เมฆ|mek|מק
w_snow|หิมะ|hima|הי-מה
w_storm|พายุ|phayu|פא-יו
w_humid|ชื้น|chuen|צ׳ון
j_teacher|ครู|khru|קרו
j_driver|คนขับรถ|khon khap rot|קון קאפ רוט
j_waiter|พนักงานเสิร์ฟ|phanakngan soep|פה-נאק-נגאן סרף
j_cook|พ่อครัว|pho khrua|פו קרואה
j_student|นักศึกษา|nak sueksa|נאק סוק-סא
j_engineer|วิศวกร|witsawakon|ויט-סה-וה-גון
j_nurse|พยาบาล|phayaban|פה-יא-באן
j_seller|คนขาย|khon khai|קון קאי
j_guide|ไกด์|kai|גאי
j_pharmacist|เภสัชกร|phesatchakon|פה-סאט-צ׳ה-גון
e_angry|โกรธ|krot|גרוט
e_scared|กลัว|klua|גלואה
e_bored|เบื่อ|buea|בואה
e_worried|กังวล|kangwon|גאנג-וון
e_surprised|ประหลาดใจ|pralat chai|פרה-לאט ג׳אי
e_calm|ใจเย็น|chai yen|ג׳אי יין
e_excited|ตื่นเต้น|tuen ten|טון-טן
e_love|ตกหลุมรัก|tok lum rak|טוק לום ראק
dir_north|เหนือ|nuea|נואה
dir_south|ใต้|tai|טאי
dir_east|ตะวันออก|tawan ok|טה-וואן-אוק
dir_west|ตะวันตก|tawan tok|טה-וואן-טוק
dir_corner|หัวมุม|hua mum|הואה-מום
dir_light|ไฟแดง|fai daeng|פאי-דאנג
dir_behind|ข้างหลัง|khang lang|קאנג-לאנג
dir_front|ข้างหน้า|khang na|קאנג-נא
dir_next|ข้างๆ|khang khang|קאנג-קאנג
dir_back|ถอยหลัง|thoi lang|טוי-לאנג
dir_up|ข้างบน|khang bon|קאנג-בון
dir_down|ข้างล่าง|khang lang|קאנג-לאנג`
});

/* ---- numbers & prices (0–999,999) → tokens [text, roman, hebrew] ---- */
/* ---- Thai ---- */
NW.th = (() => {
  const D = [['ศูนย์','sun','סון'],['หนึ่ง','nueng','נאנג'],['สอง','song','סונג'],['สาม','sam','סאם'],['สี่','si','סי'],['ห้า','ha','הא'],['หก','hok','הוק'],['เจ็ด','chet','ג׳ט'],['แปด','paet','פאט'],['เก้า','kao','גאו']];
  const U = [['แสน','saen','סאן'],['หมื่น','muen','מון'],['พัน','phan','פאן'],['ร้อย','roi','רוי'],['สิบ','sip','סיפ']];
  return n => {
    if (n === 0) return [tk(...D[0])];
    const s = String(n).padStart(6, '0'), out = [];
    for (let i = 0; i < 6; i++) {
      const d = +s[i]; if (!d) continue;
      if (i === 4) { if (d === 2) out.push(tk('ยี่', 'yi', 'יי')); else if (d !== 1) out.push(tk(...D[d])); out.push(tk(...U[4])); }
      else if (i === 5) { if (d === 1 && n > 9) out.push(tk('เอ็ด', 'et', 'אט')); else out.push(tk(...D[d])); }
      else { out.push(tk(...D[d]), tk(...U[i])); }
    }
    return out;
  };
})();
NW.thCur = () => tk('บาท', 'baht', 'באט');
NUM.th = { sep: '', tokens: (n, cur) => cur ? NW.th(n).concat([[' บาท', 'baht', 'באט']]) : NW.th(n) };

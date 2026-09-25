/* ===== LingoNest — lang-pt.js : Portuguese (Brazil) content pack =====
   Alphabet rows: [display, text-to-speak, sound in Hebrew letters, Latin name]
   Words: id|native text|Latin transliteration|pronunciation in Hebrew letters (one line per concept in content.js) */
LINGO.registerLang('pt', {
  ver: '1.13.0',
  curSym: "R$",
  country: {"he": "ברזיל ופורטוגל", "en": "Brazil & Portugal", "ru": "Бразилия и Португалия", "es": "Brasil y Portugal", "ar": "البرازيل والبرتغال"},
  emergency: [
    ["🇧🇷", {"he": "ברזיל — משטרה", "en": "Brazil — police", "ru": "Бразилия — полиция", "es": "Brasil — policía", "ar": "البرازيل — الشرطة"}, "190"],
    ["🚑", {"he": "ברזיל — אמבולנס (SAMU)", "en": "Brazil — ambulance (SAMU)", "ru": "Бразилия — скорая (SAMU)", "es": "Brasil — ambulancia (SAMU)", "ar": "البرازيل — الإسعاف (SAMU)"}, "192"],
    ["🚒", {"he": "ברזיל — כבאות", "en": "Brazil — fire", "ru": "Бразилия — пожарные", "es": "Brasil — bomberos", "ar": "البرازيل — الإطفاء"}, "193"],
    ["🇵🇹", {"he": "פורטוגל — חירום", "en": "Portugal — emergency", "ru": "Португалия — экстренная служба", "es": "Portugal — emergencias", "ar": "البرتغال — الطوارئ"}, "112"]
  ],
  tips: [
    {"t": {"he": "ברזילאית מול פורטוגלית", "en": "Brazil vs. Portugal"}, "b": {"he": "זו אותה שפה, אבל ההגייה שונה מאוד: בפורטוגל מדברים מהר ו\"בולעים\" תנועות, בברזיל פתוח ומוזיקלי. בברזיל אומרים você (אתה), בפורטוגל tu. גם מילים משתנות: אוטובוס = ônibus בברזיל, autocarro בפורטוגל. יבינו אותך בשתיהן.", "en": "Same language, very different sound: Portugal is fast and swallows vowels, Brazil is open and musical. Brazil says você, Portugal tu. Words differ too: bus = ônibus (BR) / autocarro (PT). You'll be understood in both."}, "ex": [["Você fala inglês?", "", "ווסה פאלה אינגלס", "אתה מדבר אנגלית?", "Do you speak English?"]]},
    {"t": {"he": "Obrigado / Obrigada", "en": "Obrigado / Obrigada"}, "b": {"he": "\"תודה\" משתנה לפי מי שאומר: גבר אומר obrigado, אישה אומרת obrigada — לא משנה למי מודים. בהגדרות אפשר לבחור לשון נקבה וכל המשפטים יתעדכנו.", "en": "\"Thank you\" depends on the speaker: men say obrigado, women say obrigada — regardless of who you thank. Choose your form in Settings."}, "ex": [["Muito obrigado", "", "מוינטו אובריגאדו", "תודה רבה (גבר)", "Thank you very much (man)"], ["Muito obrigada", "", "מוינטו אובריגאדה", "תודה רבה (אישה)", "Thank you very much (woman)"]]},
    {"t": {"he": "צלילי אף: ão, ã, em", "en": "Nasal sounds: ão, ã, em"}, "b": {"he": "הסימן ~ אומר שהאוויר יוצא גם מהאף: não = נאון, pão = פאון, mãe = מאין. זה הצליל הכי \"פורטוגזי\" — שווה להקשיב ולחקות עם 🐢.", "en": "The ~ means air through the nose: não, pão, mãe. The most \"Portuguese\" sound — listen and copy with 🐢."}, "ex": [["Não", "", "נאון", "לא", "No"], ["O pão", "", "או פאון", "הלחם", "The bread"]]},
    {"t": {"he": "R בהתחלה = ה", "en": "Initial R = h"}, "b": {"he": "בברזיל r בתחילת מילה, rr, ו-r בסוף הברה נשמעים כמו ה: Rio = היו, carro = קאהו, restaurante = הסטאורנצ׳י. r בודדת בין תנועות היא ר קלה: caro = קארו (יקר) מול carro (מכונית).", "en": "In Brazil initial r, rr and syllable-final r sound like h: Rio = \"hee-o\", carro = \"ka-ho\". A single r between vowels is a light r: caro (expensive) vs carro (car)."}, "ex": [["O Rio de Janeiro", "", "או היו דז׳י ז׳ניירו", "ריו דה ז׳ניירו", "Rio de Janeiro"]]},
    {"t": {"he": "Tudo bem? — הברכה הברזילאית", "en": "Tudo bem? — the Brazilian greeting"}, "b": {"he": "Oi, tudo bem? (הכול טוב?) היא הדרך הכי נפוצה להגיד שלום, ועונים Tudo bom! או Tudo bem!. Valeu (ואלאו) = תודה/אחלה, בצורה יומיומית.", "en": "Oi, tudo bem? is the most common hello; answer Tudo bom! Valeu = thanks/cool, casually."}, "ex": [["Oi, tudo bem?", "", "אוי, טודו ביין", "היי, מה נשמע?", "Hi, how's it going?"], ["Valeu!", "", "ואלאו", "תודה! / אחלה!", "Thanks! / Cool!"]]},
    {"t": {"he": "-te ו--de בסוף: צ׳י, דז׳י", "en": "Final -te and -de: chee, jee"}, "b": {"he": "בברזיל t ו-d לפני i (או e בסוף מילה) נשמעים צ׳ ו-דז׳: noite = נויצ׳י, cidade = סידאדז׳י, leite = לייצ׳י. זה מה שנותן לפורטוגזית הברזילאית את הצליל הרך שלה.", "en": "In Brazil t and d before i (or final e) become ch and j: noite, cidade, leite. That's the soft Brazilian sound."}, "ex": [["Boa noite", "", "בואה נויצ׳י", "לילה טוב / ערב טוב", "Good night / evening"]]}
  ],
  note: {"he": "האפליקציה מלמדת פורטוגזית ברזילאית. יש בה 26 אותיות ועוד סימנים שחשוב להכיר: ã/õ (אנפוף), ç (ס), ו-lh/nh/ch. ההגייה בברזיל שונה מזו של פורטוגל — ראה בטיפים.", "en": "The app teaches Brazilian Portuguese: 26 letters plus marks worth knowing — ã/õ (nasal), ç (s), and lh/nh/ch. Brazilian pronunciation differs from Portugal's — see the tips.", "ru": "Приложение учит бразильский португальский: 26 букв и знаки ã/õ (носовые), ç (с), lh/nh/ch. Произношение в Бразилии отличается от португальского — см. советы.", "es": "La app enseña portugués de Brasil: 26 letras y signos ã/õ (nasales), ç (s), lh/nh/ch. La pronunciación de Brasil difiere de la de Portugal — mira los consejos.", "ar": "يعلّم التطبيق البرتغالية البرازيلية: 26 حرفا وعلامات ã/õ (أنفية) وç (س) وlh/nh/ch. النطق في البرازيل يختلف عن البرتغال — انظر النصائح."},
  vowelNote: {"he": "בברזיל: r בתחילת מילה או rr נשמעים כמו ה (Rio = היו). te/de בסוף מילה נשמעים צ׳י/דז׳י (noite = נויצ׳י). e בסוף מילה = אי, o בסוף מילה = או. ão = אָון באף.", "en": "In Brazil: initial r or rr sounds like h (Rio = \"hee-o\"). te/de at the end sound chee/jee (noite = \"noy-chee\"). Final e = ee, final o = oo. ão = nasal \"own\".", "ru": "В Бразилии r в начале слова и rr звучат как «х» (Rio = «Хиу»). te/de в конце — «чи»/«джи» (noite = «нойчи»). ão — носовое «аун».", "es": "En Brasil la r inicial y rr suenan como j suave (Rio = \"Jiu\"). te/de finales suenan \"chi\"/\"yi\" (noite = \"noichi\"). ão es nasal.", "ar": "في البرازيل يُلفظ r في بداية الكلمة وrr كالهاء (Rio = هيو). te/de في آخر الكلمة = تشي/جي (noite = نويتشي). ão صوت أنفي."},
  alpha: [
    ["A a", "A", "אַ", "a"],
    ["B b", "B", "ב", "bê"],
    ["C c", "C", "ק / ס", "cê"],
    ["D d", "D", "ד / דז׳ (לפני i)", "dê"],
    ["E e", "E", "אֶ / אִי בסוף מילה", "e"],
    ["F f", "F", "פ", "efe"],
    ["G g", "G", "ג / ז׳", "gê"],
    ["H h", "H", "שקטה", "agá (silent)"],
    ["I i", "I", "אִי", "i"],
    ["J j", "J", "ז׳", "jota"],
    ["K k", "K", "ק", "cá"],
    ["L l", "L", "ל / ו בסוף מילה", "ele"],
    ["M m", "M", "מ", "eme"],
    ["N n", "N", "נ", "ene"],
    ["O o", "O", "אוֹ / אוּ בסוף מילה", "o"],
    ["P p", "P", "פּ", "pê"],
    ["Q q", "Q", "ק", "quê"],
    ["R r", "R", "ה בתחילת מילה / ר", "erre"],
    ["S s", "S", "ס / ז בין תנועות", "esse"],
    ["T t", "T", "ט / צ׳ (לפני i)", "tê"],
    ["U u", "U", "אוּ", "u"],
    ["V v", "V", "ו (V)", "vê"],
    ["W w", "W", "ו", "dáblio"],
    ["X x", "X", "ש (בדרך כלל)", "xis"],
    ["Y y", "Y", "י", "ípsilon"],
    ["Z z", "Z", "ז", "zê"]
  ],
  vowels: [
    ["ã / ão", "não", "אָן / אָון באף (não = נאון)", "ã / ão"],
    ["õe", "põe", "וין באף", "õe"],
    ["em / en", "bem", "איין באף (bem = ביין)", "em"],
    ["ç", "açúcar", "ס (açúcar = אסוקר)", "ç"],
    ["lh", "filho", "לי (filho = פיליו)", "lh"],
    ["nh", "vinho", "ני (vinho = ויניו)", "nh"],
    ["ch", "chave", "ש (chave = שאבי)", "ch"],
    ["rr / r-", "carro", "ה (carro = קאהו)", "rr"],
    ["te / ti", "noite", "צ׳י (noite = נויצ׳י)", "te"],
    ["de / di", "cidade", "דז׳י (cidade = סידאדז׳י)", "de"]
  ],
  /* speaker = female: [regex source, flags, replacement] */
  gender: [["Obrigado", "g", "Obrigada"], ["obrigado", "g", "obrigada"], ["אובריגאדו", "g", "אובריגאדה"], ["perdido", "g", "perdida"], ["פרדז׳ידו", "g", "פרדז׳ידה"], ["alérgico", "g", "alérgica"], ["אלרז׳יקו", "g", "אלרז׳יקה"]],
  words: `hello|Olá / Oi||אולה / אוי
bye|Tchau||צ׳או
morning|Bom dia||בון דז׳יה
thanks|Obrigado||אובריגאדו
please|Por favor||פור פבור
sorry|Desculpe||דסקולפי
yes|Sim||סין
no|Não||נאון
howareyou|Tudo bem?||טודו ביין
good|Bom||בון
ok|Tá bom||טה בון
n1|Um||און
n2|Dois||דויס
n3|Três||טרס
n4|Quatro||קוואטרו
n5|Cinco||סינקו
n6|Seis||סייס
n7|Sete||סטשי
n8|Oito||אויטו
n9|Nove||נובי
n10|Dez||דייס
n0|Zero||זרו
n20|Vinte||וינצ׳י
n50|Cinquenta||סינקוונטה
n100|Cem||סיין
n1000|Mil||מיל
n11|Onze||אונזי
n12|Doze||דוזי
n13|Treze||טרזי
n14|Quatorze||קווטורזי
n15|Quinze||קינזי
n16|Dezesseis||דזסייס
n17|Dezessete||דזסטשי
n18|Dezoito||דזויטו
n19|Dezenove||דזנובי
n30|Trinta||טרינטה
n40|Quarenta||קווארנטה
n60|Sessenta||ססנטה
n70|Setenta||סטנטה
n80|Oitenta||אויטנטה
n90|Noventa||נובנטה
n200|Duzentos||דוזנטוס
n500|Quinhentos||קיניינטוס
n10000|Dez mil||דייס מיל
water|Água||אגווה
toilet|O banheiro||או בניירו
where|Onde?||אונדז׳י
howmuch|Quanto?||קוואנטו
this|Isto||איסטו
friend|Amigo||אמיגו
food|A comida||א קומידה
bread|O pão||או פאון
coffee|O café||או קפה
tea|O chá||או שה
chicken|O frango||או פראנגו
fish|O peixe||או פיישי
rice|O arroz||או אהוס
beer|A cerveja||א סרווז׳ה
bill|A conta||א קונטה
tasty|Delicioso||דליסיוזו
egg|O ovo||או אובו
fruit|A fruta||א פרוטה
veg|Os legumes||וס לגומס
meat|A carne||א קרני
milk|O leite||או לייצ׳י
spicy|Apimentado||אפימנטאדו
restaurant|O restaurante||או הסטאורנצ׳י
ice|O gelo||או ז׳לו
taxi|O táxi||או טקסי
bus|O ônibus||או אוניבוס
train|O trem||או טריין
airport|O aeroporto||או אארופורטו
hotel|O hotel||או אוטל
left|À esquerda||א אסקרדה
right|À direita||א דז׳יריטה
straight|Em frente||איין פרנצ׳י
stop|Pare||פארי
ticket|A passagem||א פסאז׳יין
money|O dinheiro||או דז׳ינייריו
expensive|Caro||קארו
cheap|Barato||בראטו
market|O mercado||או מרקאדו
pharmacy|A farmácia||א פרמסיה
open|Aberto||אברטו
closed|Fechado||פשאדו
help|Socorro!||סוקוהו
police|A polícia||א פוליסיה
doctor|O médico||או מדז׳יקו
hospital|O hospital||או אוספיטאו
today|Hoje||אוז׳י
tomorrow|Amanhã||אמניאן
yesterday|Ontem||אונטיין
now|Agora||אגורה
t_morning|A manhã||א מניאן
t_evening|O fim de tarde||או פין דז׳י טרדז׳י
t_night|A noite||א נויצ׳י
t_week|A semana||א סמנה
t_month|O mês||או מס
t_year|O ano||או אנו
t_hour|A hora||א אורה
t_minute|O minuto||או מינוטו
p_toilet|Onde fica o banheiro?||אונדז׳י פיקה או בניירו
p_cost|Quanto custa?||קוואנטו קוסטה
p_nounder|Não entendo||נאון אנטנדו
p_english|Você fala inglês?||וּוסה פאלה אינגלס
p_slow|Fale mais devagar, por favor||פאלי מאיס דוואגאר, פור פבור
p_bill|A conta, por favor||א קונטה, פור פבור
p_want|Quero esse||קרו אסי
p_expensive|Está muito caro||אסטה מוינטו קארו
p_discount|Tem desconto?||טיין דסקונטו
p_address|Me leve a este endereço, por favor||מי לבי א אסצ׳י אנדרסו, פור פבור
p_hotel|Onde fica o hotel?||אונדז׳י פיקה או אוטל
p_doctor|Preciso de um médico||פרסיזו דז׳י און מדז׳יקו
p_police|Chame a polícia!||שאמי א פוליסיה
p_israel|Sou de Israel||סו דז׳י איזראל
p_name|Meu nome é ...||מאו נומי א
p_nice|Prazer||פרזר
p_water|Água, por favor||אגווה, פור פבור
p_help|Pode me ajudar?||פודז׳י מי אז׳ודאר
p_what|O que é isso?||או קי א איסו
p_nospicy|Sem pimenta, por favor||סיין פימנטה, פור פבור
room|O quarto||או קווארטו
key|A chave||א שאבי
bed|A cama||א קאמה
shower|O chuveiro||או שוביירו
towel|A toalha||א טואליה
passport|O passaporte||או פסאפורצ׳י
mon|Segunda-feira||סגונדה-פיירה
tue|Terça-feira||טרסה-פיירה
wed|Quarta-feira||קווארטה-פיירה
thu|Quinta-feira||קינטה-פיירה
fri|Sexta-feira||סשטה-פיירה
sat|Sábado||סבאדו
sun|Domingo||דומינגו
red|Vermelho||ורמליו
blue|Azul||אזול
green|Verde||ורדז׳י
yellow|Amarelo||אמרלו
black|Preto||פרטו
white|Branco||בראנקו
man|Homem||אומיין
woman|Mulher||מוליר
child|Criança||קריאנסה
family|Família||פמיליה
i|Eu||או
you|Você||ווסה
head|A cabeça||א קבסה
stomach|A barriga||א בהיגה
hand|A mão||א מאון
pain|A dor||א דור
medicine|O remédio||או המדז׳יו
sick|Doente||דואנצ׳י
big|Grande||גראנדז׳י
small|Pequeno||פקנו
hot|Quente||קנצ׳י
cold|Frio||פריו
bad|Ruim||הוין
beautiful|Bonito||בוניטו
new|Novo||נובו
old|Velho||וליו
fast|Rápido||הפידו
slow|Devagar||דוואגאר
near|Perto||פרטו
far_a|Longe||לונז׳י
clean|Limpo||לימפו
dirty|Sujo||סוז׳ו
tired|Cansado||קנסאדו
hungry|Com fome||קון פומי
thirsty|Com sede||קון סדז׳י
happy|Feliz||פליס
sad|Triste||טריסצ׳י
easy|Fácil||פאסיו
difficult|Difícil||דז׳יפיסיו
many|Muito||מוינטו
eat|Comer||קומר
drink|Beber||בבר
go|Ir||איר
buy|Comprar||קומפרר
speak|Falar||פאלר
sleep|Dormir||דורמיר
understand|Entender||אנטנדר
come|Vir||ויר
want|Querer||קרר
need|Precisar||פרסיזר
know|Saber||סבר
see|Ver||ור
hear|Ouvir||אוביר
give|Dar||דאר
take|Pegar||פגאר
pay|Pagar||פגאר
wait|Esperar||אספרר
walk|Andar||אנדר
read|Ler||לר
write|Escrever||אסקרבר
love|Amar||אמר
work|Trabalhar||טרבליאר
swim|Nadar||נדר
c_table|Uma mesa para dois, por favor||אומה מזה פרה דויס, פור פבור
c_menu|O cardápio, por favor||או קרדאפיו, פור פבור
c_noice|Sem gelo, por favor||סיין ז׳לו, פור פבור
c_nomeat|Eu não como carne||או נאון קומו קרני
c_allergy|Sou alérgico a nozes||סו אלרז׳יקו א נוזס
c_delicious|Muito gostoso!||מוינטו גוסטוזו
c_reserv|Tenho uma reserva||טניו אומה הזרבה
c_wifi|Qual é a senha do wifi?||קוואו א א סניה דו וויפי
c_checkout|Que horas é o check-out?||קי אורס א או צ׳ק-אאוט
c_howget|Como chego lá?||קומו שגו לה
c_stophere|Pare aqui, por favor||פארי אקי, פור פבור
c_far|É longe?||א לונז׳י
c_card|Posso pagar com cartão?||פוסו פגאר קון קרטאון
c_looking|Só estou olhando, obrigado||סו אסטו אוליאנדו, אובריגאדו
c_yourname|Qual é o seu nome?||קוואו א או סאו נומי
c_wherefrom|De onde você é?||דז׳י אונדז׳י ווסה א
c_seeyou|Até logo||אטה לוגו
c_cheers|Saúde!||סאודז׳י
c_lost|Estou perdido||אסטו פרדז׳ידו
c_passport|Perdi meu passaporte||פרדז׳י מאו פסאפורצ׳י
c_hurts|Dói aqui||דוי אקי
c_time|Que horas são?||קי אורס סאון
c_again|Pode repetir, por favor?||פודז׳י הפצ׳יר, פור פבור
c_write|Pode escrever para mim?||פודז׳י אסקרבר פרה מין
dog|O cachorro||או קשוהו
cat|O gato||או גאטו
bird|O pássaro||או פאסרו
horse|O cavalo||או קבאלו
cow|A vaca||א ואקה
pig|O porco||או פורקו
elephant|O elefante||או אלפנצ׳י
monkey|O macaco||או מקאקו
snake|A cobra||א קוברה
mosquito|O mosquito||או מוסקיטו
lion|O leão||או לאון
duck|O pato||או פאטו
apple|A maçã||א מסאן
banana|A banana||א בננה
orange|A laranja||א לראנז׳ה
mango|A manga||א מנגה
pineapple|O abacaxi||או אבקשי
watermelon|A melancia||א מלנסיה
coconut|O coco||או קוקו
grapes|A uva||א אובה
lemon|O limão||או לימאון
strawberry|O morango||או מורנגו
papaya|O mamão||או ממאון
tomato|O tomate||או טומאצ׳י
potato|A batata||א בטאטה
onion|A cebola||א סבולה
garlic|O alho||או אליו
cucumber|O pepino||או פפינו
carrot|A cenoura||א סנורה
chili|A pimenta||א פימנטה
corn|O milho||או מיליו
mushroom|O cogumelo||או קוגומלו
lettuce|A alface||א אלפסי
eggplant|A berinjela||א ברינז׳לה
soup|A sopa||א סופה
salad|A salada||א סלאדה
noodles|O macarrão||או מקהאון
cheese|O queijo||או קיז׳ו
butter|A manteiga||א מנטייגה
salt|O sal||או סאו
sugar|O açúcar||או אסוקר
cake|O bolo||או בולו
icecream|O sorvete||או סורווצ׳י
juice|O suco||או סוקו
wine|O vinho||או ויניו
breakfast|O café da manhã||או קפה דה מניאן
lunch|O almoço||או אלמוסו
dinner|O jantar||או ז׳נטר
fork|O garfo||או גרפו
spoon|A colher||א קולייר
knife|A faca||א פאקה
glass|O copo||או קופו
plate|O prato||או פראטו
bank|O banco||או בנקו
atm|O caixa eletrônico||או קאישה אלטרוניקו
beach|A praia||א פראיה
museum|O museu||או מוזאו
temple|O templo||או טמפלו
street|A rua||א הואה
city|A cidade||א סידאדז׳י
shop|A loja||א לוז׳ה
supermarket|O supermercado||או סופרמרקאדו
park|O parque||או פרקי
station|A estação||א אסטסאון
embassy|A embaixada||א אמבאישאדה
phone|O celular||או סלולר
charger|O carregador||או קהגאדור
bag|A bolsa||א בולסה
shoes|Os sapatos||וס ספאטוס
clothes|As roupas||אס הופס
hat|O chapéu||או שפאו
glasses|Os óculos||וס אוקולוס
map|O mapa||או מאפה
sunscreen|O protetor solar||או פרוטטור סולר
umbrella|O guarda-chuva||או גווארדה-שובה
sf_order|Eu gostaria de pedir||או גוסטריה דז׳י פדז׳יר
sf_recommend|O que você recomenda?||או קי ווסה הקומנדה
sf_bottle|Uma garrafa de água, por favor||אומה גהאפה דז׳י אגווה, פור פבור
sf_isspicy|É apimentado?||א אפימנטאדו
sf_onemore|Mais um, por favor||מאיס און, פור פבור
sf_nosugar|Sem açúcar, por favor||סיין אסוקר, פור פבור
sf_takeaway|Pode embrulhar para viagem?||פודז׳י אמברוליאר פרה ויאז׳יין
ss_smaller|Tem um tamanho menor?||טיין און טמניו מנור
ss_try|Posso experimentar?||פוסו אספרימנטר
ss_two|Vou levar dois||וו לוואר דויס
ss_change|Tem troco?||טיין טרוקו
ss_last|Qual é o preço final?||קוואו א או פרסו פינאו
ss_bag|Pode me dar uma sacola?||פודז׳י מי דאר אומה סקולה
sm_busstop|Onde fica o ponto de ônibus?||אונדז׳י פיקה או פונטו דז׳י אוניבוס
sm_trainleave|Que horas sai o trem?||קי אורס סאי או טריין
sm_oneticket|Uma passagem, por favor||אומה פסאז׳יין, פור פבור
sm_howlong|Quanto tempo demora?||קוואנטו טמפו דמורה
sm_meter|Ligue o taxímetro, por favor||ליגי או טקסימטרו, פור פבור
sm_slowdrive|Dirija mais devagar, por favor||דז׳יריז׳ה מאיס דוואגאר, פור פבור
sm_airport|Quero ir ao aeroporto||קרו איר או אארופורטו
sh_leavebag|Posso deixar minha bolsa aqui?||פוסו דיישר מיניה בולסה אקי
sh_ac|O ar-condicionado não funciona||או אר-קונדז׳יסיונאדו נאון פונסיונה
sh_breakfast|O café da manhã está incluído?||או קפה דה מניאן אסטה אינקלואידו
sh_towel|Preciso de outra toalha||פרסיזו דז׳י אוטרה טואליה
sh_taxi|Pode chamar um táxi para mim?||פודז׳י שמאר און טקסי פרה מין
sh_late|Posso fazer o check-out mais tarde?||פוסו פזר או צ׳ק-אאוט מאיס טרדז׳י
so_learning|Estou aprendendo português||אסטו אפרנדנדו פורטוגס
so_thankshelp|Muito obrigado pela ajuda||מוינטו אובריגאדו פלה אז׳ודה
so_photo|Pode tirar uma foto nossa?||פודז׳י צ׳יראר אומה פוטו נוסה
so_like|Eu gosto deste lugar||או גוסטו דסצ׳י לוגאר
so_vacation|Estou aqui de férias||אסטו אקי דז׳י פריאס
so_howsay|Como se diz isso?||קומו סי דז׳יס איסו
so_noproblem|Sem problema||סיין פרובלמה
so_beautiful|É muito bonito!||א מוינטו בוניטו
sp_unwell|Não estou me sentindo bem||נאון אסטו מי סנצ׳ינדו ביין
sp_nearhosp|Onde fica o hospital mais próximo?||אונדז׳י פיקה או אוספיטאו מאיס פרוסימו
sp_fever|Estou com febre||אסטו קון פברי
sp_helpme|Me ajude, por favor||מי אז׳ודז׳י, פור פבור
sp_stolen|Roubaram minha bolsa||הובארון מיניה בולסה
sp_embassy|Preciso da embaixada de Israel||פרסיזו דה אמבאישאדה דז׳י איזראל
dt1|Para onde?||פרה אונדז׳י
dt2|Para este hotel, por favor.||פרה אסצ׳י אוטל, פור פבור
dt3|Tá bom, pode entrar.||טה בון, פודז׳י אנטרר
dt4|Quanto fica?||קוואנטו פיקה
dt5|Duzentos reais.||דוזנטוס היאייס
dt6|Ligue o taxímetro, por favor.||ליגי או טקסימטרו, פור פבור
dt7|Sem problema.||סיין פרובלמה
dt8|Pare aqui, obrigado.||פארי אקי, אובריגאדו
dm1|Quanto custa isso?||קוואנטו קוסטה איסו
dm2|Trezentos.||טרזנטוס
dm3|Muito caro! Duzentos?||מוינטו קארו! דוזנטוס
dm4|Duzentos e cinquenta, último preço.||דוזנטוס אי סינקוונטה, אולצ׳ימו פרסו
dm5|Tá bom, vou levar.||טה בון, וו לוואר
dm6|Muito obrigado!||מוינטו אובריגאדו
dr1|Quantas pessoas?||קוואנטס פסואס
dr2|Duas, por favor.||דואס, פור פבור
dr3|O que vai pedir?||או קי ואי פדז׳יר
dr4|Arroz frito com frango, sem pimenta.||אהוס פריטו קון פראנגו, סיין פימנטה
dr5|E para beber?||אי פרה בבר
dr6|Só água, por favor.||סו אגווה, פור פבור
dr7|A conta, por favor.||א קונטה, פור פבור
dh1|Olá, eu tenho uma reserva.||אולה, או טניו אומה הזרבה
dh2|Em que nome?||איין קי נומי
dh3|Em nome de ...||איין נומי דז׳י
dh4|O passaporte, por favor.||או פסאפורצ׳י, פור פבור
dh5|O seu quarto é o trezentos e cinco.||או סאו קווארטו א או טרזנטוס אי סינקו
dh6|Que horas é o café da manhã?||קי אורס א או קפה דה מניאן
dh7|Das sete às dez.||דס סטשי אס דייס
dd1|Com licença, onde fica a estação?||קון ליסנסה, אונדז׳י פיקה א אסטסאון
dd2|Siga em frente, depois à esquerda.||סיגה איין פרנצ׳י, דפויס א אסקרדה
dd3|É longe daqui?||א לונז׳י דאקי
dd4|Não, cinco minutos a pé.||נאון, סינקו מינוטוס א פה
dd5|Valeu, muito obrigado!||ואלאו, מוינטו אובריגאדו
w_weather|O tempo||או טמפו
w_sun|O sol||או סאו
w_rain|A chuva||א שובה
w_wind|O vento||או ונטו
w_cloud|A nuvem||א נוביין
w_snow|A neve||א נבי
w_storm|A tempestade||א טמפסטאדז׳י
w_humid|Úmido||אומידו
j_teacher|O professor||או פרופסור
j_driver|O motorista||או מוטוריסטה
j_waiter|O garçom||או גרסון
j_cook|O cozinheiro||או קוזיניירו
j_student|O estudante||או אסטודנצ׳י
j_engineer|O engenheiro||או אנז׳ניירו
j_nurse|A enfermeira||א אנפרמיירה
j_seller|O vendedor||או ונדדור
j_guide|O guia turístico||או גיה טוריסצ׳יקו
j_pharmacist|O farmacêutico||או פרמסאוצ׳יקו
e_angry|Bravo||בראבו
e_scared|Com medo||קון מדו
e_bored|Entediado||אנטדז׳יאדו
e_worried|Preocupado||פראוקופאדו
e_surprised|Surpreso||סורפרזו
e_calm|Calmo||קאומו
e_excited|Animado||אנימאדו
e_love|Apaixonado||אפאישונאדו
dir_north|O norte||או נורצ׳י
dir_south|O sul||או סול
dir_east|O leste||או לסצ׳י
dir_west|O oeste||או אואסצ׳י
dir_corner|A esquina||א אסקינה
dir_light|O semáforo||או סמאפורו
dir_behind|Atrás||אטראס
dir_front|Na frente||נה פרנצ׳י
dir_next|Ao lado de||או לאדו דז׳י
dir_back|Para trás||פרה טראס
dir_up|Para cima||פרה סימה
dir_down|Para baixo||פרה באישו`
});

/* ---- numbers & prices (0–999,999), Brazilian Portuguese → tokens [text, roman, hebrew]. Prices in reais (R$) ---- */
NW.pt = (() => {
  const H = { zero: 'זרו', um: 'און', dois: 'דויס', 'três': 'טרס', quatro: 'קוואטרו', cinco: 'סינקו', seis: 'סייס', sete: 'סטשי', oito: 'אויטו', nove: 'נובי', dez: 'דייס',
    onze: 'אונזי', doze: 'דוזי', treze: 'טרזי', quatorze: 'קווטורזי', quinze: 'קינזי', dezesseis: 'דזסייס', dezessete: 'דזסטשי', dezoito: 'דזויטו', dezenove: 'דזנובי',
    vinte: 'וינצ׳י', trinta: 'טרינטה', quarenta: 'קווארנטה', cinquenta: 'סינקוונטה', sessenta: 'ססנטה', setenta: 'סטנטה', oitenta: 'אויטנטה', noventa: 'נובנטה',
    cem: 'סיין', cento: 'סנטו', duzentos: 'דוזנטוס', trezentos: 'טרזנטוס', quatrocentos: 'קוואטרוסנטוס', quinhentos: 'קיניינטוס', seiscentos: 'סייססנטוס', setecentos: 'סטשיסנטוס', oitocentos: 'אויטוסנטוס', novecentos: 'נובסנטוס',
    mil: 'מיל', e: 'אי', real: 'היאו', reais: 'היאייס' };
  const O = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
  const T = [, , 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
  const C = [, 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
  const u100 = n => n < 20 ? O[n] : T[Math.floor(n / 10)] + (n % 10 ? ' e ' + O[n % 10] : '');
  const u1000 = n => { if (n === 100) return 'cem'; const h = Math.floor(n / 100), r = n % 100; return [h ? C[h] : '', r ? u100(r) : ''].filter(Boolean).join(' e '); };
  function words(n) {
    if (n === 0) return 'zero';
    const th = Math.floor(n / 1000), r = n % 1000;
    let s = th ? (th === 1 ? 'mil' : u1000(th) + ' mil') : '';
    if (r) s += (s ? (r < 100 || r % 100 === 0 ? ' e ' : ' ') : '') + u1000(r);
    return s;
  }
  const heb = s => s.split(' ').map(w => H[w] || w).join(' ');
  return (n, cur) => {
    const w = words(n), toks = [tk(w, w, heb(w))];
    if (cur) toks.push(n === 1 ? tk('real', 'real', 'היאו') : tk('reais', 'reais', 'היאייס'));
    return toks;
  };
})();
NUM.pt = { tokens: (n, cur) => NW.pt(n, cur) };

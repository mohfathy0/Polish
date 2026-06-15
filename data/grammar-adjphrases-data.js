/* =====================================================================
   GRAMMAR ADJ+NOUN PHRASES — Polish A1 Biernik (Accusative)
   Used by: grammar-biernik-frazy.html  (no Firebase needed — static)

   Fields:
     g        — gender: m_anim | m_inan | f | n
     sub      — sub-type note: "cons" | "a_ending" | "consonant_noun" (f only)
     nom_adj  — adjective in mianownik (nominative)
     nom_noun — noun in mianownik
     acc_adj  — adjective in biernik (accusative)
     acc_noun — noun in biernik
     verb     — verb used in the biernik example sentence
     en       — English meaning of the full phrase
     ar       — Arabic meaning
     at       — Arabic transliteration
     cat      — category
     r_acc    — rule explanation
   =====================================================================

   KEY RULES (singular):
   ┌──────────────────────┬──────────────────┬──────────────────────────┐
   │ Gender               │ Adjective change │ Noun change              │
   ├──────────────────────┼──────────────────┼──────────────────────────┤
   │ M.anim (consonant)   │ -y/-i → -ego     │ +a                       │
   │ M.anim (-a ending)   │ -y/-i → -ego     │ -a → -ę                  │
   │ M.inanimate          │ NO CHANGE        │ NO CHANGE                │
   │ Feminine (-a ending) │ -a → -ą          │ -a → -ę                  │
   │ Feminine (consonant) │ -a → -ą          │ NO CHANGE                │
   │ Neuter               │ NO CHANGE        │ NO CHANGE                │
   └──────────────────────┴──────────────────┴──────────────────────────┘
   ===================================================================== */

const GRAMMAR_ADJ_PHRASES = [

  /* ── MASCULINE ANIMATE — consonant-final noun ────────────────────────
     Adjective: hard -y → -ego  |  soft/velar -ki/-gi → -kiego/-giego
     Noun: add -a
  ──────────────────────────────────────────────────────────────────── */

  { g:"m_anim", sub:"cons",
    nom_adj:"dobry",    nom_noun:"brat",
    acc_adj:"dobrego",  acc_noun:"brata",
    verb:"Mam", en:"good brother", ar:"أخ طيب", at:"akh tayyib", cat:"person",
    r_acc:"M.anim: adjective dobry → dobrego (-y → -ego); noun brat → brata (+a)." },

  { g:"m_anim", sub:"cons",
    nom_adj:"mądry",    nom_noun:"syn",
    acc_adj:"mądrego",  acc_noun:"syna",
    verb:"Mam", en:"smart son", ar:"ابن ذكي", at:"ibn dhaki", cat:"person",
    r_acc:"M.anim: adjective mądry → mądrego (-y → -ego); noun syn → syna (+a)." },

  { g:"m_anim", sub:"cons",
    nom_adj:"wysoki",   nom_noun:"student",
    acc_adj:"wysokiego",acc_noun:"studenta",
    verb:"Znam", en:"tall student", ar:"طالب طويل", at:"talib taweel", cat:"person",
    r_acc:"M.anim: adjective wysoki → wysokiego (-ki → -kiego, velar softening); noun student → studenta (+a)." },

  { g:"m_anim", sub:"cons",
    nom_adj:"stary",    nom_noun:"profesor",
    acc_adj:"starego",  acc_noun:"profesora",
    verb:"Znam", en:"old professor", ar:"أستاذ عجوز", at:"ustadh 'ajooz", cat:"person",
    r_acc:"M.anim: adjective stary → starego (-y → -ego); noun profesor → profesora (+a)." },

  { g:"m_anim", sub:"cons",
    nom_adj:"dobry",    nom_noun:"lekarz",
    acc_adj:"dobrego",  acc_noun:"lekarza",
    verb:"Mam", en:"good doctor", ar:"طبيب جيد", at:"tabib jayyid", cat:"person",
    r_acc:"M.anim: adjective dobry → dobrego (-y → -ego); noun lekarz → lekarza (+a)." },

  { g:"m_anim", sub:"cons",
    nom_adj:"miły",     nom_noun:"nauczyciel",
    acc_adj:"miłego",   acc_noun:"nauczyciela",
    verb:"Mam", en:"nice teacher (male)", ar:"مدرس لطيف", at:"mudarris lateef", cat:"person",
    r_acc:"M.anim: adjective miły → miłego (-y → -ego); noun nauczyciel → nauczyciela (+a)." },

  { g:"m_anim", sub:"cons",
    nom_adj:"uparty",   nom_noun:"człowiek",
    acc_adj:"upartego", acc_noun:"człowieka",
    verb:"Znam", en:"stubborn person", ar:"شخص عنيد", at:"shakhs 'aneed", cat:"person",
    r_acc:"M.anim: adjective uparty → upartego (-y → -ego); noun człowiek → człowieka (+a)." },

  { g:"m_anim", sub:"cons",
    nom_adj:"wysoki",   nom_noun:"przyjaciel",
    acc_adj:"wysokiego",acc_noun:"przyjaciela",
    verb:"Mam", en:"tall friend (male)", ar:"صديق طويل", at:"sadiq taweel", cat:"person",
    r_acc:"M.anim: adjective wysoki → wysokiego (-ki → -kiego); noun przyjaciel → przyjaciela (+a)." },

  { g:"m_anim", sub:"cons",
    nom_adj:"dobry",    nom_noun:"stolarz",
    acc_adj:"dobrego",  acc_noun:"stolarza",
    verb:"Znam", en:"good carpenter", ar:"نجار جيد", at:"najjar jayyid", cat:"person",
    r_acc:"M.anim: adjective dobry → dobrego (-y → -ego); noun stolarz → stolarza (+a)." },

  { g:"m_anim", sub:"cons",
    nom_adj:"nowy",     nom_noun:"sąsiad",
    acc_adj:"nowego",   acc_noun:"sąsiada",
    verb:"Mam", en:"new neighbour (male)", ar:"جار جديد", at:"jar jadeed", cat:"person",
    r_acc:"M.anim: adjective nowy → nowego (-y → -ego); noun sąsiad → sąsiada (+a)." },

  /* ── MASCULINE ANIMATE — noun ending in -a ───────────────────────────
     Adjective: -y → -ego  (same as above)
     Noun: -a → -ę  (like feminine!)
  ──────────────────────────────────────────────────────────────────── */

  { g:"m_anim", sub:"a_ending",
    nom_adj:"dobry",    nom_noun:"kolega",
    acc_adj:"dobrego",  acc_noun:"kolegę",
    verb:"Mam", en:"good colleague / friend (male)", ar:"زميل جيد", at:"zameel jayyid", cat:"person",
    r_acc:"M.anim (-a ending): adjective dobry → dobrego; noun kolega → kolegę (-a → -ę, looks like feminine!)." },

  { g:"m_anim", sub:"a_ending",
    nom_adj:"dobry",    nom_noun:"kierowca",
    acc_adj:"dobrego",  acc_noun:"kierowcę",
    verb:"Znam", en:"good driver (male)", ar:"سائق جيد", at:"sa'iq jayyid", cat:"person",
    r_acc:"M.anim (-a ending): adjective dobry → dobrego; noun kierowca → kierowcę (-a → -ę)." },

  { g:"m_anim", sub:"a_ending",
    nom_adj:"dobry",    nom_noun:"dentysta",
    acc_adj:"dobrego",  acc_noun:"dentystę",
    verb:"Mam", en:"good dentist (male)", ar:"طبيب أسنان جيد", at:"tabib asnan jayyid", cat:"person",
    r_acc:"M.anim (-a ending): adjective dobry → dobrego; noun dentysta → dentystę (-a → -ę)." },

  { g:"m_anim", sub:"a_ending",
    nom_adj:"wysoki",   nom_noun:"mężczyzna",
    acc_adj:"wysokiego",acc_noun:"mężczyznę",
    verb:"Widzę", en:"tall man", ar:"رجل طويل", at:"rajul taweel", cat:"person",
    r_acc:"M.anim (-a ending): adjective wysoki → wysokiego; noun mężczyzna → mężczyznę (-a → -ę)." },

  { g:"m_anim", sub:"a_ending",
    nom_adj:"dobry",    nom_noun:"turysta",
    acc_adj:"dobrego",  acc_noun:"turystę",
    verb:"Znam", en:"good tourist (male)", ar:"سائح جيد", at:"sa'ih jayyid", cat:"person",
    r_acc:"M.anim (-a ending): adjective dobry → dobrego; noun turysta → turystę (-a → -ę)." },

  /* ── MASCULINE INANIMATE — no change ────────────────────────────────
     Adjective: NO CHANGE  |  Noun: NO CHANGE
     Accusative = Nominative (the whole phrase stays identical!)
  ──────────────────────────────────────────────────────────────────── */

  { g:"m_inan", sub:"cons",
    nom_adj:"nowy",     nom_noun:"telefon",
    acc_adj:"nowy",     acc_noun:"telefon",
    verb:"Mam", en:"new phone", ar:"هاتف جديد", at:"hatif jadeed", cat:"object",
    r_acc:"M.inan: NO CHANGE — accusative = nominative. Both adjective and noun stay the same: nowy telefon." },

  { g:"m_inan", sub:"cons",
    nom_adj:"stary",    nom_noun:"dom",
    acc_adj:"stary",    acc_noun:"dom",
    verb:"Mam", en:"old house", ar:"منزل قديم", at:"manzil qadeem", cat:"place",
    r_acc:"M.inan: NO CHANGE — accusative = nominative: stary dom." },

  { g:"m_inan", sub:"cons",
    nom_adj:"dobry",    nom_noun:"film",
    acc_adj:"dobry",    acc_noun:"film",
    verb:"Oglądam", en:"good film", ar:"فيلم جيد", at:"film jayyid", cat:"object",
    r_acc:"M.inan: NO CHANGE — accusative = nominative: dobry film." },

  { g:"m_inan", sub:"cons",
    nom_adj:"nowy",     nom_noun:"rower",
    acc_adj:"nowy",     acc_noun:"rower",
    verb:"Mam", en:"new bicycle", ar:"دراجة جديدة", at:"darraja jadeeda", cat:"object",
    r_acc:"M.inan: NO CHANGE — accusative = nominative: nowy rower." },

  { g:"m_inan", sub:"cons",
    nom_adj:"zimny",    nom_noun:"sok",
    acc_adj:"zimny",    acc_noun:"sok",
    verb:"Piję", en:"cold juice", ar:"عصير بارد", at:"'asir barid", cat:"food",
    r_acc:"M.inan: NO CHANGE — accusative = nominative: zimny sok." },

  { g:"m_inan", sub:"cons",
    nom_adj:"świeży",   nom_noun:"chleb",
    acc_adj:"świeży",   acc_noun:"chleb",
    verb:"Jem", en:"fresh bread", ar:"خبز طازج", at:"khubz tazij", cat:"food",
    r_acc:"M.inan: NO CHANGE — accusative = nominative: świeży chleb." },

  { g:"m_inan", sub:"cons",
    nom_adj:"duży",     nom_noun:"stół",
    acc_adj:"duży",     acc_noun:"stół",
    verb:"Mam", en:"big table", ar:"طاولة كبيرة", at:"tawila kabeera", cat:"object",
    r_acc:"M.inan: NO CHANGE — accusative = nominative: duży stół." },

  /* ── FEMININE — noun ending in -a ────────────────────────────────────
     Adjective: -a → -ą
     Noun: -a → -ę
  ──────────────────────────────────────────────────────────────────── */

  { g:"f", sub:"a_ending",
    nom_adj:"mądra",    nom_noun:"córka",
    acc_adj:"mądrą",    acc_noun:"córkę",
    verb:"Mam", en:"smart daughter", ar:"ابنة ذكية", at:"ibna dhakiyya", cat:"person",
    r_acc:"Feminine (-a noun): adjective mądra → mądrą (-a → -ą); noun córka → córkę (-a → -ę)." },

  { g:"f", sub:"a_ending",
    nom_adj:"dobra",    nom_noun:"siostra",
    acc_adj:"dobrą",    acc_noun:"siostrę",
    verb:"Mam", en:"good sister", ar:"أخت طيبة", at:"ukht tayyiba", cat:"person",
    r_acc:"Feminine (-a noun): adjective dobra → dobrą (-a → -ą); noun siostra → siostrę (-a → -ę)." },

  { g:"f", sub:"a_ending",
    nom_adj:"ładna",    nom_noun:"koleżanka",
    acc_adj:"ładną",    acc_noun:"koleżankę",
    verb:"Znam", en:"pretty colleague (female)", ar:"زميلة جميلة", at:"zameela jameela", cat:"person",
    r_acc:"Feminine (-a noun): adjective ładna → ładną (-a → -ą); noun koleżanka → koleżankę (-a → -ę)." },

  { g:"f", sub:"a_ending",
    nom_adj:"nowa",     nom_noun:"nauczycielka",
    acc_adj:"nową",     acc_noun:"nauczycielkę",
    verb:"Znam", en:"new teacher (female)", ar:"مدرسة جديدة", at:"mudarrisa jadeeda", cat:"person",
    r_acc:"Feminine (-a noun): adjective nowa → nową (-a → -ą); noun nauczycielka → nauczycielkę (-a → -ę)." },

  { g:"f", sub:"a_ending",
    nom_adj:"stara",    nom_noun:"mama",
    acc_adj:"starą",    acc_noun:"mamę",
    verb:"Mam", en:"old/elderly mom", ar:"أم عجوز", at:"umm 'ajooz", cat:"person",
    r_acc:"Feminine (-a noun): adjective stara → starą (-a → -ą); noun mama → mamę (-a → -ę)." },

  { g:"f", sub:"a_ending",
    nom_adj:"słodka",   nom_noun:"herbata",
    acc_adj:"słodką",   acc_noun:"herbatę",
    verb:"Lubię", en:"sweet tea", ar:"شاي حلو", at:"shay hilw", cat:"food",
    r_acc:"Feminine (-a noun): adjective słodka → słodką (-a → -ą); noun herbata → herbatę (-a → -ę)." },

  { g:"f", sub:"a_ending",
    nom_adj:"zimna",    nom_noun:"woda",
    acc_adj:"zimną",    acc_noun:"wodę",
    verb:"Piję", en:"cold water", ar:"ماء بارد", at:"ma' barid", cat:"food",
    r_acc:"Feminine (-a noun): adjective zimna → zimną (-a → -ą); noun woda → wodę (-a → -ę)." },

  { g:"f", sub:"a_ending",
    nom_adj:"nowa",     nom_noun:"książka",
    acc_adj:"nową",     acc_noun:"książkę",
    verb:"Mam", en:"new book", ar:"كتاب جديد", at:"kitab jadeed", cat:"object",
    r_acc:"Feminine (-a noun): adjective nowa → nową (-a → -ą); noun książka → książkę (-a → -ę)." },

  { g:"f", sub:"a_ending",
    nom_adj:"dobra",    nom_noun:"restauracja",
    acc_adj:"dobrą",    acc_noun:"restaurację",
    verb:"Znam", en:"good restaurant", ar:"مطعم جيد", at:"mat'am jayyid", cat:"place",
    r_acc:"Feminine (-a noun): adjective dobra → dobrą (-a → -ą); noun restauracja → restaurację (-ja → -ję)." },

  { g:"f", sub:"a_ending",
    nom_adj:"dobra",    nom_noun:"kawa",
    acc_adj:"dobrą",    acc_noun:"kawę",
    verb:"Lubię", en:"good coffee", ar:"قهوة جيدة", at:"qahwa jadeeda", cat:"food",
    r_acc:"Feminine (-a noun): adjective dobra → dobrą (-a → -ą); noun kawa → kawę (-a → -ę)." },

  { g:"f", sub:"a_ending",
    nom_adj:"nowa",     nom_noun:"ulica",
    acc_adj:"nową",     acc_noun:"ulicę",
    verb:"Znam", en:"new street", ar:"شارع جديد", at:"shari' jadeed", cat:"place",
    r_acc:"Feminine (-a noun): adjective nowa → nową (-a → -ą); noun ulica → ulicę (-a → -ę)." },

  /* ── FEMININE — noun ending in consonant ─────────────────────────────
     Adjective: -a → -ą
     Noun: NO CHANGE  (consonant-final feminines don't change in accusative)
  ──────────────────────────────────────────────────────────────────── */

  { g:"f", sub:"consonant_noun",
    nom_adj:"długa",    nom_noun:"noc",
    acc_adj:"długą",    acc_noun:"noc",
    verb:"Mam", en:"long night", ar:"ليلة طويلة", at:"layla taweela", cat:"object",
    r_acc:"Feminine (consonant noun): adjective długa → długą (-a → -ą); but noun noc ends in consonant — NO CHANGE." },

  { g:"f", sub:"consonant_noun",
    nom_adj:"wielka",   nom_noun:"miłość",
    acc_adj:"wielką",   acc_noun:"miłość",
    verb:"Mam", en:"great love", ar:"حب عظيم", at:"hubb 'azeem", cat:"object",
    r_acc:"Feminine (consonant noun): adjective wielka → wielką (-a → -ą); noun miłość ends in consonant — NO CHANGE." },

  { g:"f", sub:"consonant_noun",
    nom_adj:"ważna",    nom_noun:"rzecz",
    acc_adj:"ważną",    acc_noun:"rzecz",
    verb:"Mam", en:"important thing", ar:"شيء مهم", at:"shay' muhimm", cat:"object",
    r_acc:"Feminine (consonant noun): adjective ważna → ważną (-a → -ą); noun rzecz ends in consonant — NO CHANGE." },

  /* ── NEUTER — no change ──────────────────────────────────────────────
     Adjective: NO CHANGE  |  Noun: NO CHANGE
     Accusative = Nominative (entire phrase identical!)
  ──────────────────────────────────────────────────────────────────── */

  { g:"n", sub:"cons",
    nom_adj:"nowe",     nom_noun:"okno",
    acc_adj:"nowe",     acc_noun:"okno",
    verb:"Mam", en:"new window", ar:"نافذة جديدة", at:"nafidha jadeeda", cat:"object",
    r_acc:"Neuter: NO CHANGE — accusative = nominative: nowe okno." },

  { g:"n", sub:"cons",
    nom_adj:"małe",     nom_noun:"dziecko",
    acc_adj:"małe",     acc_noun:"dziecko",
    verb:"Mam", en:"small child", ar:"طفل صغير", at:"tifl sagheer", cat:"person",
    r_acc:"Neuter: NO CHANGE — accusative = nominative: małe dziecko." },

  { g:"n", sub:"cons",
    nom_adj:"duże",     nom_noun:"miasto",
    acc_adj:"duże",     acc_noun:"miasto",
    verb:"Znam", en:"big city", ar:"مدينة كبيرة", at:"madina kabeera", cat:"place",
    r_acc:"Neuter: NO CHANGE — accusative = nominative: duże miasto." },

  { g:"n", sub:"cons",
    nom_adj:"nowe",     nom_noun:"mieszkanie",
    acc_adj:"nowe",     acc_noun:"mieszkanie",
    verb:"Mam", en:"new apartment", ar:"شقة جديدة", at:"shaqqa jadeeda", cat:"place",
    r_acc:"Neuter: NO CHANGE — accusative = nominative: nowe mieszkanie." },

  { g:"n", sub:"cons",
    nom_adj:"dobre",    nom_noun:"piwo",
    acc_adj:"dobre",    acc_noun:"piwo",
    verb:"Lubię", en:"good beer", ar:"بيرة جيدة", at:"bira jadeeda", cat:"food",
    r_acc:"Neuter: NO CHANGE — accusative = nominative: dobre piwo." },

];

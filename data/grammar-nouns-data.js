/* =====================================================================
   GRAMMAR NOUNS — Polish A1 Singular Nominative & Accusative
   Seeded to Firestore collection: 'grammar_nouns'
   Used by: seed.html, grammar-mianownik.html, grammar-biernik.html

   Fields:
     g     — gender: m_anim | m_inan | f | n
     nom   — nominative (dictionary) form
     acc   — accusative form
     en    — English meaning
     ar    — Arabic meaning
     at    — Arabic transliteration
     cat   — semantic category (person, animal, object, place, food, etc.)
     r_nom — short rule note for nominative
     r_acc — short rule note for accusative
   ===================================================================== */

const GRAMMAR_NOUNS = [

  /* ── MASCULINE ANIMATE (m_anim) ─────────────────────────────────────
     Nominative = dictionary form (usually consonant-final)
     Accusative = add -a  (consonant → +a)
     Exception: nouns ending in -a change -a → -ę (like feminine!)
     Irregular: pies→psa, chłopiec→chłopca, ojciec→ojca,
                dziadek→dziadka, mąż→męża
  ──────────────────────────────────────────────────────────────────── */

  // People — consonant-final regular
  { g:"m_anim", nom:"student",   acc:"studenta",   en:"student (male)",       ar:"طالب",          at:"talib",            cat:"person",
    r_nom:"Masculine animate: ends in a consonant — this is the dictionary form.",
    r_acc:"Masculine animate (consonant-final): add -a → student + a = studenta." },

  { g:"m_anim", nom:"profesor",  acc:"profesora",  en:"professor (male)",     ar:"أستاذ / بروفيسور", at:"ustadh / brofisur", cat:"person",
    r_nom:"Masculine animate: ends in a consonant — this is the dictionary form.",
    r_acc:"Masculine animate (consonant-final): add -a → profesor + a = profesora." },

  { g:"m_anim", nom:"lekarz",    acc:"lekarza",    en:"doctor (male)",        ar:"طبيب",          at:"tabib",            cat:"person",
    r_nom:"Masculine animate: ends in a consonant — this is the dictionary form.",
    r_acc:"Masculine animate (consonant-final): add -a → lekarz + a = lekarza." },

  { g:"m_anim", nom:"nauczyciel",acc:"nauczyciela",en:"teacher (male)",       ar:"مدرس / معلم",   at:"mudarris / mu'allim",cat:"person",
    r_nom:"Masculine animate: ends in -l (soft) — this is the dictionary form.",
    r_acc:"Masculine animate (soft consonant): add -a → nauczyciel + a = nauczyciela." },

  { g:"m_anim", nom:"brat",      acc:"brata",      en:"brother",              ar:"أخ",            at:"akh",              cat:"person",
    r_nom:"Masculine animate: ends in a consonant — this is the dictionary form.",
    r_acc:"Masculine animate (consonant-final): add -a → brat + a = brata." },

  { g:"m_anim", nom:"syn",       acc:"syna",       en:"son",                  ar:"ابن",           at:"ibn",              cat:"person",
    r_nom:"Masculine animate: ends in a consonant — this is the dictionary form.",
    r_acc:"Masculine animate (consonant-final): add -a → syn + a = syna." },

  { g:"m_anim", nom:"przyjaciel",acc:"przyjaciela",en:"friend (male)",        ar:"صديق",          at:"sadiq",            cat:"person",
    r_nom:"Masculine animate: ends in -l (soft) — this is the dictionary form.",
    r_acc:"Masculine animate (soft consonant): add -a → przyjaciel + a = przyjaciela." },

  { g:"m_anim", nom:"sąsiad",    acc:"sąsiada",    en:"neighbour (male)",     ar:"جار",           at:"jar",              cat:"person",
    r_nom:"Masculine animate: ends in a consonant — this is the dictionary form.",
    r_acc:"Masculine animate (consonant-final): add -a → sąsiad + a = sąsiada." },

  { g:"m_anim", nom:"mężczyzna", acc:"mężczyznę",  en:"man",                  ar:"رجل",           at:"rajul",            cat:"person",
    r_nom:"Masculine animate ending in -a (looks feminine but is masculine!)",
    r_acc:"Masculine animate ending in -a: change -a → -ę (same pattern as feminine!) → mężczyznę." },

  { g:"m_anim", nom:"kolega",    acc:"kolegę",     en:"male colleague / friend", ar:"زميل / صديق", at:"zamil / sadiq",   cat:"person",
    r_nom:"Masculine animate ending in -a (looks feminine but is masculine!)",
    r_acc:"Masculine animate ending in -a: change -a → -ę → kolegę." },

  { g:"m_anim", nom:"turysta",   acc:"turystę",    en:"tourist (male)",       ar:"سائح",          at:"sa'ih",            cat:"person",
    r_nom:"Masculine animate ending in -a (looks feminine but is masculine!)",
    r_acc:"Masculine animate ending in -a: change -a → -ę → turystę." },

  { g:"m_anim", nom:"artysta",   acc:"artystę",    en:"artist (male)",        ar:"فنان",          at:"fannan",           cat:"person",
    r_nom:"Masculine animate ending in -a (looks feminine but is masculine!)",
    r_acc:"Masculine animate ending in -a: change -a → -ę → artystę." },

  { g:"m_anim", nom:"dentysta",  acc:"dentystę",   en:"dentist (male)",       ar:"طبيب أسنان",    at:"tabib asnan",      cat:"person",
    r_nom:"Masculine animate ending in -a (looks feminine but is masculine!)",
    r_acc:"Masculine animate ending in -a: change -a → -ę → dentystę." },

  { g:"m_anim", nom:"kierowca",  acc:"kierowcę",   en:"driver (male)",        ar:"سائق",          at:"sa'iq",            cat:"person",
    r_nom:"Masculine animate ending in -a (looks feminine but is masculine!)",
    r_acc:"Masculine animate ending in -a: change -a → -ę → kierowcę." },

  // Irregular people
  { g:"m_anim", nom:"ojciec",    acc:"ojca",       en:"father",               ar:"أب",            at:"ab",               cat:"person",
    r_nom:"Masculine animate, irregular: the -ie- in the stem drops in oblique cases.",
    r_acc:"Irregular: ojciec → ojca (the -ie- drops before -c-)." },

  { g:"m_anim", nom:"chłopiec",  acc:"chłopca",    en:"boy",                  ar:"ولد / صبي",     at:"walad / sabi",     cat:"person",
    r_nom:"Masculine animate: ends in a consonant — this is the dictionary form.",
    r_acc:"Irregular: chłopiec → chłopca (the -ie- drops, then +a)." },

  { g:"m_anim", nom:"dziadek",   acc:"dziadka",    en:"grandfather",          ar:"جد",            at:"jadd",             cat:"person",
    r_nom:"Masculine animate: the -e- in dziadEk is a mobile vowel that drops in other cases.",
    r_acc:"Irregular: dziadek → dziadka (mobile -e- drops, then +a)." },

  { g:"m_anim", nom:"mąż",       acc:"męża",       en:"husband",              ar:"زوج",           at:"zawj",             cat:"person",
    r_nom:"Masculine animate: the nasal ą changes to ę in some forms.",
    r_acc:"Irregular: mąż → męża (ą changes to ę, then +a)." },

  // Animals
  { g:"m_anim", nom:"pies",      acc:"psa",        en:"dog",                  ar:"كلب",           at:"kalb",             cat:"animal",
    r_nom:"Masculine animate: ends in a consonant — this is the dictionary form.",
    r_acc:"Irregular: pies → psa (the -ie- vowel drops entirely: pi-es → p-s-a)." },

  { g:"m_anim", nom:"kot",       acc:"kota",       en:"cat",                  ar:"قطة",           at:"qitta",            cat:"animal",
    r_nom:"Masculine animate: ends in a consonant — this is the dictionary form.",
    r_acc:"Masculine animate (consonant-final): add -a → kot + a = kota." },

  { g:"m_anim", nom:"koń",       acc:"konia",      en:"horse",                ar:"حصان",          at:"hisan",            cat:"animal",
    r_nom:"Masculine animate: ends in -ń (soft nasal) — this is the dictionary form.",
    r_acc:"Masculine animate (soft -ń): add -ia → koń + ia = konia." },

  { g:"m_anim", nom:"ptak",      acc:"ptaka",      en:"bird",                 ar:"طائر",          at:"ta'ir",            cat:"animal",
    r_nom:"Masculine animate: ends in a consonant — this is the dictionary form.",
    r_acc:"Masculine animate (consonant-final): add -a → ptak + a = ptaka." },

  { g:"f", nom:"ryba",        acc:"rybę",         en:"fish",                ar:"سمكة",          at:"samaka",           cat:"animal",
    r_nom:"Feminine: ends in -a — dictionary form. (Some animal words are grammatically feminine!)",
    r_acc:"Feminine (-a ending): change -a → -ę → rybę." },

  { g:"m_anim", nom:"pająk",     acc:"pająka",     en:"spider",               ar:"عنكبوت",        at:"'ankabut",         cat:"animal",
    r_nom:"Masculine animate: ends in a consonant — this is the dictionary form.",
    r_acc:"Masculine animate (consonant-final): add -a → pająk + a = pająka." },

  { g:"m_anim", nom:"niedźwiedź",acc:"niedźwiedzia",en:"bear",                ar:"دب",            at:"dubb",             cat:"animal",
    r_nom:"Masculine animate: ends in soft -dź — this is the dictionary form.",
    r_acc:"Masculine animate (soft consonant): add -ia → niedźwiedź + ia = niedźwiedzia." },

  /* ── MASCULINE INANIMATE (m_inan) ───────────────────────────────────
     Nominative = dictionary form (consonant-final)
     Accusative = SAME as nominative (no change!)
  ──────────────────────────────────────────────────────────────────── */

  { g:"m_inan", nom:"dom",       acc:"dom",        en:"house",                ar:"منزل / بيت",    at:"manzil / bayt",    cat:"place",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → dom." },

  { g:"m_inan", nom:"sklep",     acc:"sklep",      en:"shop / store",         ar:"متجر",          at:"matjar",           cat:"place",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → sklep." },

  { g:"m_inan", nom:"autobus",   acc:"autobus",    en:"bus",                  ar:"أوتوبيس",       at:"otoobees",         cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → autobus." },

  { g:"m_inan", nom:"telefon",   acc:"telefon",    en:"phone",                ar:"هاتف",          at:"hatif",            cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → telefon." },

  { g:"m_inan", nom:"komputer",  acc:"komputer",   en:"computer",             ar:"حاسوب / كمبيوتر", at:"hasub / kumbyuter", cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → komputer." },

  { g:"m_inan", nom:"rower",     acc:"rower",      en:"bicycle",              ar:"دراجة",         at:"darraja",          cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → rower." },

  { g:"m_inan", nom:"klucz",     acc:"klucz",      en:"key",                  ar:"مفتاح",         at:"miftah",           cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → klucz." },

  { g:"m_inan", nom:"stół",      acc:"stół",       en:"table",                ar:"طاولة",         at:"tawila",           cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant (ł) — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → stół." },

  { g:"m_inan", nom:"fotel",     acc:"fotel",      en:"armchair",             ar:"كرسي مريح",     at:"kursi murih",      cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → fotel." },

  { g:"m_inan", nom:"obraz",     acc:"obraz",      en:"painting / picture",   ar:"لوحة",          at:"lawha",            cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → obraz." },

  { g:"m_inan", nom:"park",      acc:"park",       en:"park",                 ar:"حديقة عامة",    at:"hadiqa 'amma",     cat:"place",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → park." },

  { g:"m_inan", nom:"rynek",     acc:"rynek",      en:"market square",        ar:"ساحة السوق",    at:"sahat al-suq",     cat:"place",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → rynek." },

  { g:"m_inan", nom:"hotel",     acc:"hotel",      en:"hotel",                ar:"فندق",          at:"funduq",           cat:"place",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → hotel." },

  { g:"m_inan", nom:"bilet",     acc:"bilet",      en:"ticket",               ar:"تذكرة",         at:"tadhkara",         cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → bilet." },

  { g:"m_inan", nom:"ser",       acc:"ser",        en:"cheese",               ar:"جبن",           at:"jubn",             cat:"food",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → ser." },

  { g:"m_inan", nom:"chleb",     acc:"chleb",      en:"bread",                ar:"خبز",           at:"khubz",            cat:"food",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → chleb." },

  { g:"m_inan", nom:"obiad",     acc:"obiad",      en:"dinner / lunch",       ar:"غداء",          at:"ghada'",           cat:"food",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → obiad." },

  { g:"m_inan", nom:"sok",       acc:"sok",        en:"juice",                ar:"عصير",          at:"'asir",            cat:"food",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → sok." },

  { g:"m_inan", nom:"film",      acc:"film",       en:"film / movie",         ar:"فيلم",          at:"film",             cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → film." },

  { g:"m_inan", nom:"język",     acc:"język",      en:"language / tongue",    ar:"لغة / لسان",    at:"lugha / lisan",    cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → język." },

  { g:"m_inan", nom:"kurs",      acc:"kurs",       en:"course",               ar:"دورة",          at:"dawra",            cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → kurs." },

  { g:"m_inan", nom:"sport",     acc:"sport",      en:"sport",                ar:"رياضة",         at:"riyada",           cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → sport." },

  { g:"m_inan", nom:"samochód",  acc:"samochód",   en:"car",                  ar:"سيارة",         at:"sayyara",          cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant (-d) — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → samochód." },

  { g:"m_inan", nom:"nóż",       acc:"nóż",        en:"knife",                ar:"سكين",          at:"sikkeen",          cat:"object",
    r_nom:"Masculine inanimate: ends in a consonant — dictionary form.",
    r_acc:"Masculine inanimate: accusative = nominative, no change! → nóż." },

  /* ── FEMININE (f) ────────────────────────────────────────────────────
     Nominative = ends in -a (most), -ia (soft), -i (pani)
     Accusative:
       -a  → -ę  (kobieta → kobietę)
       -ia → -ię (babcia → babcię, restauracja → restaurację)
       -i  → -ią (pani → panią)
  ──────────────────────────────────────────────────────────────────── */

  // Ending in -a
  { g:"f", nom:"kobieta",      acc:"kobietę",      en:"woman",               ar:"امرأة",         at:"imra'a",           cat:"person",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → kobietę." },

  { g:"f", nom:"mama",         acc:"mamę",         en:"mom / mum",           ar:"أم / ماما",     at:"umm / mama",       cat:"person",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → mamę." },

  { g:"f", nom:"siostra",      acc:"siostrę",      en:"sister",              ar:"أخت",           at:"ukht",             cat:"person",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → siostrę." },

  { g:"f", nom:"córka",        acc:"córkę",        en:"daughter",            ar:"ابنة",          at:"ibna",             cat:"person",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → córkę." },

  { g:"f", nom:"studentka",    acc:"studentkę",    en:"student (female)",    ar:"طالبة",         at:"taliba",           cat:"person",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → studentkę." },

  { g:"f", nom:"nauczycielka", acc:"nauczycielkę", en:"teacher (female)",    ar:"مدرسة / معلمة", at:"mudarrisa / mu'allima",cat:"person",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → nauczycielkę." },

  { g:"f", nom:"lekarka",      acc:"lekarkę",      en:"doctor (female)",     ar:"طبيبة",         at:"tabiba",           cat:"person",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → lekarkę." },

  { g:"f", nom:"żona",         acc:"żonę",         en:"wife",                ar:"زوجة",          at:"zawja",            cat:"person",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → żonę." },

  { g:"f", nom:"dziewczyna",   acc:"dziewczynę",   en:"girl / girlfriend",   ar:"فتاة",          at:"fata",             cat:"person",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → dziewczynę." },

  { g:"f", nom:"koleżanka",    acc:"koleżankę",    en:"female colleague / friend", ar:"زميلة / صديقة",at:"zamila / sadiqa", cat:"person",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → koleżankę." },

  { g:"f", nom:"książka",      acc:"książkę",      en:"book",                ar:"كتاب",          at:"kitab",            cat:"object",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → książkę." },

  { g:"f", nom:"torba",        acc:"torbę",        en:"bag",                 ar:"حقيبة",         at:"haqiba",           cat:"object",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → torbę." },

  { g:"f", nom:"woda",         acc:"wodę",         en:"water",               ar:"ماء",           at:"ma'",              cat:"food",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → wodę." },

  { g:"f", nom:"kawa",         acc:"kawę",         en:"coffee",              ar:"قهوة",          at:"qahwa",            cat:"food",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → kawę." },

  { g:"f", nom:"herbata",      acc:"herbatę",      en:"tea",                 ar:"شاي",           at:"shay",             cat:"food",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → herbatę." },

  { g:"f", nom:"pizza",        acc:"pizzę",        en:"pizza",               ar:"بيتزا",         at:"bitza",            cat:"food",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → pizzę." },

  { g:"f", nom:"ulica",        acc:"ulicę",        en:"street",              ar:"شارع",          at:"shari'",           cat:"place",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → ulicę." },

  { g:"f", nom:"szkoła",       acc:"szkołę",       en:"school",              ar:"مدرسة",         at:"madrasa",          cat:"place",
    r_nom:"Feminine: ends in -a — dictionary form.",
    r_acc:"Feminine (-a ending): change -a → -ę → szkołę." },

  // Ending in -ia (soft feminines)
  { g:"f", nom:"babcia",       acc:"babcię",       en:"grandmother",         ar:"جدة",           at:"jadda",            cat:"person",
    r_nom:"Feminine soft-stem: ends in -ia.",
    r_acc:"Feminine soft-stem (-ia ending): change -ia → -ię → babcię." },

  { g:"f", nom:"ciocia",       acc:"ciocię",       en:"aunt",                ar:"عمة / خالة",    at:"'amma / khala",    cat:"person",
    r_nom:"Feminine soft-stem: ends in -ia.",
    r_acc:"Feminine soft-stem (-ia ending): change -ia → -ię → ciocię." },

  { g:"f", nom:"restauracja",  acc:"restaurację",  en:"restaurant",          ar:"مطعم",          at:"mat'am",           cat:"place",
    r_nom:"Feminine: ends in -ja (soft) — dictionary form.",
    r_acc:"Feminine soft (-ja ending): -ja → -ję → restaurację." },

  { g:"f", nom:"informacja",   acc:"informację",   en:"information",         ar:"معلومة / إعلان", at:"ma'luma / i'lan",  cat:"object",
    r_nom:"Feminine: ends in -ja (soft) — dictionary form.",
    r_acc:"Feminine soft (-ja ending): -ja → -ję → informację." },

  // Ending in -i (pani-type)
  { g:"f", nom:"pani",         acc:"panią",        en:"Mrs / Ms / woman (polite)", ar:"السيدة",  at:"al-sayyida",       cat:"person",
    r_nom:"Feminine special stem: ends in -i (soft stem). Nominative = pani.",
    r_acc:"Feminine soft-i stem: add -ą → pani + ą = panią." },

  // Consonant-final feminines (no -a)
  { g:"f", nom:"noc",          acc:"noc",          en:"night",               ar:"ليل / ليلة",    at:"layl / layla",     cat:"object",
    r_nom:"Feminine: ends in a consonant — some feminines don't end in -a.",
    r_acc:"Feminine (consonant-final): accusative = nominative, no change! → noc." },

  { g:"f", nom:"kość",         acc:"kość",         en:"bone",                ar:"عظمة",          at:"'azma",            cat:"object",
    r_nom:"Feminine: ends in a soft consonant (-ść) — dictionary form.",
    r_acc:"Feminine (soft-consonant final): accusative = nominative, no change! → kość." },

  { g:"f", nom:"miłość",       acc:"miłość",       en:"love",                ar:"حب",            at:"hubb",             cat:"object",
    r_nom:"Feminine abstract: ends in -ość — dictionary form.",
    r_acc:"Feminine (-ość ending): accusative = nominative, no change! → miłość." },

  /* ── NEUTER (n) ──────────────────────────────────────────────────────
     Nominative = ends in -o, -e/-ie, or -ę
     Accusative = SAME as nominative (no change!)
  ──────────────────────────────────────────────────────────────────── */

  { g:"n", nom:"miasto",       acc:"miasto",       en:"city / town",         ar:"مدينة",         at:"madina",           cat:"place",
    r_nom:"Neuter: ends in -o — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → miasto." },

  { g:"n", nom:"mieszkanie",   acc:"mieszkanie",   en:"apartment / flat",    ar:"شقة",           at:"shaqqa",           cat:"place",
    r_nom:"Neuter: ends in -ie — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → mieszkanie." },

  { g:"n", nom:"morze",        acc:"morze",        en:"sea",                 ar:"بحر",           at:"bahr",             cat:"place",
    r_nom:"Neuter: ends in -e — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → morze." },

  { g:"n", nom:"okno",         acc:"okno",         en:"window",              ar:"نافذة",         at:"nafidha",          cat:"object",
    r_nom:"Neuter: ends in -o — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → okno." },

  { g:"n", nom:"słowo",        acc:"słowo",        en:"word",                ar:"كلمة",          at:"kalima",           cat:"object",
    r_nom:"Neuter: ends in -o — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → słowo." },

  { g:"n", nom:"muzeum",       acc:"muzeum",       en:"museum",              ar:"متحف",          at:"mathaf",           cat:"place",
    r_nom:"Neuter: ends in -um (foreign loan) — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → muzeum." },

  { g:"n", nom:"centrum",      acc:"centrum",      en:"center / centre",     ar:"مركز / وسط المدينة",at:"markaz / wust al-madina",cat:"place",
    r_nom:"Neuter: ends in -um (Latin loan) — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → centrum." },

  { g:"n", nom:"dziecko",      acc:"dziecko",      en:"child",               ar:"طفل",           at:"tifl",             cat:"person",
    r_nom:"Neuter: ends in -o — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → dziecko." },

  { g:"n", nom:"imię",         acc:"imię",         en:"first name",          ar:"اسم أول",       at:"ism awwal",        cat:"object",
    r_nom:"Neuter: ends in -ę (soft nasal) — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → imię." },

  { g:"n", nom:"pytanie",      acc:"pytanie",      en:"question",            ar:"سؤال",          at:"su'al",            cat:"object",
    r_nom:"Neuter: ends in -ie — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → pytanie." },

  { g:"n", nom:"ćwiczenie",    acc:"ćwiczenie",    en:"exercise",            ar:"تمرين",         at:"tamrin",           cat:"object",
    r_nom:"Neuter: ends in -ie — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → ćwiczenie." },

  { g:"n", nom:"piwo",         acc:"piwo",         en:"beer",                ar:"بيرة",          at:"bira",             cat:"food",
    r_nom:"Neuter: ends in -o — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → piwo." },

  { g:"n", nom:"mleko",        acc:"mleko",        en:"milk",                ar:"حليب",          at:"haleeb",           cat:"food",
    r_nom:"Neuter: ends in -o — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → mleko." },

  { g:"n", nom:"jabłko",       acc:"jabłko",       en:"apple",               ar:"تفاحة",         at:"tuffaha",          cat:"food",
    r_nom:"Neuter: ends in -o — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → jabłko." },

  { g:"n", nom:"śniadanie",    acc:"śniadanie",    en:"breakfast",           ar:"إفطار / فطور",  at:"iftar / futoor",   cat:"food",
    r_nom:"Neuter: ends in -ie — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → śniadanie." },

  { g:"n", nom:"jajko",        acc:"jajko",        en:"egg",                 ar:"بيضة",          at:"bayda",            cat:"food",
    r_nom:"Neuter: ends in -o — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → jajko." },

  { g:"n", nom:"zdjęcie",      acc:"zdjęcie",      en:"photo / picture",     ar:"صورة",          at:"sura",             cat:"object",
    r_nom:"Neuter: ends in -ie — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → zdjęcie." },

  { g:"n", nom:"zadanie",      acc:"zadanie",      en:"task / homework",     ar:"واجب / مهمة",   at:"wajib / mahamma",  cat:"object",
    r_nom:"Neuter: ends in -ie — dictionary form.",
    r_acc:"Neuter: accusative = nominative, no change! → zadanie." },

];

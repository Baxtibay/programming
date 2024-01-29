const form = document.querySelector('.form');


const answersDB = () => [
  {
    quostion: "SQL operatorlari asosan nechta guruxga bo’linadi ?",
    a: "4",
    b: "5",
    c: "6",
    d: "8"
  },
  {
    quostion: "SQL da natijani tartiblash uchun qaysi kalit so’zdan foydalaniladi ?",
    a: "ORDER BY",
    b: "ORDER",
    c: "SORT",
    d: "SORT BY"
  },
  {
    quostion: "Ma’lumotlarni relyatsion modeli kim tomonidan taklif etilgan ?",
    a: "Edgar Kodd",
    b: "Nikolas Virt",
    c: "Simonov M",
    d: "Eyler"
  },
  {
    quostion: "MBBT ni paydo bo’lish tarixida nechta til qo’shib ishlatilgan?",
    a: "3",
    b: "4",
    c: "7",
    d: "10"
  },
  {
    quostion: "Ma’lumotlar bazasini loyixalashtirish jarayoni nechta bosqichga bo’linadi? ?",
    a: "4",
    b: "2",
    c: "5",
    d: "3"
  },
  {
    quostion: "Kortejlar soni deganda nima tushuniladi ?",
    a: "Kardinal soni",
    b: "Munosabat darajasi",
    c: "Birlamchi kalitlar",
    d: "ikkilamchi kalitlar"
  },
  {
    quostion: "MBBT da yozuvlarni adreslashda qaysi qidiruv usulini to’g’ridan-to’g’ri murojat qurilmalarida ishlatib bo’lmaydi?",
    a: "Binar qidirish",
    b: "Blokli qidirish",
    c: "Chiziqli qidirish",
    d: "birma bir qidirish"
  },
  {
    quostion: "bu ob’ekt atributini mumkin bo’lgan barcha qiymatlar to’plamidir ?",
    a: "Domen",
    b: "Ustun",
    c: "Yozuv",
    d: "jadval"
  },
  {
    quostion: ".... – bu ma’lumotlar o’zaro bog’langan tuzilishlari va ular ustida bajariladigan operatsiyalar to’plamidir",
    a: "Ma’lumotlar modeli",
    b: "Baza loyixasi",
    c: "Ma’lumot atributi",
    d: "Ma'lumot tuzilishi"
  },
  {
    quostion: "Infologik model diagrammasini qurishda romb shakli nimani bildiradi?",
    a: "Ob’ektlar orasidagi aloqa",
    b: "Diagramma ob’ektlari",
    c: "Ob’ekt atributlari",
    d: "bunday shakl ishlatilmaydi"
  },
  {
    quostion: "Relyatsion algebraning “birlashtirish” operatori SQL da qanday ifodalanadi ?",
    a: "UNION",
    b: "EXCEPT",
    c: "SELECT",
    d: "MINUS"
  },
  {
    quostion: "relyatsion algebraning “Ayirish” operatori SQL da qanday ifodalanadi ?",
    a: "EXCEPT",
    b: "INTERSECT",
    c: "SELECT",
    d: "WHERE"
  },
  {
    quostion: "Relyatsion algebraning “kesishma” operatori SQL da qanday ifodalanadi ?",
    a: "INTERSECT",
    b: "SELECT",
    c: "UNION",
    d: "JOIN"
  },
  {
    quostion: "Relyatsion algebraning “ulash” operatori SQL da qanday ifodalanadi ?",
    a: "JOIN",
    b: "INSERT",
    c: "UPDATE",
    d: "DELETE"
  },
  {
    quostion: "Relyatsion algebra Kodd tomonidan aniqlangan nechta operatordan iborat ?",
    a: "8 ta",
    b: "-9 ta",
    c: "12 ta",
    d: "10 ta"
  },
  {
    quostion: "Ma’lumotlar bazasi ichida ortiqcha ma’lumotlarni olib tashlash imkonini beradigan jarayonga nima deyiladi? ?",
    a: "Normallashtirish",
    b: "Bog’lash",
    c: "Ulash",
    d: "Kesishish"
  },
  {
    quostion: "HAVING operatori qanday operator ?",
    a: "Tanlash",
    b: "Shart",
    c: "O'zgartirish",
    d: "Kiritish"
  },
  {
    quostion: "Qiymat mavjud emasligini tekshiruvchi operator qaysi ?",
    a: "IS NULL",
    b: "IN",
    c: "OR",
    d: "AND"
  },
  {
    quostion: "Guruxli funktsiyalardan jadvaldagi satrlar sonini aniqlab beruvchi operator qaysi ?",
    a: "Count",
    b: "Sum",
    c: "Avg",
    d: "MIN"
  },
  {
    quostion: "Guruxli funktsiyalarda tanlab olingan maydon qiymatlarini o’rta arifmetigini chiqaruvchi operator ?",
    a: "AVG",
    b: "SUM",
    c: "COUNT",
    d: "MAX"
  },
  {
    quostion: "SQL da foydalanuvchiga ruxsatni beruvchi operator qaysi? ",
    a: "GRANT",
    b: "CREATE USER",
    c: "ALTER",
    d: "DELETE"
  },
  {
    quostion: "Jadvalda indeks yaratish huquqini beruvchi operator ?",
    a: "Index",
    b: "Synonym",
    c: "Delete",
    d: "UNIQUE"
  },
  {
    quostion: "…..- bu imtiyozga ega foydalanuvchi jadvalni ustunidan ajdod kalit sifatida foydalanadi. ?",
    a: "REFERENCES",
    b: "UPDATE",
    c: "INDEX",
    d: "ALTER"
  },
  {
    quostion: "GRANT komandasini nechta formati mavjud? ?",
    a: "4",
    b: "6",
    c: "8",
    d: "12"
  },
  {
    quostion: "Rol nechta qismdan iborat ?",
    a: "2",
    b: "3",
    c: "4",
    d: "8"
  },
  {
    quostion: "Foydalanuvchi imtiyozlarini ko’rish uchun qaysi operatordan foydalaniladi? ",
    a: "SHOW GRANTS",
    b: "BETWEEN",
    c: "DROP",
    d: "ALTER"
  },
  {
    quostion: "Ma’lumotlar bazasidan ma’lumotlarni chiqarish uchun qaysi SQL operatoridan foydalaniladi? ",
    a: "SELECT",
    b: "EXTRACT",
    c: "GET",
    d: "OPEN"
  },
  {
    quostion: "Qaysi SQL operatori yordamida ma’lumotlar bazasidagi  ma’lumotlarni yangilash(o’zgartirish) mumkin? ",
    a: "UPDATE",
    b: "MODIFY",
    c: "SAVE AS",
    d: "SAVE"
  },
  {
    quostion: "Ma’lumotlar bazasidan ma’lumotlarni o’chirish uchun qaysi SQL operatoridan foydalaniladi?",
    a: "DELETE",
    b: "COLLAPSE",
    c: "REMOVE",
    d: "DROP"
  },
  {
    quostion: "Qaysi SQL operatori yordamida ma’lumotlar bazasidagi jadvallarga yangi ma’lumotlarni kiritishimiz mumkin?",
    a: "INSERT INTO",
    b: "ADD RECORD",
    c: "ADD NEW",
    d: "INSERT NEW"
  },
  {
    quostion: "Foydalanuvchini o’chirish operatori qaysi?",
    a: "DROP USER",
    b: "DELATE USER",
    c: "REVOKE",
    d: "GRANT"
  },
  {
    quostion: "Maydondagi yozuvni qidirishning kalit so’zi qaysi qatorda to’g’ri ko’rsatilgan?",
    a: "LIKE",
    b: "GET",
    c: "FROM",
    d: "GROUP"
  },
  {
    quostion: "Maydon bu?",
    a: "jadval qatori",
    b: "jadval ustuni",
    c: "bir xil turdagi ma'lumotlarning umumiyligi",
    d: "jadval nomi"
  },
  {
    quostion: "SQL ning qaysi operatori faqat turli qiymatlarni qaytarish uchun ishlatiladi?",
    a: "SELECT DISTINCT",
    b: "SELECT UNIQUE",
    c: "SELECT DIFFERENT",
    d: "SELECT CHECK"
  },
  {
    quostion: "SQL ning qaysi operatori faqat turli qiymatlarni qaytarish uchun ishlatiladi?",
    a: "SELECT DISTINCT",
    b: "SELECT UNIQUE",
    c: "SELECT DIFFERENT",
    d: "SELECT CHECK"
  },
  {
    quostion: "SQL so’zining kengaytmasi...",
    a: "Structured Query Language",
    b: "Strong Question Language",
    c: "Structured Question Language",
    d: "Structured Question layer"
  },
  {
    quostion: "OR operatori keltirilgan shartlarning birortasi rost bo’lsa ham natija rost bo’ladi AND operatori keltirilgan shartlarning hammasi rost bo’lgandagina rost qiymat qaytaradi. Ushbu jumla haqida to'g'ri ma'lumot berilgan variant qaysi?",
    a: "To’g’ri",
    b: "Yolg’on",
    c: "AND mantiqiy operator emas",
    d: "OR mantiqiy operator emas"
  },
  {
    quostion: "Ma’lumotlar banki tushunchasi nechta turda talqin etiladi?",
    a: "2",
    b: "5",
    c: "3",
    d: "4"
  },
  {
    quostion: "Jadvallarni birlashtirishning eng ko’p qo’llaniladigan turi qaysi?",
    a: "INNER JOIN",
    b: "JOINED TABLE",
    c: "JOINED",
    d: "INSIDE JOIN"
  },
  {
    quostion: "Oraliqdagi qiymatlarni tanlash uchun qaysi operatordan foydalaniladi?",
    a: "BETWEEN",
    b: "WITHIN",
    c: "RANGE",
    d: "LIKE"
  },
  {
    quostion: "Qaysi kalit so’zlar yordamida ma’lumotlar bazasida yangidan tablitsa yaratishimiz mumkin?",
    a: "CREATE TABLE",
    b: "CREATE DB",
    c: "CREATE DATABASE TAB",
    d: "CREATE DATABASE TABLE"
  },
  {
    quostion: "Ma'lumotlar bazasi?",
    a: "bitta disketada to'plangan ma'lumotlar to'plami;",
    b: "dastur uchun mo'ljallangan ma'lumotlar;",
    c: "ma'lumotlarni tavsiflash, saqlash va qayta ishlashning umumiy printsiplarini nazarda tutuvchi muayyan qoidalarga muvofiq tashkil etilgan o'zaro bog'liq ma'lumotlar to'plami;",
    d: "Ma'lumotlar aloqa tarmoqlari orqali yuboriladi."
  },
  {
    quostion: "Faktlar bazasi?",
    a: "Ta'riflangan ob'ektlar to'g'risida qisqacha ma'lumotni o'z ichiga olgan ma'lumotlar bazasi, qat'iy belgilangan formatda taqdim etilgan;",
    b: "Har xil turdagi keng qamrovli ma'lumotlarni o'z ichiga olgan ma'lumotlar bazasi: matnli, grafik, ovozli, multimedia;",
    c: "Ma'lum bir yo'nalishga oid ma'lumotlarni o'z ichiga olgan MB;",
    d: "Shaxsiy kompyuter foydalanuvchisining ma'lumotlarini o'z ichiga olgan ma'lumotlar bazasi."
  },
  {
    quostion: "Faktografik ma'lumotlar bazasiga (BD) misol sifatida quyidagilar kiradi:",
    a: "muassasaning shaxsiy tarkibi to'g'risidagi ma'lumotlar;",
    b: "qonun hujjatlari;",
    c: "muassasa buyurtmalari;",
    d: "normativ moliyaviy hujjatlar."
  },
  {
    quostion: "Axborot tizimi?",
    a: "Internet tarmog'i holati to'g'risidagi ma'lumotlarni saqlaydigan tizim",
    b: "ma'lumotlarni olish uchun mo'ljallangan apparat va dasturiy ta'minot majmui;",
    c: "foydalanuvchi bilan o'zaro aloqada bo'lish uchun ma'lumotlar bazasi va uni saqlash, o'zgartirish va qidirish uchun mo'ljallangan barcha dasturiy-texnik vositalar majmui;",
    d: "Foydalanuvchiga kerakli ma'lumotlarni taqdim etadigan tizim."
  },
  {
    quostion: "MBBT dastur majmualaridan qachondan boshlab foydalanila boshlangan?",
    a: "XX asrning 60-yillari",
    b: "XX asrning 70-yillari",
    c: "XX asrning 10-yillari",
    d: "XIX asrning 60-yillari"
  },
  {
    quostion: "Ierarxik ma'lumotlar bazasi?",
    a: "To'rtburchaklar jadvallar ko'rinishidagi ma'lumotlar tashkil etiladigan ma'lumotlar bazasi;",
    b: "Bitta element asosiy deb hisoblanadi, qolganlari bo'ysunadi;",
    c: "Yozuvlar tasodifiy tartibda joylashgan ma'lumotlar bazasi;",
    d: "Vertikal ierarxik munosabatlarga qo'shimcha ravishda gorizontal aloqalarni o'rnatish mumkin bo'lgan ma'lumotlar bazasi."
  },
  {
    quostion: "Ierarxik bazada ma'lumotlar yig'indisi va ular o'rtasidagi munosabatlar  qanday  ko`rinishda tavsiflanadi:",
    a: "tarmoq sxemasi;",
    b: "daraxt tuzilishi;",
    c: "jadvallar to'plami.",
    d: "bunday baza mavjud emas"
  },
  {
    quostion: "Ierarxik ma'lumotlar bazasiga misol:",
    a: "diskda saqlanadigan fayllar katalogi;",
    b: "poezdlar jadvali;",
    c: "elektron jadval.",
    d: "reja grafik"
  },
  {
    quostion: "Nisbiy ma'lumotlar bazasi (MB) sohasida quyidagilar yozilishi mumkin:",
    a: "faqat rekord raqamlar;",
    b: "bir vaqtning o'zida ikkala raqamli va matnli ma'lumotlar;",
    c: "faqat bitta turdagi ma'lumotlar;",
    d: "faqat yozuvlarni yaratish uchun vaqt."
  },
  {
    quostion: "0.7-3> 2 ifodasining qiymati quyidagi ma'lumotlar qaysi turiga tegishli:",
    a: "sonli",
    b: "mantiqiy",
    c: "matnli",
    d: "grafik"
  },
  {
    quostion: "Ma'lumotlar bazasini boshqarish tizimi (MBBT) bu:",
    a: "ma'lumotlar bazasi fayllarida ma'lumotlarni to'ldirish va boshqarishni qo'llab-quvvatlovchi dasturiy ta'minot tizimi;",
    b: "barcha kompyuter qurilmalarining ishlashini va ularga foydalanuvchilarning kirishini ta'minlaydigan dasturlar to'plami;",
    c: "matnlar va turli xil hujjatlarni qayta ishlash uchun ishlangan dasturi;",
    d: "fayllar bilan ishlashni qulayroq qilish imkonini beradigan operatsion tizimning qobig'i."
  },
  {
    quostion: "Ma'lumotlar bazasining asosiy funktsiyalari quyidagilarni o'z ichiga olmaydi:",
    a: "ma'lumotlar bazasida qanday ma'lumot (nima to'g'risida) saqlanishini aniqlash;",
    b: "ma'lumotlar bazasi fayllari tuzilishini yaratish;",
    c: "ma'lumotlarni birlamchi kiritish, to'ldirish, tahrirlash;",
    d: "Ma'lumotlarni qidirish va tartiblash."
  },
  {
    quostion: "Jadval tuzilishi - bu nima?",
    a: "jadvalning umumiy ko'rinishi;",
    b: "Jadval satrlarining tavsifi",
    c: "Jadval ustunlarining tavsifi",
    d: "jadvalning qatorlari va ustunlari soni."
  },
  {
    quostion: "Ma’lumotlar bazasiga berilgan to'g’ri ta’rifni toping ?",
    a: "EHM orqali izlash va qayta ishlash uchun tizimlashtirilgan mustaqil axborotlarning ob’ektli (aniq strukturali) formada tasvirlanishidir.",
    b: "Tizimlashtirilgan mustaqil axborotlarning aniq formada tasvirlanishidir.",
    c: "EHM orqali izlash va qayta ishlash uchun tizimlashtirilgan mustaqil axborotlarning ob’ektli va mantiqiy bog’lanishli formada tasvirlanishidir.",
    d: "Qayta ishlash uchun tizimlashtirilgan mustaqil axborotlarning mantiqiy bog’lanishli formada tasvirlanishidir."
  },
  {
    quostion: "Ma’lumotlar bazasini boshqarish tizimi deganda nimani tushunasiz ?",
    a: "ma’lumotlar bazalarini yaratish uchun dasturiy ta’minot",
    b: "ma’lumotlar bazalarini yaratish va foydalanish uchun dasturiy ta’minot",
    c: "ma’lumotlar bazalarini yaratish va foydalanish uchun boshqarishni ta’minlovchi dasturiy ta’minot",
    d: "ma’lumotlar bazalarini yaratish va foydalanish uchun boshqarishni ta’minlovchi, maxsus lingvistik vositalar majmuiga ega bo'lgan dasturiy ta’minot"
  },
  {
    quostion: "Bitta MBBTda nechtagacha MB bo'lishi mumkin?",
    a: "Bir nechta",
    b: "1 ta",
    c: "2 ta",
    d: "Turli MBBTlarda turlicha"
  },
  {
    quostion: "Relyatsion ma’lumotlar bazasining asosiy tushunchalari aniqlang?",
    a: "Jadval, ustun, qator",
    b: "Jadval, ustun, yozuv",
    c: "Jadval, maydon, yozuv",
    d: "Jadval, ustun, yacheyka"
  },
  {
    quostion: "SQL tilining alfavitida nechta harf bor ?",
    a: "26",
    b: "27",
    c: "57",
    d: "56"
  },
  {
    quostion: "Relyatsion ma’lumotlar bazasi bu-",
    a: "munosabatlarning majmuisi eki ikkilik jadvallari",
    b: "munosabatlarning majmuisi eki ikkilik bazasi",
    c: "munosabatlarning majmuisi eki ikkilik katorlar",
    d: "barcha javoblar to'g’ri"
  },
  {
    quostion: "Relyatsion ma’lumotlar bazasi",
    a: "uzgartirish va foyladanish xukukini beruvchi strukturalangan surovlar tilidir",
    b: "fizik kursatgichlarsiz jadvallarni majmuasi uzida mujassamlashtirgan",
    c: "kator operatorlardan foydalaniladi",
    d: "barcha javoblar to'g’ri"
  },
  {
    quostion: "Qo'llanish tavsifiga ko’ra MBBTlar qanday turlarga bo’linadi?",
    a: "Bir pog'onali va ko'p pog'onali",
    b: "shaxsiy va jamoaviy",
    c: "To'liq va to'liq emas",
    d: "shaxsiy va ko'p foydalanuvchilar"
  },
  {
    quostion: "Ma’nosiga e’tibor bermay qaraladigan ixtiyoriy simvollar to’plami nima deyiladi?",
    a: "Ma’lumot",
    b: "Ob’ekt",
    c: "Atribut",
    d: "Jadval"
  },
  {
    quostion: "SEQUEL deb nomlangan tilni 1974- yilda kim e’lon qilgan?",
    a: "D.Chemberlen",
    b: "Efkod",
    c: "E.Kodd",
    d: "Eyler"
  },
  {
    quostion: "SEQUEL/2 versiyasi nechanchi yil yaratilgan va SQL deb atala boshlangan?",
    a: "1976",
    b: "1958",
    c: "1966",
    d: "1876"
  },
  {
    quostion: "SQL tilining 1- rasmiy standarti nechanchi yilda qabul qilingan?",
    a: "1989",
    b: "1988",
    c: "1976",
    d: "1998"
  },
  {
    quostion: "Qachon SQL 2 versiyasi ishlab chiqilgan?",
    a: "1992-yil oxiri",
    b: "1992-yil boshi",
    c: "1991-yil",
    d: "1993-yil"
  },
  {
    quostion: "MB da ma’lumotlarni monipulyatsiya qiluvchi operatorlar yig’indisidan iborat bo’lgan guruxiga nima deyiladi?",
    a: "DML",
    b: "DTL",
    c: "DSL",
    d: "TCL"
  },
  {
    quostion: "SQL da LIKE operatorida “_” belgisi nimani bildiradi?",
    a: "Bitta ixtiyoriy simvol",
    b: "Ixtiyoriy simvol",
    c: "oxirgi simvol",
    d: "To’g’ri javob yo’q"
  },
  {
    quostion: "Biror qiymatlar to’plamiga tegishliligini tekshiruvchi operator qaysi?",
    a: "In",
    b: "Or",
    c: "Null",
    d: "IS"
  },
  {
    quostion: "JOIN ni asosiy turlari nechta?",
    a: "6",
    b: "2",
    c: "7",
    d: "5"
  },
  {
    quostion: "Asosiy agregat funktsiyalar nechta?",
    a: "6",
    b: "5",
    c: "3",
    d: "8"
  },
  {
    quostion: "Tasavvurlar qanday yaratiladi?",
    a: "CREATE VIEW",
    b: "INSERT VIEW",
    c: "ALTER VIEW",
    d: "NEW VIEW"
  },
  {
    quostion: "Triggerni yaratishda trigger nomidan oldin qaysi kalit so’zidan foydalaniladi?",
    a: "CREATE TRIGGER",
    b: "ALTER TRIGGER",
    c: "DROP TRIGGER",
    d: "NEW TRIGGER"
  },
  {
    quostion: "Jadvalga yangi ma’lumot qo’shish qaysi operator bilan amalga oshiriladi?",
    a: "Insert",
    b: "Update",
    c: "Delete",
    d: "NEW"
  },
  {
    quostion: "Jadvaldagi ma’lumotni o’chirish qaysi operator bilan amalga oshiriladi?",
    a: "Delete",
    b: "Insert",
    c: "Uptate",
    d: "DROP"
  },
  {
    quostion: "SQL tilida “Talaba” nomli jadvaldan “FIO” va “Guruhi” nomli maydonlari(ustunlari) qanday tanlanadi?",
    a: "SELECT FIO, Guruhi FROM Talaba",
    b: "SELECT Talaba.FIO, Talaba.Guruhi",
    c: "SELECT Talaba FROM FIO, Guruhi",
    d: "EXTRACT FIO, Guruhi FROM Talaba"
  },
  {
    quostion: "“Talaba” nomli jadvalning barcha maydonlarini ekranga chiqarish qaysi javobda to’g’ri yozilgan?",
    a: "SELECT * FROM Talaba",
    b: "SELECT [ALL] FROM Talaba",
    c: "SELECT Talaba",
    d: "SELECT *.Talaba"
  },
  {
    quostion: "SQL yordamida “Guruhi” ustunining qiymati “101-18-KI” bo’lgan “Talaba” nomli jadvaldan barcha yozuvlarni qanday tanlaysiz?",
    a: "SELECT * FROM Talaba WHERE Guruhi = ‘101-18-KI’",
    b: "SELECT [all] FROM Talaba WHERE Guruhi LIKE ‘101-18-KI’",
    c: "SELECT * FROM Talaba WHERE Guruhi  ‘101-18-KI’",
    d: "SELECT [all] FROM Talaba WHERE Guruhi = ‘101-18-KI’"
  },
  {
    quostion: "SQL yordamida “FirstName” ustunining qiymati “A” bilan boshlanadigan “Persons” nomli jadvaldan barcha yozuvlarni qanday tanlaysiz?",
    a: "SELECT * FROM Persons WHERE FirstName LIKE ‘A%’",
    b: "SELECT * FROM Persons WHERE FirstName LIKE ‘%A’",
    c: "SELECT * FROM Persons WHERE FirstName = ‘A’",
    d: "SELECT * FROM Persons WHERE FirstName = ‘%A%’"
  },
  {
    quostion: "SQL yordamida “FirstName” “Toshmat” va “LastName” “Eshmatov” bo’lgan “Persons” nomli jadvaldan barcha yozuvlarni qanday tanlaysiz?",
    a: "SELECT * FROM Persons WHERE FirstName = ‘Toshmat’ AND LastName = ‘Eshmatov’",
    b: "SELECT FirstName = ‘Toshmat’, LastName = ‘Eshmatov’ FROM Persons",
    c: "SELECT * FROM Persons WHERE FirstName  ‘Toshmat’ AND LastName  ‘Eshmatov’",
    d: "SELECT * FROM Persons WHERE FirstName  ‘Toshmat’ OR LastName  ‘Eshmatov’"
  },
  {
    quostion: "Persons” jadvali “Name” maydonidagi “Eshmat” yozuvini qanday o’chirish mumkin?",
    a: "DELETE FROM Persons WHERE Name = ‘Eshmat’",
    b: "DELETE Name = ‘Eshmat’ FROM Persons",
    c: "DELETE ROW Name = ‘Eshmat’ FROM Persons",
    d: "DELETE ROW Name  ‘Eshmat’ FROM Persons"
  },
  {
    quostion: "“Persons” jadvalining “LastName” ustunidagi “Paraxat” va “Furqat” oralig’ida bo’lgan barcha yozuvlarni tanlash uchun qanday kod yoziladi?",
    a: "SELECT * FROM Persons WHERE LastName BETWEEN ‘Paraxat’ AND ‘Furqat’",
    b: "SELECT * FROM Persons WHERE LastName > ‘Paraxat’ AND LastName < ‘Furqat’",
    c: "SELECT LastName > ‘Paraxat’ AND LastName < ‘Furqat’ FROM Persons",
    d: "SELECT * FROM Persons WHERE LastName = ‘Paraxat’ AND LastName < ‘Furqat"
  },
  {
    quostion: "Qanday qilib “Persons” jadvalidan “FirstName” maydonini kamayish tartibida chiqarish mumkin?",
    a: "SELECT * FROM Persons ORDER BY FirstName DESC",
    b: "SELECT * FROM Persons SORT ‘FirstName’ DESC",
    c: "SELECT * FROM Persons ORDER FirstName DESC",
    d: "SELECT * FROM Persons SORT BY ‘FirstName’ DESC"
  },
  {
    quostion: "“Persons” jadvaliga qanday qilib yangidan ma’lumot kiritasiz?",
    a: "INSERT INTO Persons VALUES (‘Jamshid’, ‘Laziz’)",
    b: "INSERT VALUES (‘Mirzo’, ‘Temur’) INTO Persons",
    c: "INSERT (‘Temur’, ‘Shaxzod’) INTO Persons",
    d: "INSERT (‘Temur’, ‘Shaxzod’) VALUES Persons"
  },
  {
    quostion: "UNION operatori qaysi qatorda to’g’ri ishlatilgan?",
    a: "(SELECT id, fio, manzili FROM student) UNION (SELECT id, fio, manzili FROM hodim)",
    b: "(SELECT id, fio, manzili FROM student) UNION (fio, manzili FROM hodim)",
    c: "(SELECT fio, manzili FROM student) UNION (SELECT * FROM hodim)",
    d: "(SELECT fio, manzili FROM student) UNION (SELECT fio  FROM hodim)"
  },
  {
    quostion: "“Persons” jadvalining “LastName” maydoniga “Jasur” so’zi qaysi qatorda to’g’ri kiritilgan:",
    a: "INSERT INTO Persons (LastName) VALUES (‘Jasur’)",
    b: "INSERT INTO Persons (‘Jasur’) INTO LastName",
    c: "INSERT (‘Jasur’) INTO Persons (LastName)",
    d: "INSERT (‘Jasur’) VALUES Persons (LastName)"
  },
  {
    quostion: "Qanday qilib “Persons” jadvalidan “Name” maydonidagi “Eshmat” o’rniga “Toshmat” ni yozib o’zgartirish mumkin?",
    a: "UPDATE Persons SET Name = ‘Toshmat’ WHERE Name = ‘Eshmat’",
    b: "MODIFY Persons SET Name = ‘Toshmat’ WHERE Name = ‘Eshmat’",
    c: "UPDATE Persons SET Name = ‘Eshmat’ INTO Name = ‘Toshmat’",
    d: "MODIFY Persons SET Name = ‘Toshmat’ INTO Name = ‘Eshmat’"
  },
  {
    quostion: "“Talaba” jadvalidagi yozuvlar sonini qanday chiqarish mumkin?",
    a: "SELECT COUNT(*) FROM Talaba",
    b: "SELECT COLUMNS(*) FROM Talaba",
    c: "SELECT LEN(*) FROM Talaba",
    d: "SELECT NO(*) FROM Talaba"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday natija qaytaradi: SELECT * FROM talaba WERE yoshi=18 UNION  SELECT * FROM talaba WERE yoshi=20",
    a: "Yoshi 18 yoki 20 da bo’lgan talbalarni",
    b: "SQL so’rovida xatolik bor.",
    c: "Yoshi 18-20 oralig’idagi talabalarni",
    d: "Yoshi 18 dan kichik yoki 20 dan katta talabalarni"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday vazifanni bajaradi: INSERT INTO Talaba(id, name), (1,'Eshmat'), (2, 'Toshmat'), (3, 'Shermat')",
    a: "SQL so’rovi xatolik haqida xabar beradi",
    b: "Talaba jadvaliga 3 ta qator qo’shiladi",
    c: "Talaba jadvalidan 3 ta ustun olib tashlanadi",
    d: "Talaba jadvaliga 3 ta ustun qo’shiladi"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday natija qaytaradi: SELECT * FROM Talaba ORDER BY yoshi;",
    a: "Talabalarning o’rtacha yoshini alaba jadvalidagi barcha ma’lumotlarni talabaning ismi bo’yicha o’sish tartibida",
    b: "Talaba jadvalidagi barcha ma’lumotlarni talabaning yoshi bo’yicha kamayish tartibida",
    c: "Barcha talabalarning yoshini;",
    d: "Talaba jadvalidagi barcha ma’lumotlarni talabaning yoshi bo’yicha o’sish tartibida"
  },
  {
    quostion: "Ma’lumotlar bazasidan ”Talaba” nomli jadvalni o’chirib tashlash uchun qaysi SQL so’rovini ishlatamiz?",
    a: "DELETE TABLE Talaba;",
    b: "CREATE TABLE Talaba;",
    c: "UPDATE TABLE Talaba;",
    d: "DROP TABLE Talaba;"
  },
  {
    quostion: "Talaba jadvalidagi ma’lumotlarni barcha chiqarish uchun quyidagicha kod yoziladi",
    a: "SELECT * FROM Talaba;",
    b: "SELECT ism,familiya FROM TALABA ;",
    c: "SELECT *FROM TALABA;",
    d: "SELECT *FROM TALABA WHERE ISM{=’ISLOM’"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday natija qaytaradi: SELECT * FROM Talaba Where yoshi  (SELECT yoshi FROM Talaba Where Name='Baxodir')",
    a: "Baxodir ismli talabaning yoshidan katta talabalarni",
    b: "Baxodir ismli talabalarning ichida yoshi kattasini",
    c: "Baxodir ismli talaba bilan tengdosh bo’lmagan talabalarni",
    d: "SQL so’rovi xatolik ko’rsatadi"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday natija qaytaradi: SELECT * FROM talaba WHERE NOT yoshi>25",
    a: "yoshi 25 dan katta bo’lmagan talabalarni",
    b: "yoshi 25 dan katta talabalarni",
    c: "yoshi 25 dan kichik talabalarni",
    d: "yoshi 25 dan kichik bo’lmagan talbalanri"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday natija qaytaradi: SELECT*FROM talaba WHERE name='Nodir' AND (yoshi=22 OR yoshi=25)",
    a: "22 yoshdan katta 25 yoshdan kichik Nodir ismli talabalarni",
    b: "22 yoshli Nodir ismli talabalarni",
    c: "22 yoki 25 yoshli Nodir ismli talbalarni",
    d: "25 yoshli Nodir ismli talabalarni"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday natija qaytaradi: SELECT * FROM talaba WHERE yoshi BETWEEN 16 AND 24;",
    a: "Yoshi 16 dan kichik va 24 dan katta talabalarni",
    b: "Yoshi 16 ga teng bo’lgan 24 ta talabani;",
    c: "Yoshi 16 yoki 24 bo’lgan talabalarni",
    d: "Yoshi 16 dan katta va 24 dan kichik bo’lgan talabalarni"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday natija qaytaradi: SELECT name, yoshi FROM talaba WHERE NOT name='Sanjar' and yoshi=( SELECT yoshi FROM talaba WHERE name='Sanjar')",
    a: "Ismi Sanjar bo’lmagan lekin Sanjar bilan tengdosh talabalarni",
    b: "Ismi Sanjar va yoshi ham Sanjar bilan tengdosh talbalarni",
    c: "SQL so’rovi xato chunki SELECT operatori ikki marta qo’llangan",
    d: "Sanjar ismli talabalarning yoshini"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday natija qaytaradi: SELECT*FROM talaba where yoshi>20 OR Name='Islom';",
    a: "Yoshi 20 dan katta ismi Islom bo’lmagan talabalarni;",
    b: "Yoshi 20 dan katta talabalarni va ularga qo’shib Islom ismli talabalarni;",
    c: "Yoshi 20 dan katta barcha talbalarni;",
    d: "Yoshi 20 dan katta Islom ismli talabalarni;"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday natija qaytaradi: SELECT * FROM talaba WHERE name IS NULL;",
    a: "Ismi kiritilmagan talabalarni",
    b: "Ismida NULL so’zi qatnashgan talabalarni",
    c: "Ismi kiritilgan barcha talabalarni",
    d: "Ismida  IS so’zi qatnashgan talbalarni"
  },
  {
    quostion: "Talaba jadvalidan ismi Jalol bo‘lgan talabaning ma’lumotlari o‘chirilishidagi  yozilgan kod topilsin",
    a: "DELETE *FROM Talaba",
    b: "UPDATE *FROM TALABA WHERE ism=’Jalol’;",
    c: "DELETE *FROM TALABA WHERE ism=’Jalol’;",
    d: "DROP *FROM Talaba WHERE ism=’Jalol’;"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday vazifa bajaradi: ALTER TABLE Talaba DROP email;",
    a: "Talaba jadvalining email nomli ustunining tipini matnli ga o’zgartiradi",
    b: "Talaba jadvaliga email nomli yangi ustun qo’shadi",
    c: "Talaba jadvalidagi email ustunini o’chirib tashlaydi",
    d: "SQL so’rovi xatolik ko’rsatadi"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday natija qaytaradi: SELECT name FROM Talaba WHERE name='Nodir' GROUP BY name;",
    a: "Jadvaldan Nodir ismli talabalarni o’chiradi",
    b: "Nodir ismli talabaning barcha ma’lumotlarini",
    c: "Faqat bitta Nodir ismini;",
    d: "Talaba jadvalida nechta Nodir ismi bo’lsa shu ismlarni"
  },
  {
    quostion: "Quyidagi SQL so’rovi natijasi nimani ko’rsatadi: SELECT  FIO, AVG(baho) FROM talaba INNER JOIN imtion ON talaba.id_s=imtihon.id_s GROUP BY FIO;",
    a: "Talabalarning olgan baholarini ko’rsatadi.",
    b: "O’rtacha ball olgan talaba FIO sini ko’rsatadi",
    c: "Eng past baho olgan talabaning FIO si va bahosini ko’rsatadi.",
    d: "Har bir talabaning olgan o’rtacha bahosini ko’rsatadi"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday natija qaytaradi: SELECT*FROM talaba where yoshi>20 AND Name='Islom';",
    a: "Yoshi 20 dan katta barcha talbalarni;",
    b: "Yoshi 20 dan katta talabalarni va ularga qo’shib Islom ismli talabalarni;",
    c: "Yoshi 20 dan katta ismi Islom bo’lmagan talabalarni;",
    d: "Yoshi 20 dan katta Islom ismli talabalarni;"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday vazifani bajaradi: UPDATE Talaba SET Name='Botir' where id=4;",
    a: "Talaba jadvalidan 'Botir' ismli talabani o’chirib tashlaydi.",
    b: "Talaba jadvalidagi id si 4 ga teng bo’lgan talabaning ismini 'Botir' ismiga o’zgartiradi.",
    c: "Talaba jadvaliga id si 4 va ismi Botir bo’lgan yangi qator qo’shadi.",
    d: "Talaba jadvalidagi ismi 'Botir' bo’lgan talabaning id sini 4 qiladi."
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday vazifa bajaradi: ALTER TABLE Talaba ADD email varchar(25);",
    a: "Talaba jadvalidagi email ustunini o’chirib tashlaydi.",
    b: "Talaba jadvaliga email nomli yangi ustun qo’shadi",
    c: "Talaba jadvalining email nomli ustunining tipini matnli ga o’zgartiradi;",
    d: "SQL so’rovi xatolik ko’rsatadi"
  },
  {
    quostion: "Quyidagi SQL so’rovi natijasi nechta ustunli jadval qaytaradi: Select Name, yosh, tel FROM talaba;",
    a: "2",
    b: "1",
    c: "3",
    d: "4"
  },
  {
    quostion: "Quyidagi SQL so’rovi natijasi nimani ko’rsatadi: SELECT  COUNT (baho) FROM talaba INNER JOIN imtion ON talaba.id_s=imtihon.id_s Where baho=5;",
    a: "5 baho olgan talabalar haqida ma’lumot ko’rsatadi",
    b: "5 baho olmagan talabalar sonini ko’rsatadi",
    c: "5 baho olmagan talabalarni ko’rsatadi",
    d: "Nechta talaba 5 baho olganini ko’rsatadi"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday natija qaytaradi: SELECT Name FROM Talaba where Name LIKE '%r';",
    a: "Ismi r harfi bilan boshlanuvchi talabalarni",
    b: "Ismida r harfi qatnashgan talabalarni",
    c: "Ismi r harfi bilan tugallanuvchi talabalarni",
    d: "Ismida r harfi uchramaydigan talabalarni"
  },
  {
    quostion: "Quyidagi SQL so’rovi qanday natija qaytaradi: SELECT * FROM Talaba ORDER BY yoshi DESC;",
    a: "Talaba jadvalidagi barcha ma’lumotlarni talabaning yoshi bo’yicha o’sish tartibida",
    b: "Barcha talabalarning yoshini;",
    c: "Talaba jadvalidagi barcha ma’lumotlarni talabaning yoshi bo’yicha kamayish tartibida",
    d: "Talabalarning o’rtacha yoshini alaba jadvalidagi barcha ma’lumotlarni talabaning ismi bo’yicha o’sish tartibida"
  },
];

answersDB().forEach((item, index) => {
  const container = document.createElement('div')

  container.innerHTML = `

      <ul class="test-list">
      <span class="quostion-text">${index + 1}. ${item.quostion}</span>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.a}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.b}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.c}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.d}
              </label>
            </li>
        </ul>
  `
  form.append(container)
})
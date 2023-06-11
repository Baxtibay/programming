const form = document.querySelector('.form');


const answersDB = () => [
  {
    quostion: "TARTIBLANMAGAN ASSOSIATIV KONTЕYNЕRLAR TOG'RI SATRNI KORSATING ?",
    a: "set, map;",
    b: "vector , array, deque",
    c: "deque, forward_list",
    d: "vector map"
  },
  {
    quostion: "vector capacity funksiyasi nimani bajaradi ?",
    a: "Vector hajmini aniqlaydi",
    b: "vector uzunlini",
    c: "vector elementlar sonini",
    d: "vector birinchi elementini qaytaradi"
  },
  {
    quostion: "Quyidagi klasslar qaysi fayl kiritishni boshqaradi ?",
    a: "ifstream",
    b: "instream",
    c: "ofstream",
    d: "inputstream"
  },
  {
    quostion: "Typecasting (tur almashtrish) ishlatish uchun qaysi header faylni qo'shish kerak ?",
    a: "None",
    b: "iostream.h",
    c: "ctype.h",
    d: "math.h"
  },
  {
    quostion: "c++ stl kutubxonalarda matematik amallarni bajarish uchun qaysi kutubxona ishlatiladi ?",
    a: "cmath",
    b: "vector",
    c: "iostream",
    d: "string"
  },
  {
    quostion: "To'g'ri tur almashtrishlardan birini tanlang ?",
    a: "(char)a;",
    b: "char:a;",
    c: "to(char, a);",
    d: "a(char);"
  },
  {
    quostion: "vector empty() funksiyasi vazifasi ?",
    a: "boshlikka tekshiradi",
    b: "olshamin berish uchun",
    c: "bunday funksiya yo'q",
    d: "birinshi qiymatni qaytaradi"
  },
  {
    quostion: "set<int> ati; ati.insert(4); ati.insert(1); ati.insert(1);birinshi elementga qaysi qiymat chiqadi ?",
    a: "1",
    b: "0",
    c: "4",
    d: "14"
  },
  {
    quostion: "multiset<string, string> ati; elementlarin tog'ri kiritish tog'ri korsatilgan satrni korsating ?",
    a: "ati.insert(make_pair(1, 'test'));",
    b: "ati.insert(make(1, 'test'));",
    c: "ati['1']='Ada';",
    d: "ati[1]='Ada'"
  },
  {
    quostion: "ikkita son kattasini aniqlash dasturi tog'ri keltirilgan satr ?",
    a: "if(a&gt;b){ cout&lt;&lt;a;} else{ cout&lt;&lt;b;}",
    b: "if(a&amp;b){ cout&lt;&lt;a;} else{ cout&lt;&lt;b;}",
    c: "if(a||b){ cout&lt;&lt;a;} else{ cout&lt;&lt;b;}",
    d: "if(a!=b){ cout&lt;&lt;a;} else{ cout&lt;&lt;b;}"
  },
  {
    quostion: "N sonini kiriting va u 3 sonining darajasi yoki yoqligini aniqlang ?",
    a: 'while(n&gt;1){    n=n/3; } if(n==1){    cout&lt;&lt;"darajasi"; } else{    cout&lt;&lt;"darajasi emas"; }',
    b: 'while(n&gt;1){    n=n/3; } if(n==2){    cout&lt;&lt;"darajasi"; } else{    cout&lt;&lt;"darajasi emas"; }',
    c: 'aniqlab bolmaydi',
    d: 'aniqlab boladi'
  },
  {
    quostion: 'c++ dastrulashda sinf qanday yaratiladi ?',
    a: 'class nomi{}',
    b: 'class nomi(){}',
    c: 'class{ }',
    d: "to'gri javob yo'q"
  },
  {
    quostion: "Turlarni almashtrish xavfli bo'lishi uchun nima sabab ?",
    a: "Ma'lumotni vaqtincha yo'qotishingiz mumkin - masalan, float dan int ga almashtrish qilishda floatning qismini kesish",
    b: "Ba'zi o'zgarishlar aniqlanmagan, masalan, char dan int ga almashtrish qilish",
    c: "Siz o'zgaruvchining qiymatini doimiy ravishda o'zgartirishingiz mumkin",
    d: "Xavf yo'q"
  },
  {
    quostion: "public modifikatorining korinish sohasi tog'ri tarif ?",
    a: "sinfdan tashqarida ham korinadi",
    b: "mero's olingan sinflarda",
    c: "korinmaydi",
    d: "sinf ishida korinadi"
  },
  {
    quostion: "Namespace a'zolari (member)ga kirish uchun qaysi operator ishlatiladi ?",
    a: "::",
    b: ".",
    c: ":",
    d: "- & gt;"
  },
  {
    quostion: "a sonidan b sonigacha bolgan sonlar yig'indisin xisoblash dasturi tog'ir korsatilgan starni aniqlang ?",
    a: "int sum=0; for(int i=a; i&lt;b; i++){ sum+=i;} cout&lt;&lt;sum;",
    b: "sum=0; for(int i=a; i&lt;b; i--){ sum+=i;} cout&lt;&lt;sum;",
    c: "sum=0; for(int i=a; i&gt;b; i++){ sum+=i;} cout&lt;&lt;sum;",
    d: "sum=0; for(int i=a; i&lt;b; i++){ sum+=i;} cout&lt;&lt;sum;"
  },
  {
    quostion: "Chiziqli Konteyner tog'ri keltirilgan qatorni korsating ?",
    a: "vector, array",
    b: "casting",
    c: "iostream",
    d: "string"
  },
  {
    quostion: "qaysi qatorda sonning juft toqligini aniqlash dasturi tog'ri keltirilgan ?",
    a: 'if(n%2==0){cout&lt;&lt;"juft";} else{cout&lt;&lt;"toq";}',
    b: 'if(n%2=0){cout&lt;&lt;"juft";} else{cout&lt;&lt;"toq";}',
    c: 'if(n%2==1){cout&lt;&lt;"juft";} else{cout&lt;&lt;"toq";}',
    d: 'if(n/2==0){cout&lt;&lt;"juft";} else{cout&lt;&lt;"toq";}'
  },
  {
    quostion: "class larda private modifikatorining korinish sohasini ko'rsating ?",
    a: "faqat chu sinf ishida ko'rinadi",
    b: "mero's olingan sinflarda korinadi",
    c: "tog'ri javob yo'q",
    d: "sinfdan tashqarida ko'rinadi"
  }, /*test SHB 19 sorawg'a keldim*/
  {
    quostion: "Question ?",
    a: "Correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Question ?",
    a: "Correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
  {
    quostion: "Question ?",
    a: "Correct",
    b: "answer",
    c: "answer",
    d: "answer"
  },
];

answersDB().forEach((item, index) => {
  console.log(item.a)


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
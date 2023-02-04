const form = document.querySelector('.form');


const answersDB = () => [
  {
    quostion: "'while (condition_expression) {…}' bul konstruksiya neni anlatadi?",
    a: "Old shartli cikl operatori", b: "Tanlaw operatori", c: "Keyin shartli cikl operatori", d: "Parametrik cikl"
  },
  {
    quostion: "Cikl operatori turlerinin tuwri sanin korsetin?",
    a: "3", b: "1", c: "4", d: "2"
  },
  {
    quostion: "C ++ tanlaw operatori...",
    a: "switch ... case", b: "exit()", c: "continue", d: "if ...else"
  },
  {
    quostion: "Siklning denesi neshe ret atqariliwin aniqlan : int i; for ( i = -8; i % 3 <= -2; ++i ) { ….. }",
    a: "1", b: "2", c: "3", d: "Bir ret de atqarilmaydi"
  },
  {
    quostion: "Siklning denesi neshe ret atqariliwin aniqlan? int i=0; do { i++; … } while(i/3>0);",
    a: "1", b: "2", c: "10", d: "Cikl atqarilmaydi"
  },
  {
    quostion: "C++ tilindegi shartli otiw operatori... esaplanadi.",
    a: "if", b: "break", c: "goto", d: "switch"
  },
  {
    quostion: "Fayllar menen islewde fayllardi ashiwn wb rejimi waziypasi qanday?",
    a: "Ekilik faylin jaziw ushin payda etedi.", b: "Ekilik faylin oqiw ushin ashadi ;", c: "Ekilik faylin aqirina qosiw ushin ashadi", d: "Fayl dawamina qosiw ushin ashadi"
  },
  {
    quostion: "Fayllar menen islewde fayllardi ashiwn ' rw' rejimi waziypasi qanday?",
    a: "Fayllar menen islewde bunday rejim joq", b: "Fayldi oqiw ushin ashiladi", c: "Fayldi oqiw ham jaziw ushin ashadi", d: "Fayl dawamina qosiw ushin ashadi"
  },
  {
    quostion: "C++ tilinde isletiletugin cikl operatorinin tuwri versiyasin korsetin.",
    a: "for,while,do while", b: "cin, gets, char", c: "cout, getch, return", d: "while, NULL, type"
  },
  {
    quostion: "Cikl operatori korsetilgen tuwri qatardi belgilen 1. if then else 2. for ( int i=1;i> a;) 3. for (cikl parametri>:=; shart ;) 4. for (; ; ) if (a<0) break; else {s +=a; cin>> a;} 5. for (cikl parametri >:=< aqirgi baha > ) downto ; do",
    a: "2,4", b: "1,2", c: "2,3", d: "3,4"
  },
  {
    quostion: "Bul programma bolegi orinlangannan keyin ekranda qanday natiyje payda boladi : int k; int main(){ k = 123; printf('%d', k ++); return 0; }",
    a: "123", b: "121", c: "124", d: "122"
  },
  {
    quostion: "Tomendegi programma bolegi natiyjesin aniqlan int x = 0; int y = 0; if (x++ && y++){ y += 2; } std::cout << x + y;",
    a: "1", b: "2", c: "3", d: "4"
  },
  {
    quostion: "Siklning denesi neshe ret atqariliwin aniqlan : int i = 0; do { i++; …. } while ( i / 2 > 0);",
    a: "1", b: "4", c: "3", d: "Bir ret de atqarilmaydi"
  },
  {
    quostion: "C ++ programmalastiriw tilinde isletiletugin operatorlar tuwri korsetilgen qatardi aniqlan",
    a: "cout, getch, return", b: "begin , include, clrscr", c: "while, NULL, type", d: "cin, gets, char"
  },
  {
    quostion: "while ( takirarlaw_sharti) {…} ' kostruksiyasininig to'gri tarifini korsetin?",
    a: "Old shartni tekseriw sikli", b: "Kop alternativ operator", c: "Keyin shartli cikl operatori", d: "Parametrik cikl"
  },
  {
    quostion: "Kod fragmentin atqargannan keyin x ozgeriwshinin ma`nisin aniqlan int x = 1, y = 0; while ( y < 10 ) y = 3 * ( ++x ) + 1;",
    a: "3", b: "2", c: "4", d: "1"
  },
  {
    quostion: "Tomendegi anlatpanin ma`nisin aniqlan : 2 – 3 * – 1",
    a: "5", b: "1", c: "-2", d: "-5"
  },
  {
    quostion: "Tomendegi programma bolegi orinlanganda ekranga neni baspadan shigaradi int x = 2; if ( x < 4 | | x > 6 ) if ( x > 2 && x <8 ) if ( !( x < 5 ) ) printf ( “ 1 ” ); else printf ( “ 2 ” ); else printf ( “ 3 ” ); else printf ( “ 4 ” );",
    a: "3", b: "4", c: "13", d: "1"
  },
  {
    quostion: "Fayllar menen islewde fayllardi ashiwn a rejimi waziypasi qanday?",
    a: "ayl dawamina malumot qosiw ushin ashadi ;", b: "Fayldi oqiw ushin ashiladi", c: "Fayldi jaziw ushin payda etedi;", d: "Fayldi oqiw ham jaziw ushin ashadi"
  },
  {
    quostion: "C++ tilindegi shartsiz otiw operatori... esaplanadi",
    a: "Goto", b: "continue", c: "if", d: "switch"
  },
  {
    quostion: "Bul programmada a nege ten boladi? int a = 10, n = 6; for(int i = 0; i < n; i ++) a += i;",
    a: "25", b: "30", c: "13", d: "35"
  },
  {
    quostion: "Kod fragmentin atqargannan keyin x ozgeriwshinin ma`nisin aniqlan int x = 1, y = 0; while ( y < 10 ) y = 3 * ( ++x ) + 1;",
    a: "3", b: "1", c: "4", d: "2"
  },
  {
    quostion: "Tomendegi anlatpanin ma`nisin aniqlan : 3 – 4 * – 2",
    a: "11", b: "-14", c: "-11", d: "2"
  },
  {
    quostion: "Polimorfizm bul:",
    a: "turdosh klasslar ushin uliwma hareketlerdi belgilew ushin bir nomdan paydalaniwga ruxsat beriwdi anlatadi", b: "bir klassta birdey amellerdi orinlaw ushin turli nomdagi usillardan paydalaniw imkaniyatin beretugin qural", c: "bir klassta birdey nomdagi usillardan paydalaniw imkaniyatin beretugin qural ;", d: "har turli turdegi yamasa basqa mugdardagi argumentlar menen islew ushin funksiyalardi artiqsha juklewge mumkinshilik jaratiwshi qural."
  },
  {
    quostion: "Qaysi mulohoza tuwri?",
    a: "switch tanlaw operatorinda bloklarin jaziw ushin figurali qawislardan paydalaniw shart emes", b: "witch tanlaw operatorinda case den keyin programma kodi ushin bloki ushin keyingi kod bloklari mudami ashilatugin figurali qawis menen baslaniwi kerek {va jabiliw figurali qawis menen tawisiwi kerek.", c: "tuwri mulohoza joq", d: "switch tanlaw operatorinda case den keyin bir neshe operator berilgen bolsa olar figurali qawislarga alinadi."
  },
  {
    quostion: "Qaysi operator bir konstanta anlatpadan basqasina otiwge ruxsat bermeydi?",
    a: "break", b: "endl", c: "stop", d: ";"
  },
  {
    quostion: "Fayllar menen islewde fayllardi ashiwn rb rejimi waziypasi qanday?",
    a: "Ekilik faylin oqiw ushin ashadi;", b: "Ekilik faylin aqirina qosiw ushin ashadi ;", c: "Fayldi oqiw ham jaziw ushin ashadi", d: "Fayl dawamina qosiw ushin ashadi ;"
  },
  {
    quostion: "Kod fragmenti orinlaw natiyjesinde monitorga ne baspadan shigariladi int x=1, y=3; if (--x && ++y) y+=3; cout<<”\n x+y=”<",
    a: "x+y=3", b: "x+y=4", c: "x+y=9", d: "x+y=7"
  },
  {
    quostion: "Siklning denesi neshe ret atqariliwin aniqlan : int i; for ( i = -8; i % 3 <= -1; ++i ) { ……. }",
    a: "2", b: "1", c: "8", d: "3"
  },
  {
    quostion: "Tomendegi soz dizbegi qanday jaziladi ' Eger ozgeriwshi indeks sizedan ulken bolsa, biz ozgeriwshiler sanin (count) asiramiz'?",
    a: "if (index>size) count++;", b: "if index>size { count++; }", c: "if (index>=size) { ++count; }", d: "if (index>size) { count++ }"
  },
  {
    quostion: "ENIAC tarqatpasi?",
    a: "Electronic Numerical Integrator And Calculator", b: "Electronic Numerical Integrator And Computer", c: "Electronic Numerical Integrator Calculator", d: "No option"
  },
  {
    quostion: "Logikaliq tipler qanday juwap qaytaradi?",
    a: "1, 0 yake true, false", b: "or, and", c: "and", d: "or"
  },
  {
    quostion: "AQSH tag’ı Pensilvaniya universitetinde, xabarlardı saqlaw imkaniyatına iye bolg’an elektron lampalar ja’rdeminde islewshi tsifrlı esaplaw mashina",
    a: "ENIAK", b: "MAC", c: "BMW", d: "FORD"
  },
  {
    quostion: "EEM tarqatpasi?",
    a: "Elektron esaplaw mashinalari", b: "kompyuter", c: "elektr energetik mashina", d: "No option"
  },
  {
    quostion: "C++ te tomendegi esapta neshe shigadi? (7%3=)",
    a: "1", b: "2", c: "0", d: "No option"
  },
  {
    quostion: "If operatorininin' struktirasin korsetin'",
    a: "juwap", b: "if  operator1(sha’rt);", c: "else  operator1(sha’rt);", d: "juwap"
  },
  {
    quostion: "include gilt sozinin' wazıypasın anıqlan'?",
    a: "Kitapxanalardı kiritedi", b: "Programmanın' basın an'latadı", c: "Ishki buyırtpalardı shaqıradı", d: " Arnawlı soz"
  },
  {
    quostion: "Tomendegi anlatpanın' ma`nisin anıqlan' : 5 + 15 / 5 * 2",
    a: "11", b: "8", c: "7", d: "6"
  },
  {
    quostion: "Destruktorga neshe parametr jıberiw mu'mkin?",
    a: "Destruktorga parametr jıberiw mu'mkin emes", b: "Ko'pi menen 3", c: "o'pi menen 10", d: "Ko'pi menen 1"
  },
  {
    quostion: "C++ tilinde shartli operatordı tuwrı jazıw usılın korsetin'?",
    a: "if (x>0) y=sqrt (x);", b: "if (x>0) Do y:=sqrt (x)", c: "if y=sqrt (x) then x>0", d: "IF x>0 then y:=sqrt (x);"
  },
  {
    quostion: "Nadurıs berilgen an'latpanı anıqlan'?",
    a: "A!%5", b: "A=5", c: "A==5", d: "A!=5"
  },
  {
    quostion: "Tomendegi klaslardan qay-qaysısı jardeminde fayllarg'a kirgiziwdi a'melge asıradı?",
    a: "ofstream", b: "ifstream", c: "Instream", d: "Inputfile"
  },
  {
    quostion: "String den char ga o'tiw ushın... .... funksiyalarınan paydalanıladı?",
    a: "c_str()", b: "Assign", c: "B va C", d: "Strcpy"
  },
  {
    quostion: "Int X dın' qaysı bahalarda to'mendegi an'latpa true baha qabıl etedi : X < 3 | | X >= 4 & & X < 5",
    a: "[INT_MIN;2] va 4", b: "x=4", c: "Ańlatpa mudamı false", d: "[4;INT_MAX]"
  },
  {
    quostion: "Funksiya parametrlerine neshe argument beriw mu'mkin?",
    a: "Shegaralanbag'an mug'darda", b: "5", c: "10", d: "30"
  },
  {
    quostion: "Kod fragmentini orınlaw na'tiyjesinde int i=2; switch (i) { case 1: i += 2; break; case 2: i *= 3; break; case 6: i /= 2; break; default: ; }",
    a: "I o'zgeriwshisi 6 ni teń boladı", b: "o'zgeriwshisi 3 ke ornatıladı", c: "switch operator giltining denesi i o'zgeriwshiniń ma`nisin o'zgertirmeydi", d: "i o'zgeriwshisi 1 ge ornatıladı"
  },
  {
    quostion: "To'mendegi programmada neshe “Sa'lem” so'zi shıg'adı : #include int main(){ float a = 45, b = a / 10 + 3; for (int I = 0; I < 2; I ++) for(int j = 0; j < -2; j ++) puts('Salom'); return 0; }",
    a: "0", b: "1", c: "9", d: "5"
  },
  {
    quostion: "Sikldin' denesi neshe ret atqarılıwın anıqlań : int I; for ( I = -7; I % 3 < -1; ++I ) { …… }",
    a: "Bir ret de atqarılmaydı", b: "2", c: "7", d: "Sheksiz cikl"
  },
  {
    quostion: "Qaysı tu'rdegi mag'lıwmatlar uzınlıg'ı 32 bitdan aspaytug'ın haqıyqıy sanlardı qabıl etedi?",
    a: "Float", b: "long long", c: "long", d: "Double"
  },
  {
    quostion: "Keyin sha'rtli cikl operatorınıń tuwrı varianttı kórsetiń?",
    a: "do while", b: "For", c: "Switch", d: "While"
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
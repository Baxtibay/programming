const form = document.querySelector('.form');


const answersDB = () => [
  {
    quostion: "Mazmun-baylanıs diagrammasında ushıraytuǵın formanı tabıń",
    a: "!Ellips",
    b: "Parallelogram",
    c: "Sheńber",
    d: "Trapeciya"
  },
  {
    quostion: "Kestedegi qatarlar sanı qanday esaplanadı",
    a: "AVG funkciyası járdeminde",
    b: "MIN funkciyası járdeminde",
    c: "MAX funkciyası járdeminde",
    d: "!COUNT funkciyası járdeminde"
  },
  {
    quostion: "Mazmun-baylanıs modeliniń tiykarǵı túsinikleri",
    a: "!mazmun, atribut, baylanıs",
    b: "atribut, keste, baylanıs",
    c: "obyekt, qásiyet, Qatnas",
    d: "gilt, mánis, associaciya"
  },
  {
    quostion: "COUNT() agregat funkciyanıń wazıypasın aytıń",
    a: "Belgilengen obyekttiń orta arifmetigin tabıw",
    b: "!Belgilengen obyekttiń qatarlar sanın tabıw",
    c: "Belgilengen qatardın qatarlar sanın tabıw",
    d: "Belgilengen elementtiń orta arifmetigin tabıw"
  },
  {
    quostion: "SELECT operatorınıń wazıypası?",
    a: "Kesteden tańlaw",
    b: "!Kesteden maǵlıwmatlardı tańlaw",
    c: "Kestege qatar qosıw",
    d: "Kesteni ózgertiw"
  },
  {
    quostion: "Qaysı predikat berilgen shártti qanaatlandırıwshı izlewdi ámelge asıradı?",
    a: "HAVING",
    b: "ORDER BY",
    c: "!WHERE",
    d: "GROUP BY"
  },
  {
    quostion: "Relyaciyalıq maǵlıwmatlar bazasında qaysı soraw tilleri qollanıladı",
    a: "!SQL",
    b: "Objective C",
    c: "Haskell",
    d: "Basic"
  },
  {
    quostion: "SELECT SUBSTR(`familiya`,1,1) FROM `xızmetkerler`; soraw nátiyjesin tabın",
    a: "Xızmetkerler familyalarınıń birinshisin shıǵaradı",
    b: "Xızmetkerler familyalarınıń bir háribin shıǵaradı",
    c: "Sorawda qátelik beredi",
    d: "!Xızmetkerler familyalarınıń bas háriplerin shıǵaradı"
  },
  {
    quostion: "Unikal identifikator ne",
    a: "!Bir qatardı basqa qatardan ajıratıp turatuǵın mániske iye baǵana",
    b: "Keste atı",
    c: "Baǵana atı",
    d: "Qatar hám baǵanalardın sáykesligi"
  },
  {
    quostion: "Qaysı predikat toparlaw ushın isletiledi?",
    a: "ORDER BY",
    b: "!GROUP BY",
    c: "WHERE",
    d: "HAVING"
  },
  {
    quostion: "MBBSda DML tilin wazıypası ne?",
    a: "Maǵlıwmatlardı súwretlew tili",
    b: "Maǵlıwmatlardı qadaǵalaw tili",
    c: "Maǵlıwmatlardı saqlaw tili",
    d: "!Maǵlıwmatlardı manipulyaciya qılıw tili"
  },
  {
    quostion: "select year from test where name='Jonny'); Sorawdaǵı year hám name neni ańlatadı?",
    a: "Kestelerdi",
    b: "Obyektlerdi",
    c: "!Baǵanalardı",
    d: "Qatarlardı"
  },
  {
    quostion: "Qaysı operator járdeminde «kesilisiw» ámeli orınlanadı",
    a: "DEVIDE",
    b: "MINUS",
    c: "!INNER JOIN",
    d: "UNION"
  },
  {
    quostion: "TRUE hám FALSE mánisin qabıl qılıwshı tipler qanday ataladı?",
    a: "Qatar tipli",
    b: "!Bul tipli",
    c: "Pútin tipli",
    d: "Sáne hám waqıt tipli"
  },
  {
    quostion: "Ishki baylanıs operatorı – bul",
    a: "RIGHT OUTER JOIN",
    b: "LEFT OUTER JOIN",
    c: "!INNER JOIN",
    d: "FULL OUTER JOIN"
  },
  {
    quostion: "Ónim kestesinen bahası 4000 som hám onnan joqarı bolǵanların atı boyınsha toparlap shıǵarıw sorawı qaysı juwapta tuwrı kórsetilgen",
    a: "SELECT `Atı`, MAX(`baha`) as `Nátiyje` from GROUP BY `Atı` HAVING MAX(`baha`)>4000",
    b: "SELECT * from `Ónim` GROUP BY `Atı` HAVING MAX(`baha`)>4000",
    c: "SELECT `Atı`, MAX(`baha`) as `Nátiyje` from `Ónim` GROUP BY `baha` HAVING MAX(`Atı`)>=4000",
    d: "!SELECT `Atı`, MAX(`baha`) as `Nátiyje` from `Ónim` GROUP BY `Atı` HAVING MAX(`baha`)>=4000"
  },
  {
    quostion: "SELECT operatorınan FROM sózinen keyingi jazıw neni bildiredi?",
    a: "shártti",
    b: "birlemshi giltti",
    c: "!kesteniń atın",
    d: "baǵananıń atın"
  },
  {
    quostion: "MB daǵı maǵlıwmatlardıń tranzakciya logikalıq birligi ne dep ataladı",
    a: "Operaciya",
    b: "Oqıw",
    c: "Jazıwlardı dizimge alıw",
    d: "!Tranzakciya"
  },
  {
    quostion: "LIKE durıs qollanılǵan sorawdı kórsetiń",
    a: "SELECT * FROM LIKE WHERE PName Products ‘%gizmo%’",
    b: "SELECT LIKE(‘%gizmo%’) FROM Products WHERE PName",
    c: "SELECT * FROM Products, PName LIKE ‘%gizmo%’",
    d: "!SELECT * FROM Products WHERE PName LIKE ‘%gizmo%’"
  },
  {
    quostion: "DROP hám DELETE operatorlarınıń parqı nede",
    a: "SQLde DROP isletilmeydi",
    b: "SQLde DELETE isletilmeydi",
    c: "!DROP obyektti, DELETE qatardı óshiredi",
    d: "Parqı joq"
  },
  {
    quostion: "UPDATE operatorınıń wazıypası?",
    a: "Kesteden tańlaw",
    b: "!Kestede qatardı ózgertiw",
    c: "Kestege qatar qosıw",
    d: "Kesteni ózgertiw"
  },
  {
    quostion: "Relyaciyalıq túrdegi maǵlıwmatlar bazası obyektleri neshe ólshewli kesteni payda etedi?",
    a: "úsh",
    b: "tórt",
    c: "!eki",
    d: "bir"
  },
  {
    quostion: "Maǵlıwmatlardı usınıwdıń ierarxiyalıq modelinde maǵlıwmatlar baylanısı qanday súwretlenedi",
    a: "!terek túrindegi graf",
    b: "qálegen graf",
    c: "dizimler",
    d: "kesteler"
  },
  {
    quostion: "SELECT operatorınan keyin '*' belgisi neni bildiredi?",
    a: "Keste qatarları juldızsha menen shifrlanǵanın",
    b: "bul belgiden paydalanıp bolmaydı",
    c: "!hámme baǵanalardı belgilewdi",
    d: "hámme qatarlardı belgilewdi"
  },
  {
    quostion: "MBBSda DCL tilin wazıypası ne?",
    a: "Maǵlıwmatlardı súwretlew tili",
    b: "Maǵlıwmatlardı manipulyaciya qılıw tili",
    c: "Maǵlıwmatlardı saqlaw tili",
    d: "!Maǵlıwmatlardı qadaǵalaw tili"
  },
  {
    quostion: "SELECT MAX(id) FROM STUDENT sorawın ne qaytaradı",
    a: "STUDENTtiń aqırǵı identifikatorı",
    b: "STUDENTtiń aqırǵı identifikatorı",
    c: "STUDENTlerdiń muǵdarı",
    d: "!STUDENTtiń maksimal indentifikatorı"
  },
  {
    quostion: "Qaysı SQL operatorları maǵlıwmatlar bazasında maǵlıwmatlardı manipulyaciyalawda isletiledi?",
    a: "GRANT, REVOKE",
    b: "!SELECT, UPDATE, INSERT, DELETE",
    c: "MODIFY, TRUNCATE",
    d: "CRATE, ALTER, DROP"
  },
  {
    quostion: "Qaysı operatorda WHERE isletiwge bolmaydı?",
    a: "SELECT",
    b: "DELETE",
    c: "!INSERT",
    d: "UPDATE"
  },
  {
    quostion: "Xızmetker kestesinen qálegen atributtı óshiriw ámeli qaysı juwapta tuwrı kórsetilgen",
    a: "ALTER TABLE `Xızmetker` DELETE `Jınısı` varchar(10) not null",
    b: "ALTER TABLE `Xızmetker` DROP RENAME `Jası` int(3) not null",
    c: "ALTER TABLE `Xızmetker` CHANGE DROP `Tel_raqam` text(15) not null",
    d: "!ALTER TABLE `Xızmetker` DROP COLUMN `Tel_raqam` text(15)"
  },
  {
    quostion: "DML komandaların kórsetıń",
    a: "INSERT, DROP, UPDATE, SELECT",
    b: "CREATE, ALTER, DELETE",
    c: "!INSERT, DELETE, UPDATE, SELECT",
    d: "CREATE, ALTER, DROP"
  },
  {
    quostion: "Qaysı operator járdeminde kestelerdi «qosıw» ámeli orınlanadı",
    a: "SELECT + GROUP BY",
    b: "SELECT + ORDER BY",
    c: "!SELECT + JOIN",
    d: "SELECT + WHERE"
  },
  {
    quostion: "Qaysı juwapta INSERT INTO SELECT ámeli orınlanıw tartibi tuwrı keltirilgen?",
    a: "Birinshi kesteden ekinshi kestege shártlerde berilgen maǵlıwmatlardı kóshiriwge ruxsat bermew",
    b: "Tek ǵana birinshi kestege kóshiriw artıp ketse ekinshi kestege kóshiriw",
    c: "Birinshi kestedegi hámme maǵlıwmatlardı ekinshi kestege kóshirip ótkeriw",
    d: "!Birinshi kesteden ekinshi kestege shártlerde berilgen maǵlıwmatlardı kóshiriw"
  },
  {
    quostion: "Bir tranzaciya neshe operaciyadan ibarat bolıwı múmkin",
    a: "tek ǵana bir",
    b: "tek ǵana eki",
    c: "keminde ekewden",
    d: "!bir neshe"
  },
  {
    quostion: "Qaysı bir MBBS klient-server túrine kirmeydi",
    a: "ORACLE",
    b: "!ACCESS",
    c: "MySQL",
    d: "SQL Server"
  },
  {
    quostion: "SQL tilin quramlıq bólimlerine kiredi: 1) maǵlıwmatlardı aniqlaw tili; 2) maǵlıwmatlardı manipulyaciyalaw tilleri; 3) maǵlıwmatlardı basqarıw tili; 4) programmalastırıw tilleri",
    a: "2.3",
    b: "1,3,4",
    c: "!1, 2, 3",
    d: "1,2,4"
  },
  {
    quostion: "Select atı, jas, familiya from test where atı like 'S%'; Sorawdaǵı '%' ne ushın isletiledi",
    a: "'S'ten keyin % bolıwı múmkin",
    b: "'S%' simvollar bolıwı múmkin",
    c: "!'S'ten keyin simvollar bolıwı múmkin",
    d: "'S'ten aldın simvollar bolıwı múmkin"
  },
  {
    quostion: "Izlew sorawların tezlestiriw ushın qaysı MBBS mexanizmi isletiledi",
    a: "sorawlardıń orınlanıwın tezlestiriw múmkin emes",
    b: "!indeksler",
    c: "ekilemshi giltler",
    d: "tranzaksiyalar"
  },
  {
    quostion: "SELECT MAX(ID) FROM STUDENT sorawı neni qaytaradı",
    a: "STUDENTtiń birinshi identifikatorı",
    b: "STUDENTtiń aqırǵı identifikatorı",
    c: "STUDENTlerdiń atların",
    d: "!STUDENTtiń maksimal identifikatorı"
  },
  {
    quostion: "AVG() agregat funkciyanıń wazıypasın aytıń",
    a: "Belgilengen obyekttiń orta arifmetigin tabıw",
    b: "!Belgilengen baǵananıń orta arifmetigin tabıw",
    c: "Belgilengen qatardıń orta arifmetigin tabıw",
    d: "Belgilengen kestenin orta arifmetigin tabıw"
  },
  {
    quostion: "Maǵlıwmatlar bazasındaǵı informaciyalar qanday bolıwı kerek",
    a: "!qarama – qarsı bolmawı; qátesız bolıwı; pútin bolıwı kerek",
    b: "qarama – qarsı bolıwı; qátesız bolıwı",
    c: "hár bir keste baǵanasında IDsi kórsetiliwi kerek",
    d: "hár bir kestede tákirarlanıwı kerek"
  },
  {
    quostion: "SQL keńeytpesi neni ańlatadı?",
    a: "Tez soraw tili",
    b: "!Strukturalasqan soraw tili",
    c: "Izbe-iz soraw tili",
    d: "Standart soraw tili"
  },
  {
    quostion: "Tómendegi sorawda STUDENT neni ańlatadı: SELECT * FROM STUDENT;",
    a: "tiyislilikti",
    b: "!keste atı",
    c: "indeks",
    d: "baǵana atı"
  },
  {
    quostion: "Agregat funkciyalardı kórsetiń",
    a: "MIN, MAX, DATE, AVG",
    b: "MIN, MAX,SUBSTR, MID",
    c: "LEFT, RIGHT, MAX,Count,AVG",
    d: "!MIN, MAX,Count, AVG"
  },
  {
    quostion: "DELETE FROM Klientler WHERE KlientName=‘Alimov Bekzod’;",
    a: "KlientName kestesinen ‘Alimov Bekzod’ atamalı Klient jazıwı óshiriledi",
    b: "FROM Klient kestesinen KlientName ‘Alimov Bekzod’ bolǵan jazıw óshiriledi",
    c: "Klient WHERE kestesinen KlientName ‘Alimov Bekzod’ bolǵan jazıw óshiriledi",
    d: "!Klientler kestesindegi KlientName ‘Alimov Bekzod’ bolǵan jazıw óshiriledi"
  },
  {
    quostion: "Tómendegi soraw neni ańlatadı: SELECT * FROM STUDENT;",
    a: "STUDENT kestesin ózgertiw",
    b: "!STUDENT kestesin tańlaw",
    c: "STUDENT kestesin jaratıw",
    d: "STUDENT kestesin óshiriw"
  },
  {
    quostion: "Maǵlıwmatlardı usınıwdıń relyaciyalıq modelinde paydalanıwshısına maǵlıwmatlar qaysı kóriniste uzatıladı",
    a: "!kesteler",
    b: "dizimler",
    c: "terek túrindegi graf",
    d: "qálegen graf"
  },
  {
    quostion: "Ekinshi normal formada tómendegishe talap qoyıladı:",
    a: "Hámme maydanlar ekilemshi giltke baylanıslı",
    b: "!Kesteniń hámme maydanları birinshi giltke baylanıslı",
    c: "Hámme maydanlar ǵárezsiz",
    d: "Hámme maydanlar giltsiz maydanlarǵa baylanıslı"
  },
  {
    quostion: "Kortej bul ....?",
    a: "!qatar",
    b: "baǵana",
    c: "keste",
    d: "ketekshe"
  },
  {
    quostion: "JOIN operatorı nege arnalǵan",
    a: "Birinshi tańlawda bar, lekin ekinshisinde joq bolǵan nátiyjelerdi shıǵarıw ushın",
    b: "Eki soraw tańlawınıń nátiyjelerin birlestiriw ushın",
    c: "!Eki kesteden alınǵan nátiyjelerdi bir kestede birlestiriw ushın",
    d: "Eki tańlawda bar ulıwma nátiyjelerdi shıǵarıw ushın"
  },
  {
    quostion: "Ob’еkt atributı degende ne túsiniledi?",
    a: "!keste baǵanası",
    b: "keste qatarı",
    c: "keste keteksheleri",
    d: "keste"
  },
  {
    quostion: "SELECT * FROM test ORDER BY atı ASC; Sorawdaǵı 'ASC' ne waziypa orınlaydı?",
    a: "Atı baǵanasın saralaydı",
    b: "Atı baǵanasın toparlaydı",
    c: "Test kestesinen atı baǵanasın ajıratıp kórsetedi",
    d: "!Atı baǵanasın ósip barıw tartibinde saralaydı"
  },
  {
    quostion: "SELECT * FROM test ORDER BY jas DESC; Sorawdaǵı 'DESC' ne waziypa orınlaydı?",
    a: "jas baǵanasın toparlaydı",
    b: "Test kestesinen atı baǵanasın ajıratıp kórsetedi",
    c: "!jas baǵanasın kerisine saralaydı",
    d: "jas baǵanasın saralaydı"
  },
  {
    quostion: "ALTER operatorınıń wazıypası?",
    a: "Kestege qatar qosıw",
    b: "!Maǵlıwmatlar bazasında obyektti ózgertiw",
    c: "Maǵlıwmatlar bazasında obyektti óshiriw",
    d: "Maǵlıwmatlar bazasında obyektti jaratıw"
  },
  {
    quostion: "DELETE operatorınıń wazıypası?",
    a: "Kesteden tańlaw",
    b: "!Qatardı óshiriw",
    c: "Kestege qatar qosıw",
    d: "Kesteni ózgertiw"
  },
  {
    quostion: "Qaysı predikat saralaw ushın isletiledi?",
    a: "GROUP BY",
    b: "!ORDER BY",
    c: "WHERE",
    d: "HAVING"
  },
  {
    quostion: "Keste baǵanasındaǵı jıyındı mánisi qanday esaplanadı",
    a: "MIN funkciyası járdeminde",
    b: "MAX funkciyası járdeminde",
    c: "!SUM funkciyası járdeminde",
    d: "COUNT funkciyası járdeminde"
  },
  {
    quostion: "Xızmetker kestesinen qálegen atributtıń maǵlıwmat tipin ózgertiw ámeli qaysı juwapta tuwrı kórsetilgen",
    a: "ALTER TABLE `Xızmetker` MODIFY ALTER `Jınısı` varchar(10) not null",
    b: "ALTER TABLE `Xızmetker` MODIFY CHANGE `Jası int(3) not null",
    c: "ALTER TABLE `Xızmetker` CHANGE COLUMN `Tel_raqam` text(15) not null",
    d: "!ALTER TABLE `Xızmetker` MODIFY `Jınısı` varchar(5)"
  },
  {
    quostion: "DDL komandaların kórsetiń",
    a: "INSERT, DROP, UPDATE, SELECT",
    b: "CREATE, ALTER, DELETE",
    c: "!CREATE, ALTER, DROP",
    d: "INSERT, DELETE, UPDATE, SELECT"
  },
  {
    quostion: "NOT, AND, OR operatorları wazıypası neden ibarat?",
    a: "Arifmetikalıq ámeller hám operatorlar",
    b: "!Logikalıq ámellerdi orınlaw",
    c: "Salıstırıw ámellerin orınlaw",
    d: "Ózlestiriw ámellrin orınlaw"
  },
  {
    quostion: "SELECT COUNT(id) FROM STUDENT sorawi qanday nátiyje qaytaradı",
    a: "STUDENTtiń aqırǵı identifikatorın",
    b: "STUDENTtiń birinshi identifikatorın",
    c: "!STUDENTlardıń sanın",
    d: "STUDENTtiń maksimal indentifikatorın"
  },
  {
    quostion: "Maǵlıwmatlardı usınıw modeliniń qaysı biri eń keń tarqalǵan esaplanadı",
    a: "!relyaciyalıq",
    b: "obyektke baǵdarlanǵan",
    c: "tarmaqlı",
    d: "ierarxiyalıq"
  },
  {
    quostion: "Oqıtıwshılar hám studentler kesteleri arasındaǵı Qatnas túrin anıqlań",
    a: "!n:m",
    b: "n:1",
    c: "1:1",
    d: "1: m"
  },
  {
    quostion: "DELETE * FROM Ónimler WHERE ID=2; sorawdıń nátiyjesin anıqlań",
    a: "Ónimler kestesinen id 2 ge teń bolǵan qatardı qosadı",
    b: "Ónimler kestesinen id 2 ge teń bolǵan qatardı belgileydi",
    c: "!Ónimler kestesinen id 2 ge teń bolǵan qatardı barlıq maǵlıwmatların óshiredi",
    d: "Ónimler kestesinen id 2 ge teń bolǵan baǵananı óshiredi"
  },
  {
    quostion: "Tranzakciyalardıń tiykarǵı qásiyetleri",
    a: "APID",
    b: "CRUD",
    c: "DDL",
    d: "!ACID"
  },
  {
    quostion: "Atributlarda saqlanatuǵın maǵlıwmatlar bul-",
    a: "!atribut mánisleri",
    b: "atribut sistemaları",
    c: "maǵlıwmatlar bazası sistemaları",
    d: "maǵlıwmatlar bazasın basqarıw sistemaları"
  },
  {
    quostion: "Qaysı operator járdeminde «tanlaw» ámeli orınlanadı",
    a: "INSERT",
    b: "DELETE + WHERE",
    c: "!SELECT + WHERE",
    d: "UPDATE + WHERE"
  },
  {
    quostion: "Domen bul ....?",
    a: "!baǵana",
    b: "keste",
    c: "qatar",
    d: "ketekshe"
  },
  {
    quostion: "Student kestesinen Familiyası B háribi menen baslanıp, V háribi menen tamamlanıwshılardıń sanın sanaw sorawı qaysı juwapta tuwrı kórsetilgen",
    a: "SELECT COUNT(*) as `Nátiyje` from `Student` WHERE LIKE `Familiyası` `B%V`",
    b: "SELECT COUNT(*) as `Nátiyje` from `Student` WHERE LIKE `Familiyası` `B%V%`",
    c: "SELECT COUNT(*) as `Nátiyje` from `Student` WHERE `Familiyası` LIKE `%B%V`",
    d: "!SELECT COUNT(*) as `Nátiyje` from `Student` WHERE `Familiyası` LIKE `B%V`"
  },
  {
    quostion: "CREATE operatorınıń wazıypası?",
    a: "Kestege qatar qosıw",
    b: "!Maǵlıwmatlar bazasında obyekt jaratıw",
    c: "Maǵlıwmatlar bazasında obyektti óshiriw",
    d: "Maǵlıwmatlar bazasında obyektti ózgertiw"
  },
  {
    quostion: "Mazmun-baylanıs modelin birinshi bolıp kim usınıs etken",
    a: "!Piter Chen",
    b: "Tyuring",
    c: "Edgar Kodd",
    d: "Eyler"
  },
  {
    quostion: "SELECT Name, Surname FROM student; Sorawında Name, Surname neni ańlatadı",
    a: "Kesteler",
    b: "Obyektler",
    c: "!Baǵanalar",
    d: "Qatarlar"
  },
  {
    quostion: "Maǵlıwmatlarǵa ruxsat etiw qáwipsizligi qanday mexanizm menen támiynlenedi",
    a: "Shifrlaw",
    b: "Deshifrlaw",
    c: "Tek ǵana maǵlıwmatlardı qorǵaw",
    d: "!Paydalanıwshılar hám roller"
  },
  {
    quostion: "UNION operatorı wazıypası",
    a: "Kestelerdi qısqartadı",
    b: "Kestelerdi ayıradı",
    c: "!Kestelerdi birlestiredi",
    d: "Eki kesteni enine qısqartadı"
  },
  {
    quostion: "Ónim kestesinen qálegen atributtıń maǵlıwmat tipin ózgertiw ámeli qaysı juwapta tuwrı kórsetilgen",
    a: "ALTER TABLE `Ónim` MODIFY ALTER `atı` varchar(10) null",
    b: "ALTER TABLE `Ónim` MODIFY CHANGE `atı` text(3) null",
    c: "ALTER TABLE `Ónim` CHANGE COLUMN `bahası` text(15) null",
    d: "!ALTER TABLE `Ónim` MODIFY `bahası` varchar(15) null"
  },
  {
    quostion: "DROP operatorının wazıypası?",
    a: "Kestedege obyektti óshiriw",
    b: "!Maǵlıwmatlar bazasınan obyektti óshiriw",
    c: "Maǵlıwmatlar bazasınan obyektti ózgertiw",
    d: "Kestege qatar qosıw"
  },
  {
    quostion: "Upper operatorınıń wazıypası ne?",
    a: "berilgen qatardı kishi háriplerge almastırıp beredi",
    b: "berilgen qatardı kishi háriplerge almastırıp beredi",
    c: "berilgen qatardı úlken háriplerge almastırıp beredi",
    d: "!berilgen baǵananı úlken háriplerge almastırıp beredi"
  },
  {
    quostion: "Qaysı SQL operatorları maǵlıwmatlar bazasında maǵlıwmatlardı táriyplewde isletiledi?",
    a: "MODIFY, TRUNCATE",
    b: "!CRATE, ALTER, DROP",
    c: "GRANT, REVOKE",
    d: "SELECT, UPDATE, INSERT, DELETE"
  },
  {
    quostion: "INSERT operatorınıń wazıypası?",
    a: "Qatardı óshiriw",
    b: "!Kestege qatar qosıw",
    c: "Kesteni ózgertiw",
    d: "Kesteden tańlaw"
  },
  {
    quostion: "Relyatciyalıq maǵlıwmatlar bazasındaǵı tiykarǵı túsiniklerdi anıqlań?",
    a: "!Keste, maydan, jazıw",
    b: "Keste, baǵana, qatar",
    c: "Keste, baǵana, jazıw",
    d: "Keste, baǵana"
  },
  {
    quostion: "Maǵlıwmatlar bazası adminstratorı bul-",
    a: "!bir yaki bir neshshe maǵlıwmatlar bazası haqqında tolıq túsinikke iye qánige bolıp, usı maǵlıwmatlar bazasın proektlestiriw hám qollanılıwın qadaǵalaw menen shuǵıllanadı",
    b: "bir yaki bir neshshe maǵlıwmatlar toplamı haqqında tolıq túsinikke iye predmet taraw qánigesi",
    c: "bir yaki bir neshshe maǵlıwmatlar bazasına texnikalıq xızmet kórsetiw menen shuǵıllanadı",
    d: "maǵlıwmatlar bazasına tek ǵana tarmaqta xızmet kórsetiw menen shuǵıllanadı"
  },
  {
    quostion: "SELECT MIN(jas), atı, familiya FROM test GROUP By atı, familiya; Sorawdaǵı MIN(jas) funkciyasınıń nátiyjesi?",
    a: "Jas kestesiniń minimal mánisin esaplaw",
    b: "min() funkciyası qáte",
    c: "!Jas baǵanası minimal mánisin esaplaw",
    d: "Jas qatarı minimal mánisin esaplaw"
  },
  {
    quostion: "Soraw arqalı ónim obyektinen nannıń bahası ozgertilsin",
    a: "DELETE ónim SET bahası= `1050` WHERE Ónim atı=`nan`",
    b: "UPDATE nan SET bahası= `1050` WHERE Ónim atı=`ónim`",
    c: "!UPDATE ónim SET bahası= `1050` WHERE Ónim atı=`nan`",
    d: "UPDATE ónim SET Ónim atı=`nan` WHERE bahası= `1050`"
  },
  {
    quostion: "MAX() agregat funkciyanıń wazıypasın aytıń",
    a: "Belgilengen obyekttiń en úlken mánisin tabıw",
    b: "!Belgilengen baǵananıń en úlken mánisin tabıw",
    c: "Belgilengen qatardıń en úlken mánisin tabıw",
    d: "Belgilengen elementtiń en úlken mánisin tabıw"
  },
  {
    quostion: "Qatar bul?",
    a: "!jazıw, kortej, ekzemplyar",
    b: "atribut, maydan",
    c: "fayl",
    d: "annorgamma"
  },
  {
    quostion: "Obyektler arasındaǵı Qatnas túrin anıqlań: student hám reyting dáptershesi",
    a: "!1:1",
    b: "m:1",
    c: "n:m",
    d: "m:1"
  },
  {
    quostion: "Tranzakciya neshe qásiyetke iye",
    a: "3 (SET)",
    b: "2 (IN)",
    c: "1 ()",
    d: "!4 (ACID)"
  },
  {
    quostion: "Ámeliy máseleler ushın avtomatlastırılǵan qayta islewdi támiynlewshi programma yaki programmalar kompleksine .............delinedi.",
    a: "!maǵlıwmatlar bazasın basqarıw sisteması",
    b: "maǵlıwmatlar bazaları",
    c: "qosımshalar",
    d: "maǵlıwmatlar sózligi"
  },
  {
    quostion: "INSERT, UPDATE, DELETE tómendegi SQL tilleriniń qaysı birine tiyisli?",
    a: "DQL",
    b: "DSL",
    c: "!DML",
    d: "DDL"
  },
  {
    quostion: "Relyaciyalıq algebra ámellrin kórsetiń",
    a: "!Kesilisiw, birlestiriw, ayırma, dekard kóbeyme",
    b: "Kesilisiw, qosıw, selekciya, dekard kóbeyme",
    c: "Kesilisiw, selekciya, ayırma, dekard kóbeyme",
    d: "Kesilisiw, qosıw, ayırma, selekciya, dekard kóbeyme"
  },
  {
    quostion: "Studentler hám topar obyektleri arasındaǵı baylanıs modelin anıqlań",
    a: "!n:1",
    b: "1:1",
    c: "n:m",
    d: "baylanıspaǵan"
  },
  {
    quostion: "Qaysı operator járdeminde «birlestiriw» ámeli orınlanadı",
    a: "MINUS",
    b: "DEVIDE",
    c: "!UNION",
    d: "INTERSECT"
  },
  {
    quostion: "Qollanılıwına kóre MBBSlar qanday túrlerge bólinedi?",
    a: "!bir hám kóp paydalanıwshılar",
    b: "bir adımlı hám kóp adımlı",
    c: "jeke hám jámáátlik",
    d: "tolıq hám tolıq emes"
  },
  {
    quostion: "Kesteler ortasındaǵı baylanıslardıń úsh túri durıs berilgen juwaptı kórsetiń",
    a: "!Birge-kóp, birge-bir, kópke-kóp",
    b: "Birge-úsh, birge-bir, kópke-kóp.",
    c: "Birge-kóp, birge-bir, kópke-noaniq.",
    d: "Birge-anıq, birge-bir, kópke-kóp."
  },
  {
    quostion: "Tómendegi Soraw berilgen. SELECT Familiya, CONCAT(qala, ' ', rayon, ' ', manzil) AS manzil FROM student; AS járdemshi sóz wazıypası?",
    a: "Manzil atamalı jańa qatorda soraw nátiyjelerin shıǵarıwǵa",
    b: "Manzil atamalı jańa kestede soraw nátiyjelerin shıǵarıwǵa",
    c: "Manzil atamalı jańa kortejda soraw nátiyjelerin shıǵarıwǵa",
    d: "!Manzil atamalı jańa baǵanada soraw nátiyjelerin shıǵarıwǵa"
  },
  {
    quostion: "MBBS arxitekturasınıń neshe basqıshı bar",
    a: "!3 ew (Sırtqı, Konseptual hám Fizikalıq)",
    b: "4 ew (Logikalıq, Colloborate, Fixed, Dinamikalıq)",
    c: "5 ew (Fizikalıq, Tranzaktion, Concat, Insert, Set)",
    d: "2 ew (Fixed, Dinamikalıq)"
  },
  {
    quostion: "VARCHAR tipi bul -",
    a: "materiallıq san",
    b: "!ózgeriwsheń tiptegi qatar tipi",
    c: "pútin tip",
    d: "sáne hám waqıt"
  },
  {
    quostion: "Maǵlıwmatlar bazası qáwipsizligin támiynlew nelerden ibarat boladı",
    a: "Barlıq paydalanıwshılar ushın óz aldına maǵlıwmatlardı oqiw huqıqı",
    b: "Tek ǵana avtorizaciyalasqan paydalanıwshılar ushın háreketlerdi orınlaw huqıqı",
    c: "Belgili tiptegi paydalanıwshılar ushın maǵlıwmatlardı shifrlaw hám deshifrlaw",
    d: "!Kesteler ústinde ayrım ámellerdi orınlaw huqıqı tek ǵana anıq paydalanıwshısına hám anıq waqıt dawamında beriledi"
  },
  {
    quostion: "Unikal maydan dep qanday qatarǵa aytıladı",
    a: "!mánisi qaytarılmaytuǵın maydan",
    b: "mánisi birdey bolǵan at astındaǵı maydan",
    c: "mánisi asıw qásiyetine iye maydan",
    d: "mánisi basqası menen baylanıspaǵan maydan"
  },
  {
    quostion: "Maǵlıwmatlar bazası tiykarǵı modelleri neshew?",
    a: "!3 ew (Tarmaqlı, Relyaciyalıq, hám Ierarxiyalıq)",
    b: "4 ew (Tarmaqlı, Remix, Demux, Filter)",
    c: "5 ew (Relyaciyalıq, Set, Concat, Follow, Insert)",
    d: "2 ew (Ierarxiyalıq, Set, Demux, Colloborate)"
  },
  {
    quostion: "Qatnas ne?",
    a: "!keste",
    b: "baǵana",
    c: "qatar",
    d: "ketekshe"
  },
  {
    quostion: "MySQL de CREATE VIEW operatorı isletilse",
    a: "hár dayım hár qıylı",
    b: "VIEW kestelerdi kórsetiw ushın xızmet qıladı",
    c: "!keste(ler)den kerekli baǵanalar tańlanadı hám virtual usılda kórsatiledi",
    d: "Dinamikalıq kesteden maǵlıwmat kórsetiledi"
  },
  {
    quostion: "Kestedegi baǵanaǵa qoyılǵan qanday shekleniw baǵana mánisleriniń bos bolmawin kórsetedi",
    a: "CHECK",
    b: "!NOT NULL",
    c: "FORGN KEY",
    d: "UNIQUE"
  },
  {
    quostion: "Durıs jazılǵan SELECT operatorın kórsetiń.",
    a: "SELECT Table FROM",
    b: "SELECT FROM * Table_name",
    c: "!SELECT * FROM",
    d: "SELECT *"
  },
  {
    quostion: "CREATE TABLE keste jaratıw operatorında NOT NULL neni ańlatadı?",
    a: "Keste qatarlarında probeller bolmawın",
    b: "!Baǵanaǵa tiyisli bolǵan qatar mánisleri bos bolmawın",
    c: "Baǵanaǵa tiyisli bolǵan qatar mánisleri bos bolıwın",
    d: "Keste bos ekenligi"
  },
  {
    quostion: "Xızmetker kestesinde `id`=5 bolǵan xızmetkerdiń Familiyasın ózgertiw ámeli qaysı juwapta tuwrı kórsetilgen",
    a: "ALTER `Xızmetker` AS `Familiyası`=`Anvarov` where `id`=5",
    b: "SELECT `Xızmetker` SET `Familiyası`=`Anvarov` where `id`=5",
    c: "UPDATE `Xızmetker` `Familiyası`=`Anvarov` SET where `id`=5",
    d: "!UPDATE `Xızmetker` SET `Familiyası`=`Anvarov` where `id`=5"
  },
  {
    quostion: "Qaysı buyrıqlardan biri tranzakciyadaǵı ózgerislerdi saqlaw ushın xızmet qıladı",
    a: "FLUSh",
    b: "ROLLBACK",
    c: "BEGIN TRANSACTION",
    d: "!COMMIT"
  },
  {
    quostion: "SELECT AVG(age) FROM STUDENT sorawı neni qaytaradı",
    a: "Maksimal STUDENT",
    b: "Minimal STUDENT",
    c: "STUDENTler jasınıń jıyındısın",
    d: "!STUDENT lerdiń ortasha jasın"
  },
  {
    quostion: "Sáne waqıt tipi qaysı juwapta tuwrı kórsetilgen",
    a: "INTEGER",
    b: "!TIMESTAMP",
    c: "NUMERIC",
    d: "BOOLEAN"
  },
  {
    quostion: "Bir sorawdıń ishinde jaylasqan ekinshi soraw qanday ataladı, mısal: SELECT * FROM STUDENT WHERE group_id IN (SELECT id FROM group WHERE number=‘217-18’)",
    a: "parqlanbaydı",
    b: "!ishki soraw (podzapros)",
    c: "baylanıs",
    d: "birlesiw"
  },
  {
    quostion: "MBBSda DDL tilin wazıypası ne?",
    a: "Maǵlıwmatlardı manipulyaciya qılıw tili",
    b: "Maǵlıwmatlardı qadaǵalaw tili",
    c: "Maǵlıwmatlardı saqlaw tili",
    d: "!Maǵlıwmatlardı súwretlew tili"
  },
  {
    quostion: "SELECT operatorında FROM sózinen keyingi jazıw neni bildiredi?",
    a: "gilt maydanın",
    b: "!kesteniń atın",
    c: "baǵananıń atın",
    d: "shártti"
  },
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
                <input class="answer-input" type="radio" name="${index}"> ${item.a}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.b}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.c}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.d}
              </label>
            </li>
        </ul>
  `
  form.append(container)
})

// elHtml
const elButton = document.querySelector('#generate')
const elAnswerContent = document.querySelector('.result')
// const elsAnswers = document.querySelectorAll('.js-buttons')
// console.log(elsAnswers);

elAnswerContent.innerHTML = ''
const buttonNumber = []

headerContent()
counter(25)
createSendButton('div', 'button-submit', 'Yakunlash', elAnswerContent)
// When clicked, background changed other color
if(elButton) {
  elButton.addEventListener('click', () => {
    const button = document.createElement('button')
    button.classList.add('button-primary')
    button.textContent = 26

    elAnswerContent.appendChild(button)
  })
}

// Clicker function
if(elAnswerContent) {
  elAnswerContent.addEventListener('click', (evt) => {
    if(evt.target.matches('.button-primary')) {
      evt.target.classList.add('background-color')
    }
  })
}

// Generate 50 questions
if(elAnswerContent) {
  elAnswerContent.addEventListener('click', (evt) => {
    if(evt.target.matches('.button-submit')) {
      elAnswerContent.innerHTML = ''

      headerContent()
      counter(50)
      createSendButton('div',
        'button-submit',
        'Yakunlash',
        elAnswerContent
      )
    }
  })
}


// ------------------========= FUNCTIONS START =======-------------

// BUTTON counter
function counter(count) {
  for(let i = 1; i <= count; i++) {
    buttonNumber.push(i)
    createButton()
  }
}


// CREAT BUTTON FUNCTION
function createButton() {
  const button = document.createElement('button')
    button.classList.add('button-primary', 'js-buttons')
    elAnswerContent.appendChild(button)

  buttonNumber.forEach(item => {
    button.textContent = item
  })
}


// Content header maker
function headerContent() {
  const span = document.createElement('span')
  span.classList.add('answer')

  span.innerHTML = `
    <a href="file/Malumotlar bazasi.doc" class="answer__link">Javoblar
    </a>
  `
  elAnswerContent.appendChild(span)
}

// CREATE SEND BUTTON
function createSendButton(div, clasName, text, append) {
  div = document.createElement(div)
  div.classList.add(clasName)
  div.style.textAlign = 'center'
  div.textContent = text
  append.appendChild(div)
}

// ------------------========= FUNCTIONS END =======-------------
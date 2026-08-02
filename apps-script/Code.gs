const GROUPS_DATA = [
  {d:"港島南區", no:"港島第1海童軍旅", sponsor:"香港童軍總會港島地域", sections:["深資童軍"]},
  {d:"港島南區", no:"港島第3海童軍旅", sponsor:"香港航海學校", sections:["童軍"]},
  {d:"港島南區", no:"港島第11海童軍旅", sponsor:"香港仔工業學校", sections:["童軍", "深資童軍"]},
  {d:"港島南區", no:"港島第19旅", sponsor:"香港仔聖伯多祿天主教小學", sections:["幼童軍"]},
  {d:"港島南區", no:"港島第55旅", sponsor:"聖伯多祿中學", sections:["童軍", "深資童軍"]},
  {d:"港島南區", no:"港島第70旅", sponsor:"香港仔街坊福利會有限公司", sections:["幼童軍", "童軍", "深資童軍"]},
  {d:"港島南區", no:"港島第96旅", sponsor:"明愛莊月明中學", sections:["童軍"]},
  {d:"港島南區", no:"港島第146旅", sponsor:"東華三院鶴山學校", sections:["幼童軍"]},
  {d:"港島南區", no:"港島第159旅", sponsor:"聖公會呂明才中學", sections:["童軍", "深資童軍", "樂行童軍"]},
  {d:"港島南區", no:"港島第171旅", sponsor:"聖士提反書院附屬小學", sections:["幼童軍"]},
  {d:"港島南區", no:"港島第203旅", sponsor:"聖士提反書院", sections:["童軍", "深資童軍"]},
  {d:"港島南區", no:"港島第204旅", sponsor:"聖公會田灣始南小學", sections:["小童軍", "幼童軍"]},
  {d:"港島南區", no:"港島第220旅", sponsor:"余振強紀念第二中學", sections:["童軍", "深資童軍"]},
  {d:"港島南區", no:"港島第224旅", sponsor:"香港童軍總會港島南區區務委員會", sections:["幼童軍", "童軍", "深資童軍"]},
  {d:"港島南區", no:"港島第232旅", sponsor:"鴨脷洲街坊學校", sections:["幼童軍"]},
  {d:"港島南區", no:"港島第233旅", sponsor:"東華三院徐展堂學校", sections:["幼童軍", "童軍"]},
  {d:"港島南區", no:"港島第236旅", sponsor:"東華三院利東青少年綜合服務", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"港島南區", no:"港島第238旅", sponsor:"聖公會置富始南小學", sections:["幼童軍"]},
  {d:"港島南區", no:"港島第241旅", sponsor:"香港童軍總會童軍知友社", sections:["小童軍", "幼童軍", "童軍", "深資童軍"]},
  {d:"港島南區", no:"港島第256旅", sponsor:"香港仔浸信會呂明才書院", sections:["童軍", "深資童軍"]},
  {d:"港島南區", no:"港島第1142旅", sponsor:"香港南區官立小學", sections:["幼童軍"]},
  {d:"港島南區", no:"港島第1143旅", sponsor:"華富邨寶血小學", sections:["幼童軍"]},
  {d:"港島南區", no:"港島第1144旅", sponsor:"海怡寶血小學", sections:["幼童軍"]},
  {d:"港島南區", no:"港島第1228旅", sponsor:"維多利亞（海怡）國際幼稚園", sections:["小童軍"]},
  {d:"港島南區", no:"港島第1325旅", sponsor:"香港中華基督教青年會華愛之家", sections:["樂行童軍"]},
  {d:"港島南區", no:"港島第1430旅", sponsor:"聖文嘉中英文幼稚園（華貴）", sections:["小童軍"]},
  {d:"港島南區", no:"港島第1464旅", sponsor:"聖伯多祿天主教小學上午校", sections:["幼童軍"]},
  {d:"港島南區", no:"港島第1647旅", sponsor:"保良局莊啟程夫人（華貴）幼稚園暨幼兒園", sections:["小童軍"]},
  {d:"港島南區", no:"港島第1704旅", sponsor:"東華三院蕭旺李滿福幼兒園", sections:["小童軍"]},
  {d:"港島南區", no:"港島第1715旅", sponsor:"香港小童群益會賽馬會南區青少年綜合服務中心", sections:["幼童軍", "童軍"]},
  {d:"港島南區", no:"港島第1759旅", sponsor:"香港童軍總會童軍知友社", sections:["童軍", "深資童軍"]},
  {d:"港島南區", no:"港島第1827旅", sponsor:"明愛賽馬會赤柱青少年綜合服務", sections:["幼童軍"]},
  {d:"港島南區", no:"港島第1876旅", sponsor:"嘉諾撒培德學校", sections:["幼童軍"]},
  {d:"柴灣區", no:"港島第6旅", sponsor:"香港鐵路有限公司物業管理部 － 杏花邨", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"柴灣區", no:"港島第9旅", sponsor:"騰達體育會", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"柴灣區", no:"港島第90旅", sponsor:"香港童軍總會港島第九十旅（公開旅）", sections:["幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"柴灣區", no:"港島第91旅", sponsor:"文理書院（香港）", sections:["童軍"]},
  {d:"柴灣區", no:"港島第107旅", sponsor:"天主教明德學校", sections:["小童軍", "幼童軍"]},
  {d:"柴灣區", no:"港島第149旅", sponsor:"張振興伉儷書院", sections:["童軍", "深資童軍", "樂行童軍"]},
  {d:"柴灣區", no:"港島第174旅", sponsor:"循道衛理聯合教會衛理中學", sections:["童軍", "深資童軍"]},
  {d:"柴灣區", no:"港島第195旅", sponsor:"明愛柴灣馬登基金中學", sections:["童軍"]},
  {d:"柴灣區", no:"港島第197旅", sponsor:"香港西區扶輪社匡智晨輝學校", sections:["幼童軍"]},
  {d:"柴灣區", no:"港島第239旅", sponsor:"救世軍韋理夫人紀念學校", sections:["幼童軍"]},
  {d:"柴灣區", no:"港島第243旅", sponsor:"香港青年協會杏花村青少年中心及閱讀室", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"柴灣區", no:"港島第263旅", sponsor:"香港中華基督教青年會小西灣會所", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"柴灣區", no:"港島第268旅", sponsor:"香港中華基督教青年會柴灣會所", sections:["幼童軍", "童軍", "深資童軍"]},
  {d:"柴灣區", no:"港島第281旅", sponsor:"福建中學（小西灣）", sections:["童軍"]},
  {d:"柴灣區", no:"港島第1145旅", sponsor:"中華傳道會劉永生中學", sections:["童軍"]},
  {d:"柴灣區", no:"港島第1187旅", sponsor:"漢華中學", sections:["幼童軍", "童軍", "深資童軍"]},
  {d:"柴灣區", no:"港島第1233旅", sponsor:"中華基金中學", sections:["童軍"]},
  {d:"柴灣區", no:"港島第1257旅", sponsor:"嶺南衡怡紀念中學", sections:["童軍", "深資童軍", "樂行童軍"]},
  {d:"柴灣區", no:"港島第1275旅", sponsor:"培僑小學", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"柴灣區", no:"港島第1316旅", sponsor:"香港童軍總會柴灣區區務委員會", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"柴灣區", no:"港島第1384旅", sponsor:"港大同學會小學", sections:["小童軍", "幼童軍"]},
  {d:"柴灣區", no:"港島第1443旅", sponsor:"藍灣半島物業管理有限公司", sections:["幼童軍"]},
  {d:"柴灣區", no:"港島第1523旅", sponsor:"扶康會興華成人訓練中心", sections:["樂行童軍"]},
  {d:"柴灣區", no:"港島第1617旅", sponsor:"聖公會柴灣聖米迦勒小學", sections:["幼童軍"]},
  {d:"柴灣區", no:"港島第1714旅", sponsor:"迦南幼稚園（小西灣）", sections:["小童軍"]},
  {d:"柴灣區", no:"港島第1737空童軍旅", sponsor:"香港童軍總會柴灣區區務委員會", sections:["深資童軍", "樂行童軍"]},
  {d:"柴灣區", no:"港島第1794旅", sponsor:"基督教香港信義會信愛學校", sections:["幼童軍"]},
  {d:"柴灣區", no:"港島第1848旅", sponsor:"樂沛兒幼稚園 - 柴灣", sections:["小童軍"]},
  {d:"筲箕灣區", no:"港島第17旅", sponsor:"慈幼中學", sections:["幼童軍", "童軍", "深資童軍"]},
  {d:"筲箕灣區", no:"港島第50旅", sponsor:"聖馬可中學", sections:["童軍", "深資童軍", "樂行童軍"]},
  {d:"筲箕灣區", no:"港島第81旅", sponsor:"筲箕灣官立中學", sections:["童軍", "深資童軍"]},
  {d:"筲箕灣區", no:"港島第82旅", sponsor:"香港小童群益會康山兒童中心", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"筲箕灣區", no:"港島第86旅", sponsor:"愛秩序灣居民協會", sections:["幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"筲箕灣區", no:"港島第101旅", sponsor:"筲箕灣東官立中學", sections:["童軍", "深資童軍", "樂行童軍"]},
  {d:"筲箕灣區", no:"港島第114旅", sponsor:"香港中國婦女會丘佐榮學校", sections:["幼童軍"]},
  {d:"筲箕灣區", no:"港島第180旅", sponsor:"中華基督教會基灣小學", sections:["幼童軍"]},
  {d:"筲箕灣區", no:"港島第182旅", sponsor:"香港中國婦女會中學", sections:["童軍"]},
  {d:"筲箕灣區", no:"港島第183旅", sponsor:"中華基督教會基灣小學（愛蝶灣）", sections:["小童軍", "幼童軍"]},
  {d:"筲箕灣區", no:"港島第196旅", sponsor:"香港童軍總會港島第一九六旅（公開旅）", sections:["小童軍", "幼童軍", "童軍"]},
  {d:"筲箕灣區", no:"港島第206旅", sponsor:"太古城物業管理聯絡議會", sections:["小童軍", "幼童軍", "童軍", "深資童軍"]},
  {d:"筲箕灣區", no:"港島第219旅", sponsor:"太古小學", sections:["幼童軍"]},
  {d:"筲箕灣區", no:"港島第226旅", sponsor:"佛教中華康山學校", sections:["幼童軍"]},
  {d:"筲箕灣區", no:"港島第227旅", sponsor:"滬江小學", sections:["幼童軍"]},
  {d:"筲箕灣區", no:"港島第242旅", sponsor:"香港中華基督教青年會康怡會所", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"筲箕灣區", no:"港島第255旅", sponsor:"香港中華基督教青年會康怡會所", sections:["小童軍", "幼童軍", "童軍", "深資童軍"]},
  {d:"筲箕灣區", no:"港島第257旅", sponsor:"勵志會梁李秀娛紀念小學", sections:["幼童軍"]},
  {d:"筲箕灣區", no:"港島第1095旅", sponsor:"東區撲滅罪行委員會", sections:["幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"筲箕灣區", no:"港島第1127旅", sponsor:"香港小童群益會筲箕灣兒童中心", sections:["小童軍", "幼童軍", "童軍"]},
  {d:"筲箕灣區", no:"港島第1222旅", sponsor:"維多利亞幼稚園", sections:["小童軍"]},
  {d:"筲箕灣區", no:"港島第1368旅", sponsor:"鯉景灣物業管理有限公司", sections:["幼童軍"]},
  {d:"筲箕灣區", no:"港島第1423旅", sponsor:"愛秩序灣官立小學", sections:["幼童軍"]},
  {d:"筲箕灣區", no:"港島第1544旅", sponsor:"基督教康山中英文幼稚園", sections:["小童軍"]},
  {d:"筲箕灣區", no:"港島第1560旅", sponsor:"協康會賽馬會家長資源中心", sections:["小童軍", "幼童軍"]},
  {d:"筲箕灣區", no:"港島第1682旅", sponsor:"康怡維多利亞幼稚園", sections:["小童軍"]},
  {d:"筲箕灣區", no:"港島第1745旅", sponsor:"港島民生書院", sections:["童軍"]},
  {d:"筲箕灣區", no:"港島第1762旅", sponsor:"筲箕灣官立小學", sections:["幼童軍"]},
  {d:"港島北區", no:"港島第7旅", sponsor:"香港童軍總會港島第七旅（公開旅）", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"港島北區", no:"港島第10海童軍旅", sponsor:"東華三院李潤田紀念中學", sections:["童軍", "深資童軍"]},
  {d:"港島北區", no:"港島第48旅", sponsor:"聖貞德學校", sections:["童軍", "深資童軍"]},
  {d:"港島北區", no:"港島第51旅", sponsor:"蘇浙公學", sections:["童軍", "深資童軍"]},
  {d:"港島北區", no:"港島第69旅", sponsor:"啟基學校（港島）", sections:["小童軍", "幼童軍"]},
  {d:"港島北區", no:"港島第76旅", sponsor:"金文泰中學", sections:["童軍"]},
  {d:"港島北區", no:"港島第118旅", sponsor:"銅鑼灣街坊福利事務促進會", sections:["小童軍", "幼童軍", "童軍", "深資童軍"]},
  {d:"港島北區", no:"港島第122旅", sponsor:"蘇浙小學", sections:["幼童軍"]},
  {d:"港島北區", no:"港島第130旅", sponsor:"北角協同中學", sections:["童軍"]},
  {d:"港島北區", no:"港島第139旅", sponsor:"香港童軍總會港島北區區務委員會", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"港島北區", no:"港島第175旅", sponsor:"香港童軍總會港島第一七五旅（公開旅）", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"港島北區", no:"港島第187旅", sponsor:"顯理中學", sections:["童軍", "深資童軍"]},
  {d:"港島北區", no:"港島第190旅", sponsor:"閩僑中學", sections:["童軍", "深資童軍"]},
  {d:"港島北區", no:"港島第225旅", sponsor:"香港嘉諾撒學校", sections:["幼童軍"]},
  {d:"港島北區", no:"港島第230旅", sponsor:"培僑中學", sections:["童軍"]},
  {d:"港島北區", no:"港島第240旅", sponsor:"聖公會聖米迦勒小學", sections:["幼童軍"]},
  {d:"港島北區", no:"港島第253旅", sponsor:"保良局余李慕芬紀念學校", sections:["幼童軍"]},
  {d:"港島北區", no:"港島第1167旅", sponsor:"北角官立小學", sections:["小童軍", "幼童軍"]},
  {d:"港島北區", no:"港島第1227旅", sponsor:"銅鑼灣維多利亞國際幼稚園", sections:["小童軍"]},
  {d:"港島北區", no:"港島第1265旅", sponsor:"北角官立小學（雲景道）", sections:["幼童軍"]},
  {d:"港島北區", no:"港島第1421旅", sponsor:"香港遊樂場協會北角青少年綜合服務", sections:["幼童軍"]},
  {d:"港島北區", no:"港島第1453旅", sponsor:"北角衛理小學", sections:["幼童軍"]},
  {d:"港島北區", no:"港島第1454旅", sponsor:"香港民生幼稚園暨幼兒園", sections:["小童軍"]},
  {d:"港島北區", no:"港島第1463旅", sponsor:"丹拿山循道學校", sections:["幼童軍"]},
  {d:"港島北區", no:"港島第1556旅", sponsor:"明慧國際幼兒園暨幼稚園", sections:["小童軍"]},
  {d:"港島北區", no:"港島第1616旅", sponsor:"城巿花園業主委員會", sections:["小童軍", "幼童軍", "童軍"]},
  {d:"港島北區", no:"港島第1640旅", sponsor:"維多利亞幼兒園", sections:["小童軍"]},
  {d:"灣仔區", no:"港島第4海童軍旅", sponsor:"香港童軍總會港島第四海童軍旅（公開旅）", sections:["童軍"]},
  {d:"灣仔區", no:"港島第5海童軍旅", sponsor:"香港童軍總會港島第五海童軍旅（公開旅）", sections:["幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"灣仔區", no:"港島第6海童軍旅", sponsor:"南華體育會", sections:["幼童軍", "童軍"]},
  {d:"灣仔區", no:"港島第12旅", sponsor:"皇仁書院", sections:["童軍", "深資童軍"]},
  {d:"灣仔區", no:"港島第14旅", sponsor:"浸信會愛群社會服務處", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"灣仔區", no:"港島第15旅", sponsor:"香港華仁書院", sections:["幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"灣仔區", no:"港島第18旅", sponsor:"香港童軍總會港島第十八旅（公開旅）", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"灣仔區", no:"港島第33旅", sponsor:"香港童軍總會港島第三十三旅（公開旅）", sections:["幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"灣仔區", no:"港島第35旅", sponsor:"香港鄧鏡波書院", sections:["童軍", "深資童軍", "樂行童軍"]},
  {d:"灣仔區", no:"港島第36旅", sponsor:"軒尼詩道官立小學", sections:["幼童軍"]},
  {d:"灣仔區", no:"港島第37旅", sponsor:"嶺南中學", sections:["童軍"]},
  {d:"灣仔區", no:"港島第56旅", sponsor:"中華基督教會基道中學", sections:["童軍", "深資童軍"]},
  {d:"灣仔區", no:"港島第60旅", sponsor:"鄧肇堅維多利亞官立中學", sections:["童軍", "深資童軍"]},
  {d:"灣仔區", no:"港島第61旅", sponsor:"東華三院李賜豪小學", sections:["小童軍", "幼童軍"]},
  {d:"灣仔區", no:"港島第80旅", sponsor:"軒尼詩道官立小學（銅鑼灣）", sections:["幼童軍"]},
  {d:"灣仔區", no:"港島第88旅", sponsor:"聖雅各福群會復康部", sections:["童軍", "樂行童軍"]},
  {d:"灣仔區", no:"港島第100旅", sponsor:"南華體育會", sections:["幼童軍", "童軍"]},
  {d:"灣仔區", no:"港島第115旅", sponsor:"佛教黃鳳翎中學", sections:["童軍"]},
  {d:"灣仔區", no:"港島第116旅", sponsor:"聖雅各福群會", sections:["幼童軍", "童軍", "深資童軍"]},
  {d:"灣仔區", no:"港島第157旅", sponsor:"匡智獅子會晨崗學校", sections:["幼童軍", "童軍"]},
  {d:"灣仔區", no:"港島第179旅", sponsor:"聖公會鄧肇堅中學", sections:["童軍"]},
  {d:"灣仔區", no:"港島第186旅", sponsor:"香港童軍總會港島第一八六旅（公開旅）", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"灣仔區", no:"港島第208旅", sponsor:"聖公會聖雅各小學", sections:["小童軍", "幼童軍"]},
  {d:"灣仔區", no:"港島第212旅", sponsor:"香港真光中學附屬小學暨幼稚園", sections:["幼童軍"]},
  {d:"灣仔區", no:"港島第218旅", sponsor:"賽馬會匡智學校", sections:["幼童軍"]},
  {d:"灣仔區", no:"港島第221旅", sponsor:"懲教署", sections:["童軍", "深資童軍", "樂行童軍"]},
  {d:"灣仔區", no:"港島第229旅", sponsor:"香港大學畢業同學會", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"灣仔區", no:"港島第231旅", sponsor:"滬江維多利亞學校", sections:["小童軍", "幼童軍", "童軍"]},
  {d:"灣仔區", no:"港島第247旅", sponsor:"孔聖堂中學", sections:["童軍"]},
  {d:"灣仔區", no:"港島第269旅", sponsor:"香港佛教聯合會青少年中心", sections:["幼童軍", "童軍", "深資童軍"]},
  {d:"灣仔區", no:"港島第274旅", sponsor:"大坑坊眾福利會大坑青年中心", sections:["幼童軍", "童軍"]},
  {d:"灣仔區", no:"港島第1089旅", sponsor:"保良局金銀業貿易場張凝文學校", sections:["幼童軍"]},
  {d:"灣仔區", no:"港島第1128旅", sponsor:"聖雅各福群會麥潔蓮幼稚園 / 聖雅各福群會幼兒中心（堅尼地道）", sections:["小童軍"]},
  {d:"灣仔區", no:"港島第1360旅", sponsor:"東華三院李賢義伉儷幼兒園", sections:["小童軍"]},
  {d:"灣仔區", no:"港島第1482旅", sponsor:"寶血小學", sections:["小童軍", "幼童軍"]},
  {d:"灣仔區", no:"港島第1586旅", sponsor:"寶覺小學", sections:["幼童軍"]},
  {d:"灣仔區", no:"港島第1618旅", sponsor:"保良局朱李月華幼稚園暨幼兒園", sections:["小童軍"]},
  {d:"灣仔區", no:"港島第1665旅", sponsor:"李陞大坑學校", sections:["幼童軍"]},
  {d:"灣仔區", no:"港島第1809旅", sponsor:"保良局莊啟程幼兒園", sections:["小童軍"]},
  {d:"灣仔區", no:"港島第1849旅", sponsor:"官立嘉道理爵士小學", sections:["幼童軍"]},
  {d:"灣仔區", no:"港島第1886旅", sponsor:"灣仔青年聯會有限公司", sections:["幼童軍", "深資童軍"]},
  {d:"灣仔區", no:"港島第1891旅", sponsor:"香港伊斯蘭聯會", sections:["小童軍", "幼童軍", "童軍"]},
  {d:"維多利亞城區", no:"港島第1旅", sponsor:"聖若瑟書院", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"維多利亞城區", no:"港島第2旅", sponsor:"天主教聖母無原罪主教座堂", sections:["小童軍", "幼童軍", "童軍", "深資童軍"]},
  {d:"維多利亞城區", no:"港島第12海童軍旅", sponsor:"香港童軍總會維多利亞城區區務委員會", sections:["小童軍", "幼童軍", "童軍"]},
  {d:"維多利亞城區", no:"港島第21旅", sponsor:"香港中華基督教青年會必列者士街青少年中心", sections:["幼童軍", "童軍", "深資童軍"]},
  {d:"維多利亞城區", no:"港島第66旅", sponsor:"香港童軍總會維多利亞城區區務委員會", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"維多利亞城區", no:"港島第94旅", sponsor:"聖保羅男女中學", sections:["幼童軍", "童軍", "深資童軍"]},
  {d:"維多利亞城區", no:"港島第99旅", sponsor:"高主教書院", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"維多利亞城區", no:"港島第125旅", sponsor:"堅道明愛社區中心", sections:["幼童軍", "童軍", "深資童軍"]},
  {d:"維多利亞城區", no:"港島第147旅", sponsor:"中區街坊福利會", sections:["幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"維多利亞城區", no:"港島第193旅", sponsor:"香港童軍總會港島第一九三旅（公開旅）", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"維多利亞城區", no:"港島第198旅", sponsor:"聖馬太小學", sections:["幼童軍"]},
  {d:"維多利亞城區", no:"港島第246旅", sponsor:"樂善堂梁銶琚書院", sections:["童軍"]},
  {d:"維多利亞城區", no:"港島第261旅", sponsor:"通善壇有限公司", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"維多利亞城區", no:"港島第1136旅", sponsor:"新會商會學校", sections:["幼童軍"]},
  {d:"維多利亞城區", no:"港島第1155旅", sponsor:"香港英皇書院同學會有限公司", sections:["小童軍", "幼童軍"]},
  {d:"維多利亞城區", no:"港島第1156旅", sponsor:"明愛家長資源中心", sections:["幼童軍", "童軍", "深資童軍"]},
  {d:"維多利亞城區", no:"港島第1157旅", sponsor:"嘉諾撒聖心幼稚園", sections:["小童軍"]},
  {d:"維多利亞城區", no:"港島第1176旅", sponsor:"香港小童群益會賽馬會上環青少年綜合服務中心", sections:["小童軍", "幼童軍"]},
  {d:"維多利亞城區", no:"港島第1295旅", sponsor:"般咸道官立小學", sections:["幼童軍"]},
  {d:"維多利亞城區", no:"港島第1393旅", sponsor:"中西區聖安多尼學校", sections:["幼童軍"]},
  {d:"維多利亞城區", no:"港島第1462旅", sponsor:"聖公會基恩小學", sections:["幼童軍"]},
  {d:"維多利亞城區", no:"港島第1660旅", sponsor:"香港童軍總會維多利亞城區區務委員會", sections:["深資童軍", "樂行童軍"]},
  {d:"維多利亞城區", no:"港島第1783旅", sponsor:"天主教總堂區學校", sections:["幼童軍"]},
  {d:"港島西區", no:"港島第5旅", sponsor:"英皇書院", sections:["童軍", "深資童軍"]},
  {d:"港島西區", no:"港島第10旅", sponsor:"聖保羅書院", sections:["小童軍", "幼童軍", "童軍", "深資童軍", "樂行童軍"]},
  {d:"港島西區", no:"港島第16旅", sponsor:"聖類斯中學", sections:["小童軍", "幼童軍", "童軍", "深資童軍"]},
  {d:"港島西區", no:"港島第22旅", sponsor:"西環堅尼地城明愛中心", sections:["小童軍", "幼童軍", "童軍", "深資童軍"]},
  {d:"港島西區", no:"港島第23旅", sponsor:"香港童軍總會港島西區區務委員會", sections:["小童軍", "幼童軍"]},
  {d:"港島西區", no:"港島第110旅", sponsor:"香港潮商學校", sections:["幼童軍"]},
  {d:"港島西區", no:"港島第142旅", sponsor:"甘迺迪中心", sections:["幼童軍"]},
  {d:"港島西區", no:"港島第153旅", sponsor:"香港基督教女青年會西環社會服務處", sections:["小童軍", "幼童軍", "童軍", "深資童軍"]},
  {d:"港島西區", no:"港島第161旅", sponsor:"香港童軍總會港島西區區務委員會", sections:["幼童軍", "童軍", "深資童軍"]},
  {d:"港島西區", no:"港島第189旅", sponsor:"聖安多尼學校", sections:["小童軍", "幼童軍"]},
  {d:"港島西區", no:"港島第207旅", sponsor:"聖士提反堂中學", sections:["童軍"]},
  {d:"港島西區", no:"港島第215旅", sponsor:"心光恩望學校", sections:["童軍"]},
  {d:"港島西區", no:"港島第244旅", sponsor:"聖公會呂明才紀念小學", sections:["幼童軍"]},
  {d:"港島西區", no:"港島第250旅", sponsor:"心光盲人院暨學校 - 心光學校", sections:["童軍", "深資童軍"]},
  {d:"港島西區", no:"港島第1146旅", sponsor:"李陞小學", sections:["幼童軍"]},
  {d:"港島西區", no:"港島第1302旅", sponsor:"維多利亞（寶翠園）幼稚園", sections:["小童軍"]},
  {d:"港島西區", no:"港島第1527旅", sponsor:"明愛賽馬會石塘咀青少年綜合服務", sections:["幼童軍"]},
  {d:"港島西區", no:"港島第1563旅", sponsor:"聖嘉祿學校", sections:["小童軍", "幼童軍"]},
  {d:"港島西區", no:"港島第1614旅", sponsor:"香港童軍總會港島西區區務委員會", sections:["樂行童軍"]},
  {d:"港島西區", no:"港島第1828旅", sponsor:"香港童軍總會港島西區區務委員會", sections:["童軍", "深資童軍"]},
];/* =====================================================================
/* =====================================================================
   2026 優異旅團獎勵計劃 — Google Apps Script 後端（v4）
   - 旅團：免登入，填 form → 確認送出（後端記時間＋內容），無電郵
   - 每區 2 帳號：審核員（睇已交、批核）/ 區總監（可跳過審核員直接批核、確認送交地域）
   - 地域 1 帳號：睇各區獨立總覽＋統計＋設合格線＋匯出
   - 合格分數線：Config 內一格由地域設定；旅團睇唔到，區睇到
   - 預設 15 個帳號（7區×2 ＋ 地域）
   部署後請先執行一次 setup()。
   ===================================================================== */
const SHEET_ACC="Accounts", SHEET_GROUPS="Groups", SHEET_SUB="Submissions", SHEET_SESS="Sessions", SHEET_CFG="Config";
const YEAR=2026, EVAL_YEAR=YEAR-1;
const SESSION_HOURS=12;
const DEFAULT_PASS_MARK=80;
const DISTRICTS_LIST=["港島南區","柴灣區","筲箕灣區","港島北區","灣仔區","維多利亞城區","港島西區"];
const ROLE_REVIEWER="reviewer", ROLE_DC="dc", ROLE_REGION="region";
const ST_SUBMITTED="已遞交", ST_REVIEWED="已審核", ST_CONFIRMED="已確認";
const SUB_COLS=["id","createdAt","submittedAt","year","district","groupNo","branchId","branchName","type","leader","phone","position","meetingPlace","meetingTime","fieldsJson","scoresJson","total","minStd","status","reviewedAt","reviewedBy","confirmedAt","confirmedBy","summary"];

const _ss=()=>SpreadsheetApp.getActiveSpreadsheet();
function _sh(name){const s=_ss().getSheetByName(name);if(!s)throw new Error("找不到工作表："+name+"。請先執行 setup()。");return s;}

/* ===== 初始化 ===== */
function setup(){
  const ss=_ss();
  const cfg=ss.getSheetByName(SHEET_CFG)||ss.insertSheet(SHEET_CFG);
  cfg.clear();cfg.getRange(1,1,1,2).setValues([["key","value"]]);
  setCfg("year",YEAR);setCfg("passMark",DEFAULT_PASS_MARK);
  const acc=ss.getSheetByName(SHEET_ACC)||ss.insertSheet(SHEET_ACC);
  acc.clear();acc.getRange(1,1,1,4).setValues([["username","password","role","district"]]);
  const note=["=== 15 個帳號（請妥善保存）==="];
  const rpw=randomPw2();
  note.push("★ 地域（地域秘書處）："+REGION_USER()+"　密碼："+rpw);
  acc.appendRow([REGION_USER(),rpw,ROLE_REGION,""]);
  DISTRICTS_LIST.forEach(d=>{
    const rp=randomPw2();acc.appendRow([d+"-審核員",rp,ROLE_REVIEWER,d]);note.push(d+" 審核員　密碼："+rp);
    const dp=randomPw2();acc.appendRow([d+"-區總監",dp,ROLE_DC,d]);note.push(d+" 區總監　密碼："+dp);
  });
  note.push("合格分數線預設："+DEFAULT_PASS_MARK+"（地域登入後可改）");
  const gs=ss.getSheetByName(SHEET_GROUPS)||ss.insertSheet(SHEET_GROUPS);
  gs.clear();gs.getRange(1,1,1,4).setValues([["district","no","sponsor","sections"]]);
  GROUPS_DATA.forEach(g=>gs.appendRow([g.d,g.no,g.sponsor,g.sections.join(", ")]));
  const sub=ss.getSheetByName(SHEET_SUB)||ss.insertSheet(SHEET_SUB);
  sub.clear();sub.getRange(1,1,1,SUB_COLS.length).setValues([SUB_COLS.slice()]);
  const sess=ss.getSheetByName(SHEET_SESS)||ss.insertSheet(SHEET_SESS);
  sess.clear();sess.getRange(1,1,1,5).setValues([["token","username","role","district","expiresAt"]]);
  const msg=note.join("\n");Logger.log(msg);return msg;
}
function REGION_USER(){return "地域秘書處";}
function randomPw2(){const c="abcdefghijkmnpqrstuvwxyz23456789";let s="";for(let i=0;i<8;i++)s+=c.charAt(Math.floor(Math.random()*c.length));return s;}

/* ===== Config ===== */
function getCfg(k){const v=_sh(SHEET_CFG).getDataRange().getValues();for(let i=1;i<v.length;i++)if(v[i][0]==k)return v[i][1];return"";}
function setCfg(k,val){const cfg=_sh(SHEET_CFG);const v=cfg.getDataRange().getValues();for(let i=1;i<v.length;i++)if(v[i][0]==k){cfg.getRange(i+1,2).setValue(val);return;}cfg.appendRow([k,val]);}
function getPassMark(){const p=Number(getCfg("passMark"));return isNaN(p)?DEFAULT_PASS_MARK:p;}

/* ===== Sub helpers ===== */
function getCol(name){const i=SUB_COLS.indexOf(name);if(i<0)throw new Error("bad column "+name);return i+1;}
function setSub(sheet,row,name,value){sheet.getRange(row,getCol(name)).setValue(value);}
function rowMap(row){const o={};for(let c=0;c<SUB_COLS.length;c++)o[SUB_COLS[c]]=row[c];return o;}
function findSub(id,district){const v=_sh(SHEET_SUB).getDataRange().getValues();for(let i=1;i<v.length;i++)if(v[i][0]==id&&(v[i][4]==district||!district))return{row:i+1,map:rowMap(v[i])};return null;}
function parseSub(m){m.fields=m.fieldsJson?JSON.parse(m.fieldsJson):{};m.scores=m.scoresJson?JSON.parse(m.scoresJson):{};return m;}

/* ===== 網頁 / API ===== */
function doGet(){return HtmlService.createHtmlOutputFromFile('app').setTitle('2026 優異旅團獎勵計劃').addMetaTag('viewport','width=device-width,initial-scale=1').setXFrameOptions(HtmlService.XFrameOptionsMode.ALLOWALL);}
function doPost(e){
  const out=obj=>ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
  try{const body=JSON.parse(e.postData.contents);const fn=body.action,args=body.args||[];
    const fns={getInit:getInit,getGroups:getGroups,submitForm:submitForm,login:login,listForDistrict:listForDistrict,reviewApprove:reviewApprove,dcConfirm:dcConfirm,listForRegion:listForRegion,setPassMark:setPassMark,deleteSubmission:deleteSubmission};
    if(!fns[fn])return out({ok:false,error:"未知功能："+fn});
    return out(fns[fn].apply(null,args));
  }catch(err){return out({ok:false,error:String(err.message||err)});}
}
function getInit(){return{ok:true,year:YEAR,evalYear:EVAL_YEAR,districts:DISTRICTS_LIST.slice()};}
function getGroups(district){const v=_sh(SHEET_GROUPS).getDataRange().getValues();const out=[];for(let i=1;i<v.length;i++)if(v[i][0]==district)out.push({no:v[i][1],sponsor:v[i][2],sections:String(v[i][3]||"").split(/,\s*/).filter(Boolean)});return out;}

/* ===== 旅團提交（免登入，無電郵）===== */
function submitForm(p){
  const sub=_sh(SHEET_SUB);const id="S"+Date.now()+Math.floor(Math.random()*1000);const now=new Date();
  sub.appendRow([id,now,now,YEAR,p.district,p.groupNo,p.branchId,p.branchName,p.type||"",p.leader||"",p.phone||"",p.position||"",p.meetingPlace||"",p.meetingTime||"",JSON.stringify(p.fields||{}),JSON.stringify(p.scores||{}),p.total||0,p.passFail||"",ST_SUBMITTED,"","","","",p.summary||""]);
  return{ok:true,id:id};
}

/* ===== 登入 ===== */
function login(username,password){
  const v=_sh(SHEET_ACC).getDataRange().getValues();
  for(let i=1;i<v.length;i++){if(String(v[i][0])===String(username)&&String(v[i][1])===String(password)){
    const role=v[i][2],district=v[i][3];
    const token="T"+Utilities.base64EncodeWebSafe(username+"|"+Date.now()+"|"+Math.random()).replace(/[^A-Za-z0-9]/g,"").slice(0,28);
    const exp=new Date(Date.now()+SESSION_HOURS*3600*1000);
    _sh(SHEET_SESS).appendRow([token,username,role,district,exp]);
    return{ok:true,token:token,username:username,role:role,district:district};
  }}
  return{ok:false,error:"帳號或密碼不正確"};
}
function getSession(token){
  if(!token)return null;const v=_sh(SHEET_SESS).getDataRange().getValues();const now=new Date();
  for(let i=v.length-1;i>=1;i--)if(v[i][0]==token&&new Date(v[i][4])>now)return{token:token,username:v[i][1],role:v[i][2],district:v[i][3]};
  return null;
}
function isReviewer(s){return s&&s.role===ROLE_REVIEWER;}
function isDC(s){return s&&s.role===ROLE_DC;}
function isRegion(s){return s&&s.role===ROLE_REGION;}

/* ===== 區：審核員／區總監 ===== */
function listForDistrict(token){
  const s=getSession(token);if(!s)return{ok:false,error:"登入已失效，請重新登入"};
  if(!isReviewer(s)&&!isDC(s))return{ok:false,error:"只限區帳號"};
  const v=_sh(SHEET_SUB).getDataRange().getValues();const out=[];
  for(let i=1;i<v.length;i++){const m=rowMap(v[i]);if(m.district===s.district)out.push(parseSub(m));}
  return{ok:true,role:s.role,district:s.district,username:s.username,submissions:out,passMark:getPassMark()};
}
function reviewApprove(token,id){
  const s=getSession(token);if(!s)return{ok:false,error:"登入已失效"};
  if(!isReviewer(s)&&!isDC(s))return{ok:false,error:"只限區帳號"};
  const rec=findSub(id,s.district);if(!rec)return{ok:false,error:"找不到紀錄"};
  if(rec.map.status!==ST_SUBMITTED)return{ok:false,error:"只可審核「已遞交」狀態"};
  const sub=_sh(SHEET_SUB);setSub(sub,rec.row,"status",ST_REVIEWED);setSub(sub,rec.row,"reviewedAt",new Date());setSub(sub,rec.row,"reviewedBy",s.username);setSub(sub,rec.row,"updatedAt",new Date());
  return{ok:true};
}
function dcConfirm(token,id){
  const s=getSession(token);if(!s)return{ok:false,error:"登入已失效"};
  if(!isDC(s))return{ok:false,error:"只限區總監"};
  const rec=findSub(id,s.district);if(!rec)return{ok:false,error:"找不到紀錄"};
  if(rec.map.status===ST_CONFIRMED)return{ok:false,error:"已確認送交地域"};
  const sub=_sh(SHEET_SUB);const now=new Date();
  if(rec.map.status===ST_SUBMITTED){setSub(sub,rec.row,"reviewedAt",now);setSub(sub,rec.row,"reviewedBy",s.username+"（區總監直接審批）");}
  setSub(sub,rec.row,"status",ST_CONFIRMED);setSub(sub,rec.row,"confirmedAt",now);setSub(sub,rec.row,"confirmedBy",s.username);setSub(sub,rec.row,"updatedAt",now);
  return{ok:true};
}
function deleteSubmission(token,id){
  const s=getSession(token);if(!s)return{ok:false,error:"登入已失效"};
  const rec=findSub(id,isRegion(s)?null:s.district);if(!rec)return{ok:false,error:"找不到紀錄"};
  if(!isRegion(s)&&!isDC(s))return{ok:false,error:"無權刪除"};
  _sh(SHEET_SUB).deleteRow(rec.row);return{ok:true};
}

/* ===== 地域 ===== */
function listForRegion(token){
  const s=getSession(token);if(!isRegion(s))return{ok:false,error:"只限地域帳號"};
  const v=_sh(SHEET_SUB).getDataRange().getValues();const all=[];const byDist={};
  DISTRICTS_LIST.forEach(d=>byDist[d]={total:0,submitted:0,reviewed:0,confirmed:0,pass:0});
  const pm=getPassMark();
  for(let i=1;i<v.length;i++){const m=parseSub(rowMap(v[i]));all.push(m);
    const b=byDist[m.district]||(byDist[m.district]={total:0,submitted:0,reviewed:0,confirmed:0,pass:0});
    b.total++;if(m.status===ST_SUBMITTED)b.submitted++;if(m.status===ST_REVIEWED)b.reviewed++;if(m.status===ST_CONFIRMED)b.confirmed++;if(Number(m.total)>=pm)b.pass++;
  }
  const overview=DISTRICTS_LIST.map(d=>({district:d,stats:byDist[d]}));
  return{ok:true,submissions:all,passMark:pm,overview:overview};
}
function setPassMark(token,value){
  const s=getSession(token);if(!isRegion(s))return{ok:false,error:"只限地域帳號"};
  const p=Number(value);if(isNaN(p))return{ok:false,error:"請輸入數字"};
  setCfg("passMark",p);return{ok:true,passMark:p};
}

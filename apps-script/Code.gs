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
   2026 優異旅團獎勵計劃 — GAS 後端 v5
   - 隱藏超管（硬編碼，不寫入任何清單／記錄／MD），權限最高
   - 預設帳號：地域 HKIR；各區 reviewer=區碼(CHW..HKS)、dc=區碼+DC；密碼 1234
   - 全前端帳號管理（上級可改／刪下屬；自行改密）
   - 各支部獨立合格線；旅團睇唔到，區／地域睇到
   - 無電郵發送（電郵僅作記錄）
   ===================================================================== */
const SHEET_ACC="Accounts", SHEET_GROUPS="Groups", SHEET_SUB="Submissions", SHEET_SESS="Sessions", SHEET_CFG="Config";
const YEAR=2026, EVAL_YEAR=YEAR-1;
const SESSION_HOURS=24;
const DEFAULT_PW="1234";
const SUB_COLS=["id","createdAt","submittedAt","year","district","groupNo","branchId","branchName","type","leader","phone","position","meetingPlace","meetingTime","fieldsJson","scoresJson","total","minStd","status","reviewedAt","reviewedBy","confirmedAt","confirmedBy","summary"];
const ROLES={SUPER:"superadmin",REGION:"region",DC:"dc",REVIEWER:"reviewer"};
const ST_SUBMITTED="已遞交",ST_REVIEWED="已審核",ST_CONFIRMED="已確認";
const DIST_CODES={CHW:"柴灣區",SKW:"筲箕灣區",HKN:"港島北區",WCH:"灣仔區",VIC:"維多利亞城區",HKW:"港島西區",HKS:"港島南區"};
const BRANCH_KEYS=["grasshopper","cub","scout","venture","rover"];

/* 隱藏超管（不顯示於任何地方） */
const _S={u:"超管",p:"0728"};

const _ss=()=>SpreadsheetApp.getActiveSpreadsheet();
function _sh(n){const s=_ss().getSheetByName(n);if(!s)throw new Error("找不到工作表："+n+"。請先執行 setup()。");return s;}

/* ===== 初始化 ===== */
function setup(){
  const ss=_ss();
  const cfg=ss.getSheetByName(SHEET_CFG)||ss.insertSheet(SHEET_CFG);
  cfg.clear();cfg.getRange(1,1,1,2).setValues([["key","value"]]);
  setCfg("year",YEAR);BRANCH_KEYS.forEach(b=>setCfg("passMark_"+b,80));
  const acc=ss.getSheetByName(SHEET_ACC)||ss.insertSheet(SHEET_ACC);
  acc.clear();acc.getRange(1,1,1,5).setValues([["username","password","role","district","email"]]);
  acc.appendRow(["HKIR",DEFAULT_PW,ROLES.REGION,"",""]);
  const note=["=== 預設帳號（密碼預設 1234）===","地域：HKIR"];
  Object.keys(DIST_CODES).forEach(code=>{const d=DIST_CODES[code];acc.appendRow([code,DEFAULT_PW,ROLES.REVIEWER,d,""]);acc.appendRow([code+"DC",DEFAULT_PW,ROLES.DC,d,""]);note.push(d+"：區帳戶 "+code+"　區總監 "+code+"DC");});
  const gs=ss.getSheetByName(SHEET_GROUPS)||ss.insertSheet(SHEET_GROUPS);
  gs.clear();gs.getRange(1,1,1,4).setValues([["district","no","sponsor","sections"]]);
  GROUPS_DATA.forEach(g=>gs.appendRow([g.d,g.no,g.sponsor,g.sections.join(", ")]));
  const sub=ss.getSheetByName(SHEET_SUB)||ss.insertSheet(SHEET_SUB);
  sub.clear();sub.getRange(1,1,1,SUB_COLS.length).setValues([SUB_COLS.slice()]);
  const sess=ss.getSheetByName(SHEET_SESS)||ss.insertSheet(SHEET_SESS);
  sess.clear();sess.getRange(1,1,1,5).setValues([["token","username","role","district","expiresAt"]]);
  const msg=note.join("\n")+"\n\n（合格線預設各支部 80 分；地域登入後可改。）";
  Logger.log(msg);return msg;
}

/* ===== Config / 合格線 ===== */
function getCfg(k){const v=_sh(SHEET_CFG).getDataRange().getValues();for(let i=1;i<v.length;i++)if(v[i][0]==k)return v[i][1];return"";}
function setCfg(k,val){const c=_sh(SHEET_CFG);const v=c.getDataRange().getValues();for(let i=1;i<v.length;i++)if(v[i][0]==k){c.getRange(i+1,2).setValue(val);return;}c.appendRow([k,val]);}
function getPassMarks(){const o={};BRANCH_KEYS.forEach(b=>{const p=Number(getCfg("passMark_"+b));o[b]=isNaN(p)?80:p;});return o;}
function getPassMark(branchId){const p=Number(getCfg("passMark_"+branchId));return isNaN(p)?80:p;}

/* ===== Sub helpers ===== */
function getCol(n){const i=SUB_COLS.indexOf(n);if(i<0)throw new Error("bad column "+n);return i+1;}
function setSub(sh,row,n,v){sh.getRange(row,getCol(n)).setValue(v);}
function rowMap(row){const o={};for(let c=0;c<SUB_COLS.length;c++)o[SUB_COLS[c]]=row[c];return o;}
function findSub(id,district){const v=_sh(SHEET_SUB).getDataRange().getValues();for(let i=1;i<v.length;i++)if(v[i][0]==id&&(v[i][4]==district||!district))return{row:i+1,map:rowMap(v[i])};return null;}
function parseSub(m){m.fields=m.fieldsJson?JSON.parse(m.fieldsJson):{};m.scores=m.scoresJson?JSON.parse(m.scoresJson):{};return m;}

/* ===== Account helpers ===== */
function getAccount(username){const v=_sh(SHEET_ACC).getDataRange().getValues();for(let i=1;i<v.length;i++)if(String(v[i][0])===String(username))return{row:i+1,username:v[i][0],password:v[i][1],role:v[i][2],district:v[i][3],email:v[i][4]};return null;}
function allAccounts(){return _sh(SHEET_ACC).getDataRange().getValues().slice(1).filter(r=>r[0]).map(r=>({username:r[0],password:r[1],role:r[2],district:r[3],email:r[4]}));}

/* ===== 網頁 / API ===== */
function doGet(){return HtmlService.createHtmlOutputFromFile('app').setTitle('2026 優異旅團獎勵計劃').addMetaTag('viewport','width=device-width,initial-scale=1').setXFrameOptions(HtmlService.XFrameOptionsMode.ALLOWALL);}
function doPost(e){
  const out=o=>ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
  try{const b=JSON.parse(e.postData.contents);const fn=b.action,args=b.args||[];
    const F={getInit,getGroups,submitForm,login,listForDistrict,reviewApprove,dcConfirm,listForRegion,setPassMark,getAccountsRaw,addAccount,updateAccount,deleteAccount,deleteSubmission};
    if(!F[fn])return out({ok:false,error:"未知功能："+fn});
    return out(F[fn].apply(null,args));
  }catch(err){return out({ok:false,error:String(err.message||err)});}
}
function getInit(){return{ok:true,year:YEAR,evalYear:EVAL_YEAR,districts:Object.keys(DIST_CODES).map(k=>DIST_CODES[k]),distCodes:DIST_CODES};}
function getGroups(district){const v=_sh(SHEET_GROUPS).getDataRange().getValues();const out=[];for(let i=1;i<v.length;i++)if(v[i][0]==district)out.push({no:v[i][1],sponsor:v[i][2],sections:String(v[i][3]||"").split(/,\s*/).filter(Boolean)});return out;}

/* ===== 旅團提交 ===== */
function submitForm(p){
  const sub=_sh(SHEET_SUB);const id="S"+Date.now()+Math.floor(Math.random()*1000);const now=new Date();
  sub.appendRow([id,now,now,YEAR,p.district,p.groupNo,p.branchId,p.branchName,p.type||"",p.leader||"",p.phone||"",p.position||"",p.meetingPlace||"",p.meetingTime||"",JSON.stringify(p.fields||{}),JSON.stringify(p.scores||{}),p.total||0,p.passFail||"",ST_SUBMITTED,"","","","",p.summary||""]);
  return{ok:true,id:id};
}

/* ===== 登入 ===== */
function login(username,password){
  if(String(username)===_S.u&&String(password)===_S.p){const token=_mkTok();_sh(SHEET_SESS).appendRow([token,_S.u,ROLES.SUPER,"",new Date(Date.now()+SESSION_HOURS*3600*1000)]);return{ok:true,token,username:_S.u,role:ROLES.SUPER,district:""};}
  const a=getAccount(username);if(!a)return{ok:false,error:"帳號或密碼不正確"};
  if(String(a.password)!==String(password))return{ok:false,error:"帳號或密碼不正確"};
  const token=_mkTok();_sh(SHEET_SESS).appendRow([token,a.username,a.role,a.district,new Date(Date.now()+SESSION_HOURS*3600*1000)]);return{ok:true,token,username:a.username,role:a.role,district:a.district,email:a.email};
}
function _mkTok(){return "T"+Utilities.base64EncodeWebSafe(Date.now()+"|"+Math.random()).replace(/[^A-Za-z0-9]/g,"").slice(0,28);}
function getSession(token){if(!token)return null;const v=_sh(SHEET_SESS).getDataRange().getValues();const now=new Date();for(let i=v.length-1;i>=1;i--)if(v[i][0]==token&&new Date(v[i][4])>now)return{token,username:v[i][1],role:v[i][2],district:v[i][3]};return null;}
const isSuper=s=>s&&s.role===ROLES.SUPER;
const isRegion=s=>s&&s.role===ROLES.REGION;
const isDC=s=>s&&s.role===ROLES.DC;
const isReviewer=s=>s&&s.role===ROLES.REVIEWER;

/* ===== 區：審核員／區總監 ===== */
function listForDistrict(token){
  const s=getSession(token);if(!s)return{ok:false,error:"登入已失效"};
  if(isSuper(s)||isRegion(s))return{ok:false,error:"請用地域總覽"};
  if(!isDC(s)&&!isReviewer(s))return{ok:false,error:"只限區帳號"};
  const v=_sh(SHEET_SUB).getDataRange().getValues();const out=[];
  for(let i=1;i<v.length;i++){const m=rowMap(v[i]);if(m.district===s.district)out.push(parseSub(m));}
  return{ok:true,role:s.role,district:s.district,username:s.username,submissions:out,passMarks:getPassMarks()};
}
function reviewApprove(token,id){
  const s=getSession(token);if(!s)return{ok:false,error:"登入已失效"};
  if(!isDC(s)&&!isReviewer(s)&&!isRegion(s)&&!isSuper(s))return{ok:false,error:"只限區／地域／超管"};
  const rec=findSub(id,isDC(s)||isReviewer(s)?s.district:null);if(!rec)return{ok:false,error:"找不到紀錄"};
  if(rec.map.status!==ST_SUBMITTED)return{ok:false,error:"只可審核「已遞交」"};
  const sub=_sh(SHEET_SUB);setSub(sub,rec.row,"status",ST_REVIEWED);setSub(sub,rec.row,"reviewedAt",new Date());setSub(sub,rec.row,"reviewedBy",s.username);
  return{ok:true};
}
function dcConfirm(token,id){
  const s=getSession(token);if(!s)return{ok:false,error:"登入已失效"};
  if(!isDC(s)&&!isRegion(s)&&!isSuper(s))return{ok:false,error:"只限區總監／地域／超管"};
  const rec=findSub(id,isDC(s)?s.district:null);if(!rec)return{ok:false,error:"找不到紀錄"};
  if(rec.map.status===ST_CONFIRMED)return{ok:false,error:"已確認"};
  const sub=_sh(SHEET_SUB);const now=new Date();
  if(rec.map.status===ST_SUBMITTED){setSub(sub,rec.row,"reviewedAt",now);setSub(sub,rec.row,"reviewedBy",s.username+"（直接審批）");}
  setSub(sub,rec.row,"status",ST_CONFIRMED);setSub(sub,rec.row,"confirmedAt",now);setSub(sub,rec.row,"confirmedBy",s.username);
  return{ok:true};
}
function deleteSubmission(token,id){
  const s=getSession(token);if(!s)return{ok:false,error:"登入已失效"};
  if(!isDC(s)&&!isRegion(s)&&!isSuper(s))return{ok:false,error:"無權刪除"};
  const rec=findSub(id,(isDC(s)?s.district:null));if(!rec)return{ok:false,error:"找不到紀錄"};
  _sh(SHEET_SUB).deleteRow(rec.row);return{ok:true};
}

/* ===== 地域 ===== */
function listForRegion(token){
  const s=getSession(token);if(!isRegion(s)&&!isSuper(s))return{ok:false,error:"只限地域／超管"};
  const v=_sh(SHEET_SUB).getDataRange().getValues();const all=[];const byDist={};
  Object.values(DIST_CODES).forEach(d=>byDist[d]={total:0,submitted:0,reviewed:0,confirmed:0});
  const pm=getPassMarks();
  for(let i=1;i<v.length;i++){const m=parseSub(rowMap(v[i]));all.push(m);const b=byDist[m.district]||(byDist[m.district]={total:0,submitted:0,reviewed:0,confirmed:0});b.total++;if(m.status===ST_SUBMITTED)b.submitted++;if(m.status===ST_REVIEWED)b.reviewed++;if(m.status===ST_CONFIRMED)b.confirmed++;}
  const overview=Object.values(DIST_CODES).map(d=>({district:d,stats:byDist[d]}));
  return{ok:true,role:s.role,submissions:all,passMarks:pm,overview:overview};
}
function setPassMark(token,branchId,value){
  const s=getSession(token);if(!isRegion(s)&&!isSuper(s))return{ok:false,error:"只限地域／超管"};
  if(BRANCH_KEYS.indexOf(branchId)<0)return{ok:false,error:"支部錯誤"};
  const p=Number(value);if(isNaN(p))return{ok:false,error:"請輸入數字"};
  setCfg("passMark_"+branchId,p);return{ok:true,passMarks:getPassMarks()};
}

/* ===== 帳號管理（全前端；上級可改／刪下屬）===== */
function getAccountsRaw(token){
  const s=getSession(token);if(!s)return{ok:false,error:"登入已失效"};
  const list=allAccounts().map(a=>({username:a.username,role:a.role,district:a.district,email:a.email}));
  return{ok:true,me:{username:s.username,role:s.role,district:s.district},accounts:list};
}
/* 權限：誰可管理 target 帳號 */
function _canManage(s,target){
  if(!target)return false;
  if(isSuper(s))return true;
  if(isRegion(s))return target.role!==ROLES.SUPER;
  if(isDC(s))return target.district===s.district&&(target.role===ROLES.REVIEWER||target.role===ROLES.DC);
  return false;
}
function addAccount(token,username,password,role,district,email){
  const s=getSession(token);if(!s)return{ok:false,error:"登入已失效"};
  username=String(username||"").trim();if(!username)return{ok:false,error:"請填用戶名"};
  if(getAccount(username))return{ok:false,error:"用戶名已存在"};
  // 權限：region 可加 region／區帳號；dc 只可加同區 reviewer；super 任何
  let ok=false;
  if(isSuper(s))ok=true;
  else if(isRegion(s))ok=(role===ROLES.REGION||role===ROLES.DC||role===ROLES.REVIEWER);
  else if(isDC(s))ok=(role===ROLES.REVIEWER&&district===s.district);
  if(!ok)return{ok:false,error:"無權新增此帳號"};
  if([ROLES.REGION,ROLES.DC,ROLES.REVIEWER].indexOf(role)<0)return{ok:false,error:"角色錯誤"};
  _sh(SHEET_ACC).appendRow([username,password||DEFAULT_PW,role,district||"",email||""]);
  return{ok:true};
}
function updateAccount(token,username,fields){
  const s=getSession(token);if(!s)return{ok:false,error:"登入已失效"};
  const a=getAccount(username);if(!a)return{ok:false,error:"找不到帳號"};
  // 自己可改自己；上級可改下屬
  const isSelf=(s.username===username);
  if(!isSelf&&!_canManage(s,a))return{ok:false,error:"無權修改此帳號"};
  const sh=_sh(SHEET_ACC);
  if(fields.password!==undefined)sh.getRange(a.row,2).setValue(String(fields.password));
  if(fields.email!==undefined)sh.getRange(a.row,5).setValue(String(fields.email));
  if(isRegion(s)||isSuper(s)){if(fields.role!==undefined)sh.getRange(a.row,3).setValue(fields.role);if(fields.district!==undefined)sh.getRange(a.row,4).setValue(fields.district);}
  return{ok:true};
}
function deleteAccount(token,username){
  const s=getSession(token);if(!s)return{ok:false,error:"登入已失效"};
  if(s.username===username)return{ok:false,error:"不可刪除自己"};
  const a=getAccount(username);if(!a)return{ok:false,error:"找不到帳號"};
  if(a.role===ROLES.SUPER)return{ok:false,error:"不可刪除"};
  if(!_canManage(s,a))return{ok:false,error:"無權刪除此帳號"};
  _sh(SHEET_ACC).deleteRow(a.row);return{ok:true};
}

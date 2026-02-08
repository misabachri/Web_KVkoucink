(zadání pro AI agenta k tvorbě webu)

**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
Strukturovaný komentovaný HTML5 kód s validní sémantikou
Responzivní design (mobile-first přístup)
CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
Základní JavaScript pro interaktivitu (na jemné oživení stránek)
Dbej na bezpečnost webu (CSP hlavička a nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
Zajisti rychlé načítání a optimalizovaný výkon
Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu


**Základní SEO**
Strukturuj nadpisy H1-H6
Přidej meta title a description na každé stránce
Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
Urči kanonickou url
Obrázkům dej alt popisky
Propoj stránky vnitřními odkazy
Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)


**Optimalizace obrázků**
Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.
**Vizuální hierarchie a čitelnost**
Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
Čitelné fonty s českou diakritikou
Správné řádkování (line-height 1.5-1.8 pro odstavce)
Nikdy nezarovnávej text do bloku
Optimální šířka řádku pro text (max 70% obrazovky)

**Layout**
Šířku celého webu dej na 90% obrazovky
Jasné oddělení sekcí a obsahových celků
Vyvážené použití bílého prostoru (white space)
Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
Dej si záležet na patičce webu
Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
Stručné a srozumitelné texty
Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
Vizuální prvky podporující obsah (ikony, obrázky, grafika)
Logické uspořádání informací (nejdůležitější nahoře)
Chybová stránka (místo „404“ dej ikonu <i class="bi bi-emoji-frown"></i> a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html)
Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
Jednotný styl tlačítek, karet a komponent
Stejný padding/margin napříč podobnými elementy
Stejné zaoblení prvků
Konzistentní ikonografie
Stíny karet pouze velmi jemné
Jednotný projev značky (brand voice)
Konzistentní použití barev napříč celým webem
Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
Omezený počet barev (2-3 hlavní + neutrální)
Primární barva pro CTA (call-to-action) tlačítka
Neutrální jemné barvy pro pozadí 
Pro text #333333
Brand barvy (HEX): 
   - primární: [DOPLŇ]
   - sekundární: [DOPLŇ]
   - tlačítka: [DOPLŇ]
   - pozadí: [DOPLŇ]
   - text: [#333333]

**Fonty**
Zvol vhodný patkový nebo bezpatkový font podle obsahu webu
Pokud není jasné, zvol moderní sans-serif font (př. Outfit)

**Struktura**
Jednostránkový web
Položky menu ala kotvy - Pro koho je koučink vhodný, Jak to probíhá, Ceník, O mně, Kontakt


**Design**
Design hero sekce (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu jpg 

**Moderní design**
Layout: Bento grid nebo asymetrické rozvržení s velkým bílým prostorem                               
Typografie: Velké nadpisy na hero sekci
Barvy: Jemné gradienty, plynulé přechody
Prvky: Zaoblené rohy (border-radius 16-24px)
Animace: velice decentní interakce na hover, jemné scroll animace 
**obrázky**
Na webu použij fotky (př. přílohy), které najdeš ve složce 
Obrazky - pro hero sekci foto-hero.jpg
Obrazky - pro sekci o mně foto-omne.jpg
**texty**
Vyjdi z dodaných textů, ale když budeš potřebovat, můžeš je mírně změnit nebo doplnit, zachovej vždy smysl a podstatu obsahu stránky. 
Menu - kotvy
Pro koho je koučink
Jak to probíhá
Ceník
O mně
Kontakt
*Hero sekce*
eye brow - Koučink pro ženy 40+
H1 - Cesta je cíl
podtitulek - Když stojíte na životní křižovatce a neví jak a kudy dál.
doplněk podtitulku - Koučink pro ženy, které řeší změnu ve vztahu, práci nebo samy v sobě. Můžeme se setkat osobně v Karlových Varech nebo online.
CTA - Domluvme si úvodní schůzku, 15 min zdarma setkání
*Vcítění se do klientky* - z menu pro koho je koučink
Milé ženy, možná stojíte na těžké křižovatce a nevíte, kudy dál. Možná se usmíváte a zvládáte, ale uvnitř víte, že takhle už to dál nechcete. Pokud chcete místo dalších rad konečně slyšet sama sebe, jste tu správně. 
*Co řešíte*
Křižovatka, která není navenek vidět
Něco se láme a vy nevíte, co s tím.
 -Po rozchodu nevím, jak dál
 - Děti odrostly a já najednou nevím, kdo jsem bez nich
 - V práci jsem fungovala roky, ale teď cítím prázdno
*A jak to vám to pomůžu vyřešit já?*
Budu vás provázet tak, abyste slyšela, co opravdu chcete. A abyste udělala další krok s větším klidem.
Nebudu vám říkat, co máte dělat. Nebudu vás hodnotit, ani kritizovat.
Pomůžu vám udělat rozhodnutí, za kterým si budete stát.
Na konci sezení byste měla vědět: Co je pro mě teď nejdůležitější? Co je můj další krok?
CTA - Pokud si nejste jistá, stačí zavolat a domluvit si schůzku. Společně zjistíme, jestli vám to dává smysl.
Tlacitko:
Domluvme si úvodní hovor
*jak to celé probíhá*
eye brow - Jak to probíhá
H2 - Krok za krokem, abyste věděla, co čeho jdete
Krok 1 - Úvodní hovor zdarma (15 minut)
Řeknete mi, co se děje a co řešíte, já vám pomůžu si ujasnit, jestli je koučink prvě pro vás
Krok 2 - První sezení (60 min)
Zmapujeme vaši situaci a nastavíme směr. Už po prvním sezení často přichází úleva, protože věci začnou dávat větší smysl.
Odejdete s jedním konkrétním krokem, který zvládnete udělat hned.
Krok 3 - Navazující sezení
Setkáváme se pravidelně a řešíme vaše téma.
Krok 4 - Ukončení nebo pokračování
Spolupráce trvá tak dlouho, jak potřebujete. Do momentu, kdy cítíte, že stojíte pevněji a víte, co dál.
CTA
Tlačítko - domluvit úvodní hovor
*o mně*
eye brow - Michaela Kožíšková
H2 - Sama jsem stála na životní křižovatce
Nevěděla jsem kudy dál. Tenkrát mi obrovsky pomohla jedna koučka. Vím, jaké to je hledat pevnou pudu pod nohama. Koučink dělám právě proto, abych mohla byt oporou ženám, které procházejí podobnou změnou.
Věřím, že i nejistota může byt začátkem něčeho dobrého. A že cesta, kterou si zvolíte, má hodnotu už tím, že je vaše. Život máme ale jen jeden. Měly bychom být šťastné a ne jen přežívat. Změna je život. Jedny dveře se zavřou a další se zase otevřou….Strach má velké oči. 
Tlacitko:
Napsat mi
*ceník*
eye brow nadpis - Ceník
H2 - ?
úvodní hovor – zdarma
15 minut · online / telefon

Jedno sezení – 990 Kč
60 minut

Balíček 5 sezení – 4 500 Kc
ideální pro větší změnu

Balíček 10 sezení – 8 800 Kč
popisek

Pokud si nejste jistá, začneme úvodním telefonickým hovorem. Společně zjistíme, jestli je to pro vás teď ta správná cesta.

*kontakt*
eye brow - Kontakt
H2 - Ozvěte se mi
Zavolejte nebo napište, co právě ve svém životě řešíte a domluvíme si úvodní schůzku. Obvykle odpovídám do 24 hodin. Volejte prosím po-pá 16-20 h.
Kontaktni udaje 
Telefon: +420 000 000 000
E-mail: ahoj@cestajecil.cz
Misto: Karlovy Vary / online

Tlacitko:
Chci uvodni hovor
Kontaktní formulář

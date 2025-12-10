# Plán pro nový Quartz 4 blog/portfolio

## Cíle
- Minimalistická index stránka inspirovaná oliverfalvai.com: krátký úvod, odkazy na hlavní sekce a blok „Latest notes“.
- Struktura jako digitální zahrada: poznámky (blog), stránka životopis, startupy, kontakty, štítky pro témata.
- Je možné upravit layout a motivy podle potřeby; cílem je minimalistický a čistý vzhled.
- Udržet osobní informace stručné (jen zmínka, že jsi skaut a spoluzakladatel LibertyLoft; žádné detaily jednotky, role nebo GitHub projekty).

## Navržená stromová struktura `content/`
- `index.md` – minimalistický úvod + rychlé odkazy na sekce + výpis posledních 3–5 poznámek (přes `folderContent`).
- `pages/`
  - `about.md` – krátký profil, odkaz na LinkedIn, stručné bio, zmínky: skaut, spoluzaložil LibertyLoft, aktuální fokus na digitální produkty a vzdělávání.
  - `contact.md` – odkazy: e-mail, LinkedIn, YouTube. CTA na domluvu spolupráce.
  - `uses.md` – seznam nástrojů / stacku inspirovaný videem; rozdělit na „Software“, „Hardware“, „Workflow“.
- `notes/`
  - Články a poznámky s datem, tagy. Příklady témat: design digitálních produktů, vzdělávací obsah, zkušenosti ze scoutingu (bez detailů jednotek), učení z budování startupu.
- `startup/`
  - `thinkhome.md` – jediný detailní startupový zápis (misie, stav, klíčové učení).
- `resume/`
  - `cv.md` – textová verze životopisu (stručná osa: vzdělání, zkušenosti, dovednosti, ocenění). Bez konkrétních projektů z GitHubu.
- `garden/`
  - Kratší myšlenky/poznámky (seed/plant/evergreen systém podle Quartz tags `status/seed` atd.).
- `tags/` – auto generované Quartz stránkami; zajistit konzistentní tagy (např. `design`, `education`, `startup`, `scouting`, `notes`, `videos`).

## Konfigurace Quartz (obsahová)
- V `quartz.config.ts`:
  - Nastavit `defaultSlug: "friendly"` pro čisté URL.
  - `pageTitle` a `pageDescription` minimalisticky (např. jméno + „designing learning products“).
  - `search` zapnout pro snadné procházení poznámek.
  - `folderContent` widget na homepage (poslední poznámky z `notes/` a `garden/`).
  - Feed (RSS/Atom) zapnout pro nové články.

## Tone & obsahové zásady
- Styl: stručný, osobní, srozumitelný, bez „buzzwords“.
- Nepoužívat detailní osobní data (oddíl, délka členství, GitHub projekty).
- Zmínky: skaut (obecně), spoluzakladatel LibertyLoft, hlavní startup: ThinkHome.org.
- Využívat tagy u každého zápisu; datum a krátké perexy.
- U embedů z YouTube používat Quartz komponenty (iframe nebo Markdown link) – hlavní video jako „Pinned“ poznámka.

## Homepage rozvržení (obsah)
1. Hero: jméno, 1–2 věty o zaměření (produktový design, vzdělávání, obsah z videa), link na LinkedIn a Contact.
2. Sekce „Latest notes“: automatický výpis posledních poznámek z `notes/` + tlačítko „View all notes“.
3. Sekce „Startup“: krátké highlight na ThinkHome.org s odkazem na detail.
4. Sekce „Garden“: 3–4 nejnovější seed/plant poznámky.
5. Sekce „Connect“: odkazy na LinkedIn, YouTube, e-mail.

## Obsahový backlog
- Přepsat/opsat hlavní body z videa do jedné „Pinned“ poznámky v `notes/` s tagy `videos`, `talks`.
- Přidat 3–5 krátkých blogpostů (100–300 slov) k tématům z videa (např. co sis odnesl z tvorby obsahu, práce na ThinkHome, skauting → leadership lessons).
- Připravit stručný CV v `resume/cv.md`.
- Vytvořit `uses.md` s nástroji zmíněnými ve videu.

## Postup migrace
1. Záloha současného obsahu `content/`.
2. Vytvořit nové složky a přesunout existující relevantní poznámky.
3. Aktualizovat metadata v souborech: `title`, `tags`, `date`, `status` (seed/plant/evergreen).
4. Upravit `quartz.config.ts` pro výpis Latest notes a RSS.
5. Projít sitemapu a odkazy, přidat odkazy mezi poznámkami (backlinks jako interlinking).
6. Otestovat lokálně `npm run dev`, zkontrolovat navigaci a index page minimalismus.

## Doručený výsledek
- Jasně definované sekce pro osobní web, blog a digitální zahradu s minimem osobních detailů.
- Možnost ladění layoutu a motivů tak, aby podpořily minimalistický zážitek podobný oliverfalvai.com.

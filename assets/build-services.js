function serviceNav(activeSlug) {
  var items = [
    { slug: "analiza-de-business", num: "01", label: "Analiză de business" },
    { slug: "strategie-de-dezvoltare", num: "02", label: "Strategie de dezvoltare" },
    { slug: "website-uri-sisteme", num: "03", label: "Website-uri & sisteme" },
    { slug: "automatizari-tools", num: "04", label: "Automatizări & tools" },
    { slug: "campanii-ads", num: "05", label: "Campanii Ads" },
    { slug: "social-media-ai", num: "06", label: "Social media AI" },
    { slug: "email-marketing-ai", num: "07", label: "Email marketing AI" }
  ];
  var links = items.map(function(item) {
    var cls = item.slug === activeSlug ? ' class="active"' : "";
    return '<a href="/servicii/' + item.slug + '"' + cls + '><small>' + item.num + '</small>' + item.label + "</a>";
  }).join("");
  return (
    '<header class="nav">' +
      '<a href="/" class="logo">Ai<span>Pixxel</span></a>' +
      '<nav class="links">' +
        '<a href="/">Acasă</a>' +
        '<div class="nav-drop" id="navDrop">' +
          '<button type="button" class="active">Servicii</button>' +
          '<div class="drop-menu">' + links + "</div>" +
        "</div>" +
        '<a href="/despre">Despre</a>' +
        '<a href="/contact" class="nav-contact">Contact</a>' +
      "</nav>" +
    "</header>"
  );
}

function serviceFooter() {
  return (
    '<footer class="site-footer">' +
      '<div class="footer-brand">Ai<span>Pixxel</span></div>' +
      '<a href="mailto:contact@aipixxel.online">contact@aipixxel.online</a>' +
    "</footer>"
  );
}

function servicePage(opts) {
  var deliverables = opts.deliverables.map(function(d) {
    return "<li>" + d + "</li>";
  }).join("");
  var note = opts.note
    ? '<p class="service-note">' + opts.note + "</p>"
    : "";
  return (
    "<!DOCTYPE html>" +
    '<html lang="ro">' +
    "<head>" +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    "<title>" + opts.title + " — AiPixxel</title>" +
    '<meta name="description" content="' + opts.description + '">' +
    '<link rel="canonical" href="https://aipixxel.online/servicii/' + opts.slug + '">' +
    '<link rel="preconnect" href="https://fonts.googleapis.com">' +
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
    '<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700&family=Inter:wght@500;600;700;800&display=swap" rel="stylesheet">' +
    '<link rel="stylesheet" href="/assets/site.css">' +
    "</head>" +
    '<body><div class="page">' +
    serviceNav(opts.slug) +
    '<main class="service-main">' +
    '<p class="service-eyebrow">Servicii · ' + opts.eyebrow + "</p>" +
    '<h1 class="service-hook">' + opts.hook + "</h1>" +
    '<section class="service-section"><h2>Ce este</h2><p>' + opts.what + "</p>" + note + "</section>" +
    '<section class="service-section"><h2>Cum ajută concret</h2><p>' + opts.how + "</p></section>" +
    '<section class="service-section"><h2>Ce primești</h2><ul>' + deliverables + "</ul></section>" +
    '<section class="service-cta">' +
    "<p>" + opts.ctaText + "</p>" +
    '<a href="/contact" class="btn-cta">Programează o consultanță</a>' +
    "</section></main>" +
    serviceFooter() +
    "</div>" +
    '<script src="/assets/nav.js"></script></body></html>'
  );
}

// Run with: node assets/build-services.js

var fs = require("fs");
var path = require("path");

var services = [
  {
    slug: "analiza-de-business",
    eyebrow: "Analiză de business",
    title: "Analiză de business",
    description: "Audit complet al afacerii — profil de client, CAC, LTV și plafonul real de creștere, pe datele tale.",
    hook: "Înainte să cheltui un leu pe marketing, trebuie să știi exact pe cine vinzi, de ce cumpără, și cât de departe poate crește afacerea ta.",
    what: "Un audit complet al afacerii — identificăm profilul real al clientului tău (nu cel presupus), ce anume îl determină să cumpere, cât cheltuie și cât de des, și care e plafonul natural de creștere al modelului actual. Nu e un raport generic — e o radiografie făcută pe datele tale reale (vânzări, trafic, comportament clienți).",
    how: "Majoritatea afacerilor iau decizii de marketing și investiție pe intuiție. Analiza asta îți dă cifrele care lipsesc — cine e clientul tău profitabil, cât valorează pe termen lung, unde se scurge bugetul fără rezultat, și dacă modelul actual poate scala sau are nevoie de restructurare înainte să investești mai mult în el.",
    deliverables: [
      "Profil de client bazat pe date, nu pe presupuneri",
      "Calcul CAC, LTV și raportul dintre ele, pe canal",
      "Hartă a punctelor unde afacerea pierde bani fără să știe",
      "Verdict clar: modelul actual scalează sau nu, și de ce"
    ],
    ctaText: "Primul pas spre marketing care chiar funcționează e să știi unde stai acum."
  },
  {
    slug: "strategie-de-dezvoltare",
    eyebrow: "Strategie de dezvoltare sustenabilă",
    title: "Strategie de dezvoltare sustenabilă",
    description: "Plan de creștere pe 6–24 luni cu manual de implementare — achiziție, fidelizare și priorități clare.",
    hook: "O campanie bună aduce vânzări o lună. O strategie bună construiește o afacere care crește constant, ani la rând.",
    what: "Un plan de creștere pe termen mediu și lung, cu un manual de implementare pas cu pas — nu un document teoretic pus într-un sertar, ci un ghid pe care tu sau echipa ta îl poate urma direct. Acoperă atât achiziția de clienți noi, cât și fidelizarea celor existenți, calibrate pe realitatea afacerii tale, nu pe un template generic.",
    how: "Majoritatea afacerilor cresc haotic — o campanie aici, o promoție acolo, fără o direcție unitară. Strategia asta leagă toate deciziile de marketing și vânzări într-un singur sistem coerent, cu priorități clare (ce faci primul, ce aduce cel mai mult, ce eviți), ca să nu mai reinventezi roata la fiecare trimestru.",
    deliverables: [
      "Plan de creștere pe 6–24 luni, cu etape și priorități clare",
      "Manual de implementare — cine face ce, în ce ordine",
      "Strategii separate de achiziție și de fidelizare a clienților",
      "Puncte de control periodice pentru ajustare, nu un plan fix și uitat"
    ],
    ctaText: "Construiește creștere predictibilă, nu doar vânzări ocazionale."
  },
  {
    slug: "website-uri-sisteme",
    eyebrow: "Website-uri & sisteme",
    title: "Website-uri & sisteme",
    description: "Site-uri și platforme optimizate pentru conversie, cu arhitectură scalabilă și integrări.",
    hook: "Site-ul tău e primul angajat care lucrează 24/7 — dacă nu convertește, pierzi clienți în timp ce dormi.",
    what: "Construim și dezvoltăm site-uri, platforme și sisteme cu bază de date în spate — de la site-uri de prezentare la platforme mai complexe (rezervări, comenzi, portaluri de clienți). Nu doar design — arhitectură funcțională, gândită pentru conversie și pentru a se integra cu restul sistemelor afacerii tale (CRM, plăți, automatizări).",
    how: "Un site prost nu doar arată neprofesionist — activ pierde clienți care ajung pe el gata să cumpere. Construim site-uri rapide, clare, optimizate pentru conversie (nu doar \"frumoase\"), cu structura tehnică potrivită să crească odată cu afacerea, nu să fie refăcută de la zero peste un an.",
    deliverables: [
      "Site sau platformă funcțională, optimizată pentru conversie",
      "Structură tehnică scalabilă (bază de date, integrări)",
      "Optimizare pentru viteză și mobil",
      "Mentenanță și suport post-lansare"
    ],
    ctaText: "Transformă site-ul din carte de vizită în instrument de vânzare."
  },
  {
    slug: "automatizari-tools",
    eyebrow: "Automatizări & tools interne",
    title: "Automatizări & tools interne",
    description: "Agenți automatizați, dashboard-uri și aplicații care preiau procesele repetitive din afacerea ta.",
    hook: "Fiecare oră pierdută pe procese repetitive e o oră neinvestită în creșterea afacerii.",
    what: "Construim agenți de suport automatizați, softuri interne, dashboard-uri și aplicații mobile care preiau procesele repetitive din afacerea ta — comunicare cu clienții, raportare, sincronizare de date, follow-up de vânzări — și le fac fără intervenție manuală constantă.",
    how: "Automatizarea nu înseamnă concedieri, înseamnă redirecționarea timpului echipei tale către lucruri care chiar cresc afacerea — vânzări, relații cu clienții cheie, strategie — în loc de completat facturi manual sau răspuns la aceleași 20 de întrebări în fiecare zi.",
    deliverables: [
      "Agenți de suport automatizați (chat, email, WhatsApp)",
      "Dashboard-uri cu cifrele cheie ale afacerii, vizibile în timp real",
      "Automatizări pentru procese administrative repetitive",
      "Aplicații mobile interne, dacă afacerea le are nevoie"
    ],
    ctaText: "Recuperează orele pierdute și reinvestește-le în creștere."
  },
  {
    slug: "campanii-ads",
    eyebrow: "Campanii Ads social media",
    title: "Campanii Ads social media",
    description: "Campanii plătite pe Meta, TikTok și alte platforme — targetate pe profilul real de client.",
    hook: "Bugetul de ads nu e cheltuială — e investiție, dar doar dacă știi exact cui te adresezi și ce le spui.",
    what: "Campanii plătite pe rețelele sociale (Meta, TikTok, alte platforme relevante pentru audiența ta), construite pe profilul real de client identificat în analiza de business — nu targetare la întâmplare, nu mesaje generice.",
    how: "Majoritatea campaniilor eșuează nu din cauza bugetului, ci din cauza targeting-ului greșit sau a mesajului care nu rezonează. Construim campanii pe baza a ceea ce chiar declanșează cumpărarea la clientul tău specific, testăm sistematic, și optimizăm pe CAC real, nu pe vanity metrics (like-uri, impresii).",
    deliverables: [
      "Campanii targetate pe profilul de client validat",
      "Testare structurată de mesaje și creative",
      "Raportare pe CAC, conversii și ROI real, nu doar reach",
      "Optimizare continuă, nu \"setează și uită\""
    ],
    ctaText: "Fă din bugetul de ads o investiție măsurabilă, nu o speranță."
  },
  {
    slug: "social-media-ai",
    eyebrow: "Social media management AI",
    title: "Social media management AI",
    description: "Recomandăm Posty pentru gestionarea social media prin AI — planificare, conținut și postare consistentă.",
    hook: "Prezența constantă pe social media, fără să-ți consume tot timpul.",
    what: "Recomandăm Posty pentru gestionarea social media prin AI — planificare, generare de conținut și postare consistentă. Nu e un serviciu propriu AiPixxel, ci un partener de încredere pe care îl recomandăm clienților care au nevoie de acest tip de suport.",
    how: "Consistența pe social media e unul dintre cele mai subestimate motoare de încredere și retenție, dar și unul dintre cele mai consumatoare de timp dacă e făcută manual. Posty automatizează partea repetitivă, păstrând calitatea.",
    note: "Acest serviciu este oferit prin partenerul nostru Posty, nu direct de AiPixxel. Te conectăm cu echipa lor și ne asigurăm că strategia rămâne aliniată cu planul tău de business.",
    deliverables: [
      "Recomandare directă și conectare cu echipa Posty",
      "Continuitate cu strategia stabilită împreună cu AiPixxel"
    ],
    ctaText: "Menține prezența constantă fără să sacrifice timpul echipei tale."
  },
  {
    slug: "email-marketing-ai",
    eyebrow: "Email marketing AI",
    title: "Email marketing AI",
    description: "Campanii de email personalizate pe comportament real — segmentare, secvențe automate, conversii măsurabile.",
    hook: "Emailul rămâne canalul cu cel mai bun ROI din marketing — dar doar dacă mesajul ajunge personalizat, nu generic.",
    what: "Campanii de email marketing cu analiză și personalizare per client — segmentare bazată pe comportament real (ce a cumpărat, cât, când), nu doar nume și prenume inserate automat într-un template.",
    how: "Emailurile generice, trimise la toată baza de clienți deodată, au rate de conversie din ce în ce mai mici. Personalizarea reală — bazată pe comportamentul fiecărui segment de clienți — crește semnificativ ratele de deschidere, click și, cel mai important, vânzările generate.",
    deliverables: [
      "Segmentare de clienți bazată pe comportament",
      "Secvențe automatizate (onboarding, reactivare, upsell)",
      "Personalizare de conținut per segment",
      "Raportare pe conversii, nu doar rate de deschidere"
    ],
    ctaText: "Transformă emailul din newsletter generic în canal de vânzări."
  }
];

var dir = path.join(__dirname, "..", "servicii");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

services.forEach(function(s) {
  fs.writeFileSync(path.join(dir, s.slug + ".html"), servicePage(s), "utf8");
  console.log("Wrote servicii/" + s.slug + ".html");
});

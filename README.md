# Individuell inlämning 1 – Jonatan Dahl

## Beskrivning
Detta projekt är en förbättrad version av en enkel produktlista-sida.  
Fokus har varit att förbättra tillgänglighet (WCAG), optimera Largest Contentful Paint (LCP) samt implementera testning med axe och PerformanceObserver.

---

## Projektstruktur

### index.html
- Semantisk HTML-struktur (`header`, `main`, `nav`, `footer`)
- Korrekt rubrikhierarki
- Formulär med kopplade `<label>`-element
- Alt-attribut på alla bilder
- Skip link för tangentbordsnavigation
- Preload + `fetchpriority="high"` för hero-bilden

### styles.css
- Förbättrad färgkontrast
- Synlig fokusmarkering (`:focus-visible`)
- Styling för skip link
- Tydlig länkmarkering (axe-krav)

### script.js
- Event listeners för interaktiva element
- axe-testning via CDN (`axe.run()`)
- PerformanceObserver för `largest-contentful-paint`
- LCP-loggning via `?perf=1`

---

## Prestandaoptimeringar
- Komprimering och nerskalning av hero-bild
- `fetchpriority="high"`
- `defer` på script
- `loading="lazy"` på bilder under folden
- Satte `width` och `height` för att minska layout shift

---

## Testning
- axe användes för att identifiera och åtgärda tillgänglighetsproblem
- LCP mättes före och efter optimering
- Testat i både Chrome och Firefox
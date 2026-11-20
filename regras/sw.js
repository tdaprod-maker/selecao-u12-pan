/* Offline: app em cache; dados e API sempre pela rede primeiro */
const CACHE = "u12-regras-v4";
const CORE = ["/regras/", "/regras/pitch.js", "/regras/regras-conteudo.js", "/regras/data.json", "/regras/manifest.webmanifest",
  "/regras/logo-u12-sm.png", "/regras/logo-panam.png", "/regras/icon-180.png",
  "/regras/fonts/bebas-neue-latin-400-normal.woff2", "/regras/fonts/barlow-latin-400-normal.woff2",
  "/regras/fonts/barlow-latin-600-normal.woff2", "/regras/fonts/barlow-latin-700-normal.woff2", "/regras/vendor/jspdf.umd.min.js", "/regras/vendor/jspdf.plugin.autotable.min.js"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin || !url.pathname.startsWith("/regras")) return;
  // Internet ruim: espera a rede no máximo 3,5 s; depois usa a cópia salva (e atualiza em segundo plano)
  const rede = fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; });
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(salvo => {
      if (!salvo) return rede.catch(() => caches.match("/regras/"));
      const limite = new Promise(r => setTimeout(() => r(salvo), 3500));
      return Promise.race([rede.catch(() => salvo), limite]);
    })
  );
});

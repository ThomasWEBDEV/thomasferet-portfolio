export function GET() {
  const base = "https://thomasferet.dev"\;
  const urls = [
    "/",
    "/#projets",
    "/#apropos",
    "/#contact",
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u)=>`  <url><loc>${base}${u.replace('#','')}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

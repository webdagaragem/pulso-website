import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const site = "https://www.pulsotecnologiamt.com.br";

const seoSrc = readFileSync(join(root, "src", "seo.ts"), "utf8");
const pages = [];
const re =
  /"(\/[^"]*)":\s*\{[\s\S]*?title:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"[\s\S]*?heading:\s*"([^"]+)"/g;
for (const match of seoSrc.matchAll(re)) {
  if (match[1] === "/404") continue;
  pages.push({ path: match[1], title: match[2], description: match[3], heading: match[4] });
}

if (pages.length !== 5) {
  throw new Error(`Esperava 5 páginas no seo.ts, achei ${pages.length}`);
}

const { render } = await import(pathToFileURL(join(root, ".ssr", "entry-server.js")).href);
const template = readFileSync(join(root, "dist", "index.html"), "utf8");

function attr(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

for (const page of pages) {
  const body = render(page.path);
  const url = page.path === "/" ? `${site}/` : `${site}${page.path}`;
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${attr(page.title)}</title>`);
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${attr(page.description)}$2`);
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${attr(page.title)}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${attr(page.description)}$2`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${attr(page.title)}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${attr(page.description)}$2`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  if (!html.includes('<div id="root"></div>')) {
    throw new Error("O index.html gerado não tem o espaço da página");
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  const h1Count = body.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1Count !== 1) {
    throw new Error(`${page.path}: esperava 1 título principal, achei ${h1Count}`);
  }
  if (!body.includes(page.heading)) {
    throw new Error(`${page.path}: o HTML não contém "${page.heading}"`);
  }
  if (html.includes("/src/assets/")) {
    throw new Error(`${page.path}: ainda há imagem apontando para a pasta de código`);
  }
  if (!html.includes(`<title>${attr(page.title)}</title>`)) {
    throw new Error(`${page.path}: título não entrou no HTML`);
  }

  const file = page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`;
  writeFileSync(join(root, "dist", file), html);
  console.log(`${page.path} -> dist/${file}`);
}

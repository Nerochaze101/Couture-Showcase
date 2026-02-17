import { build as viteBuild } from "vite";
import { rm, readFile, writeFile } from "fs/promises";

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  console.log("adding netlify redirects...");
  await writeFile("dist/public/_redirects", "/* /index.html 200\n");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});

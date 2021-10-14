import { writeFileSync } from "fs";

writeFileSync(
  ".npmrc",
  `//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}
@parthikrb:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${process.env.NODE_AUTH_TOKEN}`
);

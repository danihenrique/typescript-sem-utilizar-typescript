// @ts-check

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function example(a, b) {
    return a + b;
}

// TSC irá retornar um erro para o 1º argumento
// pois o tipo esperado é `{number}` e estamos
// passando string
example("1", 2);

/**
 * @typedef {Object} Issue
 * @property {string} url
 * @property {string} repository_url
 * @property {number} id
 * @property {string} title
 * @property {string} state
 * @property {boolean} open
 */
const url = "https://api.github.com/repos/microsoft/typescript/issues";

(async () => {
  const req = await fetch(url);
  const res = await req.json();

  /** @type {Issue[]} */
  let issues = res.body;
  for (let issue of issues)
    // TS irá retornar um erro pois `.helloWorld` não
    // existe no tipo definido
    console.log(issue.helloWorld);
})();

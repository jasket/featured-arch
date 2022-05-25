var path = require("path");

const { override, babelInclude } = require("customize-cra");

module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      babelInclude([
        /* transpile (converting to es5) code in src/ and shared component library */
        path.resolve("src"),
        path.resolve("../../packages/front-a-processes"),
        path.resolve("../../packages/front-b-pages"),
        path.resolve("../../packages/front-c-widgets"),
        path.resolve("../../packages/front-d-features"),
        path.resolve("../../packages/front-e-entities"),
        path.resolve("../../packages/front-f-shared"),
      ])
    )(config, env)
  );
};

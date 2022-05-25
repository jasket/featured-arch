module.exports = {
  stories: [
    "../../../packages/front-f-shared/**/*.stories.mdx",
    "../../../packages/front-f-shared/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: (config) => {
    const {
      module: {
        rules: [, , , , , { oneOf }],
      },
    } = config;
    const babelLoader = oneOf.find(({ test }) => new RegExp(test).test(".ts"));
    babelLoader.include = [/packages\/front-f-shared/, /.storybook/];
    babelLoader.options.sourceType = "unambiguous";
    return config;
  },
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};

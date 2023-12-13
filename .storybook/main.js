import viteSass from 'vite-plugin-sass';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      viteFinal: async (config, { configType }) => {
        config.plugins.push(viteSass());
        return config;
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
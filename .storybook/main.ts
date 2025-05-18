import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  typescript: {
    check: false,
  },
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    // ✅ 彻底移除 ESLint loader
    config.module!.rules = config.module!.rules!.filter(
      (rule) =>
        !(
          typeof rule === 'object' &&
          rule !== null &&
          'use' in rule &&
          Array.isArray(rule.use) &&
          rule.use.some(
            (u) =>
              typeof u === 'object' &&
              u.loader &&
              u.loader.includes('eslint-loader')
          )
        )
    );
    return config;
  },
};

export default config;


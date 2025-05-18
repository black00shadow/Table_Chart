/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Dashboard', ['Table01', 'Table02', 'Table03', 'Table04', 'Table05', 'Table06', 'Table07', 'Table08', 'Table09', 'Table10', 'Table11', 'Table12', 'Table13', 'Table14', 'Table15']]
      }
    }
  },
};

export default preview; 
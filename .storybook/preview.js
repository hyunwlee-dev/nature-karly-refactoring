import '../src/styles/normalize.css';
import '../src/styles/reset.css';
import '../src/styles/global.css';
import '../src/styles/theme.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'Glass',
    values: [
      {
        name: 'Glass',
        value: '#F3F4F6'
      }
    ]
  }
}
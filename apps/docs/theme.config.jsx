export default {
  logo: <span>Documentation</span>,
  project: {
    link: 'https://github.com/aloshy-ai/monorepo',
  },
  docsRepositoryBase: 'https://github.com/aloshy-ai/monorepo/tree/main/apps/docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Documentation'
    }
  },
  footer: {
    text: `MIT ${new Date().getFullYear()} © Aloshy AI.`,
  },
} 
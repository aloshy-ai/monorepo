// This config is only used for testing, Next.js will use SWC for building
module.exports = {
  presets: ['next/babel'],
  plugins: [],
  env: {
    test: {
      presets: [
        ['next/babel', {
          'preset-env': {
            targets: {
              node: 'current',
            },
          },
        }],
      ],
    },
  },
}; 
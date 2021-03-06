import common from './rollup'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.esm.js',
    format: 'es',
    legacy: true,
    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    banner: common.banner
  },
  external: common.external,
  plugins: [
    common.getCompiler()
  ]
}

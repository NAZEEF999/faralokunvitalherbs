/** Preflight is disabled so Tailwind never alters the approved design's base styles.
 *  Tailwind utilities remain available alongside the design CSS in index.css. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: { preflight: false },
  theme: { extend: { colors: { forest: '#06300f', gold: '#d9b45f', cream: '#f7f2e2', wa: '#22b53f' } } },
  plugins: [],
}

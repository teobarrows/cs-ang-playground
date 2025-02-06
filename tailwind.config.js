/** @type {import('tailwindcss').Config} */
import { scopedPreflightStyles, isolateInsideOfContainer } from 'tailwindcss-scoped-preflight';
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // ...
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer('.twp', {
        except: '.no-twp', // optional, to exclude some elements under .twp from being preflighted, like external markup
      }),
    }),
  ],
  important: true,
  corePlugins: {
    preflight: false, // disable preflight styles
  },
}

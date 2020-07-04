/**
 * To run in Node:
 * ```bash
 * node --experimental-modules ./usage/basic-usage-example.js
 * ```
 * 
 * To run in a browser:
 * ```html
 * <div id="app"></div>
 * <script src="./usage/basic-usage-example.js" type="module"></script>
 * ```
 */

import { CoAnMoPluginFoo } from '../dist/coanmo-plugin-foo.js';

const foo = new CoAnMoPluginFoo('Basic Usage Example');
console.log('foo.getFoo():', foo.getFoo());

if (typeof document === 'object') {
  const $app = document.getElementById('app');
  if ($app) $app.innerHTML += `foo.getFoo(): ${foo.getFoo()}`;
}
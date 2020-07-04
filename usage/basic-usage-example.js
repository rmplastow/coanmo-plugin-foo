// Run this in Node:
// $ node --experimental-modules ./usage/basic-usage-example.js

import { CoAnMoPluginFoo } from '../dist/coanmo-plugin-foo.js';

const foo = new CoAnMoPluginFoo();
console.log('foo.getFoo():', foo.getFoo());
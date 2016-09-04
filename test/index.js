import * as assert from 'assert';
import {transform} from 'babel-core';
import jsx from 'babel-plugin-syntax-jsx';
import testit from 'testit';
import plugin from '../src/';

testit('works', () => {
  try {
    transform('with (obj) {}');
    throw new Error('Parsing with statement should throw');
  } catch (err) {}

  transform('with (obj) {}', {
    plugins: [
      [plugin, {sourceType: 'script'}]
    ]
  });
});

testit('works with parser plugins', () => {
  try {
    transform('var a: Type = <JSXElement />;', {
      plugins: [
        jsx
      ]
    });
    throw new Error('Parsing JSX and Flow should throw');
  } catch (err) {}

  transform('var a = <JSXElement />;', {
    plugins: [
      jsx,
      [plugin, {plugins: ['flow']}]
    ]
  });
});

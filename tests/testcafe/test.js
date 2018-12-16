import { Selector as $ } from 'testcafe';

import {Page} from './page-model';

const page = new Page()

const url = 'http://localhost:3333/';

fixture('WarsawJS Workshop #23 Unit Converter').page(url);

test('title', async t => {
  await t.expect($('title').innerText).contains('Workshop #23');
});

test('temperature elements should exist', async t => {
  const { temperature } = page
  // const temperature = page.temperature;
  await t
  .expect(temperature.c1.exists).ok()
  .expect(temperature.k1.exists).ok()
  .expect(temperature.f1.exists).ok()
  .expect(temperature.c2.exists).ok()
  .expect(temperature.k2.exists).ok()
  .expect(temperature.f2.exists).ok();
});

test('temperature should work with page model', async t => {
  const { temperature } = page
  // const temperature = page.temperature;

  await t
    .typeText(temperature.value1, '100')
    .click(temperature.unit1)
    .click(temperature.c1)
    .click(temperature.unit2)
    .click(temperature.k2)
    .click(temperature.right)
    .expect(temperature.value2.value).eql('373.15');
});

test('temperature should work right and left', async t => {
  const { temperature } = page
  // const temperature = page.temperature;

  await t
    .typeText(temperature.value1, '100')
    .click(temperature.unit1)
    .click(temperature.c1)
    .click(temperature.unit2)
    .click(temperature.k2)
    .click(temperature.right)
    .expect(temperature.value2.value).eql('373.15')
    // .selectText(temperature.value2)
    .typeText(temperature.value2, '100', {replace: true})
    .click(temperature.unit1)
    .click(temperature.k1)
    .click(temperature.unit2)
    .click(temperature.c2)
    .click(temperature.left)
    .expect(temperature.value1.value).eql('373.15');
});

test('currency elements should exist', async t => {
  const { p1, e1, u1, p2, e2, u2 } = page.currency;
  await t
  .expect(p1.exists).ok()
  .expect(e1.exists).ok()
  .expect(u1.exists).ok()
  .expect(p2.exists).ok()
  .expect(e2.exists).ok()
  .expect(u2.exists).ok();
});

test('currency should work with page model', async t => {
  const { currency } = page
  // const currency = page.currency;

  await t
    .typeText(currency.value1, '100')
    .click(currency.unit1)
    .click(currency.e1)
    .click(currency.unit2)
    .click(currency.p2)
    .click(currency.right)
    .expect(currency.value2.value).eql('417.01');
});

test('currency should work with page model reversed', async t => {
  const { currency } = page
  // const currency = page.currency;

  await t
    .typeText(currency.value2, '100')
    .click(currency.unit2)
    .click(currency.e2)
    .click(currency.unit1)
    .click(currency.p1)
    .click(currency.left)
    .expect(currency.value1.value).eql('417.01');
});

test('currency should work with right and left', async t => {
  const { currency } = page
  // const currency = page.currency;

  await t
    .typeText(currency.value1, '100')
    .click(currency.unit1)
    .click(currency.e1)
    .click(currency.unit2)
    .click(currency.p2)
    .click(currency.right)
    .expect(currency.value2.value).eql('417.01')
    // .selectText(currency.value2) so slooooow...
    .typeText(currency.value2, '100', {replace: true})
    .click(currency.unit2)
    .click(currency.e2)
    .click(currency.unit1)
    .click(currency.p1)
    .click(currency.left)
    .expect(currency.value1.value).eql('417.01');
});

test('speed elements should exist', async t => {
  const { k1, m1, k2, m2 } = page.speed;
  await t
    .expect(k1.exists).ok()
    .expect(m1.exists).ok()
    .expect(k2.exists).ok()
    .expect(m2.exists).ok();
});

test('speed elements should work', async t => {
  const { speed } = page;
  await t
    .typeText(speed.value1, '160')
    .click(speed.unit1)
    .click(speed.k1)
    .click(speed.unit2)
    .click(speed.m2)
    .click(speed.right)
    .expect(speed.value2.value).eql('100');
});

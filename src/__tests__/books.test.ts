import Bitkub from '../bitkub-node';

const bitkub = new Bitkub();

test('books(): {lmt:10, sym:THB_BTC}', async () => {
  const response = await bitkub.books({ lmt: 10, sym: 'THB_BTC' });
  expect(response.error).toBe(0);
  expect(response.result).toHaveProperty('asks');
  expect(response.result).toHaveProperty('bids');
});

test('books(): {lmt:"10", sym:THB_BTC}', async () => {
  const response = await bitkub.books({ lmt: '10', sym: 'THB_BTC' });
  expect(response.error).toBe(0);
  expect(response.result).toHaveProperty('asks');
  expect(response.result).toHaveProperty('bids');
});

test('books(): {}', async () => {
  const response = await bitkub.books({});
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('lmt');
  expect(response.result).toHaveProperty('sym');
});

test('books(): missing {lmt}', async () => {
  const response = await bitkub.books({ sym: 'THB_BTC' });
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('lmt');
});

test('books(): missing {sym}', async () => {
  const response = await bitkub.books({ lmt: 10 });
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('sym');
});

test('books(): {lmt:10, sym:WRONG_SYM}', async () => {
  const response = await bitkub.books({ lmt: 10, sym: 'WRONG_SYM' });
  expect(response.error).toBe(11);
  expect(response.result).toBe(null);
});

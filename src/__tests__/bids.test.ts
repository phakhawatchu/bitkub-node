import Bitkub from '../bitkub-node';

const bitkub = new Bitkub();

test('bids(): {lmt:10, sym:THB_BTC}', async () => {
  const response = await bitkub.bids({ lmt: 10, sym: 'THB_BTC' });
  expect(response.error).toBe(0);
  expect(response.result.length).toBe(10);
});

test('bids(): {lmt:"10", sym:THB_BTC}', async () => {
  const response = await bitkub.bids({ lmt: '10', sym: 'THB_BTC' });
  expect(response.error).toBe(0);
  expect(response.result.length).toBe(10);
});

test('bids(): {}', async () => {
  const response = await bitkub.bids({});
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('lmt');
  expect(response.result).toHaveProperty('sym');
});

test('bids(): missing {lmt}', async () => {
  const response = await bitkub.bids({ sym: 'THB_BTC' });
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('lmt');
});

test('bids(): missing {sym}', async () => {
  const response = await bitkub.bids({ lmt: 10 });
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('sym');
});

test('bids(): {lmt:10, sym:WRONG_SYM}', async () => {
  const response = await bitkub.bids({ lmt: 10, sym: 'WRONG_SYM' });
  expect(response.error).toBe(11);
  expect(response.result).toBe(null);
});

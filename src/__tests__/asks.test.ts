import Bitkub from '../bitkub-node';

const bitkub = new Bitkub();

test('asks(): {lmt:10, sym:THB_BTC}', async () => {
  const response = await bitkub.asks({ lmt: 10, sym: 'THB_BTC' });
  expect(response.error).toBe(0);
  expect(response.result.length).toBe(10);
});

test('asks(): {lmt:"10", sym:THB_BTC}', async () => {
  const response = await bitkub.asks({ lmt: '10', sym: 'THB_BTC' });
  expect(response.error).toBe(0);
  expect(response.result.length).toBe(10);
});

test('asks(): {}', async () => {
  const response = await bitkub.asks({});
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('lmt');
  expect(response.result).toHaveProperty('sym');
});

test('asks(): missing {lmt}', async () => {
  const response = await bitkub.asks({ sym: 'THB_BTC' });
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('lmt');
});

test('asks(): missing {sym}', async () => {
  const response = await bitkub.asks({ lmt: 10 });
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('sym');
});

test('asks(): {lmt:10, sym:WRONG_SYM}', async () => {
  const response = await bitkub.asks({ lmt: 10, sym: 'WRONG_SYM' });
  expect(response.error).toBe(11);
  expect(response.result).toBe(null);
});

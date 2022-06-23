import Bitkub from '../bitkub-node';

const bitkub = new Bitkub();

test('Get status from Bitkub', async () => {
  const response = await bitkub.status();
  response.forEach((res) => {
    expect(res).toHaveProperty('name');
    expect(res).toHaveProperty('status');
    expect(res).toHaveProperty('message');
  });
});

test('Get server time', async () => {
  const response = await bitkub.serverTime();
  // const response = await getServerTime();
  expect(typeof response).toBe('number');
});

test('Get symbols', async () => {
  const response = await bitkub.symbols();
  expect(response.error).toBe(0);
});

test('Get ticker', async () => {
  const response = await bitkub.ticker();
  expect(typeof response).toBe('object');
});

test('Get trades', async () => {
  const response = await bitkub.trades({ lmt: 10, sym: 'THB_ZIL' });
  expect(typeof response).toBe('object');
});

test('trades(): missing {lmt}', async () => {
  await expect(bitkub.trades({ sym: 'THB_ZIL' })).rejects.toThrowError('{lmt} is missing');
});

test('trades(): missing {sym}', async () => {
  await expect(bitkub.trades({ lmt: 10 })).rejects.toThrowError('{sym} is missing');
});

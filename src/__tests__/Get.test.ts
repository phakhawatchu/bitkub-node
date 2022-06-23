import Bitkub from '../bitkub-node';

const bitkub = new Bitkub();

test('status(): {}', async () => {
  const response = await bitkub.status();
  response.forEach((res) => {
    expect(res).toHaveProperty('name');
    expect(res).toHaveProperty('status');
    expect(res).toHaveProperty('message');
  });
});

test('serverTime(): {}', async () => {
  const response = await bitkub.serverTime();
  expect(typeof response).toBe('number');
});

test('symbols(): {}', async () => {
  const response = await bitkub.symbols();
  expect(response.error).toBe(0);
});

test('ticker(): {}', async () => {
  const response = await bitkub.ticker();
  expect(typeof response).toBe('object');
});

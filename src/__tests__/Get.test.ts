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

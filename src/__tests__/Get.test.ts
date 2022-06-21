import { getStatus, getServerTime, getSymbols } from '../index';

test('Get status from Bitkub', async () => {
  const response = await getStatus();
  response.forEach((res) => {
    expect(res).toHaveProperty('name');
    expect(res).toHaveProperty('status');
    expect(res).toHaveProperty('message');
  });
});

test('Get server time', async () => {
  const response = await getServerTime();
  expect(typeof response).toBe('number');
});

test('Get symbols', async () => {
  const response = await getSymbols();
  expect(response.error).toBe(0);
});

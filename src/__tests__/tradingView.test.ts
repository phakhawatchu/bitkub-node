import Bitkub from '../bitkub-node';

const bitkub = new Bitkub();

test(`tradingView(): { symbol: 'BTC_THB', resolution: '5', from: 1633424427, to: 1633427427 }`, async () => {
  const response = await bitkub.tradingView({ symbol: 'BTC_THB', resolution: '5', from: 1633424427, to: 1633427427 });
  expect(response.s).toBe('ok');
  expect(response.c.length).toBe(12);
  expect(response.h.length).toBe(12);
  expect(response.l.length).toBe(12);
  expect(response.o.length).toBe(12);
  expect(response.t.length).toBe(12);
  expect(response.v.length).toBe(12);
});

test(`tradingView(): {}`, async () => {
  const response = await bitkub.tradingView({});
  expect(response.s).toBe('no_data');
  expect(response.c.length).toBe(0);
  expect(response.h.length).toBe(0);
  expect(response.l.length).toBe(0);
  expect(response.o.length).toBe(0);
  expect(response.t.length).toBe(0);
  expect(response.v.length).toBe(0);
});

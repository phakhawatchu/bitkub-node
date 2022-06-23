import Bitkub from '../bitkub-node';
import { errorResultSchema } from '../utils/interface';

const bitkub = new Bitkub();

test('depth(): {lmt:10, sym:THB_BTC}', async () => {
  const response = await bitkub.depth({ lmt: 10, sym: 'THB_BTC' });
  expect(response).toHaveProperty('asks');
  expect(response).toHaveProperty('bids');
});

test('depth(): {lmt:"10", sym:THB_BTC}', async () => {
  const response = await bitkub.depth({ lmt: '10', sym: 'THB_BTC' });
  expect(response).toHaveProperty('asks');
  expect(response).toHaveProperty('bids');
});

test('depth(): {}', async () => {
  const response = <errorResultSchema>await bitkub.depth({});
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('lmt');
  expect(response.result).toHaveProperty('sym');
});

test('depth(): missing {lmt}', async () => {
  const response = <errorResultSchema>await bitkub.depth({ sym: 'THB_BTC' });
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('lmt');
});

test('depth(): missing {sym}', async () => {
  const response = <errorResultSchema>await bitkub.depth({ lmt: 10 });
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('sym');
});

test('depth(): {lmt:10, sym:WRONG_SYM}', async () => {
  const response = <errorResultSchema>await bitkub.depth({ lmt: 10, sym: 'WRONG_SYM' });
  expect(response.error).toBe(11);
  expect(response.result).toBe(null);
});

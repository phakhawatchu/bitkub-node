import Bitkub from '../bitkub-node';

const bitkub = new Bitkub();

test('trades(): {lmt:10, sym:THB_ZIL}', async () => {
  const response = await bitkub.trades({ lmt: 10, sym: 'THB_ZIL' });
  expect(response.error).toBe(0);
  expect(response.result.length).toBe(10);
});

test('trades(): {lmt:"10", sym:THB_ZIL}', async () => {
  const response = await bitkub.trades({ lmt: '10', sym: 'THB_ZIL' });
  expect(response.error).toBe(0);
  expect(response.result.length).toBe(10);
});

test('trades(): {}', async () => {
  const response = await bitkub.trades({});
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('lmt');
  expect(response.result).toHaveProperty('sym');
});

test('trades(): missing {lmt}', async () => {
  const response = await bitkub.trades({ sym: 'THB_ZIL' });
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('lmt');
});

test('trades(): missing {sym}', async () => {
  const response = await bitkub.trades({ lmt: 10 });
  expect(response.error).toBe(10);
  expect(response.result).toHaveProperty('sym');
});

test('trades(): {lmt:10, sym:WRONG_SYM}', async () => {
  const response = await bitkub.trades({ lmt: 10, sym: 'WRONG_SYM' });
  expect(response.error).toBe(11);
  expect(response.result).toBe(null);
});

test('trades(): {lmt:-1, sym:THB_ZIL}', async () => {
  const response = await bitkub.trades({ lmt: -1, sym: 'THB_ZIL' });
  expect(response.error).toBe(99);
  expect(response.result).toBe(null);
});

test('trades(): {lmt:"-1", sym:THB_ZIL}', async () => {
  const response = await bitkub.trades({ lmt: '-1', sym: 'THB_ZIL' });
  expect(response.error).toBe(99);
  expect(response.result).toBe(null);
});

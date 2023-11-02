import getDates from '../main.js';

let datesResult;

describe('dates array check', () => {

  beforeAll(async () => {
    datesResult = (await getDates());
    return datesResult;
  }, 60000);

  test('arr is not empty', async () => {
    await expect(datesResult.length).not.toBe(0);
  });

  test('arr is empty', async () => {
    await expect(() => expect(datesResult).toMatchObject([])).toThrowError();
  });

  test('arr has more than 5 values', async () => {
    await expect(datesResult.length).toBeGreaterThan(5);
  });

  test('each value length is more than 10 characters', async () => {

    for (const date of datesResult) {
      try {
        await expect(date.length).toBeGreaterThanOrEqual(10);
      } catch (err) {
        throw new TypeError(`Less than 10 characters: ${date}`);
      }
    }
  });
});

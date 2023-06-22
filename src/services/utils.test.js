import { kFormatter, getSubtractedDate, getFormattedDate } from './utils';

describe('---kFormatterSet test---', () => {
  const kFormatterSet = [
    { input: 12342, output: '12.3k' },
    { input: 100, output: 100 },
    { input: 5049, output: '5k' },
    { input: -2344, output: '-2.3k' },
    { input: 0, output: 0 },
    { input: '12342', output: '12.3k' },
  ];

  kFormatterSet.map((el) => {
    it(`should test kFormatter function with ${el.input} input and ${el.output} output`, () => {
      expect(kFormatter(el.input)).toEqual(el.output);
    });
  });
});

describe('---getSubtractedDate test---', () => {
  const baseDate = new Date(1687468948410); //Thu Jun 22 2023 23:22:28 GMT+0200 (Central European Summer Time)
  const getSubtractedDateSet = [
    { shift: 2, output: '2023-06-20' },
    { shift: 4, output: '2023-06-18' },
    { shift: 7, output: '2023-06-15' },
    { shift: 1, output: '2023-06-21' },
    { shift: 0, output: '2023-06-22' },
    { shift: -2, output: '2023-06-24' },
  ];

  getSubtractedDateSet.map((el) => {
    it(`should test getSubtractedDate function with ${el.shift} input and ${el.output} output`, () => {
      expect(getSubtractedDate(baseDate, el.shift)).toEqual(el.output);
    });
  });
});

describe('---getFormattedDate test---', () => {
  const getFormattedDateSet = [
    { input: 1687468948410, output: '2023-06-22' },
    { input: 1487466948416, output: '2017-02-19' },
    { input: 1667468948254, output: '2022-11-03' },
    { input: 0, output: '1970-01-01' },
  ];

  getFormattedDateSet.map((el) => {
    it(`should test getFormattedDate function with ${el.shift} input and ${el.output} output`, () => {
      expect(getFormattedDate(el.input)).toEqual(el.output);
    });
  });
});

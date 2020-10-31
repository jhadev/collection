const { cipher, doCipher } = require('../samples/cipher');

test(`encodes "my name is josh" to "+4 =!+% (, ):,*"`, () => {
  expect(doCipher('encode', 'my name is josh')).toBe('+4 =!+% (, ):,*');
});

test(`decodes "+4 =!+% (, ):,*" to "my name is josh"`, () => {
  expect(doCipher('decode', '+4 =!+% (, ):,*')).toBe('my name is josh');
});

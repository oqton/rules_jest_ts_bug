import { hashString } from './index';

describe('hashString', () => {
    it('computes correct hash', () => {
      expect(hashString('Foo')).toEqual('1356c67d7ad1638d816bfb822dd2c25d');
    });
});

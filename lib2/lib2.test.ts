import { decorateHash } from './index';

describe('decorateHash', () => {
    it('computes correct decorated hash', () => {
      expect(decorateHash('Foo')).toEqual('111356c67d7ad1638d816bfb822dd2c25d22');
    });
});

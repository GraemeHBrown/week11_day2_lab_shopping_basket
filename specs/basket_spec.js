const assert = require('assert');
const Basket = require('../basket');

describe('Basket', function(){
  let basket;

  beforeEach(function () {
    basket = new Basket();
  })

  it('should start empty', function(){
    const actual = basket.items;
    assert.deepStrictEqual(actual,[]);
  })
})

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

  it('should add item to basket', function(){
    basket.addItem ('item1');
    const actual = basket.countItems();
    assert.strictEqual(actual, 1);
  })

  it('should remove item from basket', function(){
    basket.addItem ('item1');
    basket.addItem ('item2');
    basket.removeItem ('item1');
    const actual = basket.countItems();
    assert.strictEqual(actual, 1);
  })
})

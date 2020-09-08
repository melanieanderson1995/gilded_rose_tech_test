var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  //it("should foo", function() {
    //const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    //const items = gildedRose.updateQuality();
    //expect(items[0].name).toEqual("fixme");
  //});

  it('should return Sulfuras information', function () {
    const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 50) ]);
    const items = gildedRose
    console.log(items[0].name)
    expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros')
  })

});

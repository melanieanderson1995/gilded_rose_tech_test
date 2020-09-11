var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  //it("should foo", function() {
    //const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    //const items = gildedRose.updateQuality();
    //expect(items[0].name).toEqual("fixme");
  //});
  describe("Sulfuras", function() {
    it('should return Sulfuras name', function () {
      const sulfuras = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 50) ]);
      items = sulfuras.updateQuality();
      expect(sulfuras.items[0].name).toEqual('Sulfuras, Hand of Ragnaros');
    });

    it('should return Sulfuras sellIn', function () {
      const sulfuras = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 50) ]);
      items = sulfuras.updateQuality();
      expect(sulfuras.items[0].sellIn).toEqual(0);
    });

    it('should return Sulfuras quality', function () {
      const sulfuras = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 0, 50) ]);
      expect(sulfuras.updateQuality()).toEqual('The quality of this item does not change');
    });
  });

  describe('updateQuality', function () {
    describe("Aged Brie", function() {
      it('should return Aged Brie quality increased by 1 when sellIn is positive', function () {
        const agedBrie = new Shop([ new Item('Aged Brie', 5, 10) ]);
        items = agedBrie.updateQuality();
        expect(agedBrie.items[0].quality).toEqual(11)
      });

      it('should return Aged Brie quality increased by 1 when sellIn is negative', function () {
        const agedBrie = new Shop([ new Item('Aged Brie', -1, 10) ]);
        items = agedBrie.updateQuality();
        expect(agedBrie.items[0].quality).toEqual(11)
      });
    });

    describe('Backstage Passes', function() {
      it('Should return Backstage Passes quality increased by 1 when sell in is more than 10', function () {
        const passes = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 10) ]);
        items = passes.updateQuality();
        expect(passes.items[0].quality).toEqual(11);
      });

      it('Should return Backstage Passes quality increased by 2 when sellIn is between 5 and 10', function () {
        const passes = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 7, 10) ]);
        items = passes.updateQuality();
        expect(passes.items[0].quality).toEqual(12);
      });

      it('Should return Backstage Passes quality increased by 3 when sellIn is between 0 and 5', function () {
        const passes = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10) ]);
        items = passes.updateQuality();
        expect(passes.items[0].quality).toEqual(13);
      });

      it('Should return Backstage Passes quality increased by 2 when sellIn is between 5 and 10', function () {
        const passes = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10) ]);
        items = passes.updateQuality();
        expect(passes.items[0].quality).toEqual(0);
      });
    });

    describe('Other items', function() {
      it('Should return item quality decreased by 1 as sellIn decreases but remains positive', function () {
        const tomato = new Shop([ new Item('Tomato', 5, 10) ]);
        items = tomato.updateQuality();
        expect(tomato.items[0].quality).toEqual(9);
      });

      it('Should return item quality decreased by 2 as sellIn decreases and becomes negative', function () {
        const tomato = new Shop([ new Item('Tomato', -1, 10) ]);
        items = tomato.updateQuality();
        expect(tomato.items[0].quality).toEqual(8);
      });
    });
  });

  describe('updateSellIn', function () {
    it('')
  });
});

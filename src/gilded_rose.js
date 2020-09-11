class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        return "The quality of this item does not change"
      } else if (this.items[i].name === 'Aged Brie' || this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert'){
          //Backstage passes
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 0) {
              this.items[i].quality = 0
            } else if (this.items[i].sellIn < 6) {
                if (this.items[i].quality < 48) {
                  this.items[i].quality += 3;
                } else {
                  this.items[i].quality = 50;
                }
            } else if (this.items[i].sellIn < 11) {
                if (this.items[i].quality < 49) {
                  this.items[i].quality += 2;
                } else {
                  this.items[i].quality = 50;
                }
            } else {
              this.items[i].quality += 1;
            }
            //Aged brie
          } else {
            this.items[i].quality += 1;
          }
        //Other items
      }   else {
          if (this.items[i].sellIn < 0 && this.items[i].quality > 1) {
            this.items[i].quality -= 2 ;
          } else if (this.items[i].quality <= 0) {
            this.items[i].quality = 0
          } else {
            this.items[i].quality -= 1;
          }
        }
        return this.items;
      }
    }
  updateSellIn() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        return "The sellIn of this item does not change"
      } else {
        this.items[i].sellIn -= 1
      }
    }
  }
}
exports = {
  Item,
  Shop
}

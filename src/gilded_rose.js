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
    //iterate through each item in the items array
    for (var i = 0; i < this.items.length; i++) {
      //Special rules for Sulfuras
      if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        return "The quality of this item does not change"
      //if this item IS aged brie OR backstage passes then...
    } else if (this.items[i].name === 'Aged Brie' || this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert'){
        //if this item's (aged brie or backstage passes) quality is less than upper limit 50 then...
        if (this.items[i].quality < 50) {
          //this item's (aged brie or backstage passes) quality increases by 1 then...
          this.items[i].quality = this.items[i].quality + 1;
          //if this item is backstage passes then...
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            //if the backstage passes' sellIn date is less than 11 then...
            if (this.items[i].sellIn < 11) {
              //if the backstage passes' quality is less than upper limit 50 then...
              if (this.items[i].quality < 50) {
                //this backstage passes' quality increases by 1
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            //if the backstage passes' sellIn date is less than 6 then...
            if (this.items[i].sellIn < 6) {
              //if the backstage passes' quality is less than upper limit 50 then...
              if (this.items[i].quality < 50) {
                //the backstage passes' quality increases by 1
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      //this is the section for MOST of the items
      //if this item is NOT aged brie or backstage passes then...
      else {
          //if this item's sellIn is less than 0 then...
          if (this.items[i].sellIn < 0) {
            //this item's quality becomes 0
            this.items[i].quality = 0
          //if this item's sellIn is 0 or greater then...
          } else {
              //this item's quality decreases by 1
            this.items[i].quality = this.items[i].quality - 1;
          }
      }
      }
    }
  updateSellIn() {
    for (var i = 0; i < this.items.length; i++) {
      //if the item is NOT Sulfuras then...
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //this item's sellIn date decreases by 1
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      //if this item's sellIn date is less than 0 then...
      if (this.items[i].sellIn < 0) {
        //if this item is NOT aged brie then...
        if (this.items[i].name != 'Aged Brie') {
          //if this item is NOT backstage passes then...
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            //if this item's quality is greater than 0 then...
            if (this.items[i].quality > 0) {
              //if this item is NOT sulfuras then...
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                //the item's quality decreases by 1
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          //this item IS backstage passes and the quality goes to 0
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        //this item IS aged brie then...
        } else {
          //if the aged brie's quality is less than 50 then...
          if (this.items[i].quality < 50) {
            //the aged brie's quality increases by 1
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}

const should = require('chai').should();

const ItemList = require('../../src/itemList');
const gilded_rose = require('../../src/gilded_rose');

describe('Test Aged Brie', () => {

    it('Aged Brie increases quality', () => {
        const brie = new gilded_rose.Item(ItemList.BRIE, 30, 40);
        const shop = new gilded_rose.Shop([brie]);

        // Updating quality
        shop.updateQuality();
        shop.items.should.have.length(1);
        shop.items[0].quality.should.equal(41);
        shop.items[0].name.should.deep.equal(ItemList.BRIE);
        shop.items[0].sellIn.should.equal(29);
        
    });

    it('Aged Brie never has quality higher than 50', () => {
        const brie = new gilded_rose.Item(ItemList.BRIE, 30, 50);
        const shop = new gilded_rose.Shop([brie]);

        // Updating quality
        shop.updateQuality();
        shop.items.should.have.length(1);
        shop.items[0].quality.should.equal(50);
        shop.items[0].name.should.deep.equal(ItemList.BRIE);
        shop.items[0].sellIn.should.equal(29);		
    });
});
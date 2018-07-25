const should = require('chai').should();

const ItemList = require('../../src/itemList');
const gilded_rose = require('../../src/gilded_rose');

describe('Test Sulfuras', () => {

    it('Sulfuras, sulfuras never changes...', () => {
        const sulfuras = new gilded_rose.Item(ItemList.SULFURAS, 30, 80);
        const shop = new gilded_rose.Shop([sulfuras]);

        // Updating quality
        shop.updateQuality();
        shop.items.should.have.length(1);
        shop.items[0].quality.should.equal(80);
        shop.items[0].name.should.deep.equal(ItemList.SULFURAS);

        // NOTE: SULFURUS DOESN'T HAVE A SELL IN DATE
        shop.items[0].sellIn.should.equal(30);
    });
});
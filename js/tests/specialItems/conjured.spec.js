const should = require('chai').should();

const ItemList = require('../../src/itemList');
const gilded_rose = require('../../src/gilded_rose');

describe('Test Conjured Items', () => {

	it('Properties of a conjured item after one update', () => {
		const potato = new gilded_rose.Item('CONJURED Baked Potato', 12, 4);
		const shop = new gilded_rose.Shop([potato]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(1);
		shop.items[0].quality.should.equal(2);
		shop.items[0].name.should.deep.equal('CONJURED Baked Potato');
		shop.items[0].sellIn.should.equal(11);		
    });
    
    it('Test after Sell In Date has passed', () => {
		const potato = new gilded_rose.Item('Baked Potato', 0, 6);
		const shop = new gilded_rose.Shop([potato]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(1);
		shop.items[0].quality.should.equal(4);
		shop.items[0].name.should.deep.equal('Baked Potato');
		shop.items[0].sellIn.should.equal(-1);		
    });
    


    it('Test floor of Quality', () => {
    	const potato = new gilded_rose.Item('Baked Potato', 12, 1);
		const shop = new gilded_rose.Shop([potato]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(1);
		shop.items[0].quality.should.equal(0);
		shop.items[0].name.should.deep.equal('Baked Potato');
		shop.items[0].sellIn.should.equal(11);
    });

});

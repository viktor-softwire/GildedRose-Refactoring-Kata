const should = require('chai').should();

const ItemList = require('../../src/itemList');
const gilded_rose = require('../../src/gilded_rose');

describe('Test Normal Items', () => {

	it('Properties of a normal item after one update', () => {
		const potato = new gilded_rose.Item('Baked Potato', 12, 4);
		const shop = new gilded_rose.Shop([potato]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(1);
		shop.items[0].quality.should.equal(3);
		shop.items[0].name.should.deep.equal('Baked Potato');
		shop.items[0].sellIn.should.equal(11);		
    });
    
    it('Test floor of Quality', () => {
    	const potato = new gilded_rose.Item('Baked Potato', 12, 0);
		const shop = new gilded_rose.Shop([potato]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(1);
		shop.items[0].quality.should.equal(0);
		shop.items[0].name.should.deep.equal('Baked Potato');
		shop.items[0].sellIn.should.equal(11);    
    });

    it('Test after Sell In Date has passed', () => {
    	const potato = new gilded_rose.Item('Baked Potato', 0, 12);
		const shop = new gilded_rose.Shop([potato]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(1);
		shop.items[0].quality.should.equal(10);
		shop.items[0].name.should.deep.equal('Baked Potato');
		shop.items[0].sellIn.should.equal(-1);    

    });


});

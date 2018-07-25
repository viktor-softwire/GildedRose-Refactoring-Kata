const should = require('chai').should();

const ItemList = require('../../src/itemList');
const gilded_rose = require('../../src/gilded_rose');

describe('Test Normal Items', () => {

	it('Normal Item', () => {
		const potato = new gilded_rose.Item('Baked Potato', 12, 4);
		const shop = new gilded_rose.Shop([potato]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(1);
		shop.items[0].quality.should.equal(3);
		shop.items[0].name.should.deep.equal('Baked Potato');
		shop.items[0].sellIn.should.equal(11);		
	});

});

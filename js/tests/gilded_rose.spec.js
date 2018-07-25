const should = require('chai').should();

const ItemList = require('../src/itemList');
const gilded_rose = require('../src/gilded_rose');

describe('Test Multiple Items', () => {

	it('Correct number of items', () => {
		const potato = new gilded_rose.Item('Baked Potato', 12, 4);
		const sulfuras = new gilded_rose.Item(ItemList.SULFURAS, 30, 80)
		const brie = new gilded_rose.Item(ItemList.BRIE, 20, 30)
		const shop = new gilded_rose.Shop([potato, sulfuras, brie]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(3);;		
	});

	it('Updates Quality and Sell In for every item', () => {
		const potato = new gilded_rose.Item('Baked Potato', 12, 4);
		const sulfuras = new gilded_rose.Item(ItemList.SULFURAS, 30, 80)
		const brie = new gilded_rose.Item(ItemList.BRIE, 20, 30)
		const shop = new gilded_rose.Shop([potato, sulfuras, brie]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(3);
		shop.items[0].quality.should.equal(3);
		shop.items[0].name.should.deep.equal('Baked Potato');
		shop.items[0].sellIn.should.equal(11);
		shop.items[1].quality.should.equal(80);
		shop.items[1].name.should.deep.equal(ItemList.SULFURAS);
		shop.items[1].sellIn.should.equal(30);
		shop.items[2].quality.should.equal(31);
		shop.items[2].name.should.deep.equal(ItemList.BRIE);
		shop.items[2].sellIn.should.equal(19);
	});

});

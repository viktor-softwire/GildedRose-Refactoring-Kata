const should = require('chai').should();

const ItemList = require('../../src/itemList');
const gilded_rose = require('../../src/gilded_rose');

describe('Test Backstage Passes', () => {

	it('Backstage Passes before 10 days', () => {
		const backsatge = new gilded_rose.Item(ItemList.BACKSTAGE, 20, 40);
		const shop = new gilded_rose.Shop([backsatge]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(1);
		shop.items[0].quality.should.equal(41);
		shop.items[0].name.should.deep.equal(ItemList.BACKSTAGE);
		shop.items[0].sellIn.should.equal(19);		
	});

	it('Backstage Passes 5-10 days', () => {
		const backsatge = new gilded_rose.Item(ItemList.BACKSTAGE, 6, 40);
		const shop = new gilded_rose.Shop([backsatge]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(1);
		shop.items[0].quality.should.equal(42);
		shop.items[0].name.should.deep.equal(ItemList.BACKSTAGE);
		shop.items[0].sellIn.should.equal(5);		
	});

	it('Backstage Passes in 5 days', () => {
		const backsatge = new gilded_rose.Item(ItemList.BACKSTAGE, 5, 40);
		const shop = new gilded_rose.Shop([backsatge]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(1);
		shop.items[0].quality.should.equal(43);
		shop.items[0].name.should.deep.equal(ItemList.BACKSTAGE);
		shop.items[0].sellIn.should.equal(4);		
	});


	it('Backstage Passes never have higher quality than 50', () => {
		const backsatge = new gilded_rose.Item(ItemList.BACKSTAGE, 4, 49);
		const shop = new gilded_rose.Shop([backsatge]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(1);
		shop.items[0].quality.should.equal(50);
		shop.items[0].name.should.deep.equal(ItemList.BACKSTAGE);
		shop.items[0].sellIn.should.equal(3);		
	});

	it('Backstage Passes testing edge case for SellIn===0 => loses all its value', () => {
		const backsatge = new gilded_rose.Item(ItemList.BACKSTAGE, 0, 40);
		const shop = new gilded_rose.Shop([backsatge]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(1);
		shop.items[0].quality.should.equal(0);
		shop.items[0].name.should.deep.equal(ItemList.BACKSTAGE);
		shop.items[0].sellIn.should.equal(-1);		
	});
	
	it('Backstage Passes after SellIn', () => {
		const backsatge = new gilded_rose.Item(ItemList.BACKSTAGE, -1, 40);
		const shop = new gilded_rose.Shop([backsatge]);

		// Updating quality
		shop.updateQuality();
		shop.items.should.have.length(1);
		shop.items[0].quality.should.equal(0);
		shop.items[0].name.should.deep.equal(ItemList.BACKSTAGE);
		shop.items[0].sellIn.should.equal(-2);		
	});


});

const Item = require('./Item');

module.exports = class InteractiveItem extends Item {
	constructor(item) {
		super(item.name, item.sellIn, item.quality);
	}

	// For a normal item
	updateItem() {

		// Base decay
		let decay = 1;

		// If Sell In date is passed
		if (this.sellIn <= 0) decay = decay*2;

		// Update quality 
		// Quality can never be lower than 0
		this.quality -= decay;
		if (this.quality < 0) this.quality = 0;

		this.sellIn--;
	}

	getItem() {
		return new Item(this.name, this.sellIn, this.quality);
	}

}
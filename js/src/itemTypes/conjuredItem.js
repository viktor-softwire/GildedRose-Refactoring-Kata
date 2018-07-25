const InteractiveItem = require('./interactiveItem');

module.exports = class ConjuredItem extends InteractiveItem {
	constructor(item) {
		super(item);
	}

	updateItem() {
		
		// Base decay
		let decay = 2;

		if (this.sellIn <= 0) decay = decay *2;

		this.quality -= decay;
		if (this.quality < 0) this.quality = 0;

		this.sellIn--;
	}
}

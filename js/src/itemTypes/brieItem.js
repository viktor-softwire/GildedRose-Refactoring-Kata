const InteractiveItem = require('./interactiveItem');

module.exports = class BrieItem extends InteractiveItem {
	constructor(item) {
		super(item);
	}

	updateItem() {
		
		// Base increase
		let increase = 1;

		if (this.sellIn <= 0) increase = increase *2;

		this.quality += increase;
		if (this.quality > 50) this.quality = 50;

		this.sellIn--;
	}
}
const InteractiveItem = require('./interactiveItem');

module.exports = class BackstageItem extends InteractiveItem {
	constructor(item) {
		super(item);
	}

	updateItem() {
		
		// Base increase
		let increase = 1;

		if (this.sellIn <= 10) increase++;
		if (this.sellIn <= 5) increase++;

		this.quality += increase;

		// Concert over
		if (this.sellIn <= 0) this.quality = 0;
		if (this.quality > 50) this.quality = 50;

		this.sellIn--;
	}
}
const ItemList = require('./itemList');
const Item = require('./itemTypes/Item');
const ConjuredItem = require('./itemTypes/conjuredItem');
const BrieItem = require('./itemTypes/brieItem');
const InteractiveItem = require('./itemTypes/interactiveItem');
const SulfurasItem = require('./itemTypes/sulfurasItem');
const BackstageItem = require('./itemTypes/backStageItem');

class Shop {
  	constructor(items=[]){
    	this.items = items;
  	}
  	updateQuality() {

		const interactiveItems = this.items.map(item => {
			if (item.name === ItemList.SULFURAS) return new SulfurasItem(item);
			if (item.name === ItemList.BRIE) return new BrieItem(item);
			if (item.name === ItemList.BACKSTAGE) return new BackstageItem(item);
			if (item.name.substring(0, 8) === 'CONJURED') return new ConjuredItem(item);
			return new InteractiveItem(item);
		});

		const newItems = interactiveItems.map(interactiveItem => {
			interactiveItem.updateItem();
			return interactiveItem.getItem();
		});

		this.items = newItems;
    	return this.items;
  	}
}

module.exports = {Item, Shop}
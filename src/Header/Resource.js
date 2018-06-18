const AVG_PLANET_TEMPERATURE = 40;

export default class Resource {
  constructor({
    level,
    vault,
    quantity,
    name
  }) {
    this.level = level;
    this.vault = vault;
    this.quantity = quantity;
    this.name = name;
  }

  isStorageFull() {
    return (this.quantity > this.storageCapacity);
  }

  isStorageNearFull() {
    return (this.quantity + 4 * this.productionRate > this.storageCapacity);
  }

  get storageCapacity() {
    switch (this.name) {
      case 'metal':
      case 'crystal':
      case 'deuterium':
        return 5000 * Math.floor(2.5 * (Math.E ** (20 * this.vault / 33)));
    }

    return 10000;
  }

  get protectedStorageCapacity() {
    switch (this.name) {
      case 'metal':
      case 'crystal':
      case 'deuterium':
        return Math.floor(this.productionRate * 24 * (this.vault > 10 ? 10: this.valut) / 100);
    }

    return 0;
  }

  get energyConsumption() {
    switch (this.name) {
      case 'metal':
        return 10 * this.level * (1.1 ** this.level);
      case 'crystal':
        return 10 * this.level * (1.1 ** this.level); 
      case 'deuterium':
        return 20 * this.level * (1.1 ** this.level);
    }
  }

  get productionRate() {
    switch (this.name) {
      case 'metal':
        return Math.floor(30 * this.level * (1.1 ** this.level)) + 30;
      case 'crystal':
        return Math.floor(20 * this.level * (1.1 ** this.level)) + 15;
      case 'deuterium':
        return Math.floor(this.energyConsumption * (0.68 - 0.002 * AVG_PLANET_TEMPERATURE));
      case 'energy':
        return Math.floor(20 * this.level * (1.1 ** this.level));
    }
  }
}

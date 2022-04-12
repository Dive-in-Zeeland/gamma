import { ImageSourcePropType } from 'react-native';
import { proxy } from 'valtio';

export type UpgradeType = {
  name: string;
  basePrice: number;
  fps: number;
  amount: number;
  image: ImageSourcePropType;
  addOne: () => void;
  getPrice: () => number;
};

const baseUpgrade = {
  amount: 0,
  basePrice: 1,
  addOne() {
    this.amount += 1;
  },
  getPrice() {
    return this.basePrice * 1.15 ** this.amount;
  },
};

const upgradesValt = proxy<UpgradeType[]>([
  {
    ...baseUpgrade,
    name: 'Auto Feeders',
    basePrice: 15,
    // fps: 0.1,
    fps: 1,
    image: require('../../../../img/Fish_Feeder.png'),
  },
  {
    ...baseUpgrade,
    name: 'Fisher Man',
    basePrice: 100,
    fps: 1,
    image: require('../../../../img/Fish_Fisherman.png'),
  },
  {
    ...baseUpgrade,
    name: 'Fish Farm',
    basePrice: 1000,
    fps: 10,
    image: require('../../../../img/Fish_Fishfarm.png'),
  },
  {
    ...baseUpgrade,
    name: 'Incubators',
    basePrice: 12000,
    fps: 56,
    image: require('../../../../img/Fish_Incubator.png'),
  },
  {
    ...baseUpgrade,
    name: 'Fish Factory',
    basePrice: 160000,
    fps: 226,
    image: require('../../../../img/Fish_Factory.png'),
  },
]);

export default upgradesValt;

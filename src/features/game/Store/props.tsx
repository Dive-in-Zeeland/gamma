import { atom } from 'jotai';

//Glibal couter
export const counterAtom = atom(0);

//Global FishPerSec
export const fishPerSecAtom = atom(0);

//Global singel press
export const press = atom(1);

//Different Upgrades - GLOBAL
export const Feeder = atom({
  name: 'Auto Feeders',
  basePrice: 15,
  consta: 0.1,
});
export const FisherMan = atom({
  name: 'Fisher Man',
  basePrice: 100,
  consta: 1,
});
export const FishFarm = atom({
  name: 'Fish Farm',
  basePrice: 1000,
  consta: 10,
});
export const Incubator = atom({
  name: 'Incubators',
  basePrice: 12000,
  consta: 56,
});
export const FishFactory = atom({
  name: 'Fish Factory',
  basePrice: 160000,
  consta: 226,
});

//Upgrade amount - GLOBAL
export const FeederAmount = atom(0);
export const FisherManAmount = atom(0);
export const FishFarmAmount = atom(0);
export const IncubatorAmount = atom(0);
export const FishFactoryAmount = atom(0);

//Upgrade price - Global
export const FeederPrice = atom(15);
export const FisherManPrice = atom(100);
export const FishFarmPrice = atom(1000);
export const IncubatorPrice = atom(12000);
export const FishFactoryPrice = atom(160000);

//Image Sets - GLOBAL
export const sets = atom({
  default: require('../../../../img/Fish_Default.png'),
  feeder: require('../../../../img/Fish_Feeder.png'),
  fisherman: require('../../../../img/Fish_Fisherman.png'),
  fishfarm: require('../../../../img/Fish_Fishfarm.png'),
  incubator: require('../../../../img/Fish_Incubator.png'),
  factory: require('../../../../img/Fish_Factory.png'),
});

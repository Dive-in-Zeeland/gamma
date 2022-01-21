import { ImageSourcePropType } from 'react-native';
import { proxy } from 'valtio';

const counterValt = proxy({
  value: 0,
  fps: 0,
  image: require('../../../../img/Fish_Default.png'),
  upgradesActive: 1,
  setImage(source: ImageSourcePropType) {
    this.image = source;
  },
  addOne() {
    this.value += 10000;
  },
  tick(ms: number) {
    this.value += this.fps / (1000 / ms);
  },
  substract(amount: number) {
    this.value -= amount;
  },
  addFps(amount: number) {
    this.fps += amount;
  },
  getIntegerValue() {
    return Math.floor(this.value);
  },
  getRoundedFps() {
    return Math.round((this.fps + Number.EPSILON) * 100) / 100;
  },
  activateMore() {
    this.upgradesActive += 1;
  },
});

export default counterValt;

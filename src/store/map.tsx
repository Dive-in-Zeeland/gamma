import { proxy } from 'valtio';

const defaultMapPosition = {
  latitude: 51.495142,
  longitude: 3.609632,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02,
};

const mapValt = proxy({
  position: {
    ...defaultMapPosition,
  },
  setPositionDefault() {
    this.setPosition(defaultMapPosition);
  },
  setPosition(position: typeof defaultMapPosition) {
    this.position = { ...this.position, ...position };
    this.updated += 1;
  },
  // Dirty fix to useEffect not updating if setPosition was the same
  // To fix we need to get rid of map store and (new) setPosition should call the map directly
  updated: 0,
});

export default mapValt;

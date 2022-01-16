import { atom } from 'jotai';

const mapPosition = {
  latitude: 51.495142,
  longitude: 3.609632,
  latitudeDelta: 0.02,
  longitudeDelta: 0.02,
};

const mapPositionAtom = atom(mapPosition);

export default mapPositionAtom;

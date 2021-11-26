import { atom } from "jotai";

const mapPosition = {
  latitude: 51.495142,
  longitude: 3.609632,
  latitudeDelta: 0.009,
  longitudeDelta: 0.009,
}

const mapPositionAtom = atom(mapPosition);

export default mapPositionAtom;
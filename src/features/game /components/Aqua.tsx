import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useSnapshot } from 'valtio';
import counterValt from '../store/counter';

const Aqua = () => {
  const counterSnap = useSnapshot(counterValt);

  return (
    <TouchableOpacity onPress={() => counterValt.addOne()}>
      <Image style={{ height: 250, width: 350 }} source={counterSnap.image} />
    </TouchableOpacity>
  );
};

export default Aqua;

import React,  { useState, useEffect }  from "react";
import { TouchableOpacity, Image } from "react-native";
import { useAtom } from "jotai";
import {
  FeederAmount,
  FisherManAmount,
  FishFarmAmount,
  IncubatorAmount,
  FishFactoryAmount,
  sets,
  counterAtom,
  press,
  fishPerSecAtom,
} from "../Store/props";

export default function ClickerBrain() {
  //Counter
  const [counter, setCounter] = useAtom(counterAtom);

  //Click
  const [clicks, setClicks] = useAtom(press);

  //Fish Per Second
  const [fishPerSec, setFishPerSec] = useAtom(fishPerSecAtom);

  //Feeders
  const [FeederCount, setFeederCount] = useAtom(FeederAmount);

  //FisherMan
  const [FisherManCount, setFisherManCount] = useAtom(FisherManAmount);

  //Auto FishFarm
  const [FishFarmCount, setFishFarmCount] = useAtom(FishFarmAmount);

  //Auto Fish Incuabtor
  const [IncubatorCount, setIncubatorCount] = useAtom(IncubatorAmount);

  //Fish Facory
  const [FishFactoryCount, setFishFactoryCount] = useAtom(FishFactoryAmount);

  const [state, setState] = useAtom(sets);
  const [image, setImage] = useState(state.default);

  useEffect(() => {
    const countTimer = setInterval(() => {
      setCounter((old) => old + fishPerSec / 20);
      checks();
    }, 50);
    //Unmount
    return function cleanup() {
      clearInterval(countTimer);
    };
  }, [fishPerSec]);

  //Used to select correct image
  let upgrades = [
    {
      image: state.feeder,
      count: FeederCount,
      passed: false,
    },
    {
      image: state.fisherman,
      count: FisherManCount,
      passed: false,
    },
    {
      image: state.fishfarm,
      count: FishFarmCount,
      passed: false,
    },
    {
      image: state.incubator,
      count: IncubatorCount,
      passed: false,
    },
    {
      image: state.factory,
      count: FishFactoryCount,
      passed: false,
    },
  ];

  function checks() {
    upgrades.forEach((element) => {
      imageChange(element);
    });
  }

  function imageChange(element) {
    if (!element.passed) {
      if (element.count > 0) {
        setImage(element.image);
        element.passed = true;
      }
    }
  }

  return (
    <TouchableOpacity
      style={{ color: "green" }}
      disabled={false}
      onPress={() => {
        setCounter((old) => old + clicks);
      }}
    >
      <Image style={{ height: 250, width: 350 }} source={image} />
    </TouchableOpacity>
  );
}

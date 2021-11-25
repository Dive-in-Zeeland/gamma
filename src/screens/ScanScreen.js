import React, { useState, useEffect } from "react";
import { useAtom } from 'jotai'
import tokensAtom from '../store/tokens';
import { BarCodeScanner } from "expo-barcode-scanner";
import PermissionView from "../components/big/forScanScreen/PermissionView";
import ScanningView from "../components/big/forScanScreen/ScanningView";
import AfterScanView from "../components/big/forScanScreen/AfterScanView";


const ScanScreen = ({ navigation: nav }) => {

  const [isCameraAllowed, setIsCameraAllowed] = useState(null);
  const [isScanned, setIsScanned] = useState(false);
  const [isScanValid, setIsScanValid] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [postAnswerMsg, setPostAnswerMsg] = useState("Not correct!");
  const [tokens, setTokens] = useAtom(tokensAtom);
  const [scannedName, setScannedName] = useState('');

  async function askForCameraPermission() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setIsCameraAllowed(status === "granted");
  }

  function trySetToken(name) {
    if (!(name in tokens)) return false;
    setScannedName(name);
    return true;
  }

  function reset() {
    setIsScanValid(false);
    setIsScanned(false);
    setIsAnswered(false);
  }

  function handleBarCodeScanned({ data: scannedText }) {
    setIsScanValid(trySetToken(scannedText));
    setIsScanned(true);
    console.log(scannedText);
  }

  function handleAnswerOptionClick(isCorrect) {
    if (isCorrect) {
      setPostAnswerMsg("Your answer is correct!");
      setTokens(prev => ({
        ...prev, [scannedName]: {
          ...tokens[scannedName],
          isCollected: true,
        }
      }));
    } else {
      setPostAnswerMsg("Your answer is incorrect!");
    }
    setIsAnswered(true);
  }

  const theProps = {
    isAnswered,
    postAnswerMsg,
    reset,
    scannedToken: tokens[scannedName],
    handleAnswerOptionClick,
    askForCameraPermission,
    isScanned,
    handleBarCodeScanned,
    nav,
  }

  useEffect(() => {
    askForCameraPermission();
  }, []);

  if (!isCameraAllowed) {
    return (
      <PermissionView {...theProps} />
    );
  }
  else if (!isScanValid) {
    return <ScanningView {...theProps} />;
  }
  else {
    return <AfterScanView {...theProps} />;
  }
}

export default ScanScreen;

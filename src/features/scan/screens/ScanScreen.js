import React, { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { BarCodeScanner } from 'expo-barcode-scanner';

import tokensAtom from 'store/tokens';
import PermissionView from 'features/scan/comps/PermissionView';
import ScanningView from 'features/scan/comps/ScanningView';
import AfterScanView from 'features/scan/comps/AfterScanView';
import ContentView from 'features/scan/comps/ContentView';

const ScanScreen = ({ navigation: nav }) => {
  const [isCameraAllowed, setIsCameraAllowed] = useState(null);
  const [isScanned, setIsScanned] = useState(false);
  const [isScanValid, setIsScanValid] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [postAnswerMsg, setPostAnswerMsg] = useState('Not correct!');
  const [tokens, setTokens] = useAtom(tokensAtom);
  const [scannedName, setScannedName] = useState('');
  const [answerQuestion, setAnswerQuestion] = useState(false);

  async function askForCameraPermission() {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setIsCameraAllowed(status === 'granted');
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
    setAnswerQuestion(false);
  }

  function answerQuestionNow() {
    setAnswerQuestion(true);
  }

  function cancelQuestion() {
    setAnswerQuestion(false);
  }

  function handleBarCodeScanned({ data: scannedText }) {
    setIsScanValid(trySetToken(scannedText));
    setIsScanned(true);
  }

  function handleAnswerOptionClick(isCorrect) {
    if (isCorrect) {
      setPostAnswerMsg('Your answer is correct!');
      setTokens((prev) => ({
        ...prev,
        [scannedName]: {
          ...tokens[scannedName],
          isCollected: true,
        },
      }));
    } else {
      setPostAnswerMsg('Your answer is incorrect!');
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
    answerQuestionNow,
    cancelQuestion,
  };

  useEffect(() => {
    void askForCameraPermission();
  }, []);

  if (!isCameraAllowed) {
    return <PermissionView {...theProps} />;
  } else if (!isScanValid) {
    return <ScanningView {...theProps} />;
  } else {
    if (answerQuestion) {
      return <AfterScanView {...theProps} />;
    } else {
      return <ContentView {...theProps} />;
    }
  }
};

export default ScanScreen;

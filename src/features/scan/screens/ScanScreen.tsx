import React, { useState } from 'react';
import { useAtom } from 'jotai';

import tokensAtom from 'store/tokens';
import ScanningView, {
  ScanningViewProps,
} from 'features/scan/comps/ScanningView';
import AfterScanView, {
  AfterScanViewProps,
} from 'features/scan/comps/AfterScanView';
import ContentView, { ContentViewProps } from 'features/scan/comps/ContentView';

import { Routes } from 'constants/navigation';
import { ScanNavigatorProp } from 'nav/ScanNavigator';
import { useNavigation } from '@react-navigation/core';

const ScanScreen = () => {
  const navigation = useNavigation<ScanNavigatorProp<Routes.Scan>>();

  const [isScanned, setIsScanned] = useState(false);
  const [isScanValid, setIsScanValid] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [postAnswerMsg, setPostAnswerMsg] = useState('Not correct!');
  const [tokens, setTokens] = useAtom(tokensAtom);
  const [scannedName, setScannedName] = useState('');
  const [answerQuestion, setAnswerQuestion] = useState(false);

  function trySetToken(name: string) {
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

  /////////

  const onHelperPress: ScanningViewProps['onHelperPress'] = () => {
    navigation.navigate(Routes.ScanHelp);
  };

  const onBarCodeScanned: ScanningViewProps['onBarCodeScanned'] = ({
    data: scannedText,
  }) => {
    setIsScanValid(trySetToken(scannedText));
    setIsScanned(true);
    console.log('qr scanned', scannedText);
  };

  const onScanAgainPressed: ScanningViewProps['onScanAgainPressed'] = () => {
    reset();
  };

  if (!isScanValid)
    return (
      <ScanningView
        onHelperPress={onHelperPress}
        onBarCodeScanned={onBarCodeScanned}
        onScanAgainPressed={onScanAgainPressed}
        isScanned={isScanned}
      />
    );

  //////////

  const onAnswerOptionClick: AfterScanViewProps['onAnswerOptionClick'] = (
    isCorrect,
  ) => {
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
  };

  const onCancelQuestionPress: AfterScanViewProps['onCancelQuestionPress'] =
    () => {
      setAnswerQuestion(false);
    };

  const onBackToCameraPressed: AfterScanViewProps['onBackToCameraPressed'] =
    () => {
      reset();
    };

  if (answerQuestion)
    return (
      <AfterScanView
        isAnswered={isAnswered}
        postAnswerMsg={postAnswerMsg}
        onBackToCameraPressed={onBackToCameraPressed}
        scannedToken={tokens[scannedName]}
        onAnswerOptionClick={onAnswerOptionClick}
        onCancelQuestionPress={onCancelQuestionPress}
      />
    );

  //////////

  const onAnswerQuestionPress: ContentViewProps['onAnswerQuestionPress'] =
    () => {
      setAnswerQuestion(true);
    };

  return (
    <ContentView
      onAnswerQuestionPress={onAnswerQuestionPress}
      reset={reset}
      token={tokens[scannedName]}
    />
  );
};

export default ScanScreen;

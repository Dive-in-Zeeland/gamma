import React from 'react';
import styled from "styled-components";
import { View, Button, Text } from 'react-native'



const ScoreView = ({
  postAnswerMsg,
  reset,
}) => (
  <View>
    <Text>{postAnswerMsg}</Text>
    <Button
      color="#000000"
      onPress={() => reset()}
      title="Back to camera"
    ></Button>
  </View>
)

export default ScoreView;

import { StyleSheet } from 'react-native'
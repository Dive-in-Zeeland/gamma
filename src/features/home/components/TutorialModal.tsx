import React from 'react';
import { Text, ScrollView, Image, View } from 'react-native';
import ColorModal, { IModal } from 'components/ColorModal';

const TutorialModal: React.FC<IModal> = ({ isVisible, close }) => {
  return (
    <ColorModal isVisible={isVisible} close={close} title="Tutorial">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
        <View
          style={{
            backgroundColor: '#617bce',
            height: 100,
            width: '100%',
            borderRadius: 15,
            marginTop: 5,
            marginBottom: 5,
            padding: 10,
          }}
        >
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
            This tutorial is short guide on how to use our application to
            collect tokens, and in the end receive a free toy, to remember your
            stay at our Experience center.
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#617bce',
            height: 150,
            width: '100%',
            borderRadius: 15,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              position: 'absolute',
              left: '5%',
              top: 4,
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            1. step
          </Text>
          <View
            style={{
              position: 'absolute',
              left: '5%',
              bottom: '10%',
              top: '20%',
              backgroundColor: 'white',
              height: '72%',
              width: '90%',
              borderRadius: 13,
              padding: 12,
            }}
          >
            <Text
              style={{ color: '#617bce', fontSize: 15, fontWeight: 'bold' }}
            >
              On the map find the nearest token to you, and proceed to walk to
              it!
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#617bce',
            height: 150,
            width: '100%',
            borderRadius: 15,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              position: 'absolute',
              left: '5%',
              top: 4,
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            2. step
          </Text>
          <View
            style={{
              position: 'absolute',
              left: '5%',
              bottom: '10%',
              top: '20%',
              backgroundColor: 'white',
              height: '72%',
              width: '90%',
              borderRadius: 13,
              padding: 12,
            }}
          >
            <Text
              style={{ color: '#617bce', fontSize: 15, fontWeight: 'bold' }}
            >
              Once you have found a stand with the QR code, scan it and wait for
              the screen to load.
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#617bce',
            height: 150,
            width: '100%',
            borderRadius: 15,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              position: 'absolute',
              left: '5%',
              top: 4,
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            3. step
          </Text>
          <View
            style={{
              position: 'absolute',
              left: '5%',
              bottom: '10%',
              top: '20%',
              backgroundColor: 'white',
              height: '72%',
              width: '90%',
              borderRadius: 13,
              padding: 12,
            }}
          >
            <Text
              style={{ color: '#617bce', fontSize: 15, fontWeight: 'bold' }}
            >
              Once the screen has been loaded you will see some reading material
              about the place you are currently stand in. Please read it!
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#617bce',
            height: 150,
            width: '100%',
            borderRadius: 15,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              position: 'absolute',
              left: '5%',
              top: 4,
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            4. step
          </Text>
          <View
            style={{
              position: 'absolute',
              left: '5%',
              bottom: '10%',
              top: '20%',
              backgroundColor: 'white',
              height: '72%',
              width: '90%',
              borderRadius: 13,
              padding: 12,
            }}
          >
            <Text
              style={{ color: '#617bce', fontSize: 15, fontWeight: 'bold' }}
            >
              In order to collect the token you have to answer a short question.
              Dont worry this question is about the text you read!
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#617bce',
            height: 150,
            width: '100%',
            borderRadius: 15,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              position: 'absolute',
              left: '5%',
              top: 4,
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            5. step
          </Text>
          <View
            style={{
              position: 'absolute',
              left: '5%',
              bottom: '10%',
              top: '20%',
              backgroundColor: 'white',
              height: '72%',
              width: '90%',
              borderRadius: 13,
              padding: 12,
            }}
          >
            <Text
              style={{ color: '#617bce', fontSize: 15, fontWeight: 'bold' }}
            >
              Yeah! You have answered the question and you got the token. Dont
              worry if you got it wrong, you can always try again.
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#617bce',
            height: 150,
            width: '100%',
            borderRadius: 15,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              position: 'absolute',
              left: '5%',
              top: 4,
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            6. step
          </Text>
          <View
            style={{
              position: 'absolute',
              left: '5%',
              bottom: '10%',
              top: '20%',
              backgroundColor: 'white',
              height: '72%',
              width: '90%',
              borderRadius: 13,
              padding: 12,
            }}
          >
            <Text
              style={{ color: '#617bce', fontSize: 15, fontWeight: 'bold' }}
            >
              Repeat steps from 1. - 5. until the progress bar in home page is
              full, once its full you have completed the journey!
            </Text>
          </View>
        </View>
      </ScrollView>
    </ColorModal>
  );
};

export default TutorialModal;

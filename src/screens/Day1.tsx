import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import YouTube from 'react-native-youtube';
import Modal from 'react-native-modal';
const Day1 = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <Text style={styles.headerText}>Day</Text>
          <Text style={styles.headerText1}>{'1'}</Text>
        </View>

        <View style={styles.cards}>
          <View style={styles.threeCards}>
            <View
              style={{
                backgroundColor: '#FF8F3E',
                width: '45%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 15,
                  fontWeight: '600',
                  paddingLeft: 20,
                  color: '#000000',
                }}>
                RIGHT LUNGE KNEE HOP
              </Text>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 10,
                  fontWeight: '500',
                  color: '#FFFFFF',
                  paddingLeft: 20,
                }}>
                10-15 min
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                width: '40%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 90, height: 70}}
                source={require('../assets/ExcerciseGirl.png')}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#F8F8F8',
                width: '15%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
              }}
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=wrwwXE_x-pQ')
              }>
              <View>
                <Image
                  style={{width: 25, height: 26}}
                  source={require('../assets/playBtn.png')}
                />

                <Text style={{fontSize: 10}}>Play</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.cards, {marginTop: 10}]}>
          <View style={styles.threeCards}>
            <View
              style={{
                backgroundColor: '#FF8F3E',
                width: '45%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 15,
                  fontWeight: '600',
                  paddingLeft: 20,
                  color: '#000000',
                }}>
                Scissors 1
              </Text>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 10,
                  fontWeight: '500',
                  color: '#FFFFFF',
                  paddingLeft: 20,
                }}>
                10-15 min
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                width: '40%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 90, height: 70}}
                source={require('../assets/ExcerciseGirl.png')}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#F8F8F8',
                width: '15%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
              }}
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=IBS84c5uA_A')
              }>
              <View>
                <Image
                  style={{width: 25, height: 26}}
                  source={require('../assets/playBtn.png')}
                />
                <Text style={{fontSize: 10}}>Play</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.cards, {marginTop: 10}]}>
          <View style={styles.threeCards}>
            <View
              style={{
                backgroundColor: '#FF8F3E',
                width: '45%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 15,
                  fontWeight: '600',
                  paddingLeft: 20,
                  color: '#000000',
                }}>
                Scissors 2
              </Text>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 10,
                  fontWeight: '500',
                  color: '#FFFFFF',
                  paddingLeft: 20,
                }}>
                10-15 min
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                width: '40%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 90, height: 70}}
                source={require('../assets/ExcerciseGirl.png')}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#F8F8F8',
                width: '15%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
              }}
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=ap4DqnKmrqc')
              }>
              <View>
                <Image
                  style={{width: 25, height: 26}}
                  source={require('../assets/playBtn.png')}
                />
                <Text style={{fontSize: 10}}>Play</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.cards, {marginTop: 10}]}>
          <View style={styles.threeCards}>
            <View
              style={{
                backgroundColor: '#FF8F3E',
                width: '45%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 15,
                  fontWeight: '600',
                  paddingLeft: 20,
                  color: '#000000',
                }}>
                Scissors 3
              </Text>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 10,
                  fontWeight: '500',
                  color: '#FFFFFF',
                  paddingLeft: 20,
                }}>
                10-15 min
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                width: '40%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 90, height: 70}}
                source={require('../assets/ExcerciseGirl.png')}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#F8F8F8',
                width: '15%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
              }}
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=0vDI5aU402c')
              }>
              <View>
                <Image
                  style={{width: 25, height: 26}}
                  source={require('../assets/playBtn.png')}
                />
                <Text style={{fontSize: 10}}>Play</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.cards, {marginTop: 10}]}>
          <View style={styles.threeCards}>
            <View
              style={{
                backgroundColor: '#FF8F3E',
                width: '45%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 15,
                  fontWeight: '600',
                  paddingLeft: 20,
                  color: '#000000',
                }}>
                Scissors Arms
              </Text>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 10,
                  fontWeight: '500',
                  color: '#FFFFFF',
                  paddingLeft: 20,
                }}>
                10-15 min
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                width: '40%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 90, height: 70}}
                source={require('../assets/ExcerciseGirl.png')}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#F8F8F8',
                width: '15%',
                height: 90,
                justifyContent: 'center',
                alignSelf: 'center',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
              }}
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=Cilm0WNRdCo')
              }>
              <View>
                <Image
                  style={{width: 25, height: 26}}
                  source={require('../assets/playBtn.png')}
                />
                <Text style={{fontSize: 10}}>Play</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Bottom')}>
          <Image style={styles.icon} source={require('../assets/user.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Triangle')}>
          <Image
            style={styles.icon}
            source={require('../assets/triangle.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Post')}>
          <View style={styles.centerBtn}>
            <Image
              style={styles.centerIcon}
              source={require('../assets/center1.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Image
            style={styles.icon}
            source={require('../assets/notification.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image
            style={styles.icon}
            source={require('../assets/setting.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Day1;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardContainer: {
    flexDirection: 'row',

    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  cards: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: 20,
    marginRight: 20,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 10,
  },
  threeCards: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  progressText: {
    color: 'black',
    paddingTop: 20,
    paddingLeft: 15,
    paddingBottom: 5,
    fontWeight: '700',
  },
  daysCompleted: {
    width: '44%',
    height: 50,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#F7AD45',
    borderRadius: 5,
    alignItems: 'center',
  },
  daysRemaining: {
    width: '44%',
    height: 50,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#F7AD45',
    borderRadius: 5,
    alignItems: 'center',
  },
  daysCompletedText: {
    color: 'black',
    fontSize: 10,
    width: 60,
    justifyContent: 'center',
  },
  btn: {
    width: 55,
    height: 55,
    marginTop: 10,
    backgroundColor: '#0000000D',
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#0000000D',
  },
  container: {
    backgroundColor: '#5E3B63',
    width: '100%',
    height: 75,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  icon: {
    width: 25,
    height: 25,
    top: -5,
  },
  headerText: {
    fontSize: 30,
    marginTop: 5,
    color: '#5E3B63',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Gotham',
  },
  headerText1: {
    fontSize: 30,
    marginTop: 5,
    color: '#5E3B63',
    fontWeight: '800',
    textAlign: 'center',
    marginLeft: 5,
  },

  centerBtn: {
    backgroundColor: 'white',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    top: -20,
  },
  centerIcon: {
    width: 40,
    height: 40,
  },
  startBtn: {
    width: '91%',
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: '#D26E25',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  startText: {
    color: '#FFFFFF',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

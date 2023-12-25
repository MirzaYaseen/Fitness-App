import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const BottomTab = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <View>
              <Image
                style={styles.cardImg}
                source={require('../assets/book.png')}
              />
              <Text style={styles.cardText}>Self Help Journal</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View>
              <Image
                style={styles.diary}
                source={require('../assets/diary.png')}
              />
              <Text style={styles.cardText}>Diary</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('WorkOut')}>
            <View>
              <Image style={styles.gym} source={require('../assets/gym.png')} />
              <Text style={styles.cardText}>Workout</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View>
              <Image
                style={styles.flower}
                source={require('../assets/flower.png')}
              />
              <Text style={styles.cardText}>Breath</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <View>
              <Image
                style={styles.rainbow}
                source={require('../assets/rainbow.png')}
              />
              <Text style={styles.cardText}>Mood Tracker</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View>
              <Image
                style={styles.dotsThrow}
                source={require('../assets/dotsThrow.png')}
              />
              <Text style={styles.cardText}>Goals</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer2}>
          <TouchableOpacity style={styles.card}>
            <View>
              <Image
                style={styles.call}
                source={require('../assets/call.png')}
              />
              <Text style={styles.cardText}>Help Line</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View>
              <Image
                style={styles.progress}
                source={require('../assets/progress.png')}
              />
              <Text style={styles.cardText}>My Progress</Text>
            </View>
          </TouchableOpacity>
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

export default BottomTab;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
  },
  cardContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
    marginBottom: 15,
  },

  card: {
    width: '49%',
    height: 150,
    backgroundColor: '#EFE2E1',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 5,
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
  cardImg: {
    width: 50,
    height: 75,
    alignSelf: 'center',
  },
  diary: {
    width: 55,
    height: 60,
    marginTop: 10,
    alignSelf: 'center',
  },
  gym: {
    width: 68,
    height: 65,
    alignSelf: 'center',
  },
  flower: {
    width: 68,
    height: 65,
    alignSelf: 'center',
  },
  rainbow: {
    width: 90,
    height: 50,
    alignSelf: 'center',
  },
  dotsThrow: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  call: {
    width: 55,
    height: 55,
    marginTop: 5,
    alignSelf: 'center',
  },
  progress: {
    width: 56,
    height: 60,
    alignSelf: 'center',
  },
  cardText: {
    fontSize: 13,
    marginTop: 10,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
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
});

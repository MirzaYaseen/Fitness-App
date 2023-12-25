import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

const PostExercise = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <Text style={styles.headerText}>Coming Soon</Text>
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

export default PostExercise;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
    fontSize: 25,
    marginTop: 5,
    color: '#5E3B63',
    fontWeight: '400',
    fontFamily: 'Gotham',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerText1: {
    fontSize: 25,
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
});

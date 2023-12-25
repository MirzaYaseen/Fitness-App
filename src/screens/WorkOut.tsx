import React, {useState} from 'react';
import BottomTab from './BottomTab';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const WorkOut = ({navigation}) => {
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDaySelection = day => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const daysCompletedCount = selectedDays.length;
  const daysRemainingCount = 30 - daysCompletedCount;
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <Text style={styles.headerText}>Level</Text>
          <Text style={styles.headerText1}>{'1'}</Text>
        </View>

        <View style={styles.buttonContainers}>
          {[...Array(30).keys()].map(day => (
            <TouchableOpacity
              key={day}
              onPress={() => toggleDaySelection(day + 1)}>
              <View
                style={[
                  styles.btn,
                  selectedDays.includes(day + 1) && {backgroundColor: 'purple'},
                ]}>
                <Text
                  style={[
                    styles.day,
                    selectedDays.includes(day + 1) && styles.daySelected,
                  ]}>
                  {day + 1}
                </Text>
                <Text
                  style={[
                    styles.dayText,
                    selectedDays.includes(day + 1) && styles.daySelected,
                  ]}>
                  Day
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View>
          <Text style={styles.progressText}>Progress</Text>
          <View style={styles.progressContainer}>
            <View style={styles.daysCompleted}>
              <Text style={styles.daysCompletedText}>Days Completed</Text>
              <Text style={{fontSize: 25, fontWeight: '700', color: 'black'}}>
                {daysCompletedCount}
              </Text>
            </View>
            <View style={styles.daysRemaining}>
              <Text style={styles.daysCompletedText}>Days Remaining</Text>
              <Text style={{fontSize: 25, fontWeight: '700', color: 'black'}}>
                {daysRemainingCount}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.startBtn} onPress={()=>navigation.navigate('Day1')}>
            <Text style={styles.startText}>Start</Text>
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

export default WorkOut;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardContainer: {
    flexDirection: 'row',

    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  buttonContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    flexWrap: 'wrap',
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

  day: {
    color: 'black',
    fontWeight: '700',
    fontSize: 18,
  },
  dayText: {
    color: 'black',
  },
  daySelected: {
    color: 'white',
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
    textAlign: 'center',
    fontFamily: 'Gotham',
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
});

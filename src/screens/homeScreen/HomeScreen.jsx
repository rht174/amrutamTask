import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import styles from './Styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from '../../constants/Icons';

const HomeScreen = () => {
  const options = {weekday: 'long', day: 'numeric', month: 'short'};
  const currentDate = new Date().toLocaleString('en-US', options);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topBar}>
        <View style={styles.drawerIcon}>
          <Image
            source={Icons.menu}
            style={[
              styles.iconStyle,
              {tintColor: 'green', width: 40, height: 40},
            ]}
          />
        </View>
        <View style={styles.topNavigation}>
          <View style={styles.icons}>
            <Image source={Icons.search} style={styles.iconStyle} />
          </View>
          <View style={styles.icons}>
            <Image source={Icons.bag} style={styles.iconStyle} />
          </View>
          <View style={styles.icons}>
            <Image
              source={Icons.user}
              style={[
                styles.iconStyle,
                {tintColor: null, width: 40, height: 40},
              ]}
            />
          </View>
        </View>
      </View>
      <ScrollView style={styles.mainScrollView}>
        <View style={styles.dateAndGreet}>
          <Text style={styles.date}>{currentDate}</Text>
          <Text style={styles.greet}>Namaste, User</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

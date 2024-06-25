import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const HideContent = () => {
  return (
    <View>
      <Text style={styles.balance}>*****</Text>
      <View style={styles.transactions}>
        <View style={styles.pixContainer}>
          <View style={styles.pixValueBox}>
            <Text style={styles.pixReciveSend}>*****</Text>
          </View>
        </View>
        <View style={styles.pixDateBox}>
          <Text style={styles.pixDate}>*****</Text>
        </View>
      </View>
      <View style={styles.transactions}>
        <View style={styles.pixContainer}>
          <View style={styles.pixValueBox}>
            <Text style={styles.pixReciveSend}>*****</Text>
          </View>
        </View>
        <View style={styles.pixDateBox}>
          <Text style={styles.pixDate}>*****</Text>
        </View>
      </View>
      <View style={styles.transactions}>
        <View style={styles.pixContainer}>
          <View style={styles.pixValueBox}>
            <Text style={styles.pixReciveSend}>*****</Text>
          </View>
        </View>
        <View style={styles.pixDateBox}>
          <Text style={styles.pixDate}>*****</Text>
        </View>
      </View>
    </View>
  );
};

export default HideContent;

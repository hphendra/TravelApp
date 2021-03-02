import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

// ICON
import LoveIcon from '../../assets/icons/love.svg';
import LaIcon from '../../assets/icons/left-arrow.svg';
import StarIcon from '../../assets/icons/star.svg';
import CloudIcon from '../../assets/icons/cloud.svg';
import ApIcon from '../../assets/icons/airplane.svg';

const Order = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.TopMenu}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
          <View style={styles.IsiTopMenu}>
            <LaIcon width={15} height={15} />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.IsiTopMenu}>
          <LoveIcon width={17} height={17} />
        </View>
      </View>
      <Image
        source={{
          uri:
            'https://live.staticflickr.com/7732/26271228204_21fe357527_b.jpg',
        }}
        style={styles.ImageOrder}
      />
      <View style={styles.BoxInfo}>
        <View style={styles.IsiBoxInfo}>
          <Text style={styles.TextInfo}>Tianmen Mountain</Text>
          <View style={styles.DetailInfo}>
            <StarIcon width={15} height={15} />
            <Text style={styles.TextDetailInfo}>4.5</Text>
            <CloudIcon width={15} height={15} />
            <Text style={styles.TextDetailInfo}>17 °C</Text>
            <ApIcon width={15} height={15} />
            <Text style={styles.TextDetailInfo}>15 Hrs</Text>
          </View>
        </View>
      </View>
      <View style={styles.BoxSelectType}>
        <View style={styles.SelectType}>
          <View style={styles.IsiSelectType}>
            <Text style={styles.TextSelectType}>Description</Text>
            <View style={styles.DotSelectType_active} />
          </View>
          <View style={styles.IsiSelectType}>
            <Text style={styles.TextSelectType}>Reviews</Text>
          </View>
          <View style={styles.IsiSelectType}>
            <Text style={styles.TextSelectType}>About</Text>
          </View>
        </View>
        <Text style={styles.TextDeskripsi}>
          The stunning views including 'Heaven's Door' and the 99 Bends,
          vertical cliffs, the thrilling cliff-hanging walkway and glass
          skywalk, and the world's longest cable car ride, make it
          unquestionably one of the best mountains to visit in China.
        </Text>
        <View style={styles.BoxBook}>
          <Text style={styles.TextBook}>
            $300/<Text style={{color: '#e67e22', fontSize: 14}}>Person</Text>
          </Text>
          <View style={styles.ButtonBook}>
            <Text style={styles.TextButtonBook}>Book A Trip</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    flex: 1,
  },
  ImageOrder: {
    height: 400,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  TopMenu: {
    width: '100%',
    // backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  IsiTopMenu: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    marginHorizontal: 30,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoxInfo: {
    // backgroundColor: 'red',
    marginTop: -60,
  },
  IsiBoxInfo: {
    // height: 120,
    backgroundColor: '#fff',
    marginHorizontal: 50,
    elevation: 2,
    borderRadius: 25,
    padding: 27,
  },
  TextInfo: {
    fontSize: 23,
    color: '#303030',
    fontWeight: '700',
  },
  DetailInfo: {
    // backgroundColor: 'red',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextDetailInfo: {
    fontSize: 14,
    marginLeft: 5,
    marginRight: 20,
  },
  BoxSelectType: {
    padding: 30,
  },
  SelectType: {
    // marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  IsiSelectType: {
    // backgroundColor: 'red',
    alignItems: 'center',
    marginBottom: 10,
  },
  TextSelectType_active: {
    fontSize: 17,
    fontWeight: '700',
    color: '#e67e22',
  },
  DotSelectType_active: {
    width: '100%',
    height: 3,
    backgroundColor: '#e67e22',
    borderRadius: 10,
    marginTop: 3,
  },
  TextSelectType: {
    fontSize: 17,
    fontWeight: '700',
    color: '#303030',
  },
  TextDeskripsi: {
    color: '#505050',
    fontSize: 14,
    marginTop: 10,
    lineHeight: 19,
  },
  BoxBook: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: 55,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextBook: {
    fontSize: 21,
    color: '#303030',
    fontWeight: '700',
  },
  ButtonBook: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#4b8afe',
    borderRadius: 17,
  },
  TextButtonBook: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});

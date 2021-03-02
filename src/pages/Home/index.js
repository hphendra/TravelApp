import React from 'react';
import {
  Image,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

// ICON
import LokasiIcon from '../../assets/icons/lokasi.svg';
import MenuIcon from '../../assets/icons/menu.svg';
import ArrowDownIcon from '../../assets/icons/down.svg';
import StarIcon from '../../assets/icons/star.svg';
import MoreIcon from '../../assets/icons/more.svg';
import LoveIcon from '../../assets/icons/love.svg';

// ICON BOTTOM NAVIGATION
import HomeIcon from '../../assets/icons/home.svg';
import SearchIcon from '../../assets/icons/search.svg';
import BookmarkIcon from '../../assets/icons/bookmark.svg';
import NotifIcon from '../../assets/icons/notification.svg';

const ListPlaces = (lp) => {
  return (
    <View style={styles.ListPlaces}>
      <View style={styles.LovePlaces}>
        <LoveIcon width={18} height={18} />
      </View>
      <Image
        source={{
          uri: lp.gambar,
        }}
        style={styles.ImagePlaces}
      />
      <View style={styles.BoxDescPlaces}>
        <View style={styles.IsiDescPlaces}>
          <Text style={styles.TextDescPlaces}>{lp.NamaPlace}</Text>
          <Text style={styles.TextDescPlaces2}>{lp.DescPlace}</Text>
          <View style={styles.BoxRating}>
            <StarIcon width={13} height={13} />
            <Text style={styles.TextRating}>{lp.RatingPlace}</Text>
          </View>
        </View>
        <MoreIcon width={15} height={15} marginTop={6} />
      </View>
    </View>
  );
};

const Home = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Home}>
          <View style={styles.Header}>
            <Image
              source={{
                uri:
                  'https://be54396e8bd72af92409-03005553b1375ef1efc4f384a5c102cb.ssl.cf3.rackcdn.com/54/7b/193746_d67951adc3b64deda5b36101dfc5dec1.jpg',
              }}
              style={styles.FotoProfile}
            />
            <View style={styles.LokasiUser}>
              <LokasiIcon width={15} height={15} />
              <Text style={styles.TextLokasi}>Shangai, China</Text>
            </View>
            <View style={styles.BoxMenu}>
              <MenuIcon width={20} height={20} />
            </View>
          </View>
          <View style={styles.Explore}>
            <Text style={styles.TextExplore}>
              Explore <Text style={{color: '#4b8afe'}}>China</Text>
            </Text>
            {/* <ArrowDownIcon width={18} height={18} /> */}
          </View>
          <View style={styles.SelectType}>
            <View style={styles.IsiSelectType}>
              <Text style={styles.TextSelectType_active}>Top Places</Text>
              <View style={styles.DotSelectType_active} />
            </View>
            <View style={styles.IsiSelectType}>
              <Text style={styles.TextSelectType}>Trending</Text>
            </View>
            <View style={styles.IsiSelectType}>
              <Text style={styles.TextSelectType}>Winter</Text>
            </View>
            <View style={styles.IsiSelectType}>
              <Text style={styles.TextSelectType}>Summer</Text>
            </View>
          </View>
          <ListPlaces
            gambar="https://live.staticflickr.com/7732/26271228204_21fe357527_b.jpg"
            NamaPlace="Tianmen Mountain"
            DescPlace="South China"
            RatingPlace="4.5"
          />
          <ListPlaces
            gambar="https://www.wallpapertip.com/wmimgs/229-2296107_china-great-wall-of-china-wallpaper.jpg"
            NamaPlace="The Great Wall"
            DescPlace="South China"
            RatingPlace="4.5"
          />
        </View>
      </ScrollView>
      <View style={styles.BottomNavigation}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Order')}>
          <View style={styles.IsiBN_active}>
            <HomeIcon width={19} height={19} />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.IsiBN}>
          <SearchIcon width={19} height={19} />
        </View>
        <View style={styles.IsiBN}>
          <BookmarkIcon width={19} height={19} />
        </View>
        <View style={styles.IsiBN}>
          <NotifIcon width={19} height={19} />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Home: {
    padding: 30,
    flex: 1,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  FotoProfile: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  LokasiUser: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextLokasi: {
    fontSize: 16,
    marginLeft: 7,
    color: '#303030',
  },
  BoxMenu: {
    width: 45,
    height: 45,
    backgroundColor: '#f7f8fd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Explore: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextExplore: {
    fontSize: 30,
    fontWeight: '700',
    color: '#303030',
    marginRight: 15,
  },
  SelectType: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  IsiSelectType: {
    // backgroundColor: 'red',
    alignItems: 'center',
    marginBottom: 10,
  },
  TextSelectType_active: {
    fontSize: 15,
    fontWeight: '700',
    color: '#4b8afe',
  },
  DotSelectType_active: {
    width: '80%',
    height: 3,
    backgroundColor: '#4b8afe',
    borderRadius: 10,
    marginTop: 5,
  },
  TextSelectType: {
    fontSize: 15,
    fontWeight: '700',
    color: '#505050',
  },
  ListPlaces: {
    marginTop: 15,
  },
  LovePlaces: {
    width: 35,
    height: 35,
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 1,
    right: 0,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImagePlaces: {
    height: 180,
    borderRadius: 20,
  },
  BoxDescPlaces: {
    flexDirection: 'row',
    margin: 10,
  },
  IsiDescPlaces: {
    flex: 1,
  },
  TextDescPlaces: {
    fontSize: 18,
    color: '#303030',
    fontWeight: '700',
  },
  TextDescPlaces2: {
    fontSize: 15,
    color: '#303030',
    marginTop: 4,
  },
  BoxRating: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextRating: {
    fontWeight: '700',
    fontSize: 13,
    color: '#505050',
    marginLeft: 5,
  },

  // BOTTOM NAVIGATION
  BottomNavigation: {
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderColor: '#f1f1f1',
    borderTopWidth: 1,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  IsiBN_active: {
    width: 40,
    height: 40,
    backgroundColor: '#4b8afe',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IsiBN: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

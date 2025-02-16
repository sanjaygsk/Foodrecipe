import {Image, ScrollView, StatusBar, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Home = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        className="space-y-6 pt-14">
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={require('../../assets/logo.png')}
            style={{height: hp(5), width: hp(5.5)}}
          />
          
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

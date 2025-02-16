import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {View, Image, StatusBar, Text} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Welcome = () => {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  const navigation = useNavigation();

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;

    setTimeout(() => {
      ring1padding.value = withSpring(ring1padding.value + hp(5));
    }, 100);
    setTimeout(() => {
      ring2padding.value = withSpring(ring2padding.value + hp(5.5));
    }, 300);

    setTimeout(() => {
      navigation.navigate('Home');
    }, 2500);
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar barStyle="light-content" />

      <Animated.View
        className="bg-white/20 rounded-full"
        style={{padding: ring2padding}}>
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{padding: ring1padding}}>
          <Image
            source={require('../../assets/full.png')}
            style={{
              width: hp(20),
              height: hp(20),
            }}
          />
        </Animated.View>
      </Animated.View>

      <View className="flex items-center space-y-2 mt-10">
        <Text className="font-bold text-white tracking-widest mb-3 text-6xl">
          Foody
        </Text>
        <Text className="font-medium text-white tracking-widest text-lg">
          Food is always right
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

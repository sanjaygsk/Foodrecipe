import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CachedImage} from '../../Helpers/Image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Back from '../../Icons/Back';
import Heart from '../../Icons/Heart';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Loading from '../../Components/Loading';
import Clock from '../../Icons/Clock';
import People from '../../Icons/People';
import Fire from '../../Icons/Fire';
import Stack from '../../Icons/Stack';
import WebView from 'react-native-webview';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';

const RecipeDetail = (props: any) => {
  const item = props?.route?.params;
  const [isFavourite, setIsFavourite] = useState(false);
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    getRecipes(item.idMeal);
  }, []);

  const getRecipes = async (id: string) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );

      if (response?.data) {
        const video = (response.data?.meals[0]?.strYoutube)
          .split('watch?v=')
          .join('embed/');

        console.log(response.data);
        setMeal(response.data.meals[0]);
        setVideoUrl(video);
      } else {
        console.log('Error');
      }
    } catch (error: any) {
      console.error('error is : ', error.message);
    }
  };

  const ingredientsIndexes = () => {
    if (!meal) return [];

    let indexes: Array<number> = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        indexes.push(i);
      }
    }

    return indexes;
  };

  return (
    <ScrollView
      className="bg-white flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 30}}>
      <StatusBar barStyle="dark-content" />
      <View className="flex-row justify-center">
        <CachedImage
          uri={item?.strMealThumb}
          sharedTransitionTag={item.strMeal}
          style={{
            width: wp(98),
            height: hp(50),
            borderRadius: 53,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        />
      </View>

      {/* Back Button */}
      <Animated.View
        entering={FadeIn.delay(200).duration(1000)}
        className="w-full absolute flex-row justify-between items-center pt-14">
        <TouchableOpacity
          activeOpacity={0.8}
          className="p-2 rounded-full ml-5 bg-white"
          onPress={() => navigation.goBack()}>
          <Back
            width={hp(3)}
            height={hp(3)}
            strokeWidth={4.5}
            color="#FBBF24"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          className="p-2 rounded-full mr-5 bg-white justify-center"
          onPress={() => setIsFavourite(!isFavourite)}>
          <Heart
            width={hp(2.5)}
            height={hp(2.5)}
            color={isFavourite ? 'red' : 'grey'}
          />
        </TouchableOpacity>
      </Animated.View>

      {/* Meal Description */}
      {!loading ? (
        <Loading className="mt-16" size="large" color="green" />
      ) : (
        <View className="px-4 justify-between space-y-4 pt-8">
          {/* Name and Area */}
          <Animated.View
            entering={FadeInDown.duration(700).springify().damping(12)}
            className="space-y-4">
            <Text
              style={{fontSize: hp(3)}}
              className="font-bold flex-1 text-neutral-700">
              {meal?.strMeal}
            </Text>
            <Text
              style={{fontSize: hp(2)}}
              className="font-bold flex-1 mt-2 text-neutral-500">
              {meal?.strArea}
            </Text>
          </Animated.View>

          {/* Misc */}
          <Animated.View
            entering={FadeInDown.delay(200)
              .duration(700)
              .springify()
              .damping(12)}
            className="flex-row justify-around my-4">
            <View className="flex rounded-full bg-amber-300 p-2">
              <View
                style={{height: hp(6.5), width: hp(6.5)}}
                className="bg-white rounded-full flex items-center justify-center">
                <Clock width={hp(4)} height={hp(4)} color="#525252" />
              </View>
              <View className="flex items-center py-2 space-y-1">
                <Text
                  style={{fontSize: hp(2)}}
                  className="font-bold text-neutral-700">
                  35
                </Text>
                <Text
                  style={{fontSize: hp(1.3)}}
                  className="font-bold text-neutral-700">
                  Mins
                </Text>
              </View>
            </View>

            <View className="flex rounded-full bg-amber-300 p-2">
              <View
                style={{height: hp(6.5), width: hp(6.5)}}
                className="bg-white rounded-full flex items-center justify-center">
                <People width={hp(4)} height={hp(4)} color="#525252" />
              </View>
              <View className="flex items-center py-2 space-y-1">
                <Text
                  style={{fontSize: hp(2)}}
                  className="font-bold text-neutral-700">
                  03
                </Text>
                <Text
                  style={{fontSize: hp(1.3)}}
                  className="font-bold text-neutral-700">
                  Servings
                </Text>
              </View>
            </View>

            <View className="flex rounded-full bg-amber-300 p-2">
              <View
                style={{height: hp(6.5), width: hp(6.5)}}
                className="bg-white rounded-full flex items-center justify-center">
                <Fire width={hp(4)} height={hp(4)} color="#525252" />
              </View>
              <View className="flex items-center py-2 space-y-1">
                <Text
                  style={{fontSize: hp(2)}}
                  className="font-bold text-neutral-700">
                  103
                </Text>
                <Text
                  style={{fontSize: hp(1.3)}}
                  className="font-bold text-neutral-700">
                  Cal
                </Text>
              </View>
            </View>

            <View className="flex rounded-full bg-amber-300 p-2">
              <View
                style={{height: hp(6.5), width: hp(6.5)}}
                className="bg-white rounded-full flex items-center justify-center">
                <Stack width={hp(4)} height={hp(4)} color="#525252" />
              </View>
              <View className="flex items-center py-2 space-y-1">
                <Text
                  style={{fontSize: hp(2)}}
                  className="font-bold text-neutral-700"></Text>
                <Text
                  style={{fontSize: hp(1.3)}}
                  className="font-bold text-neutral-700">
                  Easy
                </Text>
              </View>
            </View>
          </Animated.View>

          {/* Ingredients */}
          <Animated.View
            entering={FadeInDown.delay(300)
              .duration(700)
              .springify()
              .damping(12)}
            className="space-y-4">
            <Text
              style={{fontSize: hp(2.5)}}
              className="font-bold flex-1 text-neutral-700">
              Ingredients
            </Text>
            <View className="space-y-2 my-2">
              {ingredientsIndexes(meal).map(index => (
                <View key={index} className="flex-row space-x-4 mt-2">
                  <View
                    style={{height: hp(1.5), width: hp(1.5)}}
                    className="bg-amber-300 rounded-full mr-6"
                  />
                  <View className="flex-row space-x-2">
                    <Text
                      style={{fontSize: hp(1.7)}}
                      className="font-extrabold text-neutral-700 mr-3">
                      {meal[`strMeasure${index}`]}
                    </Text>
                    <Text
                      style={{fontSize: hp(1.7)}}
                      className="font-medium text-neutral-700">
                      {meal[`strIngredient${index}`]}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </Animated.View>

          {/* Instructions */}
          <Animated.View
            entering={FadeInDown.delay(400)
              .duration(700)
              .springify()
              .damping(12)}
            className="space-y-4 my-2">
            <Text
              style={{fontSize: hp(2.5)}}
              className="font-bold flex-1 text-neutral-700 mb-4">
              Instructions
            </Text>
            <Text
              style={{fontSize: hp(1.7), lineHeight: hp(2.5)}}
              className="font-medium text-neutral-700">
              {meal?.strInstructions}
            </Text>
          </Animated.View>

          {/* Video */}
          {meal?.strYoutube ? (
            <Animated.View
              entering={FadeInDown.delay(500)
                .duration(700)
                .springify()
                .damping(12)}
              className="space-y-4 my-4">
              <Text
                style={{fontSize: hp(2.5)}}
                className="font-bold flex-1 text-neutral-700">
                Video
              </Text>
              <View className="flex-row justify-center items-center mt-4">
                <WebView
                  source={{uri: videoUrl}}
                  javaScriptEnabled={true}
                  allowsInlineMediaPlayback={true}
                  style={{height: hp(30), borderRadius: 30}}
                />
              </View>
            </Animated.View>
          ) : (
            <></>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default RecipeDetail;

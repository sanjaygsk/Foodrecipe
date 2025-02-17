import {View, Text, FlatList, Pressable, Image} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {MasonryFlashList} from '@shopify/flash-list';
import Animated, {FadeInDown} from 'react-native-reanimated';
import Loading from './Loading';
import {CachedImage} from '../Helpers/Image';
import { useNavigation } from '@react-navigation/native';

const Recipes = ({categories, meals}: {categories: any[]; meals: any}) => {

  const navigation = useNavigation();

  return (
    <View className="mx-4 space-y-3">
      <Text
        style={{fontSize: hp(3)}}
        className="font-semibold text-neutral-600">
        Recipes
      </Text>

      {categories.length === 0 || meals.length === 0 ? (
        <Loading className="mt-10" size="large" color="green" />
      ) : (
        <View className="my-4">
          <MasonryFlashList
            data={meals}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            renderItem={({item, index}) => (
              <RenderItem item={item} index={index} navigation={navigation} />
            )}
            onEndReachedThreshold={0.1}
          />
        </View>
      )}
    </View>
  );
};

const RenderItem = ({item, index, navigation}: any) => {
  const isEven = index % 2 === 0;
  return (
    <Animated.View
      entering={FadeInDown.duration(index * 100)
        .duration(700)
        .springify()
        .damping(20)}>
      <Pressable
        style={{
          width: '100%',
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        onPress={() => {
          navigation.navigate('RecipeDetail', {...item});
        }}
        className="flex justify-center mb-4 space-y-1">
        <CachedImage
          uri={item.strMealThumb}
          sharedTransitionTag={item.strMeal}
          style={{
            width: '100%',
            height: index % 3 === 0 ? hp(25) : hp(35),
            borderRadius: 35,
          }}
          className={' bg-black/5'}
          resizeMode="cover"
        />
        <Text
          numberOfLines={1}
          className="font-semibold text-neutral-600 ml-2 mt-2"
          style={{fontSize: hp(1.5)}}>
          {item.strMeal}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default Recipes;

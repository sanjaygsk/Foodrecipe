import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {CachedImage} from '../Helpers/Image';

type Props = {
  activeCategory: string | number;
  handleCategoryChange: (category: string) => void;
  categories: Array<{
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  }>;
};

const Categories = ({
  activeCategory,
  categories,
  handleCategoryChange,
}: Props) => {
  return (
    <Animated.View
      className="mb-4"
      entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 16}}
        className="space-x-4">
        {categories.map((category, index) => {
          const isActive = activeCategory === category.strCategory;
          const activeButtonClass = isActive ? 'bg-amber-400' : 'bg-black/10';
          return (
            <TouchableOpacity
              onPress={() => handleCategoryChange(category.strCategory)}
              activeOpacity={0.5}
              key={index}
              className="flex items-center space-y-1 px-2">
              <View className={'rounded-full p-[6px] ' + activeButtonClass}>
                <CachedImage
                  uri={category.strCategoryThumb}
                  style={{height: hp(6), width: hp(6)}}
                  className="rounded-full"
                />
              </View>
              <Text
                className="text-neutral-600 mt-2 text-center"
                style={{fontSize: hp(1.6)}}>
                {category.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

export default Categories;

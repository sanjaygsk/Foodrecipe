import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Bell from '../../Icons/Bell';
import Search from '../../Icons/Search';
import Categories from '../../Components/Categories';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Recipes from '../../Components/Recipes';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Beef');
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php',
      );

      if (response?.data) {
        // console.log(response.data);
        setCategories(response.data.categories);
      } else {
        console.log('Error');
      }
    } catch (error: any) {
      console.error('error is : ', error.message);
    }
  };

  const getRecipes = async (category = 'Beef') => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
      );

      if (response?.data) {
        console.log(response.data);
        setMeals(response.data.meals);
      } else {
        console.log('Error');
      }
    } catch (error: any) {
      console.error('error is : ', error.message);
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    getRecipes(category);
    setMeals([]);
  };

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
          <Bell height={hp(3.5)} width={hp(3.5)} />
        </View>

        {/* Greeting & Welcome Message */}
        <View className="mx-4 my-4 space-y-2 mb-2">
          <Text style={{fontSize: hp(1.7)}} className="text-neutral-600">
            Hello, GSK!
          </Text>
          <View className="my-1 flex-row justify-between items-center">
            <Text
              style={{fontSize: hp(3.8)}}
              className="font-semibold text-neutral-600">
              Make Your Own Food,
            </Text>
          </View>
          <Text
            style={{fontSize: hp(3.8)}}
            className="font-semibold text-neutral-600">
            stay at <Text className="text-amber-400">Home</Text>
          </Text>
        </View>

        {/* Search Bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px] my-5">
          <TextInput
            placeholder="Search for recipes"
            placeholderTextColor={'#6b6c6e'}
            style={{fontSize: hp(1.7)}}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <Search size={hp(2.5)} strokeWidth={3} />
          </View>
        </View>

        {/* Categories */}
        {categories.length > 0 ? (
          <View>
            <Categories
              activeCategory={activeCategory}
              categories={categories}
              handleCategoryChange={handleCategoryChange}
            />
          </View>
        ) : (
          <></>
        )}

        {/* Recipes */}
        <View>
          <Recipes categories={categories} meals={meals} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

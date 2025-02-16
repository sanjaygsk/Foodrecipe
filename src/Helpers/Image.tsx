import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import Animated from 'react-native-reanimated';

export const CachedImage = (props: any) => {
  const [cachedSource, setCachedSource] = useState(null);
  const {uri} = props;

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const cachedImageData = await AsyncStorage.getItem(uri);
        if (cachedImageData) {
          setCachedSource({uri: cachedImageData});
          return;
        } else {
          const response = await fetch(uri);
          const imageBlob = await response.blob();
          const base64Data = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = () => resolve(reader.result);
          });

          await AsyncStorage.setItem(uri, base64Data as string);
          setCachedSource({uri: base64Data});
        }
      } catch (error) {
        console.error('Error Caching Image', error, uri);
        setCachedSource({uri});
      }
    };

    fetchImage();
  }, []);

  return <Animated.Image source={cachedSource} {...props} />;
};

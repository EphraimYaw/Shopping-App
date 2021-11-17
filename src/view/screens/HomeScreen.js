import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Button,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from '../../consts/colors';
import Product from '../../consts/Product';
const width = Dimensions.get('window').width / 2 - 30;


const HomeScreen = ({navigation}) => {
  const [catergoryIndex, setCategoryIndex] = React.useState(0);

  const categories = ['Drums','Keyboard', 'Guitar', 'Speaker'];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({Product}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        name="Go to Details Screen"
        onPress={() => navigation.navigate('Details',Product)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Product.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="favorite"
                size={18}
                color={Product.like ? COLORS.red : COLORS.black}
              />
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={Product.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {Product.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              ${Product.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.black,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View style={{marginLeft:15}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Discover</Text>
         
         
        </View>
        <TouchableOpacity style={{marginRight:40}}>
<Feather name="shopping-cart" size={24} color="black" />
</TouchableOpacity>

      </View>
      <View style={{marginTop: 30, flexDirection: 'row',marginLeft:15}}>
        <View style={style.searchContainer}>
          <Feather name="search" size={24} color="black" style={style.Searchicon} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
        <MaterialIcons name="sort" size={24} color="white" />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          margin: 10,
          padding:10,
        }}
        numColumns={2}
        data={Product}
        renderItem={({item}) => {
          return <Card Product={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
    margin: 20,
    
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.black,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.black,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
    padding:10,
    
  },
  Searchicon:{
paddingLeft:20,
  },

  sortBtn: {
    marginLeft: 10,
    marginRight:15,
    height: 50,
    width: 50,
    borderRadius: 40,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;

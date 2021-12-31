import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home';
import SearchScreen from './screens/Search';
import ReelScreen from './screens/Reel';
import ShopScreen from './screens/Shop';
import ProfileScreen from './screens/Profile';
import {
  Home,
  HomeFilled,
  Search,
  SearchFilled,
  Reel,
  ReelFilled,
  Shop,
  ShopFilled,
} from './Icons';

const Tab = createBottomTabNavigator();

function Screens() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#262626',
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <HomeFilled size={24} fill={color} />;
            return <Home size={24} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <SearchFilled size={23} fill={color} />;
            return <Search size={24} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="reel"
        component={ReelScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <ReelFilled size={23} fill={color} />;
            return <Reel size={24} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <ShopFilled size={23} fill={color} />;
            return <Shop size={24} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Image
              style={[
                styles.avatar,
                {
                  borderColor: focused ? color : 'transparent',
                },
              ]}
              source={{
                uri: 'https://avatars.githubusercontent.com/u/59176193?v=4',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Screens;

const styles = StyleSheet.create({
  avatar: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 21,
  },
});

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import ReelScreen from './screens/Reel';
import ShopScreen from './screens/Shop';
import ProfileScreen from './screens/Profile';
import { Home, HomeFilled, Search, SearchFilled } from './Icons';

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
            if (focused) return <HomeFilled size={30} fill={color} />;
            return <Home size={30} fill={color} />;
          },
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <SearchFilled size={30} fill={color} />;
            return <Search size={30} filled={color} />;
          },
        }}
      />
      <Tab.Screen name="reel" component={ReelScreen} />
      <Tab.Screen name="shop" component={ShopScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default Screens;

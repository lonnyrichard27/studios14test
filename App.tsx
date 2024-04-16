
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import { HomeDefault, LibraryIcon, SearchBox } from './components';
import MenuIcon from './components/svgs/MenuIcon';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle:{
          backgroundColor: 'black', 
          color: '#fff',
          fontSize: '13px',
          fontWeight: 'bold'
        },
          tabBarIcon: ({ focused }) => {
            let iconName: any = null;

            if (route.name === 'Home') {
              iconName = focused ? <HomeDefault /> : <HomeDefault color='#CB5715' /> ;
            } else if (route.name === 'Search') {
              iconName = focused ? <SearchBox /> : <SearchBox color='#CB5715'/> ;
            } else if (route.name === 'Library') {
              iconName = focused ? <LibraryIcon /> : <LibraryIcon color='#CB5715' /> ;
            } else if (route.name === 'Menu') {
              iconName = focused ? <MenuIcon /> : <MenuIcon color='#CB5715'/> ;
            }

            return iconName;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={HomeScreen} />
        <Tab.Screen name="Library" component={HomeScreen} />
        <Tab.Screen name="Menu" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

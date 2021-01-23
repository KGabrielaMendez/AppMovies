import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import List from '../screens/list';
import Favorites from '../screens/favorites';
import ListMovies from './../screens/list';
import Details from './../screens/movies';
import { enableScreens } from 'react-native-screens';
enableScreens();

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Buscar'
        }
    },
    List: {
        screen: List,
        navigationOptions: {
            title: 'Resultados de Busqueda'
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'Detalles'
        }
    },
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: 'Favoritos'
        }
    }
};

const screensFav = {
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: 'Favoritos'
        }
    }
};


const HomeStack = createStackNavigator(screens);
const FavoriteStack = createStackNavigator(screensFav);

export default createAppContainer(HomeStack,FavoriteStack);
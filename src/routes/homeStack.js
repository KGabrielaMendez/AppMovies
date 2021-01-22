import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Details from '../screens/movies';
import List from '../screens/list';
import Favorites from './../components/favorites';

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
        screen: Details
    },
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: 'Favoritos'
        }
    }
};


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
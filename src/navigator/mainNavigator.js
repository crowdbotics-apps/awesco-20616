import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList107234Navigator from '../features/NotificationList107234/navigator';
import Maps107233Navigator from '../features/Maps107233/navigator';
import BlankScreen0107232Navigator from '../features/BlankScreen0107232/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList107234: { screen: NotificationList107234Navigator },
Maps107233: { screen: Maps107233Navigator },
BlankScreen0107232: { screen: BlankScreen0107232Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

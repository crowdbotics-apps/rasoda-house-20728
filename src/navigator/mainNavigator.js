import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps111942Navigator from '../features/Maps111942/navigator';
import Add-Item111941Navigator from '../features/Add-Item111941/navigator';
import Maps111937Navigator from '../features/Maps111937/navigator';
import UserProfile111933Navigator from '../features/UserProfile111933/navigator';
import Maps111852Navigator from '../features/Maps111852/navigator';
import Add-Item111851Navigator from '../features/Add-Item111851/navigator';
import Maps111847Navigator from '../features/Maps111847/navigator';
import UserProfile111843Navigator from '../features/UserProfile111843/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps111942: { screen: Maps111942Navigator },
Add-Item111941: { screen: Add-Item111941Navigator },
Maps111937: { screen: Maps111937Navigator },
UserProfile111933: { screen: UserProfile111933Navigator },
Maps111852: { screen: Maps111852Navigator },
Add-Item111851: { screen: Add-Item111851Navigator },
Maps111847: { screen: Maps111847Navigator },
UserProfile111843: { screen: UserProfile111843Navigator },

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

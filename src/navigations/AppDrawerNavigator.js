import { createDrawerNavigator } from 'react-navigation-drawer';
import RecommendedNavigator from './RecommendedNavigator';
import RankingNavigator from './RankingNavigator';
import TrendingNavigator from './TrendingNavigator';
import NewWorksNavigator from './NewWorksNavigator';
import DrawerContent from '../components/DrawerContent';
import { globalStyles, globalStyleVariables } from '../styles';
import { SCREENS } from '../common/constants';

const createAppDrawerNavigator = ({ initialRouteName }) =>
  createDrawerNavigator(
    {
      // [SCREENS.Recommended]: {
      //   screen: RecommendedNavigator,
      // },
      [SCREENS.NewWorks]: {
        screen: NewWorksNavigator,
      },
      [SCREENS.Ranking]: {
        screen: RankingNavigator,
      },
      [SCREENS.Trending]: {
        screen: TrendingNavigator,
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: globalStyles.header,
        headerTintColor: globalStyleVariables.HEADER_TINT_COLOR,
      },
      unmountInactiveRoutes: true,
      initialRouteName,
      cardStyle: globalStyles.card,
      contentComponent: DrawerContent,
      overlayColor: '#00000090',
    },
  );

export default createAppDrawerNavigator;

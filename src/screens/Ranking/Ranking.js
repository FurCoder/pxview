import React, { Component } from 'react';
import RankingList from './RankingList';
import PastRanking from './PastRanking';
import PXTabView from '../../components/PXTabView';
import TabContentWrapper from '../../components/TabContentWrapper';
import { connectLocalization } from '../../components/Localization';
import { RANKING_TYPES, RANKING_FOR_UI } from '../../common/constants';

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: this.getRoutes(),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { lang: prevLang } = this.props;
    const { lang } = nextProps;
    if (lang !== prevLang) {
      this.setState({
        routes: this.getRoutes(),
      });
    }
  }

  getRoutes = () => {
    const { i18n, navigation } = this.props;
    const { rankingType } = navigation.state.params;
    // always return new array so that localized title will be updated on switch language
    switch (rankingType) {
      case RANKING_TYPES.ILLUST:
        return [
          {
            key: '1',
            title: i18n.rankingDay,
            rankingMode: RANKING_FOR_UI.DAILY_ILLUST,
            // reload: false,
          },
          {
            key: '2',
            title: i18n.rankingWeek,
            rankingMode: RANKING_FOR_UI.WEEKLY_ILLUST,
          },
          {
            key: '3',
            title: i18n.rankingMonth,
            rankingMode: RANKING_FOR_UI.MONTHLY_ILLUST,
          },
          {
            key: '4',
            title: i18n.rankingYear,
            rankingMode: RANKING_FOR_UI.YEARLY_ILLUST,
          },
          {
            key: '5',
            title: i18n.rankingAll,
            rankingMode: RANKING_FOR_UI.ALL_ILLUST,
          },
          {
            key: '6',
            title: i18n.rankingPast,
            rankingMode: RANKING_FOR_UI.PAST_ILLUST,
          },
        ];
      case RANKING_TYPES.MANGA:
        return [
          {
            key: '1',
            title: i18n.rankingDay,
            rankingMode: RANKING_FOR_UI.DAILY_MANGA,
            reload: false,
          },
          {
            key: '2',
            title: i18n.rankingWeekRookie,
            rankingMode: RANKING_FOR_UI.WEEKLY_ROOKIE_MANGA,
          },
          {
            key: '3',
            title: i18n.rankingWeek,
            rankingMode: RANKING_FOR_UI.WEEKLY_MANGA,
          },
          {
            key: '4',
            title: i18n.rankingMonth,
            rankingMode: RANKING_FOR_UI.MONTHLY_MANGA,
          },
          {
            key: '5',
            title: i18n.rankingPast,
            rankingMode: RANKING_FOR_UI.PAST_MANGA,
          },
        ];
      default:
        return [];
    }
  };

  handleChangeTab = index => {
    this.setState({ index });
  };

  renderScene = ({ index }) => {
    const { navigation } = this.props;
    const { rankingType } = navigation.state.params;
    const { rankingMode, reload } = this.state.routes[index];
    return (
      <TabContentWrapper active={index === this.state.index}>
        {rankingMode === RANKING_FOR_UI.PAST_ILLUST ||
        rankingMode === RANKING_FOR_UI.PAST_MANGA ? (
          <PastRanking
            rankingType={rankingType}
            rankingMode={rankingMode}
            navigation={navigation}
          />
        ) : (
          <RankingList
            rankingMode={rankingMode}
            navigation={navigation}
            reload={reload}
          />
        )}
      </TabContentWrapper>
    );
  };

  render() {
    return (
      <PXTabView
        navigationState={this.state}
        renderScene={this.renderScene}
        onIndexChange={this.handleChangeTab}
        tabBarProps={{
          scrollEnabled: true,
        }}
      />
    );
  }
}

export default connectLocalization(Ranking);

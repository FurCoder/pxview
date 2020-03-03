import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import RankingHorizontalList from './RankingHorizontalList';
import NovelRankingPreview from './NovelRankingPreview';
import { connectLocalization } from '../../components/Localization';
import { RANKING_TYPES, RANKING_FOR_UI } from '../../common/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

class RankingPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  handleOnRefresh = () => {
    this.setState({
      refreshing: true,
    });
  };

  handleOnRefreshSuccess = () => {
    this.setState({
      refreshing: false,
    });
  };

  render() {
    const { navigation, theme } = this.props;
    const { refreshing } = this.state;
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.handleOnRefresh}
            />
          }
        >
          <RankingHorizontalList
            rankingMode={RANKING_FOR_UI.MONTHLY_ILLUST}
            rankingType={RANKING_TYPES.ILLUST}
            navigation={navigation}
            refreshing={refreshing}
            theme={theme}
            onRefreshSuccess={this.handleOnRefreshSuccess}
          />
          <RankingHorizontalList
            rankingMode={RANKING_FOR_UI.ALL_ILLUST}
            rankingType={RANKING_TYPES.ILLUST}
            navigation={navigation}
            refreshing={refreshing}
            theme={theme}
          />
          <NovelRankingPreview
            rankingMode={RANKING_FOR_UI.YEARLY_NOVEL}
            navigation={navigation}
            refreshing={refreshing}
            theme={theme}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default withTheme(connectLocalization(RankingPreview));

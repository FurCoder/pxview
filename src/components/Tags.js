import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import PXTouchable from './PXTouchable';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    //flex: 1,
    // flexDirection: 'row',
  },
  tagContainer: {
    // backgroundColor: 'red',
    // margin: 3,
    // borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 15,
    paddingHorizontal: 12,
    // height: 32,
    margin: 4,

  },
  tagLabel: {
    padding: 5,
    color: '#fff',

  }
});

const Tags = (props) => {
  const { tags } = props;
  return (
    <View style={styles.container}>
      {
        tags.map(tag => 
          <PXTouchable key={tag.name} style={styles.tagContainer}>
            <Text style={styles.tagLabel}>{tag.name}</Text>
          </PXTouchable> 
        )
      }
    </View>
  );
  // return (
  //   <View style={styles.container}>
  //     <Taggs 
  //       initialText=""
  //       initialTags={['dog', 'cat', 'chicken', 'bull', 'fox', 'rrrrrrrrr', 'blalalalala']}
  //     />
  //   </View>
  // );
}

export default Tags;
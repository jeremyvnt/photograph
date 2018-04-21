import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, ScrollView, View } from "react-native";

const makeList = (Item) => class List extends React.Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  }

   renderSeparator = () => (
     <View style={{ height: 20 }}></View>
   )

  render() {
    const {
      items,
      navigation,
      ...props
    } = this.props;
    return (
      <FlatList
        data={items}
        keyExtractor={ item => item.id }
        renderItem={({item}) => <Item {...item} {...props} navigation={navigation} />}
        ItemSeparatorComponent={this.renderSeparator}
        onEndReached={ props.onEndReached }
        onEndReachedThreshold={ 0.9 }
      />
    );
  }
}

export default makeList;

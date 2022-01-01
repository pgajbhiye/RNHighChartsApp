import React from 'react';
import { StyleSheet, View } from 'react-native';
import HighchartsReactNative from '@highcharts/highcharts-react-native'
import {getJsonData} from "./util";

//sankey should be imported before organization for org charts to work correctly
const modules = ["highcharts-3d","heatmap", "tilemap", "funnel", "sankey" ,"organization", 'timeline'];

export default class ItemComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      chartOptions: {
      ...getJsonData(this.props.type)
      }
    };
  }

  render() {
    return (
        <View style={styles.container}>
          <HighchartsReactNative
              styles={styles.container}
              modules={modules}
              options={this.state.chartOptions}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    flex: 1
  }
});
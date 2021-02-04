import React, {useEffect} from 'react';
import {
    ScrollView,
    View,
    TextInput,
    Alert,
    FlatList,
    Text,
    TouchableOpacity,
    Platform,
    Dimensions,
    InteractionManager,
  } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { SVInputs, SVbutton } from '../components/SVprimitives';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

function Dashboard() {

    const data = {
        labels: ["Jan", "Feb", "Mar"], // optional
        data: [0.4, 0.6, 0.8]
      };
      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        //backgroundGradientTo: "#08130D",
        backgroundGradientTo: "#e4cffa",
        backgroundGradientToOpacity: 0.5,
        //color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        color: (opacity = 1) => `rgba(146, 104, 241, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    return (
        <View style={{paddingHorizontal: 10, paddingTop: 20}}>
  <Text>Innvestment Progress</Text>
  {/*<LineChart
    data={{
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width - 20} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      //backgroundColor: "#e26a00",
      backgroundColor: "#9268f1",
      //backgroundGradientFrom: "#fb8c00",
      backgroundGradientFrom: "#9268f1",
      backgroundGradientTo: "#b858f4",
      //backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
/>*/}

<ProgressChart
  data={data}
  width={Dimensions.get("window").width - 20}
  height={220}
  strokeWidth={16}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
  style={{
    marginVertical: 8,
    borderRadius: 16
  }}
/>
</View>
      );
}
/*const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };*/

export default Dashboard;
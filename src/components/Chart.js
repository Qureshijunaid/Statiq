import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
// import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from '@rainbow-me/animated-charts';
// import { useSharedValue } from 'react-native-reanimated';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const {width: SIZE} = Dimensions.get('window');

const Chart = props => {
  console.log(props.route.params.data);
  const [days, setDays] = useState(['Mon','Tue','Wed','Thu','Fri','Sat', 'Sun']);
  const [data, setData] = useState([]);
  const [finalData, setFinalData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
      },
      // props.route.params.data
    ],
  });
  const coinData = props.route.params.data;
  const last7DayData = props.route.params.data?.sparkline_in_7d?.price ?? [];
  const todayDate = new Date();
  useEffect(() => {
    // addDays();
    getMinMaxPriceForDay();
  }, []);
  const addDays = () => {
    let tempDays = [];
    tempDays.push(moment(todayDate).format('ddd'));
    for (let i = 1; i < 7; i++) {
      let tempDate = moment().subtract(i, 'days');
      tempDays.push(moment(tempDate).format('ddd'));
    }
    setDays([...tempDays]);
  };
  const getMinMaxPriceForDay = () => {
    let temp24MaxHrsData = [];
    let temp24MinMaxHrsData = [];
    for (let i = 1; i < 8; i++) {
      let temp24HrsData = [];
      for (let j = 0; j < 24; j++) {
        let tempArray = [];
        tempArray = last7DayData[i * j];
        let eachArray = [tempArray.y];
        temp24HrsData.push(eachArray);
      }
      const max = Math.max(...[].concat(...temp24HrsData));
      const min = Math.min(...[].concat(...temp24HrsData));
      temp24MinMaxHrsData.push({min: min, max: max});
      temp24MaxHrsData.push(max);
    }
    setData([...temp24MaxHrsData]);
    console.log("days",days)
    setFinalData({
      labels: [...days],
      datasets: [
        {
          data: [...temp24MaxHrsData],
        },
      ],
    });
  };
  //   const latestCurrentPrice = useSharedValue(currentPrice);
  //   const [chartReady, setChartReady] = useState(false);

  //   const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';

  //   useEffect(() => {
  //     latestCurrentPrice.value = currentPrice;

  //     setTimeout(() => {
  //       setChartReady(true);
  //     }, 0)

  //   }, [currentPrice])

  //   const formatUSD = value => {
  //     'worklet';
  //     if (value === '') {
  //       const formattedValue = `$${latestCurrentPrice.value.toLocaleString('en-US', { currency: 'USD' })}`
  //       return formattedValue;
  //     }

  //     const formattedValue =`$${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
  //     return formattedValue;
  //   };

  //   if (sparkline.length === 0) {
  //     return <Text>Loading...</Text>
  //   }

  console.log({last7DayData});
  console.log({finalData});
  return (
    // <ChartPathProvider data={{ points: sparkline, smoothingStrategy: 'bezier' }}>
    //   <View style={styles.chartWrapper}>

    //     {/* Titles */}
    //     <View style={styles.titlesWrapper}>
    //       <View style={styles.upperTitles}>
    //         <View style={styles.upperLeftTitle}>
    //           <Image source={{ uri: logoUrl }} style={styles.image} />
    //           <Text style={styles.subtitle}>{name} ({symbol.toUpperCase()})</Text>
    //         </View>
    //         <Text style={styles.subtitle}>7d</Text>
    //       </View>
    //       <View style={styles.lowerTitles}>
    //         <ChartYLabel
    //           format={formatUSD}
    //           style={styles.boldTitle}
    //         />
    //         <Text style={[styles.title, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
    //       </View>
    //     </View>

    //     { chartReady ?
    //     (<View style={styles.chartLineWrapper}>
    //       <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
    //       <ChartDot style={{ backgroundColor: 'black' }} />
    //       </View>)

    //       :

    //       null

    //     }

    //   </View>
    // </ChartPathProvider>

    <View>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={finalData}
        // data={props.route.params.data}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    marginVertical: 16,
  },
  titlesWrapper: {
    marginHorizontal: 16,
  },
  upperTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperLeftTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#A9ABB1',
  },
  lowerTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
  chartLineWrapper: {
    marginTop: 40,
  },
});

export default Chart;

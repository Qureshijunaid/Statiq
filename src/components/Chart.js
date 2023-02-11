


import * as React from 'react';
import {
  Button, Text, View,
  StatusBar, ImageBackground, StyleSheet
} from 'react-native';
import { CandlestickChart } from 'react-native-wagmi-charts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import mockData from './data/candlestick-data.json';
import mockData2 from './data/candlestick-data2.json';

import constants from '../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

  },
  signupContainerBack: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    justifyContent: "space-between",
    marginStart: constants.vw(15)
  },
  subContainer: {
    width: "90%",
    alignSelf: "center"
  },
  text18600: {
    fontSize: 18,
    fontWeight: "600",

  },
})

function Chart(props) {

  const [data, setData] = React.useState(mockData)

  React.useEffect(() => {

    console.log("useEffect", props.app.btcData?.data?.market_data?.ohlcv_last_1_hour)


  }, [])

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <ImageBackground
        source={require('../assets/images/ImageBackground/bg.png')}
        resizeMode="cover"
        style={{ flex: 1 }}>
        <View style={{ marginTop: 50 }}>
          <View style={styles.signupContainerBack}>
            <Ionicons
              name={"arrow-back"}
              size={25}
              onPress={() => props.navigation.dispatch(CommonActions.goBack())}
            />

            <Text style={styles.text18600}>{props.app.btcData?.data?.name}</Text>
          </View>

          <CandlestickChart.Provider data={data}>
            <CandlestickChart>
              <CandlestickChart.Candles />
              <CandlestickChart.Crosshair >
                <CandlestickChart.Tooltip />
              </CandlestickChart.Crosshair>
            </CandlestickChart>
            <View style={{ marginTop: 100, flexWrap: "wrap" }} >
              <View style={{ ViewWrap: "wrap" }}>
                <Button onPress={() => setData(mockData)}
                  title="per day"
                />
                <Button onPress={() => setData(mockData2)}
                  title="per week"
                />

              </View>
            </View>
            <View >
              <Text>USD Price:{props.app.btcData?.data?.market_data?.price_usd}</Text>
              <Text>Volume last 24 hour:{props.app.btcData?.data?.market_data?.volume_last_24_hours}</Text>
            </View>

          </CandlestickChart.Provider>
        </View>
      </ImageBackground>

    </>
  );
}


function mapStateToProps(state) {
  const { app } = state
  return {
    app
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart)

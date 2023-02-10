import React, { useState, useEffect } from "react";
import {
    View, Text, SafeAreaView, TouchableOpacity,
    StatusBar,
    ImageBackground
} from 'react-native';
import { wipeStorage } from '../../utils/asyncstorage'
import io from 'socket.io-client';
import { styles } from "./style";
import constants from "../../constants";
function LandingPage(props) {
    useEffect(() => {

        const subscribe = {
            type: "subscribe",
            channels: [
                {
                    name: "ticker",
                    product_ids: ["BTC-USD"]
                }
            ]
        };
        console.log("subscribe", subscribe)

        const socket = io.connect("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d");
        console.log("socket", socket)

        socket.onopen = () => {
            socket.send(JSON.stringify(subscribe));
        };

        socket.onmessage = e => {
            const value = JSON.parse(e.data);
            console.log("value", value)
            if (value.type !== "ticker") {
                return;
            }

            // const oldBtcDataSet = this.state.lineChartData.datasets[0];
            // const newBtcDataSet = { ...oldBtcDataSet };
            // newBtcDataSet.data.push(value.price);

            // const newChartData = {
            //   ...this.state.lineChartData,
            //   datasets: [newBtcDataSet],
            //   labels: this.state.lineChartData.labels.concat(
            //     new Date().toLocaleTimeString()
            //   )
            // };
            // this.setState({ lineChartData: newChartData });
        };
        return () => {
            socket.close()
        }
    }, [])
    return (
        <>
            <StatusBar barStyle={'light-content'} />
            <ImageBackground
                source={require('../../assets/images/ImageBackground/bg.png')}
                resizeMode="cover"
                style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>
                    <Text>Landing page</Text>
                    <TouchableOpacity onPress={() => wipeStorage()}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>props.navigation.navigate(constants.ConstStrings.menu)}>
                        <Text>Menu</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ImageBackground>
        </>
    )
}

export default LandingPage

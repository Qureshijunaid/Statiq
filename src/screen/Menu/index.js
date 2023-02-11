
import React, { useRef, useMemo, useState, useEffect } from 'react';
import {
    FlatList, StyleSheet, Text, View, SafeAreaView,
    StatusBar, ImageBackground
} from 'react-native';
import ListItem from '../../components/ListItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import { getMarketData, } from '../../utils/services/crytoService';
import { getBTCPrice } from '../../actions/app';

const ListHeader = (props) => (
    <>
        <View style={styles.titleWrapper}>
            <Ionicons
                name={"arrow-back"}
                size={25}
                onPress={props.onPress}
            />
            <Text style={styles.largeTitle}>Markets</Text>
        </View>
        <View style={styles.divider} />
    </>
)

function Menu(props) {
    const [data, setData] = useState([]);
    const [selectedCoinData, setSelectedCoinData] = useState(null);

    useEffect(() => {
        const fetchMarketData = async () => {
            const marketData = await getMarketData();
            setData(marketData);
        }

        fetchMarketData();
        props.dispatch(getBTCPrice())
    }, [])




    const openModal = (item) => {
        setSelectedCoinData(item);

        props.navigation.navigate("Chart", { data: item })
    }

    return (
        <>
            <StatusBar barStyle={'light-content'} />
            <ImageBackground
                source={require('../../assets/images/ImageBackground/bg.png')}
                resizeMode="cover"
                style={{ flex: 1 }}>
                <View style={{ marginTop: 30 }}>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={data}
                        renderItem={({ item }) => (
                            <ListItem
                                name={item.name}
                                symbol={item.symbol}
                                currentPrice={item.current_price}
                                priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
                                logoUrl={item.image}
                                onPress={() => openModal(item)}
                            />
                        )}
                        ListHeaderComponent={<ListHeader onPress={() => props.navigation.dispatch(CommonActions.goBack())} />}
                    />
                </View>

            </ImageBackground>

        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleWrapper: {
        marginTop: 20,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    largeTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#A9ABB1',
        marginHorizontal: 16,
        marginTop: 16,
    },
    bottomSheet: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});

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
)(Menu)






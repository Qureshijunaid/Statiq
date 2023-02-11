
import React, { useRef, useMemo, useState, useEffect } from 'react';
import {
    FlatList, StyleSheet, Text, View, SafeAreaView,
    StatusBar, ImageBackground
} from 'react-native';
import ListItem from '../../components/ListItem';
import { connect } from 'react-redux';
import { getMarketData } from '../../utils/services/crytoService';

const ListHeader = () => (
    <>
        <View style={styles.titleWrapper}>
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
    }, [])


    const openModal = (item) => {
        setSelectedCoinData(item);

        props.navigation.navigate("Chart", { data: item })
    }
    console.log("selectedCoinData", selectedCoinData)

    return (
        <>
            <StatusBar barStyle={'light-content'} />
            <ImageBackground
                source={require('../../assets/images/ImageBackground/bg.png')}
                resizeMode="cover"
                style={{ flex: 1 }}>
                <View  style={{ marginTop:30 }}>
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
                        ListHeaderComponent={<ListHeader />}
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
function mapDispatchToProps(dispatch: any) {
    return {
        dispatch,
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)






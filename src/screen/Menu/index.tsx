// import React, { useState, useEffect } from "react";
// import {
//     View, Text, SafeAreaView, TouchableOpacity,
//     StatusBar,
//     ImageBackground
// } from 'react-native';
// import { connect, useDispatch } from 'react-redux';
// import { getCrypto } from '../../actions/app';
// import { styles } from "./style";
// function Menu() {
//     const dispatch = useDispatch()
//     useEffect(() => {

//         dispatch(getCrypto())
//     }, [])
//     return (
//         <>
//             <StatusBar barStyle={'light-content'} />
//             <ImageBackground
//                 source={require('../../assets/images/ImageBackground/bg.png')}
//                 resizeMode="cover"
//                 style={{ flex: 1 }}>
//                 <SafeAreaView style={styles.container}>

//                 </SafeAreaView>
//             </ImageBackground>
//         </>
//     )
// }







import React, { useRef, useMemo, useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView,Modal } from 'react-native';
import ListItem from '../../components/ListItem';
 import { connect, useDispatch } from 'react-redux';
import Chart from '../../components/Chart';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
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
    const [modal,setModal]=useState(false)
    const [selectedCoinData, setSelectedCoinData] = useState(null);

    useEffect(() => {
        const fetchMarketData = async () => {
            const marketData = await getMarketData();
            setData(marketData);
        }

        fetchMarketData();
    }, [])

    // const bottomSheetModalRef = useRef(null);

    const snapPoints = useMemo(() => ['50%'], []);

    const openModal = (item) => {
        setSelectedCoinData(item);

        setModal(true)
        props.navigation.navigate("Chart",{data:item})
        // bottomSheetModalRef.current?.present();
    }
   console.log("selectedCoinData",selectedCoinData)

    return (
      <>
            <SafeAreaView style={styles.container}>
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
            </SafeAreaView>

            <Modal
                // ref={bottomSheetModalRef}
                // index={0}
                // snapPoints={snapPoints}
                visible={false}
                style={styles.bottomSheet}
            >
                {/* {selectedCoinData ? (
                    
                    <Chart
                        currentPrice={selectedCoinData.current_price}
                        logoUrl={selectedCoinData.image}
                        name={selectedCoinData.name}
                        symbol={selectedCoinData.symbol}
                        priceChangePercentage7d={selectedCoinData.price_change_percentage_7d_in_currency}
                        sparkline={selectedCoinData?.sparkline_in_7d.price}
                    />
                ) : null} */}
            </Modal>
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






import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop, ClipPath, G } from "react-native-svg";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SliderBox } from "react-native-image-slider-box";


import {
    Text,
    Alert,
    Button,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    ActivityIndicator,
    ImageBackground,
    ScrollView,
    FlatList,

} from 'react-native';

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,

} from 'react-native-safe-area-context';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

            favorites_products: [
                {
                    id: 1,
                    name: "BandRate Smart",
                    code: "BRSMWONEBBWB",
                    price: 9850,
                    image: require('../../assets/images/catalog_img1.png'),
                } ,
                {
                    id: 2,
                    name: "BandRate Smart",
                    code: "BRSMWONEBBWB",
                    price: 9000,
                    image: require('../../assets/images/catalog_img2.png'),
                } ,
                {
                    id: 3,
                    name: "BandRate Smart",
                    code: "BRSMWONEBBWB",
                    price: 9850,
                    image: require('../../assets/images/catalog_img3.png'),
                } ,
                {
                    id: 4,
                    name: "BandRate Smart",
                    code: "BRSMWONEBBWB",
                    price: 9850,
                    image: require('../../assets/images/catalog_img4.png'),
                } ,
            ],

        };


    }


    getFavoritesProducts = () => {
        return this.state.favorites_products;
    }


    redirectToCatalog = () => {
        this.props.navigation.navigate("Catalog");
    }
    backToCatalog = () => {
        this.props.navigation.navigate("Catalog");
    }


    redirectToBasket = () => {
        this.props.navigation.navigate("Basket");
    }



    render() {

        return (
            <SafeAreaView style={styles.container} >
                <View style={styles.favorites_main_wrapper}>
                    <View style={styles.favorites_icon_title_wrapper}>
                        <View style={styles.back_to_catalog_btn_wrapper}>
                            <TouchableOpacity style={styles.back_to_catalog_btn}  onPress={() => this.backToCatalog()}>
                                <Svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={35}
                                    height={35}
                                    viewBox="0 0 35 35"
                                    fill="none"
                                >
                                    <Path
                                        d="M20.169 27.708a1.458 1.458 0 01-1.138-.54l-7.043-8.75a1.458 1.458 0 010-1.851l7.291-8.75a1.46 1.46 0 112.246 1.866L15.006 17.5l6.3 7.817a1.458 1.458 0 01-1.137 2.391z"
                                        fill="#000"
                                    />
                                </Svg>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.favorites_title}>Избранное</Text>
                    </View>

                    <ScrollView style={styles.favorites_main_items_wrapper}>

                        {this.getFavoritesProducts().map((favorites_product, index) => {
                            return (


                                <View style={styles.favorites_products_item} key={favorites_product.id}>
                                    <View style={styles.favorites_products_item_img_info_wrapper}>
                                        <TouchableOpacity style={styles.favorites_products_img_box}>

                                            <Image style={styles.favorites_products_img} source={favorites_product.image} />
                                        </TouchableOpacity>
                                        <View style={styles.favorites_products_item_info}>
                                            <Text style={styles.favorites_products_item_info_title}>{favorites_product.name}</Text>
                                            <Text style={styles.favorites_products_item_info_code}>{favorites_product.code}</Text>
                                            <View style={styles.favorites_products_item_info_price_title_wrapper}>

                                                <Text style={styles.favorites_products_item_price_title}>Цена.</Text>
                                                <Text style={styles.favorites_products_item_info_price}>
                                                    {favorites_product.price}<Text style={styles.favorites_products_item_info_price_light}>руб.</Text>
                                                </Text>

                                            </View>

                                        </View>
                                    </View>

                                    <View style={styles.favorites_products_delete_add_to_card_btns_wrapper}>
                                           <TouchableOpacity style={styles.favorites_products_delete_btn}>
                                               <Svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width={20}
                                                   height={20}
                                                   viewBox="0 0 20 20"
                                                   fill="none"
                                               >
                                                   <Path
                                                       d="M10 10L1.077 1.01M1.01 18.923L10 10l-8.99 8.923zM10 10l8.99-8.923L10 10zm0 0l8.923 8.99L10 10z"
                                                       stroke="#C4C4C4"
                                                       strokeWidth={2}
                                                       strokeLinecap="round"
                                                   />
                                               </Svg>
                                           </TouchableOpacity>
                                        <TouchableOpacity style={styles.favorites_products_add_to_card_btn}>
                                            <Svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={22}
                                                height={20}
                                                viewBox="0 0 22 20"
                                                fill="none"
                                            >
                                                <Path
                                                    d="M4.75.946h0m0 0h0m0 0s0 0 0 0m0 0h0m.35 1.75l.161.804h15.724l-1.778 8H6.86l.24 1.196.25 1.25.16.804h10.974l-.111.5H7.156L4.566 2.304l-.16-.804H1V1h3.761l.34 1.696zm12.445 14.26l.578-.58-.003.015.701.348c.38.188.651.593.651 1.073 0 .678-.53 1.188-1.139 1.188-.608 0-1.139-.51-1.139-1.188 0-.339.136-.64.35-.856zm-10.156-.54l-.049-.243.782.784c.215.215.35.516.35.855 0 .678-.53 1.188-1.139 1.188-.608 0-1.139-.51-1.139-1.188 0-.45.239-.833.582-1.035l.613-.36z"
                                                    stroke="#fff"
                                                    strokeWidth={2}
                                                />
                                            </Svg>
                                        </TouchableOpacity>
                                    </View>

                                </View>



                            );
                        })}
                    </ScrollView>


                    <View style={styles.footer_wrapper}>

                        <TouchableOpacity style={styles.footer_page_btn}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={28}
                                height={26}
                                viewBox="0 0 28 26"
                                fill="none"
                            >
                                <Path
                                    d="M7.75 1.75c-3.451 0-6.25 2.77-6.25 6.188 0 2.758 1.094 9.306 11.86 15.925a1.232 1.232 0 001.28 0C25.406 17.242 26.5 10.696 26.5 7.938c0-3.418-2.799-6.188-6.25-6.188S14 5.5 14 5.5s-2.799-3.75-6.25-3.75z"
                                    stroke="#D0251D"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footer_page_btn}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={28}
                                height={30}
                                viewBox="0 0 28 30"
                                fill="none"
                            >
                                <Path
                                    d="M15.16 24.268h9.108a1.867 1.867 0 001.867-1.867V3.734a1.867 1.867 0 00-1.867-1.867H5.598a1.867 1.867 0 00-1.866 1.867v7.946a8.403 8.403 0 00-1.867.936V3.734A3.734 3.734 0 015.6 0h18.668A3.734 3.734 0 0128 3.734V22.4a3.734 3.734 0 01-3.733 3.734h-7.242l-1.866-1.867h.002zM8.869 9.334a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8zm4.198-.934a.933.933 0 01.933-.933h7.467a.934.934 0 010 1.867H14a.934.934 0 01-.933-.934zm0 5.6a.933.933 0 01.933-.933h7.467a.933.933 0 010 1.867H14a.934.934 0 01-.933-.933zm8.4 6.534H14.88c.07-.62.07-1.246 0-1.866h6.588a.933.933 0 110 1.866h-.002zM.717 16.624a6.533 6.533 0 009.736 8.204l4.747 4.775a.934.934 0 101.32-1.322l-4.76-4.76A6.533 6.533 0 10.715 16.623h.001zm9.696.384A4.667 4.667 0 112.7 22.265a4.667 4.667 0 017.714-5.257z"
                                    fill="#333"
                                />
                            </Svg>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.footer_page_btn, {positon: "relative", bottom: 8}]} onPress={() => this.redirectToCatalog()}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={44}
                                height={42}
                                viewBox="0 0 44 42"
                                fill="none"
                            >
                                <Path
                                    d="M22.495 2.638l17.884 17.884H38.1v19.1a.7.7 0 01-.7.7h-9.5v-15.4H16.1v15.4H6.6a.7.7 0 01-.7-.7v-19.1H3.621L21.505 2.638a.7.7 0 01.99 0z"
                                    stroke="#333333"
                                    strokeWidth={3}
                                />
                            </Svg>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footer_page_btn} onPress={() => this.redirectToBasket()}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={33}
                                height={29}
                                viewBox="0 0 33 29"
                                fill="none"
                            >
                                <Path
                                    d="M29.282 16.843h0a.372.372 0 01-.366.282H10.893l.249 1.203.375 1.812.165.797h16.192c.255 0 .415.227.367.437l-.317 1.375-.179.78.721.346a2.17 2.17 0 011.242 1.953c0 1.189-.978 2.172-2.208 2.172-1.23 0-2.208-.983-2.208-2.172 0-.604.25-1.15.66-1.547l1.773-1.718h-16.95l1.774 1.718c.41.397.66.943.66 1.547C13.208 27.017 12.23 28 11 28s-2.208-.983-2.208-2.172c0-.798.439-1.502 1.106-1.881l.632-.36-.147-.712L6.358 3.422l-.165-.797H1.375A.367.367 0 011 2.265V1.36C1 1.172 1.157 1 1.375 1h5.874c.187 0 .335.129.368.29h0l.525 2.538.165.797h23.317c.255 0 .415.227.367.437l-2.709 11.78z"
                                    stroke="#333"
                                    strokeWidth={2}
                                />
                            </Svg>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footer_page_btn}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={30}
                                height={30}
                                viewBox="0 0 30 30"
                                fill="none"
                            >
                                <Path
                                    d="M19.625 11.25a4.625 4.625 0 11-9.25 0 4.625 4.625 0 019.25 0zM5.1 24.9a14.259 14.259 0 01-.143-.147l.64-1.032C6.72 21.914 9.3 19.75 15 19.75c5.7 0 8.28 2.162 9.403 3.971l.64 1.032c-.047.05-.095.098-.143.146a14 14 0 01-19.8 0zM15 1s0 0 0 0v.875V1s0 0 0 0z"
                                    stroke="#333"
                                    strokeWidth={2}
                                />
                            </Svg>
                        </TouchableOpacity>

                    </View>
                </View>


            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "space-between",
        backgroundColor: '#ffffff',
        width: "100%",
        height: "100%",
        position: "relative",


    },

    favorites_main_wrapper: {
       width: "100%",
        flex: 1,
        paddingTop: 28,

    },

    footer_wrapper: {
        shadowColor: "#00000040",
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 24,
        shadowRadius: 1,

        elevation: 10,
        backgroundColor: "#ECECEC",
        width: "100%",
        height: 90,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-between",
        paddingTop: 12,
        paddingBottom: 27,
        paddingHorizontal: 32,
        // position: "absolute",
        // bottom: -180,

    },

    favorites_icon_title_wrapper: {
        marginBottom: 25,
        paddingLeft: 25,
        flexDirection: "row",
        alignItems: "center",
    },
    favorites_title: {
        color: "#333333",
        fontSize: 32,
        fontWeight: "bold",
        marginLeft: 59,
    },
    favorites_main_items_wrapper: {
          flex: 1,
          width: "100%",
          paddingHorizontal: 20,
          paddingBottom: 50,
    },
    favorites_products_item: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 25,
    },
    favorites_products_img_box: {
        backgroundColor: "#E2E2E2",
        borderRadius: 8,
        marginRight: 10,
        width: 115,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
    },
    favorites_products_img: {
        width: 105,
        height: 105,
    },
    favorites_products_item_img_info_wrapper: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    favorites_products_item_info_title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
    },
    favorites_products_item_info_code: {
        fontSize: 16,
        fontWeight: "400",
        color: "#000000",
        marginBottom: 16,
    },
    favorites_products_item_price_title: {
        fontSize: 17,
        fontWeight: "400",
        color: "#000000",
    },
    favorites_products_item_info_price: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
    },
    favorites_products_add_to_card_btn: {
        backgroundColor: "#EE827D",
        borderRadius: 8,
        width: 42,
        height: 34,
        alignItems: "center",
        justifyContent: "center",

    },


    favorites_products_delete_btn: {
        marginBottom: 77,
        alignItems: "center",
        justifyContent: "center",
    },





});
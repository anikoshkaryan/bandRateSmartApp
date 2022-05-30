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
    Modal,

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

            basket_products: [
                {
                    id: 1,
                    name: "BandRate Smart",
                    code: "BRSMWONEBBWB",
                    price: 9850,
                    total: 19700,
                    image: require('../../assets/images/catalog_img1.png'),
                    count: "1",
                } ,
                {
                    id: 2,
                    name: "BandRate Smart",
                    code: "BRSMWONEBBWB",
                    price: 6000,
                    total: 6000,
                    image: require('../../assets/images/catalog_img2.png'),
                    count: "1",
                } ,
                {
                    id: 3,
                    name: "BandRate Smart",
                    code: "BRSMWONEBBWB",
                    price: 9850,
                    total: 10000,
                    image: require('../../assets/images/catalog_img3.png'),
                    count: "1",
                } ,
                {
                    id: 4,
                    name: "BandRate Smart",
                    code: "BRSMWONEBBWB",
                    price: 9850,
                    total: 19700,
                    image: require('../../assets/images/catalog_img4.png'),
                    count: "1",
                } ,
            ],

            subtotal_amount: 25700,
            total_amount: 25700,
            balance: 0,
            showFilter: false,
        };


    }


    getBasketProducts = () => {
        return this.state.basket_products;
    }


    redirectToCatalog = () => {
        this.props.navigation.navigate("Catalog");
    }
    backToCatalog = () => {
        this.props.navigation.navigate("Catalog");
    }


    redirectToFavorites = () => {
        this.props.navigation.navigate("Favorites");
    }

    render() {

        return (
            <SafeAreaView style={styles.container} >
                <View style={styles.basket_main_wrapper}>
                    <View style={styles.basket_icon_title_wrapper}>
                        <View style={styles.back_to_btn_wrapper}>
                            <TouchableOpacity style={styles.back_to_btn} >
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
                        <Text style={styles.basket_title}>Корзина</Text>
                    </View>

                    <ScrollView style={styles.basket_main_items_wrapper}>

                        {this.getBasketProducts().map((basket_product, index) => {
                            return (


                                <View style={styles.basket_products_item} key={basket_product.id}>
                                    <View style={styles.basket_products_item_img_info_wrapper}>
                                        <TouchableOpacity style={styles.basket_products_img_box}>

                                            <Image style={styles.basket_products_img} source={basket_product.image} />
                                        </TouchableOpacity>
                                        <View style={styles.basket_products_item_info}>
                                            <Text style={styles.basket_products_item_info_title}>{basket_product.name}</Text>
                                            <Text style={styles.basket_products_item_info_code}>{basket_product.code}</Text>
                                            <View style={styles.basket_products_item_info_price_title_wrapper}>


                                                <Text style={styles.basket_products_item_info_price}>
                                                    {basket_product.price}<Text style={styles.basket_products_item_info_price_light}> руб.</Text>
                                                </Text>

                                                <View style={styles.basket_product_count_buttons_inputs_wrapper}>

                                                    <TouchableOpacity  style={styles.basket_product_count_minus_btn}>
                                                        <Svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={18}
                                                            height={2}
                                                            viewBox="0 0 18 2"
                                                            fill="none"
                                                        >
                                                            <Path
                                                                d="M16.333 1H1.667"
                                                                stroke="#000"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                            />
                                                        </Svg>
                                                    </TouchableOpacity>
                                                    <TextInput
                                                        style={styles.basket_product_count_input_field}
                                                        // onChangeText={(val) => this.setState({count: val})}
                                                        value={basket_product.count}
                                                        keyboardType='numeric'
                                                    />
                                                    <TouchableOpacity  style={styles.basket_product_count_plus_btn}>

                                                        <Svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={17}
                                                            height={16}
                                                            viewBox="0 0 17 16"
                                                            fill="none"
                                                        >
                                                            <Path
                                                                d="M9 8H1.667M9 15.333V8v7.333zM9 8V.667 8zm0 0h7.333H9z"
                                                                stroke="#000"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                            />
                                                        </Svg>

                                                    </TouchableOpacity>

                                                </View>

                                            </View>

                                        </View>
                                    </View>

                                    <View style={styles.basket_products_delete_add_to_card_btns_wrapper}>
                                        <TouchableOpacity style={styles.basket_products_delete_btn}>
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
                                       <View  style={styles.basket_products_total_amount_title_number_wrapper}>
                                           <Text style={styles.basket_products_total_amount_title}>Итого:</Text>
                                           <Text style={styles.basket_products_total_amount_number}>{basket_product.total} руб.</Text>
                                       </View>
                                    </View>

                                </View>



                            );
                        })}
                    </ScrollView>
                    <View style={styles.total_amount_items_check_order_btn_wrapper}>
                        <View style={styles.total_amount_wrapper}>
                            <View style={styles.total_amount_item}>
                                <Text style={styles.subtotal_amount_info_title}>Подитог.</Text>
                                <Text style={styles.subtotal_amount_info_number}> {this.state.subtotal_amount} Руб.</Text>
                            </View>
                            <View style={styles.total_amount_item}>
                                <Text style={styles.total_amount_info_title}>Итоговая сумма.</Text>
                                <Text style={styles.total_amount_info_number}> {this.state.total_amount} Руб.</Text>
                            </View>
                        </View>


                    </View>

                    <TouchableOpacity style={styles.check_order_btn}    onPress={() => {this.setState({showFilter:true})}}>
                        <Text style={styles.check_order_btn_text}>Оформить заказ</Text>
                    </TouchableOpacity>

                    {this.state.balance < 2000
                        ?



                        <Modal animationType="slide"
                               transparent={true}
                               visible={this.state.showFilter}
                               onRequestClose={() => {
                                   Alert.alert('Modal has been closed.');

                               }}>
                            <View style={styles.payment_modal_parent}>
                                <View style={styles.payment_modal_title_close_btn_wrapper}>
                                    <Text style={styles.payment_modal_title}>Оплата</Text>
                                    <TouchableOpacity style={styles.filter_modal_close_btn} onPress={()=>{this.setState({showFilter: false})}}>
                                        <Svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={19}
                                            height={19}
                                            viewBox="0 0 19 19"
                                            fill="none"
                                        >
                                            <Path
                                                d="M9.5 9.5L1.751 1.693m-.058 15.556L9.5 9.5l-7.807 7.749zM9.5 9.5l7.808-7.749L9.5 9.5zm0 0l7.749 7.808L9.5 9.5z"
                                                stroke="#000"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                            />
                                        </Svg>
                                    </TouchableOpacity>
                                </View>




                            </View>
                        </Modal>
                        :
                        <View></View>
                    }


                    <View style={styles.footer_wrapper}>

                        <TouchableOpacity style={styles.footer_page_btn} onPress={() => this.redirectToFavorites()}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={28}
                                height={26}
                                viewBox="0 0 28 26"
                                fill="none"
                            >
                                <Path
                                    d="M7.75 1.75c-3.451 0-6.25 2.77-6.25 6.188 0 2.758 1.094 9.306 11.86 15.925a1.232 1.232 0 001.28 0C25.406 17.242 26.5 10.696 26.5 7.938c0-3.418-2.799-6.188-6.25-6.188S14 5.5 14 5.5s-2.799-3.75-6.25-3.75z"
                                    stroke="#333333"
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
                        <TouchableOpacity style={styles.footer_page_btn}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={33}
                                height={29}
                                viewBox="0 0 33 29"
                                fill="none"
                            >
                                <Path
                                    d="M29.282 16.843h0a.372.372 0 01-.366.282H10.893l.249 1.203.375 1.812.165.797h16.192c.255 0 .415.227.367.437l-.317 1.375-.179.78.721.346a2.17 2.17 0 011.242 1.953c0 1.189-.978 2.172-2.208 2.172-1.23 0-2.208-.983-2.208-2.172 0-.604.25-1.15.66-1.547l1.773-1.718h-16.95l1.774 1.718c.41.397.66.943.66 1.547C13.208 27.017 12.23 28 11 28s-2.208-.983-2.208-2.172c0-.798.439-1.502 1.106-1.881l.632-.36-.147-.712L6.358 3.422l-.165-.797H1.375A.367.367 0 011 2.265V1.36C1 1.172 1.157 1 1.375 1h5.874c.187 0 .335.129.368.29h0l.525 2.538.165.797h23.317c.255 0 .415.227.367.437l-2.709 11.78z"
                                    stroke="#D0251D"
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
    basket_main_wrapper: {
        width: "100%",
        flex: 1,
        paddingTop: 28,

    },

    basket_icon_title_wrapper: {
        marginBottom: 25,
        paddingLeft: 25,
        flexDirection: "row",
        alignItems: "center",
    },
    basket_title: {
        color: "#333333",
        fontSize: 32,
        fontWeight: "bold",
        marginLeft: 59,
    },
    basket_main_items_wrapper: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 20,
        paddingBottom: 50,
        marginBottom: 87,
    },

    basket_products_item: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    basket_products_item_img_info_wrapper: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    basket_products_img_box: {
        backgroundColor: "#E2E2E2",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        width: 115,
        height: 150,
        marginRight: 10,

    },
    basket_products_img: {
        width: 105,
        height: 105,
    },
    basket_products_item_info_title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
    },

    basket_products_item_info_code: {
        fontSize: 16,
        fontWeight: "400",
        color: "#000000",
        marginBottom: 34,
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

    basket_products_item_info_price: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 5,
    },
    basket_product_count_buttons_inputs_wrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    basket_product_count_minus_btn:{
          backgroundColor: "#E6524B",
          width: 30,
          height: 30,
          borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    basket_product_count_plus_btn:{
        backgroundColor: "#E6524B",
        width: 30,
        height: 30,
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    basket_product_count_input_field: {
        backgroundColor: "#F6C0BD",
        width: 40,
        height: 24,
        color: "#000000",
        fontWeight: "bold",
        fontSize: 16,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    basket_products_delete_btn: {
        marginBottom: 70,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    basket_products_total_amount_title: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#000000",
    },
    basket_products_total_amount_number: {
        fontSize: 16,
        fontWeight: "400",
        color: "#000000",
    },
    basket_products_total_amount_title_number_wrapper: {
        alignItems: "flex-end",
        justifyContent: "center",
    },
    total_amount_wrapper: {
        width: "100%",
        marginBottom: 25,

    },
    total_amount_items_check_order_btn_wrapper: {
        paddingHorizontal: 20,
    },
    total_amount_item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
    },
    subtotal_amount_info_title: {
        color: "#000000",
        fontWeight: "400",
        fontSize: 18,
    },
    subtotal_amount_info_number: {
        color: "#000000",
        fontWeight: "400",
        fontSize: 20,
    },
    total_amount_info_title: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 18,
    },
    total_amount_info_number: {
        color: "#000000",
        fontWeight: "bold",
        fontSize: 20,
    },
    check_order_btn: {
        backgroundColor: "#D0251D",
        width: 265,
        alignSelf:"center",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 11,
        borderRadius: 8,
        height: 50,
        marginBottom: 30,
    },
    check_order_btn_text: {
       color: "#ffffff",
        fontWeight: "bold",
        fontSize: 18,

    },

});
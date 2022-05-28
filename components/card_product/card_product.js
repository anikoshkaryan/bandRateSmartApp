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
            email: null,
            password: null,
            sort_by_default: false,
            slider_images: [
                require('../../assets/images/catalog_img1.png'),
                require('../../assets/images/catalog_img2.png'),
                require('../../assets/images/catalog_img3.png'),
                require('../../assets/images/catalog_img4.png')
            ],
            current_image: 1,
            similar_products: [
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
    getSimilarProducts = () => {
        return this.state.similar_products;
    }



    backToCatalog = () => {
        this.props.navigation.navigate("Catalog");
    }

    sliderImages = () => {
        return this.state.slider_images;
    }



    render() {

        return (
            <SafeAreaView style={styles.container} >

                <ScrollView style={styles.card_product_main_wrapper}>
                    <View style={styles.back_to_catalog_card_product_favorites_btns_wrapper}>
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
                        <View style={styles.card_product_favorites_btn}>
                            <Svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={30}
                                height={26}
                                viewBox="0 0 30 26"
                                fill="none"
                            >
                                <Path
                                    d="M8.333 1C4.652 1 1.666 3.955 1.666 7.6c0 2.943 1.167 9.927 12.651 16.987a1.314 1.314 0 001.365 0C27.166 17.527 28.334 10.543 28.334 7.6c0-3.645-2.985-6.6-6.666-6.6C17.985 1 15 5 15 5s-2.986-4-6.667-4z"
                                    stroke="#D0251D"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </Svg>
                        </View>
                    </View>

                    <View style={styles.slider_box}>
                        <SliderBox
                            dotStyle={{
                                width:20,
                                height:20,
                                borderRadius:100,
                                backgroundColor:'#A5A5A5',
                                marginHorizontal:0,
                                padding: 0,
                                margin: 0,
                                position: "absolute",
                                bottom: -30,




                            }}
                            style={styles.slider_images}
                            inactiveDotColor="#A5A5A5"
                            dotColor="#D0251D"
                            sliderBoxHeight={254}
                            circleLoop={true}
                            resizeMode={"cover"}


                            // paginationBoxStyle={{
                            //     alignItems: "center",
                            //     alignSelf: "center",
                            //     justifyContent: "center",
                            //     paddingVertical: 10,
                            //     backgroundColor:"#00000099",
                            //     display: "block",
                            // }}
                            images={this.sliderImages()}
                            onCurrentImagePressed={index => console.log(index)}
                            currentImageEmitter={index => this.setState({current_image: index+1})}
                        />
                    </View>

                        <View style={styles.card_product_info_wrapper}>
                            <Text style={styles.card_product_info_name}>BandRate Smart Q1111BR</Text>
                            <Text style={styles.card_product_info_code}>Код товара: 1196034</Text>
                            <Text style={styles.card_product_info_price}>Цена:
                                <View style={styles.card_product_info_price_line}></View>
                                <Text style={styles.card_product_info_price_bold}>
                                    6000 Руб.
                                </Text>

                            </Text>
                            <View style={styles.card_product_info_description}>
                                <Text style={styles.card_product_info_description_title}>Описание</Text>
                                <View style={styles.card_product_info_description_line}></View>
                                <View style={styles.card_product_info_description_items}>
                                    <View style={styles.card_product_info_description_item}>
                                        <Text style={styles.card_product_info_description_item_title}>Модель</Text>
                                        <Text style={styles.card_product_info_description_item_info}>BandRate Smart Q1111BR</Text>
                                    </View>
                                    <View style={styles.card_product_info_description_item}>
                                        <Text style={styles.card_product_info_description_item_title}>Пол</Text>
                                        <Text style={styles.card_product_info_description_item_info}>Мужской</Text>
                                    </View>
                                    <View style={styles.card_product_info_description_item}>
                                        <Text style={styles.card_product_info_description_item_title}>Механизм</Text>
                                        <Text style={styles.card_product_info_description_item_info}>Кварцевый</Text>
                                    </View>
                                </View>
                                <View style={styles.card_product_info_description_footer_line_icon}>
                                    <View style={styles.card_product_info_description_footer_line}></View>
                                    <View style={styles.card_product_info_description_footer_icon}>
                                        <Svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={18}
                                            height={10}
                                            viewBox="0 0 18 10"
                                            fill="none"
                                        >
                                            <Path
                                                d="M17.75 1.712a1.251 1.251 0 01-.462.975l-7.5 6.038a1.25 1.25 0 01-1.588 0L.7 2.475A1.252 1.252 0 112.3.55L9 6.137l6.7-5.4a1.25 1.25 0 012.05.975z"
                                                fill="#D9D9D9"
                                            />
                                        </Svg>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.similar_products_items_title_wrapper}>
                                <Text style={styles.similar_products_items_title}>Похожые товары</Text>
                                <ScrollView style={styles.similar_products_items_wrapper} horizontal={true}>

                                    {this.getSimilarProducts().map((product, index) => {
                                        return (


                                        <View style={styles.similar_products_item} key={product.id}>
                                            <TouchableOpacity style={styles.similar_products_img_box}>

                                                <Image style={styles.similar_products_img} source={product.image} />
                                            </TouchableOpacity>
                                            <View style={styles.similar_products_item_info}>
                                                <Text style={styles.similar_products_item_info_title}>{product.name}</Text>
                                                <Text style={styles.similar_products_item_info_code}>{product.code}</Text>
                                                <View style={styles.similar_products_item_info_price_card_icon_wrapper}>
                                                    <Text style={styles.similar_products_item_info_price}>
                                                        {product.price}<Text style={styles.similar_products_item_info_price_light}>руб.</Text>
                                                    </Text>
                                                    <TouchableOpacity style={styles.card_icon}>
                                                        <Svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={22}
                                                            height={20}
                                                            viewBox="0 0 22 20"
                                                            fill="none"
                                                        >
                                                            <Path
                                                                d="M19.683 11.662h0a.421.421 0 01-.406.338H7.471l.12.598.25 1.25.08.402h10.662c.254 0 .47.248.406.537l-.211.948-.085.382.35.174c.547.272.93.848.93 1.521 0 .943-.745 1.688-1.64 1.688-.894 0-1.639-.745-1.639-1.688 0-.475.191-.903.497-1.209l.852-.853H7.624l.852.853c.305.306.496.734.496 1.21 0 .942-.744 1.687-1.639 1.687-.894 0-1.639-.745-1.639-1.688 0-.63.336-1.176.828-1.466l.307-.18-.07-.349L4.076 2.402 3.996 2H.916A.427.427 0 01.5 1.562V.938C.5.685.697.5.917.5h3.916c.19 0 .365.138.407.348h0l.35 1.75.081.402h15.412c.254 0 .47.248.406.537l-1.806 8.125z"
                                                                stroke="#fff"
                                                            />
                                                        </Svg>

                                                    </TouchableOpacity>
                                                </View>

                                            </View>


                                        </View>



                                        );
                                    })}


                                </ScrollView>
                                <View style={styles.buy_add_to_card_buttons_wrapper}>
                                    <TouchableOpacity style={styles.buy_button}>
                                        <Text style={styles.buy_button_text}>Купить</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.add_to_card_button}>
                                        <Text style={styles.add_to_card_button_text}>В корзину</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>


                        </View>


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
                                stroke="#333"
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

                    <TouchableOpacity style={[styles.footer_page_btn, {positon: "relative", bottom: 8}]}>
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








            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: '#ffffff',
        width: "100%",
        height: "100%",
        position: "relative",


    },
    card_product_main_wrapper: {
        width: "100%",
        // justifyContent: "space-between",
        paddingTop: 21,
        paddingBottom: 25,
        // position: "relative",
        flex: 1,


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
        // bottom: 0,

    },
    slider_images: {
        width: 254,
        height: 254,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: 20,


    },

    back_to_catalog_card_product_favorites_btns_wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        position: "absolute",
        width: "100%",
        top: 30,
        zIndex: 99,
    },


    card_product_info_name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000000",
        lineHeight: 35,
    },

    card_product_info_code: {
        fontSize: 16,
        fontWeight: "400",
        color: "#000000",
        lineHeight: 25,
        marginBottom: 15,
    },

    card_product_info_price: {
        fontSize: 22,
        fontWeight: "400",
        color: "#000000",
        lineHeight: 35,
        marginBottom: 10,

    },

    card_product_info_price_bold: {
        fontWeight: "bold",
    },
    card_product_info_price_line: {
        marginRight: 5,
    },
    card_product_info_wrapper: {
        width: "100%",
        paddingHorizontal: 17,
        paddingTop: 30,
    },
    card_product_info_description_title: {
        fontSize: 16,
        fontWeight: "400",
        color: "#000000",
        lineHeight: 25,
        marginBottom: 5,
    },
    card_product_info_description_line: {
        borderBottomWidth: 1,
        borderBottomColor: "#D9D9D9",
        marginBottom: 10,
        height: 1,
    },
    card_product_info_description_item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
    },

    card_product_info_description_items: {
        marginBottom: 17,
    },
    card_product_info_description_item_title: {
        fontSize: 15,
        fontWeight: "400",
        color: "#000000",
         lineHeight: 24,
    },
    card_product_info_description_footer_line_icon: {
        flexDirection: "row",
        alignItems: "center",

    },
    card_product_info_description_footer_line: {
        width: "88%",
        borderBottomColor: "#D9D9D9",
        borderBottomWidth: 1,
        marginRight: 14,
        height: 1,
    },
    card_product_info_description: {
        width: "100%",
        marginBottom: 30,
    },
    similar_products_items_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000000",
        marginBottom: 10,
        lineHeight: 32,

    },

    similar_products_items_wrapper: {
        marginBottom: 40,
        width: "100%",

    },

    similar_products_item: {
        width: 151,
        borderRadius: 5,
        marginRight: 15,
    },

    similar_products_item_info_title: {
        fontSize: 14,
        fontWeight: '500',
        color: "#000000",
        lineHeight: 16,
    },

    similar_products_item_info_code: {
        fontSize: 14,
        fontWeight: '400',
        color: "#000000",
        lineHeight: 16,
        marginBottom: 6,
    },
    similar_products_img_box: {
        backgroundColor: "#E2E2E2",
        borderRadius: 5,
        justifyContent:"center",
        alignItems: "center",

        paddingHorizontal: 25,
        paddingVertical: 10,

    },
    similar_products_img: {
        width: 101,
        height: 101,
    },

    similar_products_item_info: {
        backgroundColor: "#f9f9f9",
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    similar_products_item_info_price: {
        fontSize: 14,
        fontWeight: '700',
        color: "#000000",
        lineHeight: 22,
    },
    similar_products_item_info_price_light: {
        fontSize: 14,
        fontWeight: '400',
        color: "#000000",
        lineHeight: 22,
    },
    similar_products_item_info_price_card_icon_wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    card_icon: {
        backgroundColor: "#E96761",
        width: 34,
        height: 34,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    buy_add_to_card_buttons_wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 50,
    },

    buy_button: {
        backgroundColor: "#D0251D",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width:"100%",
        maxWidth: 180,


    },

    buy_button_text: {
       fontWeight: "bold",
       fontSize: 18,
       color: "#FFFFFF",
    },

    add_to_card_button: {
        backgroundColor: "#ffffff",
        borderRadius: 8,
        borderColor: "#000000",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width:"100%",
        maxWidth: 180,
    },
    add_to_card_button_text: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#000000",
    },







});
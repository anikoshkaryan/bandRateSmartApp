import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop, ClipPath, G } from "react-native-svg";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



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
            catalogItems: [
                {
                   image: require('../../assets/images/catalog_img1.png'),
                    name: 'BandRate Smart',
                    code: "Q1111BR",
                    discountedPrice: "",
                    price:"6000",

                },
                {
                    image: require('../../assets/images/catalog_img2.png'),
                    name: 'BandRate Smart',
                    code: "BRSMWONEBBWB",
                    discountedPrice: "2.990",
                    price:"9.850",

                },
                {
                    image: require('../../assets/images/catalog_img3.png'),
                    name: 'BandRate Smart',
                    code: "BRSSK7PROBBWB",
                    discountedPrice: "",
                    price:"9.000",

                },

                {
                    image: require('../../assets/images/catalog_img4.png'),
                    name: 'BandRate Smart',
                    code: "F11 Black",
                    discountedPrice: "2.990",
                    price:"2.691",

                },

                {
                    image: require('../../assets/images/catalog_img1.png'),
                    name: 'BandRate Smart',
                    code: "Q1111BR",
                    discountedPrice: "",
                    price:"6000",

                },
                {
                    image: require('../../assets/images/catalog_img2.png'),
                    name: 'BandRate Smart',
                    code: "BRSMWONEBBWB",
                    discountedPrice: "2.990",
                    price:"9.850",

                },
                {
                    image: require('../../assets/images/catalog_img3.png'),
                    name: 'BandRate Smart',
                    code: "BRSSK7PROBBWB",
                    discountedPrice: "",
                    price:"9.000",

                },

                {
                    image: require('../../assets/images/catalog_img4.png'),
                    name: 'BandRate Smart',
                    code: "F11 Black",
                    discountedPrice: "2.990",
                    price:"2.691",

                },


            ]


        };


    }


    redirectToCardProduct = () => {
        this.props.navigation.navigate("CardProduct");
    }


    redirectToFavorites = () => {
        this.props.navigation.navigate("Favorites");
    }

    redirectToBasket = () => {
        this.props.navigation.navigate("Basket");
    }


    render() {

        return (
            <SafeAreaView style={styles.container} >

                 <View style={styles.catalog_main_wrapper}>

                     <View style={styles.catalog_title_menu_icon_wrapper}>
                         <Text style={styles.catalog_title}>Каталог</Text>
                         <View style={styles.catalog_menu_icon}>
                             <Svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width={30}
                                 height={18}
                                 viewBox="0 0 30 18"
                                 fill="none"
                             >
                                 <Path
                                     d="M30 16.25A1.25 1.25 0 0028.75 15h-7.5a1.25 1.25 0 000 2.5h7.5A1.25 1.25 0 0030 16.25zm0-7.5a1.25 1.25 0 00-1.25-1.25h-17.5a1.25 1.25 0 000 2.5h17.5A1.25 1.25 0 0030 8.75zm0-7.5A1.25 1.25 0 0028.75 0H1.25a1.25 1.25 0 100 2.5h27.5A1.25 1.25 0 0030 1.25z"
                                     fill="#000"
                                 />
                             </Svg>
                         </View>
                     </View>



                     <FlatList
                         style={styles.catalog_items_main_wrapper}
                         data={this.state.catalogItems}
                         renderItem={({item}) => (
                             // <TouchableOpacity
                             //     style={{width: '20%', flexDirection: 'column', alignItems: 'flex-start'}}
                             //     onPress={() => {
                             //         this.openBigImage(item)
                             //     }}
                             // >
                             //     <Image
                             //         source={{uri: item.image}}
                             //         style={{
                             //             width: 74,
                             //             height: 74,
                             //             borderWidth: 2,
                             //             borderColor: '#17171F',
                             //             borderBottomWidth: 0,
                             //         }}
                             //     />
                             //
                             //
                             // </TouchableOpacity>



                             <View style={styles.catalog_item}  >
                                 <TouchableOpacity style={styles.catalog_item_img_wrapper} onPress={() => this.redirectToCardProduct()}>
                                     <Image style={styles.catalog_item_img} source={item.image} />
                                 </TouchableOpacity>
                                 <View style={styles.catalog_item_info_wrapper}>
                                     <Text style={styles.catalog_item_info_name}>{item.name}</Text>
                                     <Text style={styles.catalog_item_info_code}>{item.code}</Text>
                                     <View style={styles.catalog_item_info_prices}>
                                         {item.discountedPrice != "" &&

                                         <Text style={styles.catalog_item_info_discounted_price}>{item.discountedPrice}руб.</Text>
                                         }

                                         <Text style={styles.catalog_item_info_price}>{item.price}руб.</Text>
                                     </View>


                                 </View>
                             </View>
                         )}
                         //Setting the number of column
                         numColumns={2}
                         columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
                         keyExtractor={(item, index) => index.toString()}
                     />



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
                                     stroke="#D0251D"
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
        height: "100%"


    },


    catalog_main_wrapper: {
        width: '100%',
        paddingTop: 28,
        justifyContent: "space-between",
        alignItems: "flex-start",
        position: 'relative',
        flex: 1,
    },

    catalog_title_menu_icon_wrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'center',
        width: "100%",
    },
    catalog_title: {
        color: "#333333",
        fontSize: 30,
        fontWeight: 'bold',
    },

    catalog_menu_icon: {
        alignItems: "flex-end",
        justifyContent: "flex-end",
        position: 'absolute',
        right: 20,
    },

    catalog_item: {
        width: '48%',
        alignSelf: "center",
        marginBottom: 20,


    },
    catalog_items_main_wrapper: {
        width: "100%",
        paddingHorizontal: 20,
        alignSelf: 'center',
        paddingTop: 18,
        paddingBottom: 18,
    },

    catalog_item_img_wrapper: {
        backgroundColor: '#E2E2E2',
        borderRadius: 10,
        height: 180,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 3,

    },
    catalog_item_info_name: {
        fontSize: 17,
        color: "#000000",
        fontWeight: '400',
    },
    catalog_item_info_code: {
       color: "#545454",
        fontWeight: '400',
        fontSize: 13,
        marginBottom: 5,
    },
    catalog_item_info_price: {
        fontSize: 16,
        color: "#000000",
        fontWeight: 'bold',
    },

    catalog_item_info_prices: {
       flexDirection: "row",
        alignItems: "center",
    },

    catalog_item_info_discounted_price: {
        color: "#E6524B",
        fontWeight: "bold",
        fontSize: 16,
        textDecorationLine: "line-through",
        marginRight: 3,
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






});
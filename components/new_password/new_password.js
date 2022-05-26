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
    ImageBackground
} from 'react-native';

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

            password: null,
            repeatPassword: null,

        };


    }


    backToRecoveryCode = () => {
        this.props.navigation.navigate("RecoveryAccountCode");
    }



    render() {

        return (
            <SafeAreaView style={styles.container} >

                <View style={styles.new_password_main_wrapper}>
                    <View style={styles.back_to_recovery_code_btn_wrapper}>
                        <TouchableOpacity style={styles.back_recovery_code_btn}  onPress={() => this.backToRecoveryCode()}>
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
                    <Text style={styles.new_password_main_title}>Задайте новый пароль</Text>
                    <Text style={styles.new_password_second_title}>
                        Придумайте сложный пароль,содержащий
                        строчные и прописные буквы,а так же цифры
                        и символы
                    </Text>

                    <View style={styles.new_password_inputs_wrapper}>
                        <View style={styles.new_password_input_wrapper}>
                            <Text style={styles.new_password_input_title}>Новый пароль</Text>
                            <TextInput
                                style={styles.new_password_input_field}
                                onChangeText={(val) => this.setState({password: val})}
                                value={this.state.password}
                            />
                        </View>
                        <View style={styles.new_password_input_wrapper}>
                            <Text style={styles.new_password_input_title}>Повторите пароль</Text>
                            <TextInput
                                style={styles.new_password_input_field}
                                onChangeText={(val) => this.setState({repeatPassword: val})}
                                value={this.state.repeatPassword}
                            />
                        </View>
                    </View>



                    <View style={styles.confirm_new_password_btn_wrapper}>
                        <TouchableOpacity style={styles.confirm_new_password_btn} >
                            <Text style={styles.confirm_new_password_btn_text}>Подтвердить</Text>
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
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
        width: "100%",
        height: "100%"


    },

    new_password_main_wrapper: {
        width: '100%',
        paddingHorizontal: 25,
        // paddingTop: 76,

    },

    new_password_main_title: {
        color: "#333333",
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
        lineHeight: 40,
    },

    new_password_second_title: {
        color: '#545454',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 30,
        marginRight: 12,
        lineHeight: 22,
    },



    recovery_account_confirm_code_btn: {
        backgroundColor: '#D0251D',
        borderRadius: 8,
        marginBottom: 18,
        width: "100%",
        maxWidth: 265,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    recovery_account_confirm_code_btn_text: {
        color: '#ffffff',
        fontWeight:'bold',
        fontSize: 18,
        lineHeight: 29,
    },

    code_input_field: {
        width: 45,
        height: 60,
        backgroundColor: '#DFDFDF',
        fontSize:15,
        color:'#000000',
        borderRadius:8,
        paddingHorizontal:14,
        borderColor: "#DFDFDF",
        borderWidth: 1,
        fontWeight: "bold",
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",

    },


    recovery_account_code_inputs_wrapper: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 10,
    },
    send_code_again_btn_wrapper: {
        marginBottom: 28,
    },
    send_code_again_btn: {
        alignSelf: "center",
    },
    send_code_again_btn_text: {
        color: "#D0251D",
        fontSize: 14,
        fontWeight: '400',
    },
    new_password_input_title: {
        color: "#000000",
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 5,
    },

    new_password_input_field: {
        width: '100%',
        borderRadius: 6,
        backgroundColor: '#E4E4E4',
        height: 50,
        color: '#000000',
        fontSize: 15,
        fontWeight: '400',
        paddingHorizontal: 15,
    },
    new_password_input_wrapper: {
        marginBottom: 15,
    },
    new_password_inputs_wrapper:{
        marginBottom: 100,
    },
    confirm_new_password_btn: {
        backgroundColor: '#D0251D',
        borderRadius: 8,
        marginBottom: 18,
        width: "100%",
        maxWidth: 265,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
    },
    confirm_new_password_btn_text: {
        color: '#ffffff',
        fontWeight:'bold',
        fontSize: 18,
        lineHeight: 29,
    },
    back_recovery_code_btn: {
        left: 0,
        marginBottom:76,

    },
});
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

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            sort_by_default: false,


        };


    }




    backToDashboard= () => {
        this.props.navigation.navigate("Dashboard");

    }
    redirectToRecoveryAccountEmail = () => {
        this.props.navigation.navigate("RecoveryAccountEmail");
    }

    render() {

        return (
            <SafeAreaView style={styles.container} >


                <View style={styles.back_to_dashboard_btn_wrapper}>
                    <TouchableOpacity style={styles.back_to_dashboard_btn}  onPress={() => this.backToDashboard()}>
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

                <View style={styles.sing_in_inputs_title_wrapper}>
                    <Text style={styles.sing_in_title}>Вход</Text>
                    <View style={styles.sign_in_inputs_main_box}>
                        <View style={styles.sign_in_input_wrapper}>
                            <Text style={styles.sign_in_input_title}>Электронная почта</Text>
                            <TextInput
                                style={styles.sign_in_input_field}
                                onChangeText={(val) => this.setState({email: val})}
                                value={this.state.email}
                            />
                        </View>
                        <View style={styles.sign_in_input_wrapper}>
                            <Text style={styles.sign_in_input_title}>Пароль</Text>
                            <TextInput
                                style={styles.sign_in_input_field}
                                onChangeText={(val) => this.setState({password: val})}
                                value={this.state.password}
                                secureTextEntry={true}

                            />
                        </View>
                        <View style={styles.privacy_policy_checkbox_input}>
                            <TouchableOpacity
                                style={[styles.inputRadio, this.state.sort_by_default ? styles.activeInputRadioBorder : {}]}
                                onPress={()=> {
                                    this.setState({
                                        sort_by_default: !this.state.sort_by_default,
                                    })
                                }}>
                                {this.state.sort_by_default &&
                                <View style={styles.activeRadioRound}>

                                    <Svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 83 65"
                                        fill="none"
                                    >
                                        <Path
                                            d="M73.333.667L28 46 9.333 27.333 0 36.667l28 28L82.667 10 73.333.667z"
                                            fill="#EFEFEF"
                                        />
                                    </Svg>

                                </View>
                                }
                            </TouchableOpacity>
                           <Text style={[styles.privacy_policy_text]}>
                                   Согласен с правилами

                               <View style={{marginRight:5}}></View>
                               <Text style={[styles.privacy_policy_text_bold]}>
                                         бренда и политикой конфиденциальности

                               </Text>
                           </Text>

                        </View>
                    </View>


                        <TouchableOpacity style={styles.sign_in_btn}>
                            <Text style={styles.sign_in_btn_text}>Войти</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.forget_password_btn} onPress={() => this.redirectToRecoveryAccountEmail()}>
                            <Text style={styles.forget_password_btn_text}>Забыли пароль?</Text>
                        </TouchableOpacity>

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

    back_to_dashboard_btn_wrapper: {
        marginBottom: 56,
        paddingHorizontal: 17,
        // alignItems: "flex-end",
    },

    sing_in_inputs_title_wrapper: {
        width: "100%",
        paddingHorizontal: 25,
    },
    sign_in_inputs_main_box: {
        marginBottom: 85,
        // paddingHorizontal: 25,
    },

    sing_in_title: {
        marginBottom: 30,
        color: '#333333',
        fontSize: 36,
        fontWeight: 'bold',
    },
    sign_in_input_title: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 5,
        lineHeight: 24,
    },
    sign_in_input_wrapper: {
        marginBottom: 15,
    },
    sign_in_input_field: {
        width: '100%',
        borderRadius: 6,
        backgroundColor: '#E4E4E4',
        height: 50,
        color: '#000000',
        fontSize: 15,
        fontWeight: '400',
        paddingHorizontal: 15,
    },
    sign_in_btn: {
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
    sign_in_btn_text: {
        color: '#ffffff',
        fontWeight:'bold',
        fontSize: 18,
        lineHeight: 29,
    },
    forget_password_btn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    forget_password_btn_text: {
       color: '#000000',
        fontWeight:'bold',
        fontSize: 15,
    },
    // activeInputRadioBorder: {
    //    borderColor: '#D0251D',
    // },

    inputRadio: {
        backgroundColor: "#E4E4E4",
        width: 28,
        height: 28,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },

    activeRadioRound:{
        width: 28,
        height: 28,
        backgroundColor: "#D0251D",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    privacy_policy_checkbox_input: {
        flexDirection: 'row',
    },
    privacy_policy_text: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '400',
        paddingRight: 5,

    },

    privacy_policy_text_bold: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#000000',
        paddingLeft: 5,

    },





});
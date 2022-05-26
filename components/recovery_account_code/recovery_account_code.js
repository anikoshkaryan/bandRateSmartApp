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

            code1: null,
            code1_field_error: false,
            code1_field_valid: false,

            code2: null,
            code2_field_error: false,
            code2_field_valid: false,

            code3: null,
            code3_field_error: false,
            code3_field_valid: false,

            code4: null,
            code4_field_error: false,
            code4_field_valid: false,


            code5: null,
            code5_field_error: false,
            code5_field_valid: false,

            code6: null,
            code6_field_error: false,
            code6_field_valid: false,

        };


    }


    changeFirstCodeInput =  (value) => {
        if (value.length < 2) {

            this.setState({
                code1:  value
            })

            if (value.length == 1) {
                this.setState({
                    code1_field_error: false,
                    code1_field_valid: true,
                })
                this.refs.secondInput.focus();
            } else {
                this.setState({
                    code1_field_error: false,
                    code1_field_valid: false,
                })
            }
        }
    }

    changeSecondCodeInput =  (value) => {
        if (value.length < 2) {

            this.setState({
                code2:  value
            })

            if (value.length == 1) {
                this.setState({
                    code2_field_error: false,
                    code2_field_valid: true,
                })
                this.refs.thirdInput.focus();
            }

            if (value.length == 0) {
                this.setState({
                    code2_field_error: false,
                    code2_field_valid: false,
                })
                this.refs.firstInput.focus();
            }
        }
    }

    changeThirdCodeInput =  (value) => {
        if (value.length < 2) {

            this.setState({
                code3:  value
            })

            if (value.length == 1) {
                this.setState({
                    code3_field_error: false,
                    code3_field_valid: true,
                })
                this.refs.fourthInput.focus();
            }

            if (value.length == 0) {
                this.setState({
                    code3_field_error: false,
                    code3_field_valid: false,
                })
                this.refs.secondInput.focus();
            }
        }
    }

    changeFourthCodeInput =  (value) => {
        if (value.length < 2) {

            this.setState({
                code4:  value
            })

            if (value.length == 1) {
                this.setState({
                    code4_field_error: false,
                    code4_field_valid: true,
                })
                this.refs.fifthInput.focus();
            }

            if (value.length == 0) {
                this.setState({
                    code4_field_error: false,
                    code4_field_valid: false,
                })
                this.refs.thirdInput.focus();
            }
        }
    }

    changeFifthCodeInput =  (value) => {
        if (value.length < 2) {

            this.setState({
                code5:  value
            })

            if (value.length == 1) {
                this.setState({
                    code5_field_error: false,
                    code5_field_valid: true,
                })
                this.refs.sixthInput.focus();
            }

            if (value.length == 0) {
                this.setState({
                    code5_field_error: false,
                    code5_field_valid: false,
                })
                this.refs.fourthInput.focus();
            }
        }
    }

    changeSixthCodeInput =  (value) => {
        if (value.length < 2) {

            this.setState({
                code6:  value
            })

            if (value.length == 1) {
                this.setState({
                    code6_field_error: false,
                    code6_field_valid: true,
                })
            }

            if (value.length == 0) {
                this.setState({
                    code6_field_error: false,
                    code6_field_valid: false,
                })
                this.refs.fifthInput.focus();
            }
        }
    }

    redirectToNewPassword = () => {
        this.props.navigation.navigate("NewPassword");

    }
    backToRecoveryEmail = () => {
        this.props.navigation.navigate("RecoveryAccountEmail");
    }
    render() {

        return (
            <SafeAreaView style={styles.container} >

                <View style={styles.recovery_account_code_main_wrapper}>
                    <View style={styles.back_to_recovery_email_btn_wrapper}>
                        <TouchableOpacity style={styles.back_recovery_email_btn}  onPress={() => this.backToRecoveryEmail()}>
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
                    <Text style={styles.recovery_account_code_main_title}>Восстановление аккаунта</Text>
                    <Text style={styles.recovery_account_code_second_title}>Мы отправили 6-х значный код на вашу эл.
                        почту для подтверждения личности</Text>


                    <View style={styles.recovery_account_code_inputs_wrapper}>
                        <TextInput
                            ref='firstInput'
                            style={[styles.code_input_field,  {borderWidth: 1, borderColor:this.state.code1_field_error ? "#A4223C" : this.state.code1_field_valid ? "#337363" : "#d9d9d9"} ]}
                            onChangeText={(value) => {this.changeFirstCodeInput(value)}}
                            value={this.state.code1}
                            placeholderTextColor="#000000"
                            keyboardType="numeric"

                        />
                        <TextInput
                            ref='secondInput'
                            style={[styles.code_input_field,  {borderWidth: 1, borderColor:this.state.code2_field_error ? "#A4223C" : this.state.code2_field_valid ? "#337363" : "#d9d9d9"} ]}
                            onChangeText={(value) => {this.changeSecondCodeInput(value)}}

                            value={this.state.code2}
                            keyboardType="numeric"
                        />
                        <TextInput
                            ref='thirdInput'
                            style={[styles.code_input_field,  {borderWidth: 1, borderColor:this.state.code3_field_error ? "#A4223C" : this.state.code3_field_valid ? "#337363" : "#d9d9d9"} ]}
                            onChangeText={(value) => {this.changeThirdCodeInput(value)}}
                            value={this.state.code3}
                            keyboardType="numeric"
                        />
                        <TextInput
                            ref='fourthInput'
                            style={[styles.code_input_field,  {borderWidth: 1, borderColor:this.state.code4_field_error ? "#A4223C" : this.state.code4_field_valid ? "#337363" : "#d9d9d9"} ]}
                            onChangeText={(value) => {this.changeFourthCodeInput(value)}}
                            value={this.state.code4}
                            keyboardType="numeric"
                        />
                        <TextInput
                            ref='fifthInput'
                            style={[styles.code_input_field,  {borderWidth: 1, borderColor:this.state.code4_field_error ? "#A4223C" : this.state.code4_field_valid ? "#337363" : "#d9d9d9"} ]}
                            onChangeText={(value) => {this.changeFifthCodeInput(value)}}
                            value={this.state.code5}
                            keyboardType="numeric"
                        />
                        <TextInput
                            ref='sixthInput'
                            style={[styles.code_input_field,  {borderWidth: 1, borderColor:this.state.code4_field_error ? "#A4223C" : this.state.code4_field_valid ? "#337363" : "#d9d9d9"} ]}
                            onChangeText={(value) => {this.changeSixthCodeInput(value)}}
                            value={this.state.code6}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.send_code_again_btn_wrapper}>
                        <TouchableOpacity style={styles.send_code_again_btn}>
                            <Text style={styles.send_code_again_btn_text}>Отправить код повторно</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.recovery_account_confirm_code_btn_wrapper}>
                        <TouchableOpacity style={styles.recovery_account_confirm_code_btn} onPress={() => this.redirectToNewPassword()}>
                            <Text style={styles.recovery_account_confirm_code_btn_text}>Подтвердить</Text>
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

    recovery_account_code_main_wrapper: {
        width: '100%',
        paddingHorizontal: 25,
        // paddingTop: 76,

    },

    recovery_account_code_main_title: {
        color: "#333333",
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
        lineHeight: 40,
    },

    recovery_account_code_second_title: {
        color: '#545454',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 50,
        marginRight: 35,
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
    back_recovery_email_btn: {
        left: 0,
        marginBottom:76,

    },
});
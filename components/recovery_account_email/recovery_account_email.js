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


        };


    }



    redirectToRecoveryAccountCode = () => {
        this.props.navigation.navigate("RecoveryAccountCode");
    }

    backToSignIn = () => {
        this.props.navigation.navigate("SignIn");
    }


    render() {

        return (
            <SafeAreaView style={styles.container} >




                <View style={styles.recovery_account_email_main_wrapper}>
                    <View style={styles.back_to_sign_in_btn_wrapper}>
                        <TouchableOpacity style={styles.back_sign_in_btn}  onPress={() => this.backToSignIn()}>
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
                    <Text style={styles.recovery_account_email_main_title}>???????????????????????????? ????????????????</Text>
                    <Text style={styles.recovery_account_email_second_title}>???? ???????????????? 4-?? ?????????????? ?????? ???? ???????? ????. ?????????? ?????? ?????????????????????????? ????????????????</Text>

                    <View style={styles.recovery_account_email_input_wrapper}>
                        <Text style={styles.recovery_account_email_input_title}>?????????????????????? ??????????</Text>
                        <TextInput
                            style={styles.recovery_account_email_input_field}
                            onChangeText={(val) => this.setState({email: val})}
                            value={this.state.email}
                        />
                    </View>

                    <View style={styles.recovery_account_email_send_code_btn_wrapper}>
                        <TouchableOpacity style={styles.recovery_account_email_send_code_btn} onPress={() => this.redirectToRecoveryAccountCode()}>
                            <Text style={styles.recovery_account_email_send_code_btn_text}>?????????????????? ??????</Text>
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

    recovery_account_email_main_wrapper: {
        width: '100%',
        paddingHorizontal: 25,
        // paddingTop: 76,

    },

    recovery_account_email_main_title: {
        color: "#333333",
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
        lineHeight: 40,
    },

    recovery_account_email_second_title: {
        color: '#545454',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 35,
        marginRight: 35,
        lineHeight: 22,
    },

    recovery_account_email_input_field: {
        width: '100%',
        borderRadius: 6,
        backgroundColor: '#E4E4E4',
        height: 50,
        color: '#000000',
        fontSize: 15,
        fontWeight: '400',
        paddingHorizontal: 15,
    },


    recovery_account_email_input_title: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 5,
        lineHeight: 24,
    },

    recovery_account_email_input_wrapper: {
        marginBottom: 65,
    },

    recovery_account_email_send_code_btn: {
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

    recovery_account_email_send_code_btn_text: {
        color: '#ffffff',
        fontWeight:'bold',
        fontSize: 18,
        lineHeight: 29,
    },


    back_sign_in_btn: {
       left: 0,
        marginBottom:76,

    },

});
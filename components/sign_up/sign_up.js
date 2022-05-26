import React, { Component } from 'react';
import Svg, { Path, Rect, Circle, Defs, Stop, ClipPath, G } from "react-native-svg";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



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
    ScrollView
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
            name: null,
            email: null,
            phoneNumber: null,
            password: null,
            repeatPassword: null,

            sort_by_default: false,


        };


    }




    backToDashboard= () => {
        this.props.navigation.navigate("Dashboard");

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

                <View style={styles.sing_up_inputs_title_wrapper}>
                    <Text style={styles.sing_up_title}>Регистрация</Text>
                    {Platform.OS === 'ios'
                        ?
                        <KeyboardAwareScrollView style={styles.sign_up_inputs_main_box}>
                            <View style={styles.sign_up_input_wrapper}>
                                <Text style={styles.sign_up_input_title}>Имя</Text>
                                <TextInput
                                    style={styles.sign_up_input_field}
                                    onChangeText={(val) => this.setState({name: val})}
                                    value={this.state.name}
                                />
                            </View>
                            <View style={styles.sign_up_input_wrapper}>
                                <Text style={styles.sign_up_input_title}>Электронная почта</Text>
                                <TextInput
                                    style={styles.sign_up_input_field}
                                    onChangeText={(val) => this.setState({email: val})}
                                    value={this.state.email}
                                />
                            </View>
                            <View style={styles.sign_up_input_wrapper}>
                                <Text style={styles.sign_up_input_title}>Тел. Номер</Text>
                                <TextInput
                                    style={styles.sign_up_input_field}
                                    onChangeText={(val) => this.setState({phoneNumber: val})}
                                    value={this.state.phoneNumber}
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={styles.sign_up_input_wrapper}>
                                <Text style={styles.sign_up_input_title}>Пароль</Text>
                                <TextInput
                                    style={styles.sign_up_input_field}
                                    onChangeText={(val) => this.setState({password: val})}
                                    value={this.state.password}
                                />
                            </View>
                            <View style={styles.sign_up_input_wrapper}>
                                <Text style={styles.sign_up_input_title}>Повторите пароль</Text>
                                <TextInput
                                    style={styles.sign_up_input_field}
                                    onChangeText={(val) => this.setState({repeatPassword: val})}
                                    value={this.state.repeatPassword}
                                />
                            </View>

                        </KeyboardAwareScrollView>
                        :

                        <ScrollView style={styles.sign_up_inputs_main_box}>
                            <View style={styles.sign_up_input_wrapper}>
                                <Text style={styles.sign_up_input_title}>Имя</Text>
                                <TextInput
                                    style={styles.sign_up_input_field}
                                    onChangeText={(val) => this.setState({name: val})}
                                    value={this.state.name}
                                />
                            </View>
                            <View style={styles.sign_up_input_wrapper}>
                                <Text style={styles.sign_up_input_title}>Электронная почта</Text>
                                <TextInput
                                    style={styles.sign_up_input_field}
                                    onChangeText={(val) => this.setState({email: val})}
                                    value={this.state.email}
                                />
                            </View>
                            <View style={styles.sign_up_input_wrapper}>
                                <Text style={styles.sign_up_input_title}>Тел. Номер</Text>
                                <TextInput
                                    style={styles.sign_up_input_field}
                                    onChangeText={(val) => this.setState({phoneNumber: val})}
                                    value={this.state.phoneNumber}
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={styles.sign_up_input_wrapper}>
                                <Text style={styles.sign_up_input_title}>Пароль</Text>
                                <TextInput
                                    style={styles.sign_up_input_field}
                                    onChangeText={(val) => this.setState({password: val})}
                                    value={this.state.password}
                                    secureTextEntry={true}
                                />
                            </View>
                            <View style={styles.sign_up_input_wrapper}>
                                <Text style={styles.sign_up_input_title}>Повторите пароль</Text>
                                <TextInput
                                    style={styles.sign_up_input_field}
                                    onChangeText={(val) => this.setState({repeatPassword: val})}
                                    value={this.state.repeatPassword}
                                    secureTextEntry={true}
                                />
                            </View>

                        </ScrollView>
                    }


                    <View style={styles.sign_up_btn_parent}>
                        <TouchableOpacity style={styles.sign_up_btn}>
                            <Text style={styles.sign_up_btn_text}>Зарегистрироваться</Text>
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

    back_to_dashboard_btn_wrapper: {
        marginBottom: 25,
        paddingHorizontal: 17,
        // alignItems: "flex-end",
    },

    sing_up_inputs_title_wrapper: {
        width: "100%",
        // paddingHorizontal: 25,
    },
    sign_up_inputs_main_box: {
        width: '100%',
        marginBottom: 50,
        paddingHorizontal: 25,
    },

    sing_up_title: {
        marginBottom: 25,
        color: '#333333',
        fontSize: 36,
        fontWeight: 'bold',
        paddingHorizontal: 25,
    },
    sign_up_input_title: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 5,
        lineHeight: 24,
    },
    sign_up_input_wrapper: {
        marginBottom: 15,
    },
    sign_up_input_field: {
        width: '100%',
        borderRadius: 6,
        backgroundColor: '#E4E4E4',
        height: 50,
        color: '#000000',
        fontSize: 15,
        fontWeight: '400',
        paddingHorizontal: 15,
    },
    sign_up_btn: {
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
    sign_up_btn_text: {
        color: '#ffffff',
        fontWeight:'bold',
        fontSize: 18,
        lineHeight: 29,
    },

    sign_up_btn_parent: {
      paddingHorizontal: 25,
        height: 100,
    },








});
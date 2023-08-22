import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//import DropZone from "react-dropzone";
import { SafeAreaView, Text, View, Button, TextInput, ScrollView } from "react-native";
import { styles } from "../../Styles.js";
// import * as Google from 'expo-auth-session/providers/google.js';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

const registrationSchema = yup.object().shape({
    userName: yup.string().required("*User name is required*"),
    email: yup.string().email("invalid email").required("*A valid email is required*"),
    password: yup.string().required("*A valid password is required*").min(8, "*Your password is too short*"),
    confirmPassword: yup.string().required("*Please confirm your password*")
        .oneOf([yup.ref("password")], "Your passwords do not match.")
});

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});

const initialValuesRegister = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const handleFormSubmit = () => {

};




const Form = ({ navigation }) => {

    const [accessToken, setAccessToken] = useState("55");
    

    // const [request, response, promptAsync] = Google.useAuthRequest({
    //     androidClientId: "773266702561-aevc2uvkcfemljfg01c390vcvnk3hds5.apps.googleusercontent.com",
    // });

    GoogleSignin.configure();
    const signIn = async () => {
        setAccessToken("ppp");
        try {
            console.log("ppp");
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setAccessToken( userInfo.email );
        } catch (error) {
            console.log("error");
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    getCurrentUser = async () => {
        console.log("in get current user");
        
        const currentUser = await GoogleSignin.getCurrentUser();

        console.log(currentUser.user.email);
        setAccessToken( currentUser.email);
      };
    // useEffect(() => {
    //     if(response?.type === "success"){
    //         setAccessToken(response.authentication.accessToken);
    //     }else{
    //         setAccessToken(response?.type);
    //     }
    // }, [response]);

    const getUserData = async () => {
        let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
    }

    const [isLogin, setIsLogin] = useState(true);


    return (
        <SafeAreaView>
            <ScrollView>
                <Button title="google" onPress={signIn } />
                <GoogleSigninButton
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={getCurrentUser}
                    
                />
                <Text>{accessToken}</Text>
                <Formik
                    onSubmit={values => alert(JSON.stringify(values, null, 2))}
                    validationSchema={registrationSchema}
                    initialValues={initialValuesRegister}
                >
                    {props => (


                        <View style={styles.textInputContainer}>

                            <Text style={styles.textHeadCentered}> {isLogin ? "Log in" : "Sign up"} </Text>

                            {!isLogin && (
                                <TextInput placeholderTextColor="#999"
                                    style={styles.textInputField}
                                    placeholder="user name"
                                    onChangeText={text => props.setFieldValue("userName", text)}
                                    onBlur={() => props.setFieldTouched("userName")}
                                    error={props.touched.userName ? props.errors.userName : null}
                                />)}
                            {props.touched.userName && !isLogin &&
                                <Text style={styles.textFormError}>{props.errors.userName} </Text>
                            }

                            <TextInput
                                placeholderTextColor="#999"
                                style={styles.textInputField}
                                placeholder="email"
                                onChangeText={text => props.setFieldValue("email", text)}
                                onBlur={() => props.setFieldTouched("email")}
                                error={props.touched.email ? props.errors.email : null}
                                inputMode="email"
                            />
                            {props.touched.email &&
                                <Text style={styles.textFormError}>{props.errors.email}</Text>
                            }

                            <TextInput
                                placeholderTextColor="#999"
                                style={styles.textInputField}
                                placeholder="password"
                                onChangeText={text => props.setFieldValue("password", text)}
                                onBlur={() => props.setFieldTouched("password")}
                                error={props.touched.password ? props.errors.password : null}
                                secureTextEntry={true}
                            />
                            {props.touched.password &&
                                <Text style={styles.textFormError}>{props.errors.password}</Text>
                            }

                            {!isLogin && (
                                <TextInput
                                    placeholderTextColor="#999"
                                    style={styles.textInputField}
                                    placeholder="confirm password"
                                    onChangeText={text => props.setFieldValue("confirmPassword", text)}
                                    onBlur={() => props.setFieldTouched("confirmPassword")}
                                    error={props.touched.confirmPassword ? props.errors.confirmPassword : null}
                                    secureTextEntry={true}
                                />
                            )}

                            {props.touched.confirmPassword && !isLogin &&
                                <Text style={styles.textFormError}>{props.errors.confirmPassword}</Text>
                            }

                            {isLogin && (
                                <View style={styles.buttonContainer}>
                                    <Button onPress={props.handleSubmit} title="Log in" />
                                </View>
                            )}

                            {!isLogin && (
                                <View style={styles.buttonContainer}>
                                    <Button style={styles.buttonContainer} onPress={props.handleSubmit} title="Sign Up" />
                                </View>
                            )}


                            <Text
                                style={styles.textInfo}
                                onPress={() => {
                                    setIsLogin(!isLogin);
                                    props.resetForm();
                                }}
                            >{isLogin ? (
                                "Don't have an account? Create one here!"
                            ) : (
                                "Already have an account? Sign in here!"
                            )}
                            </Text>


                            <Text
                                style={{ fontSize: 20 }}
                            >
                                {JSON.stringify(props, null, 2)}</Text>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>

    )
};

export default Form;
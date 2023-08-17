import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//import DropZone from "react-dropzone";
import { SafeAreaView, Text, View, Button, TextInput, ScrollView } from "react-native";
import { styles } from "../../Styles.js";
// import { TextField, FilledTextField,
//     OutlinedTextField, } from "react-native-material-textfield";



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

const Form = () => {
   
    return (
        <SafeAreaView>
            <ScrollView>

                <Formik
                    onSubmit={values => alert(JSON.stringify(values, null, 2))}
                    validationSchema={registrationSchema}
                    initialValues={initialValuesRegister}
                >
                    {props => (
                        <View style={styles.textInputContainer}>

                            <Text style={styles.textHeadCentered}> Sign up </Text>

                            <TextInput placeholderTextColor="#999"
                                style={styles.textInputField}
                                placeholder="user name"
                                onChangeText={text => props.setFieldValue("userName", text)}
                                onBlur={() => props.setFieldTouched("userName")}
                                error={props.touched.userName ? props.errors.userName : null}
                            />
                            {props.touched.userName &&
                                <Text style={styles.textFormError}>{props.errors.userName} </Text>
                            }

                            <TextInput
                                placeholderTextColor="#999"
                                style={styles.textInputField}
                                placeholder="email"
                                onChangeText={text => props.setFieldValue("email", text)}
                                onBlur={() => props.setFieldTouched("email")}
                                error={props.touched.email ? props.errors.email : null}
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

                            />
                            {props.touched.password &&
                                <Text style={styles.textFormError}>{props.errors.password}</Text>
                            }
                            
                            <TextInput
                                placeholderTextColor="#999"
                                style={styles.textInputField}
                                placeholder="confirm password"
                                onChangeText={text => props.setFieldValue("confirmPassword", text)}
                                onBlur={() => props.setFieldTouched("confirmPassword")}
                                error={props.touched.confirmPassword ? props.errors.confirmPassword : null}
                            />
                            {props.touched.confirmPassword &&
                                <Text style={styles.textFormError}>{props.errors.confirmPassword}</Text>
                            }

                            <Button onPress={props.handleSubmit} title="Sign Up" />
                            
                            <Text style={{ fontSize: 20 }}>{JSON.stringify(props, null, 2)}</Text>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>

    )
};

export default Form;
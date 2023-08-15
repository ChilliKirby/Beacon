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



const registrationSchema = ({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    nickName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("Please enter your password.").min(8, "Your password is too short."),
    retypePassword: yup.string().required("Please retype your password.")
        .oneOf([yup.ref("password")], "Your passwords do not match.")
});

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});

const initialValuesRegister = {
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    password: "",
    picture: "",
};

const handleFormSubmit = () => {

};

const Form = () => {
    // <Formik
    //     onSubmit={handleFormSubmit}
    //     initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
    //     validationSchema={isLogin ? loginSchema : registerSchema}
    // >

    // </Formik>

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.textInputContainer}>
                <Text style={styles.textHeadCentered}> Sign up </Text>
                <TextInput placeholderTextColor="#999"
                    style={styles.textInputField}
                    placeholder="user name" />
                <TextInput
                    placeholderTextColor="#999"
                    style={styles.textInputField}
                    placeholder="email" />
                <TextInput
                    placeholderTextColor="#999"
                    style={styles.textInputField}
                    placeholder="password" />
                <TextInput
                    placeholderTextColor="#999"
                    style={styles.textInputField}
                    placeholder="confirm password" />
                    

                <Button onPress={() => alert("done")} title="submit" />
</View>
            </ScrollView>
        </SafeAreaView>

    )
};

export default Form;
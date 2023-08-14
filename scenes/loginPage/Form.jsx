import { useState } from "react";
import { 
    Box,
    Button, 
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
} from "@mui/material";

import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import DropZone from "react-dropzone";
import { Text } from "react-native";

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

const Form = () =>{
    <Formik
        
    ></Formik>
}
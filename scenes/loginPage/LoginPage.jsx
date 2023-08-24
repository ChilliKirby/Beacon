import Form from "./Form.jsx";;
import { Text, View, SafeAreaView } from "react-native";
import { styles } from "../../Styles.js";
import { useEffect, useState } from "react";


import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { sign } from "core-js/core/number"
;
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../state/index.js";



const LoginPage = () => {

    const  userName = useSelector((state) => state.userName);
    console.log("here " + userName);

    GoogleSignin.configure();
    const [response, setResponse] = useState();
    //const [user, setUser] = useState();

    const dispatch = useDispatch();

    const signInGoogle = async () => {
        console.log("trying google");
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUser(userInfo);
            dispatch(setUser({user: userInfo.user.email}))
            console.log("signed in as " + {userName});
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
                console.log("already in?");
            }
        }
    };

    const getUser = async () => {

        const userInfo =  await GoogleSignin.getCurrentUser();
         if(userInfo ){
            dispatch(setUser({
                userName: userInfo.user.email,
            }));
             console.log(userName);
        }
    };

    const signInBeacon = async () => {
        try{

        } catch (error){

        }
    };

    useEffect(() => {
        //signInGoogle;
        console.log("xxxx");
        getUser();
    }, []);
    return (
        <View style={styles.mainContainer}>
            <SafeAreaView>
                {/* <Button title="google" onPress={signIn} /> */}
                <GoogleSigninButton
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={ signInGoogle }
                />
                <Text style={styles.textInfo}>{userName}</Text>
            </SafeAreaView>
        </View>
    )
}

export default LoginPage;
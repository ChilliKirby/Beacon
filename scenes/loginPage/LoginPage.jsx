import Form from "./Form.jsx";;
import { Text, View, SafeAreaView, Button } from "react-native";
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




const LoginPage = ({ navigation }) => {

    const userName = useSelector((state) => state.userName);
    const dispatch = useDispatch();


    GoogleSignin.configure({
        webClientId: process.env.EXPO_PUBLIC_REACT_APP_WEB_CLIENT_ID,
        offlineAccess: true,
    });

    const [response, setResponse] = useState(false);
    //const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [idToken, setidToken] = useState();
    const [user, setUser] = useState(null);


    const signInGoogle = async () => {
        console.log("try log in");
        try {
            
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUser(userInfo);
            // //set email to be sent to Beacon server
            // setEmail(userInfo.user.email);

            // //get id token from Google for user
            // const tokens = getTokens();
            // setidToken(tokens.idToken);
            // setResponse(true);
            // getUser();

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

        
        try{
        const userInfo = await GoogleSignin.getCurrentUser();
        //  if(userInfo ){
        //     dispatch(setUser({
        //         userName: userInfo.user.email,
        //     }));
        //      console.log(userName);
        // }

        //set email to be sent to Beacon server
        //  setEmail(userInfo.user.email);

        //  //get id token from Google for user
        //  const tokens = await GoogleSignin.getTokens();
        //  setidToken(tokens.idToken);
        //  setResponse(true);

        console.log("test");
        console.log(userInfo.user.email);
        console.log(userInfo.idToken);
        console.log(process.env.EXPO_PUBLIC_REACT_APP_WEB_CLIENT_ID);
        
        const loggedInResponse = await fetch("http://192.168.86.123:3001/auth/login",{
            method: "POST",
            headers: { 
                Authorization: `Bearer ${userInfo.idToken}`,
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                nickName: userInfo.user.name,
                email: userInfo.user.email,
            })
        })

        
        } catch(error){
            console.log("error:", error);
            console.log("client token errrrrr");
        }
    };

    const signInBeacon = async () => {
        try {

        } catch (error) {

        }
    };

    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
            console.log("signed out");
            
            //setState({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };

    const getTokens = async () => {

    };

    const isSignedIn = async () => {
        const isIn = await GoogleSignin.isSignedIn();
        if (isIn) {
            getUser();
        }
    }

    useEffect(() => {
        //signInGoogle;
        console.log("xxxx");
        //getUser();
        isSignedIn();
    }, []);

    return (
        <View style={styles.mainContainer}>
            <SafeAreaView>
                {/* <Button title="google" onPress={signIn} /> */}
                <GoogleSigninButton
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signInGoogle}
                />
                <Button title={"temp"} onPress={getUser} >butt</Button>
                <Button title={"out"} onPress={signOut} >out</Button>
                <Text style={styles.textInfo}>{userName}</Text>
            </SafeAreaView>
        </View>
    )
}

export default LoginPage;
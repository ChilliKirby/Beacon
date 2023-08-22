import Form from "./Form.jsx";;
import { View } from "react-native";
import { styles } from "../../Styles.js";
import { useState } from "react";


const LoginPage = () => {
// const [pageType, setPageType] = useState("login");



const [user, setUser] = useState(null);

const getUser = async (userInfo) => {
    const [IdToken, x] = GoogleSignin.getTokens();
    console.log("hihihi" + IdToken);
}

const signIn = async () => {
  
  

  
};

return(
    <View style={styles.mainContainer}>
    <Form/>
    </View>
)
}

export default LoginPage;
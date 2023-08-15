import Form from "./Form.jsx";;
import { View } from "react-native";
import { styles } from "../../Styles.js";

const LoginPage = () => {
// const [pageType, setPageType] = useState("login");


return(
    <View style={styles.mainContainer}>
    <Form/>
    </View>
)
}

export default LoginPage;
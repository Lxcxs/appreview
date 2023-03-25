import { View, Text } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'; 
import { styles, todoC1, todoC2, iconStyle } from "./styles";

export function TODO() {
    return(
        <View style={styles.container}>

            <MaterialIcons
                name="add-task" 
                size={24} 
                style={styles.iconStyle} />
            <Text style={styles.todoC1}>To</Text>
            <Text style={styles.todoC2}>Do</Text>

        </View>
    )
}
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#303030',
        borderWidth: 1,
        borderColor: '#525252ff',
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    c1: {
        width: '70%',
        color: '#ffffff',
        fontSize: 17,
    },
    c2: {
        width: '70%',
        color: '#d6d6d6',
        fontSize: 17,
        fontStyle: 'italic',
        textDecorationLine: 'line-through'
    }
})
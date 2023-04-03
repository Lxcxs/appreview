import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1, 
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 15,
    },
    tdC1: {
        color: '#d9e1e8',
        fontSize: 32,
        fontWeight: 'bold',
    },
    tdC2: {
        color: '#2b90d9',
        fontSize: 32,
        fontWeight: 'bold',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 50,
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    inpuText: {
        backgroundColor: '#777777',
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginRight: 2,
        fontSize: 18,
        width: '83%',
        color: '#fff',
    },
    button: {
        backgroundColor: '#2b90d9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 7,
    },
    taskInfo: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: '#525252ff',
        borderRadius: 10,
    },
    tInfo: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    color1: {
        color: '#2b90d9',
        fontWeight: 'bold',
        fontSize: 22,
    },
    color2: {
        color: '#FDCF41',
        fontWeight: 'bold',
        fontSize: 22,
    },
    color3: {
        width: 37,
        textAlign: 'center',
        marginLeft: 5,
        color: "#000000",
        fontWeight: 'bold',
        fontSize: 22,
        backgroundColor: '#d9e1e8',
        borderRadius: 8,
    },

    taskContent: {
        flexDirection: 'column',
    }
})
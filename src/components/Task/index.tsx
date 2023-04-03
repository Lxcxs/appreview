import { View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons, Feather } from '@expo/vector-icons'; 

import React, { useState } from 'react'

import { styles } from "./styles"

type props ={
    id: String
    text: String
    onRemove: () => void
    isDone: () => void
}



export function Task({ text, onRemove, isDone }: props) {
    const [radioCheck, setRadioCheck] = useState(true)

    function changeStatus() {
        setRadioCheck(!radioCheck)
        isDone()
    }

    return(
        <View style={styles.container}>

            <TouchableOpacity onPress={changeStatus}>
                <MaterialIcons 
                    name={radioCheck ? 'check-box-outline-blank' : 'check-box'}
                    size={30} 
                    color={radioCheck ? '#c7c7c7' : '#FDCF41'} />
            </TouchableOpacity>

            
            <Text style={radioCheck ? styles.c1 : styles.c2}>{text}</Text>

            <TouchableOpacity onPress={onRemove}>
                <Feather
                    name="trash-2" 
                    size={27} 
                    color="#c7c7c7" />
            </TouchableOpacity>

        </View>
    )
}
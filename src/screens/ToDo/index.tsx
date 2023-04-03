import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import { Task } from "../../components/Task";
import React, { useState } from 'react';
import { styles } from "./styles";

export function TODO() {
    const [valorInput, setValorInput] = useState('');
    const [Tarefas, setTarefas] = useState([]);
    const [doneList, setDoneList] = useState([])
    

    // const taksT = [
    //     {id: '1', text: 'Estudar para a prova da disciplina de Programação Mobile I - React Native - Professor Luiz Claudio'},
    //     {id: '2', text: 'Aula da disciplina de PM'},
    //     {id: '3', text: 'Configurar o notebook para desenvolvimento'},
    //     {id: '4', text: 'Trabalho da disciplina do banco de dados'},
    //     {id: '5', text: 'Dar comida pro gato'},
    //     {id: '6', text: 'Estudar lore da muramana'},
    //     {id: '7', text: 'Limpar o ralo do banheiro'},
    // ]
        // function handleAddTaskaa() {
    //     const novoObj = {id: taksT.length +1, text: valorInput}
    //     const newArr = [...taksT, novoObj]
    //     // console.log(newArr)
    // }
    function handleAddTask() {
        if (valorInput === '') {
            return Alert.alert('Você precisa adicionar algum texto!')
        }
        else {
            const novaTarefa = { id: Tarefas.length + 1, text: valorInput, isDone: false };
            setTarefas(Tarefas.concat(novaTarefa));
            setValorInput('');
        }
    }

    function handleRemoveTask(id: string) {
        setTarefas(Tarefas.filter(obj => obj.id != id))
        setDoneList(doneList.filter(obj => obj.id != id))
    }

    function isDoneTask(id: string, item: boolean) {
        const num = id - 1
        const clone = Tarefas[num]
        item = !item
        const checked = clone.isDone = item

        // console.log(Tarefas[num])


        const newDone = {id: id}
        if(checked) {
            setDoneList(doneList.concat(newDone))
            // console.log(newDone)
        }else {
            setDoneList(doneList.filter(obj => obj.id != id))
            // console.log(newDone)
        }

        // console.log(teste.isDone = item)


    }

    return(
        <View style={styles.container}>

            <View style={styles.header}>

                <MaterialIcons
                    name="add-task" 
                    size={32} 
                    color="#FDCF41" 
                />
                <Text style={styles.tdC1}>To</Text>
                <Text style={styles.tdC2}>Do</Text>

            </View>

            <View style={styles.form}>

                <TextInput 
                    style={styles.inpuText}
                    placeholder="Adicione uma tarefa"
                    value={valorInput}
                    onChangeText={setValorInput}>

                </TextInput>

                <TouchableOpacity onPress={handleAddTask}>
                    <View style={styles.button}>
                        <Ionicons 
                            name="add-circle" 
                            size={35} 
                            color="white" />
                        
                    </View>
                </TouchableOpacity>

            </View>

            <View style={styles.taskInfo}>

                <View style={styles.tInfo}>
                    <Text style={styles.color1}>Criadas </Text><Text style={styles.color3}> {Tarefas.length} </Text>
                </View>

                <View style={styles.tInfo}>
                    <Text style={styles.color2}>Concluídas </Text><Text style={styles.color3}> {doneList.length} </Text>
                </View>

            </View>

            <View style={styles.list}>
                <FlatList 
                    data={Tarefas}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Task
                            id={item.id} 
                            text={item.text}
                            onRemove={() => handleRemoveTask(item.id)}
                            isDone={() => isDoneTask(item.id, item.isDone)}
                            />
                    )} showsVerticalScrollIndicator={false}>
                </FlatList>
            </View>

        </View>
    )
}
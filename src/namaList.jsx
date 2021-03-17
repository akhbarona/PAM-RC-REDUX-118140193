import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNama } from '../redux/action'

const namaList = () => {
    const dispatch = useDispatch();
    const select = useSelector((state) => state)
    var pilihan = select.namaList;
    return (
       <View style={styles.container}>
           {
               pilihan.map((value,index) => (
               <View style={styles.listView}>
                    <Text style={styles.listText}>{value}</Text>
                        <TouchableOpacity style={styles.listButton} onPress={()=>dispatch(deleteNama(index))}>
                            <Text style={styles.listTextButton}> Delete </Text>
                        </TouchableOpacity>
               </View>

               ))
           }
       </View>
    
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor: '#f7f7f7'
    },
    listView:{
        borderBottomWidth:1,
        borderBottomColor:'#dedede',
        paddingTop:5,
        paddingBottom:5,
        flexDirection:'row'
    },
    listText:{
        flex:3,
        fontSize:20
    },
    listButton:{
        alignItems:'center',
        backgroundColor:'red',
        padding:5,
        paddingLeft:20,
        paddingRight:20
    },
    listTextButton:{
        color:'#FFFFFF'
    }
})

export default namaList

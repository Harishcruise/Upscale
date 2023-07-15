import { StyleSheet, Text, View,TextInput,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React,{useState} from 'react'
import { EvilIcons } from '@expo/vector-icons';
const SearchBar = () => {
    const [searchFocusState,setSearchFocusState] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.searchContainer}>
    <TextInput style={searchFocusState ? styles.searchInputFocused : styles.searchInput} placeholder='       Search for courses'  onBlur={()=>setSearchFocusState(false)} onFocus={()=>setSearchFocusState(true)}/>
    <EvilIcons  style={styles.searchIcon} name="search" size={24} color="black" />
    </View>
    </TouchableWithoutFeedback>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchInput:{
        width:320,
        height:40,
              fontSize:14,
              fontFamily:'SourceSans3-Regular',
              paddingHorizontal:20,
              backgroundColor:'#FBFBFB',
              borderRadius:5,
              borderWidth:1,
              flex:1,
              borderColor: '#A9A9A9'
        
      },
      searchInputFocused:{
        width:320,
              height:40,
              fontSize:14,
              fontFamily:'SourceSans3-Regular',
              paddingHorizontal:20,
              backgroundColor:'#E0E0E0',
              borderRadius:5,
              borderWidth:1,
              flex:1
      },
      searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        
      },
      searchIcon: {
        position: 'absolute',
          right: 10,
      },
      input: {
        flex: 1,
        
      },  
})
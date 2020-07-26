import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
const SearchBar = function (props) {
    var { textinput, onTextChange, onSearchSubmit } = props;
    return (
        <View style={styles.parentView} >
            <Feather style={styles.searchIcon} name="search" />
            <TextInput
                style={styles.barTextInput}
                placeholder="Search"
                value={textinput}
                onChangeText={onTextChange}
                onEndEditing = {onSearchSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchIcon: {
        alignSelf: 'center',
        fontSize: 30,
        marginLeft: 10
    },
    parentView: {
        height: 45,
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 8,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 1 },
        elevation: 10
    },
    barTextInput: {
        flex: 1,
        marginHorizontal: 15
    }
});

export default SearchBar;
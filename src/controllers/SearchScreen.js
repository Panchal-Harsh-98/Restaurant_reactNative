import React, {useState} from 'react'
import {Text, View,StyleSheet} from 'react-native'
import SearchBar from '../reuseComponents/SearchBar.js'
import zomato from '../networking/zomato.js'

const SearchScreen = function(){
    const [textinput, setTextInput] = useState('')
    const [restaurantList , resturantSetter] = useState([]);

    const searchRestaurants = async function(){
        console.log("function call")
        const response = await zomato.get('/search',{
            params:{ 
                q : textinput,
                count : 50,
                entity_id : 11,
            }
        }).then(
            function(response){
                console.log("this is a response")
                console.log(response);
                resturantSetter(response.data.restaurants);
            }
        ).catch(
            function(error){
                console.log("there is an error in api call")
                console.log(error);
            }
        ); 
        
    }


    return (
       <View>
           <SearchBar 
                textinput={textinput} 
                onTextChange = {function(newValue){
                    setTextInput(newValue)
                }} 
                onSearchSubmit = {function(){
                    console.log("search text sumitted");
                    searchRestaurants()
                }}
            />

            <Text>The text you entered is {textinput} and has {restaurantList.length} results</Text>
       </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;
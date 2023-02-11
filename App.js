import * as React from 'react';
import {StyleSheet, Pressable, View, Text, Image, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import {useState} from 'react';

const homeImage = require('./images/bruschetta.png')

SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);


function HomeScreen({navigation}) {
  const [text, setText] = useState(1);
  return (
  <View style={styles.container}>
    <Text style={styles.title}>Bruschetta Recipe</Text>
    <Image source={homeImage}/>

    <TextInput
        style={styles.input}
        placeholder="Enter Number of Servings"
        onChangeText={newText => {setText(newText);}}
        />
    <Pressable style={styles.button}
      title='View Recipe'
      onPress={() => navigation.navigate('Details', {text})}>
      <Text style={styles.text}>View Recipe</Text>
    </Pressable>
  </View>
  );
}

function DetailsScreen({route, navigation}) {
  const {text} = route.params;
  return (
  <View style={[styles.container]}>
  <Text style={styles.title}>Bruschetta</Text>
  <View>
  <Text style={styles.detailtext}>Ingredients</Text>
  <Text style={styles.detailtext}>  {text * 4} plum tomatoes</Text>
  <Text style={styles.detailtext}>  {text * 6} basil leaves</Text>
  <Text style={styles.detailtext}>  {text * 3} garlic cloves, chopped</Text>
  <Text style={styles.detailtext}>  {text * 3} TB olive oil</Text>
  <Text></Text>
  <Text style={styles.detailtext}>Directions</Text>
  <Text style={styles.detailtext}>  Combine the ingredients, add salt to taste.  Top French bread slices with mixture.</Text>
  </View>
  </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Healthy Recipes"  component={HomeScreen} options={{headerStyle: {backgroundColor: '#f4511e'}, headerTintColor: '#fff'}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerStyle: {backgroundColor: '#f4511e'},headerTintColor: '#fff',headerBackTitle: 'Healthy Recipes'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 80,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'grey',
    width: 150,
  },
  detailtext: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  input : {
    height: 70,
    width: 250,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
  },
});
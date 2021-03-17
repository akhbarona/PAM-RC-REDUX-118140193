import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import formNama from './src/formNama'
import namaList from './src/namaList'
import storeState from './redux/store'
import { Provider } from 'react-redux'
const Stack = createStackNavigator();

const App = () => {
    return (
      <Provider store={storeState}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Form" component={formNama} options={{title: 'Program Redux'}}/>
            <Stack.Screen name="List" component={namaList} options={{title: 'Daftar Nama'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
}
export default App;
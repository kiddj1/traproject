// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// //import 'react-native-gesture-handler';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   textAlign,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,

// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import { constants } from 'jest-config';
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar style={"dark"} />
//       <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.container}
//     >
//       <View style={styles.content}>
//         <View style={styles.textWrapper}>
//           <Text style={styles.hiText}>Xin chào! </Text>
//           <Text style={styles.userText}>ĐỖ MINH TRÀ</Text>
//           <Text style={styles.userText}>0865338653</Text>

//         </View>
//       </View>
//        <View style={styles.form}>
//        <TextInput style={styles.inputPassword}
//           keyboardType="default"
//           secureTextEntry={true}
//           autoFocus={true}
//           placeholder="Nhập tài khoản"
//           placeholderTextColor="#929292"

//         />
//         <TextInput style={styles.inputPassword}
//           keyboardType="numeric"
//           secureTextEntry={true}
//           autoFocus={true}
//           placeholder="Nhập mật khẩu"
//           placeholderTextColor="#929292"

//         />
        
//         <TouchableOpacity style={styles.buttonLogin}>
//           <Text style={styles.buttonLoginText}>ĐĂNG NHẬP</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.action}>
//       <TouchableOpacity style={styles.buttonAction}>
//           <Text style={styles.buttonActionText}>QUÊN MẬT KHẨU</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.buttonAction}>
//           <Text style={styles.buttonActionText}>THOÁT TÀI KHOẢN</Text>
//         </TouchableOpacity>


//       </View>

     
//       </KeyboardAvoidingView>
//     </SafeAreaView>

    
//   );


// }
// const TEXT ={
//   color: "#fff",
//   textAlign: "center",

// };
// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     backgroundColor: "#b0006d",
//     paddingTop: StatusBar.currentHeight,
//   },
//   hiText:{
//     ...TEXT,
//     fontSize:20,
//     lineHeight: 50,
//     fontWeight: "bold",
//   },
//   userText:{
//     ...TEXT,
//     fontSize: 16,
//     lineHeight:30,
//   },
//   inputPassword:{
//     height: 60,
//     backgroundColor: "#fff",
//     marginTop: 10,
//     borderRadius:25,
//     justifyContent:"center",
//     alignItems:'center',
//     marginLeft:30,
//     marginRight:30,

//   },
//   buttonLogin:{
//     backgroundColor:'blue',
//     height:50,
//     marginTop:15,
//     borderRadius:25,
//     justifyContent:"center",
//     alignItems:"center",
//     marginLeft:30,
//     marginRight:30,

//   },
//   buttonLoginText:{
//     ...TEXT,

//   },
//   action:{
//     flexDirection:'row',
//     justifyContent: 'space-between',
//     marginTop:15,
//   },
//   buttonActionText:{
//     ...TEXT,
//   },
//   buttonAction:{
//     marginLeft:30,
//     marginRight:30,
//     marginTop:25,
//   }


  

//   // sectionContainer: {
//   //   marginTop: 32,
//   //   paddingHorizontal: 24,
//   // },
//   // sectionTitle: {
//   //   fontSize: 24,
//   //   fontWeight: '600',
//   //   textAlign: 'center'
//   // },
//   // sectionDescription: {
//   //   marginTop: 8,
//   //   fontSize: 18,
//   //   fontWeight: '400',
//   // },
//   // highlight: {
//   //   fontWeight: '700',
//   // },
// });

// export default App;

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import manhinh1 from './screens/manhinh1/manhinh1.js'
import manhinh2 from './screens/manhinh2/manhinh2.js'
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={manhinh1} />
        <Stack.Screen name="Details" component={manhinh2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

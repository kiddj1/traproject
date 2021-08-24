import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonicIcon from 'react-native-vector-icons';

import home from '../screens/home';
import info from '../screens/info';
import about from '../screens/about';
import profile from '../screens/profile';
import { Dimensions } from 'react-native';

const fullScreenWith = Dimensions.get('window'.width);

const Stack = createStackNavigator();

function homestacksreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={home} />
        </Stack.Navigator>
    );
}
function aboutstacksreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="about" component={about} />
        </Stack.Navigator>
    );
}
function profilestacksreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="profile" component={profile} />
            <Stack.Screen name="info" component={info} />
        </Stack.Navigator>
    );
}
const Tab = createBottomTabNavigator();
export default function Navigator(props){
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions = {({route})=> ({
                headerTitle: () => <Text> Header</Text>,
                tabBarIcon:({focused, color,size,padding}) => {
                    let iconName;
                    if(route.name   === 'home') {
                        iconName = focused ? 'Home': 'Home-outline'
                    } else if (route.name === 'about') {
                        iconName = focused ? 'information-circle' : 'information-circle-outline'

                    } else if(route.name === 'about'){
                        iconName = focused ? 'person': 'person-outline'

                    }
                    return (
                        <IonicIcon name={iconName} size={size} color={color} style={{paddingBottom: padding}} />
                    )
                }
            })}
            ta = {{
               activeC
            }}
             > 
                <Tab.Screen name="home" component={homestacksreen} />
                <Tab.Screen name="profile" component={profilestacksreen} />
                <Tab.Screen name="about" component={aboutstacksreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}


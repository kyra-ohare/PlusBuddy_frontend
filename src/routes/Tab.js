import React from 'react';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { About, Contact, Home } from '../screens';
import { LocalizationContext } from '../lang/Language';
import Color from '../constants/colors';

const BottomTab = createMaterialBottomTabNavigator();

export default Tab = props => {
    const { t } = React.useContext(LocalizationContext);

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            backBehavior="history"
            activeColor="white"
            inactiveColor={Color.lightBlue}
            barStyle={{ backgroundColor: Color.primary }}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: t('home.header'),
                    tabBarIcon: ({ focused, color }) => (
                        <Icon name="home" color={color} size={26} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="About it"
                component={About}
                options={{
                    tabBarLabel: t('about.header'),
                    tabBarIcon: ({ color }) => (
                        <Icon name="info" color={color} size={26} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Contact"
                component={Contact}
                options={{
                    tabBarLabel: t('contact.header'),
                    tabBarIcon: ({ color }) => (
                        <Icon name="envelope" color={color} size={23} />
                    ),
                }}
            />

            {/* <BottomTab.Screen
                name="Test"
                component={Contact}
                options={{
                    tabBarLabel: 'Test', //t('test.header'),
                    tabBarIcon: ({ color }) => (
                        <Icon name="search" color={color} size={26} />
                    ),
                }}
            /> */}
        </BottomTab.Navigator>
    );
}
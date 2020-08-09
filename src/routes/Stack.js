import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tab from './Tab';
import { Article } from '../screens';
import { LocalizationContext } from '../lang/Language';
import Color from '../constants/colors';

const myStack = createStackNavigator();       // creates a stack navigator

const Stack = props => {
    enableScreens();    // optimize memory usage and performance
    const { t } = React.useContext(LocalizationContext);
    return (
        <NavigationContainer>
            <myStack.Navigator
                initialRouteName="Home"
                headerMode="float"
                screenOptions={{     // this is for all the screens otherwise, set it individually
                    headerTitleAlign: "center",
                    headerBackTitleVisible: false,
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: Color.primary
                    },
                    cardOverlayEnabled: true,    //default false in iOS so now it's true cross-platform
                    gestureEnabled: true,
                }}
            >
                <myStack.Screen
                    name="Home"
                    component={Tab}
                    options={{
                        headerShown: false,
                    }}
                />
                <myStack.Screen
                    name="Article"
                    component={Article}
                    options={({ navigation, route }) => ({
                        title: t('articles.header'),
                        headerRightContainerStyle: {
                            paddingRight: 15,
                            paddingTop: 15,
                        },
                        // headerRight: () => (
                        //     <HeaderMenu list={strings.home.articles} />
                        // ),
                    })}
                />
            </myStack.Navigator>
        </NavigationContainer>
    );
};

export default Stack;
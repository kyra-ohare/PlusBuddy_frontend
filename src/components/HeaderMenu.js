import React, { useState } from 'react';
// import { Modal, TouchableOpacity, View } from 'react-native';
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Divider, Menu, Provider } from 'react-native-paper';
import { Feather as Icon } from '@expo/vector-icons';
import strings from '../lang/english';

export default HeaderMenu = props => {
    // const { list } = props;          // destructores props
    const [visible, setVisible] = useState(false);


    // mapping the articles for the top right corner
    const articles = strings.home.articles.map((value, key) => {
        return (
            <Menu.Item key={key} onPress={() => { console.log(value) }} title={value} />
        );
    });

    return (
        <Provider>
            <View>
                <Menu
                    visible={visible}
                    onDismiss={() => { setVisible(false) }}
                    style={{
                        padding: 0,
                    }}
                    anchor={
                        <TouchableOpacity onPress={() => setVisible(true)}>
                            <Icon name="plus" size={23} color="white" />
                        </TouchableOpacity>
                    }
                >
                    {articles}
                </Menu>
            </View>
        </Provider>
    );
}


const styles = StyleSheet.create({

});
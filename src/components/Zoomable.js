// This was a test for scaling font sizes
// it's not even in index.js


import React, { useRef } from 'react';
import { Dimensions, Animated, StyleSheet, View, Text } from 'react-native';
import { PanGestureHandler, PinchGestureHandler, State } from 'react-native-gesture-handler';
import TextBody from '../components/TextBody';

const { width } = Dimensions.get('window');

export default Zoomable = props => {
    const scrollY = useRef(new Animated.Value(0)).current;
    const dragRef = React.createRef();
    const pinchRef = React.createRef();
    const baseScale = new Animated.Value(1);
    const pinchScale = new Animated.Value(1);
    const scale = new Animated.Value(1);
    let lastScale = 1;
    const translateX = new Animated.Value(0);
    const translateY = new Animated.Value(0);
    let lastOffset = { x: 0, y: 0 };

    // scroll horizontally and vertically
    const onGestureEvent = Animated.event(
        [{
            nativeEvent: {
                translationX: translateX,
                translationY: translateY
            },
        }], {
        useNativeDriver: true
    });


    // TODO: have a limit for moving image about
    const onHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            console.log(`event.nativeEvent.translationX: ${event.nativeEvent.translationX}`);
            lastOffset.x += event.nativeEvent.translationX;
            lastOffset.y += event.nativeEvent.translationY;
            translateX.setOffset(lastOffset.x);
            translateX.setValue(0);
            translateY.setOffset(lastOffset.y);
            translateY.setValue(0);
        }
    }

    // zoom in and out
    const onPinchGestureEvent = Animated.event(
        [{ nativeEvent: { scale } }],
        { useNativeDriver: true }
    );

    const onPinchHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            lastScale *= event.nativeEvent.scale;
            baseScale.setValue(lastScale);
            pinchScale.setValue(1);
        }
    }

    return (
        // <View>
        // </View>
        <PanGestureHandler
            ref={dragRef}
            onGestureEvent={onGestureEvent}
            minPointers={1}     // min 1 finger
            maxPointers={2}     // max 2 fingers
            avgTouches          // only on Android
            onHandlerStateChange={onHandlerStateChange}
        >


            {/* //  <Animated.ScrollView // <-- Use the Animated ScrollView wrapper
        //     contentContainerStyle={styles.container}
        //     scrollEventThrottle={1} // <-- Use 1 here to make sure no events are ever missed
        //     onScroll={Animated.event(
        //         [
        //             { //e.nativeEvent.contentOffset.x
        //                 nativeEvent: {
        //                     contentOffset: { y: scrollY }
        //                 }
        //             }
        //         ],
        //         { useNativeDriver: true } // <-- Add this
        //     )}>
        //     {content}
        // </Animated.ScrollView> */}

            {/* <Animated.View style={styles.container}> */}



            <PinchGestureHandler
                ref={pinchRef}
                onGestureEvent={onPinchGestureEvent}
                onHandlerStateChange={onPinchHandlerStateChange}
            >
                {/* <Animated.View style={styles.imageContainer}> */}


                <Animated.Text
                    style={{
                        // width: width,
                        // height: 300,
                        transform: [
                            { scale },
                            // { translateX },     // horizontally
                            // { translateY },     // vertically
                        ]
                    }}
                >Testing the zoom</Animated.Text>


                {/* <Animated.Image
                            source={props.source}
                            style={{
                                width: width,
                                height: 300,
                                transform: [
                                    { scale },
                                    { translateX },     // horizontally
                                    { translateY },     // vertically
                                ]
                            }}
                            resizeMode='contain'
                        /> */}
                {/* </Animated.View> */}
            </PinchGestureHandler>
            {/* //  <TextBody>{props.caption}</TextBody>*/}
            {/* </Animated.View> */}
        </PanGestureHandler>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        backgroundColor: 'transparent',
        overflow: 'hidden',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});
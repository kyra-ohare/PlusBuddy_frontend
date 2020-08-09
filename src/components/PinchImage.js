import React, { useRef } from 'react';
import { Dimensions, Animated, StyleSheet } from 'react-native';
import { PanGestureHandler, PinchGestureHandler, State } from 'react-native-gesture-handler';
import TextBody from '../components/TextBody';
import Color from '../constants/colors';

const { width } = Dimensions.get('window');

export default PinchImage = props => {
    const baseScale = useRef(new Animated.Value(1)).current; // RN recommends the use of useRef
    const pinchScale = useRef(new Animated.Value(1)).current;
    const scale = useRef(new Animated.Value(1)).current;
    const translateX = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;
    let lastScale = useRef(1).current;
    let lastOffset = { x: 0, y: 0 };

    // enables to drag around very smoothly, both horizontally and vertically
    const onPanGestureEvent = Animated.event(
        [{
            nativeEvent: {
                translationX: translateX,
                translationY: translateY
            },
        }], {
        useNativeDriver: true
    });

    // enables to keep moving object continuously (from where it was stopped)
    const onPanHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            lastOffset.x += event.nativeEvent.translationX;
            translateX.setOffset(lastOffset.x);
            translateX.setValue(0);
            lastOffset.y += event.nativeEvent.translationY;
            translateY.setOffset(lastOffset.y);
            translateY.setValue(0);
        }
    }

    // zooms in and out
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
        <PanGestureHandler
            onGestureEvent={onPanGestureEvent}
            minPointers={1}     // min 1 finger
            maxPointers={2}     // max 2 fingers
            avgTouches          // only on Android
            onHandlerStateChange={onPanHandlerStateChange}
        >
            <Animated.View style={styles.container}>
                <PinchGestureHandler
                    onGestureEvent={onPinchGestureEvent}
                    onHandlerStateChange={onPinchHandlerStateChange}
                >
                    <Animated.View style={styles.imageContainer}>
                        <Animated.Image
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
                        />
                    </Animated.View>
                </PinchGestureHandler>
                <TextBody>{props.caption}</TextBody>
            </Animated.View>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Color.primary,
        // backgroundColor: 'white'
    }
});
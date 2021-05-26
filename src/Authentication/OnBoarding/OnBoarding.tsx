/* eslint-disable prettier/prettier */
import React from "react"
import { StyleSheet, View, Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler, useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  useDerivedValue,

} from "react-native-reanimated";


import Slide, { SLIDE_HEIGHT } from "./Slide";

const { width } = Dimensions.get("window")

const OnBoarding = () => {

  const x = useSharedValue(0);

  const slides = [{
    label: "Payfull",
    color: "#BFEAF5",
    subtitle: "FInds Your Outfits",
    description: "COnfused about your outfits? Dont Worry"
  },
  {
    label: "Enjoy",
    color: "#BEECC4",
    subtitle: "FInds Your Enjoy",
    description: "COnfused about your outfits? Dont Worry"
  },
  {
    label: "Relaxed",
    color: "#FFE4D9",
    subtitle: "Finds Your Relaxed",
    description: "COnfused about your outfits? Dont Worry"
  },
  {
    label: "Exportix",
    color: "#FFDDDD",
    subtitle: "Finds Your exportix",
    description: "COnfused about your outfits? Dont Worry"
  }
  ]

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const color = useDerivedValue(() => {
    return interpolateColor(x.value, slides.map((_, i) => i * width),
      slides.map(slide => slide.color))
  })

  function sharedStyles() {
    // eslint-disable-next-line quotes
    'worklet';
    return {
      backgroundColor: color.value
    }
  }

  const animationStyle = useAnimatedStyle(sharedStyles)
  const animationOverlay = useAnimatedStyle(sharedStyles)

  return (

    <View style={styles.container}>

      <Animated.View style={[styles.slider, animationStyle]}>
        <Animated.ScrollView horizontal={true}
          decelerationRate="fast" snapToInterval={width} bounces={false} showsHorizontalScrollIndicator={false}
          {...{ scrollHandler }}
        >
          {slides.map(({ label }, index) => {
            return (
              <Slide key={index} right={!(index % 2)} {...{ label }} />
            )
          })}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>

        <Animated.View style={[styles.overlay, animationOverlay]} />

        <Animated.View style={styles.footerContent}>

        </Animated.View>

      </View>

    </View>

  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "red"
  },
  slider: {
    height: SLIDE_HEIGHT,
    // backgroundColor: "cyan",
    borderBottomRightRadius: 75
  },
  footer: {
    flex: 1
  },
  footerContent: { flex: 1, backgroundColor: "white", borderTopLeftRadius: 75 }
});
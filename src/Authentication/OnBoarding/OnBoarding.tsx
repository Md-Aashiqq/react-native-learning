/* eslint-disable prettier/prettier */
import React, { useRef } from "react"
import { StyleSheet, View, Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler, useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  useDerivedValue,
} from "react-native-reanimated";

import { Dot } from "../../components"
import { Routes, StackNavigationProps } from "../../components/Navigation";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";



const { width } = Dimensions.get("window")

const OnBoarding = ({ navigation }: StackNavigationProps<Routes, "OnBoarding">) => {

  const x = useSharedValue(0);
  const scrollRef = useRef<Animated.ScrollView>(null);

  const slides = [{
    label: "Payfull",
    color: "#BFEAF5",
    subtitle: "Finds Your Outfits",
    description: "Confused about your outfits? Dont Worry",
    picture: require("../../../assets/1.png")
  },
  {
    label: "Enjoy",
    color: "#BEECC4",
    subtitle: "Finds Your Enjoy",
    description: "Confused about your outfits? Dont Worry",
    picture: require("../../../assets/2.png")
  },
  {
    label: "Relaxed",
    color: "#FFE4D9",
    subtitle: "Finds Your Relaxed",
    description: "Confused about your outfits? Dont Worry",
    picture: require("../../../assets/3.png")
  },
  {
    label: "Exportix",
    color: "#FFDDDD",
    subtitle: "Finds Your exportix",
    description: "Confused about your outfits? Dont Worry",
    picture: require("../../../assets/4.png")
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
  const animationFooter = useAnimatedStyle(() => {
    "worklet";
    return {
      width: (width * slides.length),
      flex: 1,
      flexDirection: "row",
      transform: [{
        translateX: x.value * -1
      }]
    }
  })



  return (

    <View style={styles.container}>

      <Animated.View style={[styles.slider, animationStyle]}>
        <Animated.ScrollView horizontal={true}
          ref={scrollRef}
          decelerationRate="fast" snapToInterval={width} bounces={false} showsHorizontalScrollIndicator={false}
          {...{ scrollHandler }}
        >
          {slides.map(({ label, picture }, index) => {
            return (
              <Slide key={index} right={!(index % 2)} {...{ label, picture }} />
            )
          })}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>

        <Animated.View style={[{ ...StyleSheet.absoluteFillObject }, animationOverlay]} />

        <View style={styles.footerContent}>

          <View style={styles.pagination}>
            {slides.map((_, index) => {
              return (
                <Dot key={index} {...{ index }} currentIndex={x} />
              )
            })}
          </View>

          <Animated.View style={[animationFooter]}>
            {slides.map(({ subtitle, description }, index) => {
              const last = (index) === (slides.length - 1)
              return (
                <Subslide onPress={() => {
                  if (last) {
                    navigation.navigate("Welcome")
                  }
                  else {
                    scrollRef.current?.scrollTo({ x: width * (index + 1), animated: true })
                  }
                }} key={index}  {...{ subtitle, description, last }} />
              )
            })}
          </Animated.View>

        </View>

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
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: 75
  },
  footer: {
    flex: 1,

  },
  footerContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 75,
    flex: 1
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  }
});
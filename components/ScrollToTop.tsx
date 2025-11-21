import React, { useRef, useState } from 'react';
import {
    Animated,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

interface ScrollToTopProps {
  children: React.ReactNode;
}

export default function ScrollToTop({ children }: ScrollToTopProps) {
  const scrollViewRef = useRef<ScrollView>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const shouldShow = scrollY > 300;

    if (shouldShow !== showScrollTop) {
      setShowScrollTop(shouldShow);

      Animated.timing(fadeAnim, {
        toValue: shouldShow ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {children}
      </ScrollView>

      <Animated.View
        style={[
          styles.scrollToTopButton,
          {
            opacity: fadeAnim,
            transform: [
              {
                scale: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
            ],
          },
        ]}
        pointerEvents={showScrollTop ? 'auto' : 'none'}
      >
        <TouchableOpacity onPress={scrollToTop} style={styles.button}>
          {/* icon thêm ở commit 4 */}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollToTopButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#22c55e',
  },
});
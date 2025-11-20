import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

interface ScrollToTopProps {
  children: React.ReactNode;
}

export default function ScrollToTop({ children }: ScrollToTopProps) {
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
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
});

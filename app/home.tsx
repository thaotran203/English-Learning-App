import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function HomePage() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollToTop>
      {/* Hero Section */}
      <View style={[styles.hero, isDark && styles.heroDark]}>
        <Text style={[styles.heroTitle, isDark && styles.heroTitleDark]}>
          Learn English with EduBlink
        </Text>
        <Text style={[styles.heroSubtitle, isDark && styles.heroSubtitleDark]}>
          Master the English language with our comprehensive courses and expert instructors
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Start Learning Today</Text>
        </TouchableOpacity>
      </View>

      {/* Features Section */}
      <View style={styles.content}>
        <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
          Why Choose EduBlink?
        </Text>
        
        <View style={styles.featuresGrid}>
          <View style={[styles.featureCard, isDark && styles.featureCardDark]}>
            <View style={styles.featureIcon}>
              <Ionicons name="book" size={30} color="#22c55e" />
            </View>
            <Text style={[styles.featureTitle, isDark && styles.featureTitleDark]}>
              Expert Curriculum
            </Text>
            <Text style={[styles.featureText, isDark && styles.featureTextDark]}>
              Carefully designed courses by language experts
            </Text>
          </View>

          <View style={[styles.featureCard, isDark && styles.featureCardDark]}>
            <View style={styles.featureIcon}>
              <Ionicons name="people" size={30} color="#22c55e" />
            </View>
            <Text style={[styles.featureTitle, isDark && styles.featureTitleDark]}>
              Interactive Learning
            </Text>
            <Text style={[styles.featureText, isDark && styles.featureTextDark]}>
              Engage with fellow learners and instructors
            </Text>
          </View>

          <View style={[styles.featureCard, isDark && styles.featureCardDark]}>
            <View style={styles.featureIcon}>
              <Ionicons name="trophy" size={30} color="#22c55e" />
            </View>
            <Text style={[styles.featureTitle, isDark && styles.featureTitleDark]}>
              Certified Courses
            </Text>
            <Text style={[styles.featureText, isDark && styles.featureTextDark]}>
              Get recognized certificates upon completion
            </Text>
          </View>

          <View style={[styles.featureCard, isDark && styles.featureCardDark]}>
            <View style={styles.featureIcon}>
              <Ionicons name="time" size={30} color="#22c55e" />
            </View>
            <Text style={[styles.featureTitle, isDark && styles.featureTitleDark]}>
              Flexible Schedule
            </Text>
            <Text style={[styles.featureText, isDark && styles.featureTextDark]}>
              Learn at your own pace, anytime, anywhere
            </Text>
          </View>
        </View>

        {/* Popular Courses */}
        <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
          Popular Courses
        </Text>
        
        <View style={styles.coursesGrid}>
          <View style={[styles.courseCard, isDark && styles.courseCardDark]}>
            <View style={styles.coursePlaceholder}>
              <Ionicons name="play-circle" size={40} color="#22c55e" />
            </View>
            <Text style={[styles.courseTitle, isDark && styles.courseTitleDark]}>
              English for Beginners
            </Text>
            <Text style={[styles.courseDescription, isDark && styles.courseDescriptionDark]}>
              Start your English journey with basic vocabulary and grammar
            </Text>
            <TouchableOpacity style={styles.courseButton}>
              <Text style={styles.courseButtonText}>Enroll Now</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.courseCard, isDark && styles.courseCardDark]}>
            <View style={styles.coursePlaceholder}>
              <Ionicons name="play-circle" size={40} color="#22c55e" />
            </View>
            <Text style={[styles.courseTitle, isDark && styles.courseTitleDark]}>
              Business English
            </Text>
            <Text style={[styles.courseDescription, isDark && styles.courseDescriptionDark]}>
              Professional English for workplace communication
            </Text>
            <TouchableOpacity style={styles.courseButton}>
              <Text style={styles.courseButtonText}>Enroll Now</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.courseCard, isDark && styles.courseCardDark]}>
            <View style={styles.coursePlaceholder}>
              <Ionicons name="play-circle" size={40} color="#22c55e" />
            </View>
            <Text style={[styles.courseTitle, isDark && styles.courseTitleDark]}>
              IELTS Preparation
            </Text>
            <Text style={[styles.courseDescription, isDark && styles.courseDescriptionDark]}>
              Comprehensive IELTS test preparation course
            </Text>
            <TouchableOpacity style={styles.courseButton}>
              <Text style={styles.courseButtonText}>Enroll Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Section */}
        <View style={[styles.statsSection, isDark && styles.statsSectionDark]}>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, isDark && styles.statNumberDark]}>10K+</Text>
            <Text style={[styles.statLabel, isDark && styles.statLabelDark]}>Students</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, isDark && styles.statNumberDark]}>500+</Text>
            <Text style={[styles.statLabel, isDark && styles.statLabelDark]}>Courses</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, isDark && styles.statNumberDark]}>100+</Text>
            <Text style={[styles.statLabel, isDark && styles.statLabelDark]}>Instructors</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, isDark && styles.statNumberDark]}>95%</Text>
            <Text style={[styles.statLabel, isDark && styles.statLabelDark]}>Success Rate</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <Footer />
    </ScrollToTop>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#1a1a1a',
  },
  hero: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heroDark: {
    backgroundColor: '#2a2a2a',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  heroTitleDark: {
    color: '#fff',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  heroSubtitleDark: {
    color: '#ccc',
  },
  ctaButton: {
    backgroundColor: '#22c55e',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  sectionTitleDark: {
    color: '#fff',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  featureCard: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
  },
  featureCardDark: {
    backgroundColor: '#2a2a2a',
  },
  featureIcon: {
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureTitleDark: {
    color: '#fff',
  },
  featureText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  featureTextDark: {
    color: '#ccc',
  },
  coursesGrid: {
    marginBottom: 50,
  },
  courseCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  courseCardDark: {
    backgroundColor: '#2a2a2a',
  },
  coursePlaceholder: {
    height: 120,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  courseTitleDark: {
    color: '#fff',
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },
  courseDescriptionDark: {
    color: '#ccc',
  },
  courseButton: {
    backgroundColor: '#22c55e',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  courseButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  statsSection: {
    backgroundColor: '#f8f9fa',
    padding: 30,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  statsSectionDark: {
    backgroundColor: '#2a2a2a',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#22c55e',
    marginBottom: 5,
  },
  statNumberDark: {
    color: '#22c55e',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statLabelDark: {
    color: '#ccc',
  },
});
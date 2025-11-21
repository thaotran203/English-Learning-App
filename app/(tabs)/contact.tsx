import React, { useState } from 'react';

import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';

export default function ContactPage() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }
    Alert.alert('Success', 'Your message has been sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <ScrollToTop>
      {/* Header Section */}
      <View style={[styles.header, isDark && styles.headerDark]}>
        <Text style={[styles.title, isDark && styles.titleDark]}>Contact Us</Text>
        <View style={styles.breadcrumb}>
          <Text style={[styles.breadcrumbText, isDark && styles.breadcrumbTextDark]}>
            Home
          </Text>
          <Ionicons
            name="chevron-forward"
            size={16}
            color={isDark ? '#ccc' : '#666'}
            style={styles.breadcrumbIcon}
          />
          <Text style={[styles.breadcrumbCurrent, isDark && styles.breadcrumbCurrentDark]}>
            Contact Us
          </Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={[styles.subtitle, isDark && styles.subtitleDark]}>
          We're Always Eager to Hear From You!
        </Text>

        {/* Contact Information */}
        <View style={styles.contactInfo}>
          <View style={styles.infoItem}>
            <Text style={[styles.infoLabel, isDark && styles.infoLabelDark]}>Address</Text>
            <Text style={[styles.infoText, isDark && styles.infoTextDark]}>
              Studio 76d, Riley Ford, North Michael chester, CF99 6QQ
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={[styles.infoLabel, isDark && styles.infoLabelDark]}>Email</Text>
            <Text style={[styles.infoText, isDark && styles.infoTextDark]}>
              edublink@example.com
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={[styles.infoLabel, isDark && styles.infoLabelDark]}>Phone</Text>
            <Text style={[styles.infoText, isDark && styles.infoTextDark]}>
              (+091) 413 554 8598
            </Text>
          </View>
        </View>

        {/* Social Media */}
        <View style={styles.socialSection}>
          <View style={styles.socialContainer}>
            <TouchableOpacity style={[styles.socialButton, styles.facebook]}>
              <Ionicons name="logo-facebook" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, styles.twitter]}>
              <Ionicons name="logo-twitter" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, styles.linkedin]}>
              <Ionicons name="logo-linkedin" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Get In Touch Form */}
        <View style={styles.formSection}>
          <Text style={[styles.formTitle, isDark && styles.formTitleDark]}>
            Get In Touch
          </Text>
          <Text style={[styles.formSubtitle, isDark && styles.formSubtitleDark]}>
            Maxime rhoncus vitae dui et venenatis vestibulum sed magna.
          </Text>

          <View style={styles.form}>
            <TextInput
              style={[styles.input, isDark && styles.inputDark]}
              placeholder="Your Name *"
              placeholderTextColor={isDark ? '#999' : '#666'}
              value={formData.name}
              onChangeText={(value) => handleInputChange('name', value)}
            />

            <TextInput
              style={[styles.input, isDark && styles.inputDark]}
              placeholder="Enter your email"
              placeholderTextColor={isDark ? '#999' : '#666'}
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              keyboardType="email-address"
            />

            <TextInput
              style={[styles.input, isDark && styles.inputDark]}
              placeholder="Subject"
              placeholderTextColor={isDark ? '#999' : '#666'}
              value={formData.subject}
              onChangeText={(value) => handleInputChange('subject', value)}
            />

            <TextInput
              style={[styles.textArea, isDark && styles.inputDark]}
              placeholder="Your Message"
              placeholderTextColor={isDark ? '#999' : '#666'}
              value={formData.message}
              onChangeText={(value) => handleInputChange('message', value)}
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Send Message</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Map Placeholder */}
        <View style={[styles.mapContainer, isDark && styles.mapContainerDark]}>
          <View style={styles.mapPlaceholder}>
            <Ionicons name="location" size={40} color="#22c55e" />
            <Text style={[styles.mapText, isDark && styles.mapTextDark]}>
              Interactive Map Would Go Here
            </Text>
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
  header: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerDark: {
    backgroundColor: '#2a2a2a',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  titleDark: {
    color: '#fff',
  },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  breadcrumbText: {
    fontSize: 14,
    color: '#666',
  },
  breadcrumbTextDark: {
    color: '#ccc',
  },
  breadcrumbIcon: {
    marginHorizontal: 8,
  },
  breadcrumbCurrent: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  breadcrumbCurrentDark: {
    color: '#fff',
  },
  content: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  subtitleDark: {
    color: '#fff',
  },
  contactInfo: {
    marginBottom: 30,
  },
  infoItem: {
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  infoLabelDark: {
    color: '#fff',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  infoTextDark: {
    color: '#ccc',
  },
  socialSection: {
    marginBottom: 40,
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebook: {
    backgroundColor: '#1877f2',
  },
  twitter: {
    backgroundColor: '#1da1f2',
  },
  linkedin: {
    backgroundColor: '#0077b5',
  },
  formSection: {
    marginBottom: 40,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  formTitleDark: {
    color: '#fff',
  },
  formSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
  },
  formSubtitleDark: {
    color: '#ccc',
  },
  form: {
    gap: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
  },
  inputDark: {
    borderColor: '#333',
    backgroundColor: '#2a2a2a',
    color: '#fff',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
    height: 120,
  },
  submitButton: {
    backgroundColor: '#22c55e',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mapContainer: {
    height: 200,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 20,
  },
  mapContainerDark: {
    backgroundColor: '#2a2a2a',
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  mapTextDark: {
    color: '#ccc',
  },
});
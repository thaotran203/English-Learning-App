import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Footer() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={[styles.footer, isDark && styles.footerDark]}>
      {/* Company Info */}
      <View style={styles.section}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>e</Text>
          </View>
          <Text style={[styles.brandText, isDark && styles.brandTextDark]}>EduBlink</Text>
        </View>
        <Text style={[styles.description, isDark && styles.descriptionDark]}>
          EduBlink brings great content and planning are not enough without execution.
        </Text>
        <Text style={[styles.contact, isDark && styles.contactDark]}>
          Call: +01 234 567 890
        </Text>
        <Text style={[styles.contact, isDark && styles.contactDark]}>
          Email: info@edublink.com
        </Text>
      </View>

      {/* Online Platform */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
          Online Platform
        </Text>
        <TouchableOpacity style={styles.linkItem}>
          <Text style={[styles.linkText, isDark && styles.linkTextDark]}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem}>
          <Text style={[styles.linkText, isDark && styles.linkTextDark]}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem}>
          <Text style={[styles.linkText, isDark && styles.linkTextDark]}>Instructor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem}>
          <Text style={[styles.linkText, isDark && styles.linkTextDark]}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem}>
          <Text style={[styles.linkText, isDark && styles.linkTextDark]}>Instructor Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem}>
          <Text style={[styles.linkText, isDark && styles.linkTextDark]}>Purchase Guide</Text>
        </TouchableOpacity>
      </View>

      {/* Links */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
          Links
        </Text>
        <TouchableOpacity style={styles.linkItem}>
          <Text style={[styles.linkText, isDark && styles.linkTextDark]}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem}>
          <Text style={[styles.linkText, isDark && styles.linkTextDark]}>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem}>
          <Text style={[styles.linkText, isDark && styles.linkTextDark]}>News & Articles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem}>
          <Text style={[styles.linkText, isDark && styles.linkTextDark]}>FAQ's</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem}>
          <Text style={[styles.linkText, isDark && styles.linkTextDark]}>Sign in/Registration</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem}>
          <Text style={[styles.linkText, isDark && styles.linkTextDark]}>Coming Soon</Text>
        </TouchableOpacity>
      </View>

      {/* Contacts */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
          Contacts
        </Text>
        <Text style={[styles.contactText, isDark && styles.contactTextDark]}>
          Enter your email address to register to our newsletter subscription
        </Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity 
            style={[styles.socialButton, styles.facebook]}
            onPress={() => openLink('https://facebook.com')}
          >
            <Ionicons name="logo-facebook" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.socialButton, styles.instagram]}
            onPress={() => openLink('https://instagram.com')}
          >
            <Ionicons name="logo-instagram" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.socialButton, styles.linkedin]}
            onPress={() => openLink('https://linkedin.com')}
          >
            <Ionicons name="logo-linkedin" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.socialButton, styles.youtube]}
            onPress={() => openLink('https://youtube.com')}
          >
            <Ionicons name="logo-youtube" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Copyright */}
      <View style={[styles.copyright, isDark && styles.copyrightDark]}>
        <Text style={[styles.copyrightText, isDark && styles.copyrightTextDark]}>
          Copyright 2023 EduBlink | Developed by{' '}
          <Text style={styles.linkInline}>edublink</Text> all right reserved
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  footerDark: {
    backgroundColor: '#1a1a1a',
  },
  section: {
    marginBottom: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#22c55e',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  brandText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  brandTextDark: {
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 15,
  },
  descriptionDark: {
    color: '#ccc',
  },
  contact: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  contactDark: {
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  sectionTitleDark: {
    color: '#fff',
  },
  linkItem: {
    marginBottom: 8,
  },
  linkText: {
    fontSize: 14,
    color: '#666',
  },
  linkTextDark: {
    color: '#ccc',
  },
  contactText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },
  contactTextDark: {
    color: '#ccc',
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
  instagram: {
    backgroundColor: '#e4405f',
  },
  linkedin: {
    backgroundColor: '#0077b5',
  },
  youtube: {
    backgroundColor: '#ff0000',
  },
  copyright: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 20,
    marginTop: 20,
  },
  copyrightDark: {
    borderTopColor: '#333',
  },
  copyrightText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  copyrightTextDark: {
    color: '#ccc',
  },
  linkInline: {
    color: '#22c55e',
    fontWeight: '500',
  },
});
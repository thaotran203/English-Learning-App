import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface MenuItem {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
  hasSubmenu?: boolean;
}

const menuItems: MenuItem[] = [
  { label: 'Home', icon: 'home-outline', route: 'index', hasSubmenu: true },
  { label: 'Pages', icon: 'document-outline', route: 'pages', hasSubmenu: true },
  { label: 'Courses', icon: 'school-outline', route: 'courses', hasSubmenu: true },
  { label: 'Blog', icon: 'newspaper-outline', route: 'blog', hasSubmenu: true },
  { label: 'Contact', icon: 'mail-outline', route: 'contact', hasSubmenu: true },
];

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleCloseDrawer = () => {
    props.navigation.closeDrawer();
  };

  const navigateToRoute = (route: string) => {
    if (route === 'index') {
      props.navigation.navigate('home');
    } else if (route === 'contact') {
      props.navigation.navigate('contact');
    } else {
      props.navigation.navigate(route);
    }
    props.navigation.closeDrawer();
  };

  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      {/* Header */}
      <View style={[styles.header, isDark && styles.headerDark]}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>e</Text>
          </View>
          <Text style={[styles.brandText, isDark && styles.brandTextDark]}>EduBlink</Text>
        </View>
        <TouchableOpacity onPress={handleCloseDrawer} style={styles.closeButton}>
          <Ionicons 
            name="close" 
            size={24} 
            color={isDark ? '#fff' : '#333'} 
          />
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      <ScrollView style={styles.menuContainer} showsVerticalScrollIndicator={false}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.menuItem, isDark && styles.menuItemDark]}
            onPress={() => navigateToRoute(item.route)}
            activeOpacity={0.7}
          >
            <View style={styles.menuItemContent}>
              <View style={styles.menuItemLeft}>
                <Ionicons 
                  name={item.icon} 
                  size={20} 
                  color={index === 0 ? '#22c55e' : (isDark ? '#fff' : '#333')} 
                />
                <Text style={[
                  styles.menuItemText,
                  index === 0 && styles.menuItemTextActive,
                  isDark && styles.menuItemTextDark
                ]}>
                  {item.label}
                </Text>
              </View>
              {item.hasSubmenu && (
                <Ionicons 
                  name="add" 
                  size={20} 
                  color={isDark ? '#fff' : '#666'} 
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerDark: {
    borderBottomColor: '#333',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  closeButton: {
    padding: 5,
  },
  menuContainer: {
    flex: 1,
    paddingTop: 10,
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f8f8f8',
  },
  menuItemDark: {
    borderBottomColor: '#2a2a2a',
  },
  menuItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
    fontWeight: '500',
  },
  menuItemTextActive: {
    color: '#22c55e',
  },
  menuItemTextDark: {
    color: '#fff',
  },
});
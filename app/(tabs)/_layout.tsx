import { Ionicons } from "@expo/vector-icons";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import "react-native-gesture-handler";
import "react-native-reanimated";

import CustomDrawerContent from "@/components/CustomDrawerContent";
import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 110,
            paddingTop: 20,
            paddingBottom: 15,
          },
          headerTintColor: isDark ? "#fff" : "#333",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 20,
            color: isDark ? "#fff" : "#333",
          },
          headerTitle: "",
          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#22c55e",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  e
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: isDark ? "#fff" : "#333",
                }}
              >
                EduBlink
              </Text>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  /* Add search functionality */
                }}
                style={{
                  padding: 8,
                  borderRadius: 8,
                  marginRight: 10,
                }}
              >
                <Ionicons
                  name="search"
                  size={26}
                  color={isDark ? "#fff" : "#333"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{
                  padding: 8,
                  borderRadius: 8,
                }}
              >
                <Ionicons
                  name="menu"
                  size={26}
                  color={isDark ? "#fff" : "#333"}
                />
              </TouchableOpacity>
            </View>
          ),
          drawerType: "slide",
          drawerStyle: {
            backgroundColor: isDark ? "#1a1a1a" : "#fff",
            width: 280,
          },
        })}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: "Learn English",
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="contact"
          options={{
            title: "Contact Us",
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="modal"
          options={{
            title: "Modal",
          }}
        />
      </Drawer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

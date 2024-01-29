import React ,{useEffect, useState}from "react";
import { createStackNavigator, CardStyleInterpolators, } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";


import SplashScreen from "./src/screens/splashScreen";

// screens
import Login from "./src/screens/login/login";
import SignUp from "./src/screens/signup/signup";
import OtpPage from "./src/screens/signup/otp";
import ForgotPassword from "./src/screens/login/forgotPassword";
import Home from "./src/screens/Home";
import Tabs from "./src/screens/bottomTabs";
import ViewCourse from "./src/screens/tabs/courseList/viewCourse";
import Profile from "./src/screens/user/user";
import CreateCourse from "./src/screens/tabs/courses/createCourse";
import CourseSlides from "./src/screens/tabs/courses/addCourseSlides";
import AddCourseDetails from "./src/screens/tabs/courses/createCourseDetails";




const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                initialRouteName={'Splash'}
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid
                }}
            >
                {/* Screens */}

                <Stack.Screen
                    name="Splash"
                    options={{ animationEnabled: false, header: () => null }}
                    component={SplashScreen}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                < Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{ headerShown: false }}
                />
                < Stack.Screen
                    name="OtpPage"
                    component={OtpPage}
                    options={{ headerShown: false }}
                />

                < Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                />
                < Stack.Screen
                    name="Tabs"
                    component={Tabs}
                    options={{ headerShown: false }}
                />
                < Stack.Screen
                    name="ViewCourse"
                    component={ViewCourse}
                    options={{ headerShown: false }}
                />
                < Stack.Screen
                    name="User"
                    component={Profile}
                    options={{ headerShown: false }}
                />
                < Stack.Screen
                    name="CreateCourse"
                    component={CreateCourse}
                    options={{ headerShown: false }}
                />
                < Stack.Screen
                    name="AddCourse"
                    component={CourseSlides}
                    options={{ headerShown: false }}
                />
                  < Stack.Screen
                    name="AddCourseDetails"
                    component={AddCourseDetails}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer >
    );
};

export default () => {
    return <App />;
};

import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs
        screenOptions={{ tabBarActiveTintColor: "blue" }}
        >
            <Tabs.Screen name="index" options={{title:"Inicio",}} />
            <Tabs.Screen name="login" options={{title:"Login",}} />
            <Tabs.Screen name="registro" options={{title:"Registro",}} />
            <Tabs.Screen name="perfil" options={{title:"Perfil",}} />
            <Tabs.Screen name="settings" options={{title:"Ajustes",}} />
        </Tabs>
    );
}
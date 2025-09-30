import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Inicio",
          title: "Inicio",
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          drawerLabel: "Acerca de",
          title: "Acerca de la app",
        }}
      />
    </Drawer>
  );
}

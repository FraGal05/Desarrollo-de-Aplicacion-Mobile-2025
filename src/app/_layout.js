import { Stack } from "expo-router"

export default function RootLayout () {
    return (
        <Stack>
            <Stack.Screen name = "(da)" options={{ headerShown: false}}/>
        </Stack>
        
    )
}

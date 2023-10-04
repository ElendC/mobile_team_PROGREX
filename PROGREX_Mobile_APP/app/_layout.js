import { Stack } from 'expo-router';   //Importing stack logic. Example: Navigate to Home -> Profile. Now both in the stack (Home -> Profile). Pop Profile, now you back at Home, new stack is (Home). LIFO example

const Layout = () => {
    return <Stack />;
}

export default Layout;
import { Text, View, Pressable } from 'react-native';
import { Link, Tabs } from 'expo-router';

export default function Page(){
    return (
    <View>
        <Link href='/someroute[slug]'>testlink</Link>

        <Link href='/about' asChild> 
        <Pressable> 
            <Text>lodsfdfdfdffsdl</Text> 
        </Pressable> 
        </Link>


    

    </View>

    )}
import { View, Text, Pressable, StyleSheet, ImageBackground, Image } from 'react-native';
import Background from '../Components/common/Background';
import PrimaryButton from '../Components/common/PrimaryButton';
import { StatusBar } from 'expo-status-bar';
import NavigationBar from '../Components/navigation/NavigationBar';

function Posts ({ navigation }) {
    return (
        <Background>
            <Text style={styles.mainTitle}>All Posts</Text>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text>This is a Post Title</Text>
                    <Image></Image>
                    <Text>This is the Post Content</Text>
                </View>
            </View>
        </Background>
    )
}

export default Posts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    mainTitle: {
        fontSize: 40,
        color: 'white',
        marginTop: 90
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
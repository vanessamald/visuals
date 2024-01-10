import { View, Text, Pressable, StyleSheet, ImageBackground, Image } from 'react-native';
import Background from '../Components/common/Background';
import PrimaryButton from '../Components/common/PrimaryButton';
import { StatusBar } from 'expo-status-bar';
import NavigationBar from '../Components/navigation/NavigationBar';

function Goals ({ navigation }) {
    return (
        <Background>
            <Text style={styles.mainTitle}>All Goals</Text>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Daily Goals</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Weekly Goals</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Monthly Goals</Text>
                    </View>
                </View>
            </View>
        </Background>
    )
}

export default Goals;

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
    },
    title: {
        fontSize: 20,
        color: 'white'
    },
    titleContainer: {

    }
})
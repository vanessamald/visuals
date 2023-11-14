import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native';
import Background from '../Components/common/Background';
import PrimaryButton from '../Components/common/PrimaryButton';
import { StatusBar } from 'expo-status-bar';
import NavigationBar from '../Components/navigation/NavigationBar';
import {login, emailVerification, logout } from '../services/auth';

function Profile ({ navigation }) {


    const handleLogout = async () => {
        try {
            await logout();

        } catch (error) {
            alert('Sign out error:' + error.message);
        }
    }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.profileImage}></View>
                    <View>
                        <Pressable onPress={handleLogout}>
                            <Text>Logout</Text>
                        </Pressable>
                    </View> 
                </View>
                <View style={styles.center}>
                    <Text style={styles.text}>Welcome Back!</Text>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}>
                            <Pressable>
                                <Text style={styles.options_text}>New Post</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}>
                            <Pressable>
                                <Text style={styles.options_text} onPress={()=>navigation.navigate('Posts')}>View All</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}></View>
                    </View>
                    <View style={styles.bottomItem}>
                        <View style={styles.bottomItemInner}></View>
                    </View>
                </View>
            </View>
        </Background> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#fff',
        backgroundColor: '#eee'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '5%',
        backgroundColor: 'transparent'
    },
    bottom: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    bottomItem: {
        width: '45%',
        height: '45%',
        padding: 5,
    },
    bottomItemInner: {
        flex: 1,
        backgroundColor: '#292929',
        borderRadius: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        textTransform: 'uppercase'
    },
    options_text: {
        fontSize: 20,
        color: 'white',
    }
})

export default Profile;
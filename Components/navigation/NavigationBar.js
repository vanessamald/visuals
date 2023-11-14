import { View, Text, Pressable, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import PrimaryButton from '../common/PrimaryButton';
import { StatusBar } from 'expo-status-bar';

function NavigationBar ({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.bottomNavigationBar}>
                    <View>
                        <TouchableOpacity>
                            <Image
                                source={require('../ui/icons/usericon.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image
                                source={require('../ui/icons/messagesicon.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    icon: {
        width: 48, 
        height: 48,
    },
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomNavigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#385B4F', 
        height: 50,
      },
})

export default NavigationBar;
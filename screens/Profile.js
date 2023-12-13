import { useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, ImageBackground, Button, Image } from 'react-native';
import Background from '../Components/common/Background';
import PrimaryButton from '../Components/common/PrimaryButton';
import { StatusBar } from 'expo-status-bar';
import NavigationBar from '../Components/navigation/NavigationBar';
import { logout, updateUserPhotoURL } from '../services/auth';
import * as ImagePicker from 'expo-image-picker';
import { auth } from '../services/auth';

function Profile ({ navigation, user }) {
    const [ profileImage, setProfileImage ] = useState(null);
    const [displayName, setDisplayName ] = useState('');
    const [ photoURL, setPhotoURL ] = useState('');
    const [ loading, setLoading ] = useState(true);


    useEffect(() => {
        // Log the userName value to the console
        console.log('userName:', user.displayName);
      }, [user]);

      /*
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            if (auth && auth.currentUser) {
              const currentUser = auth.currentUser;
              setDisplayName(currentUser.displayName);
              setPhotoURL(currentUser.photoURL);
            } else {
              // Auth object or currentUser is not available
              console.error('Authentication object or currentUser not available.');
            }
          } catch (error) {
            console.error('Error fetching user data:', error.message);
          }
        };
    
        fetchUserData();
      }, [user]);
   */
/*
      useEffect(() => {
        // Fetch the user's display name and photoURL when the component mounts
        const fetchUserData = async () => {
          try {
            const currentUser = auth.currentUser;
            if (currentUser) {
              setDisplayName(currentUser.displayName);
              setPhotoURL(currentUser.photoURL);
            }
          } catch (error) {
            console.error('Error fetching user data:', error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUserData();
      }, []);
*/

    // handle user logout
    const handleLogout = async () => {
        try {
            await logout();

        } catch (error) {
            alert('Sign out error:' + error.message);
        }
    }

      // handle image selection
      const handleImagePick = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
          });
      
          if (!result.canceled) {
            // Update the user's profile with the selected photoURL
            try {
              await updateUserPhotoURL(result.uri);
              setPhotoURL(result.uri);
            } catch (error) {
              console.error('Error updating user photoURL:', error);
            }
          }
        } catch (error) {
          console.error('Error picking image:', error);
        }
      };

      /*
      if (loading) {
        return <View>
            <Text>Loading</Text>
        </View>
      }
      */

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Pressable>
                        {user.photoURL ? ( 
                        <Image style={styles.profileImage} source={{uri: user.photoURL}}/>
                        ) : (
                            // placeholder image
                            <View style={styles.profileImage}></View>
                        )}
                    </Pressable>
                    <Button title="Change Profile Image" onPress={handleImagePick} />

                    
                   
                    <View>
                        <Pressable onPress={handleLogout}>
                            <Text>Logout</Text>
                        </Pressable>
                    </View> 
                </View>
                <View style={styles.center}>
                    <Text style={styles.text}>Welcome Back {user.displayName}!</Text>
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
                                <Text style={styles.options_text} onPress={()=> navigation.navigate('NestedNavigator', {screen: 'Posts'})}>View All</Text>
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
            <NavigationBar/>
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
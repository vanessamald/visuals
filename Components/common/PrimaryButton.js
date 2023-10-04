import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ title, navigation }) {
    const goToTargetScreen = () => {
        navigation.navigate(title);
      };

    return (
        <View style={styles.buttonOuterContainer}
        >
            <Pressable
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={goToTargetScreen}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles= StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 8,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: 'gray',
        paddingVertical: 12,
        paddingHorizontal: 80,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})
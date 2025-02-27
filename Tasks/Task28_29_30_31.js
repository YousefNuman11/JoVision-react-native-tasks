import React, { useState, useRef } from 'react';
import { View, FlatList, Image, Alert, StyleSheet, Pressable, Modal, TextInput, Button, TouchableOpacity, Text } from 'react-native';

const initialImages = [
    require("../Image/image1.png"),
    require("../Image/image2.png"),
    require("../Image/image3.jpeg"),
    require("../Image/image4.jpeg"),
    require("../Image/image5.jpeg"),
    require("../Image/image6.jpg"),
    require("../Image/image7.jpg"),
    require("../Image/image8.jpeg"),
    require("../Image/image9.jpg"),
    require("../Image/image10.jpg"),
];

const Task28_29_30_31 = () => {
    const [images, setImages] = useState(initialImages);
    const [modalVisible, setModalVisible] = useState(false);
    const [inputIndex, setInputIndex] = useState('');
    const flatListRef = useRef(null);

    const handlePress = (index) => {
        Alert.alert(`You have selected image: ${index}`);
    };

    const scrollToIndex = () => {
        const index = parseInt(inputIndex, 10);
        if (!isNaN(index) && index >= 0 && index < images.length) {
            flatListRef.current.scrollToIndex({ animated: true, index });
            setModalVisible(false);
            setInputIndex('');
        } else {
            Alert.alert("Invalid index", "Please enter a valid index between 0 and " + (images.length - 1) + ".");
        }
    };

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const duplicateImage = (index) => {
        const newImages = [...images];
        newImages.splice(index + 1, 0, images[index]);
        setImages(newImages);
    };

    return (
        <View style={styles.container}>
            <Button title="Go to Image" onPress={() => setModalVisible(true)} />
            <FlatList
                ref={flatListRef}
                data={images}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.imageContainer}>
                        <Pressable onPress={() => handlePress(index)}>
                            <Image source={item} style={styles.image} />
                        </Pressable>
                        <TouchableOpacity style={styles.deleteButton} onPress={() => removeImage(index)}>
                            <Text style={styles.deleteText}>🗑️</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.duplicateButton} onPress={() => duplicateImage(index)}>
                            <Text style={styles.duplicateText}>➕</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter image index"
                        keyboardType="numeric"
                        value={inputIndex}
                        onChangeText={setInputIndex}
                    />
                    <Button title="Submit" onPress={scrollToIndex} />
                    <Button title="Cancel" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    imageContainer: {
        position: 'relative',
        margin: 10,
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    deleteButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
        borderRadius: 15,
        padding: 5,
    },
    deleteText: {
        color: 'white',
        fontSize: 12,
    },
    duplicateButton: {
        position: 'absolute',
        top: 5,
        left: 5,
        backgroundColor: 'rgba(0, 255, 0, 0.7)',
        borderRadius: 15,
        padding: 5,
    },
    duplicateText: {
        color: 'white',
        fontSize: 12,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20,
    },
    input: {
        width: 200,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default Task28_29_30_31;

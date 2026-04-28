import { useEffect, useRef, useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Location from 'expo-location';
import { Audio } from 'expo-av';

export default function DeviceFeaturesScreen() {
    // ================= CAMERA =================
    const [cameraPermission, requestCameraPermission] = useCameraPermissions();
    const cameraRef = useRef<any>(null);
    const [photo, setPhoto] = useState<string | null>(null);
    const [showCamera, setShowCamera] = useState(false);

    // ================= LOCATION =================
    const [location, setLocation] = useState<any>(null);

    // ================= MICROPHONE =================
    const [recording, setRecording] = useState<Audio.Recording | null>(null);
    const [audioUri, setAudioUri] = useState<string | null>(null);

    // ================= CAMERA FUNCTIONS =================
    const openCamera = async () => {
        if (!cameraPermission?.granted) {
            const res = await requestCameraPermission();
            if (!res.granted) return;
        }
        setShowCamera(true);
    };

    const takePhoto = async () => {
        if (!cameraRef.current) return;

        const result = await cameraRef.current.takePictureAsync();
        setPhoto(result.uri);
        setShowCamera(false);
    };

    // ================= LOCATION FUNCTIONS =================
    const getLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') return;

        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc);
    };

    // ================= MICROPHONE FUNCTIONS =================
    const startRecording = async () => {
        const { status } = await Audio.requestPermissionsAsync();
        if (status !== 'granted') return;

        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
        });

        const rec = new Audio.Recording();
        await rec.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
        await rec.startAsync();

        setRecording(rec);
    };

    const stopRecording = async () => {
        if (!recording) return;

        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();

        setAudioUri(uri || null);
        setRecording(null);
    };
    const playSound = async () => {
        if (!audioUri) return;
        const { sound } = await Audio.Sound.createAsync({ uri: audioUri });
        await sound.playAsync();
    };

    // ================= UI =================
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Device Features Demo</Text>

            {/* CAMERA */}
            <Button title="Open Camera" onPress={openCamera} />

            {showCamera && (
                <CameraView ref={cameraRef} style={styles.camera}>
                    <Button title="Take Photo" onPress={takePhoto} />
                </CameraView>
            )}

            {photo && <Image source={{ uri: photo }} style={styles.image} />}

            {/* LOCATION */}
            <Button title="Get Location" onPress={getLocation} />
            {location && (
                <Text>
                    Lat: {location.coords.latitude} | Lng: {location.coords.longitude}
                </Text>
            )}

            {/* MICROPHONE */}
            <Button title="Start Recording" onPress={startRecording} />
            <Button title="Stop Recording" onPress={stopRecording} />

            {audioUri &&
                <Button title="play audio" onPress={playSound}></Button>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    camera: {
        height: 300,
        marginVertical: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 10,
    },
});
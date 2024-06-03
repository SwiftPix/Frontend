import { CameraView, takePictureAsync, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import cameraButton from '../../../assets/cameraButton.png';

function BiometricScreen() {
  const facing = 'front';
  const [permission, requestPermission] = useCameraPermissions();
  const [taken, setTaken] = useState(false);
  const [photoURI, setPhotoURI] = useState("");
  const [cameraRef, setCameraRef] = useState(null);
  const navigation = useNavigation();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  const takePicture = async function() {
    const options = { quality: 0.5, base64: true, isImageMirror: true };
    const data = await cameraRef.takePictureAsync(options);
    setTaken(true);
    setPhotoURI(data.uri);
  };

  const handleConfirm = () => {
    // Navegar para outra página após confirmar a foto
    
            navigation.navigate('LoadingAppScreen', { photoURI });
            setTimeout(() => {
              navigation.navigate('FinishRegister');
            }, 4000);
       
     
    
  };

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!photoURI ? (
        <CameraView style={styles.camera} facing={facing} ref={(ref) => { setCameraRef(ref) }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Image style={styles.cameraButton} source={cameraButton} />
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <View style={{ flex: 1 }}>
          <Image source={{ uri: photoURI }} style={{ flex: 1 }} />
          <Button  style={styles.doneText} title="Avançar" onPress={handleConfirm} />
        </View>
      )}
    </View>
  );
}

export default BiometricScreen;

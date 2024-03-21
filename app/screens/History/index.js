import React, {useRef, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Linking,
  PermissionsAndroid,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import ActionSheet from 'react-native-actionsheet';
import DeviceInfo from 'react-native-device-info';
import ImagePicker from 'react-native-image-crop-picker';

const History = () => {
  const actionSheetRef = useRef();
  const IOS = Platform.OS === 'ios';
  const isAndroid = Platform.OS === 'android';

  const [images, setImages] = useState([]);
  console.log('images======>>>>>', images);

  const showActionSheet = () => {
    actionSheetRef.current.show();
  };

  const handlePress = index => {
    if (index == 0) {
      openPermissionPicker();
    } else if (index == 1) {
      openCamera();
    } else {
      actionSheetRef.current.hide();
    }
  };

  const openPermissionPicker = async () => {
    const androidVersion = DeviceInfo.getSystemVersion();
    if (isAndroid) {
      try {
        const grantedPermission = await PermissionsAndroid.request(
          androidVersion >= 13
            ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
            : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Storage permission',
            message:
              'This app needs access to your storage' +
              'so you can access your document and upload it.',
          },
        );
        if (grantedPermission === PermissionsAndroid.RESULTS.GRANTED) {
          openPicker();
        } else {
        }
      } catch (err) {
        console.warn('Err===>', err);
      }
    }
  };

  const openCamera = fileType => {
    const type = fileType ? fileType : 'photo';

    let options = {
      mediaType: type,
      width: 300,
      height: 300,
    };

    if (type === 'photo') {
      options.compressImageQuality = 0.5;
    }

    ImagePicker.openCamera(options).then(image => {
      setImages(image);
    });
  };

  const openPicker = async fileType => {
    const type = fileType ? fileType : 'photo';
    ImagePicker.openPicker({
      mediaType: type,
      multiple: true,
    }).then(image => {
      setImages([...image, ...images]);
    });
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => showActionSheet()}
        style={{
          borderStyle: 'dashed',
          borderWidth: 1,
          height: 100,
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 10,
          borderRadius: 10,
        }}>
        <Entypo name="plus" style={{fontSize: 18}}></Entypo>
      </TouchableOpacity>
      <ActionSheet
        ref={actionSheetRef}
        // title={'Which one do you like ?'}
        options={['Gallery', 'Camera', 'cancel']}
        cancelButtonIndex={2}
        destructiveButtonIndex={1}
        onPress={i => {
          handlePress(i);
        }}
      />
      <View style={{marginLeft: 10, marginTop: 20, flexDirection: 'row'}}>
        {images.map(data => (
          <View style={{height: 100, width: 100, marginLeft: 10}}>
            <Image
              source={{uri: data.path}}
              style={{height: 100, width: 100}}
              imageStyle={{borderRadius: 5}}></Image>
          </View>
        ))}
      </View>
    </View>
  );
};

export default History;

import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import BaseColor from '../../Config/colors';
import {FontFamily} from '../../Config/typography';

const CInput = props => {
  const {
    searchBar = false,
    mainContainerStyle = {},
    onChange = () => {},
    value = '',
    placeholder = '',
    inputStyle = {},
  } = props;

  return (
    <View style={[mainContainerStyle]}>
      {searchBar ? (
        <View style={styles.searchBarContainer}>
          <View style={styles.searchIconContainer}>
            <Feather
              name="search"
              style={{color: BaseColor.primary, fontSize: 18}}
            />
          </View>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={BaseColor.textGray}
            value={value}
            style={[
              inputStyle,
              {
                fontFamily: FontFamily.medium,
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              },
            ]}
            onChangeText={e => {
              onChange(e);
            }}></TextInput>
        </View>
      ) : null}
    </View>
  );
};

export default CInput;

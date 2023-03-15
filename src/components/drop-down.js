import {Colors} from '@app/constants';
import React, {useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';

// interface Props {
//   label: string;
//   data: Array<{label: string, value: string}>;
//   onSelect: (item: {label: string, value: string}) => void;
// }

const Dropdown = ({label, data, onSelect}) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = item => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={styles.dropdownText}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}>
          <View style={[styles.dropdown, {top: dropdownTop}]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}>
      <Text style={styles.buttonText}>Year</Text>
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(!!selected && selected.label) || label}
      </Text>
      <Icon
        style={styles.icon}
        type="font-awesome"
        name="chevron-down"
        color="#fff"
        size={15}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.Orange,
    height: 35,
    width: 110,
    borderRadius: 10,

    zIndex: 1,
    position: 'absolute',
    right: 0,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    color: Colors.White,
    fontWeight: 'bold',
    fontSize: 12,
  },
  icon: {
    marginRight: 10,
    color: Colors.White,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: Colors.Orange,
    color: Colors.White,
    width: '28%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
    right: 15,
    marginTop: -30,
  },
  dropdownText: {
    color: Colors.White,
    fontWeight: 'bold',
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
});

export {Dropdown};

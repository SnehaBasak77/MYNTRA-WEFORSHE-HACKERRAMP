import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, StatusBar } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.navBar}>
        <Text style={styles.navBarText}>fwd</Text>
        <View style={styles.navIcons}>
          <View style={styles.iconPlaceholder}></View>
          <View style={styles.iconPlaceholder}></View>
        </View>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for brands and products"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Choose Option</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bannerPlaceholder}>
        <Text style={styles.bannerText}>Banner Image</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Draw and search the product</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Style for the Day</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#E91E63',
  },
  navBarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  navIcons: {
    flexDirection: 'row',
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginLeft: 15,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  searchBar: {
    flex: 1,
    height: 40,
    paddingHorizontal: 15,
  },
  searchButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#8E24AA',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonText: {
    color: '#fff',
  },
  bannerPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#FFC107',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  modalButton: {
    backgroundColor: '#8E24AA',
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
  },
  closeButton: {
    backgroundColor: '#E91E63',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
  },
});

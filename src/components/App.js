import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { searchPlaces } from './actions/placeActions'; // Update the path accordingly

const App = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.place.places);
  const loading = useSelector((state) => state.place.loading);

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    dispatch(searchPlaces(query));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a place..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={places}
          keyExtractor={(item) => item.place_id}
          renderItem={({ item }) => (
            <View style={styles.resultItem}>
              <Text>{item.description}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;

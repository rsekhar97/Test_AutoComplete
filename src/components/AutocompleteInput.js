import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { List, ListItem } from '@ant-design/react-native';
import { useDispatch, useSelector } from 'react-redux';
import { searchPlaces } from '../actions/placeActions';

const AutocompleteInput = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.place.places);

  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.trim() !== '') {
      dispatch(searchPlaces(query));
    }
  }, [query, dispatch]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a place..."
        value={query}
        onChangeText={setQuery}
      />
      {places.length > 0 && (
        <List style={styles.autocompleteList}>
          <FlatList
            data={places}
            keyExtractor={(item) => item.place_id}
            renderItem={({ item }) => (
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.description}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )}
          />
        </List>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  autocompleteList: {
    marginTop: 10,
  },
});

export default AutocompleteInput;

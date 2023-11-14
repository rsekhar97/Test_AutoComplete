import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text } from '@ant-design/react-native';
import { useDispatch, useSelector } from 'react-redux';
import { searchPlaces } from '../actions/placeActions';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.place.places);
  const loading = useSelector((state) => state.place.loading);

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    dispatch(searchPlaces(query));
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
        placeholder="Search for a place..."
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <Button type="primary" onPress={handleSearch}>Search</Button>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={places}
          keyExtractor={(item) => item.place_id}
          renderItem={({ item }) => (
            <Text>{item.description}</Text>
          )}
        />
      )}
    </View>
  );
};

export default SearchScreen;

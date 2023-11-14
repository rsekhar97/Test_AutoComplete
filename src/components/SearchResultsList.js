import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { List } from '@ant-design/react-native';
import { useSelector } from 'react-redux';

const SearchResultsList = () => {
  const places = useSelector((state) => state.place.places);

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Search Results
      </Text>

      <List>
        <FlatList
          data={places}
          keyExtractor={(item) => item.place_id}
          renderItem={({ item }) => (
            <List.Item>
              <Text>{item.description}</Text>
            </List.Item>
          )}
        />
      </List>
    </View>
  );
};

export default SearchResultsList;

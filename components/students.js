import React from 'react';
import {FlatList, Text} from 'react-native'

function StudentsList(props) {
    const list = [
        {
            key: '1',
            name: 'Marco',
            lastName: 'Marca'
        },
        {
            key: '2',
            name: 'Eber',
            lastName: 'Kachi'
        },
        {
            key: '3',
            name: 'Maeba',
            lastName: 'Fernandez'
        },
        {
            key: '4',
            name: 'Ariel',
            lastName: 'Vargas'
        },
        {
            key: '5',
            name: 'Erick',
            lastName: 'Terrazas'
        },
    ];
    return (
      <FlatList
          data = {list}
          renderItem = {
              ({item}) => <Text style={{fontSize: 20}}>{item.name} {item.key} {item.lastName}</Text>
          }
      />
    );
}
export default StudentsList;

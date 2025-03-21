import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { event } from '../../../lib/dommyData'
import EventTile from '../event.tile'

export default function Events() {
  return (
    <FlatList
			data={event}
			keyExtractor={(item) => item.eventId}
			showsVerticalScrollIndicator={false}
      ListEmptyComponent={<View>No data found</View>}
			renderItem={({item}) => (
				<View style={{marginBottom: 20}}>
					<EventTile item={item} />
				</View>
			)}
		/>
  )
}
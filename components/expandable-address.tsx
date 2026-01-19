import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ExpandableAddress = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <Text
        numberOfLines={expanded ? undefined : 2}
        style={styles.cardSubtitle}
      >
        {text}
      </Text>

      {/* <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={styles.readMore}>
          {expanded ? 'See less' : 'Read more'}
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cardSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 14,
  },

  readMore: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
    color: '#E76F51',
  },
})
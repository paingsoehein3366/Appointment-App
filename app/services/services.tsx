import { Header } from '@/components';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Service = {
  id: string;
  title: string;
  category: 'all' | 'massage' | 'facial' | 'hair' | 'nails';
  description: string;
  duration: string;
  price: string;
  rating: number;
  image: any; // Could be require() or URL
  featured?: boolean;
};

const allServices: Service[] = [
  {
    id: '1',
    title: 'Traditional Massage',
    category: 'massage',
    description: 'Ancient healing techniques using pressure points and stretching.',
    duration: '60 min',
    price: '25,000 Ks',
    rating: 4.8,
    image: require('@/assets/images/favicon.png'), // Replace with actual image
    featured: true,
  },
  {
    id: '2',
    title: 'Thanaka Facial',
    category: 'facial',
    description: 'Natural cooling facial using traditional Thanaka bark paste.',
    duration: '45 min',
    price: '18,000 Ks',
    rating: 4.5,
    image: require('@/assets/images/favicon.png'),
  },
  {
    id: '3',
    title: 'Hair Treatment',
    category: 'hair',
    description: 'Deep conditioning with coconut oil and herbal steam.',
    duration: '90 min',
    price: '35,000 Ks',
    rating: 4.7,
    image: require('@/assets/images/favicon.png'),
  },
  {
    id: '4',
    title: 'Nail Art & Spa',
    category: 'nails',
    description: 'Manicure and pedicure with custom art designs.',
    duration: '60 min',
    price: '20,000 Ks',
    rating: 4.6,
    image: require('@/assets/images/favicon.png'),
  },
  {
    id: '5',
    title: 'Aromatherapy',
    category: 'massage',
    description: 'Relaxing massage with essential oils of jasmine and lemongrass.',
    duration: '60 min',
    price: '30,000 Ks',
    rating: 4.9,
    image: require('@/assets/images/favicon.png'),
  },
  {
    id: '6',
    title: 'Hot Stone Therapy',
    category: 'massage',
    description: 'Warm stones to relieve muscle tension and improve circulation.',
    duration: '75 min',
    price: '40,000 Ks',
    rating: 4.8,
    image: require('@/assets/images/favicon.png'),
  },
  {
    id: '7',
    title: 'Herbal Facial',
    category: 'facial',
    description: 'Organic herbs and natural ingredients for glowing skin.',
    duration: '50 min',
    price: '22,000 Ks',
    rating: 4.4,
    image: require('@/assets/images/favicon.png'),
  },
  {
    id: '8',
    title: 'Scalp Treatment',
    category: 'hair',
    description: 'Nourishing treatment for dry scalp and hair fall prevention.',
    duration: '60 min',
    price: '28,000 Ks',
    rating: 4.6,
    image: require('@/assets/images/favicon.png'),
  },
];

type Category = {
  id: 'all' | 'massage' | 'facial' | 'hair' | 'nails';
  label: string;
};

const categories: Category[] = [
  { id: 'all', label: 'All' },
  { id: 'massage', label: 'Massage' },
  { id: 'facial', label: 'Facial' },
  { id: 'hair', label: 'Hair' },
  { id: 'nails', label: 'Nails' },
];

export default function ServicesScreen() {
  const [selectedCategory, setSelectedCategory] = useState<Category['id']>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderCategoryButton = ({ item }: { item: Category }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === item.id && styles.categoryButtonActive,
      ]}
      onPress={() => setSelectedCategory(item.id)}
    >
      <Text
        style={[
          styles.categoryButtonText,
          selectedCategory === item.id && styles.categoryButtonTextActive,
        ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  const renderServiceItem = ({ item }: { item: Service }) => (
    <View style={styles.serviceCard}>
      <View style={styles.serviceImageContainer}>
        <Image source={item.image} style={styles.serviceImage} />
        {item.featured && (
          <View style={styles.featuredBadge}>
            <Text style={styles.featuredText}>Featured</Text>
          </View>
        )}
        <View style={styles.ratingBadge}>
          <Ionicons name="star" size={12} color="#FACC15" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>

      <View style={styles.serviceContent}>
        <View style={styles.serviceHeader}>
          <Text style={styles.serviceTitle}>{item.title}</Text>
          <TouchableOpacity style={styles.favoriteButton}>
            <Ionicons name="heart-outline" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        <Text style={styles.serviceDescription} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.serviceFooter}>
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Ionicons name="time-outline" size={16} color="#6B7280" />
              <Text style={styles.detailText}>{item.duration}</Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="pricetag-outline" size={16} color="#6B7280" />
              <Text style={styles.detailText}>{item.price}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header title='Our Services' onPressFilter={() => console.log('click')} onGoBack={()=> router.replace('/(tabs)/home')}/>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search treatments..."
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          )}
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={renderCategoryButton}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Services Count */}
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsText}>
            {filteredServices.length} services found
          </Text>
          <TouchableOpacity>
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>

        {/* Services List */}
        <View style={styles.servicesList}>
          {filteredServices.map((service) => (
            <Pressable key={service.id} style={styles.serviceItem}>
              {renderServiceItem({ item: service })}
            </Pressable>
          ))}
        </View>

        {/* Featured Section */}
        {selectedCategory === 'all' && (
          <View style={styles.featuredSection}>
            <Text style={styles.featuredTitle}>Featured This Month</Text>
            <View style={styles.featuredCard}>
              <Image
                source={require('@/assets/images/favicon.png')}
                style={styles.featuredImage}
              />
              <View style={styles.featuredContent}>
                <Text style={styles.featuredCardTitle}>Traditional Massage</Text>
                <Text style={styles.featuredCardDescription}>
                  Special offer: Book 2 sessions and get 1 free!
                </Text>
                <TouchableOpacity style={styles.featuredButton}>
                  <Text style={styles.featuredButtonText}>Learn More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 16,
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
  },
  categoriesContainer: {
    marginBottom: 16,
  },
  categoriesList: {
    paddingHorizontal: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  categoryButtonActive: {
    backgroundColor: '#4F7C5C',
    borderColor: '#4F7C5C',
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  categoryButtonTextActive: {
    color: '#fff',
  },
  resultsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  resultsText: {
    fontSize: 14,
    color: '#6B7280',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E76F51',
  },
  servicesList: {
    paddingHorizontal: 20,
    gap: 16,
    marginBottom: 24,
  },
  serviceItem: {
    marginBottom: 4,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  serviceImageContainer: {
    position: 'relative',
    height: 180,
  },
  serviceImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  featuredBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#E76F51',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  featuredText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  ratingBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  serviceContent: {
    padding: 16,
  },
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3B1F14',
    flex: 1,
  },
  favoriteButton: {
    padding: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  serviceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  detailText: {
    fontSize: 14,
    color: '#6B7280',
  },
  bookButton: {
    backgroundColor: '#4F7C5C',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  featuredSection: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3B1F14',
    marginBottom: 16,
  },
  featuredCard: {
    backgroundColor: '#FEF3C7',
    borderRadius: 16,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  featuredContent: {
    padding: 16,
  },
  featuredCardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3B1F14',
    marginBottom: 8,
  },
  featuredCardDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    lineHeight: 20,
  },
  featuredButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#3B1F14',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  featuredButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
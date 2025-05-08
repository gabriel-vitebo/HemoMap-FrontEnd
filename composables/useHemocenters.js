import { ref } from 'vue';

// Mock data for hemocenters
const mockHemocenters = [
  {
    id: 'hc1',
    name: 'City Central Blood Bank',
    address: '123 Main Street, Metropolis, CA 90210',
    hours: 'Mon-Fri: 9 AM - 5 PM, Sat: 10 AM - 2 PM',
    contact: '(555) 123-4567',
    latLng: [34.0522, -118.2437], // Los Angeles (example)
  },
  {
    id: 'hc2',
    name: 'Community Blood Center - Northside',
    address: '456 Oak Avenue, Gotham, NJ 07001',
    hours: 'Tue-Sat: 8 AM - 4 PM',
    contact: '(555) 987-6543',
    latLng: [40.7128, -74.0060], // New York (example)
  },
  {
    id: 'hc3',
    name: 'Regional Donation Hub',
    address: '789 Pine Road, Star City, TX 75001',
    hours: 'Mon-Thu: 10 AM - 6 PM, Sun: 12 PM - 4 PM',
    contact: '(555) 246-8135',
    latLng: [32.7767, -96.7970], // Dallas (example)
  },
  {
    id: 'hc4',
    name: 'Riverside Blood Services',
    address: '101 River Bend, Central City, FL 33001',
    hours: 'Wed-Sun: 11 AM - 7 PM',
    contact: '(555) 369-2581',
    latLng: [25.7617, -80.1918], // Miami (example)
  },
  {
    id: 'hc5',
    name: 'Peking Union Medical College Hospital Blood Center',
    address: 'No.1 Shuaifuyuan, Dongcheng District, Beijing, China',
    hours: 'Mon-Fri: 8 AM - 5 PM',
    contact: '+86-10-6915-6114',
    latLng: [39.9161, 116.4220], // Beijing near default map center
  },
  {
    id: 'hc6',
    name: 'Shanghai Blood Center',
    address: 'No. 1191 Hongqiao Road, Changning District, Shanghai, China',
    hours: 'Mon-Sun: 8 AM - 4:30 PM',
    contact: '+86-21-6275-8257',
    latLng: [31.1970, 121.4220], // Shanghai
  }
];

export function useHemocenters() {
  const hemocenters = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchHemocenters = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // In a real application, you would make an API call here.
      // If userLocation is provided, you might pass it to the API 
      // to get centers sorted by proximity or within a certain radius.
      // For now, we just return the mock data.
      hemocenters.value = mockHemocenters;

    } catch (e) {
      error.value = e.message || 'Failed to fetch hemocenters';
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    hemocenters,
    isLoading,
    error,
    fetchHemocenters,
  };
}


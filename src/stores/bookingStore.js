import { defineStore } from 'pinia'

import hairWrapsIcon from '@/assets/booking/hairwraps.svg'
import hairWrapsImage from '@/assets/booking/hairwrapphoto.jpg'
import hairTinselIcon from '@/assets/booking/hairtinsel.svg'
import hairTinselImage from '@/assets/booking/hairtinselphoto.jpg'
import yarnBraidsIcon from '@/assets/booking/yarnbraid.svg'
import yarnBraidsImage from '@/assets/booking/yarnbraidphoto.jpg'
import mobileServiceIcon from '@/assets/booking/mobileservice.svg'
import mobileServiceImage from '@/assets/booking/mobileservicephoto.jpg'
import todaysBookingIcon from '@/assets/booking/todayslocation.svg'
import todaysBookingImage from '@/assets/booking/todayslocationphoto.jpg'
import eventBookingIcon from '@/assets/booking/event.svg'
import eventBookingImage from '@/assets/booking/eventbookingphoto.jpg'

export const useBookingStore = defineStore('booking', {
  state: () => ({
    bookingCategories: {
      hairWraps: {
        title: 'Hair Wraps',
        flashText: 'Versatile and Stylish!',
        expandedTitle: 'Hair Wraps',
        expandedSubtitle: 'Buy three get one free!',
        icon: hairWrapsIcon,
        cardImage: hairWrapsImage,
        description: `We wrap your hair like never before! Our hair wraps are designed to keep you cool and stylish during your beach adventures. Whether you're lounging by the pool or dancing under the stars, our wraps will add a touch of flair to your look. Choose from a variety of colors and patterns to match your vibe!`,
      },
      hairTinsel: {
        title: 'Hair Tinsel',
        flashText: 'Elegant and Unique!',
        expandedTitle: 'Hair Tinsel',
        expandedSubtitle: 'Plan for 45 minutes per strand!',
        icon: hairTinselIcon,
        cardImage: hairTinselImage,
        description: `Add a touch of sparkle to your hair with our hair tinsel! Perfect for festivals, parties, or just because you want to shine. Our tinsel comes in a variety of colors and lengths, allowing you to customize your look. Whether you want a subtle shimmer or a bold statement, our hair tinsel will make you stand out in the crowd!`,
      },
      yarnBraids: {
        title: 'Yarn Braids',
        flashText: 'Sophisticated and Fun!',
        expandedTitle: 'Yarn Braids',
        expandedSubtitle: 'Plan for 1-2 hours depending on length and thickness!',
        icon: yarnBraidsIcon,
        cardImage: yarnBraidsImage,
        description: `Experience the perfect blend of sophistication and fun with our yarn braids! These braids are not only stylish but also a great way to protect your natural hair. Our yarn comes in a variety of vibrant colors, allowing you to express your personality and creativity. Whether you're heading to a festival or just want to switch up your look, our yarn braids will keep you looking fabulous!`,
      },
      mobileService: {
        title: 'Mobile Service',
        flashText: 'We come to you!',
        expandedTitle: 'Mobile Service',
        expandedSubtitle: 'Keep the party going at your location!',
        icon: mobileServiceIcon,
        cardImage: mobileServiceImage,
        description: `Can't make it to us? No problem! Our mobile service brings the salon experience to you. Whether you're hosting a beach party, a festival gathering, or just want to get glammed up at home, our team will come to your location and provide the same high-quality hair services. Enjoy the convenience of having your hair styled without leaving your comfort zone!`,
      },
      todaysBooking: {
        title: `Book At Today's Location`,
        flashText: 'Every Day Is New!',
        expandedTitle: 'Come Party With Us!',
        expandedSubtitle: 'Check back daily for new locations and services!',
        icon: todaysBookingIcon,
        cardImage: todaysBookingImage,
        description: `Every day is a new adventure with our daily booking option! Check back each day to discover new locations and services that we offer. Whether we're setting up shop at a local beach, a trendy festival, or a hidden gem in the city, you never know where we'll be next. Stay tuned and be ready to join us for an unforgettable experience wherever we go!`,
      },
      eventBooking: {
        title: 'Event Booking',
        flashText: 'Bedazzle On Your Terms!',
        expandedTitle: 'Event Booking',
        expandedSubtitle: 'Customize your event with our hair services!',
        icon: eventBookingIcon,
        cardImage: eventBookingImage,
        description: `Make your event unforgettable with our custom hair services! Whether it's a wedding, corporate event, or private party, we have the perfect look for you. Our talented stylists will work with you to create a hairstyle that complements your vision and makes you feel confident and beautiful!`,
      },
    },
  }),

  getters: {},

  actions: {},
})

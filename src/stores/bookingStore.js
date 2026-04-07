import { defineStore } from 'pinia'

import hairWrapsIcon from '@/assets/booking/hairwraps.svg'
import hairWrapsImage from '@/assets/booking/hairwrapphoto.jpg'

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
        title: 'Hair Wraps',
        flashText: 'Versatile and Stylish!',
        expandedTitle: 'Hair Wraps',
        expandedSubtitle: 'Buy three get one free!',
        icon: hairWrapsIcon,
        cardImage: hairWrapsImage,
        description: `We wrap your hair like never before! Our hair wraps are designed to keep you cool and stylish during your beach adventures. Whether you're lounging by the pool or dancing under the stars, our wraps will add a touch of flair to your look. Choose from a variety of colors and patterns to match your vibe!`,
      },
      yarnBraids: {
        title: 'Hair Wraps',
        flashText: 'Versatile and Stylish!',
        expandedTitle: 'Hair Wraps',
        expandedSubtitle: 'Buy three get one free!',
        icon: hairWrapsIcon,
        cardImage: hairWrapsImage,
        description: `We wrap your hair like never before! Our hair wraps are designed to keep you cool and stylish during your beach adventures. Whether you're lounging by the pool or dancing under the stars, our wraps will add a touch of flair to your look. Choose from a variety of colors and patterns to match your vibe!`,
      },
      mobileService: {
        title: 'Hair Wraps',
        flashText: 'Versatile and Stylish!',
        expandedTitle: 'Hair Wraps',
        expandedSubtitle: 'Buy three get one free!',
        icon: hairWrapsIcon,
        cardImage: hairWrapsImage,
        description: `We wrap your hair like never before! Our hair wraps are designed to keep you cool and stylish during your beach adventures. Whether you're lounging by the pool or dancing under the stars, our wraps will add a touch of flair to your look. Choose from a variety of colors and patterns to match your vibe!`,
      },
      todaysBooking: {
        title: 'Hair Wraps',
        flashText: 'Versatile and Stylish!',
        expandedTitle: 'Hair Wraps',
        expandedSubtitle: 'Buy three get one free!',
        icon: hairWrapsIcon,
        cardImage: hairWrapsImage,
        description: `We wrap your hair like never before! Our hair wraps are designed to keep you cool and stylish during your beach adventures. Whether you're lounging by the pool or dancing under the stars, our wraps will add a touch of flair to your look. Choose from a variety of colors and patterns to match your vibe!`,
      },
      eventBooking: {
        title: 'Hair Wraps',
        flashText: 'Versatile and Stylish!',
        expandedTitle: 'Hair Wraps',
        expandedSubtitle: 'Buy three get one free!',
        icon: hairWrapsIcon,
        cardImage: hairWrapsImage,
        description: `We wrap your hair like never before! Our hair wraps are designed to keep you cool and stylish during your beach adventures. Whether you're lounging by the pool or dancing under the stars, our wraps will add a touch of flair to your look. Choose from a variety of colors and patterns to match your vibe!`,
      },
    },
  }),

  getters: {},

  actions: {},
})

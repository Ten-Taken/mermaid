// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBookingStore = defineStore('booking', {
  state: () => ({
    bookingCategories: {
      hairWraps: {
        title: 'Hair Wraps',
        flashText: 'Versatile and Stylish!',
        expandedTitle: 'Hair Wraps',
        expandedSubtitle: 'Buy three get one free!',
        icon: '@/assets/booking/hairwraps.svg',
        cardImage: '@/assets/booking/hairwrapphoto.jpg',
        description: `We wrap your hair like never before! Our hair wraps are designed to keep you cool and stylish during your beach adventures. Whether you're lounging by the pool or dancing under the stars, our wraps will add a touch of flair to your look. Choose from a variety of colors and patterns to match your vibe!`,
      },
    },
  }),

  getters: {
    // isReadyToSubmit: (state) => {
    //   return !!state.selectedService && !!state.selectedDate && !!state.selectedTime
    // },
  },

  actions: {
    // setService(service) {
    //   this.selectedService = service
    // },
  },
})

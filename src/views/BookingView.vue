<script setup>
import { useBookingStore } from '@/stores/bookingStore'
import BookingProdAccordion from '@/components/BookingProdAccordion.vue'

const bookingStore = useBookingStore()
</script>

<template>
  <div>
    <booking-prod-accordion
      v-for="category in bookingStore.bookingCategories"
      :key="category.id"
      :title="category.title"
      :flash-text="category.flashText"
      :expanded-title="category.expandedTitle"
      :expanded-subtitle="category.expandedSubtitle"
      :icon="category.icon"
      :card-image="category.cardImage"
      :description="category.description"
    />
  </div>
</template>

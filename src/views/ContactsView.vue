<script setup>
import ContactsMapSection from '@/components/contacts/ContactsMapSection.vue'
import ContactsBannerSection from '@/components/contacts/ContactsBannerSection.vue'
import ContactsLinksSection from '@/components/contacts/ContactsLinksSection.vue'
import ContactsHoursSection from '@/components/contacts/ContactsHoursSection.vue'
</script>

<template>
  <section class="contacts">
    <ContactsBannerSection />
    <div class="contacts-content--container mb-12 px-4 md:px-24">
      <ContactsLinksSection />
      <ContactsHoursSection />
      <ContactsMapSection />
    </div>
  </section>
</template>

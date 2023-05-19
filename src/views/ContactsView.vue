<script setup>
import ContactsMap from '@/components/contacts/ContactsMap.vue'
import ContactsBanner from '@/components/contacts/ContactsBanner.vue'
import ContactsLinks from '@/components/contacts/ContactsLinks.vue'
import ContactsHours from '@/components/contacts/ContactsHours.vue'
</script>

<template>
  <section class="contacts">
    <ContactsBanner />
    <div class="contacts-content--container mb-12 px-4 md:px-24">
      <ContactsLinks />
      <ContactsHours />
      <ContactsMap />
    </div>
  </section>
</template>

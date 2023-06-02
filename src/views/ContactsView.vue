<script setup>
import ContactsMapSection from '@/components/contacts/ContactsMapSection.vue'
import ContactsBannerSection from '@/components/contacts/ContactsBannerSection.vue'
import ContactsLinksSection from '@/components/contacts/ContactsLinksSection.vue'
import ContactsHoursSection from '@/components/contacts/ContactsHoursSection.vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useContactsPageStore } from '@/stores/ContactsPageStore.js'
import { useTopLevelStore } from '@/stores/TopLevelStore.js'

const topLevelStore = useTopLevelStore()
const selectedLanguage = computed(() => topLevelStore.selectedLanguage)
const contactsPageStore = useContactsPageStore()
const route = useRoute()
const router = useRouter()
try {
  await contactsPageStore.getContactsPageData(route.query.preview, selectedLanguage.value)
} catch {
  router.push('/badCall')
}
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

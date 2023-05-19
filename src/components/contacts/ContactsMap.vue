<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useGeolocation } from '@/composables/useGeolocation.js'
import { Loader } from '@googlemaps/js-api-loader'
import { useTopLevelStore } from '@/stores/TopLevelStore.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const mapSectionLoad = () => {
  const mapSectionLoadTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: `#contactsMap`,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  })
  mapSectionLoadTimeline.fromTo(
    `#contactsMap`,
    { y: 50, opacity: 0 },
    { opacity: 1, y: 0, duration: 1 }
  )
}

const topLevelStore = useTopLevelStore()
const address = ref('')
const GOOGLE_MAPS_API_KEY = 'AIzaSyCaZKgq34nUoDPPCROStj0maU2lwQAVlto'
const { coordinates } = useGeolocation()
const currentPosition = computed(() => ({
  lat: coordinates.value.latitude,
  lng: coordinates.value.longitude
}))

const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY, libraries: ['places'] })
const mapContainer = ref(null)
const businessPosition = { lat: 56.925451, lng: 24.168534 }

onMounted(async () => {
  mapSectionLoad()

  const toggleMarkerBounce = () =>
    contactMapMarker.getAnimation() !== null
      ? contactMapMarker.setAnimation(null)
      : contactMapMarker.setAnimation(google.maps.Animation.BOUNCE)

  await loader.load()
  const contactsMap = new google.maps.Map(mapContainer.value, {
    center: businessPosition,
    zoom: 15,
    minZoom: 9,
    fullscreenControl: false,
    mapTypeControl: false,
    mapTypeId: 'hybrid'
  })

  const contactMapMarker = new google.maps.Marker({
    position: businessPosition,
    map: contactsMap,
    animation: google.maps.Animation.DROP,
    icon: `${topLevelStore.favicon}?width=32&height=32`
  })

  contactMapMarker.addListener('mouseover', toggleMarkerBounce)
  contactMapMarker.addListener('mouseout', toggleMarkerBounce)

  const service = await new google.maps.places.PlacesService(contactsMap)

  const request = {
    placeId: 'ChIJXQjBgPzR7kYRaO_gexx9WW0',
    fields: ['name', 'formatted_address', 'opening_hours', 'geometry']
  }

  service.getDetails(request, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && place) {
      address.value = place.formatted_address
    }
    if (place.opening_hours && place.utc_offset_minutes) {
    }
  })
})

onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>

<template>
  <section id="contactsMap" class="contact-content__map relative h-auto w-auto">
    <div class="absolute map-overlay z-20">
      <!-- <p class="">{{ address }}</p> -->
    </div>
    <div
      class="max-w-[700px] h-96 border-[1px] border-main-blue/25 rounded-lg mx-auto"
      ref="mapContainer"
    />
  </section>
</template>

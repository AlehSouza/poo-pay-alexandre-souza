<template>
  <div>
    <BannerComponent/>
    <ApresentationComponent/>
  </div>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
import ApresentationComponent from '@/components/ApresentationComponent.vue';

export default {
  name: 'HomeView',

  components: {
    BannerComponent,
    ApresentationComponent,
  },
};
</script>

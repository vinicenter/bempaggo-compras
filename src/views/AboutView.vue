<script setup>
import Title from '@/components/core/Title.vue';
import Text from '@/components/core/Text.vue';
import AboutAccordion from '@/components/composition/AboutAccordion.vue';

import messages from '@/data/messages.json'
</script>

<script>

export default {
  components: { Title, Text, AboutAccordion }  
}
</script>

<template>
  <div>
    <Title type="h1">{{ messages.views.about.title }}</Title>
    <hr />
    <AboutAccordion />
  </div>
</template>
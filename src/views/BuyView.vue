<script setup>
import Title from '@/components/core/Title.vue';
import Text from '@/components/core/Text.vue';
import BuySticker from '@/components/composition/BuySticker.vue';

import messages from '@/data/messages.json'
</script>

<script>

export default {
  components: { Title, Text, BuySticker }  
}
</script>

<template>
  <div>
    <Title type="h1">{{ messages.views.buy.title }}</Title>
    <Text>{{ messages.views.buy.description }}</Text>
    <hr />
    <BuySticker />
  </div>
</template>

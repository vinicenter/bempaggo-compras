<script setup>
import Img from "@/components/core/Img.vue";
</script>

<script>
export default {
  props: {
    imgUrl: {
      type: String
    },
    imgAlt: {
      type: String
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    maxDescription: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      descriptionProcessed: {
        type: String
      }
    };
  },
  created() {
    if (this.description != null) {
      if (this.description.length > parseInt(this.maxDescription)) {
        this.descriptionProcessed = this.description.substring(0, parseInt(this.maxDescription)) + "...";
      }
      else {
        this.descriptionProcessed = this.description;
      }
    }
  },
  components: { Img }
}
</script>

<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card bg-white">
      <Img class="img-card" :alt="imgAlt" :src="imgUrl"></Img>
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">{{descriptionProcessed}}</p>
        <p class="card-text">
          <slot name="body" v-if="title != ''"></slot>
        </p>
      </div>
      <div class="card-footer">
        <slot name="footer" v-if="title != ''"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  margin-bottom: 16px;
  min-height: 500px;
}

.img-card {
  padding: 40px
}
</style>
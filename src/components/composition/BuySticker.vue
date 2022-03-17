<script setup>
import Text from '@/components/core/Text.vue';
import Textarea from '@/components/core/Textarea.vue';
import Card from '@/components/core/Card.vue';
import Button from '@/components/core/Button.vue'
import Input from '@/components/core/Input.vue';
import Title from '@/components/core/Title.vue';

import Products from '@/data/products.json'
import messages from '@/data/messages.json'
</script>

<script>
export default {
  data() {
    return {
      obs: "",
      tableHeaders: [
        "Produto", "Preço", "Ações"
      ],
      tableProducts: []
    }
  },
  computed: {
    totalPrice: function() {
      var total = 0;
      this.tableProducts.forEach(product => total += product.price);
      return parseFloat(total.toFixed(2));
    },
    totalQuantity: function() {
      return this.tableProducts.length;
    }
  },
  methods: {
    addProduct(id) {
      Products.forEach(product => {
        if(product.id == id) {
          var item = {
            "id": product.id,
            "name": product.name,
            "price": product.price
          }
          this.tableProducts.push(item);
        }
      });
    },
    delProduct(index) {
      this.tableProducts.splice(index, 1);
    },
    checkout() {
      if(this.tableProducts.length) {
        var data = {
          "products": this.tableProducts,
          "obs": this.obs
        }
        console.log("SEND TO API: " + data);
        alert("Checkout não desenvolvido.");
      } else {
        alert(messages.components.BuySticker.addSomeItem)
      }
    }
  },
  components: { Text, Textarea, Card, Button, Input, Title }
}
</script>

<template>
  <div class="buy-container">

    <div class="cards">
      <Text>{{ messages.components.BuySticker.description }}</Text>
      <div class="row">
        <Card v-for="product in Products" :key="product" :description="product.description" :title="product.name" :imgAlt="product.imgAlt" :imgUrl="product.imgUrl">
          <template v-slot:body>
            <Title type="h3">{{ messages.components.BuySticker.currencySymbol }} {{product.price}}</Title>
          </template>
          <template v-slot:footer>
            <Button tabindex="1" :type="'link'" @click="addProduct(product.id)">{{ messages.components.BuySticker.add }}</Button>
          </template>
        </Card>
      </div>
    </div>

    <div class="table">
      <Text>{{ messages.components.BuySticker.buyInfo }}</Text>
      <table class="table">
        <thead v-if="tableProducts.length">
          <tr>
            <th v-for="header in tableHeaders" :key="header" scope="col">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in tableProducts" :key="product">
            <td>{{ product.name }}</td>
            <td>R$ {{ product.price }}</td>
            <td><Button @click="delProduct(index)" :size="'btn-sm'" :style="'danger'">{{ messages.components.BuySticker.del }}</Button></td>
          </tr>
          <tr v-if="!tableProducts.length">
            <td>{{ messages.components.BuySticker.itemArrayEmpty }}</td>
          </tr>
          <tr v-else>
            <span class="badge rounded-pill bg-success">{{ messages.components.BuySticker.currencySymbol }} {{ totalPrice }}</span>
            <span class="badge rounded-pill bg-success">{{ messages.components.BuySticker.volume }} {{ totalQuantity }}</span>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="obs">
      <Text>Observações</Text>
      <Textarea class="form-control" v-bind:value='obs' v-on:input='obs = $event.target.value' :placeholder="messages.components.BuySticker.placeholderObs" />
    </div>

    <div class="checkout">
      <Button class="btn-checkout" @click="checkout()" :type="'link'">
        {{ messages.components.BuySticker.goToCheckout }}
      </Button>
      <span class="badge rounded-pill bg-success">{{ messages.components.BuySticker.currencySymbol }} {{totalPrice}}</span>
    </div>

  </div>
</template>

<style lang="scss" scoped>

.buy-container {
  padding: 12px;
}

.btn-checkout {
  margin: 12px;
}

.badge {
  margin: 12px;
}
</style>
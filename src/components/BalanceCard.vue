<template>
    <section class="card balance">
        <h2>Balance</h2>
        <p class="amount">{{ formattedBalance }}</p>
    </section>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    balance: {
        type: Object,
        required: true,
    },
});

const formattedBalance = computed(() => {
    return props.balance.amount.toLocaleString("pl-PL", {
        style: "currency",
        currency: props.balance.currency,
    });
});
</script>

<style scoped>
.balance .amount {
    font-size: 2rem;
    font-weight: 700;
    color: #2e7d32;
}
</style>
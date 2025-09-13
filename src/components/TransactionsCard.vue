<template>
    <section class="card transactions">
        <h2>Recent transactions</h2>
        <ul>
            <li v-for="t in transactions" :key="t.id" class="transaction">
                <div class="info">
                    <span class="desc">{{ t.description }}</span>
                    <span class="date">{{ t.date }}</span>
                </div>
                <div class="value" :class="{ negative: t.amount < 0, positive: t.amount > 0 }">
                    {{ formatCurrency(t.amount) }}
                </div>
            </li>
        </ul>
        <button class="more">View all</button>
    </section>
</template>

<script setup>
const props = defineProps({
    transactions: {
        type: Array,
        required: true,
    },
    currency: {
        type: String,
        default: "PLN",
    },
});

function formatCurrency(value) {
    return value.toLocaleString("pl-PL", {
        style: "currency",
        currency: props.currency,
    });
}
</script>

<style scoped>
.transactions ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.transaction {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid #eee;
}

.transaction:last-child {
    border-bottom: none;
}

.transaction .info {
    display: flex;
    flex-direction: column;
}

.transaction .desc {
    font-weight: 500;
}

.transaction .date {
    font-size: 0.8rem;
    color: #888;
}

.transaction .value {
    font-weight: 600;
}

.transaction .value.negative {
    color: #d32f2f;
}

.transaction .value.positive {
    color: #2e7d32;
}

.more {
    margin-top: 1rem;
    background: none;
    border: none;
    color: #1976d2;
    font-weight: 500;
    cursor: pointer;
}
</style>
<template>
    <div v-if="isLoading" class="grid">
        <div class="card balance">
            <small style="color: grey;">Loading data ...</small>
        </div>
        <div class="card options">
            <small style="color: grey;">Loading data ...</small>
        </div>
        <div class="card transactions" style="height: 300px">
            <small style="color: grey;">Loading data ...</small>
        </div>
        <div class="card chart" style="height: 300px">
            <small style="color: grey;">Loading data ...</small>
        </div>
    </div>
    <div v-else-if="hasError">
        <p class="error">An error occurred while loading dahboard data</p>
    </div>
    <div v-else class="dashboard">
        <NavBar v-if="user" :name="user.name" :initials="user.initials" />

        <main class="content">
            <div class="grid">
                <BalanceCard v-if="balance" :balance="balance" class="balance" />
                <OptionsCard v-if="options" :options="options" class="options" />
                <TransactionsCard v-if="transactions" :transactions="transactions" :currency="balance.currency"
                    class="transactions" />

                <ChartCard class="" />
            </div>
        </main>
    </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import BalanceCard from "../components/BalanceCard.vue";
import TransactionsCard from "../components/TransactionsCard.vue";
import OptionsCard from "../components/OptionsCard.vue";
import ChartCard from "../components/ChartCard.vue";

defineProps({
    user: { type: Object, required: true },
    balance: { type: Object, required: true },
    transactions: { type: Array, required: true },
    options: { type: Array, required: true },
    isLoading: { type: Boolean, default: false },
    hasError: { type: Boolean, default: false },
});
</script>

<style scoped>
.dashboard {
    background: #f7f8fa;
    min-height: 100vh;
}

.content {
    max-width: 1000px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.card {
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px 4px rgba(0, 0, 0, 0.05);
}

.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 1.5rem;
}

.balance {
    grid-column: 1;
    grid-row: 1;
}

.transactions {
    grid-column: 2;
    grid-row: 1 / span 2;
}

.options {
    grid-column: 1;
    grid-row: 2;
}

.error {
    color: #ce0000;
    background-color: #ffefef;
    padding: 5%;
    border-radius: 20px;
    text-align: center;
}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }

    .balance,
    .transactions,
    .options,
    .chart {
        grid-column: 1 !important;
        grid-row: auto;
    }
}
</style>
<template>
    <div class="dashboard">
        <NavBar :name="user.name" :initials="user.initials" />

        <main class="content">
            <div class="grid">
                <BalanceCard :balance="balance" class="balance" />
                <OptionsCard :options="options" class="options" />
                <TransactionsCard :transactions="transactions" :currency="balance.currency" class="transactions" />

                <ChartCard class="" />
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import NavBar from "../components/NavBar.vue";
import BalanceCard from "../components/BalanceCard.vue";
import TransactionsCard from "../components/TransactionsCard.vue";
import OptionsCard from "../components/OptionsCard.vue";

import balanceData from "../data/balance.json";
import transactionsData from "../data/transactions.json";
import optionsData from "../data/options.json";
import userData from "../data/user.json";
import ChartCard from "../components/ChartCard.vue";

const balance = ref({ currency: "USD", amount: 0 });
const user = ref({ name: "", initials: "" });
const transactions = ref([]);
const options = ref([]);

onMounted(() => {
    balance.value = balanceData;
    transactions.value = transactionsData;
    options.value = optionsData;
    user.value = userData;
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
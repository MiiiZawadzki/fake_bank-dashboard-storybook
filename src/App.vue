<template>
  <DashboardView :user="userData" :balance="balanceData" :transactions="transactionsData" :options="optionsData" />
</template>

<script setup>
import DashboardView from "./views/DashboardView.vue";
import balanceData from "./data/balance.json";
import transactionsData from "./data/transactions.json";
import optionsData from "./data/options.json";
import userData from "./data/user.json";
</script>

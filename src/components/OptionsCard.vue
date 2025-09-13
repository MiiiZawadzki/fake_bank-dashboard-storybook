<template>
  <section class="card options">
    <h2>Quick actions</h2>
    <div class="options-grid">
      <button v-for="o in options" :key="o.id" class="option-btn">
        {{ o.name }}
      </button>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
}

.option-btn {
  background: #f0f4f8;
  border: none;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.option-btn:hover {
  background: #e3eaf2;
}
</style>
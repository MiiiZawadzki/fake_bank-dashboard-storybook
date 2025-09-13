<template>
  <div class="card">
    <svg :viewBox="`0 0 ${width} ${height}`" xmlns="http://www.w3.org/2000/svg">
      <text v-if="title" :x="width / 2" :y="margin / 2" text-anchor="middle" font-size="16" font-weight="bold"
        fill="#111827">
        {{ title }}
      </text>

      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#3b82f6" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#00000040" />
        </filter>
      </defs>

      <g class="grid">
        <g v-for="i in ySteps" :key="`grid-${i}`">
          <line :x1="margin" :y1="height - margin - i * gridStep" :x2="width - margin"
            :y2="height - margin - i * gridStep" stroke="#e5e7eb" stroke-dasharray="4" />
        </g>
      </g>

      <line :x1="margin" :y1="height - margin" :x2="width - margin" :y2="height - margin" stroke="#9ca3af" />
      <line :x1="margin" :y1="margin" :x2="margin" :y2="height - margin" stroke="#9ca3af" />

      <polyline :points="linePoints" fill="none" stroke="url(#lineGradient)" stroke-width="3" stroke-linecap="round"
        stroke-linejoin="round" filter="url(#shadow)">
        <animate attributeName="stroke-dasharray" from="0,1000" to="1000,0" dur="1s" fill="freeze" />
      </polyline>

      <g>
        <circle v-for="(value, i) in data" :key="`point-${i}`" :cx="margin + i * xStep"
          :cy="height - margin - value * scale" r="5" fill="white" stroke="#3b82f6" stroke-width="2" />

        <text v-for="(value, i) in data" :key="`value-${i}`" :x="margin + i * xStep"
          :y="height - margin - value * scale - 10" text-anchor="middle" font-size="12" fill="#1d778a"
          font-weight="500">
          {{ value }}
        </text>
      </g>

      <text v-for="(label, i) in labels" :key="`label-${i}`" :x="margin + i * xStep" :y="height - margin + 20"
        text-anchor="middle" font-size="12" fill="#374151">
        {{ label }}
      </text>
    </svg>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  width: { type: Number, default: 600 },
  height: { type: Number, default: 350 },
  margin: { type: Number, default: 40 },
  data: { type: Array, default: () => [5000, 3250, 6030, 4670, 4200, 6100, 5120, 4870, 1200] },
  labels: { type: Array, default: () => ["January", "February", "March", "April", "May", "June", "July", "August", "September"] },
  title: { type: String, default: "Monthly expenses" }

})

const { width, height, margin, data } = props

const maxValue = computed(() => Math.max(...data))

const yStepValue = computed(() => {
  const roughStep = maxValue.value / 7
  const pow10 = Math.pow(10, Math.floor(Math.log10(roughStep)))
  return Math.ceil(roughStep / pow10) * pow10
})

const ySteps = computed(() => Math.ceil(maxValue.value / yStepValue.value))
const gridStep = computed(() => (height - 2 * margin) / ySteps.value)
const scale = computed(() => (height - 2 * margin) / (ySteps.value * yStepValue.value))
const xStep = computed(() => (width - 2 * margin) / (data.length - 1))

const linePoints = computed(() =>
  data
    .map((v, i) => `${margin + i * xStep.value},${height - margin - v * scale.value}`)
    .join(" ")
)
</script>

<style scoped>
.chart-container {
  max-width: 700px;
  border-radius: 16px;
  padding: 12px;
}
</style>

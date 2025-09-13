<template>
    <nav class="navbar">
        <div class="logo">Fake _ Bank</div>
        <div class="user">
            <span class="username">{{ name }}</span>
            <div class="avatar">{{ initials }}</div>
        </div>
    </nav>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    initials: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #2390a7;
    color: #fcfcfc;
    border-radius: 12px;
}

.logo {
    font-size: 1.2rem;
    font-weight: 600;
}

.user {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.username {
    font-size: 0.95rem;
}

.avatar {
    width: 36px;
    height: 36px;
    background: #e9e9e9;
    color: #1976d2;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}
</style>
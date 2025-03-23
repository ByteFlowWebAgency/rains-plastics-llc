<template>
  <q-btn
    v-bind="$attrs"
    :class="[
      'base-btn',
      `base-btn--${color}`,
      `base-btn--${size}`,
      { 'base-btn--full-width': fullWidth },
    ]"
    :color="color"
    :type="type"
    :label="label"
    :icon="icon"
    :loading="loading"
    :disable="disable"
    :flat="flat"
    :outline="outline"
    :unelevated="unelevated"
    :no-caps="noCaps"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </q-btn>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'primary',
  },
  type: {
    type: String,
    default: 'button',
  },
  icon: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disable: {
    type: Boolean,
    default: false,
  },
  flat: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  unelevated: {
    type: Boolean,
    default: true,
  },
  noCaps: {
    type: Boolean,
    default: true,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['click'])
</script>

<style lang="scss" scoped>
.base-btn {
  font-family: inherit;
  font-weight: 500;
  text-transform: none;
  transition: all 0.3s ease;
  border-radius: 4px;

  // Sizes
  &--sm {
    min-height: 32px;
    padding: 0 12px;
    font-size: 14px;
  }

  &--md {
    min-height: 40px;
    padding: 0 16px;
    font-size: 16px;
  }

  &--lg {
    min-height: 48px;
    padding: 0 24px;
    font-size: 18px;
  }

  // Colors - you can customize these based on your theme
  &--primary {
    background: var(--q-primary);
    color: white;

    &:hover {
      opacity: 0.9;
    }
  }

  &--full-width {
    width: 100%;
  }
}
</style>

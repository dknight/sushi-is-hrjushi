import Vue from 'vue';
import '@/filters';

describe('filters.js', () => {

  const vm = new Vue();

  it('string should be capitalized', () => {
    expect(vm.$options.filters.capitalize('hello')).toBe('Hello');
    expect(vm.$options.filters.capitalize('')).toBe('');
    expect(vm.$options.filters.capitalize('HELLO')).toBe('HELLO');
  });

  it('should format currency', () => {
    expect(vm.$options.filters.currency(200)).toBe('200.00 EUR');
    expect(vm.$options.filters.currency(0)).toBe('0.00 EUR');
    expect(vm.$options.filters.currency(null)).toBe('0.00 EUR');
    expect(vm.$options.filters.currency(NaN)).toBe('0.00 EUR');
  });

  it('should format time', () => {
    expect(vm.$options.filters.formatTime(200)).toBe('00:03:20');
    expect(vm.$options.filters.formatTime(0)).toBe('00:00:00');
    expect(vm.$options.filters.formatTime(null)).toBe('00:00:00');
    expect(vm.$options.filters.formatTime(NaN)).toBe('00:00:00');
  });
});
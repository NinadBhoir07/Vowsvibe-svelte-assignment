import { writable } from 'svelte/store';

// Application state management
export const currentView = writable('chapters'); // 'chapters' or 'shloks'
export const selectedChapter = writable(null);
export const loading = writable(false);
export const error = writable(null);
export const shlokData = writable([]);

// Navigation state
export const isDropdownOpen = writable(false);

// UI state
export const showBackToTop = writable(false);
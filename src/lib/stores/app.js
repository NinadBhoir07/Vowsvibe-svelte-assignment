import { writable } from 'svelte/store';
import { fetchChapterData } from '../api/gitaApi.js';

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

// Cache for API responses to avoid repeated calls
const chapterCache = writable({});

// Enhanced function to load chapter data
export async function loadChapterData(chapterNumber) {
  loading.set(true);
  error.set(null);

  try {
    let cache = {};
    const unsubscribe = chapterCache.subscribe(value => cache = value);
    unsubscribe();

    if (cache[chapterNumber]) {
      shlokData.set(cache[chapterNumber]);
      loading.set(false);
      return;
    }

    // Fetch from API
    const chapterData = await fetchChapterData(chapterNumber);

    // Update cache
    chapterCache.update(currentCache => ({
      ...currentCache,
      [chapterNumber]: chapterData.verses
    }));

    // Update store
    shlokData.set(chapterData.verses);
    error.set(null);
  } catch (err) {
    console.error('Error loading chapter data:', err);
    error.set(err.message || 'Failed to load chapter data');
    shlokData.set([]);
  } finally {
    loading.set(false);
  }
}
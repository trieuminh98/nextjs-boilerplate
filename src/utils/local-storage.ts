'use client';

import { isServer } from './type';

/**
 * Get an item from local storage
 * @param key - The key of the item to retrieve
 * @returns The item from local storage or null if it doesn't exist
 */
export const getLS = <T>(key: string): T | null => {
  if (!isServer()) {
    const item = localStorage.getItem(key);
    if (!item) return null;
    try {
      return JSON.parse(item) as T;
    } catch (error) {
      throw new Error(
        `Error parsing JSON from localStorage for key "${key}": ${error as string}`,
      );
    }
  }
  return null;
};

/**
 * Set an item in local storage
 * @param key - The key under which to store the item
 * @param value - The item to store
 */
export const setLS = <T>(key: string, value: T): void => {
  try {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  } catch (error) {
    throw new Error(
      `Error setting item in localStorage for key "${key}": ${error as string}`,
    );
  }
};

/**
 * Remove an item from local storage
 * @param key - The key of the item to remove
 */
export const removeLS = (key: string): void => {
  localStorage.removeItem(key);
};

/**
 * Clear all items from local storage
 */
export const clearLS = (): void => {
  localStorage.clear();
};

/**
 * Check if an item exists in local storage
 * @param key - The key of the item to check
 * @returns True if the item exists, false otherwise
 */
export const existsLS = (key: string): boolean => {
  return localStorage.getItem(key) !== null;
};

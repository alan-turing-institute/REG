import { writable, type Writable } from 'svelte/store';

export const peakStarts: Writable<number[] | null> = writable(null);

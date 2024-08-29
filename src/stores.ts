import { writable, type Writable } from 'svelte/store';

export const peakStarts: Writable<number[] | null> = writable(null);

export const headings: Writable<HTMLHeadingElement[] | null> = writable(null);

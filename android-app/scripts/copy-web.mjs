import { cp, rm, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const source = resolve('../artifacts/hydroguard/dist/public');
const target = resolve('www');
await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });
console.log(`Copied web build: ${source} -> ${target}`);

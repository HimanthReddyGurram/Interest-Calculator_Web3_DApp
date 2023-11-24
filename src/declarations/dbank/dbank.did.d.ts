import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBalComp' : () => Promise<number>,
  'checkBalSimp' : () => Promise<number>,
  'compound' : () => Promise<undefined>,
  'simple' : () => Promise<undefined>,
  'topUp' : (arg_0: number) => Promise<string>,
  'withDraw' : (arg_0: number) => Promise<string>,
}

import type { Principal } from '@dfinity/agent';
export type AssocList = List;
export type Canister = string;
export interface Entry { 'canister' : Canister };
export type List = [] | [[[SubDomain, Entry], List]];
export type SubDomain = string;
export type SubDomainMap = AssocList;
export default interface _SERVICE {
  'getAll' : () => Promise<SubDomainMap>,
  'insert' : (arg_0: SubDomain, arg_1: Entry) => Promise<undefined>,
  'lookup' : (arg_0: SubDomain) => Promise<[] | [Entry]>,
  'whoami' : () => Promise<Principal>,
};
import { TSortBy } from "@/models/filter";

export type TFilter = { skip: number, limit: number, search: string };
export type TSort = { sortBy: TSortBy, order: string };
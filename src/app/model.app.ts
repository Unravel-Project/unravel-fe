import { TSortBy } from "@/models/filter";

export type TFilterSelect = 'title' | 'reactions';

export type TFilter = { skip?: number, limit?: number, search?: string, select?: TFilterSelect };
export type TSort = { sortBy?: TSortBy, order?: string };
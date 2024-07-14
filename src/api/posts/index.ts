import httpService from "@/services/http.service";
import { IResponseGetPost } from "./post.entity";
import { TSortBy } from "@/models/filter";

const SERVICE = '/posts'

type ParamsGetPosts = {
    skip: number;
    limit: number;
    search: string;
    sortBy: TSortBy;
    order: string;
    select: string;
}

export const getPosts = async (params: ParamsGetPosts): Promise<IResponseGetPost> => {
    try {
        const res: IResponseGetPost = await httpService.get(SERVICE, { params });

        return res;
    } catch (error: any) {
        return {
            limit: 0,
            posts: [],
            skip: 0,
            total: 0
        };
    }
};
export type EPost = {
    id: number;
    title: string;
    reactions: {
        likes: number;
        dislikes: number;
    };
    userId: number;
}

export interface IResponseGetPost {
    posts: EPost[];
    total: number;
    skip: number;
    limit: number;
}
export const columns = [
    {
        accessorKey: 'title',
        header: 'title',
        cell: (info: any) => info.getValue(),
    },
    {
        accessorKey: 'reactions.likes',
        header: 'Likes',
        cell: (info: any) => info.getValue(),
    },
    {
        accessorKey: 'reactions.dislikes',
        header: 'Dislike',
        cell: (info: any) => info.getValue(),
    },
]
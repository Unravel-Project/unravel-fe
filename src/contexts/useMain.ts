import {
    keepPreviousData,
    useQuery,
    useMutation,
} from "@tanstack/react-query";
import {
    parseAsInteger,
    parseAsString,
    useQueryStates,
} from "next-usequerystate";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { useRouter } from "next/router";
import { TFilter, TSort } from "@/app/model.app";
import { getPosts } from "@/api/posts";
import { TSortBy } from "@/schemas/filter";

export const useMain = () => {
    // const router = useRouter()

    const [filter, setFilter] = useQueryStates({
        skip: parseAsInteger.withDefault(1),
        limit: parseAsInteger.withDefault(10),
        search: parseAsString.withDefault(''),
        select: parseAsString.withDefault(''),
    }, {
        history: 'push',
    })
    const [sort, setSort] = useQueryStates({
        sortBy: parseAsString.withDefault(''),
        order: parseAsString.withDefault(''),
    }, {
        history: 'replace',
    })

    const handleChangeFilter = (value: TFilter) => setFilter(value);
    const handleChangeSort = (value: TSort) => setSort(value);

    const debounceSearch = useDebounce(filter.search, 500);

    const { data, isFetching, } = useQuery({
        queryKey: ['posts', filter.limit, filter.skip, filter.select, debounceSearch, sort],
        queryFn: () => getPosts({
            limit: filter.limit,
            search: debounceSearch,
            skip: filter.skip,
            order: sort.order,
            select: filter.select,
            sortBy: sort.sortBy as TSortBy,
        }),
        placeholderData: keepPreviousData,
    })

    const { mutate, isPending, data: dataMutation } = useMutation({ mutationFn: getPosts });

    const handleGetData = () => mutate({
        limit: filter.limit,
        search: filter.search,
        skip: filter.skip,
        select: filter.select,
        order: sort.order,
        sortBy: sort.sortBy as TSortBy,
    })

    return {
        data: data?.posts ?? [],
        isFetching,
        handleChangeFilter,
        handleChangeSort,
        dataMutation: dataMutation?.posts ?? [],
        isPending,
        handleGetData,
    }
}
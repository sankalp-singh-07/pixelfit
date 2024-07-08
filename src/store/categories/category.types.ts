export enum CATEGORIES_ACTION_TYPES {
    FETCH_CATEGORIES_START = 'category/FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS = 'category/FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILED = 'category/FETCH_CATEGORIES_FAILED',
}

//> enums => used to define collection of related values ... allows us to add names to values ... can be of numeric or string type
//> This is a string wala where related string values are defined
//> eg = CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START will give the value assign to it , i.e. - 'category/FETCH_CATEGORIES_START' 
//? pretty similar to object with key value pairs


export type CategoryItem = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

export type Category = {
    title: string,
    imageUrl: string,
    items: CategoryItem[],
}

export type CategoryMap = {
    [key : string] : CategoryItem[]
}
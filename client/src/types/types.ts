export interface IUser {
    id: number;
    email: string;
    password: string;
    avatar: string;
    nickname: string;
    role: 'admin' | 'user';
}

export interface IError {
    response: {
        data: { message: string };
        status: number;
        statusText: string;
    };
}

export interface IControlItem {
    _id: string;
    title: string;
    description: string;
    image: string;
    date: string;
}

export enum BurgerItemName {
    HOME = 'Главная',
    CATALOG = 'Каталог продукции',
    DISCOUNT = 'Накопительная скидка',
    GUARANTEE = 'Гарантии',
    SUPPORT = 'Поддержка',
    REVIEWS = 'Отзывы',
    BONUS_PROGRAM = 'Бонусная программа',
    PERSONAL_AREA = 'Личный кабинет',
}

export enum BurgerItemLink {
    HOME = '/',
    CATALOG = '/games',
    DISCOUNT = '/discount',
    GUARANTEE = '/garant',
    SUPPORT = '/support',
    REVIEWS = '/reviews',
    BONUS_PROGRAM = '/bonus',
    PERSONAL_AREA = '/auth',
}

export type BurgerMenu = {
    name:
        | BurgerItemName.HOME
        | BurgerItemName.CATALOG
        | BurgerItemName.DISCOUNT
        | BurgerItemName.GUARANTEE
        | BurgerItemName.SUPPORT
        | BurgerItemName.REVIEWS
        | BurgerItemName.BONUS_PROGRAM
        | BurgerItemName.PERSONAL_AREA;
    link:
        | BurgerItemLink.HOME
        | BurgerItemLink.CATALOG
        | BurgerItemLink.DISCOUNT
        | BurgerItemLink.GUARANTEE
        | BurgerItemLink.SUPPORT
        | BurgerItemLink.REVIEWS
        | BurgerItemLink.BONUS_PROGRAM
        | BurgerItemLink.PERSONAL_AREA;
};

export enum ProfileMenuName {
    SETTINGS = 'Настройки',
    PARTNER = 'Партнерская программа',
    PURCHASE = 'Мои покупки',
}

export enum ProfileMunuLink {
    SETTINGS = '/settings',
    PARTNER = '/partner',
    PURCHASE = '/purchase',
}

export type ProfileMunu = {
    name: ProfileMenuName.SETTINGS | ProfileMenuName.PARTNER | ProfileMenuName.PURCHASE;
    link: ProfileMunuLink.SETTINGS | ProfileMunuLink.PARTNER | ProfileMunuLink.PURCHASE;
};

export enum InfoMenuName {
    DISCOUNT = 'Накопительная скидка',
    REVIEWS = 'Отзывы',
    GARANT = 'Гарантии',
    PARTNER = 'Партнерская программа',
}

export enum InfoMenuLink {
    DISCOUNT = '/discount',
    REVIEWS = '/reviews',
    GARANT = '/garant',
    PARTNER = '/partner',
}

export type InfoMenuAr = {
    name: InfoMenuName.DISCOUNT | InfoMenuName.REVIEWS | InfoMenuName.GARANT | InfoMenuName.PARTNER;
    link: InfoMenuLink.DISCOUNT | InfoMenuLink.REVIEWS | InfoMenuLink.GARANT | InfoMenuLink.PARTNER;
};

export enum AdminContentMenuName {
    PARTNER = 'Партнерская программа',
    GARANT = 'Гарантии',
}

export type AdminMenuAside = {
    content: [
        { name: AdminContentMenuName.PARTNER; img: any },
        { name: AdminContentMenuName.GARANT; img: any },
    ];
};

export interface IUser {
    email: string;
    password: string;
    avatar: string
    nickname: string
}

export interface IError {
    response: {
        data: { message: string };
        status: number;
        statusText: string;
    };
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
    GUARANTEE = '/about',
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
    name: ProfileMenuName.SETTINGS | ProfileMenuName.PARTNER | ProfileMenuName.PURCHASE
    link: ProfileMunuLink.SETTINGS | ProfileMunuLink.PARTNER | ProfileMunuLink.PURCHASE
}
export const menuItems = [
    {
        title: "Админ-панель",
        items: [
            {
                title: 'Пользователи',
                href: '/cabinet',
                ico: 'pi pi-user-edit'
            },
            {
                title: 'Клиенты БК',
                href: '/cabinet',
                ico: 'pi pi-users'
            },
            {
                title: 'Инциденты',
                href: '/cabinet',
                ico: 'pi pi-times-circle'
            },
            {
                title: 'Справочники',
                href: '/cabinet',
                ico: 'pi pi-receipt'
            },
        ]
    },
    {
        title: "Учёт",
        items: [
            {
                title: 'Учёт ставок',
                href: '/cabinet/accounting/bet',
                ico: 'pi pi-tag'
            },
            {
                title: 'Учёт транзакций',
                href: '/cabinet/accounting/transaction',
                ico: 'pi pi-tags'
            },
        ]
    },
    {
        title: "Отчёты",
        items: [
            {
                title: 'Отчёт по ставкам',
                href: '/cabinet',
                ico: 'pi pi-ticket'
            },
            {
                title: 'Отчёт по транзакциям',
                href: '/cabinet',
                ico: 'pi pi-table'
            },
        ]
    },
    {
        title: "Журналы",
        items: [
            {
                title: 'Журнал верификаций',
                href: '/cabinet',
                ico: 'pi pi-window-maximize'
            },
            {
                title: 'Журнал по скорингу',
                href: '/cabinet',
                ico: 'pi pi-window-minimize'
            },
        ]
    }
]
import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { createI18n } from 'vue-i18n';

import { ID_INJECTION_KEY } from 'element-plus'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(ElementPlus)
            .use(i18n)
            .provide(ID_INJECTION_KEY, {
                prefix: 1024,
                current: 0,
            })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },

});

const i18n = createI18n({
    locale: 'English',
    fallbackLocale: 'English',
    messages: {
        English: {
            fields: {
                validation: {
                    required: 'This field is required',
                    email: 'This field must be an email',
                    password: 'This field must be a password',
                    password_confirmation: 'This field must be a password confirmation',
                    min: 'This field must be at least {min} characters',
                    max: 'This field must be at most {max} characters',
                    confirmed: 'This field must be confirmed',
                    unique: 'This field must be unique',
                    date: 'This field must be a date',
                    dateinpast: 'This field must be a future date',
                },
            },
            ui: {
                tabs: {
                    home: 'Home',
                    events: 'Events',
                    settings: 'Settings',
                    subscription: 'Subscription',
                    exit: 'Exit',
                    language: 'Language',
                    account: 'Account',
                    signin: 'Sign in',
                    register: 'Register',
                },
                actions: {
                    create: 'Create',
                    createEvent: 'Create event',
                    edit: 'Edit',
                    delete: 'Delete',
                    deleteAll: 'Delete all',
                    save: 'Save',
                    cancel: 'Cancel',
                    close: 'Close',
                    confirm: 'Confirm',
                    back: 'Back',
                    search: 'Search',
                    confirmDelete: 'Are you sure you want to delete this item?',
                    success: {
                        create: 'Item created successfully',
                        edit: 'Item edited successfully',
                        delete: 'Item deleted successfully',
                    },
                    error: {
                        create: 'Error creating item',
                        edit: 'Error editing item',
                        delete: 'Error deleting item',
                    },
                },
            }
        },
        Russian: {
            fields: {
                validation: {
                    required: 'Это поле обязательно',
                    email: 'Это поле должно быть электронной почтой',
                    password: 'Это поле должно быть паролем',
                    password_confirmation: 'Это поле должно быть подтверждением пароля',
                    min: 'Это поле должно быть не менее {min} символов',
                    max: 'Это поле должно быть не более {max} символов',
                    confirmed: 'Это поле должно быть подтверждено',
                    unique: 'Это поле должно быть уникальным',
                    date: 'Это поле должно быть датой',
                    dateinpast: 'Это поле должно быть будущей датой',
                },
            },
            ui: {
                tabs: {
                    home: 'Главная',
                    events: 'События',
                    settings: 'Настройки',
                    subscription: 'Подписка',
                    exit: 'Выход',
                    language: 'Язык',
                    account: 'Аккаунт',
                    signin: 'Войти',
                    register: 'Регистрация',
                },
                actions: {
                    create: 'Создать',
                    createEvent: 'Создать событие',
                    edit: 'Редактировать',
                    delete: 'Удалить',
                    deleteAll: 'Удалить все',
                    save: 'Сохранить',
                    cancel: 'Отменить',
                    close: 'Закрыть',
                    confirm: 'Подтвердить',
                    back: 'Назад',
                    search: 'Поиск',
                    confirmDelete: 'Вы уверены, что хотите удалить этот элемент?',
                    success: {
                        create: 'Элемент успешно создан',
                        edit: 'Элемент успешно отредактирован',
                        delete: 'Элемент успешно удален',
                    },
                    error: {
                        create: 'Ошибка создания элемента',
                        edit: 'Ошибка редактирования элемента',
                        delete: 'Ошибка удаления элемента',
                    },
                },
            }
        }
    }
});

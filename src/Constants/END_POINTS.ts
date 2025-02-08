
const BASE_URL = `https://upskilling-egypt.com:3007`
const BASE_AUTH =   `${BASE_URL}/api/auth`
const BASE = `${BASE_URL}/api`

export const BASE_URLS = {
    login: `${BASE_AUTH}/login`,
    register: `${BASE_AUTH}/register`,
    forgetPassword: `${BASE_AUTH}/forgot-password`,
    resetPassword: `${BASE_AUTH}/reset-password`,
    changePassword: `${BASE_AUTH}/change-password`,
    categories: `${BASE}/category`,
    books: `${BASE}/book`,
    basketItems: `${BASE}/basket`,
    addBasketItem: `${BASE}/basket/item`,
    updateBasketItem: (_id: string) => `${BASE}/basket/${_id}`,//_id = cart id  /api/basket/item
    deleteBasketItem:  `${BASE}/basket/item`,
    createOrder: (_id: string) => `${BASE}/order/${_id}`,
    
    
}
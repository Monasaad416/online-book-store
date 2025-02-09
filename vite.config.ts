import tsconfigPaths  from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(),tsconfigPaths()],
    resolve: {
    alias: {
          "@sharedModule/*": "src/Modules/SharedModule/*",
      "@assets/*": "src/assets/*",
      "@authModule/*": "src/Modules/AuthModule/*",
      "@constants/*": "src/Constants/*",
      "@modules/*": "src/Modules/*",
      "@booksModules/*": "src/Modules/BooksModule/*",
      "@booksList/*": "src/Modules/BooksList/*",
      "@book/*": "src/Modules/Book/*",
      "@addToCartModule/*": "src/Modules/AddToCartModule/*",
      "@cartModule/*": "src/Modules/CartModule/Cart/*",
      "@featuredBooksModule/*": "src/Modules/FeaturedBooksModule/*",
      "@homeModule/*": "src/Modules/HomeModule/Home/*",
      "@latestArticlesModule/*": "src/Modules/LatestArticlesModule/*",
      "@newReleaseModule/*": "src/Modules/NewReleaseModule/*",
      "@offersModule/*": "src/Modules/OffersModule/*",
      "@subscribeModule/*": "src/Modules/SubscribeModule/*",
      "@profileModule/*": "src/Modules/ProfileModule/*",
      "@confirmedOrderModule/*": "src/Modules/ConfirmedOrderModule/*",
      "@ordersModule/*": "src/Modules/OrdersModule/*",
      "@topCategoriesModule/*": "src/Modules/TopCategoriesModule/*",
      "@swiperNavigationModule/*": "src/Modules/SwiperNavButtonsModule/*",
      "@wishlistModule/*": "src/Modules/WishlistModule/*",
      "@customTypes/*": "src/types/*",
      "@feedBack/*": "src/Modules/FeedBack/*",
      "@redux/*": "src/redux/*",
      "@swiperNavButtons/*" :"src/Modules/SwiperNavButtonsModule/*"
    },
  },

  css: {
    preprocessorOptions: {
      css: {
        charset: false,
      },
    },
  },
});


import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {

    ready() {
      // tslint:disable-next-line:no-console
      console.log(`App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB`);
    },

    cached() {
      // tslint:disable-next-line:no-console
      console.log('Content has been cached for offline use.');
    },

    updated() {
      // tslint:disable-next-line:no-console
      console.log('New content is available; please refresh.');
    },

    offline() {
      // tslint:disable-next-line:no-console
      console.log('No internet connection found. App is running in offline mode.');
    },

    error(error) {
      // tslint:disable-next-line:no-console
      console.error('Error during service worker registration:', error);
    },

  });
}

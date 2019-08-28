import {Navigation} from 'react-native-navigation';
import App from './src/App';
Navigation.registerComponent('homeScreen', () => App);

console.log('cheguei');

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'homeScreen',
            },
          },
        ],
      },
    },
  });

  // Each time the event is received we should call Navigation.setRoot
});

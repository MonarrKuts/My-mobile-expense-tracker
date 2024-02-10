// NotificationService.js

import { sendNotification } from 'react-native-push-notification';

const triggerNotification = (message) => {
  sendNotification({
    title: 'Budget Notification',
    message: message,
  });
};
export default triggerNotification;
# React Native Toast Message Library – Toastier

Toastier is a **React Native Toast message library** for Android and iOS that lets you show **toast notifications in React Native apps** with full customization, animations, and theme support.

![NPM Version](https://img.shields.io/npm/v/react-native-toastier)
![NPM Downloads](https://img.shields.io/npm/dw/react-native-toastier)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

---

## Why React Native Toastier?

- Lightweight **React Native Toast** library
- Works on both **Android & iOS**
- Supports success, error, info, and warning toast messages
- Fully customizable UI and animations
- Can be used as a **React Native toast message** or **snackbar alternative**
- Simple API with global `ToastService`

---

## Demo

<div style="display: flex; justify-content: center;">
  <img src="https://github.com/hardik27111/react-native-toastier/blob/master/assets/demo.gif?raw=true" height="500" />
</div>

---

## Installation

Install the package using npm or yarn:

```bash
npm install react-native-toastier
# or
yarn add react-native-toastier
```

---

## React Native Toast Usage

Wrap your app with `ToastProvider` to enable toast notifications globally.

```js
import { ToastProvider } from 'react-native-toastier';

export default function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}
```

Use `ToastService` to show toast messages from anywhere in your app.

```js
import { ToastService } from 'react-native-toastier';
import { useEffect } from 'react';

export default function Component() {
  useEffect(() => {
    ToastService.show({
      message: 'Hello Toast',
    });
  }, []);
}
```

---

## Toast Message Types

### Success Toast
```js
ToastService.show({ message: 'Success message' });
```

### Error Toast
```js
ToastService.showError({ message: 'Error message' });
```

### Info Toast
```js
ToastService.showInfo({ message: 'Info message' });
```

### Warning Toast
```js
ToastService.showWarning({ message: 'Warning message' });
```

---

## Custom Toast

Create fully custom toast notifications using your own components.

```js
ToastService.show({
  message: 'Hello',
  children: <Custom />,
  textStyle: { color: '#000' },
  contentContainerStyle: {
    borderStartWidth: 5,
    backgroundColor: '#fff',
    paddingLeft: 12,
    flex: 1,
    borderStartColor: '#4CAF50',
  },
});
```

---

## ToastProvider Props

Props passed to `ToastProvider` apply to all toast messages globally.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | required | App content wrapped by provider |
| theme | Theme | - | Customize default toast theme |
| animation | string | zoomIn | Animation type for toast |
| position | string | top | Toast position (top / bottom) |
| duration | number | 15000 | Toast display duration (ms) |
| contentContainerStyle | ViewStyle | - | Outer container style |
| textContainerStyle | ViewStyle | - | Message container style |
| textStyle | TextStyle | - | Toast text style |

---

## ToastService Options

Props passed to `ToastService` apply to individual toast messages.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| message | string | - | Message text |
| children | ReactNode | - | Custom toast content |
| left | ReactNode | - | Left component |
| right | ReactNode | - | Right component |
| theme | Theme | - | Custom theme |
| animation | string | zoomIn | Animation override |
| position | string | top | Toast position |
| duration | number | 15000 | Duration override |
| contentContainerStyle | ViewStyle | - | Outer style |
| textContainerStyle | ViewStyle | - | Message style |
| textStyle | TextStyle | - | Text style |

---

## Donation

If you find this **React Native Toast** library useful, consider supporting the project.

<a href="https://www.buymeacoffee.com/hardikviradiya" target="_blank">
  <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" height="41" />
</a>

---

## Hire

I’m a professional **React & React Native developer** available for freelance and contract work.

Contact me: <a herf='mailto:hardikviradiya27@gmail.com'>hardikviradiya27@gmail.com</a>

---

## License

[MIT](https://choosealicense.com/licenses/mit/)


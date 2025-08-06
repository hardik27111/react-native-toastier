# react-native-toastier
A Fully Customizable Toast Component for React Native.

![NPM Version](https://img.shields.io/npm/v/react-native-toastier)
![NPM Downloads](https://img.shields.io/npm/dw/react-native-toastier)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Demo
<div style="display: flex; justify-content: center;">
<img src="https://github.com/hardik27111/react-native-toastier/blob/master/assets/demo.gif?raw=true" height=500>
</div>



## Installation

Install the package via npm or yarn

```bash
  npm install react-native-toastier
  or
  yarn add react-native-toastier
```

## Usage/Examples

Wrap your app in ToastProvider to provide context for the toast service.

```javascript
import { ToastProvider } from 'react-native-toastier'

export default function App() {
  return (
    <ToastProvider>
      <YourApp />
    <ToastProvider/>
  );
}
```

Use the ToastService to display a toast message anywhere in the app.

```javascript
import { ToastService } from 'react-native-toastier';

export default function Component() {

   useEffect(() => { 
      ToastService.show({ 
         message: "Hello Toast" 
      }) 
   }, []);
   
   // Rest of the code....
}
```

## Toast Service

To show success message
```javascript
ToastService.show({ 
         message: "Hello Toast" 
      }) 
```

To show error message
```javascript
ToastService.showError({ 
         message: "Hello Toast" 
      }) 
```

To show info message
```javascript
ToastService.showInfo({ 
         message: "Hello Toast" 
      }) 
```

To show warning message
```javascript
ToastService.showWarning({ 
         message: "Hello Toast" 
      }) 
```

### Custome Toast
```javascript
ToastService.show({ 
   message: 'Hello', 
   children: <Custom/>, 
   textStyle: { color: '#000' }, 
   contentContainerStyle: { borderStartWidth: 5, backgroundColor: '#fff', paddingLeft: 12, flex: 1, borderStartColor: theme.colors.green[300]} 
})
```

## Props

Props can be passed from the provider (will apply to all toast) as well as from the toast service (will apply to a particular toast).

### ToastProvider Props


| Prop          | Data type	  | Default  | Description |
| ------------- |:-------------:| :---------:| :-----|
| children      | ReactNode     | Required. | The children for context provider. |
| theme      | Theme     | - | Update defualt toast theme. |
| animation      | string     | zoomIn | The animation type to taost message. |
| position      | string     | top | Toast meesage position top, bottom. |
| duration      | number     | 15000 | How long to display the Toast message. |
| contentContainerStyle      | ViewStyle     | - | To update toast message outter container style. |
| textContainerStyle      | ViewStyle     | - | To update toast message container style. |
| textStyle      | TextStyle     | - | To update toast message test style. |

### Toast Service Options


| Prop          | Data type	  | Default  | Description |
| ------------- |:-------------:| :---------:| :-----|
| message      | string     | - | The message to show. |
| children      | ReactNode     | - | The children for custom  toast. |
| left      | ReactNode     | - | The left component for a toast. |
| right      | ReactNode     | - | The right component for a toast. |
| theme      | Theme     | - | Update default toast theme for particular toast. |
| animation      | string     | zoomIn | Update animation for particular toast. |
| position      | string     | top | Update position for particular toast. |
| duration      | number     | 15000 | Update duration for particular toast. |
| contentContainerStyle      | ViewStyle     | - | Update outter container style for particulat toast. |
| textContainerStyle      | ViewStyle     | - | Update message container style for particulat toast. |
| textStyle      | TextStyle     | - | Update toast message test style for particulat toast. |


## Donation
If you find my projects and contributions helpful, consider supporting me. Your support means a lot and helps me continue creating and sharing more cool stuff.

<a href="https://www.buymeacoffee.com/hardikviradiya" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## Hire

I'm a skilled React and React Native developer ready to help with your project. Let's create something great together!
Contact me <a herf='mailto:hardikviradiya27@gmail.com'>hardikviradiya27@gmail.com</a>

## License

[MIT](https://choosealicense.com/licenses/mit/)


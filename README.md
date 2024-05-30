# react-native-toast
A Toast component in React Native is a brief, non-blocking message that appears on the screen to provide feedback or notifications to users. It typically disappears automatically after a few seconds. This component is useful for showing short messages without interrupting user interactions, such as confirming actions or displaying status updates.

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Installation

Install the package via npm or yarn

```bash
  npm install react-native-toast
  or
  yarn add react-native-toast
```
    
## Usage/Examples

Wrap your app in ToastProvider to provide context for the toast service.

```javascript
import { ToastProvider } from 'react-native-toast'

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
import { ToastService } from './src/context/ToastProvider';

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
### ToastProvider Props

| Prop          | Data type	  | Default  | Description |
| ------------- |:-------------:| ---------:| -----:|
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
| ------------- |:-------------:| ---------:| -----:|
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


## License

[MIT](https://choosealicense.com/licenses/mit/)


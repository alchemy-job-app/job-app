# Team planning Miro link

https://miro.com/app/board/uXjVOJ2lcbg=/

supabase .env file secrets: SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRna29jYXhhanNmb3l0b3Rjc2N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYxNTg5MzksImV4cCI6MTk2MTczNDkzOX0.Fan6buR_B8YT6Vpyd1jyZLmb8zsdVTDxbYQkYnGGOV4
SUPABASE_URL=https://tgkocaxajsfoytotcscy.supabase.co

# adv-react-tailwind-template

This template is a modified version of our [React
Template](https://github.com/alchemycodelab/react-template). It provides a way
to use [Tailwind CSS](https://tailwindcss.com/) classes for styling React
components by using just `className`s and no custom CSS.

## Getting Started

Click "Use this template" to create a new repo with your user as the owner. Then
clone down the newly created repo and get hacking!

## Differences from the [React Template](https://github.com/alchemycodelab/react-template)

Currently, this template only supports [CSS
modules](https://css-tricks.com/css-modules-part-1-need/) if the CSS filename
matches `*.module.css`. What this means is that when you want to use custom
styles for a component — and you don't want those styles applied globally —
you'll need to create a `MyComponent.module.css` file, import it, and then use
the CSS class names as the properties of your imported stylesheet in your JSX:

### Tailwind Template

```css
/* MyComponent.module.css */
.myCustomCssClass {
  font-family: monospace;
}
```

```js
// MyComponent.jsx
import styles from './MyComponent.module.css';

export default function MyComponent() {
  return (
    <h1 className={`text-white ${styles.myCustomCssClass}`}>Hello, World!</h1>
  );
}
```

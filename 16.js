import React from 'react';
import styles from './MyComponent.module.css';

/**
 * MyComponent is a simple React component that displays a title and content.
 * It uses CSS Modules to encapsulate its styles.
 *
 * @returns {JSX.Element} The rendered MyComponent element.
 */
const MyComponent = () => {
  return (
    <div>
      <h1>Title</h1>
      <p>Content</p>
    </div>
  );
};

// Exports the MyComponent for use in other parts of the application
export default MyComponent;

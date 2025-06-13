# InputChip Component

This is a simple React component that allows users to input text and display it as interactive "chips." Users can add new chips and remove existing ones

---

## Features
* **Add Chips:** Type into the input field and click "**Add**" to create a new chip.
* **Remove Chips:** Click the "**×**" button on a chip to remove it.
* **Prevent Duplicates:** The component prevents adding duplicate chips.
* **Trim Whitespace:** Input is trimmed before being added as a chip.
* **Responsive Design:** Basic **Tailwind CSS** styling for a responsive and visually appealing interface.

---

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Tailwind CSS:** A utility-first CSS framework for rapidly styling the component.

---


## Installation

1.  **Clone the repository (or copy the `InputChip.js` file):**

    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```


2.  **Install dependencies:**

    If you haven't already, make sure you have `react` and `tailwindcss` installed in your project.

    ```bash
    npm install react tailwindcss
    # or
    yarn add react tailwindcss
    ```

3.  **Configure Tailwind CSS:**

    If you're setting up **Tailwind CSS** for the first time, you'll need to initialize it and include its directives in your main CSS file. Refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation) for detailed instructions.

---


## Usage

To use the `InputChip` component, simply import it into your React application and render it.


```javascript
import React from 'react';
import InputChip from './InputChip'; // Adjust the path as needed

function App() {
  return (
    <div className="App">
      <InputChip />
    </div>
  );
}

export default App;

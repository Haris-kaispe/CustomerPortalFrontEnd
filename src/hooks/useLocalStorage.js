import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        console.log(" if:", value);

        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};

// import { useState } from "react";
// // Usage
// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         placeholder="Enter your name"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //       />
// //     </div>
// //   );
// // }
// // Hook

// export function useLocalStorage(key, initialValue) {
//   // State to store our value
//   // Pass initial state function to useState so logic is only executed once

//   const [storedValue, setStoredValue] = useState(() => {
//     if (typeof window === "undefined") {
//       console.log("un", initialValue);

//       return initialValue;
//     }
//     try {
//       // Get from local storage by key
//       const item = window.localStorage.getItem(key);
//       console.log("contain", item);
//       // Parse stored json or if none return initialValue
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       // If error also return initialValue
//       console.log("ds", error);
//       return initialValue;
//     }
//   });
//   // Return a wrapped version of useState's setter function that ...
//   // ... persists the new value to localStorage.
//   const setValue = (value) => {
//     try {
//       console.log("ds", value);

//       // Allow value to be a function so we have same API as useState
//       const valueToStore =
//         value instanceof Function ? value(storedValue) : value;
//       // Save state

//       useEffect(() => {
//         const items = JSON.parse(localStorage.getItem("items"));
//         if (items) {
//           setItems(items);
//         }
//       }, []);
//       setStoredValue(valueToStore);
//       // Save to local storage
//       if (typeof window !== "undefined") {
//         window.localStorage.setItem(key, JSON.stringify(valueToStore));
//       }
//     } catch (error) {
//       // A more advanced implementation would handle the error case
//       console.log("dsj", error);
//     }
//   };
//   return [storedValue, setValue];
// }

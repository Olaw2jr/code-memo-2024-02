// localStorage is convenient for saving site settings and user data

/**
 * An array of city names in Japan.
 */
const arr = ["Tokyo", "Osaka", "Kyoto", "Okayama"];

/**
 * Stores the `arr` array in localStorage as a JSON string under the key "city".
 */
localStorage.setItem("city", JSON.stringify(arr));

/**
 * Retrieves the city data from localStorage and parses it back into a JavaScript array.
 *
 * @returns {string[]} An array of city names.
 */
JSON.parse(localStorage.getItem("city"));

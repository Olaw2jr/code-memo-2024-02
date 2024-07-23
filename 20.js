let count = 0;

/**
 * This function demonstrates the use of setInterval for asynchronous tasks.
 * It increments a counter every second and logs it to the console.
 * After 10 iterations, it stops the interval using clearInterval.
 */
const interval = setInterval(() => {
  count++;
  console.log(count);

  if (count === 10) {
    clearInterval(interval); // Stop after 10 counts
  }
}, 1000); // Execute every 1 second

// setInterval is useful for scroll animations, auto-updates, and other time-based tasks.

export function log(stack, level, packageName, message) {
  const entry = {
    timestamp: new Date().toISOString(),
    stack,
    level,
    package: packageName,
    message,
  };

  console.log('[LOG]', entry);

  // Simulate sending to server
  // fetch("http://localhost:5000/log", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(entry),
  // });
}

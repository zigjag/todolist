exports.getDate = function() {
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return new Date().toLocaleDateString("en-US", options);
}

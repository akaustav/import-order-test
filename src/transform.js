export function getSource(source) {
  return source
    // Treat `.` as `./`, `..` as `../`, `../..` as `../../` etc.
    .replace(/^[./]*\.$/, "$&/")
    // Make `../` sort after `../../` but before `../a` etc.
    // Why a comma? See the next comment.
    .replace(/^[./]*\/$/, "$&,")
    // Make `.` and `/` sort before any other punctation.
    // The default order is: _ - , x x x . x x x / x x x
    // We’re changing it to: . / , x x x _ x x x - x x x
    .replace(/[./_-]/g, (char) => {
      switch (char) {
        case ".":
          return "_";
        case "/":
          return "-";
        case "_":
          return ".";
        case "-":
          return "/";
        // istanbul ignore next
        default:
          throw new Error(`Unknown source substitution character: ${char}`);
      }
    });
}

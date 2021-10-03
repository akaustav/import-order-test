export function getSource(source) {
  // console.log('Transforming', source);

  const t1 = transform1(source);
  // console.log('After Transform 1', t1);

  const t2 = transform2(t1);
  // console.log('After Transform 2', t2);

  const t3 = transform3(t2);
  // console.log('After Transform 3', t3, '\n');

  return t3;
}

export function transform1(input) {
  // Treat `.` as `./`, `..` as `../`, `../..` as `../../` etc.
  return input
    .replace(/^[./]*\.$/, "$&/");
}

export function transform2(input) {
  // Make `../` sort after `../../` but before `../a` etc.
  // Why a comma? See transform3
  return input
    .replace(/^[./]*\//, "$&,")
}

export function transform3(input) {
  // Make `.` and `/` sort before any other punctation.
  // For the 5 concerned characters:
  // The ASCII order is  : , - . / _
  // The Intl order is   : _ - , . /
  // We’re changing it to: . / , _ -
  return input
    .replace(/[./_-]/g, (char) => {
      switch (char) {
        case "-":
          return "_";
        case ".":
          return "-";
        case "/":
          return ".";
        case "_":
          return "/";
        // istanbul ignore next
        default:
          throw new Error(`Unknown source substitution character: ${char}`);
      }
    });
}

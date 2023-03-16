const print = (input: any): any => {
  if (typeof input === "object") {
    console.log(input);
    return;
  }
  process.stdout.write(`${input}`);
};

const println = (input?: any) => console.log(input || "");

export { print, println };

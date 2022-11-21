export const print = (input: any): any => {
  if (typeof input === "object") {
    console.log(input);
    return;
  }
  process.stdout.write(`${input}`);
};

export const println = (input?: any) => console.log(input || "");

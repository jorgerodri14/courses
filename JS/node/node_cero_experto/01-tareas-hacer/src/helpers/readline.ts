import rd from "readline";

export const readlineConsole = ({
  question,
  cb,
}: {
  question: string;
  cb: ({ opt, readline }: { opt: any; readline: rd.Interface }) => void;
}) => {
  const readline = rd.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(question, (opt) => {
    cb({ opt, readline });
  });
};

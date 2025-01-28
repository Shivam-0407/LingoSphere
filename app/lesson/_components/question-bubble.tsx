import Image from "next/image";

type Props = {
  question: string;
};

export const QuestionBubble = ({ question }: Props) => {
  return (
    <div className="flex items-center gap-x-4 mb-6">
      <Image
        src="/mascot.svg"
        width={60}
        height={60}
        className="hidden lg:block"
        alt="mascot"
      />
       <Image
        src="/mascot.svg"
        width={40}
        height={40}
        className="block lg:hidden"
        alt="mascot"
      />
    </div>
  );
};

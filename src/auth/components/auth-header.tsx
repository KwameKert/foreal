import { FunctionComponent } from "react";

type Props = {
  headLine: string;
  description: string;
};

export const AuthHeader: FunctionComponent<Props> = ({
  headLine,
  description,
}) => {
  return (
    <>
      <div className="flex flex-row justify-start">
        <div className="self-center">
          <p className="text-xl font-bold text-red-700">Foreal</p>
        </div>
        <div className="ml-3 self-center">
          <p className="text-base font-bold text-indigo-900">Admin's Portal</p>
        </div>
      </div>
      <div className="my-8">
        <p className="text-xl font-bold">{headLine}</p>
        <p className="text-sm text-gray-500 text-sm mt-2">{description}</p>
      </div>
    </>
  );
};

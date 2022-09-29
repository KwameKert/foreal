import { FunctionComponent } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  headLine: string;
  description: string;
};

export const AuthHeader: FunctionComponent<Props> = ({
  title,
  subtitle,
  headLine,
  description,
}) => {
  return (
    <>
      {title && (
        <div className="flex flex-row justify-start mb-4">
          <div className="self-center">
            <p className="text-xl font-bold text-red-700">{title}</p>
          </div>
          <div className="ml-3 self-center">
            <p className="text-base font-bold text-indigo-900">{subtitle}</p>
          </div>
        </div>
      )}
      <div className="">
        <p className="text-xl font-bold">{headLine}</p>
        <p className="text-sm text-gray-500 text-sm mt-2">{description}</p>
      </div>
    </>
  );
};

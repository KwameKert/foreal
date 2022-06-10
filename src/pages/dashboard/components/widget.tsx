import React, { FunctionComponent } from "react";

type WidgetProps = {
  header: string;
  main: string;
  footer?: string;
};

export const Widget: FunctionComponent<WidgetProps> = ({
  header,
  main,
  footer,
}) => {
  return (
    <div className="rounded-2xl bg-white p-4 px-6">
      <h2 className="font-medium">{header}</h2>
      <p className="text-2xl font-bold py-3 text-purple-700">{main}</p>
      <p className="text-gray-400 text-sm">{footer}</p>
    </div>
  );
};

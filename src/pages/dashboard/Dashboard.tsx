import React from "react";
import { Widget } from "./components/widget";

export const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <Widget header="Active Users" main="42" footer="2 new users" />
        <Widget
          header="Available Restaurants"
          main="10"
          footer="1 new restaurant"
        />
        <Widget header="Active Invites" main="1.2k" footer="10 new invites" />
      </div>
    </>
  );
};

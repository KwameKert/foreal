import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { useSelector } from "../../hooks/useTypesSelector";
import { useEffect } from "react";

export default function AppLoader() {
  const { loading } = useSelector((state) => state.restaurant);
  const [active, setActive] = React.useState(false);

  const showLoader = () => {
    if (loading) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  useEffect(() => {
    showLoader();
  }, [loading]);
  return (
    <>
      {active && (
        <div className="z-100000 block  w-full py-1">
          <LinearProgress color="primary" />
        </div>
      )}
    </>
  );
}

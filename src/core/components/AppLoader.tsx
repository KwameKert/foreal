import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { useSelector } from "../../hooks/useTypesSelector";
import { useEffect } from "react";

export default function AppLoader() {
  const { loading: userLoading } = useSelector((state) => state.user);
  const { loading: restaurantLoading } = useSelector(
    (state) => state.restaurant
  );
  const { loading: bookLoading } = useSelector((state) => state.booking);
  const [active, setActive] = React.useState(false);

  const showLoader = () => {
    if (userLoading || restaurantLoading || bookLoading) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  useEffect(() => {
    showLoader();
  }, [userLoading, restaurantLoading, bookLoading]);
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

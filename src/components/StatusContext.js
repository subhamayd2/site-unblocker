import { createContext, useContext, useEffect, useState } from "react";
import {
  checkServiceStatus,
  getAppVersion,
  toggleServiceStatus,
} from "../services";

const context = createContext();

export const useStatusContext = () => useContext(context);

const StatusProvider = ({ children }) => {
  const [started, setStarted] = useState(false);
  const [toggling, setToggling] = useState(false);
  const [appVersion, setAppVersion] = useState(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const [res, version] = await Promise.all([
        checkServiceStatus(),
        getAppVersion(),
      ]);
      if (mounted) {
        setStarted(res.data);
        setAppVersion(version);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const toggleStatus = async () => {
    setToggling(true);
    const { error } = await toggleServiceStatus(!started);
    console.log(error);
    setToggling(false);
    setStarted((p) => !p);
  };

  return (
    <context.Provider
      value={{
        started,
        toggling,
        toggleStatus,
        appVersion,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default StatusProvider;

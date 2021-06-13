import { isEmpty } from "lodash";
import { createContext, useContext, useEffect, useState } from "react";

const CONFIG_LOCALSTORAGE_KEY = "config";

export const CONFIG_PROFILE = "profile";

const context = createContext();

export const useConfigContext = () => useContext(context);

const INITIAL_CONFIG = {
  [CONFIG_PROFILE]: 2,
};

const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(INITIAL_CONFIG);

  useEffect(() => {
    const storedConfigRaw = localStorage.getItem(CONFIG_LOCALSTORAGE_KEY);
    if (isEmpty(storedConfigRaw)) {
      localStorage.setItem(CONFIG_LOCALSTORAGE_KEY, JSON.stringify(config));
    } else {
      const storedConfig = JSON.parse(storedConfigRaw);
      setConfig(storedConfig);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateConfig = (key, value) => {
    if (isEmpty(key)) {
      return;
    }

    setConfig((prev) => {
      const newConfig = { ...prev, [key]: value };
      saveConfig(newConfig);
      return newConfig;
    });
  };

  const resetConfig = () => {
    setConfig(INITIAL_CONFIG);
    saveConfig(INITIAL_CONFIG);
  };

  const saveConfig = (newConfig) => {
    localStorage.setItem(CONFIG_LOCALSTORAGE_KEY, JSON.stringify(newConfig));
  };

  return (
    <context.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ConfigProvider;

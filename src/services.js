const ipc = window.ipcRenderer;

export const checkServiceStatus = () => {
  const p = new Promise((resolve, reject) => {
    ipc.send("check_status");
    ipc.once("check_status", (e, reply) => {
      resolve(reply);
    });
  });
  return p;
};

export const toggleServiceStatus = (newState) => {
  const p = new Promise((resolve, reject) => {
    ipc.send("toggle_status", newState);
    ipc.once("toggle_status", (e, reply) => {
      resolve(reply);
    });
  });
  return p;
};

export const getAppVersion = () => {
  const p = new Promise((resolve, reject) => {
    ipc.send("get_app_version");
    ipc.once("get_app_version", (e, reply) => {
      resolve(reply);
    });
  });
  return p;
};

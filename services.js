const nrc = require("node-run-cmd");
const path = require("path");
const sudo = require("sudo-prompt");

const startService = `"${path.join("bin", "start_service.cmd")}"`;
const stopService = `"${path.join("bin", "stop_service.cmd")}"`;

const SEP = "|";
const STATUS_KEY = "STATE";
const STATUS_VALUE = "RUNNING";

const checkStatus = () => {
  const p = new Promise((resolve, reject) => {
    nrc.run("sc query goodbyedpi", {
      onData: (data) => {
        let status = false;
        data = data.replace(/\r?\n|\r/g, SEP);
        const rawArrayData = data.split(SEP).map((x) => x.trim());
        rawArrayData.forEach((d) => {
          if (d !== undefined && d !== null && d !== "") {
            const keyValue = d.split(":").map((x) => x.trim());
            const [key, value] = keyValue;
            if (key === STATUS_KEY) {
              const [, v] = value.split(/\s+/g).map((x) => x.trim());
              if (v === STATUS_VALUE) {
                status = true;
              }
            }
          }
        });

        resolve(status);
      },
      onError: (error) => {
        reject(error);
      },
    });
  });
  return p;
};

const toggleStatus = (newState) => {
  const p = new Promise((resolve, reject) => {
    sudo.exec(
      newState ? startService : stopService,
      { name: "Toggle Service Status" },
      function (error, stdout, stderr) {
        if (error) {
          reject(error);
        } else {
          resolve(stdout);
        }
      }
    );
  });

  return p;
};

module.exports = {
  checkStatus,
  toggleStatus,
};

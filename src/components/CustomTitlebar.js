import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { Close, LockOpenOutlined, Minimize } from "@material-ui/icons";
import clsx from "clsx";

const CustomTitlebar = () => {
  const { dragStyle, buttonStyle, dragZoneStyle } = useStyles();

  const handleMinimize = () => {
    window.ipcRenderer.send("min-window");
  };

  const handleClose = () => {
    window.ipcRenderer.send("close-window");
  };

  return (
    <Box height={40} display="flex" alignItems="center" paddingX={1}>
      <Box mr={1} flexShrink={0} className={dragZoneStyle}>
        <Typography variant="subtitle1" style={{ lineHeight: 1 }}>
          <LockOpenOutlined color="inherit" fontSize="inherit" />
        </Typography>
      </Box>
      <Box flexShrink={0} className={dragZoneStyle}>
        <Typography>Site unblocker</Typography>
      </Box>
      <Box className={clsx(dragStyle, dragZoneStyle)} />
      <Box width={56}>
        <Button
          variant="text"
          disableElevation
          size="small"
          fullWidth
          className={buttonStyle}
          onClick={handleMinimize}
        >
          <Minimize />
        </Button>
      </Box>
      <Box width={56}>
        <Button
          variant="text"
          disableElevation
          size="small"
          fullWidth
          className={buttonStyle}
          onClick={handleClose}
        >
          <Close />
        </Button>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  dragZoneStyle: {
    userSelect: "none",
    "-webkit-app-region": "drag",
  },
  dragStyle: {
    flexBasis: "100%",
    height: "100%",
  },
  buttonStyle: {
    minWidth: "unset",
    borderRadius: 0,
  },
}));

export default CustomTitlebar;

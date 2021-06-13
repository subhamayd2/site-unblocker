import {
  Box,
  Divider,
  IconButton,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Brightness2, WbSunny } from "@material-ui/icons";
import { useThemeSwitcher } from "mui-theme-switcher";
import { useStatusContext } from "./StatusContext";

const Statusbar = () => {
  const { started, appVersion } = useStatusContext();
  const { statusbarWrapperStyle } = useStyles({ started });
  const { dark, toggleDark } = useThemeSwitcher();

  return (
    <div className={statusbarWrapperStyle}>
      <Typography>{started ? "Started" : "Stopped"}</Typography>
      <Box mx={2} height="100%">
        <Divider orientation="vertical" light />
      </Box>
      <Typography variant="caption">v.{appVersion}</Typography>
      <Box ml="auto">
        <Tooltip
          placement="top"
          title={`Switch to ${dark ? "Light" : "Dark"}`}
          arrow
        >
          <IconButton onClick={toggleDark}>
            {dark ? <Brightness2 /> : <WbSunny />}
          </IconButton>
        </Tooltip>
      </Box>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  statusbarWrapperStyle: {
    backgroundColor: theme.palette.background.paper,
    height: 50,
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    outline: (props) =>
      `4px solid ${
        props.started ? theme.palette.primary.main : theme.palette.grey.A200
      }`,
  },
}));

export default Statusbar;

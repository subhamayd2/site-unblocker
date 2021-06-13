import {
  Box,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { PowerSettingsNew } from "@material-ui/icons";
import clsx from "clsx";
import { useStatusContext } from "./StatusContext";

const MainToggle = () => {
  const { wrapperStyle, wrapperStoppedStyle } = useStyles();
  const { started, toggling, toggleStatus } = useStatusContext();

  return (
    <Box width="100%" maxWidth={250} height={250}>
      <div
        className={clsx(wrapperStyle, !started && wrapperStoppedStyle)}
        onClick={toggleStatus}
      >
        <div id="b1"></div>
        <div id="b2"></div>
        <div id="b3"></div>
        <Typography
          component="span"
          color={started ? "textPrimary" : "textSecondary"}
        >
          {toggling ? (
            <CircularProgress color="inherit" size={72} />
          ) : (
            <PowerSettingsNew fontSize="inherit" />
          )}
        </Typography>
      </div>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapperStyle: {
    cursor: "pointer",
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > span": {
      fontSize: 150,
      zIndex: 10,
      lineHeight: 0,
      transition: theme.transitions.create(["color"]),
    },

    "& > #b1, & > #b2, & > #b3": {
      position: "absolute",

      background: theme.palette.primary.main,
      borderRadius: "50%",
      boxShadow: theme.shadows[10],
      opacity: 0.4,
      transition: theme.transitions.create([
        "background-color",
        "opacity",
        "transform",
      ]),
      animation: "$breathe 4s infinite alternate",
    },

    "& > #b1": {
      width: "100%",
      height: "100%",
      zIndex: 1,
    },
    "& > #b2": {
      width: "85%",
      height: "85%",
      zIndex: 2,
      animationDelay: "100ms",
      animationDuration: "4100ms",
    },
    "& > #b3": {
      width: "70%",
      height: "70%",
      zIndex: 3,
      animationDelay: "150ms",
      animationDuration: "4200ms",
    },
  },
  wrapperStoppedStyle: {
    "& > #b1, & > #b2, & > #b3": {
      background: theme.palette.grey.A700,
      opacity: 0.1,
      animation: "none",
    },

    "&:hover > #b1": {
      transform: "scale(1.07, 1.07)",
    },
    "&:hover > #b2": {
      transform: "scale(1.04, 1.04)",
    },
    "&:hover > #b3": {
      transform: "scale(1.02, 1.02)",
    },

    "&:hover > span": {
      color: theme.palette.grey.A200,
    },
  },

  "@keyframes breathe": {
    from: {
      transform: "scale(1,1)",
    },
    to: {
      transform: "scale(1.09,1.09)",
    },
  },
}));

export default MainToggle;

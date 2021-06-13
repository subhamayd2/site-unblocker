import {
  Box,
  Chip,
  Divider,
  Paper,
  Slider,
  Typography,
  withStyles,
} from "@material-ui/core";
import { CONFIG_PROFILE, useConfigContext } from "./ConfigContext";
import { useStatusContext } from "./StatusContext";

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
const IOSSlider = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    height: 2,
    padding: "15px 0",
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -6,
    marginLeft: -8,
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000",
    },
  },
  track: {
    height: 4,
  },
  rail: {
    height: 4,
    opacity: 0.5,
    backgroundColor: theme.palette.grey.A200,
  },
  mark: {
    backgroundColor: theme.palette.grey.A200,
    height: 8,
    width: 1,
    marginTop: -2,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
}))(Slider);

const profileDescription = {
  1: "Most compatible mode",
  2: "Better speed for HTTPS",
  3: "Better speed for HTTP and HTTPS",
  4: "Best speed, least compatible",
};

const PreConfigSelection = () => {
  const { config, updateConfig } = useConfigContext();
  const { started } = useStatusContext();

  const profile = config[CONFIG_PROFILE];

  const handleProfileChange = (e, value) => {
    updateConfig(CONFIG_PROFILE, value);
  };

  return (
    <Paper elevation={0}>
      <Box
        width={250}
        display="flex"
        flexDirection="column"
        paddingY={2}
        paddingX={3}
      >
        {!started && (
          <>
            <Typography>Choose a profile</Typography>
            <IOSSlider
              value={profile}
              step={1}
              min={1}
              max={4}
              onChange={handleProfileChange}
            />
          </>
        )}
        <Typography variant="subtitle2">
          Selected profile:&nbsp;&nbsp;&nbsp;
          <Chip label={profile} variant="outlined" />
        </Typography>
        <Box width="100%" my={1}>
          <Divider light />
        </Box>
        <Typography variant="caption">{profileDescription[profile]}</Typography>
      </Box>
    </Paper>
  );
};

export default PreConfigSelection;

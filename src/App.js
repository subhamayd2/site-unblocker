import { Box, makeStyles } from "@material-ui/core";
import ConfigProvider from "./components/ConfigContext";
import Credit from "./components/Credit";
import MainToggle from "./components/MainToggle";
import PreConfigSelection from "./components/PreConfigSelection";
import Statusbar from "./components/Statusbar";
import StatusProvider from "./components/StatusContext";
import CustomTitlebar from "./components/CustomTitlebar";

function App() {
  const { rootWrapperStyle } = useStyles();

  return (
    <ConfigProvider>
      <StatusProvider>
        <div className={rootWrapperStyle}>
          <Box mb={4} width="100%">
            <CustomTitlebar />
          </Box>
          <MainToggle />
          <Box mt={3}>
            <PreConfigSelection />
          </Box>
          <Box mt="auto" mb={1}>
            <Credit />
          </Box>
          <Statusbar />
        </div>
      </StatusProvider>
    </ConfigProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  rootWrapperStyle: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default App;

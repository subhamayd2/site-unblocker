import { Link, Typography } from "@material-ui/core";

const Credit = () => {
  const handleLink = () => {
    window.openExternal("https://github.com/ValdikSS/GoodbyeDPI");
  };

  return (
    <Typography display="inline" variant="caption">
      Made possible by&nbsp;
      <Link component="button" onClick={handleLink}>
        GoodbyeDPI
      </Link>
    </Typography>
  );
};

export default Credit;

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <h3>Manage your personal finance</h3>
        </Grid>
        <Grid item xs={12} sm={6}>
          <form>
            <TextField
              className={classes.textField}
              defaultValue="0.00 GHC "
              style={{ fontSize: "45px", width: "400px" }}
              margin="normal"
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          Income
          <form>
            <TextField
              label="Where is the income from? "
              style={{ width: "400px" }}
              className={classes.textField}
              margin="normal"
              type="text"
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              style={{ margin: "25px" }}
            >
              ADD
            </Button>

            <TextField
              label="How much? "
              style={{ width: "400px" }}
              className={classes.textField}
              margin="normal"
              type="number"
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              style={{ margin: "25px" }}
            >
              ADD
            </Button>
          </form>
          <p>
            Expenditure
            <form>
              <TextField
                label="What are you spending on? "
                style={{ width: "400px" }}
                className={classes.textField}
                margin="normal"
                type="text"
              />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                style={{ margin: "25px" }}
              >
                ADD
              </Button>

              <TextField
                label="How much? "
                style={{ width: "400px" }}
                className={classes.textField}
                margin="normal"
                type="number"
              />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                style={{ margin: "25px" }}
              >
                ADD
              </Button>
            </form>
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          Result
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);

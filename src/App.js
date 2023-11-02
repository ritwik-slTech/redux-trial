import { Alert, Button, Snackbar } from "@mui/material";
import TestComponent from "./TestComponent";
import Form_template from "./templates/Create_form_template";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useStateValue } from "./helpers/commonFunctions";
import { handleOpen, handleClose } from "./slices/toastSlice";
import Loader from "./components/Common/Loader";
import Update_form_template from "./templates/Update_form_template";
import Table_template from "./templates/Table_template";
function App() {
  const dispatch = useDispatch();
  const toastSlice = useStateValue("toastSlice");

  return (
    <div className="App">
      <Table_template />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={toastSlice.open}
        onClose={() => dispatch(handleClose())}
        onClick={() => dispatch(handleClose())}
        key={"top" + "center"}
        autoHideDuration={2000}
      >
        <Alert
          onClose={() => dispatch(handleClose())}
          severity={toastSlice.severity}
          sx={{ width: "100%" }}
        >
          {toastSlice.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;

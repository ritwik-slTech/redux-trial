import { Button, CircularProgress, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import Loader from "../components/Common/Loader";

const Update_form_template = () => {
  const [promisePending, setPromisePending] = useState(false);
  const [screenLoading, setscreenLoading] = useState(false);

  const [formData, setFormData] = useState({});

  function getFormData() {
    // replace the a here
    const a = () => {};

    a.then((res) => {}) //
      .catch((err) => {})
      .finally(() => {
        setscreenLoading(false);
      });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    //  add the checks here and if passed then

    formSubmitApiCall();

    // else return
  }

  function formSubmitApiCall() {
    setPromisePending(true)
      //
      .then((res) => {})
      .catch((err) => {})
      .finally(() => {
        setPromisePending(false);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleFormSubmit}>
          <TextField
            variant="outlined"
            fullWidth
            required
            type="text"
            name="name" // name of the key of the final object
            value={formData.name || ""}
            onChange={handleChange}
          />
          <Button disabled={promisePending} type="submit">
            {promisePending ? <CircularProgress /> : "Submit"}
          </Button>
        </form>
      )}
    </>
  );
};

export default Update_form_template;

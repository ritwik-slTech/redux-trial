import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const Form_template = () => {
  const [promisePending, setPromisePending] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    //  add the checks here and if passed then

    formApiCall();

    // else return
  }

  function formApiCall() {
    setPromisePending(true)
      //
      .then((res) => {})
      .catch((err) => {})
      .finally(() => {
        setPromisePending(false);
      });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        variant="outlined"
        fullWidth
        required
        type="text"
        name="name" // name of the key of the final object
      />
      <Button disabled={promisePending} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form_template;

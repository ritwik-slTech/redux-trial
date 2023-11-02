import React, { useEffect } from "react";
import { setData, deleteData, updateData, addData } from "./slices/testDetails";
import { useDispatch } from "react-redux";
import { useStateValue } from "./helpers/commonFunctions";

const TestComponent = () => {
  const testDetails = useStateValue("testDetails");
  const dispatch = useDispatch();

  async function getTodoData() {
    await fetch("https://jsonplaceholder.typicode.com/todos?_page=1&_limit=2")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch(setData(res));
      })
      .catch((err) => err);
  }
  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <>
      asddsd
      {testDetails.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.id}</span>-<span>{item.number}</span>
            <button onClick={() => dispatch(deleteData(item))}>Delete</button>
            <button
              onClick={() =>
                dispatch(
                  updateData({
                    id: item.id,
                    number: Math.floor(Math.random() * 10),
                  })
                )
              }
            >
              Update
            </button>
          </div>
        );
      })}
      <button
        onClick={() =>
          dispatch(
            addData({
              id: Date.now(),
              number: Math.floor(Math.random() * 10),
            })
          )
        }
      >
        Add data
      </button>
    </>
  );
};

export default TestComponent;

# basic steps after starting this project

### 1. make a slice for another state

### 2. define initial state and some crud methods and export them in actions, and export the state as default

### 3. register the state in the store

### 4. get use useSelector hook to select the particulat state that you need to use

### 5. use the useDispatch hook for the dispatching the functions

# How to start ?

## lets start by making a slice or we can say a state with its own logics

### 1. in slices folder make another slice and follow few steps 1. give it a unique name

### 2. give it a intial state as an object like this

    const initialState = {
                        value: [],
                        };

### 3. now lets give it some reducers

### 4. remember in reducers we will use state,action as arguments

### 5. and only mutate state.value using action.payload

### 6. also dont forget to export the methods as actions and make a default export of reducer according to the syntax in testDetails

## now lets make a store

### 1. simply copy paste the code and every time you make another slice make sure to register it in reducers

### 2. now as we have shown in the index.js we will need a provider so wrap it up or copy the syntax and change the paths etc.

## Let's Use it now!

### 1. lets import this

    import { useDispatch, useSelector } from "react-redux";
    import { setData, deleteData, updateData, addData } from "./slices/testDetails";

### 2. and write this to use it like a normal state

    const testDetails = useSelector((state) => state.testDetails.value);

### 3. and write this to use the methods we have specified in the slice

    const dispatch = useDispatch();

### 4. we can use it like this, and whatever we will put inside the inner function of dispatch the arguments it will be in action.payload

    dispatch(deleteData(item))

## And viola we are done

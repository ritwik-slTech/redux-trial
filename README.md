# How to start ?

## Lets start by making a slice or we can say a state with its own logics

### 1. In slices folder make another slice and follow few steps 1. give it a unique name

### 2. Give it a intial state as an object like this

    const initialState = {
                        value: [],
                        };

### 3. Now lets give it some reducers

### 4. Remember in reducers we will use state,action as arguments

### 5. And only mutate state.value using action.payload

### 6. Also dont forget to export the methods as actions and make a default export of reducer according to the syntax in testDetails

## Now lets make a store

### 1. Simply copy paste the code and every time you make another slice make sure to register it in reducers

### 2. Sow as we have shown in the index.js we will need a provider so wrap it up or copy the syntax and change the paths etc.

## Let's Use it now!

### 1. Lets import this

    import { useDispatch, useSelector } from "react-redux";
    import { setData, deleteData, updateData, addData } from "./slices/testDetails";

### 2. And write this to use it like a normal state

    const testDetails = useSelector((state) => state.testDetails.value);

### 3. And write this to use the methods we have specified in the slice

    const dispatch = useDispatch();

### 4. We can use it like this, and whatever we will put inside the inner function of dispatch the arguments it will be in action.payload

    dispatch(deleteData(item))

## And viola we are done

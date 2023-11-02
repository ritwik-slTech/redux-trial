// this is for common single line functions

import { useDispatch, useSelector } from "react-redux";

export function useStateValue(selectedStateString) {
  return useSelector((state) => state[selectedStateString].value);
}

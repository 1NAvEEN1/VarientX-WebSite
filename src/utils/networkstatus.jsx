import { showAlertMessage } from "../app/alertMessageController";
import  store  from "../../src/app/store";
import { changeState } from "../reducers/networkStatusSlice";

//import { ALERT_tYPES } from "./constants";

const NetworkStatus = () => {
  window.addEventListener("load", () => {
    navigator.onLine
      ? store.dispatch(
          changeState({
            status: "Online",
          })
        )
      : store.dispatch(
          changeState({
            status: "Offline",
          })
        );
  });

  window.addEventListener("online", () => {
  

    showAlertMessage({
      message: "You are online back!",
      type: "success",
    });
  //  alert("You are online back!");
  });

  window.addEventListener("offline", () => {
    showAlertMessage({
      message: "Lost network connection!",
      type: "error",
    });
  //  alert("Lost network connection!");
  });

  return <div></div>;
};

export default NetworkStatus;

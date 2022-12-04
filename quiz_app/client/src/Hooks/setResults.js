import * as Actions from "../redux/result_reducer";
import { PostServerData } from "../helper/helper.js";
export const pushAnswers = (result) => async (dispatch) => {
  try {
    await dispatch(Actions.pushResult(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateResultHook = (index, checked) => async (dispatch) => {
  try {
    dispatch(Actions.updateResult(index, checked));
  } catch (error) {
    console.log(error);
  }
};

//insert user data
export const usePublishResult = (resultData) => {
  const { result, username } = resultData;
  (async () => {
    try {
      if (result !== [] && !username) throw new Error("Couldnt Get Result");
      await PostServerData(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,
        resultData,
        (data) => data
      );
    } catch (error) {
      console.log(error);
    }
  })();
};

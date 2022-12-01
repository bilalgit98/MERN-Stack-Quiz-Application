import * as Actions from "../redux/result_reducer";

export const pushAnswers = (result) => async (dispatch) => {
  try {
    await dispatch(Actions.pushResult(result));
  } catch (error) {
    console.log(error);
  }
};

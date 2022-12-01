import * as Actions from "../redux/result_reducer";

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

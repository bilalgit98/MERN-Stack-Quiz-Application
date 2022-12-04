import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import data, { answers } from "../database/data";
import { GetServerData } from "../helper/helper";
import * as Actions from "../redux/question_reducer";

export const useFetchQuestion = () => {
  const dispatch = useDispatch();

  const [getData, setData] = useState({
    Loading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setData((state) => ({ ...state, Loading: true }));

    //fetch data
    (async () => {
      try {
        const [{ questions, answers }] = await GetServerData(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,
          (data) => data
        );
        console.log(questions, answers);

        if (questions.length > 0) {
          setData((state) => ({ ...state, Loading: false }));
          setData((state) => ({ ...state, apiData: { questions, answers } }));

          //dispatch action
          dispatch(Actions.startExamAction({ question: questions, answers }));
        } else {
          throw new Error("There are no questions available");
        }
      } catch (error) {
        setData((state) => ({ ...state, Loading: false }));
        setData((state) => ({ ...state, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setData];
};

export const MoveAction = () => async (dispatch) => {
  try {
    dispatch(Actions.moveToNextQuestion());
  } catch (error) {
    console.log(error);
  }
};

export const MovePrevAction = () => async (dispatch) => {
  try {
    dispatch(Actions.moveToPrevQuestion());
  } catch (error) {
    console.log(error);
  }
};

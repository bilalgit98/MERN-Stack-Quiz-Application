import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import data from "../database/data";
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
        let question = await data;

        if (question.length > 0) {
          setData((state) => ({ ...state, Loading: false }));
          setData((state) => ({ ...state, apiData: question }));

          //dispatch action
          dispatch(Actions.startExamAction(question));
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

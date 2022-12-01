import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function attemptsNumber(result) {
  return result.filter((r) => r !== undefined).length;
}

function earnPointNumber(result, answer, points) {
  return result
    .map((element, i) => answer[i] === element)
    .filter((i) => i)
    .map((i) => points)
    .reduce((prev, curr) => prev + curr, 0);
}

function flagResults(totalPoints, earnPoints) {
  return (totalPoints * 50) / 100 < earnPoints;
}

function CheckUser({ children }) {
  const auth = useSelector((state) => state.results.userId);
  return auth ? children : <Navigate to={"/"} replace="true"></Navigate>;
}

export default attemptsNumber;
export { earnPointNumber, flagResults, CheckUser };

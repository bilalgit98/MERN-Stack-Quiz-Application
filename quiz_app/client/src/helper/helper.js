import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

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

async function GetServerData(url, callback) {
  const data = await (await axios.get(url))?.data;
  console.log(data);
  return callback ? callback(data) : data;
}

async function PostServerData(url, result, callback) {
  const data = await (await axios.get(url, result))?.data;
  return callback ? callback(data) : data;
}

export default attemptsNumber;
export { earnPointNumber, flagResults, CheckUser, GetServerData };

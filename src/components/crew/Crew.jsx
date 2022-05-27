import { useReducer, useState } from "react";
import DisplayCrew from "../home/DisplayCrew";
import DisplaySearchSort from "./DisplaySearchSort";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import useSortableList from "./useSortableList";

const Crew = ({ crewData, updateCrewLike }) => {
  let initialState = {
    type: "",
    descr: "",
  };

  const reducer = (state, { field, value }) => {
    return {
      ...state,
      [field]: value,
    };
  };

  const [filteredCrew, setFilteredCrew] = useState([]);
  const { crew, requestSort, sortConfig } = useSortableList(filteredCrew);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { descr, firstName, lastName } = state;
  const [valid, setValid] = useState(true);
  const [noResult, setNoResult] = useState();

  const getIcon = (name) => {
    if (!sortConfig) {
      return;
    }
    const arrow = (direc) => {
      return direc === "ascending" ? (
        <FontAwesomeIcon icon={faSortUp} />
      ) : (
        <FontAwesomeIcon icon={faSortDown} />
      );
    };
    return sortConfig.key === name ? arrow(sortConfig.direction) : undefined;
  };

  const onChange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let queryIndex = 0;
    if (state.type === "Last Name") {
      queryIndex = 1;
    }
    const select = document.getElementById("search-form-select");
    if (!state.type || state.type === "empty") {
      select.classList.add("select-warning");
      setValid(false);
      return;
    } else {
      select.classList.remove("select-warning");
    }
    setValid(true);
    setFilteredCrew(() => formatString(queryIndex));
  };

  const formatString = (queryIndex) => {
    const res = crewData.filter((item) => {
      let normalize = item.name;
      if (!containsSpecialChars(state.descr)) {
        normalize = item.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      }
      return normalize
        .split(" ")
        .filter((i) => !i.includes("."))
        [queryIndex].toLowerCase()
        .includes(state.descr.toLowerCase());
    });
    if (res.length === 0) {
      setNoResult(true);
    } else {
      setNoResult(false);
    }
    return res;
  };

  const containsSpecialChars = (str) => {
    const specialChars = /[óáéíúýòàèìùôâêîûöäëïüÿçñæœ]/;
    return specialChars.test(str);
  };

  const showAllCrew = () => {
    setValid(true);
    setNoResult(false);
    setFilteredCrew(crewData);
    state.descr = "";
    const select = document.getElementById("search-form-select");
    select.classList.remove("select-warning");
  };

  return (
    <main>
      <DisplaySearchSort
        valid={valid}
        handleSubmit={handleSubmit}
        onChange={onChange}
        firstName={firstName}
        lastName={lastName}
        descr={descr}
        showAllCrew={showAllCrew}
        getIcon={getIcon}
        requestSort={requestSort}
        crewData={crew}
        noResult={noResult}
      />
      <DisplayCrew crewData={crew} updateCrewLike={updateCrewLike} />
    </main>
  );
};

export default Crew;

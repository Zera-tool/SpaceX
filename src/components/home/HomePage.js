import { useState } from "react";
import DisplayCompany from "./DisplayCompany";
import DisplayCrew from "./DisplayCrew";

const HomePage = ({ companyData, crewData, updateCrewLike }) => {
  const [ limit, setLimit ] = useState(3)
    
  const increaseLimit = () => {
    setLimit(() => limit+3)
  }

  const getAge = (founded) => {
	    var currentDate = new Date();
      var currentYear = currentDate.getFullYear();
      return currentYear - founded;
  }
    
    return( 
      <main>
        <DisplayCompany companyData={companyData} getAge={getAge}/>
        <DisplayCrew crewData={crewData} limit={limit} increaseLimit={increaseLimit} updateCrewLike={updateCrewLike} />
      </main>
    )
}

export default HomePage
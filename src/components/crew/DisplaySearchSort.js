import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const DisplaySearchSort = ({
    valid,
    handleSubmit,
    onChange,
    firstName,
    lastName,
    descr,
    showAllCrew,
    requestSort,
    getIcon,
    crewData,
    noResult
    }) => {

    return(
        <section>
			<form onSubmit={handleSubmit}>
				<div className="form-container search-bar filter-buttons">
                <label htmlFor="search-form-select"></label>
                    <div className={"select"}>
                        <select id={"search-form-select"} name="type" onChange={onChange} required>
                            <option value={"empty"}>Select</option>
                            <option value={firstName}>First Name</option>
                            <option value={lastName}>Last Name</option>
                        </select>
                    </div>
                    <input type="text" name="descr" value={descr} onChange={onChange} placeholder={"search"} required/>
                    <button className={"search-button"} type="submit" value="Submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button> 
				</div>
			</form>

            <div className="center-div">
                {noResult && valid ? <div className="warning">...no crew found by that name...</div> : null}
                {!valid ? <div className="warning">...please select a search option...</div> : null}
                <button className="submit-button" onClick={showAllCrew}>Show All Crew</button>
            </div>

            {crewData[1] ?
                <div className="sort-list">
                    <button className="sort-button" onClick={() => requestSort('name')}
                    >Sort By Name {getIcon('name')}
                    </button>
                    <button className="sort-button" onClick={() => requestSort('agency')}
                    >Sort By Agency {getIcon('agency')}
                    </button>
                </div>
            : null}
        </section>
    )
}

export default DisplaySearchSort
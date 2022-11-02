import React, {useState} from 'react';
import { STUDENTS } from '../studentsList';
import Resident from './Resident';
import Search from './Search';
import Error from './Error';


// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function ResidentsList() {

	const [residentList, setResidentList] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

    const addResident = resident =>{
        if(!resident.studentName || /^\s*$/.test(resident.studentName)){
            return;
        }

			let studentIndex;
			let stdValidy = [];
			
			for(let index = 0; index < STUDENTS.length; index++){	
				if(resident.studentName.toLowerCase() === STUDENTS[index].name.toLowerCase()){
					studentIndex = index;
					stdValidy = [STUDENTS[index].validityDate, resident.joiningDate];				
				}
			};
			if(studentIndex === undefined){
				setErrorMessage('Sorry '+resident.studentName +' is not a verified Student')
			}
			else if(resident.studentName.toLowerCase() === STUDENTS[studentIndex].name.toLowerCase() && checkValidity(stdValidy[0], stdValidy[1]) === false){
				const newResidents = [resident, ...residentList];
				setResidentList(newResidents);
			}

		else{
			setErrorMessage('Sorry, '+resident.studentName+'`s Validity has expired')
		}
	}

    const completeResident = id =>{
        let updatedResidentList = residentList.map(resident => {
            if(resident.id === id) {
                resident.isComplete = !resident.isComplete;
            }
            return resident;
        });
        setResidentList(updatedResidentList)
    };

	return (
		<div className="pa-10 mt-10 w-75">
			<Search onSubmit = {addResident}/>
			
			<Error  errorMessage = {errorMessage} />
			<div className="font-weight-bold text-center">Residents List</div>
			<Resident residentList={residentList} completeResident = {completeResident}/>
		</div>
	);
}

export default ResidentsList;

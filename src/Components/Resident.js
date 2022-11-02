import React, { useState } from 'react';

function Resident({residentList, completeResident}) {
    
    return residentList.map((resident, index) => (
        
		<div className="pa-10 w-75" key={index}>
			<ul className="styled w-50 mx-auto" key= {resident.id} data-testid="residentsNameList">
				<li key= {resident.id} className="slide-up-fade-in" >
					{resident.studentName}
				</li>
			</ul>
		</div> 
    )); 
}

export default Resident;
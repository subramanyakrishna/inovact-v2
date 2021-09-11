import React, {useState} from 'react'
import LeftBottom from '../../feed/components/leftnav/LeftBottom';
import PeopleToKnowProfiles from './PeopleToKnowProfiles';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { EventOutlined } from '@material-ui/icons';

function PeopleYouMayKnow() {
    const image = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    const [showFilter, setShowFilter] = useState(false);
    const [currentFilter, setCurrentFilter] = useState("Roles");

    const handleChangeFilter = (event:any)=>{
        const filterOption = event.target.getAttribute("data-value");
        setCurrentFilter(filterOption);
        setShowFilter(false);
    }

    const handleFilterShow = () => {
        setShowFilter(!showFilter);
    }

    return (
        <div>
            <div className="line-separation">   
                <hr  className="line-separation-line" style={{}}/>
                <div>
                    <span>Filter:  <label onClick={handleFilterShow}>{`(${currentFilter})`}<span>{showFilter ? <ChevronRightIcon/>: <ExpandMoreIcon/>}</span></label></span>
                    {
                        showFilter &&
                        <div className="line-separation-filter-parameters">
                            <label data-value="Roles" onClick={handleChangeFilter}>Roles</label>
                            <label data-value="Organization" onClick={handleChangeFilter}>Organization</label>
                            <label data-value="Skills" onClick={handleChangeFilter}>Skills</label>
                        </div> 
                        
                    }
                </div>
            </div>
            <div className="people-you-may-know">
                <div className="people-you-may-know-title">
                    <p>People you may know</p>
                </div>
                <div>
                    <div className="people-you-may-know-profiles">
                        <PeopleToKnowProfiles/>
                        <PeopleToKnowProfiles/>
                        <PeopleToKnowProfiles/>
                        <PeopleToKnowProfiles/>
                        <PeopleToKnowProfiles/>
                        <PeopleToKnowProfiles/>
                        <PeopleToKnowProfiles/>
                        <PeopleToKnowProfiles/>
                        <PeopleToKnowProfiles/>
                        <PeopleToKnowProfiles/>
                    </div>
                </div>
            </div>
        </div>
               
    )
}

export default PeopleYouMayKnow;

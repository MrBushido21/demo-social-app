import React, { useEffect, useState } from "react";
import { updateStatusThunk } from "../../redux/profileReducer";

 function ProfileStatusWithHooks (props) {
    const [editMode, setEditMode] = useState(false)
    const [inputStatus, setInputStatus] = useState(props.status)
    
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunk(inputStatus)
    }

    useEffect(() => {
        if(inputStatus !== props.status) {
            setInputStatus(props.status)
        }
    }, [props.status])

    return (
        <div className="profile-status">
            <span>Status:</span>
            {
            !editMode
            ?
                <div style={{marginTop: "10px", fontSize: "16px", fontStyle: "italic"}}>
                    <span onDoubleClick={activateEditMode}>{props.status || "DoubleClick to type.."}</span>
                </div>
            
            :
                <div>
                    <input 
                    value={inputStatus} 
                    onChange={(e) => {setInputStatus(e.currentTarget.value)}} 
                    onBlur={deactivateEditMode} 
                    autoFocus={true}
                    />
                    
                </div>
            }

        </div>
    );
}
export default ProfileStatusWithHooks;
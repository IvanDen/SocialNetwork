import React, {useState} from 'react';
import Class from './Profileinfo.module.css';
import Profileinfo from "./Profileinfo";



const ProfileStatusWithHooks = (props) => {

    // let stateWithSetState = useState(false);// useState HOC (Higher order component)
    // let editMod = stateWithSetState[0];// false inside
    // let setEditMod = stateWithSetState[1];// The function that changes the first[0] value
    // destructuring assignment - [a, b] = [10, 20]
    let [editMod, setEditMod] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMod(true);
    }

    const deActivateEditMode = () => {
        setEditMod(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMod &&
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {props.status || "------"}
                    </span>
                </div>
            }
            {editMod &&
                <div>
                    <input
                        autoFocus={true}
                        onBlur={deActivateEditMode}
                        onChange={onStatusChange}
                        value={status}/>
                </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;
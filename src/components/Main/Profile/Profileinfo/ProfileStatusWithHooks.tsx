import React, {useState, useEffect} from 'react';
import Class from './Profileinfo.module.css';
import {AppStateType} from "../../../../redux/redux-store";

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
    isOwner: boolean
}


const ProfileStatusWithHooks:  React.FC<PropsType> = (props) => {

    // let stateWithSetState = useState(false);// useState HOC (Higher order component)
    // let editMod = stateWithSetState[0];// false inside
    // let setEditMod = stateWithSetState[1];// The function that changes the first[0] value
    // destructuring assignment - [a, b] = [10, 20]
    let [editMod, setEditMod] = useState<boolean>(false);
    let [status, setStatus] = useState<string>(props.status);
    // useEffect monitor the state of the second parameter and if it changes, then it will re-direct the component.

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMod(true);
    }

    const deActivateEditMode = () => {
        setEditMod(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {!editMod &&
                <div className={Class.valMainInfo}>{
                    props.isOwner
                    ? <span onDoubleClick={activateEditMode}>
                            {props.status || "------"}
                        </span>
                    : <span>{props.status || "------"}</span>
                }
                </div>
            }
            {editMod &&
                <div>
                    <input
                        type="text"
                        autoFocus={true}
                        onBlur={deActivateEditMode}
                        onChange={onStatusChange}
                        value={status}/>
                </div>
            }
        </>
    )

}

export default ProfileStatusWithHooks;

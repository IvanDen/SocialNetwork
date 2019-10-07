import React from 'react';
import Class from './Profileinfo.module.css';
import Profileinfo from "./Profileinfo";



class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        // асинхронный запрос поменять спан на импут, обновить стейт
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode() {
        // асинхронный запрос поменять спан на импут, обновить стейт
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
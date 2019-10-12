import React from 'react';
import Class from './Profileinfo.module.css';
import Profileinfo from "./Profileinfo";



class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        // асинхронный запрос поменять спан на импут, обновить стейт
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        // асинхронный запрос поменять спан на импут, обновить стейт
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
           status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
import React from 'react';




class ProfileStatus extends React.Component {

    state = {
        editMode: true,
        status: this.props.status
    }

    activateEditMode = () => {
        // asynchronous request change spawn to input, update state
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        //asynchronous request change spawn to input, update state
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
    // life cycle method componentDidUpdate
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
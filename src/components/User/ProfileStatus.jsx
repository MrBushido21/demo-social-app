import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
            status: this.props.status
        })
        this.props.updateStatusThunk(this.state.status)
    }

    statusChanged = (e) => {
        this.setState({
            status: e.currentTarget.value
        })  
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className="profile-status">
                <h5>Status:</h5>
                {!this.state.editMode
                    ?<div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "Click to type.."}</span>
                    </div>
                    : <div>
                        <input onChange={this.statusChanged} autoFocus={true} onBlur={this.deactivateEditMode}
                        value={this.state.status} />
                    </div>
                }

            </div>
        );
    }
}
export default ProfileStatus;
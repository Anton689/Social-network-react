import React, {ChangeEvent} from 'react';


export class ProfileStatus extends React.Component<any, any> {

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
            editMode: false
        })
        this.props.updateStatus(this.state.status);

    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div><span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || '-----'}</span></div>
                    : <div><input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode.bind(this)}
                                  value={this.state.status}/></div>
                }

            </div>
        )
    }
}
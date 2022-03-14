import React from 'react';
import s from './ProfileInfo.module.css';
import {AppStateType} from '../../../redux/reduxStore';


export class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState( {
            editMode: true
        })

    }
    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        })

    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div><span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span></div>
                    : <div><input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/></div>
                }

            </div>
        )
    }
}
import React, {ChangeEvent, useState} from 'react';

type ProfileStatusWithHooksType = {
    status: any
    updateStatus: any

}

export const ProfileStatusWithHooks = (props: ProfileStatusWithHooksType) => {

     const [editMode, setEditMode]= useState(false)
     const [status, setStatus]= useState(props.status)

    const activateMode = () => {
         setEditMode(true)
    }

    const deActivateMode = ()=> {
         setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusOnchange = (e: ChangeEvent<HTMLInputElement>)=> {
         setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&

                <div>
                    <span onDoubleClick={activateMode}>{props.status || '-----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input value={status} onChange={onStatusOnchange} autoFocus={true} onBlur={deActivateMode}
                    /></div>
            }

        </div>
    )
}
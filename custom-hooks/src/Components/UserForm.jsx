import React from 'react'
import useInput from '../Hooks/useInput'

function UserForm() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submit = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label>First Name: </label>
                    <input
                        {...bindFirstName}
                        type="text" />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input
                        {...bindLastName}
                        type="text" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm
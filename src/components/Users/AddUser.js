import { useState } from 'react';

import Card from '../UI/Card.js'
import Button from '../UI/Button.js'

import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) return;
        if (+enteredAge < 1) return;

        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="">Username</label>
                <input id="userName" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor="">Age (Years)</label>
                <input id="age" type="text" value={enteredAge} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;
import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000)

    const incrementAge = useCallback(() => {
        setAge(prevAge => prevAge + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(prevSalary => prevSalary + 1)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text='Age' count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent
import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// This first method was taken from 
// https://www.geeksforgeeks.org/how-to-generate-random-number-in-react-js/#

const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() 
            * (max - min + 1)) + min;
};

const singleDigitMath = () => {
    const left = randomNumberInRange(0, 9)
    const right = randomNumberInRange(0, 9)
    const question = left + " x " + right
    const answer = left * right
    return [question, answer]
}

const divideByFive = () => {
    const answer = randomNumberInRange(0, 200)
    const numerator = answer * 5
    const question = numerator + ' / 5'
    return [question, answer]
}

const doublingHalving = () => {
    let evenIsLeft = false
    let even = randomNumberInRange(0, 99)
    if (even % 2 !== 0) {
        even += 1
        evenIsLeft = true
    }
    let fives = randomNumberInRange(0, 20) * 5
    let question
    if (evenIsLeft) {
        question = even + ' x ' + fives
    } else {
        question = fives + ' x ' + even
    }
    const answer = even * fives

    return [question, answer]
}

const squaringNumbers = () => {
    const num = randomNumberInRange(1,9) * 10 + randomNumberInRange(-2,2)
    const question = num + "^2"
    const answer = num**2
    return [question, answer]
}

const getProblem = () => {
    const selectedProblemType = randomNumberInRange(0, 3)
    switch(selectedProblemType) {
        case 0:
            return singleDigitMath()
        case 1:
            return divideByFive()
        case 2:
            return doublingHalving()
        case 3:
            return squaringNumbers()
        default:
            return ['Error', 'Error']
    }
}

class MentalMath extends React.Component {
    constructor() {
        super()
        this.state = {
            problem: getProblem(),
            response: '',
            isCorrect: '',
            value: '',
            isAnswered: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNewQuestion = this.handleNewQuestion.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleNewQuestion() {
        this.setState({
            problem: getProblem(),
            isAnswered: false,
            value: '',
        })
    }

    handleSubmit() {
        const { value, problem } = this.state
        // eslint-disable-next-line
        if (value == problem[1]) {
            this.setState({
                isCorrect: 'Correct',
                isAnswered: true,
            })
        } else {
            this.setState({
                isCorrect: 'Incorrect',
                isAnswered: true,
            })
        }
    }
  
    render () {
        return(
            <Stack spacing={2} direction="column">
                <Button variant="outlined" onClick={this.handleNewQuestion}>New Question</Button>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    align="center">
                    {this.state.problem[0]}
                </Typography>
                <TextField
                    id="outlined-number"
                    label="Answer"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <Button 
                    variant="contained"
                    onClick={this.handleSubmit}
                    disabled={this.state.value.length === 0}>
                    Check answer
                </Button>
                {this.state.isAnswered && 
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        align="center">
                        {this.state.isCorrect}
                    </Typography>
                }
             </Stack>
        )
    }
};
  
export default MentalMath;
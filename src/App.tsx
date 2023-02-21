import React, {useState} from 'react';
import styles from './App.module.css';
import Box from './components/Box/Box';

export type boxType = 'counter' | 'setCounter';
export type displayType = 'enter values and press "set"'
	| 'Incorrect value!'
	| number;
export type disabledType = {
	openSet: boolean
	set: boolean
	inc: boolean
	reset: boolean
}
export type errorType = {
	start: boolean
	max: boolean
}

function App() {
	const [startValue, setStartValue] = useState(0);
	const [maxValue, setMaxValue] = useState(5);
	const [display, setDisplay] = useState<displayType>(0);
	const [disabled, setDisabled] = useState<disabledType>({
		openSet: true,
		set: false,
		inc: false,
		reset: true
	});
	const [errorInputValue, setErrorInputValue] = useState<errorType>({
		start: false,
		max: false,
	});
	const [typeBox, setTypeBox] = useState<boxType>('setCounter');

	return (
		<div className={styles.App}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.col}>
						{
							typeBox === 'counter' ? (
								<Box
									type={'setCounter'}
									disabled={disabled}
									setDisabled={setDisabled}
									startValue={startValue}
									maxValue={maxValue}
									setStartValue={setStartValue}
									setMaxValue={setMaxValue}
									display={display}
									setDisplay={setDisplay}
									inputsValue={errorInputValue}
									setInputsValue={setErrorInputValue}
								/>
							) : (
								<Box
									type={'counter'}
									disabled={disabled}
									setDisabled={setDisabled}
									startValue={startValue}
									maxValue={maxValue}
									setStartValue={setStartValue}
									setMaxValue={setMaxValue}
									display={display}
									setDisplay={setDisplay}
									inputsValue={errorInputValue}
									setInputsValue={setErrorInputValue}
								/>
							)
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

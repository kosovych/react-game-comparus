import { useContext } from 'react';
import { capitalize } from 'lodash';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { State } from '../../context/GameStateProvider/state/types';
import { GameDispatchContext, GameStateContext } from '../../context/GameStateProvider';
import { ACTION_ENUM } from '../../context/GameStateProvider/state';
import { SCORE_TO_WIN } from '../../constants';


const WinModal = () => {
	const state = useContext<State | null>(GameStateContext);
	const dispatch = useContext(GameDispatchContext);
	const isGameFinished = state?.score.human === SCORE_TO_WIN || state?.score.computer === SCORE_TO_WIN;
	const winner = state?.score.human === SCORE_TO_WIN ? 'human' : 'computer';

	const startNewGame = () => dispatch({ type: ACTION_ENUM.START_NEW_GAME });

	return (
		<Dialog
			open={isGameFinished}
			keepMounted
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle>{`${capitalize(winner)} won this round!`}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					Ready for the new round?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={startNewGame}>Try Again</Button>
			</DialogActions>
		</Dialog>
	);
};

export default WinModal;
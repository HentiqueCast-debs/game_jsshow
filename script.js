			if (state.fx) {
				burst(ball.x, ball.y, 6);
				sparkLine(ball.x, ball.y, -220, ball.vy * 0.05, 6);
				shock(4);
			}
			beep("hit");
		}
	}

	if (ball.x < -60) {
		score.R++;
		sR.textContent = score.R;
		rally = 0;
		if (state.fx) {
			burst(W / 2, H / 2, 10);
			shock(6);
		}
		beep("score");
		checkWinOrReset(-1);
	}
	if (ball.x > W + 60) {
		score.L++;
		sL.textContent = score.L;
		rally = 0;
		if (state.fx) {
			burst(W / 2, H / 2, 10);
			shock(6);
		}
		beep("score");
		checkWinOrReset(1);
	}

	updateParticles(dt);
	draw();
}

function checkWinOrReset(nextDir) {
	if (score.L >= score.toWin) {
		endGame(true);
		return;
	}
	if (score.R >= score.toWin) {
		endGame(false);
		return;
	}
	resetRound(nextDir);
}

function endGame(playerWon) {
	state.running = true;
	state.paused = true;
	setPressed(btnPause, true);
	setPauseIcon();

	overlayImg.src = END_IMG;

	const title = playerWon ? "YOU WIN" : "AI WINS";
	const stats = `FINAL SCORE: ${score.L} - ${score.R}`;
	const msg = playerWon
		? "NICE WORK. RUN IT BACK AND PUSH FOR A PERFECT GAME."
		: "CLOSE. YOU CAN BEAT IT. STAY CALM AND USE THE EDGES OF THE PADDLE.";

	showOverlay(title, `${stats}<br><br>${msg}`);

	if (playText) playText.textContent = "PLAY AGAIN";
	beep("win");
}

resize();
paddle.y = H / 2;
paddle.targetY = H / 2;
ai.y = H / 2;
ai.memoryY = H / 2;

setSoundIcon();
setFXIcon();
setPauseIcon();

overlayImg.src = INTRO_IMG;
setIntro(true);
overlay.classList.remove("hidden");
if (playText) playText.textContent = "START";

requestAnimationFrame(update);
		


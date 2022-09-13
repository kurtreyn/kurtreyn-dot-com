import React, { useState, useEffect } from 'react';
import Button from '../../Button';
import './breakingrecords.css';

export default function BreakingRecords({}) {
  const [disable, setDisable] = useState(false);
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(index + 1);
  };

  const handlePrevious = () => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  };

  let scoresArray = [10, 5, 20, 20, 4, 5, 2, 25, 1];

  let highLowScores = [];
  let highScore;
  let highScoreCount = 0;
  let lowScore;
  let lowScoreCount = 0;
  let games;
  let score = scoresArray[index];

  // FIRST HIGH SCORES LOOP
  // 1: index: 0, score: 10
  // 2: index: 1, score: 5
  // 3: index: 2, score: 20;
  // 4: index: 3, score: 20
  // 5: index: 4, score: 4
  // 6: index: 5, score: 5
  // 7: index: 6, score: 2
  // 8: index: 7, score: 25 highScore: 25, highScoreCount: 2
  // 9: index: 8, score: 1

  // SECOND LOW SCORES LOOP
  // 1: index: 0, score: 10, highScore: 10
  // 2: index: 1, score: 5, highScore: 10
  // 3: index: 2, score: 20, highScore: 10 > highScore: 20, highScoreCount: 1
  // 4: index: 3, score: 20, highScore: 20
  // 5: index: 4, score: 4, highScore: 20
  // 6: index: 5, score: 5, highScore: 20
  // 7: index: 6, score: 2, highScore: 20
  // 8: index: 7, score: 25, highScore:20 > highScore: 25, highScoreCount: 2
  // 9: index: 8, score: 1

  function breakingRecordsFunction(scores) {
    highLowScores = [];
    highScore = scores[0];
    highScoreCount = 0;
    lowScore = scores[0];
    lowScoreCount = 0;
    games = scores.length;

    for (let score of scores) {
      console.log(`score is: ${score}, highScore: ${highScore}`);
      if (score > highScore) {
        highScore = score;
        console.log(`'highScore NOW: ${highScore}`);
        highScoreCount++;
        console.log(`'highScoreCount: ${highScoreCount}`);
      }
      console.log(`~~~~~~~ END HIGH SCORES LOOP ~~~~~~~~~~`);
    }

    for (let score of scores) {
      if (score < lowScore) {
        console.log(`score: ${score} lowScore: ${lowScore}`);
        lowScore = score;
        console.log(`'lowScore NOW: ${lowScore}`);
        lowScoreCount++;
        console.log(`'lowScoreCount: ${lowScoreCount}`);
      }
      console.log(`~~~~~~~ END LOW SCORES LOOP ~~~~~~~~~~`);
    }
    highLowScores.push(highScoreCount);
    highLowScores.push(lowScoreCount);
    console.log('highLowScores', highLowScores);
    return highLowScores;
  }

  console.log('INDEX:', index);
  // console.log('highLowScores', highLowScores);
  // console.log('highScore', highScore);
  // console.log('highScoreCount', highScoreCount);
  // console.log('lowScore', lowScore);
  // console.log('lowScoreCount', lowScoreCount);

  const startFunction = () => {
    setStarted(true);
    breakingRecordsFunction(scoresArray);
  };

  return (
    <div className="function-container">
      <div className="function-left-side">
        <code className="function-name">
          function breakingRecords(scores)&#123;
        </code>
        <code className="function-body">
          <br />
          <span>let highLowScores = &#91;{highLowScores}&#93;</span>
          <span>let highScore = scores&#91;{highScore}&#93;</span>
          <span>let highScoreCount = {highScoreCount}</span>
          <span>let lowScore = scores&#91;{lowScore}&#93;</span>
          <span>let lowScoreCount = {lowScoreCount}</span>
          <span>let games = scores.length</span>

          <br />
          <span>for (let score of scores)&#123; </span>
          <span>
            if(score:
            <span className="variable-text">{score} </span>
            &#62; highScore:
            <span className="variable-text">{highScore}</span>
            )&#123;
          </span>
          <span>
            highScore = score
            <br />
            highScoreCount++
          </span>
          <span style={{ marginLeft: '5px' }}> &#125;</span>
          <span> &#125;</span>

          <br />
          <span>for (let score of scores)&#123; </span>
          <span>if(score &#60; highScore)&#123;</span>
          <span>
            lowScore = score
            <br />
            lowScoreCount++
          </span>
          <span style={{ marginLeft: '5px' }}> &#125;</span>
          <span> &#125;</span>

          <br />
          <span>highLowScores.push(highScoreCount)</span>
          <span>highLowScores.push(lowScoreCount)</span>
          <span>return highLowScores</span>
        </code>
        <code className="function-close">&#125;</code>
        <br />
        <code>let scoresArray = &#91;10, 5, 20, 20, 4, 5, 2, 25, 1&#93;</code>
      </div>

      <div className="function-right-side">
        <div className="control-buttons">
          {!started && (
            <Button label="Start" disabled={disable} onClick={startFunction} />
          )}
          {started && (
            <Button
              label="Previous"
              disabled={disable}
              onClick={handlePrevious}
            />
          )}
          {started && (
            <Button label="Next" disabled={disable} onClick={handleNext} />
          )}
        </div>
      </div>
    </div>
  );
}

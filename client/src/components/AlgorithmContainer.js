import React, { useState } from 'react';
import Button from './Button';
import BreakingRecords from './algorithms/breakingrecords/breakingrecords';
import '../styles/algorithmContainerStyle.css';

export default function AlgorithmContainer() {
  return (
    <div className="algorithm-container">
      <div className="algorithms-left-side">
        <BreakingRecords />
      </div>
      <div className="algorithms-right-side">
        {/* <div className="control-buttons">
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
        </div> */}
      </div>
    </div>
  );
}

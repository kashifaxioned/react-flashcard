import React, { useState } from "react";
import Card from "./component/Card";
import topics from "./reactTopics";

function App() {

  const [topicId, setTopicId] = useState(0)

  const handlePrev = () => {
    if(topicId === 0) {
      setTopicId(11)
    }else {
      setTopicId(prev => prev - 1)
    }
  }

  const handleNext = () => {
    if(topicId === 11) {
      setTopicId(0)
    }else {
      setTopicId(prev => prev + 1)
    }
  }

  const topic = topics[topicId]

  return (
    <div className="App">
      <div className="header">
        <div className="wrapper">
          <h1 className="app-name">react flashcard</h1>
        </div>
      </div>
      <Card num={topicId + 1} title={topic.title} info={topic.info}/>
      <div className="cta-section">
        <button onClick={handlePrev} className="prev cta">previous</button>
        <button onClick={handleNext} className="next cta">next</button>
      </div>
    </div>
  );
}

export default App;

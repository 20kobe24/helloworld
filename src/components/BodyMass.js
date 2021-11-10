import React, { useState, useRef } from 'react';
import './style.css';

const BodyMass = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(1.75);
  const [bmi, setBmi] = useState(0);
  const [isChecked, setIsChecked] = useState(true);
  const [gender, setGender] = useState('');
  const [BMIcolor, setBMIcolor] = useState('');
  const [bmiText, setBmiText] = useState('');

  const handleWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleHeight = (event) => {
    setHeight(event.target.value);
  };

  const handleRound = () => {
    setIsChecked(!isChecked);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  const handleDelte = () => {
    setBmi(0);
    setWeight(0);
    setHeight(0);
    setBMIcolor('');
    setIsChecked(true);
    setBmiText('');
  };

  const setBmiAvg = () => {};

  const handleSubmit = (event) => {
    const value = weight / (height * height);
    if (isChecked) {
      setBmi(Math.round(value));
    } else if (!isChecked) {
      setBmi(value);
    }

    if (value < 19) {
      setBMIcolor('yellow');
      setBmiText(
        'Die Berechnung Ihres BMI hat ergeben, dass Ihr Gewicht auf Untergewicht hindeutet. Wir empfehlen Ihnen, einen Ernährungsberater oder einen Arzt aufzusuchen.'
      );
    } else if (value > 19 && value < 24) {
      setBMIcolor('lightgreen');
      setBmiText(
        'Sehr gut, das Ergebnis der BMI-Berechnung weist auf ein Normalgewicht hin. Also bleib so wie du bist. Mit einer ausgewogenen und bedarfsgerechten Ernährung und ein wenig Bewegung wird dies sicherlich funktionieren. Stress kann auch durch körperliche Aktivität ausgeglichen werden.'
      );
    } else if (value > 14 && value < 31) {
      setBMIcolor('orange');
      setBmiText(
        'Die Berechnung Ihres BMIs hat ergeben, dass Ihr Gewicht auf leichtes bis mittleres Übergewicht (sogenannte Präadipositas) hindeutet. Das ist kein Grund zur Panik, jedoch sollten Sie nicht weiter zunehmen und Ihre Bewegungs- und Ernährungsgewohnheiten beobachten und gegebenenfalls anpassen. Versuchen Sie, nicht zuzunehmen. Wir empfehlen Ihnen, einen Ernährungsberater oder Arzt aufzusuchen.'
      );
    } else if (value > 30 && value < 35) {
      setBMIcolor('red');
      setBmiText(
        'oh nein, die Berechnung Ihres BMIs hat ergeben, dass Ihr Gewicht auf schweres Übergewicht (Adipositas Grad 1) hindeutet. Wir empfehlen Ihnen, Ihre Ernährungs- und Bewegungsgewohnheiten zu ändern. So können Sie langsam Ihr Gewicht reduzieren und mobiler werden. Besprechen Sie das am besten mit Ihrem Arzt und einem Ernährungsberater.'
      );
    } else if (value > 35) {
      setBmiText(
        'oh nein, die Berechnung Ihres BMIs hat ergeben, dass Ihr Gewicht auf extremes Übergewicht (Adipositas Grad 3) hindeutet. Wir empfehlen Ihnen, an Gewicht abzunehmen. Besprechen Sie das am besten mit Ihrem Arzt und einem Ernährungsberater. Diese können Ihnen ganz gezielt weiterhelfen.'
      );
    }
    event.preventDefault();
    executeScroll();
  };

  return (
    <>
      <div className="Wrapper">
        <div>
          <h2>BMI Recher</h2>
        </div>
        <form action="" className="BmiForm">
          <div className="Inputwrapper">
            <label>Ihr Gewicht: (in kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(event) => handleWeight(event)}
              className="Formfield"
            />
            <label>Ihre Körpergrösse (in m: 1,85)</label>
            <input
              type="number"
              value={height}
              onChange={(event) => handleHeight(event)}
              className="Formfield"
            />
            <p>Wählen Sie ihr Geschlecht:</p>
            <div>
              <input
                type="radio"
                value="male"
                name="gender"
                checked={gender === 'male'}
                onChange={(event) => handleGender(event)}
              />
              <label>Männlich</label>
            </div>
            <div>
              <input
                type="radio"
                value="female"
                name="gender"
                checked={gender === 'female'}
                onChange={(event) => handleGender(event)}
              />
              <label>Weiblich</label>
            </div>
            <input
              type="checkbox"
              name="round"
              id="round"
              checked={isChecked}
              onChange={(event) => handleRound(event)}
            />
            <label>BMI gerundet anzeigen</label>
            <div className="SubmitContainer">
              <input
                className="SubmitButton"
                type="submit"
                onClick={(event) => handleSubmit(event)}
              />
            </div>
            <div className="Container">
              <p
                ref={myRef}
                className="Result"
                style={{ backgroundColor: BMIcolor }}
              >
                Der BMI beträgt: {bmi}
              </p>
              <a href onClick={handleDelte}>
                Werte löschen
              </a>
            </div>
          </div>
        </form>
        <div className="BMIContainer">
          <div className="yellow">14, 16, 18</div>
          <div className="green">20, 22, 24</div>
          <div className="lightRed">26, 28, 30</div>
          <div className="red">32, 34, 36</div>
        </div>
        <div className="BMIContainer">
          <div>
            <span
              style={{ background: BMIcolor === 'yellow' ? 'yellow' : null }}
            ></span>
          </div>
          <div>
            <span
              style={{
                background: BMIcolor === 'lightgreen' ? 'lightgreen' : null,
              }}
            ></span>
          </div>
          <div>
            <span
              style={{
                background: BMIcolor === 'orange' ? 'orange' : null,
              }}
            ></span>
          </div>
          <div>
            <span
              style={{ background: BMIcolor === 'red' ? 'red' : null }}
            ></span>
          </div>
        </div>
        <p className="Result" style={{ backgroundColor: BMIcolor }}>
          Dein BMI beträgt: {bmi}
        </p>
        <div className="ResultContainer">
          <p>{bmiText}</p>
        </div>
      </div>
      <div className="TextContainer"></div>
      <div className="AvgWrapper">
        <h2>Durchschnitt</h2>
        <form className="AvgForm" action="">
          <div>
            <label>
              Deinen BMI anonym eintragen um den durchschnitt zu erfahren
            </label>
            <input className="Formfield" type="text" disabled value={bmi} />
          </div>
          <input
            type="submit"
            value="Bmi eintragen"
            className="SubmitButton"
            onClick={setBmiAvg}
          />
        </form>
      </div>
    </>
  );
};

export default BodyMass;

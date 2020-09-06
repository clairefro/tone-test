import React, { useState, useRef, useEffect } from "react";
import * as ToneJS from "tone";

import Tone from "./Tone";

const Player = () => {
  const BASE_FREQ = 432;
  const FREQ_DISTANCE = BASE_FREQ / 9;

  const buildMap = (init, dist) => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      if (i === 0) {
        arr.push(init);
      } else {
        arr.push(arr[i - 1] + dist);
      }
    }
    return arr;
  };

  const DIGIT_MAP = buildMap(BASE_FREQ, FREQ_DISTANCE);

  const PLAY_ME_MAP = {
    pi: Math.PI,
    phi: 1.618033988749895,
  };
  const [tones, setTones] = useState([]);
  const [playMe, setPlayMe] = useState("pi");
  const [toneSignal, setToneSignal] = useState(false);
  const [seq, setSeq] = useState();
  const [activeIndex, setActiveIndex] = useState(null);
  const refFrequency = useRef();

  const synth = new ToneJS.Synth().toDestination();
  // useEffect(() => {
  //   stop();
  //   // if (tones.length > 0) {
  //   //   play();
  //   // }
  // }, [tones]);

  useEffect(() => {
    setActiveIndex((a) => (a === null ? 0 : a + 1));
  }, [toneSignal]);

  useEffect(() => {
    setTones(mapDigitsToTones(PLAY_ME_MAP[playMe]));
  }, [playMe]);

  // const addTone = () => {
  //   const newTone = refFrequency.current.value;
  //   setTones([...tones, newTone]);
  // };

  const play = () => {
    const frequencies = tones.map((t) => t.frequency);

    setSeq(
      new ToneJS.Sequence((time, freq) => {
        emitToneChange(new Date().toISOString());
        synth.triggerAttackRelease(freq, 0.1);
      }, frequencies).start()
    );
    ToneJS.Transport.start();
  };

  const emitToneChange = (ts) => {
    setToneSignal(ts);
  };

  const stop = () => {
    ToneJS.Transport.stop();
    if (seq) {
      seq.clear();
    }
    resetActiveIndex();
  };

  const resetActiveIndex = () => {
    setActiveIndex(null);
  };

  const resetTones = () => {
    setTones([]);
  };

  const clearTones = () => {
    stop();
    resetTones();
    resetActiveIndex();
  };

  const mapDigitsToTones = (number) => {
    if (number) {
      const digits = number.toString().replace(/[.,-]/, "").split("");
      return digits.map((d) => ({ digit: d, frequency: DIGIT_MAP[d] }));
    } else {
      return;
    }
  };

  const updatePlayMe = (e) => {
    stop();
    resetActiveIndex();
    setPlayMe(e.target.value);
  };

  const circularIndex = (arr, cirIndex) => {
    if (arr && cirIndex) {
      const n = arr.length;
      return ((cirIndex % n) + n) % n;
    } else {
      return false;
    }
  };

  return (
    <div>
      <h3>DIGIT MAP</h3>
      <p>Base frequency : {BASE_FREQ}Hz</p>
      <p>
        Interval : +{FREQ_DISTANCE}Hz ({BASE_FREQ}Hz / 9)
      </p>
      <table style={{ textAlign: "left", margin: "0 auto" }}>
        <thead>
          <tr>
            <th>Digit</th>
            <th>Frequency (Hz)</th>
          </tr>
        </thead>
        <tbody>
          {DIGIT_MAP.map((f, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{f}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />

      <select name="play-me" id="select-play-me" onChange={updatePlayMe}>
        {Object.keys(PLAY_ME_MAP).map((key, i) => (
          <option value={key} key={i}>
            {key}
          </option>
        ))}
      </select>
      <button onClick={play}>Play</button>
      <button onClick={stop}>Stop</button>
      <h2>Now playing:</h2>
      <p>{`${playMe} : ${PLAY_ME_MAP[playMe]}`}</p>
      <h2>Tones</h2>
      {tones.length > 0
        ? tones.map((t, i) => (
            <Tone
              frequency={t.frequency}
              digit={t.digit}
              key={i}
              active={circularIndex(tones, activeIndex) === i}
            />
          ))
        : "no tones yet"}
    </div>
  );
};

export default Player;

// <button onClick={clearTones}>Clear tones</button>
// <button onClick={addTone}>Add tone</button>
// <label htmlFor="frequency-input">Frequency (Hz)</label>
// <input type="number" ref={refFrequency} id="frequency-input" />

import React, { useState } from "react";
import "./styles.css";
//database
const internetSlangDictionary = {
  AFAIC: "as far as I'm concerned",
  AFAIK: "as far as I know",
  AFAIR: "as far as I remember",
  AFK: "away from keyboard",
  ASAP: "as soon as possible",
  BBL: "be back later",
  BBS: "be back soon",
  BFD: "big fucking deal",
  BRB: "be right back",
  BTW: "by the way",
  B2B: "Business to Business",
  "C&V": "Chapter & Verse",
  "C|N>K": "coffee through nose into keyboard",
  cya: "see you",
  CU: "see you",
  CYS: "Check your settings",
  FAQ: "Frequently Asked Question",
  FFS: "for fuck's sake!",
  FOAF: "friend of a friend",
  FYI: "for your information",
  G2G: "got to go",
  GAGF: "go and get fucked",
  GFY: "good for you",
  GG: "good going or good game",
  GJ: "Good Job",
  HAND: "have a nice day",
  HTH: "hope this helps",
  IANAL: "I am not a lawyer",
  IANARS: "I am not a rocket scientist",
  IC: "I see",
  ICYDK: "In case you didn't know.",
  IIRC: "if I recall correctly",
  IMHO: "in my humble opinion",
  IMO: "in my opinion",
  IMNSHO: "in my not-so-humble opinion",
  IRC: "Internet Relay Chat",
  IRL: "in real life",
  ISTR: "I seem to recall",
  IYDMMA: "if you don't mind me asking",
  JJ: "just joking",
  JOOC: "just out of curiosity",
  k: "OK",
  l8: "late",
  l8r: "later",
  LIEK: "I like that website",
  LMAO: "laughing my ass off",
  LOL: "laughing out loud",
  MYOB: "mind your own business",
  NM: "never mind",
  NOYB: "none of your business",
  NP: "No Problem",
  NSFW: "Not safe for work.",
  NT: "No Text",
  O: "oh",
  OIC: "oh, I see",
  OMG: "Oh my God!!",
  OMFG: "Oh my fucking God!!",
  OMFL: "Oh my fucking lag!",
  OOC: "out-of-character",
  OT: "off topic",
  OTOH: "on the other hand",
  PFO: "please fuck off",
  PITA: "pain in the ass",
  PO: "piss off",
  prog: "computer program",
  prolly: "probably",
  plz: "please",
  P2P: "Person to Person",
  qoolz: "cool",
  R: "are",
  RL: "real life",
  ROFL: "rolling on the floor laughing",
  ROFLMAO: "rolling on the floor laughing my ass off",
  RTFA: "read the fucking article",
  RTFM: "read the fucking manual",
  RU: "Are You?",
  R8: "right",
  SFW: "Safe for work.",
  STFU: "shut the fuck up",
  TBH: "to be honest",
  thx: "thanks",
  TIA: "thanks in advance",
  TTYL: "talk to you later",
  U: "you",
  ur: "you're",
  "w/e": "whatever",
  "w/o": "without",
  WDUWTA: "what do u wanna talk about?",
  WTF: "what the fuck?",
  YMMV: " Your mileage may vary ",
  w8: "wait",
  "<3": "love",
  "2B": "To be",
  "4": "for",
  cluebie: "a newbie with a clue, but not close to a guru",
  guru:
    "an expert in some technical topic, such as as C programming or Unix system administration",
  flamer: "one who 'flames'",
  troll: "a person who deliberately stirs up trouble",
  lurker:
    "one who reads an email list or a message board but does not participate in the discussion.",
  newbie: "a new user",
  noob: "a new user"
};
// console.log(Object.keys(internetSlangDictionary));
var internetSlangWeKnow = Object.keys(internetSlangDictionary);

export default function App() {
  //using of usestate
  const [slangMeaning, setSlangMeaning] = useState("");
  //function
  function internetSlangClickHandler(item) {
    var meaning = internetSlangDictionary[item];
    setSlangMeaning(meaning);
  }
  function internetSlangHandler(event) {
    var internetSlang = event.target.value;
    var meaning = internetSlangDictionary[internetSlang.toUpperCase()];
    if (meaning === undefined) {
      meaning = "Sorry!!! we dont have this in our database...";
    }
    //console.log(meaning);
    setSlangMeaning(meaning);
  }
  //view
  return (
    <div className="App">
      <input
        placeholder="Enter your Internet Slang to know its meaning..."
        onChange={internetSlangHandler}
      />
      <h2>
        <span style={{ color: "blue" }}> IT MEANS:</span>{" "}
        <span style={{ color: "#e11d48" }}> {slangMeaning}</span>
      </h2>
      <h3 style={{ paddingTop: "2rem" }}>SOME POPULAR INTERNET SLANGS 👇</h3>
      {internetSlangWeKnow.map(function (item) {
        return (
          <span
            onClick={() => internetSlangClickHandler(item)}
            style={{
              textAlign: "center",
              display: "inline-block",
              fontSize: "1.5rem",
              padding: "1rem",
              cursor: "pointer"
            }}
            key={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Box from './components/Box.js'


export function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/chemistry">
            <Chemistry />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </div>
      </Switch>
    </Router>


  );

}

function Home() {
  return (
    <div className="Home">
      <div class="gradient"></div>
      <button class="biology" >Биология</button>
      <button class="chemistry" >Химия</button>
    </div>
  );
}

function upload(file) {
  fetch('upload', { // Your POST endpoint
    method: 'POST',
    headers: {
      // Content-Type may need to be completely **omitted**
      // or you may need something
      "Content-Type": "multipart/form-data"
    },
    body: file // This is your file object
  }).then(
    response => response.json() // if the response is a JSON object
  ).then(
    success => console.log(success) // Handle the success response object
  ).catch(
    error => console.log(error) // Handle the error response object
  );
};

function onChangeHandler(event) {

  console.log(event.target.files[0])
  upload(event.target.files[0])

}
function Chemistry() {
  return (
    <div className="Chemistry" class="box">
      <Box title="Презентации от вчера" files={["Австралия.pptx", "Съединени Американски Щати(САЩ).pptx", "Шарл Бодлер.pptx", "Австралия.pptx", "Съединени Американски Щати(САЩ).pptx", "Шарл Бодлер.pptx", "Австралия.pptx", "Съединени Американски Щати(САЩ).pptx", "Шарл Бодлер.pptx"]}></Box>
      <Box title="Презентации от вчера" files={["Австралия.pptx", "Съединени Американски Щати(САЩ).pptx", "Шарл Бодлер.pptx"]}></Box>
      <Box title="Презентации от вчера" files={["Австралия.pptx", "Съединени Американски Щати(САЩ).pptx", "Шарл Бодлер.pptx"]}></Box>
      <Box title="Презентации от вчера" files={["Австралия.pptx", "Съединени Американски Щати(САЩ).pptx", "Шарл Бодлер.pptx"]}></Box>
      <Box title="Презентации от вчера" files={["Австралия.pptx", "Съединени Американски Щати(САЩ).pptx", "Шарл Бодлер.pptx"]}></Box>
      <Box title="Презентации от вчера" files={["Австралия.pptx", "Съединени Американски Щати(САЩ).pptx", "Шарл Бодлер.pptx"]}></Box>
      <Box title="sex SEX SEX SEX SEX SEX!!!" files={["When_your_brother_orders_pizza_for_dinner.mp4"]}></Box>

      {/* <input type="file" name="file" onChange={onChangeHandler} /> */}
    </div>
  );
}

export default App;
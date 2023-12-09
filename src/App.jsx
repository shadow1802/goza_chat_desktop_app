import React from "react";

var monitorWidth = screen.width;
var monitorHeight = screen.height;

function App() {

  console.log(monitorWidth)

  return (
    <div className="flex flex-1 justify-center h-full items-center">
      <h1 className="text-red-500">💖 Hello World!</h1>
      <p>Welcome to your Electron application.</p>
    </div>
  );
}

export default App;
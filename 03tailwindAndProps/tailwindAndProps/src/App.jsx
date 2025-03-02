import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Hello World</h1>
      <Card name="Yash" btnText="Visit Me"/>
      <Card name="Rajat"/>
    </>
  );
}

export default App;

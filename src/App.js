import "./App.css";

import Content from "./assets/components/Content"
import Description from "./assets/components/Description";
import Title from "./assets/components/Title";

const App = () => {
  return (
    <>
     <Content name={Title.firstTitle} text={Description.firstText}/>
     <Content name={Title.firstTitle} text={Description.firstText}/>
    </>
  );
}

export default App;
import styledComponents from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header"
import TaskList from "./components/TaskList";
import Input from "./components/Input"
import { Provider } from "react-redux";
import { store } from "./redux";

const Container = styledComponents.div`
  margin: 100px auto;
  width:45vw;
`

function App() {
  return (
    <>
      <Provider store={store}> 
      <GlobalStyle/>
      <Container>
        <Header />
        <TaskList />
        <Input />
      </Container>
      </Provider>
    </>
  );
}

export default App;
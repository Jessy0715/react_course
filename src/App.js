import logo from './logo.svg';
import './App.css';
import Counter from "./counter/Counter";
import Form from "./FormRef";
import Parent from "./parent/Parent";
import StyleCss from "./StyleCss";
import Progress from "./progress/Progress";
import StyleComponent from "./styleComponent/StyleComponent";
import ScssComponent from "./styleComponent/ScssComponent";
import FormIntro from "./form/FormIntro";

//HOC- Toggle範例
import PromoteCard from "./hoc/toggle/PromoteCard";
import TravelCard from "./hoc/toggle/TravelCard";
import withOpen from "./hoc/toggle/withOpen";

//HOC- List範例
// import NameList from "./hoc/list/NameList";
// import TodoList from "./hoc/list/TodoList";
import withName from './hoc/list/withName';
import withTodoList from './hoc/list/withTodoList';
import List from './hoc/list/List';


//資料卡範例
import Card from './card/Card';
import lesson from './card/lesson-react.json';
import lesson2 from './card/lesson-vue.json';


//檔案樹範例
import FileNode from './fileNest/FileNode';
import files from './fileNest/files.json';


import Mount from './lifeCycle/Mount';
import Update from './lifeCycle/Update';
import UnMount from './lifeCycle/UnMount';

// 薪水計算器範例
import Salary from './salary/Salary';

// 一個人的聊天室範例
import ChatRoom from './chatRoom/ChatRoom';


// 無限捲動課程列表
import CourseList from './courseList/CourseList';

//HOC- Toggle範例
const PromoteCardWithOpen = withOpen(PromoteCard) 
const TravelCardWithOpen = withOpen(TravelCard)


//HOC- List範例
const NameList = withName(List)
const TodoList = withTodoList(List)




function App() {
  const person = {
    age: 20
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <StyleCss />
        <Counter initCount={10} />
        {person.age}歲
        <Form />
        <br />
        <Parent />
        <br />
        <Progress />
        <br />
        <StyleComponent>
          Hello
        </StyleComponent>
        <ScssComponent>World</ScssComponent>
        <br />
        <FormIntro /> */}
        <br />
        {/* <h4>HOC練習</h4> */}
        <div style={{ display: 'flex', justifyContent: 'space-between'  ,width: '300px'}}>
        {/* 
          使用時機1: 應用在【相同邏輯但不同組件上】
          把共用邏輯放在 hoc上，當作中介媒介
         */}
          {/* <PromoteCard />
          <TravelCard /> */}
          {/* <PromoteCardWithOpen />
          <TravelCardWithOpen /> */}
        </div>
        <br />
        {/*
        使用時機2: 應用在【不同邏輯但相同組件上】
        把共用邏輯放在 hoc上，當作中介媒介
          */}
        {/* <NameList />
        <TodoList /> */}
        {/* <Card data={lesson} />
        <Card data={lesson2} /> */}
        <br />
        <br />
        {/* <FileNode name={files.name} files={files.files} /> */}
        {/* 同上述寫法 */}
        {/* <FileNode {...files} /> */}
        <br />
        {/* <Mount />
        <Update />
        <UnMount /> */}
        <br />
        {/* <Salary /> */}
        {/* <ChatRoom /> */}
        <CourseList />
      </header>
    </div>
  );
}

export default App;

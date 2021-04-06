import React from 'react';
// import Greet from './components/Greet';
// import Message from './components/Message';
// import Counter from './components/Counter';

 //import FunctionClip from './components/FunctionClip';

// import ClassClick from './components/ClassClick';

// import Eventbinding from './components/Eventbinding';

//import ParentComponent from './components/ParentComponent';

// import UserGreeting from './components/UserGreeting';

//import NameList from './components/NameList';

//import StyleSheet from './components/StyleSheet';

// import Inline from './components/Inline';

// import './appStyles.css';
// import styles from './appStyle.module.css';
//import Form from './components/Form';

//import LifeCycleA from './components/LifeCycleA';
//import ReactFragment from './components/ReactFragment';

import Table from './components/Table';

//import ParentComp from './components/ParentComp';

const App = ()=> {
  
  return (
    <div className = "App">
         <Table/>
       
   {/* <ParentComp/> */}
      {/*<Table/>
       <ReactFragment/>
        <LifeCycle/>
        <Form/>
    <h1 className = "error">Error</h1>
      <h1 className ={styles.success}>Success</h1>
      <Inline/>
        <StyleSheet primary = {true} />
      <NameList/>
      <UserGreeting/>
      <ParentComponent/>
      <Greet name = "Superman" city = "NewYork"/>
      <Greet name = "Batman" city = "Florida"/>

      <Message/>
      <Counter/>
      <FunctionClip/>
      <ClassClick/> 
     <Eventbinding/> */} 
     </div>
  );
}

export default App;

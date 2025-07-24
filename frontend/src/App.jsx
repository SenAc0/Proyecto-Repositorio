import { useState } from 'react'
import './App.css'
import Header from './components/header'
import ListLeft from './components/listleft';
import Content from './components/content';
import Folders from './components/folders';

function App() {

  const lista_repo = ["Repo 1", "Repo 2", "Repo 3"]

  return (
    <>
      <div className='h-screen flex flex-col'>
        <Header></Header>
        <div className="flex flex-1">
          <ListLeft lista_repo={lista_repo}></ListLeft>
          <Folders></Folders>
          <Content></Content>
        </div>
      </div>
      
      </>
  )
}
export default App;


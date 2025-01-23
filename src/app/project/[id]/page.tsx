"use client"

import React,{useState} from 'react'
import ProjectHeader from "./ProjectHeader"
import Board from '../boardView'
import ListView from '../listView'
type Props = {
    params:Promise<{id:string}>
}

const page = ({params}: Props) => {
  const { id } = React.use(params);
  const [activeTab, setActiveTab] = useState("List");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab==="Board"&&(
        <Board  id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
      )}
      {activeTab==="List"&&(
        <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
      )}
    </div>
  )
}

export default page
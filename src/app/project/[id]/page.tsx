"use client"

import React,{useState} from 'react'
import ProjectHeader from "./ProjectHeader"
import Board from '../boardView'
type Props = {
    params:Promise<{id:string}>
}

const page = ({params}: Props) => {
  const { id } = React.use(params);
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab==="Board"&&(
        <Board  id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
      )}
    </div>
  )
}

export default page
"use client"

import React,{useState} from 'react'
import ProjectHeader from "./ProjectHeader"
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
    </div>
  )
}

export default page
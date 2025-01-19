import React,{useState} from 'react'
import Header from 'src/components/Header';

type Props = {
  activeTab:string,
  setActiveTab:(TabName:string)=> void
}

const ProjectHeader = ({activeTab,setActiveTab}: Props) => {
  const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false);

  return (
    <div>
      <Header name='sammith name'  />
    </div>
  )
}

export default ProjectHeader
import React from 'react'
import Header from 'src/components/Header';
import { useGetTasksQuery } from 'src/state/api';

type ListViewProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
  };

const ListView = ({id,setIsModalNewTaskOpen}: ListViewProps) => {
    const {data:tasks,isLoading,error} = useGetTasksQuery({projectId:Number(id)})

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>An error occurred while fetching tasks</div>;

  return (
    <div className="px-4 pb-8 xl:px-6">
        <div className="pt-5">
            <Header name='List'/>
        </div>
    </div>
  )
}

export default ListView
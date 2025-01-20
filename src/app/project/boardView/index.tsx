import React from 'react'
import {  useGetTasksQuery, useUpdateTaskStatusMutation } from 'src/state/api';

type BoardProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
  };

  const taskStatus = ["To Do", "Work In Progress", "Under Review", "Completed"];

const BoardView = ({id,setIsModalNewTaskOpen}: BoardProps) => {
    const {data:task,isLoading,error} = useGetTasksQuery({projectId:Number(10)})
    const [updateTaskStatus] = useUpdateTaskStatusMutation()
    const moveTask = (taskId: number, toStatus: string) => {
      updateTaskStatus({ taskId, status: toStatus });
    };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error occurred while fetching tasks</div>;

  return (
    <div>BoardView</div>
  )
}

export default BoardView
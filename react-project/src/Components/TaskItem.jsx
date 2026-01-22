import React from "react";

function TaskItem({ taskName, deleteTask, completeTask, listType }) {
  return (
    <li className='task d-flex justify-content-between'>
      {taskName}
      <div className='task-btns w-50 mr-5 d-flex justify-content-end'>
        {listType === 'myTasks' && (
          <>
            <button
              className='btn btn-sm btn-success'
              onClick={() => completeTask(taskName)}
            >
              COMPLETE
            </button>
            <button
              className='btn btn-sm btn-danger'
              onClick={() => deleteTask(taskName, listType)}
            >
              DELETE
            </button>
          </>
        )}
        {listType === 'completedTasks' && (
          <button
            className='btn btn-sm btn-danger'
            onClick={() => deleteTask(taskName, listType)}
          >
            DELETE
          </button>
        )}
      </div>
    </li>
  );
}

export default TaskItem;


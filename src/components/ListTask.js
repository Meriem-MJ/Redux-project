import React, { useState } from 'react'
import { Breadcrumb } from "react-bootstrap";
import Task from './Task'
import AddTask from './AddTask'
import { useSelector, useDispatch } from "react-redux";
import { filterLists } from '../actions';




const ListTask = () => {
  const filter = useSelector((state) => state.Filterstate);
  const item = useSelector(state => state.items)
  const [filtertext, setFiltertext] = useState(filter)
  const dispatch = useDispatch();

  const handleFilterall = () => {
    dispatch(filterLists(filtertext));
    setFiltertext("all");

  }
  const handleFilterdone = () => {
    dispatch(filterLists(filtertext));
    setFiltertext("done");
  }
  const handleFilternotdone = () => {
    dispatch(filterLists(filtertext));
    setFiltertext("notdone");
  }
  const newList = () => {
    if (filtertext === "all") {
      return item;
    }
    if (filtertext === "done") {
      return item.filter((el) => el.isDone === true);
    }
    if (filtertext === "notdone") {
      return item.filter((el) => el.isDone === false);
    }
  };
  let finalList = newList();
  return (
    <div className='ListItems'>
      <div>
        <div className='container1'>
          <AddTask />
          <Breadcrumb className='select'>
            <Breadcrumb.Item  onClick={handleFilterall} >All</Breadcrumb.Item>
            <Breadcrumb.Item  onClick={handleFilterdone} >Done</Breadcrumb.Item>
            <Breadcrumb.Item  onClick={handleFilternotdone} >Not Done</Breadcrumb.Item>
        </Breadcrumb>
        </div>
            



      </div>

      <div>
        {finalList.map((el) => {
          return (
            <div key={el.id}>
              <Task id={el.id} description={el.description} isDone={el.isDone} />

            </div>

          );
        })}
      </div>
    </div>
  )
}
export default ListTask;
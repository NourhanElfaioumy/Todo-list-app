import React, { useState } from "react";
import { Row, Modal, Button, Form, Input, Col, Select } from "antd";
import "../css/Todo.css";
import { useDispatch, useSelector } from "react-redux";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { add_task, remove_task } from "../actions";
// import DatePicker from "react-datepicker";
export default function Todo(props) {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos);
  const [isOpen, setIsOpen] = useState(false);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    startDate: new Date(),
    endDate: new Date(),
    priority: "",
    person: "",
  });

  const showModal = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="header text-center">
        <h3 className="mt-3">Todo-List</h3>
        <Button className="mt-2" type="primary" onClick={showModal}>
          Add New Task
        </Button>
      </div>
      <Modal
        title="Add Task"
        visible={isOpen}
        onCancel={handleCancel}
        onOk={() => {
          dispatch(add_task({ ...todo }));
          setIsOpen(false);
        }}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <label>Title</label>
              <Input
                placeholder="Enter title"
                name="title"
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <label>Task description</label>
              <Input
                placeholder="Enter Description"
                name="description"
                value={todo.description}
                onChange={(e) =>
                  setTodo({ ...todo, description: e.target.value })
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <label>Priorty</label>
              <Select
                placeholder={"Select priorty"}
                onChange={(d) => setTodo({ ...todo, priority: d })}
              >
                <Select.Option value="0" key="0">
                  High
                </Select.Option>
                <Select.Option value="1" key="1">
                  Medium
                </Select.Option>
                <Select.Option value="2" key="2">
                  Low
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <label>Responsible Person</label>
              <Select
                placeholder={"Select person"}
                onChange={(e) => setTodo({ ...todo, person: e })}
              >
                <Select.Option value="Ali" key="1">
                  Ali
                </Select.Option>
                <Select.Option value="Ahmed" key="2">
                  Ahmed
                </Select.Option>
                <Select.Option value="Khaled" key="3">
                  Khaled
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <label>Start Date</label>

              <Input
                format="DD/MM/YYYY"
                type="date"
                value={todo.startDate}
                onChange={(e) =>
                  setTodo({ ...todo, startDate: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item>
              <label>Deadline</label>

              <Input
                format="DD/MM/YYYY"
                type="date"
                value={todo.endDate}
                onChange={(e) => setTodo({ ...todo, endDate: e.target.value })}
              />
            </Form.Item>
          </Col>
        </Row>
      </Modal>
      <div className="todo-list">
        {todoList.map((todo, id) => (
          <div className="card-wrapper mr-5" key={id}>
            <div className="card-top"></div>
            <div className="task-holder">
              <span className="card-header">Title :{todo.title}</span>
              <p className="mt-3"> Description : {todo.description}</p>

              <p className="mt-3 "> Start Date :{todo.startDate}</p>
              <p className="mt-3"> End Date :{todo.endDate}</p>
              <p className="mt-3"> Responsible Person : {todo.person}</p>

              <div className="icons">
                <i
                  className="fas fa-trash-alt"
                  onClick={dispatch(remove_task(todoList.id))}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

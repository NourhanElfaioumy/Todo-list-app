import React, { useState } from "react";
import { Row, Modal, Button, Form, Input, Col, DatePicker, Select } from "antd";
import "../css/Todo.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export const Todo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add New Task
      </Button>
      <Modal title="Add Task" visible={isOpen} onCancel={handleCancel}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <label>Title</label>
              <Input placeholder="Enter title" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <label>Task description</label>
              <Input placeholder="Enter Description" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <label>Priorty</label>
              <Select placeholder={"Select priorty"}>
                <Select.Option value="High" key="1">
                  High
                </Select.Option>
                <Select.Option value="Medium" key="2">
                  Medium
                </Select.Option>
                <Select.Option value="Low" key="3">
                  Low
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item>
              <label>Start Date</label>
              <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item>
              <label>Deadline</label>

              <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

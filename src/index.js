import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Form, Input } from 'antd';
const FormItem = Form.Item;

class Demo extends Component {
  render() {
    return(
      <Form>
        <FormItem>
          <Input type="text" {...this.props.form.getFieldProps('interactive')} />
        </FormItem>
      </Form>
    )
  }
}
Demo = Form.create()(Demo);
ReactDOM.render(<Demo />, document.getElementById('container'));

import React from "react";

import * as S from "./styles";
import { Form, Input, Button } from "antd";

const ChangePassword = () => {
  return (
    <S.Container>
      <Form
        name="changePassword"
        layout={"vertical"}
        onFinish={() => null}
        autoComplete="off"
      >
        <Form.Item label="Old Password" name="oldPassword">
          <Input.Password />
        </Form.Item>

        <Form.Item label="New Password" name="newPassword" hasFeedback>
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Change Password
          </Button>
        </Form.Item>
      </Form>
    </S.Container>
  );
};
export default ChangePassword;

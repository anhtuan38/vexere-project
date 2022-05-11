import React from "react";

import { Input, DatePicker, Radio, Button } from "antd";
import * as S from "./styles";

const ChangeProfile = () => {
  const handeSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <S.FormCustom
        name="basic"
        initialValues={{ phoneNumber: "0123456789" }}
        onFinish={(values) => handeSubmit(values)}
        onFinishFailed={() => null}
        layout={"vertical"}
      >
        <S.FormCustom.Item label="Họ và tên" name="fullName">
          <Input />
        </S.FormCustom.Item>

        <S.FormCustom.Item label="Số điện thoại" name="phoneNumber">
          <Input disabled />
        </S.FormCustom.Item>

        <S.FormCustom.Item label="Ngày sinh" name="birthday">
          <DatePicker styles={{ width: "100%" }} />
        </S.FormCustom.Item>
        <div style={{ marginBottom: "5px" }}>
          <label>Giới tính</label>
        </div>
        <Radio.Group defaultValue="male" buttonStyle="solid" name="gender">
          <Radio.Button value="male">Nam</Radio.Button>
          <Radio.Button value="female">Nữ</Radio.Button>
        </Radio.Group>
        <S.FormCustom.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </S.FormCustom.Item>
      </S.FormCustom>
    </>
  );
};
export default ChangeProfile;

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
        initialValues={{ remember: true }}
        onFinish={(values) => handeSubmit(values)}
        onFinishFailed={() => null}
        layout={"vertical"}
      >
        <S.FormCustom.Item label="Họ và tên" name="fullName">
          <Input />
        </S.FormCustom.Item>

        <S.FormCustom.Item label="Số điện thoại" name="phoneNumber">
          <Input disabled value={"0123.456.789"} />
        </S.FormCustom.Item>

        <S.FormCustom.Item label="Ngày sinh" name="birthday">
          <DatePicker styles={{ width: "100%" }} />
        </S.FormCustom.Item>
        <Radio.Group
          defaultValue="male"
          label="Giới tính"
          buttonStyle="solid"
          name="gender"
        >
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

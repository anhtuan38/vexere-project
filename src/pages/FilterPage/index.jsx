import React from "react";

import { Row, Col, TreeSelect, Button, Card } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const filterPage = () => {
  const { TreeNode } = TreeSelect;
  return (
    <Col
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Row>
        <Col span={4}></Col>
        <Col span={16} style={{ margin: "20px 0px" }}>
          <a href="https://vexere.com/vi-VN">Vé xe khách</a>
          <span> {">"} Vé xe từ Đà Nẵng đi Hà Tĩnh </span>
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16} style={{ margin: "20px 0px" }}>
          <TreeSelect
            showSearch
            style={{ width: "236px" }}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Tỉnh/Thành phố nơi đi"
            allowClear
            treeDefaultExpandAll
          >
            <TreeNode
              value="Tỉnh-Thành phố"
              title="Tỉnh-Thành phố"
              style={{ fontWeight: "bold" }}
            >
              <TreeNode value="Đà Nẵng" title="Đà Nẵng"></TreeNode>
              <TreeNode
                value="TP Hồ Chí Minh"
                title="TP Hồ Chí Minh"
              ></TreeNode>
              <TreeNode value="Hà Nội" title="Hà Nội"></TreeNode>
              <TreeNode value="Hà Tĩnh" title="Hà Tĩnh"></TreeNode>
            </TreeNode>
            <TreeNode
              value="Quận-Huyện"
              title="Quận-Huyện"
              style={{ fontWeight: "bold" }}
            >
              <TreeNode
                value="Liên Chiểu - Đà Nẵng"
                title="Liên Chiểu - Đà Nẵng"
              ></TreeNode>
              <TreeNode
                value="Hải Châu - Đà Nẵng"
                title="Hải Châu - Đà Nẵng"
              ></TreeNode>
              <TreeNode
                value="Thanh Xuân - Hà Nội"
                title="Thanh Xuân - Hà Nội"
              ></TreeNode>
              <TreeNode
                value="TP Hà Tĩnh - Hà Tĩnh"
                title="TP Hà Tĩnh - Hà Tĩnh"
              ></TreeNode>
            </TreeNode>
          </TreeSelect>
          <TreeSelect
            showSearch
            style={{ width: "236px" }}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Tỉnh/Thành phố nơi đến"
            allowClear
            treeDefaultExpandAll
          >
            <TreeNode
              value="Tỉnh-Thành phố"
              title="Tỉnh-Thành phố"
              style={{ fontWeight: "bold" }}
            >
              <TreeNode value="Đà Nẵng" title="Đà Nẵng"></TreeNode>
              <TreeNode
                value="TP Hồ Chí Minh"
                title="TP Hồ Chí Minh"
              ></TreeNode>
              <TreeNode value="Hà Nội" title="Hà Nội"></TreeNode>
              <TreeNode value="Hà Tĩnh" title="Hà Tĩnh"></TreeNode>
            </TreeNode>
            <TreeNode
              value="Quận-Huyện"
              title="Quận-Huyện"
              style={{ fontWeight: "bold" }}
            >
              <TreeNode
                value="Liên Chiểu - Đà Nẵng"
                title="Liên Chiểu - Đà Nẵng"
              ></TreeNode>
              <TreeNode
                value="Hải Châu - Đà Nẵng"
                title="Hải Châu - Đà Nẵng"
              ></TreeNode>
              <TreeNode
                value="Thanh Xuân - Hà Nội"
                title="Thanh Xuân - Hà Nội"
              ></TreeNode>
              <TreeNode
                value="TP Hà Tĩnh - Hà Tĩnh"
                title="TP Hà Tĩnh - Hà Tĩnh"
              ></TreeNode>
            </TreeNode>
          </TreeSelect>
          <Button
            type="primary"
            style={{
              backgroundColor: "#FFC500",
              color: "black",
              fontWeight: "bold",
            }}
          >
            TÌM CHUYẾN
          </Button>
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={16} style={{ margin: "20px 0px" }}>
          <a
            target="_blank"
            href="/vi-VN/nhung-cau-hoi-thuong-gap.html"
            class="route__TrustMessage-sc-3icvq2-7 iJua-DT"
            style={{ color: "black", fontWeight: "bold", margin: "0px 3px" }}
          >
            VeXeRe - Cam kết hoàn 150% nếu nhà xe không giữ vé
          </a>
          <InfoCircleOutlined />
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row>
        <Col span={4}></Col>
        <Col span={4} className="filter-wrapper">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span class="grLeft-label-left">Bộ lọc tìm kiếm</span>
            <span class="grLeft-reset-filter Clear_Filter">Xóa lọc</span>
          </div>
          <Card
            style={{
              width: "100%",
              minHeight: 200,
              margin: "5px 18px 16px 0px",
            }}
          >
            {/* <Card
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
              }}
            >
              <p>Giờ đi</p>
              <button
                style={{
                  width: 100,
                  height: 50,
                  padding: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p>Sáng sớm (4)</p>
                <p>00:00 - 06:00</p>
              </button>
              <button
                style={{
                  width: 75,
                  height: 34,
                  padding: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p>Sáng sớm (4)</p>
                <p>00:00 - 06:00</p>
              </button>
              <button
                style={{
                  width: 75,
                  height: 34,
                  padding: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p>Sáng sớm (4)</p>
                <p>00:00 - 06:00</p>
              </button>
              <button
                style={{
                  width: 75,
                  height: 34,
                  padding: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p>Sáng sớm (4)</p>
                <p>00:00 - 06:00</p>
              </button>
            </Card> */}
          </Card>
        </Col>
        <Col span={10} style={{ padding: 8 }}>
          <h1 id="seo-heading">
            Đặt mua vé xe đi Đà Nẵng từ Hà Nội chất lượng cao và giá vé ưu đãi
            nhất
          </h1>
          <div className="scroll-list" style={{ overflow: "scroll" }}>
            <span>
              <figure style={{ width: 260, height: 130, borderRadius: 5 }}>
                <img
                  src="https://storage.googleapis.com/fe-production/images/default-dynamic-filter-background.png"
                  alt="flash sale 50%"
                  style={{ width: "100%", height: "100%" }}
                />
              </figure>
            </span>
            <span>
              <figure style={{ width: 260, height: 130, borderRadius: 5 }}>
                <img
                  src="https://storage.googleapis.com/fe-production/images/default-dynamic-filter-background.png"
                  alt="flash sale 50%"
                  style={{ width: "100%", height: "100%" }}
                />
              </figure>
            </span>
            <span>
              <figure style={{ width: 260, height: 130, borderRadius: 5 }}>
                <img
                  src="https://storage.googleapis.com/fe-production/images/default-dynamic-filter-background.png"
                  alt="flash sale 50%"
                  style={{ width: "100%", height: "100%" }}
                />
              </figure>
            </span>
          </div>
        </Col>
        <Col span={4}></Col>
      </Row>
    </Col>
  );
};

export default filterPage;

import React from "react";
import classNames from "classnames";
import { Button, ButtonGroup, Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import Main from "TestComp/Main";
import Demo_linechart from "Data/Demo_linechart";
import { Resizable, ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';


function Dashboard(props) {
  return (
    
    <>
      <div id="myChart">{/* Chart component goes here */}</div>
      <div className="content">
      <div className="content2">
  {/* <Row>
    
    <Col xs="12" md="6"  id="LineChart" style={{overflow:'scroll'}} >
      <div style={{ minWidth:'5000px', overflow: 'auto', height: '3000px' }}>
        <Demo_linechart />
      </div>
    </Col>
  </Row> */}
{/* <Row>
  <Col lx="12" md="12" id="LineChart">
    <ResizableBox 
      height={300}
      width={200}
      minConstraints={[1200, 1200]}
      maxConstraints={[1000, 1000]}
    >
      <div style={{ overflow: 'auto', height: '100%' }}>
        <Demo_linechart />
      </div>
    </ResizableBox >
  </Col>
</Row> */}
{/* 
<Row>
  <Col xs="12" md="6" id="LineChart" style={{ overflowX: 'auto' }}>
    <Resizable
      height={300}
      width={500}
      minConstraints={[200, 200]}
      maxConstraints={[1000, 1000]}
    >
      <div style={{ overflow: 'auto', height: '100%' }} onScroll={(e) => {
        const chartElement = document.getElementById('LineChart');
        if (chartElement) {
          const scrollLeft = e.target.scrollLeft;
          const clientWidth = e.target.clientWidth;
          chartElement.style.width = `${scrollLeft + clientWidth}px`;
        }
      }}>
        <Demo_linechart />
      </div>
    </Resizable>
  </Col>
</Row> */}






<Row>
  <Col xs="12" md="6" id="LineChart">
    <Resizable
      height={300}
      width={500}
      minConstraints={[200, 200]}
      maxConstraints={[1000, 1000]}
      onResize={(e, { size }) => {
        // Update the width of the chart dynamically
        const chartElement = document.getElementById('LineChart');
        if (chartElement) {
          chartElement.style.width = `${size.width}px`;
        }
      }}
    >
      <div style={{ overflow: 'auto', height: '100%' }}>
        <Demo_linechart />
      </div>
    </Resizable>
  </Col>
</Row>


{/* <Row>
  <Col xs="12" md="6" id="LineChart" style={{ overflowX: 'scroll' }}>
    <div style={{ whiteSpace: 'nowrap' }}>
      <Demo_linechart />
    </div>
  </Col>
</Row> */}

{/* <Row>
  <Col xs="12" md="6" id="LineChart" style={{ overflowX: 'scroll' }}>
    <div style={{ minWidth: '100%', overflowX: 'auto' }}>
      <Demo_linechart />
    </div>
  </Col>
</Row> */}


{/* 
  <Row>
    <Col xs="12" md="8" id="Square">
      <div style={{ height: '300px', width: '300px' }}>
        <Demo_linechart />
      </div>
    </Col>
  </Row> */}
</div>

        
        <Row>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Tasks(5)</h6>
                <p className="card-category d-inline">today</p>
                <Button
                  className="btn-icon btn-link float-right"
                  color="success"
                  id="tooltip877234600"
                  size="sm"
                >
                  <i className="tim-icons icon-simple-add" />
                </Button>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" />
                              <span className="form-check-sign" />
                            </label>
                          </div>
                        </td>
                        <td>
                          <p className="title">Update Documentation</p>
                          <p className="text-muted">Dwuamish Head, Seattle, WA 8:47 AM</p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-link"
                            color="success"
                            id="tooltip495507257"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <Button
                            className="btn-link"
                            color="danger"
                            id="tooltip601065010"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-trash-simple" />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" />
                              <span className="form-check-sign" />
                            </label>
                          </div>
                        </td>
                        <td>
                          <p className="title">Change Homepage</p>
                          <p className="text-muted">Creative Tim, Boston, MA 11:47 AM</p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-link"
                            color="success"
                            id="tooltip632877510"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <Button
                            className="btn-link"
                            color="danger"
                            id="tooltip457194718"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-trash-simple" />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" />
                              <span className="form-check-sign" />
                            </label>
                          </div>
                        </td>
                        <td>
                          <p className="title">Test New Functionality</p>
                          <p className="text-muted">Creative Tim, Boston, MA 2:47 PM</p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-link"
                            color="success"
                            id="tooltip145361783"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <Button
                            className="btn-link"
                            color="danger"
                            id="tooltip977691476"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-trash-simple" />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" checked />
                              <span className="form-check-sign" />
                            </label>
                          </div>
                        </td>
                        <td>
                          <p className="title">Test New Feature</p>
                          <p className="text-muted">Creative Tim, Boston, MA 3:47 PM</p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-link"
                            color="success"
                            id="tooltip129498441"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <Button
                            className="btn-link"
                            color="danger"
                            id="tooltip221844418"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-trash-simple" />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input className="form-check-input" type="checkbox" checked />
                              <span className="form-check-sign" />
                            </label>
                          </div>
                        </td>
                        <td>
                          <p className="title">Optimize CSS</p>
                          <p className="text-muted">Creative Tim, Boston, MA 9:47 PM</p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-link"
                            color="success"
                            id="tooltip402707287"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <Button
                            className="btn-link"
                            color="danger"
                            id="tooltip959076507"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-trash-simple" />
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <h4 className="card-title">2018 Sales</h4>
                <p className="card-category">All products including Taxes</p>
              </CardHeader>
              <CardBody>
                <div className="chart-area">{/* Chart component goes here */}</div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;

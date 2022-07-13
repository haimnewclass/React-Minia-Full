import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";
import { Row, Col, Card, CardBody, CardHeader } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const LoadingContainer = () => <div>Loading...</div>;
   document.title = "Google Maps | Minia - React Admin & Dashboard Template";

interface GoogleProps {
  google: Object;
  zoom: number;
}

const MapsGoogle = ({ google }: GoogleProps) => {

  function onMarkerClick() {
    alert("You clicked in this marker");
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Maps" breadcrumbItem="Google Maps" />

          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Markers</h4>
                  <p className="card-title-desc">
                    Example of google maps.
                  </p>
                </CardHeader>
                <CardBody>
                  <div
                    id="gmaps-markers"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    {/* <Map
                      google={google}
                      style={{ width: "100%", height: "100%" }}
                    >
                    </Map> */}
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Overlays</h4>
                  <p className="card-title-desc">
                    Example of google maps.
                  </p>
                </CardHeader>
                <CardBody>
                  <div
                    id="gmaps-overlay"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    {/* <Map
                      google={google}
                      style={{ width: "100%", height: "100%" }}
                      initialCenter={{
                        lat: 40.854885,
                        lng: -88.081807,
                      }}
                    >
                      <Marker
                        onClick={() => {
                          onMarkerClick();
                        }}
                      />
                    </Map> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Basic</h4>
                  <p className="card-title-desc">
                    Example of google maps.
                  </p>
                </CardHeader>
                <CardBody>
                  <div
                    id="gmaps-markers"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={google}
                      style={{ width: "100%", height: "100%" }}
                    ></Map>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Ultra Light</h4>
                  <p className="card-title-desc">
                    Example of google maps.
                  </p>
                </CardHeader>
                <CardBody>
                  <div
                    id="gmaps-overlay"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    {/* <Map
                      google={google}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <Marker
                        onClick={() => {
                          onMarkerClick();
                        }}
                      />
                    </Map> */}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(
  null,
  {}
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
    LoadingContainer: LoadingContainer,
  })(MapsGoogle)
);
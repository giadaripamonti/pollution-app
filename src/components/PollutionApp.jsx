import { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";

import ResultsTable from "./ResultsTable";
import CurrentWeather from "./CurrentWeather";
import CurrentPosition from "./CurrentPosition";

const ApiKey = "3ddd1d58f975dadc250ecff74638af9a";

class PollutionApp extends Component {
  state = {
    searchQuery: "",
    match: true,
    isLoading: false,
    city: "",
    lat: "",
    lon: "",
    country: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" +
          this.state.searchQuery +
          "&limit=1&appid=" +
          ApiKey
      );

      if (response.ok) {
        const city = await response.json();
        this.setState({
          city: city[0].name,
          lat: city[0].lat,
          lon: city[0].lon,
          country: city[0].country,
          searchQuery: "",
          isLoading: false,
        });
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Container id="app">
        <Row className="my-4">
          <h1>air quality monitor</h1>
        </Row>
        <Row className="my-3">
          <CurrentPosition apiKey={ApiKey} />
        </Row>
        <Row className="my-2">
          <Form onSubmit={this.handleSubmit}>
            <InputGroup className="mb-3 mw-100">
              <Form.Control
                className="d-block w-50"
                type="text"
                placeholder="type a city here"
                aria-describedby="basic-addon"
                required
                autoFocus
                value={this.state.searchQuery}
                onChange={(e) =>
                  this.setState({
                    searchQuery: e.target.value,
                    isLoading: true,
                  })
                }
              />
              <Button type="submit" variant="dark" id="button-addon">
                RESULTS
              </Button>
            </InputGroup>
          </Form>
        </Row>

        {this.state.searchQuery === "" && this.state.city === "" && (
          <Row className="text-center">
            <Alert
              style={{ backgroundColor: "rgba(199, 196, 193, 0.412)" }}
              className="w-100"
              variant="secondary"
            >
              <p>Search for a city and press results <br /> to see <strong>current weather</strong> and <strong>air pollution</strong>.</p>
              <svg
                className="w-50 d-block my-5"
                data-name="Layer 1"
                viewBox="0 0 881.63 587.66"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="150.92 561.32 164.21 564.92 184.41 515.4 164.8 510.08"
                  fill="#ffb6b6"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m303.08 731.06 40.848 11.064 0.13994-0.5166a16.473 16.473 0 0 0-11.592-20.205l-1e-3 -2.6e-4 -5.9279-7.6817-15.455 1.8903-3.5657-0.9658z"
                  fill="#2f2e41"
                />
                <polygon
                  points="242.64 572.85 256.4 572.85 262.95 519.76 242.64 519.76"
                  fill="#ffb6b6"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m398.53 743.21 42.319-0.00159v-0.53521a16.473 16.473 0 0 0-16.472-16.472h-1e-3l-7.7302-5.8645-14.423 5.8654-3.6942 1.3e-4z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m404.89 422.77 18.468 261.58-29.741 2.6353-41.492-193.86 4.5977 112.17-16.468 88.22-25.174-12.173 0.41815-91.859-33.051-148.44 8.7968-18.265z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m286.66 455.32-0.18455-0.25888c-9.8564-13.799 4.9677-46.958 7.2035-51.765a12.068 12.068 0 0 1-8.2604-12.889l0.96382-8.193 1.0047-8.0362-7.1974-7.1974-0.02024-0.1795-4.142-36.242-6.0223-24.072a52.848 52.848 0 0 1 15-51.216l13.921-2.2104 16.918-16.301h27.282l9.3544 8.9374c17.463 3.0626 20.463 2.0626 35.463 20.063l-6.8159 55.962-1.7003 7.6987 0.00506 10.442 4.3229 4.8042a14.95 14.95 0 0 1 3.5462 12.932l-0.56848 2.8423c4.4583 1.9106 8.7126 35.866 9.729 40.608l1.5183 7.0847c1.2989 1.714 9.8726 13.146 9.8726 16.271 0 0.4692-0.34634 0.92276-1.0896 1.4259-5.8429 3.9564-29.138 32.022-43.431 26.303-15.225-6.0876-75.747 3.0448-76.357 3.1378z"
                  fill="#3f3d56"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m283 390.24s7.006-39.595-0.05212-54.485l-28 2 4.2612 56.487 24.477 62.717a11.154 11.154 0 1 0 18.078-6.4629z"
                  fill="#ffb6b6"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m254.95 314.76 1.7329-18.871a54.107 54.107 0 0 1 19.403-36.752 23.687 23.687 0 0 1 24.787-3.2721 23.631 23.631 0 0 1 12.205 29.866c-6.4715 16.972-4.1347 34.921-16.753 37.11l1.371 6.5224-12.407 40.49-35.338-4.0935z"
                  fill="#3f3d56"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m393.73 443.94a11.154 11.154 0 1 0 18.994 2.7952l11.713-66.298-6.89-56.226-27.849 3.5254c-4.0034 15.985 10.625 53.439 10.625 53.439z"
                  fill="#ffb6b6"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m427.93 350.69-33.851 10.939-13.033-20.332 0.06631-6.6646c-12.803 0.32687-21.096-34.674-30.768-50.05a23.631 23.631 0 0 1 6.1158-31.679 23.687 23.687 0 0 1 24.948-1.6485 54.107 54.107 0 0 1 26.228 32.237l5.3972 18.166z"
                  fill="#3f3d56"
                />
                <circle cx="171.28" cy="42.575" r="30.299" fill="#ffb6b6" />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="M305.66026,219.94143c-.26446-.23195-.5141-.47961-.77258-.718-.00928.02444-.01068.04951-.02057.07388Z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m352.48 166.59a17.182 17.182 0 0 0-6.0672-5.8497 25.38 25.38 0 0 0-5.3038-1.8792l-4.795-1.3083a38.013 38.013 0 0 0-7.5441-1.519 19.418 19.418 0 0 0-17.737 9.6226c-1.4487 2.5696-2.6107 5.7716-5.4067 6.7116-2.2545 0.75806-4.7143-0.31122-7.0837-0.10377a8.5295 8.5295 0 0 0-6.4757 4.77 18.38 18.38 0 0 0-1.6989 8.1412 45.619 45.619 0 0 0 14.522 34.048c0.782-2.0613-0.506-4.2868-1.5242-6.2586-1.0302-1.9952-1.6669-4.7768 0.05859-6.2138 1.92-1.599 4.9962-0.04843 7.2668-1.0912a5.0733 5.0733 0 0 0 2.5361-4.0766c0.21979-1.6567-0.00967-3.3408 0.0943-5.0088a12.542 12.542 0 0 1 13.298-11.738q0.05671 0.00352 0.11343 0.00758c5.1685 0.36919 10.184 3.9009 15.158 2.448 2.3347-0.682 4.326-2.4185 6.7407-2.7106 2.6742-0.32351 5.1899 1.1857 7.4606 2.6348a26.596 26.596 0 0 0-3.612-20.627z"
                  fill="#2f2e41"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m510.81 726.19-7.71-12.39-1.54 7.0801c-0.27 1.24-0.54 2.5-0.79 3.75-2.19-1.8701-4.52-3.6001-6.7998-5.26q-10.5-7.6201-20.99-15.26l2.1899 12.7c1.3501 7.8201 2.7602 15.8 6.1001 22.95 0.37011 0.81006 0.77 1.6101 1.2002 2.3901h32.54a10.486 10.486 0 0 0 0.54-2.2401 0.77355 0.77355 0 0 0 0.00976-0.15c0.5103-4.8501-2.1699-9.4201-4.75-13.57z"
                  fill="#f0f0f0"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m548.67 743.37-315.36 0.30731a1.1907 1.1907 0 0 1 0-2.3814l315.36-0.30731a1.1907 1.1907 0 0 1 0 2.3814z"
                  fill="#cacaca"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m874.64 349.41a140.21 140.21 0 1 1-8.8769-49.372c0.30571 0.82337 0.60383 1.6466 0.8939 2.478v0.00787q1.941 5.4814 3.4191 11.167a141.16 141.16 0 0 1 4.5639 35.72z"
                  fill="#3f3d56"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m718.04 254.17a47.36 47.36 0 0 0-41.577-1.701c-5.8132 2.5299-11.934 7.0683-13.874 15.264 7.8433-4.6288 17.996 2.6847 20.014 14.417l-0.47109 0.12993c-1.066 8.1263 1.3137 16.974 5.9208 22.013a15.482 15.482 0 0 1 7.4313-11.021c3.385-2.2252 7.1297-3.8416 9.7134-7.6664 3.0629-4.5344 3.8407-11.161 5.0575-17.207s3.525-12.543 7.7844-14.228z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m674.14 323.32c-2.1722 3.2622-5.0736 5.309-7.6771 7.8576a17.673 17.673 0 0 0-5.5834 10.437c-0.3294 2.8388 0.1803 5.7244 0.10968 8.5947-0.07043 2.87-1.0273 6.1009-2.9798 6.8145-3.0819 1.1134-5.4345-4.611-8.6024-5.0109-2.5173-0.31367-4.7835 3.6465-4.0543 7.0812s4.1562 4.956 6.1245 2.7133c1.7801 2.9877 0.52534 8.4065-2.1487 9.3239-0.28238 1.882-0.56459 3.7563-0.8391 5.6383-6.7597-4.7286-13.59-9.5356-19.338-16.46a49.962 49.962 0 0 1-11.386-26.913c-0.745-7.9595 0.36069-17.064-3.2935-23.188-2.9251-4.9012-7.9439-5.9834-12.461-5.6775-0.82337 0.0548-1.6545 0.14893-2.478 0.25092a139.61 139.61 0 0 1 10.108-23.133 9.9026 9.9026 0 0 0 2.5329-1.5763c4.2033-3.568 6.0697-10.79 9.4808-15.786q0.32945-0.48231 0.68222-0.941c3.4897-4.5562 8.1634-6.9009 12.68-9.0809 9.9984-4.854 20.287-9.7709 30.842-9.0965l-3.0034 0.29016q-5.2579 14.727-10.524 29.454-0.8 2.2583-1.6154 4.5248c-1.9919 5.5833-4.0464 11.527-3.7405 17.777 0.18039 3.7013 1.4664 7.6537 3.913 8.924 2.282 1.1763 4.7757-0.26665 6.9791-1.6938 0.93323-0.596 1.8586-1.192 2.7917-1.7958 3.3485-2.1565 7.0576-4.3679 10.594-2.925 3.2387 1.3174 5.6304 5.7168 6.0852 10.461a20.914 20.914 0 0 1-3.1992 13.135z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m694.05 390.35q-14.669-9.0321-29.339-18.064l0.16592-0.4276c-6.0804 2.316-8.6049 13.124-7.6 21.963s4.4122 16.74 6.1335 25.353a67.294 67.294 0 0 1-2.5371 35.311 289.18 289.18 0 0 0 33.971-46.811 25.044 25.044 0 0 0 3.0729-6.8137 10.839 10.839 0 0 0-0.71849-7.7094 8.5832 8.5832 0 0 0-3.1491-2.8016z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m655.46 280.81a10.814 10.814 0 0 0-0.49559 7.8641 8.717 8.717 0 0 0 4.8702 4.5106l5.4036 2.6784c1.7976 0.8911 3.7354 1.7911 5.5679 1.0579 2.2103-0.88422 3.7429-4.3495 3.3465-7.5665-0.422-3.4233-2.5798-5.7781-4.5755-7.7833q-4.1892-4.2093-8.3784-8.4186l-1.574 1.9278a21.02 21.02 0 0 0-4.1648 5.7296z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m845.67 317.4q3.6466 0.85868 7.293 1.7173c-0.42353 8.2105-4.4934 15.809-9.9512 18.562-2.2742 1.145-4.807 1.5684-6.6891 3.7092-1.7016 1.9448-2.5643 4.9716-3.3563 7.8652q-2.0819 7.5753-4.164 15.15c-1.4899 5.4422-3.4032 11.488-7.2772 13.449-3.325 1.6859-7.1282-0.37651-9.6846-3.8347-2.5565-3.4581-4.1169-8.1084-5.6305-12.641 0.09413 4.9403-2.2035 9.7866-5.4579 11.504-3.2622 1.7173-7.2302 0.16465-9.4102-3.6699-1.5684-2.7525-2.2192-6.3833-3.7563-9.175-1.537-2.7916-4.7599-4.3914-6.4381-1.7722-1.1058 1.741-0.9646 4.4071-1.5136 6.6185a7.187 7.187 0 0 1-6.0067 5.7794 10.017 10.017 0 0 1-7.191-3.2858 32.574 32.574 0 0 1-8.9318-18.013 21.488 21.488 0 0 1 0.251-9.8493c0.96451-3.0503 3.2935-5.4028 5.6068-4.8227 1.5213-3.2153-1.482-7.4811-4.1875-7.1047-2.7134 0.37642-4.8384 3.2857-7.0655 5.5206-2.2192 2.2349-5.3245 3.8582-7.5595 1.6389a3.0665 3.0665 0 0 1-2.8722 3.2491q-0.12043 0.00746-0.241 0.00534a11.12 11.12 0 0 1-4.0542-2.1487c-5.1207-3.1917-11.622-1.0743-15.26 4.9638 2.2742-9.6768 5.6069-20.781 12.594-23.055 2.8546-0.93314 5.9678-0.16465 8.6653-1.7801 4.7758-2.8622 5.7403-13.676 1.6154-18.138 0.52535 4.2188 0.42353 9.1435-1.8036 12.029-2.2271 2.8859-6.9008 1.0037-6.6184-3.2622a2.8579 2.8579 0 0 1-5.3167 1.1292c-1.4821-2.2584-1.3566-5.9519-0.3058-8.6495a20.373 20.373 0 0 1 4.5718-6.493c3.7249-3.9914 7.5046-8.03 11.818-10.539 4.3208-2.5094 9.3083-3.3562 13.637-0.86252 2.2821 1.3173 4.2896 3.5131 6.6185 4.6737a4.9046 4.9046 0 0 0 6.7535-1.5816q0.03933-0.06334 0.07677-0.12795c1.733-3.0427 0.9174-7.5595 1.5605-11.363 1.1527-6.7204 7.8731-9.865 11.598-5.4266-2.7838-0.71355-5.6618 2.58-6.0068 6.5716-0.35282 3.9914 1.6626 8.0222 4.3601 9.2298 4.5326 2.0074 8.971-3.0427 12.398-7.7164q5.3637-7.34 10.743-14.672a17.727 17.727 0 0 1 1.9212-2.3369 6.182 6.182 0 0 1 8.4456-0.17248c3.6229 2.9563 5.3246 9.0181 8.2967 13.19 4.313 6.0617 10.767 7.536 16.774 8.7123q6.7164 1.3057 13.441 2.627a139.27 139.27 0 0 1 7.8026 17.229 47.221 47.221 0 0 0-20.091 17.37z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m870.07 313.69a28.265 28.265 0 0 0-1.49 8.3986c-3.8425-4.6894-4.4542-13.48-1.9291-19.565q1.941 5.4814 3.4191 11.167z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m860.14 411.76a140.59 140.59 0 0 1-11.684 19.55c-2.823-1.2077-5.8578 0.94878-8.5005 2.972-2.7604 2.1173-6.0774 4.1797-8.9083 2.2506-2.8936-1.9762-3.8268-7.5046-2.9093-11.888a31.676 31.676 0 0 1 5.4265-11.167c2.3526-3.5131 4.8697-7.1596 8.1399-8.524 3.2779-1.3644 7.4889 0.56459 8.4456 5.2227l2.3212-0.07849c-1.3018-1.7879-0.61947-5.4893 1.1293-6.1401 2.0153-0.76061 3.7641 2.0074 4.956 4.4542 0.53323 1.1057 1.0742 2.2193 1.584 3.3486z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m771.25 378.63c-4.9892 0.31376-8.9412-5.8282-11.567-11.871s-5.0223-12.952-9.5241-16.028c-2.5723-1.7574-5.5049-1.9985-8.2949-2.8502a10.271 10.271 0 0 1-7.0443-6.202l-3.1649-1.2785a47.53 47.53 0 0 0-12.016 8.5679 26.856 26.856 0 0 0-7.16 15.653c-0.60456 6.3349 1.6279 13.399 5.7994 15.778 3.2961 1.8804 7.1336 0.69516 10.472 2.4166 4.1715 2.1506 6.648 8.3984 7.5855 14.567s0.69985 12.58 1.3706 18.818 2.5192 12.73 6.3447 15.928c4.7871 4.0008 11.812 0.67634 13.959-6.6066 1.0535-3.5723 1.0172-7.6034 1.8052-11.312 1.3876-6.5305 5.1321-11.376 8.102-16.732s5.3078-12.632 3.3326-18.849z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m721.94 314.46a13.315 13.315 0 0 1 1.2993 1.3793 4.5314 4.5314 0 0 1-0.07976 4.6794 4.3531 4.3531 0 0 0 3.1176-1.5845 20.04 20.04 0 0 0 2.3904-3.3672 3.67 3.67 0 0 0 0.70483-2.9372c-0.23573-0.67264-0.79308-0.95955-1.1838-1.4654a9.959 9.959 0 0 1-1.0934-3.1758 5.728 5.728 0 0 0-4.151-4.3746l0.25 0.04783a2.3717 2.3717 0 0 0-1.1109 2.5264c0.15145 0.97854 0.78024 1.791 0.71767 2.789-0.09 1.4352-1.5242 2.1086-1.6128 3.544a2.7399 2.7399 0 0 0 0.75192 1.9391z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m713.4 290.07 0.02224-0.00434a4.0049 4.0049 0 0 0 0.4257-0.45346z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m714.89 296.81a4.3509 4.3509 0 0 0 1.3544-4.3132c-0.3624-1.6318-1.6452-2.729-2.8284-2.4276a2.8829 2.8829 0 0 1-2.6805 0.78919c-0.7315-0.18835-1.5346-0.67336-2.1691-0.12216a3.2839 3.2839 0 0 0-0.73883 1.4427q-0.35223 1.0814-0.70456 2.1625a1.3647 1.3647 0 0 0-0.08328 0.81948 0.69422 0.69422 0 0 0 0.5324 0.42326q2.1136 0.62309 4.2269 1.2461a3.6417 3.6417 0 0 0 3.091-0.02026z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m821.26 389.81q-0.97695-1.5995-1.9539-3.199a10.687 10.687 0 0 0-2.5747-3.2329 2.2814 2.2814 0 0 0-3.2139 0.28383l-0.034 0.0415 0.0793 0.60908a13.755 13.755 0 0 1 3.4318 6.6959c0.14847 1.0898 0.09684 2.2176 0.227 3.3121a3.8628 3.8628 0 0 0 1.2067 2.7014c1.0256 0.68512 2.2298-0.32506 2.9596-1.5577a5.3636 5.3636 0 0 0 0.831-3.4141 5.9866 5.9866 0 0 0-0.9589-2.2402z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m831.48 391.2a7.3835 7.3835 0 0 0-0.23844-2.9772 6.5356 6.5356 0 0 1 0.99454-3.7051 12.045 12.045 0 0 0 1.5496-3.3974 2.8419 2.8419 0 0 0-0.07432-1.6637c-0.21557-0.48429-0.73775-0.70519-1.0373-0.32171l0.641 0.41286a5.8371 5.8371 0 0 0-2.6012 0.126 3.2192 3.2192 0 0 0-1.9714 2.2224 13.756 13.756 0 0 1-0.517 2.3058c-0.38239 0.78594-1.1225 1.0473-1.5876 1.7372a4.1533 4.1533 0 0 0 0.06538 3.9457 4.6059 4.6059 0 0 0 2.6051 2.0487c0.78282 0.28089 1.8135 0.29572 2.1717-0.73345z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m849.67 396.69a8.9504 8.9504 0 0 0 1.1274 2.0692c0.87112 0.87744 2.0549 0.33817 3.1116 0.125a5.38 5.38 0 0 1 5.118 2.0528 13.027 13.027 0 0 0-7.4924-9.3475 22.011 22.011 0 0 0-7.7054-1.2049l-0.44749 0.11465c1.1403 3.3192 4.721 3.245 6.2882 6.1908z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="M772.6104,403.47974l.00651.01447.1302-.25074Z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m769.85 408.82a24.52 24.52 0 0 0-1.5485 3.4017 29.613 29.613 0 0 0-1.1223 5.8206c-0.14015 1.1218-0.18347 2.5545 0.51937 3.1011a0.99689 0.99689 0 0 0 1.3041-0.17714 5.1574 5.1574 0 0 0 0.94544-1.4052 32.372 32.372 0 0 0 3.1915-7.5746 13.181 13.181 0 0 0-0.52272-8.4947q-1.3833 2.6642-2.7669 5.3282z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m743.22 266.48a3.1424 3.1424 0 0 0 3.3867 0.661 11.183 11.183 0 0 0 3.1866-2.1049 7.4979 7.4979 0 0 0 1.9318-2.1073 4.274 4.274 0 0 0 0.39514-3.2557 3.3069 3.3069 0 0 0-2.5206-1.9939q-2.3459-0.69572-4.6918-1.3913l1.1314-1.0197c-1.164-0.62467-2.4517 0.53465-3.1792 1.97a10.606 10.606 0 0 0-0.96507 2.9708 7.6258 7.6258 0 0 0 1.325 6.2708z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m770.83 257.21a2.5835 2.5835 0 0 0 3.5212 0.28645 3.9361 3.9361 0 0 0 1.5574-2.8051c0.11067-1.2302-0.49759-2.5974-1.3663-2.7037l0.19883-1.1518c-1.6735-0.30223-3.7327-0.36277-4.6295 1.6695a4.7713 4.7713 0 0 0 0.7184 4.7046z"
                  fill="#f9a826"
                />
                <g opacity=".35">
                  <path
                    transform="translate(-156.37 -156.01)"
                    d="m1035.6 356.36c9.2354-4.0268-9.4939-6.3709-30.743-7.1416s-46.955-0.72807-60.534-2.9202c-13.133-2.1202-12.166-5.8899-13.27-9.3055s-6.1537-6.9176-26.647-7.6769c-25.537-0.94607-67.649 2.6957-86.927 0.50934-17.99-2.0403-7.2961-8.4404-33.528-8.6854-14.979-0.13988-34.277 1.9701-50.944 2.4793a185.72 185.72 0 0 1-35.348-1.843c-8.1239-1.331-13.782-3.0184-22.925-4.1941-24.004-3.0866-70.969-2.0491-112.89 1.9068s-77.848 10.439-98.112 16.86-25.862 12.743-21.142 18.104c3.0141 3.4233 10.727 6.6244 29.437 8 34.996 2.573 97.303-1.8559 133.46 0.48511 20.155 1.3047 29.096 4.5395 46.78 6.3095 18.998 1.9016 46.81 2.0024 74.135 1.9573 56.894-0.09394 115.24-0.67851 174.74-1.7504 24.851-0.44776 50.891-1.0299 77.335-3.1637s53.416-6.2509 58.995-10.11"
                    fill="#fff"
                  />
                </g>
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m875.02 534.21q-19.368 0-42.457-1.4639c-79.614-5.0557-182.74-22.633-290.38-49.492-107.64-26.859-206.93-59.794-279.59-92.734-35.393-16.047-62.556-31.236-80.735-45.147-19.247-14.727-27.666-27.564-25.024-38.153 5.148-20.629 50.731-25.142 88.064-25.295l0.01269 3c-51.268 0.21045-81.514 8.3867-85.166 23.022-4.6518 18.64 33.287 47.741 104.09 79.841 72.496 32.868 171.61 65.739 279.07 92.557 107.47 26.816 210.4 44.363 289.84 49.408 77.579 4.9277 124.74-2.9375 129.39-21.578 3.8618-15.477-21.598-38.275-71.689-64.198l1.3789-2.6641c36.397 18.836 78.646 45.852 73.222 67.589-2.6426 10.589-16.105 17.965-40.015 21.923-13.629 2.2558-30.37 3.3867-50.024 3.3867z"
                  fill="#f9a826"
                />
                <path
                  transform="translate(-156.37 -156.01)"
                  d="m382.37 538.12c-35.599 1e-3 -68.694-1.2207-98.322-3.6855-38.727-3.2227-69.415-8.4033-91.21-15.396-23.077-7.4053-35.319-16.667-36.388-27.528-2.083-21.158 39.334-40.725 74.445-53.413l1.0195 2.8223c-48.217 17.424-73.957 35.286-72.479 50.298 1.8818 19.119 47.392 33.781 124.86 40.228 79.325 6.6006 183.72 4.2617 293.95-6.5898 110.23-10.849 213.08-28.906 289.59-50.846 74.726-21.426 116.5-44.68 114.62-63.799-1.5625-15.874-33.203-28.793-89.092-36.379l0.40332-2.9726c40.61 5.5117 89.479 16.762 91.674 39.058 1.0693 10.861-9.1333 22.332-30.323 34.094-20.015 11.109-49.104 22.173-86.458 32.883-76.685 21.988-179.72 40.081-290.12 50.948-69.259 6.8164-136.25 10.279-196.17 10.279z"
                  fill="#f9a826"
                />
                <circle cx="437.85" cy="427.99" r="17.483" fill="#f9a826" />
                <circle cx="93.574" cy="324.77" r="17.483" fill="#e6e6e6" />
                <circle cx="414.57" cy="63.572" r="10.702" fill="#ff6584" />
                <circle cx="349.82" cy="137.58" r="17.483" fill="#e6e6e6" />
              </svg>
            </Alert>
          </Row>
        )}

        {!this.state.searchQuery && this.state.city && (
          <div>
            <Row>
              <CurrentWeather
                city={this.state.city}
                country={this.state.country}
                lat={this.state.lat}
                lon={this.state.lon}
                apiKey={ApiKey}
              />
            </Row>
            <Row className="my-3">
              <ResultsTable
                lat={this.state.lat}
                lon={this.state.lon}
                apiKey={ApiKey}
              />
            </Row>
          </div>
        )}
      </Container>
    );
  }
}

export default PollutionApp;
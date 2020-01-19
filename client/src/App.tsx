import React from "react";
import { DownIcon, UpIcon } from "./components/icons";
import {
  Button,
  Container,
  ControlPanel,
  CurrentSetTemp,
  RoomTemp,
  TempDisplay,
  ThermoStat,
  TimeDisplay
} from "./components/index";
import { fetchData, updateData } from "./service/index";

class App extends React.Component {
  static timer: any;
  state = {
    currentTime: new Date().toLocaleTimeString(),
    data: {
      currentSetpoint: 0,
      currentTemp: 0,
      timestamp: 0
    }
  };

  componentDidMount() {
    App.timer = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);
    this.getThermostatData();
  }

  componentWillUnmount() {
    clearInterval(App.timer);
  }

  getThermostatData = () => {
    fetchData().then(response => {
      if (response.status === 202) {
        this.getThermostatData();
      }

      if (response.data && response.data !== "") {
        this.setState({ data: response.data });
      }
    });
  };

  updateThermostatData = (requestedTemp: number) => {
    updateData(requestedTemp).then(res => {
      this.getThermostatData();
    });
  };

  increaseTemp = () => {
    const requestedTemp = this.state.data.currentSetpoint + 0.5;
    this.updateThermostatData(requestedTemp);
  };

  decreaseTemp = () => {
    const requestedTemp = this.state.data.currentSetpoint - 0.5;
    this.updateThermostatData(requestedTemp);
  };

  render() {
    const { data, currentTime } = this.state;
    return data ? (
      <Container>
        <ThermoStat>
          <TempDisplay>
            <ControlPanel>
              <Button onClick={this.increaseTemp}>
                <UpIcon />
              </Button>
              <CurrentSetTemp>{data.currentSetpoint}&#8451;</CurrentSetTemp>
              <Button onClick={this.decreaseTemp}>
                <DownIcon />
              </Button>
            </ControlPanel>
            <RoomTemp>
              <p>{data.currentTemp}&#8451;</p>
            </RoomTemp>
          </TempDisplay>
          <TimeDisplay>
            <p>
              Last updated at:{" "}
              {data.timestamp && new Date(data.timestamp).toLocaleTimeString()}
            </p>
            <p>{currentTime}</p>
          </TimeDisplay>
        </ThermoStat>
      </Container>
    ) : null;
  }
}

export default App;

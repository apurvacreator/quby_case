import styled from 'styled-components';

export const Container = styled.div`
  margin: 200px auto;
  width: 50%;
  font-family: Arial;
`;

export const ThermoStat = styled.div`
  margin: auto;
  width: 400px;
  border: 3px solid #000;
  border-radius: 10px;
  background-image: linear-gradient(black, gray);
`;

export const ControlPanel = styled.div`
  text-align: center;
  border: 6px solid gray;
  border-radius: 50%;
  width: 175px;
  margin: 35px auto;
  padding: 20px;
  background: #fff;
`;

export const RoomTemp = styled.div`
  position: absolute;
  top: 10px;
  right: 30px;
  color: #fff;
`;

export const CurrentSetTemp = styled.p`
  font-size: 20px;
  margin: 10px 0 0;
`;

export const TempDisplay = styled.div`
  position: relative;
`;

export const TimeDisplay = styled.div`
  text-align: center;
  margin: 25px;
  color: #fff;
`;

export const Button = styled.button`
  width: 50px;
  height: 25px;
  margin: 10px;
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
`;

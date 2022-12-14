import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from "enzyme";
import App from './App';


configure({adapter: new Adapter() });

const bignums = [25, 50, 75, 100];

describe("Automated Test Suite", () => {
  it("target within range", () => {
    const wrapper = shallow(<App />); //ARRANGE
    wrapper.instance().target(); //ACT
    //ASSERT
    expect(wrapper.state('target')).toBeGreaterThan(99);
    expect(wrapper.state('target')).toBeLessThan(1000);
  });

  it("1big only generates one big number and five small number", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().oneBig();
    expect(bignums).toContain(wrapper.state('num1'));
    expect(wrapper.state('num2')).toBeGreaterThan(0);
    expect(wrapper.state('num2')).toBeLessThan(11);
    expect(wrapper.state('num3')).toBeGreaterThan(0);
    expect(wrapper.state('num3')).toBeLessThan(11);
    expect(wrapper.state('num4')).toBeGreaterThan(0);
    expect(wrapper.state('num4')).toBeLessThan(11);
    expect(wrapper.state('num5')).toBeGreaterThan(0);
    expect(wrapper.state('num5')).toBeLessThan(11);
    expect(wrapper.state('num6')).toBeGreaterThan(0);
    expect(wrapper.state('num6')).toBeLessThan(11);
  });
  
  it("2big only generates two big number and four small number", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().twoBig();
    expect(bignums).toContain(wrapper.state('num1'));
    expect(bignums).toContain(wrapper.state('num2'));
    expect(wrapper.state('num3')).toBeGreaterThan(0);
    expect(wrapper.state('num3')).toBeLessThan(11);
    expect(wrapper.state('num4')).toBeGreaterThan(0);
    expect(wrapper.state('num4')).toBeLessThan(11);
    expect(wrapper.state('num5')).toBeGreaterThan(0);
    expect(wrapper.state('num5')).toBeLessThan(11);
    expect(wrapper.state('num6')).toBeGreaterThan(0);
    expect(wrapper.state('num6')).toBeLessThan(11);
  });

  it("3big only generates three big number and three small number", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().threeBig();
    expect(bignums).toContain(wrapper.state('num1'));
    expect(bignums).toContain(wrapper.state('num2'));
    expect(bignums).toContain(wrapper.state('num3'));
    expect(wrapper.state('num4')).toBeGreaterThan(0);
    expect(wrapper.state('num4')).toBeLessThan(11);
    expect(wrapper.state('num5')).toBeGreaterThan(0);
    expect(wrapper.state('num5')).toBeLessThan(11);
    expect(wrapper.state('num6')).toBeGreaterThan(0);
    expect(wrapper.state('num6')).toBeLessThan(11);
  });
  it("4big only generates four big number and two small number", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().fourBig();
    expect(bignums).toContain(wrapper.state('num1'));
    expect(bignums).toContain(wrapper.state('num2'));
    expect(bignums).toContain(wrapper.state('num3'));
    expect(bignums).toContain(wrapper.state('num4'));
    expect(wrapper.state('num5')).toBeGreaterThan(0);
    expect(wrapper.state('num5')).toBeLessThan(11);
    expect(wrapper.state('num6')).toBeGreaterThan(0);
    expect(wrapper.state('num6')).toBeLessThan(11);
  });
  it("0big only generates no big number and six small number", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().zeroBig();
    expect(wrapper.state('num1')).toBeGreaterThan(0);
    expect(wrapper.state('num1')).toBeLessThan(11);
    expect(wrapper.state('num2')).toBeGreaterThan(0);
    expect(wrapper.state('num2')).toBeLessThan(11);
    expect(wrapper.state('num3')).toBeGreaterThan(0);
    expect(wrapper.state('num3')).toBeLessThan(11);
    expect(wrapper.state('num4')).toBeGreaterThan(0);
    expect(wrapper.state('num4')).toBeLessThan(11);
    expect(wrapper.state('num5')).toBeGreaterThan(0);
    expect(wrapper.state('num5')).toBeLessThan(11);
    expect(wrapper.state('num6')).toBeGreaterThan(0);
    expect(wrapper.state('num6')).toBeLessThan(11);
  });
});

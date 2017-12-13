import * as React from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import CreateIcon from 'material-ui-icons/Create';
import FitnessIcon from 'material-ui-icons/FitnessCenter';
import StepsIcon from 'material-ui-icons/DirectionsRun';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MoodIcon from 'material-ui-icons/Mood';
import MoodBadIcon from 'material-ui-icons/MoodBad';
import SatisfiedIcon from 'material-ui-icons/SentimentSatisfied';
import DissatisfiedIcon from 'material-ui-icons/SentimentDissatisfied';
import NeutralIcon from 'material-ui-icons/SentimentNeutral';
import IconButton from 'material-ui/IconButton';
import '../UpdateDataComponent.css';
import * as Recharts from 'recharts';
import TextField from 'material-ui/TextField';

function TabContainer(props: any) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

export default class IconLabelTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event: any, value: any) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <Paper style={{ width: 500 }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="accent"
          textColor="accent"
        >
          <Tab icon={<CreateIcon />} label="EDIT" />
          <Tab icon={<FitnessIcon />} label="WEIGHT" />
          <Tab icon={<StepsIcon />} label="STEPS" />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <EditTab />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <WeightTab />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <StepsTab />
          </TabContainer>
        )}
      </Paper>
    );
  }
}

class EditTab extends React.Component<{}, { weight: number; height: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      weight: 60,
      height: 160
    };
  }
  weightAdjust(i: number) {
    const weight = this.state.weight;
    this.setState({ weight: Math.round((weight + i) * 10) / 10 });
  }
  heightAdjust(i: number) {
    const weight = this.state.height;
    this.setState({ height: Math.round((weight + i) * 10) / 10 });
  }

  render() {
    return (
      <div>
        <h4 className="tab-center">Weight</h4>
        <div className="tab-center">
          <Button color="primary" onClick={() => this.weightAdjust(1)}>
            + 1
          </Button>
          <Button color="primary" onClick={() => this.weightAdjust(0.1)}>
            + 0.1
          </Button>
          <b className="row-margin">{this.state.weight}</b>
          <Button color="accent" onClick={() => this.weightAdjust(-0.1)}>
            - 0.1
          </Button>
          <Button color="accent" onClick={() => this.weightAdjust(-1)}>
            - 1
          </Button>
        </div>
        <h4 className="tab-center">Height</h4>
        <div className="tab-center">
          <Button color="primary" onClick={() => this.heightAdjust(1)}>
            + 1
          </Button>
          <Button color="primary" onClick={() => this.heightAdjust(0.1)}>
            + 0.1
          </Button>
          <b className="row-margin">{this.state.height}</b>
          <Button color="accent" onClick={() => this.heightAdjust(-0.1)}>
            - 0.1
          </Button>
          <Button color="accent" onClick={() => this.heightAdjust(-1)}>
            - 1
          </Button>
        </div>
        <h4 className="tab-center">How are you feeling?</h4>
        <div className="tab-center">
          <IconButton color="primary">
            <MoodIcon />
          </IconButton>
          <IconButton color="primary">
            <SatisfiedIcon />
          </IconButton>
          <IconButton>
            <NeutralIcon />
          </IconButton>
          <IconButton color="accent">
            <DissatisfiedIcon />
          </IconButton>
          <IconButton color="accent">
            <MoodBadIcon />
          </IconButton>
        </div>
        <h4 className="tab-center">Did you eat healthy?</h4>
        <div className="tab-center">
          <Button color="primary">Yes</Button>
          <Button color="accent">No</Button>
        </div>
        <br />
        <div className="tab-center">
          <Button raised color="primary">
            Done
          </Button>
        </div>
      </div>
    );
  }
}

class StepsTab extends React.Component<{}, { goal: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      goal: 10000
    };
  }
  handleChange = (name: any) => (event: any) => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h2 className="tab-center">Steps-o-meter</h2>
        <div className="align-input-right">
          <TextField
            id="goal"
            label="Set daily goal"
            type="number"
            value={this.state.goal}
            onChange={this.handleChange('goal')}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
        </div>
        <table>
          <tr>
            <td>Today</td>
            <td>
              <Paper
                style={{ background: '#1573ff', width: 370 }}
                className="tab-center"
              >
                <b style={{ color: 'white' }}>11000</b>
              </Paper>
            </td>
          </tr>
          <tr>
            <td>Yesterday</td>
            <td>
              <Paper
                style={{ background: '#ff4081', width: 160 }}
                className="tab-center"
              >
                <b style={{ color: 'white' }}>4500</b>
              </Paper>
            </td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>
              <Paper
                style={{ background: '#ff4081', width: 180 }}
                className="tab-center"
              >
                <b style={{ color: 'white' }}>5000</b>
              </Paper>
            </td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>
              <Paper
                style={{ background: '#1573ff', width: 380 }}
                className="tab-center"
              >
                <b style={{ color: 'white' }}>11400</b>
              </Paper>
            </td>
          </tr>
          <tr>
            <td>07.12.</td>
            <td>
              <Paper
                style={{ background: '#1573ff', width: 350 }}
                className="tab-center"
              >
                <b style={{ color: 'white' }}>10000</b>
              </Paper>
            </td>
          </tr>
          <tr>
            <td>06.12.</td>
            <td>
              <Paper
                style={{ background: '#ff4081', width: 200 }}
                className="tab-center"
              >
                <b style={{ color: 'white' }}>7000</b>
              </Paper>
            </td>
          </tr>
          <tr>
            <td>05.12.</td>
            <td>
              <Paper
                style={{ background: '#ff4081', width: 190 }}
                className="tab-center"
              >
                <b style={{ color: 'white' }}>5700</b>
              </Paper>
            </td>
          </tr>
          <tr>
            <td>04.12.</td>
            <td>
              <Paper
                style={{ background: '#1573ff', width: 360 }}
                className="tab-center"
              >
                <b style={{ color: 'white' }}>10500</b>
              </Paper>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

class WeightTab extends React.Component {
  render() {
    return (
      <div>
        <h2 className="tab-center">Weight loss chart</h2>
        <SimpleLineChart />
        <h3 className="tab-center">Your ideal weight is: 58 kg</h3>
        <h3 className="tab-center">
          You will reach it in 2 months <MoodIcon color="primary" />
        </h3>
      </div>
    );
  }
}
const {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} = Recharts;
const data = [
  { name: 'Jan', kg: 65, goal: 64, amt: 100 },
  { name: 'Feb', kg: 64, goal: 63, amt: 100 },
  { name: 'Mar', kg: 65, goal: 62.5, amt: 100 },
  { name: 'Apr', kg: 63, goal: 62, amt: 100 },
  { name: 'Jun', kg: 61, goal: 61, amt: 100 },
  { name: 'Jul', kg: 60, goal: 60, amt: 100 },
  { name: 'Aug', kg: 57, goal: 59, amt: 100 }
];
class SimpleLineChart extends React.Component {
  render() {
    return (
      <LineChart
        width={450}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        className="tab-center"
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="kg"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="goal" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

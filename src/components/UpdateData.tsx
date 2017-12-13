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
          <IconButton>
            <MoodBadIcon />
          </IconButton>
          <IconButton>
            <DissatisfiedIcon />
          </IconButton>
          <IconButton>
            <NeutralIcon />
          </IconButton>
          <IconButton>
            <SatisfiedIcon />
          </IconButton>
          <IconButton>
            <MoodIcon />
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

class StepsTab extends React.Component {
  render() {
    return <div>JEE JEE JERRY COTTON</div>;
  }
}

class WeightTab extends React.Component {
  render() {
    return <div />;
  }
}

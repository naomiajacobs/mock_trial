import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { blueGreyDeepOrange } from 'themes'

import NewTournamentForm from 'components/NewTournamentForm'

// import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
// import { Tabs, Tab } from 'material-ui/Tabs'
// import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';
//
// class TabsControlled extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'a',
//     };
//   }
//
//   handleChange(value) {
//     this.setState({
//       value: value,
//     });
//   }
//
//   render() {
//     return (
//       <Tabs
//         value={this.state.value}
//         onChange={this.handleChange.bind(this)}
//         >
//         <Tab label="Tab A" value="a" >
//           <div>
//             <h2>Controllable Tab A</h2>
//             <p>
//               Tabs are also controllable if you want to programmatically pass them their values.
//               This allows for more functionality in Tabs such as not
//               having any Tab selected or assigning them different values.
//             </p>
//           </div>
//         </Tab>
//         <Tab label="Tab B" value="b">
//           <div>
//             <h2>Controllable Tab B</h2>
//             <p>
//               This is another example of a controllable tab. Remember, if you
//               use controllable Tabs, you need to give all of your tabs values or else
//               you wont be able to select them.
//             </p>
//           </div>
//         </Tab>
//       </Tabs>
//     );
//   }
// }
//
// class CardControlled extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       expanded: false,
//     };
//   }
//
//   handleExpandChange(expanded) {
//     this.setState({expanded: expanded});
//   }
//
//   handleToggle(event, toggle) {
//     this.setState({expanded: toggle});
//   }
//
//   handleExpand() {
//     this.setState({expanded: true});
//   }
//
//   handleReduce() {
//     this.setState({expanded: false});
//   }
//
//   render() {
//     return (
//       <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange.bind(this)}>
//         <CardHeader
//           title="URL Avatar"
//           subtitle="Subtitle"
//           avatar="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"
//           showExpandableButton={true}
//         />
//         <CardText>
//           <Toggle
//             toggled={this.state.expanded}
//             onToggle={this.handleToggle.bind(this)}
//             labelPosition="right"
//             label="This toggle controls the expanded state of the component."
//           />
//         </CardText>
//         <CardMedia expandable={true}>
//           <TabsControlled />
//         </CardMedia>
//         <CardActions>
//           <FlatButton label="Expand" onTouchTap={this.handleExpand.bind(this)} />
//           <FlatButton label="Reduce" onTouchTap={this.handleReduce.bind(this)} />
//         </CardActions>
//       </Card>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={blueGreyDeepOrange}>
        <div>
          <AppBar title="Mock Trial Tournament Runner" />
          <NewTournamentForm />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App

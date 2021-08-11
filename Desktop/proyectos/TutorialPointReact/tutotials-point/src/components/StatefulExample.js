import React from 'react';

class StatefulExample extends React.Component {
   constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"john",
               "age":"20"
            },
            {
               "id":2,
               "name":"Paco",
               "age":"30"
            },
            {
               "id":3,
               "name":"Julie",
               "age":"40"
            },
            {
                "id":4,
                "name":"Victor",
                "age":"38"
            }
         ]
      }
   }
   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
            <p>
               
            </p>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}
export default StatefulExample;
import React, {createContext} from 'react';

export const DataContext = createContext();

export class DataContextProvider extends React.Component {
  state = {
    dataList: [
      {
        id: "1",
        date: "2020-06-12",
        type: "transportation",
        description: " --- ",
        amount: 21.9
      },
      {
        id: "2",
        date: "2020-08-10",
        type: "food",
        description: " --- ",
        amount: 40.0
      },
      {
        id: "3",
        date: "2020-07-10",
        type: "buy",
        description: " --- ",
        amount: 102.0
      }
    ]
  }
  render() {
    return (
      <DataContext.Provider value={{...this.state}}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;
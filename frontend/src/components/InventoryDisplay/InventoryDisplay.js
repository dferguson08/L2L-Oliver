import React, { Component } from 'react';

class InventoryDisplay extends Component {
  constructor () {
        // function on top of any js class. Going to construct an instance of a class.
        // only happens once - whenever the instance of a class is called.
    super();
    this.state = {
        inventory: [],
        currentlyLoadingInventory: false
      };
  }

    // next lifecycle hook:
  componentDidMount () {
        // look at react documentation***
        // component is created 'constructor', but isn't visible. Mounting is the action of putting it on the screen, or putting it on the DOM.
        // componentWillMount and componentDidMound are the two actions "at this point, something needs to display on the screen for this component"
        // componentWillMount is a little less reliable and is generally avoided. Also, you can't change the "state"
        // to make an API call we need a library "of some kind".
        //     Mike likes fetch

    this.setState((state) => {
        return {
          currentlyLoadingInventory: true
        };
      });
            // need to "say that we're loading inventory
            // call the API for inventory
            // save inventory response to state
            // say that we're done loading

            // call the API for Inventory
    fetch('http://localhost:3000/inventory')
            .then((resp) => resp.json())
            .then((data) => {
                // Save inventory response to state.
              this.setState(() => {
                return {
                  inventory: [].concat(data.vehicles),
                    // say that we're done loading inventory
                  currentlyLoadingInventory: false
                };
              });
            });
  }
  render () {
    return (
        // inside here, using jsx you can add any basic HTML element or react components
        <div>
            {this.state.currentlyLoadingInventory && <h3>Loading...</h3>}
            {!this.state.currentlyLoadingInventory && <div>
                {this.state.inventory.map((item) => {
                    return (
                        <div>
                            <div>{item.year} {item.make} {item.model}</div>
                            <div>{item.vin}</div>
                        </div>
                        // ^ turn this into its own component so that we can pass "things" into it.
                    );
                })}
                </div>}
        </div>
    );
  }
}

export default InventoryDisplay;

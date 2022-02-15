import React from 'react'
import EventBinding from '../Backup/Event Binding/EventBinding'
class App extends React.Component{
    render()
    {
        return<>
        <h4>Event Binding tells the browser that this function should be called whenever this event is 
        triggered or in other words whenever the event is trigged the function, which is bind with the event
        should be called</h4>
        <EventBinding/>
        </>
    }
}
export default App;

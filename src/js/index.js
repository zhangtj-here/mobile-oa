import {create} from './create.js';
import Container from './Container.js';
import Header from './Header.js';
import Tab from './Tab.js';

let c = <Container>
    <Header>
        <Tab><Tab>aa</Tab></Tab>
        
        <Tab>bb</Tab>
        <Tab>cc</Tab>
    </Header>
</Container>;

c.appendTo(document.body);



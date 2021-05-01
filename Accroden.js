import React,{useState} from 'react';
import { List } from 'react-native-paper';

const Accroden = () => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Select">
      <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon {...props} icon="email" />}>
        <List.Item onPress={()=>alert('work')} title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="face" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
  );
};

export default Accroden;
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import VisualNumber from '../components/VisualNumber'
import NumberList from '../containers/NumberList'
import Note from '../components/Note'
import Radarchart from '../components/Radarchart'
import Notes from '../containers/Notes'
import Piechart from '../components/Piechart'
import RadialPie from '../components/RadialPie'
import ToDo from '../components/ToDo'
import TodoList from '../containers/TodoList'
import Weather from '../components/Weather'
import ListOfTDL from '../containers/ListOfTDL'
import Timer from '../components/Timer'

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));



const numbers=[{logo:require("../icons/number.png"), title:"amis Facebook", quantity:"5400"},
{logo:require("../icons/computer.png"), title:"Followers Twitter", quantity:"43400"},
{logo:require("../icons/number.png"), title:"Fan Instagram", quantity:"2"},
{logo:require("../icons/number.png"), title:"Fan Instagram", quantity:"2"},
{logo:require("../icons/number.png"), title:"Fan Instagram", quantity:"2"},
{logo:require("../icons/number.png"), title:"Fan Instagram", quantity:"2"},
{logo:require("../icons/number.png"), title:"Fan Instagram", quantity:"2"},
]

storiesOf('VisualNumbers',module)
	.add('visualnumber', () => <VisualNumber logo={require("../icons/number.png")} title="Amis Facebook" quantity="400"/>)
  .add('NumberList', () => <NumberList numbers={numbers}/>)

const notes=[
{title:'ho1', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},
{title:'ho2', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},
{title:'ho 3', note:"encore une note ", date:'01/01/10'},
{title:'ho 4e', note:"j'ecrit vlllaaaa les notes dans mon carnet de note que je me repetttteee sans arret, je met plusieur fois la meme lettre pour appuyer le mot", date:'01/01/10'},
{title:'ho5e', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},
{title:'h6', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},
{title:'h7', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},
{title:'h8', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},
{title:'h9', note:"j'ecrit vlllaaaa les notes dans mon carnet de note", date:'01/01/10'},
]	


storiesOf('Notes',module)
	.add('one note', () => <Note title="Damn Good Idea" note="les oiseaux sont les poissons du ciel!!!!!!!!!!!!!" date="03/04/2030" onClick={action('clicked')}/>)
	.add('plusieurs notes',()=> <Notes notes={notes}/>)


const datas = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
];

const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];
const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];

const datasPC = {data01,data02}

const dataRP = [
      {name: 'Facebook', Followers: 2400, fill: '#8884d8'},
      {name: 'Twitter', Followers: 4567, fill: '#83a6ed'},
      {name: 'Instagram', Followers: 1398, fill: '#8dd1e1'},
      
    ];

storiesOf('chart',module)
  .add('radarChart', () => <Radarchart data={datas} />)
  .add('Piechart', ()=> <Piechart data={datasPC}/>)
  .add('RadialChart', () => <RadialPie data={dataRP} />)

const Todos = [
  {ToDo:'manger chez mamie',checked:false},
  {ToDo:'acheter des pattes',checked:true},
  {ToDo:'vendre le chien',checked:true}, 
  {ToDo:'acheter la drogue',checked:false},
]

  storiesOf('ToDo List', module)
    .add('ToDo elem', () => <ToDo todo="acheter du painnfinogn reoihgrio firehgi rhgi rhgihrig hrihgrihgi rhgih righrihgi" />)
    .add('ToDo List', () => <TodoList TodoListName="truc pour maman" todos={Todos} />)
    .add('list of TodoList', () => <ListOfTDL />)

storiesOf('weather',module)
  .add('weather',() => <Weather city="Paris"/>)

storiesOf('clock',module)
  .add('time',() => <Timer/>)





	
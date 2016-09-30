import { State } from 'walts';


export interface IncrementState {
  counter: number;
}

export interface OtherState {
  prop: string;
}

export interface AppState extends State {
  increment?: IncrementState;
  other?: OtherState;
}

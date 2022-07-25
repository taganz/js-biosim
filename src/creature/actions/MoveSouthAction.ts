import Creature from "../Creature";
import CreatureAction from "./CreatureAction";

export default class MoveSouthAction extends CreatureAction {
  execute(creature: Creature, input: number): void {
    if (input > 0) {
      creature.addUrgeToMove(0, input);
    }
  }
}

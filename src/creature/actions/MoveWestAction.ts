import Creature from "../Creature";
import CreatureAction from "./CreatureAction";

export default class MoveWestAction extends CreatureAction {
  execute(creature: Creature, input: number): void {
    if (input > 0) {
      creature.addUrgeToMove(-input, 0);
    }
  }
}

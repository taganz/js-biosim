import World from "../../world/World";
import Creature from "../Creature";
import SelectionMethod from "./SelectionMethod";

// return all creatures alive and in a area of type 0
export default class InsideReproductionAreaSelection
  implements SelectionMethod
{
  getSurvivors(world: World): Creature[] {
    const parents = [];

    for (const creature of world.currentCreatures) {
      const gridPoint = world.grid[creature.position[0]][creature.position[1]];

      if (
        creature.isAlive &&
        gridPoint.areas.find((area) => area.areaType === 0)  // there is an area of type 0 at creature position
      ) {
        parents.push(creature);
      }
    }

    return parents;
  }
}

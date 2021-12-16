export default class Trail {
  constructor({ trailName, state, distance, difficulty, terrain }) {
    this.trailName = trailName;
    this.state = state;
    this.distance = distance;
    this.difficulty = difficulty;
    this.terrain = terrain;
  }

  validate() {
    const errors = [];

    if (!this.trailName) {
      errors.push("Trail Name is required");
    }

    if (!this.state) {
      errors.push("State is required");
    }

    if (!this.distance) {
      errors.push("Distance is required");
    }

    if (!this.difficulty) {
      errors.push("Difficulty is required");
    }

    if (!this.terrain) {
      errors.push("Terrain is required");
    }

    return errors;
  }
}

export class User {
  public name: string = '';
  public status: string = '';
  public avatar: string = '';
  public banner: string = '';
  public description: string = '';
  constructor(
    obj: any
  ){
    this.name = obj.name || '';
    this.status = obj.status || '';
    this.avatar = obj.avatar || '';
    this.banner = obj.banner || '';
    this.description = obj.description || '';
  }
}

export const UserMockData = {
  name: "Demo user",
  status: 'This is a demo user',
  avatar: '',
  banner: '',
  description: `When the story begins, a mother duck's eggs hatch. One of the little birds is perceived by the other birds and animals on the farm as an ugly little creature and suffers much verbal and physical abuse from them. He wanders sadly from the barnyard and lives with wild ducks and geese until hunters slaughter the flocks. He finds a home with an old woman, but her cat and hen tease and taunt him mercilessly, and once again he sets off alone.

  The duckling sees a flock of migrating wild swans. He is delighted and excited, but he cannot join them, for he is too young, too ugly, and he cannot fly. Winter arrives. A farmer finds and carries the freezing little duckling home, but the foundling is frightened by the farmer's noisy children and flees the house. He spends a miserable winter alone in the outdoors, mostly hiding in a cave on the lake that partly freezes over. When spring arrives, a flock of swans descends on the lake.

  The ugly duckling, now having fully grown and matured, is unable to endure a life of solitude and hardship any more and decides to throw himself at the flock of swans deciding that it is better to be killed by such beautiful birds than to live a life of ugliness and misery. He is shocked when the swans welcome and accept him, only to realize by looking at his reflection in the water that he had been not a duckling, but a swan all this time. The flock takes to the air, and the now beautiful swan spreads his gorgeous large wings and takes flight with the rest of his new family.`
}

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field({ nullable: true })
  name?: string;
}

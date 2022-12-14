import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserGroupCount {

    @Field(() => Int, {nullable:false})
    users?: number;
}

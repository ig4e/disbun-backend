import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserGroup } from '../user-group/user-group.model';

@ObjectType()
export class GroupImage {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => UserGroup, {nullable:false})
    group?: UserGroup;

    @Field(() => String, {nullable:false})
    userGroupId!: string;
}

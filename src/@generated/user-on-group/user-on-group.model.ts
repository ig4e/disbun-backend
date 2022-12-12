import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { UserGroup } from '../user-group/user-group.model';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserOnGroup {

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    owner!: boolean;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => UserGroup, {nullable:false})
    group?: UserGroup;

    @HideField()
    groupId!: string;

    @HideField()
    userId!: string;
}

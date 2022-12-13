import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { UserGroup } from '../user-group/user-group.model';

@ObjectType()
export class UserOnGroup {

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    owner!: boolean;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => UserGroup, {nullable:false})
    group?: UserGroup;

    @Field(() => String, {nullable:false})
    groupId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}

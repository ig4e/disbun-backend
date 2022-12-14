import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GroupImage } from '../group-image/group-image.model';
import { UserOnGroup } from '../user-on-group/user-on-group.model';
import { GroupChannel } from '../group-channel/group-channel.model';
import { UserGroupCount } from './user-group-count.output';

@ObjectType()
export class UserGroup {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => GroupImage, {nullable:true})
    image?: GroupImage | null;

    @Field(() => [UserOnGroup], {nullable:true})
    users?: Array<UserOnGroup>;

    @Field(() => GroupChannel, {nullable:true})
    channel?: GroupChannel | null;

    @Field(() => UserGroupCount, {nullable:false})
    _count?: UserGroupCount;
}

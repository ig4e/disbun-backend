import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { RelationStatus } from '../prisma/relation-status.enum';
import { HideField } from '@nestjs/graphql';
import { DmChannel } from '../dm-channel/dm-channel.model';

@ObjectType()
export class UserRelation {

    @Field(() => User, {nullable:false})
    relatedUser?: User;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => RelationStatus, {nullable:false,defaultValue:'NONE'})
    status!: keyof typeof RelationStatus;

    @HideField()
    relatedUserId!: string;

    @HideField()
    userId!: string;

    @Field(() => DmChannel, {nullable:true})
    channel?: DmChannel | null;
}
